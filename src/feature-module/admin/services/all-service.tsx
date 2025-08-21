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
  city_id: number | null;
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
  const joinNames = (ids: number[] | null | undefined, map: Record<number, string>) =>
    (ids ?? []).map(id => map[id]).filter(Boolean).join(', ');

  // listings fetch + hydrate
  const fetchListings = async () => {
    if (role === null) return; // still resolving role
    setLoading(true);
    setErr(null);
    try {
      let q = supabase
        .from('listings')
        .select('id,title,city_id,sector_ids,main_category_ids,sub_category_ids,tag_ids,sub_tag_ids,price,status,slug,user_id,created_at,gallery_urls');

      if (role === 'A2' && userId) q = q.eq('user_id', userId);

      if (selectedSort.key === 'az')  q = q.order('title', { ascending: true,  nullsFirst: true });
      if (selectedSort.key === 'za')  q = q.order('title', { ascending: false, nullsLast: true });
      if (selectedSort.key === 'new') q = q.order('created_at', { ascending: false, nullsLast: true });
      if (selectedSort.key === 'old') q = q.order('created_at', { ascending: true,  nullsFirst: true });

      const { data, error } = await q;
      if (error) throw error;

      const hydrated: ListingRow[] = (data as ListingRaw[]).map(r => ({
        id: r.id,
        title: r.title,
        city: r.city_id ? (cityMap[r.city_id] ?? '—') : '—',
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
  }, [role, userId, selectedSort.key, cityMap, sectorMap, mainCatMap, subCatMap, tagMap, subTagMap]);

  // render helpers
  const renderService = (res: ListingRow) => {
    const cover = res.gallery_urls?.[0];
    return (
      <Link to="#" className="table-imgname" onClick={(e) => e.preventDefault()}>
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
        <span>{res.title}</span>
      </Link>
    );
  };

  const renderStatus = (res: ListingRow) => {
    const cls =
      res.status === 'Active' ? 'badge-active' :
      res.status === 'Delete' ? 'badge-delete' :
      res.status === 'Pending' ? 'badge-pending' :
      res.status === 'Inactive' ? 'badge-inactive' : '';
    return <h6 className={cls}>{res.status}</h6>;
  };

  const renderOwner = (res: ListingRow) => {
    const short = res.user_id ? `${res.user_id.slice(0, 6)}…` : '—';
    return <span>{short}</span>;
  };

  const onDelete = async (id: string) => {
    if (!confirm('Delete this listing?')) return;
    const { error } = await supabase.from('listings').delete().eq('id', id);
    if (error) { alert(error.message); return; }
    setRows(prev => prev.filter(r => r.id !== id));
  };

  const renderActions = (res: ListingRow) => (
    <div className="action-language">
      <Link className="table-edit" to={`/services/edit-service/${res.id}`}>
        <i className="fa-regular fa-pen-to-square"></i>
        <span>Edit</span>
      </Link>
      <button className="table-delete" onClick={() => onDelete(res.id)}>
        <i className="fa-solid fa-trash-can"></i>
        <span>Delete</span>
      </button>
    </div>
  );

  const totalText = useMemo(
    () => `Showing 1-${Math.min(rows.length, 10)} of ${rows.length} results`,
    [rows.length]
  );

  return (
    <div className="page-wrapper page-settings">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>All Services</h5>
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
                  Create Services
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
                  <li><Link to="services" className="active">All Listings</Link></li>
                  <li><Link to={routes.activeServices}>Active</Link></li>
                  <li><Link to={routes.pendingServices}>Pending </Link></li>
                  <li><Link to={routes.inActiveServices}>Inactive </Link></li>
                  <li><Link to={routes.deletedServices}>Deleted </Link></li>
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
                <DataTable
                  value={rows}
                  loading={loading}
                  paginator
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  tableStyle={{ minWidth: '60rem' }}
                >
                  <Column field="title" header="Service" sortable body={renderService} />
                  <Column field="city" header="City" sortable />
                  <Column field="sector" header="Sector(s)" sortable />
                  <Column field="main_category" header="Main Category(ies)" sortable />
                  <Column field="sub_category" header="Sub Category(ies)" sortable />
                  <Column field="tags" header="Tags" sortable />
                  <Column field="sub_tags" header="Sub Tags" sortable />
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
