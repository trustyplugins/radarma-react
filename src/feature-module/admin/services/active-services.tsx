import React, { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import * as Icon from 'react-feather';
import { activeService } from '../../../core/data/json/active_services';
import InactiveServicesModal from '../common/modals/inactive-services-modal';
import { all_routes } from '../../../core/data/routes/all_routes';
import { ActiveserviceInterface } from '../../../core/models/interface';

const ActiveServices = () => {
  const routes = all_routes;
  const [selectedValue, setSelectedValue] = useState(null);
  const [data, setData] = useState([{}]);
  useEffect(() => {
    setData(activeService);
  }, []);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const renderBody = (res: ActiveserviceInterface) => {
    return (
      <Link to="#" className="table-imgname">
        <ImageWithBasePath src={res.img} className="me-2" alt="img" />
        <span>{res.service}</span>
      </Link>
    );
  };
  const renderBody2 = (res: ActiveserviceInterface) => {
    return <h6 className="badge-active">{res.status}</h6>;
  };
  const renderBody3 = () => {
    return (
      <div className="table-actions render-action d-flex">
        <Link className="btn delete-table me-2" to="edit-service">
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <button
          className="btn delete-table"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-service"
        >
          <Icon.Trash2 className="react-feather-custom " />
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Active Services</h5>
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
                            src="assets/admin/img/icons/sort.svg"
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
                  <Link className="btn btn-primary" to="add-service">
                    <i className="fa fa-plus me-2" />
                    Add Services{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-sets">
                <div className="tab-contents-sets">
                  <ul>
                    <li>
                      <Link to="services">All Services</Link>
                    </li>
                    <li>
                      <Link to={routes.activeServices} className="active">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.pendingServices}>Pending </Link>
                    </li>
                    <li>
                      <Link to={routes.inActiveServices}>Inactive </Link>
                    </li>
                    <li>
                      <Link to={routes.deletedServices}>Deleted </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-contents-count">
                  <h6>Showing 8-10 of 84 results</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive table-div">
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
                    <Column sortable field="id" header="#"></Column>
                    <Column
                      sortable
                      field="service"
                      header="Service"
                      body={renderBody}
                    ></Column>
                    <Column
                      sortable
                      field="category"
                      header="Category"
                    ></Column>
                    <Column
                      sortable
                      field="subCategory"
                      header="Sub Category"
                    ></Column>
                    <Column sortable field="amount" header="Price"></Column>
                    <Column sortable field="date" header="Duration"></Column>
                    <Column
                      sortable
                      field="status"
                      header="Status"
                      body={renderBody2}
                    ></Column>
                    <Column
                      sortable
                      header="Action"
                      body={renderBody3}
                    ></Column>
                  </DataTable>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InactiveServicesModal />
    </>
  );
};

export default ActiveServices;
