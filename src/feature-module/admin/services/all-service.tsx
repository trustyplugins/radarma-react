import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import * as Icon from 'react-feather';
import { all_routes } from '../../../core/data/routes/all_routes';
import { AllserviceInterface } from '../../../core/models/interface';

const AllService = () => {
  const routes = all_routes;
  const data = useSelector((state: any) => state.service_data);
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const renderBody = (res: AllserviceInterface) => {
    return (
      <Link to="#" className="table-imgname">
        <ImageWithBasePath src={res.img} className="me-2" alt="img" />
        <span>{res.service}</span>
      </Link>
    );
  };
  const renderBody2 = (res: AllserviceInterface) => {
    return (
      <h6
        className={`${
          res.status == 'Active'
            ? 'badge-active'
            : res.status == 'Delete'
            ? 'badge-delete'
            : res.status == 'Pending'
            ? 'badge-pending'
            : res.status == 'Inactive'
            ? 'badge-inactive'
            : ''
        }`}
      >
        {res.status}
      </h6>
    );
  };
  const renderBody4 = (res: AllserviceInterface) => {
    return (
      <Link to="#" className="table-profileimage">
        <ImageWithBasePath src={res.img1} className="me-2" alt="img" />
        <span>Amanda</span>
      </Link>
    );
  };

  const renderBody3 = () => {
    return (
      <div className="action-language">
        <Link className="table-edit" to="/admin/services/edit-services">
          <i className="fa-regular fa-pen-to-square"></i>
          <span>Edit</span>
        </Link>
        <Link
          className="table-delete"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-item"
        >
          <i className="fa-solid fa-trash-can"></i>
          <span>Delete</span>
        </Link>
      </div>
    );
  };
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
                  <Link
                    className="btn btn-primary"
                    to="/admin/services/add-sevices"
                  >
                    <i className="fa fa-plus me-2" />
                    Create Services{' '}
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
                      <Link to="services" className="active">
                        All Services
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.activeServices}>Active</Link>
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
                    <Column
                      sortable
                      field="duration"
                      header="Duration"
                    ></Column>
                    <Column
                      sortable
                      field="status"
                      header="Status"
                      body={renderBody2}
                    ></Column>
                    <Column
                      sortable
                      field="status"
                      header="Created By"
                      body={renderBody4}
                    ></Column>
                    <Column header="Action" body={renderBody3}></Column>
                  </DataTable>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Delete */}
      <div
        className="modal fade"
        id="delete-item"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <button
                type="button"
                className="delete-popup"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-regular fa-rectangle-xmark" />
              </button>
              <div className="del-modal">
                <h5>Do you realy want to delete this service?</h5>
                <p>Plumbing Service</p>
              </div>
              <div className="delete-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn modal-delete">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Delete */}
    </>
  );
};

export default AllService;
