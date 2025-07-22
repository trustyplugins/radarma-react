import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { menuManagement } from '../../../core/data/service/admin/menu-management';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'react-bootstrap';
import { all_routes } from '../../../core/data/routes/all_routes';
import DeleteModal from '../common/modals/delete-modal';

const MenuManagement = () => {
  const routes = all_routes;
  const [blog, setCustomers] = useState([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const value = [
    { name: ' Select Language' },
    { name: 'English' },
    { name: 'Spanish' },
  ];

  useEffect(() => {
    menuManagement
      .getContactMessagesMedium()
      .then((data: any) => setCustomers(data));
  }, []);
  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link
          to="#"
          className="delete-table border-none me-2"
          type="button"
        >
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-menu"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Menu Management</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <div className="filter-selects">
                    <div className="form-group mb-0">
                      <div className="group-image">
                        <ImageWithBasePath
                          src="assets/img/flags/us1.png"
                          alt="img"
                        />

                        <Dropdown
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                          value={selectedValue}
                          onChange={(e: any) => setSelectedValue(e.value)}
                          options={value}
                          optionLabel="name"
                          placeholder="A - Z"
                          className="select admin-select-breadcrumb"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className="btn btn-primary" to={routes.createMenu}>
                    <i className="fa fa-plus me-2" />
                    Create Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <table className="table datatable">
                  <tbody>
                    <DataTable
                      value={blog}
                      paginator
                      rows={10}
                      rowsPerPageOptions={[5, 10, 25, 50]}
                      tableStyle={{ minWidth: '50rem' }}
                    >
                      <Column sortable field="id" header="ID"></Column>
                      <Column sortable field="title" header="Title"></Column>
                      <Column
                        sortable
                        field="createdat"
                        header="CreatedAt"
                      ></Column>
                      <Column sortable field="status" header="Status"></Column>
                      <Column
                        sortable
                        field="language edit"
                        header="LanguageEdit"
                        body={() => (
                          <div className="filter-select-set">
                            <div className="form-group mb-0">
                              <div className="group-image">
                                <ImageWithBasePath
                                  src="assets/admin/img/flags/us1.png"
                                  alt="img"
                                />
                                <select className="form-select flag">
                                  <option>Language</option>
                                  <option>English</option>
                                  <option>Spanish</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                      ></Column>
                      <Column
                        sortable
                        field="action"
                        header="Action"
                        body={actionButton}
                      ></Column>
                    </DataTable>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal/>
    </>
  );
};

export default MenuManagement;
