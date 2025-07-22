import React, { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import * as Icon from 'react-feather';
import { AbuseReportData } from '../../../core/models/interface';
import { AbuseData } from '../../../core/data/json/abuse_report';

export const AbuseReport = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [data, setData] = useState([{}]);
  useEffect(() => {
    setData(AbuseData);
  }, []);

  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const renderBody = (res: AbuseReportData) => {
    return (
      <Link to="#" className="table-profileimage">
        <img src={res.img1} className="me-2" alt="img" />
        <span>{res.provider}</span>
      </Link>
    );
  };
  const renderBody2 = (res: AbuseReportData) => {
    return (
      <Link to="#" className="table-profileimage">
        <img src={res.img2} className="me-2" alt="img" />
        <span>{res.reportedByUser}</span>
      </Link>
    );
  };
  const renderBody3 = () => {
    return (
      <div className="table-actions render-action d-flex">
        <button
          className="btn delete-table me-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#abuse-details"
        >
          <Icon.Eye className="react-feather-icon" />
        </button>
        <button
          className="btn delete-table"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-abuse"
        >
          <Icon.Trash2 className="react-feather-icon" />
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Abuse Reports</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <div className="filter-sorting">
                    <ul>
                      <li>
                        <Link to="#" className="filter-sets">
                          <Icon.Filter className="me-2 react-feather-icon" />
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
                        <div className="review-sort filter-dropdown">
                          <Dropdown
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.value)}
                            options={value}
                            optionLabel="name"
                            placeholder="A - Z"
                            className="select admin-select-breadcrumb"
                          />
                          {/* <select className="select">
                            <option>A - Z</option>
                            <option>Z - A</option>
                          </select> */}
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
                
                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={data}
                  paginator
                  showGridlines
                  className="table datatable custom-table"
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="#"></Column>
                  <Column
                    sortable
                    field="provider"
                    header="Provider"
                    body={renderBody}
                  ></Column>
                  <Column
                    sortable
                    field="reportedByUser"
                    header="Reported By Use"
                    body={renderBody2}
                  ></Column>
                  <Column
                    sortable
                    field="description"
                    header="Description"
                  ></Column>
                  <Column sortable field="date" header="Date"></Column>
                  <Column header="Action" body={renderBody3}></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Abuse Details */}
      <div className="modal fade" id="abuse-details">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Abuse Details</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-icon" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Provider Name</label>
                  <div className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/img/customer/user-01.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>John Smith</span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Customer</label>
                  <div className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/img/customer/user-02.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>William</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Descriptions</label>
                  <p>Lorem ipsum dolor sit</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Abuse Details */}
      {/* Delete Abuse */}
      <div className="modal fade" id="delete-abuse">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pt-0">
              <div className="text-center">
                <Icon.Trash2 className="text-danger fs-1 react-feather-icon" />
                <div className="mt-4">
                  <h4>Delete Abuse Details?</h4>
                  <p className="text-muted mb-0">
                    Are you sure want to delete this?
                  </p>
                </div>
              </div>
              <div className="d-flex gap-2 justify-content-center mt-4">
                <button
                  type="button"
                  className="btn w-sm btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn w-sm btn-danger">
                  Yes, Delete It!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Abuse */}
    </>
  );
};

export default AbuseReport;
