import React, { useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import UsersModal from '../common/modals/users-modal';
import { rowdatas } from '../../../core/models/interface';

const Users = () => {
  const data = useSelector((state: any) => state.users);

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link
          className="delete-table me-2"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#edit-user"
        >
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <Link className="delete-table" to="#">
          <Icon.Trash2 className="react-feather-custom" />
        </Link>
      </div>
    );
  };

  // const renderCustomerNameColumn = (rowData) => {
  //     const [name, email] = rowData.name.split('\n');
  //     return (
  //         <div className="table-profileimag">
  //             <ImageWithBasePath src={rowData.img} alt="img" style={{ width: '50px', height: 'auto' }} />
  //             <div className="ml-2">
  //                 <span>{name}</span>
  //                 <br />
  //                 <span>{email}</span>
  //             </div>
  //         </div>
  //     );
  // };

  const renderCustomerNameColumn = (rowData: rowdatas) => {
    return (
      <div className="table-profileimage">
        <ImageWithBasePath
          className="me-2"
          src={rowData.img}
          alt="img"
          style={{ width: '50px', height: 'auto' }}
        />
        <div className="ml-2">
          {rowData.name && <span>{rowData.name.split('\n')[0]}</span>}
          <br />
          {rowData.name && <span>{rowData.name.split('\n')[1]}</span>}
        </div>
      </div>
    );
  };

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
                          <Icon.Filter className="react-feather-custom me-2"></Icon.Filter>
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
                    data-bs-toggle="modal"
                    data-bs-target="#add-user"
                  >
                    <i className="fa fa-plus me-2" />
                    Add User
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <DataTable
                  value={data}
                  showGridlines
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="#"></Column>
                  <Column
                    sortable
                    field="name"
                    header="name"
                    body={renderCustomerNameColumn}
                  ></Column>
                  <Column sortable field="mobile" header="Mobile"></Column>
                  <Column sortable field="role" header="role"></Column>
                  <Column
                    sortable
                    field="lastActivity"
                    header="Last Activity"
                  ></Column>
                  <Column sortable field="created" header="Created"></Column>
                  <Column
                    sortable
                    field="status"
                    header="Status"
                    body={(rowData) => (
                      <span
                        className={
                          rowData.status === 'Active' ? 'badge-active' : ''
                        }
                      >
                        {rowData.status}
                      </span>
                    )}
                  ></Column>
                  <Column
                    sortable
                    field="action"
                    header="Action"
                    body={actionButton}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UsersModal />
    </>
  );
};

export default Users;
