import React, { useState, useEffect } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import UsersModal from '../common/modals/users-modal';
import { rowdatas } from '../../../core/models/interface';
import { useSession } from '../SessionContext';
import supabase from '../../../supabaseClient';

const Users = () => {
  const { profile } = useSession();
  const [selectedValue, setSelectedValue] = useState(null);
  const [rows, setRows] = useState<rowdatas[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any | null>(null);

  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  // Fetch users function (reusable)
  const fetchUsers = async () => {
    if (!profile) return;
    setIsLoading(true);
    setErr(null);

    try {
      let query = supabase
        .from('rd_users')
        .select('id, name,email, mobile, role, status, created_at');

      if (profile.role === 'A2') {
        query = query.eq('mobile', profile.mobile);
      }

      query = query.order('name', { ascending: true, nullsFirst: true });

      const { data, error } = await query;
      if (error) throw error;

      const transformed = data.map((u: any) => ({
        id: u.id,
        name: u.name || '',
        mobile: u.mobile || '',
        role: u.role || '',
        email: u.email || '',
        created: new Date(u.created_at).toLocaleDateString(),
        status: u.status === 1 ? 'Active' : 'Inactive',
        img: 'assets/img/profiles/avatar-01.jpg',
      }));

      setRows(transformed);
    } catch (e: any) {
      setErr(e.message || 'Failed to load users.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [profile]);

  const handleAddUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEditUser = (row: any) => {
    setEditingUser(row);
    setShowModal(true);
  };
  const handleDeleteUser = async (id: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from('rd_users')
        .delete()
        .eq('id', id);

      if (error) throw error;

      fetchUsers();
    } catch (err: any) {
      alert(`Error deleting user: ${err.message}`);
    }
  };

  const actionButton = (rowData: rowdatas) => (
    <div className="table-actions d-flex">
      <Link
        to="#"
        className="delete-table me-2"
        onClick={(e) => {
          e.preventDefault();
          handleEditUser(rowData);
        }}
      >
        <Icon.Edit className="react-feather-custom" />
      </Link>
      <Link to="#" className="delete-table" onClick={(e) => {
          e.preventDefault();
          handleDeleteUser(rowData.id);
        }}>
        <Icon.Trash2 className="react-feather-custom" />
      </Link>
    </div>
  );

  const renderCustomerNameColumn = (rowData: rowdatas) => (
    <div className="table-profileimage">
      <ImageWithBasePath
        className="me-2"
        src={rowData.img}
        alt="img"
        style={{ width: '50px', height: 'auto' }}
      />
      <div className="ml-2">
        <span>{rowData.name}</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Users</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <div className="filter-sorting">
                    <ul>
                      <li>
                        <Link to="#" className="filter-sets">
                          <Icon.Filter className="react-feather-custom me-2" />
                          Filter
                        </Link>
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/sort.svg"
                            className="me-2"
                            alt="img"
                          />
                        </span>
                        <div className="review-sort">
                          <Dropdown
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.value)}
                            options={value}
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
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleAddUser}
                  >
                    <i className="fa fa-plus me-2" />
                    Add User
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {isLoading && <p>Loading users...</p>}
          {err && <p className="text-danger">{err}</p>}

          {!isLoading && !err && (
            <div className="row">
              <div className="col-12 ">
                <div className="table-resposnive">
                  <DataTable
                    value={rows}
                    showGridlines
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column sortable field="id" header="#"></Column>
                    <Column
                      sortable
                      field="name"
                      header="Name"
                      body={renderCustomerNameColumn}
                    ></Column>
                    <Column sortable field="email" header="Email"></Column>
                    <Column sortable field="mobile" header="Mobile"></Column>
                    <Column
                      sortable
                      field="role"
                      header="Role"
                      body={(rowData) =>
                        rowData.role === 'A1'
                          ? 'Super Admin'
                          : rowData.role === 'A2'
                            ? 'Admin'
                            : rowData.role || '-'
                      }
                    />
                    <Column sortable field="created" header="Created"></Column>
                    <Column
                      field="action"
                      header="Action"
                      body={actionButton}
                    ></Column>
                  </DataTable>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <UsersModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={fetchUsers}
        editingUser={editingUser}
      />
    </>
  );
};

export default Users;
