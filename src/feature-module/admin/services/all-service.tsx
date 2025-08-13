import React, { useEffect, useMemo, useState } from 'react';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import * as Icon from 'react-feather';
import { all_routes } from '../../../core/data/routes/all_routes';
import supabase from '../../../supabaseClient';

type Listing = {
  id: string;
  title: string;
  category: string | null;
  sub_category: string | null;
  price: number | null;
  status: string;
  slug: string;
  user_id: string | null;
  created_at: string;
  gallery_urls: string[] | null;
};

type Role = 'A1' | 'A2' | null;
type SortOpt = { name: string; key: 'az' | 'za' | 'new' | 'old' };
const sortOptions: SortOpt[] = [
  { name: 'A - Z', key: 'az' },
  { name: 'Z - A', key: 'za' },
  { name: 'Newest', key: 'new' },
  { name: 'Oldest', key: 'old' },
];

const AllService: React.FC = () => {
  const routes = all_routes;
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<Role>(null);

  const [selectedSort, setSelectedSort] = useState<SortOpt>(sortOptions[2]);
  const [rows, setRows] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Get auth user + role from rd_users
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

  // Fetch listings after we know role/user
  const fetchListings = async () => {
    if (role === null) return; // still resolving role
    setLoading(true);
    setErr(null);
    try {
      let q = supabase
        .from('listings')
        .select('id,title,category,sub_category,price,status,slug,user_id,created_at,gallery_urls');

      // Client-side filter for A2 (RLS already protects, but this avoids extra rows)
      if (role === 'A2' && userId) {
        q = q.eq('user_id', userId);
      }

      // Sort
      if (selectedSort.key === 'az')  q = q.order('title', { ascending: true,  nullsFirst: true });
      if (selectedSort.key === 'za')  q = q.order('title', { ascending: false, nullsLast: true });
      if (selectedSort.key === 'new') q = q.order('created_at', { ascending: false, nullsLast: true });
      if (selectedSort.key === 'old') q = q.order('created_at', { ascending: true,  nullsFirst: true });

      const { data, error } = await q;
      if (error) throw error;
      setRows(data ?? []);
    } catch (e: any) {
      setErr(e.message ?? 'Failed to load listings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (role !== null) fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, userId, selectedSort.key]);

  // Render helpers
  const renderService = (res: Listing) => {
    const cover = res.gallery_urls?.[0];
    return (
      <Link to="#" className="table-imgname" onClick={(e) => e.preventDefault()}>
        {cover ? (
          <img src={cover} className="me-2" alt="cover" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6 }} />
        ) : (
          <ImageWithBasePath src="assets/admin/img/placeholder.png" className="me-2" alt="img" />
        )}
        <span>{res.title}</span>
      </Link>
    );
  };

  const renderStatus = (res: Listing) => {
    const cls =
      res.status === 'Active' ? 'badge-active' :
      res.status === 'Delete' ? 'badge-delete' :
      res.status === 'Pending' ? 'badge-pending' :
      res.status === 'Inactive' ? 'badge-inactive' : '';
    return <h6 className={cls}>{res.status}</h6>;
  };

  const renderOwner = (res: Listing) => {
    //console.log(res);
    const short = res.user_id ? `${res.user_id.slice(0, 6)}…` : '—';
    return (
      <span>{short}</span>
      // <Link to="#" className="table-profileimage" onClick={(e) => e.preventDefault()}>
      //   <ImageWithBasePath src="assets/admin/img/avatars/user-01.jpg" className="me-2" alt="img" />
      //   <span>{short}</span>
      // </Link>
    );
  };

  const onDelete = async (id: string) => {
    if (!confirm('Delete this listing?')) return;
    const { error } = await supabase.from('listings').delete().eq('id', id);
    if (error) { alert(error.message); return; }
    setRows(prev => prev.filter(r => r.id !== id));
  };

  const renderActions = (res: Listing) => (
    <div className="action-language">
      <Link className="table-edit" to={`/admin/services/edit-services/${res.id}`}>
        <i className="fa-regular fa-pen-to-square"></i>
        <span>Edit</span>
      </Link>
      <button className="table-delete" onClick={() => onDelete(res.id)}>
        <i className="fa-solid fa-trash-can"></i>
        <span>Delete</span>
      </button>
    </div>
  );

  const totalText = useMemo(() => `Showing 1-${Math.min(rows.length, 10)} of ${rows.length} results`, [rows.length]);

  return (
    <>
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
                <table className="table datatable">
                  <DataTable
                    value={rows}
                    loading={loading}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column field="id" header="#" sortable body={(r, opts) => opts.rowIndex + 1} />
                    <Column field="title" header="Service" sortable body={renderService} />
                    <Column field="category" header="Category" sortable />
                    <Column field="sub_category" header="Sub Category" sortable />
                    {/* <Column field="price" header="Price" sortable body={(r: Listing) => r.price != null ? `₹${r.price}` : '—'} /> */}
                    <Column field="status" header="Status" sortable body={renderStatus} />
                    <Column field="user_id" header="Created By" body={renderOwner} />
                    <Column header="Action" body={renderActions} />
                  </DataTable>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllService;
