import React, { useState } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeletePageModal from '../common/modals/delete-paage-modal';
import { all_routes } from '../../../core/data/routes/all_routes';
import { Dropdown } from 'primereact/dropdown';
const routes = all_routes;

const PagesList = () => {
  const data = useSelector((state: any) => state.pages_data);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const [selectedValue, setSelectedValue] = useState(null);
  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link className="delete-table me-2" to={routes.EditPages}>
          <Icon.Edit className='react-feather-custom' />
        </Link>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-pages"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </button>
      </div>
    );
  };
  const statusBodyTemplate = (rowData: { status: string }) => {
    return (
      <div className="active-switch">
        <label className="switch">
          <input type="checkbox" defaultChecked={rowData.status === 'active'} />
          <span className="sliders round"></span>
        </label>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Pages</h5>
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
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <table className="table datatable">
                  <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    value={data}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column sortable field="id" header="ID"></Column>
                    <Column sortable field="pages" header="Pages"></Column>
                    <Column
                      sortable
                      field="pagesslug"
                      header="PagesSlug"
                    ></Column>

                    <Column
                      sortable
                      field="status"
                      header="Status"
                      body={statusBodyTemplate}
                    ></Column>
                    <Column
                      field="action"
                      header="Action"
                      body={actionButton}
                    ></Column>
                  </DataTable>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeletePageModal/>
    </>
  );
};

export default PagesList;
