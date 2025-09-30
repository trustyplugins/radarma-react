import React, { useEffect, useMemo, useState } from 'react';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import * as Icon from 'react-feather';
import { all_routes } from '../../../core/data/routes/all_routes';
import supabase from '../../../supabaseClient';

type Role = 'A1' | 'A2' | null;
type SortOpt = { name: string; key: 'az' | 'za' | 'new' | 'old' };
const sortOptions: SortOpt[] = [
  { name: 'A - Z', key: 'az' },
  { name: 'Z - A', key: 'za' },
  { name: 'Newest', key: 'new' },
  { name: 'Oldest', key: 'old' },
];

/** Raw row from listings (IDs only) */
type ListingRaw = {
  id: string;
  title: string;
  city_id: number[] | null;
  sector_ids: number[] | null;
  main_category_ids: number[] | null;
  sub_category_ids: number[] | null;
  tag_ids: number[] | null;
  sub_tag_ids: number[] | null;
  price: number | null;
  status: string;
  slug: string;
  user_id: string | null;
  created_at: string;
  gallery_urls: string[] | null;
};

/** Row we render (names resolved) */
type ListingRow = {
  id: string;
  title: string;
  city: string;              // single name
  sector: string;            // comma-joined
  main_category: string;     // comma-joined
  sub_category: string;      // comma-joined
  tags: string;              // comma-joined
  sub_tags: string;          // comma-joined
  status: string;
  slug: string;
  user_id: string | null;
  created_at: string;
  gallery_urls: string[] | null;
};

const AllService: React.FC = () => {
  const routes = all_routes;

  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<Role>(null);
  const [selectedSort, setSelectedSort] = useState<SortOpt>(sortOptions[2]);
  const [rows, setRows] = useState<ListingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // --- lookup maps ---
  const [cityMap, setCityMap] = useState<Record<number, string>>({});
  const [sectorMap, setSectorMap] = useState<Record<number, string>>({});
  const [mainCatMap, setMainCatMap] = useState<Record<number, string>>({});
  const [subCatMap, setSubCatMap] = useState<Record<number, string>>({});
  const [tagMap, setTagMap] = useState<Record<number, string>>({});
  const [subTagMap, setSubTagMap] = useState<Record<number, string>>({});
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageState, setPageState] = useState({ first: 0, rows: 100 });
  const [filterCity, setFilterCity] = useState<number | "empty" | null>(null);
  const [filterSector, setFilterSector] = useState<number | null>(null);
  const [filterMainCat, setFilterMainCat] = useState<number | null>(null);
  const [filterSubCat, setFilterSubCat] = useState<number | null>(null);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTitle);
      setPageState((p) => ({ ...p, first: 0 })); // reset page when searching
    }, 1300); // 500ms delay

    return () => clearTimeout(handler); // cleanup old timers
  }, [searchTitle]);

  // auth + role
  useEffect(() => {
    (async () => {
      setErr(null);
      const { data: auth, error: authErr } = await supabase.auth.getUser();
      if (authErr) { setErr(authErr.message); return; }
      const uid = auth.user?.id ?? null;
      setUserId(uid);

      if (!uid) { setRole(null); return; }
      const { data: ru, error: ruErr } = await supabase
        .from('rd_users')
        .select('role')
        .eq('user_id', uid)
        .maybeSingle();
      if (ruErr) { setErr(ruErr.message); return; }
      setRole((ru?.role === 'A1' || ru?.role === 'A2') ? ru.role : null);
    })();
  }, []);

  // load all lookups once
  useEffect(() => {
    (async () => {
      try {
        const [
          citiesRes,
          sectorsRes,
          mainsRes,
          subsRes,
          tagsRes,
          subTagsRes,
        ] = await Promise.all([
          supabase.from('cities').select('id, category'),
          supabase.from('sectors').select('id, category'),
          supabase.from('main_categories').select('id, category'),
          supabase.from('sub_categories').select('id, category'),
          supabase.from('tags').select('id, category'),
          supabase.from('sub_tags').select('id, category'),
        ]);

        const toMap = (rows?: any[]) => {
          const m: Record<number, string> = {};
          (rows ?? []).forEach(r => { m[r.id] = r.category; });
          return m;
        };

        setCityMap(toMap(citiesRes.data));
        setSectorMap(toMap(sectorsRes.data));
        setMainCatMap(toMap(mainsRes.data));
        setSubCatMap(toMap(subsRes.data));
        setTagMap(toMap(tagsRes.data));
        setSubTagMap(toMap(subTagsRes.data));
      } catch (e: any) {
        setErr(e.message ?? 'Failed to load lookups.');
      }
    })();
  }, []);

  // helper: map ids -> names (joined)
  const joinNames = (ids: number[] | null | undefined, map: Record<number, string>) => {
    if (!ids) return '';
    const unique = Array.from(new Set(ids)); // remove duplicate IDs
    return unique.map(id => map[id]).filter(Boolean).join(', ');
  };
  

  // listings fetch + hydrate
  const fetchListings = async () => {
    if (role === null) return;
    setLoading(true);
    setErr(null);
    try {
      const from = pageState.first;
      const to = pageState.first + pageState.rows - 1;

      let q = supabase
        .from('listings')
        .select('id,title,city_id,sector_ids,main_category_ids,sub_category_ids,tag_ids,sub_tag_ids,price,status,slug,user_id,created_at,gallery_urls', { count: 'exact' })
        .range(from, to);
        if (filterCity) {
          if (filterCity === "empty") {
            q = q.or("city_id.is.null,city_id.eq.{}"); 
            // if city_id is array, check empty array
          } else {
            q = q.contains("city_id", [Number(filterCity)]);
          }
        }
        
      if (filterSector) q = q.contains('sector_ids', [filterSector]);
      if (filterMainCat) q = q.contains('main_category_ids', [filterMainCat]);
      if (filterSubCat) q = q.contains('sub_category_ids', [filterSubCat]);
      if (debouncedSearch.trim() !== "") {
        q = q.ilike("title", `%${debouncedSearch.trim()}%`);
      }
      

      if (role === 'A2' && userId) q = q.eq('user_id', userId);

      if (selectedSort.key === 'az') q = q.order('title', { ascending: true, nullsFirst: true });
      if (selectedSort.key === 'za') q = q.order('title', { ascending: false, nullsLast: true });
      if (selectedSort.key === 'new') q = q.order('created_at', { ascending: false, nullsLast: true });
      if (selectedSort.key === 'old') q = q.order('created_at', { ascending: true, nullsFirst: true });

      const { data, error, count } = await q;
      if (error) throw error;

      setTotalRecords(count ?? 0);

      const hydrated: ListingRow[] = (data as ListingRaw[]).map(r => ({
        id: r.id,
        title: r.title,
        city: joinNames(r.city_id, cityMap), 
        sector: joinNames(r.sector_ids, sectorMap),
        main_category: joinNames(r.main_category_ids, mainCatMap),
        sub_category: joinNames(r.sub_category_ids, subCatMap),
        tags: joinNames(r.tag_ids, tagMap),
        sub_tags: joinNames(r.sub_tag_ids, subTagMap),
        status: r.status,
        slug: r.slug,
        user_id: r.user_id,
        created_at: r.created_at,
        gallery_urls: r.gallery_urls,
      }));

      setRows(hydrated);
    } catch (e: any) {
      setErr(e.message ?? 'Failed to load listings.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (role !== null) fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    role,
    userId,
    selectedSort.key,
    pageState,
    cityMap,
    sectorMap,
    mainCatMap,
    subCatMap,
    tagMap,
    subTagMap,
    filterCity,
    filterSector,
    filterMainCat,
    filterSubCat,
    searchTitle
  ]);



  // render helpers
  const renderService = (res: ListingRow) => {
    const cover = res.gallery_urls?.[0];
    return (
      <Link
        to={`/listings/view-listing/${res.id}`}
        className="table-imgname"
        style={{ display: "flex", alignItems: "center", maxWidth: "250px" }} // limit width
        title={res.title} // tooltip with full title
      >
        {cover ? (
          <img
            src={cover}
            className="me-2"
            alt="cover"
            style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }}
          />
        ) : (
          <ImageWithBasePath src="assets/admin/img/services/service-01.jpg" className="me-2" alt="img" />
        )}
        <span
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            flex: 1,
          }}
        >
          {res.title}
        </span>
      </Link>
    );
  };

  const renderStatus = (res: ListingRow) => {
    const cls =
      res.status === 'active' ? 'badge-active' :
        res.status === 'delete' ? 'badge-delete' :
          res.status === 'draft' ? 'badge-pending' :
            res.status === 'inactive' ? 'badge-inactive' : '';
    return <h6 className={cls} style={{ textTransform: 'capitalize' }}>{res.status}</h6>;
  };

  const onDelete = async (id: string) => {
    if (!confirm("Mark this listing as deleted?")) return;

    setLoading(true);
    setErr(null);

    try {
      const { error } = await supabase
        .from("listings")
        .update({ status: "deleted" })
        .eq("id", id);

      if (error) throw error;

      await fetchListings(); // refresh table
    } catch (err: any) {
      console.error(err);
      setErr(err.message ?? "Failed to update listing.");
    } finally {
      setLoading(false);
    }
  };


  const renderActions = (res: ListingRow) => (
    <div className="action-language">
      <Link
        className="table-edit"
        style={{ width: "auto", marginRight: '10px' }}
        to={`/services/edit-service/${res.id}`}
        title="Edit"
      >
        <i className="fa-regular fa-pen-to-square"></i>
      </Link>

      <button
        className="table-delete"
        style={{ width: "auto", marginRight: '10px' }}
        onClick={() => onDelete(res.id)}
        title="Delete"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>

      {role === "A1" && (
        <>
          <button
            className="table-publish"
            style={{ width: "auto", marginRight: '10px' }}
            onClick={() => onPublish(res.id, "active")}
            title="Publish"
          >
            <i className="fa-solid fa-upload"></i>
          </button>

          <button
            className="table-draft"
            style={{ width: "auto" }}
            onClick={() => onPublish(res.id, "draft")}
            title="Move to Draft"
          >
            <i className="fa-solid fa-file"></i>
          </button>
        </>
      )}
    </div>
  );

  const onPublish = async (id: string, newStatus: "active" | "draft") => {
    if (!confirm(`Set this listing to ${newStatus}?`)) return;

    setLoading(true);
    setErr(null);

    try {
      const { error } = await supabase
        .from("listings")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      await fetchListings(); // refresh table
    } catch (err: any) {
      console.error(err);
      setErr(err.message ?? "Failed to update listing status.");
    } finally {
      setLoading(false);
    }
  };



  const totalText = useMemo(() => {
    if (totalRecords === 0) return "No results found";

    const start = pageState.first + 1;
    const end = Math.min(pageState.first + pageState.rows, totalRecords);

    return `Showing ${start}-${end} of ${totalRecords} results`;
  }, [pageState, totalRecords]);


  return (
    <div className="page-wrapper page-settings">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>All Listings</h5>
          <div className="list-btn">
            <ul>
              <li>
                <div className="filter-sorting">
                  <ul>
                    <li>
                      <Link to="#" className="filter-sets" onClick={(e) => e.preventDefault()}>
                        <Icon.Filter className="react-feather-custom me-2" />
                        Filter
                      </Link>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath src="assets/admin/img/icons/sort.svg" className="me-2" alt="img" />
                      </span>
                      <div className="review-sort">
                        <Dropdown
                          value={selectedSort}
                          onChange={(e) => setSelectedSort(e.value)}
                          options={sortOptions}
                          optionLabel="name"
                          placeholder="A - Z"
                          className="select admin-select-breadcrumb"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="btn btn-primary" to="/services/add-service">
                  <i className="fa fa-plus me-2" />
                  Create Listing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {err && <div className="alert alert-danger">{err}</div>}

        <div className="row">
          <div className="col-12">
            <div className="tab-sets">
              <div className="tab-contents-sets">
                <ul>
                  <li><Link to="/services/all-services" className="active">All Listings</Link></li>
                  <li><Link to="/services/active-services" >Active</Link></li>
                  <li><Link to="/services/pending-services">Draft </Link></li>
                  <li><Link to="/services/deleted-services">Deleted </Link></li>
                </ul>
              </div>
              <div className="tab-contents-count">
                <h6>{loading ? 'Loading…' : totalText}</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 ">
            <div className="table-resposnive table-div">
              <div className="table datatable">
                <div className="filters-group-listing d-flex" style={{ width:'100%',gap: "10px" }}>
                  <div className="form-group" style={{width:'19%'}}>
                    <input
                      type="text"
                      value={searchTitle}
                      onChange={(e) => {
                        setSearchTitle(e.target.value);
                        setPageState({ ...pageState, first: 0 }); // reset to first page
                      }}
                      placeholder="Search by Title"
                      className="form-control"
                      style={{ minWidth: "100%", height: '45px',fontSize:'12px' }}
                    />
                  </div>
                  <div className="form-group" style={{width:'19%'}}>
                    <Dropdown
                      value={filterCity}
                      options={[
                        { label: "(No City)", value: "empty" }, // 👈 special empty option
                        ...Object.entries(cityMap).map(([id, name]) => ({
                          label: name,
                          value: Number(id),
                        })),
                      ]}
                      
                      onChange={(e) => { setFilterCity(e.value); setPageState({ ...pageState, first: 0 }); }}
                      placeholder="Select City"
                      showClear
                      className="w-100 p-inputwrapper-filled"
                      
                    />
                  </div>
                  <div className="form-group" style={{width:'19%'}}>
                    <Dropdown
                      value={filterSector}
                      options={Object.entries(sectorMap).map(([id, name]) => ({ label: name, value: Number(id) }))}
                      onChange={(e) => { setFilterSector(e.value); setPageState({ ...pageState, first: 0 }); }}
                      placeholder="Select Sector"
                      showClear
                      className="w-100 p-inputwrapper-filled"
                      
                    />
                  </div>
                  <div className="form-group" style={{width:'19%'}}>
                    <Dropdown
                      value={filterMainCat}
                      options={Object.entries(mainCatMap).map(([id, name]) => ({ label: name, value: Number(id) }))}
                      onChange={(e) => { setFilterMainCat(e.value); setPageState({ ...pageState, first: 0 }); }}
                      placeholder="Select Main Category"
                      showClear
                      className="w-100 p-inputwrapper-filled"
                      
                    />
                  </div>
                  <div className="form-group" style={{width:'19%'}}>
                    <Dropdown
                      value={filterSubCat}
                      options={Object.entries(subCatMap).map(([id, name]) => ({ label: name, value: Number(id) }))}
                      onChange={(e) => { setFilterSubCat(e.value); setPageState({ ...pageState, first: 0 }); }}
                      placeholder="Select Sub Category"
                      showClear
                      className="w-100 p-inputwrapper-filled"
                     
                    />
                  </div>
                </div>

                <DataTable
                  value={rows}
                  loading={loading}
                  paginator
                  first={pageState.first}
                  rows={pageState.rows}
                  totalRecords={totalRecords}
                  onPage={(e) => setPageState(e)}
                  rowsPerPageOptions={[5, 10, 25, 50,100]}
                  paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  tableStyle={{ minWidth: '60rem' }}
                  lazy
                >
                  <Column field="title" header="Title" sortable body={renderService} />
                  <Column field="city" header="City" sortable />
                  <Column field="sector" header="Sector" sortable />
                  <Column field="main_category" header="Main Category" sortable />
                  <Column field="sub_category" header="Sub Category(ies)" sortable />
                  {/*  <Column field="tags" header="Tags" sortable />
                  <Column field="sub_tags" header="Sub Tags" sortable /> */}
                  <Column field="status" header="Status" sortable body={renderStatus} />
                  {/* <Column field="user_id" header="Created By" body={renderOwner} /> */}
                  <Column header="Action" body={renderActions} />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;
