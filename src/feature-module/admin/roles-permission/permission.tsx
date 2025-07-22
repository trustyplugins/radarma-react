import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { all_routes } from '../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';

const Permissions = () => {
  const routes = all_routes;

  const roles = [
    {
      id: 1,
      modules: 'Dashboard',
      sub_modules: 'Dashboard',
    },
    {
      id: 2,
      modules: 'Appointments',
      sub_modules: 'Appointments',
    },
    {
      id: 3,
      modules: 'Specialization',
      sub_modules: 'Specialization',
    },
    {
      id: 4,
      modules: 'Sub Categories',
      sub_modules: 'Sub Categories',
    },
    {
      id: 5,
      modules: 'Clients',
      sub_modules: 'Clients',
    },
    {
      id: 6,
      modules: 'Payment Request',
      sub_modules: 'Payment Request',
    },
    {
      id: 7,
      modules: 'Reviews',
      sub_modules: 'Reviews',
    },
    {
      id: 8,
      modules: 'Subscription',
      sub_modules: 'Subscription',
    },
    {
      id: 9,
      modules: 'Settings',
      sub_modules: 'Settings',
    },
    {
      id: 10,
      modules: 'Email Templates',
      sub_modules: 'Email Templates',
    },
  ];
  const checkBox = () => {
    return (
      <label className="checkboxs mb-0">
        <input type="checkbox" />
        <span>
          <i />
        </span>
      </label>
    );
  };
  // HTML
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Permission</h5>
          </div>
          <div className="role-wrap">
            <div className="row">
              <div className="col-md-6">
                <h6>
                  Role Name: <span>Testings</span>
                </h6>
              </div>
              <div className="col-md-6">
                <label className="checkboxs justify-content-md-end">
                  <input type="checkbox" />
                  <span>
                    <i />
                  </span>
                  <b className="check-content">Allow All Modules</b>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive role-table">
                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={roles}
                  className="table datatable"
                  showGridlines
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="#"></Column>
                  <Column sortable field="modules" header="Modules"></Column>
                  <Column
                    sortable
                    field="sub_modules"
                    header="Sub Modules"
                  ></Column>
                  <Column
                    sortable
                    field="Create"
                    header="Create"
                    body={checkBox}
                  ></Column>
                  <Column
                    sortable
                    field="Edit"
                    header="Edit"
                    body={checkBox}
                  ></Column>
                  <Column
                    sortable
                    field="Delete"
                    header="Delete"
                    body={checkBox}
                  ></Column>
                  <Column
                    sortable
                    field="View"
                    header="View"
                    body={checkBox}
                  ></Column>
                  <Column
                    sortable
                    field="Allow all"
                    header="Allow all"
                    body={checkBox}
                  ></Column>
                </DataTable>
              </div>
              <div className="btn-path text-center mt-4">
                <Link to={routes.roles} className="btn btn-cancel me-3">
                  Back
                </Link>
                <button type="submit" className="btn btn-primary ">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Permissions;
