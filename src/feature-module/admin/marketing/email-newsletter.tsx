import React, { useState } from 'react';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import DefaultEditor from 'react-simple-wysiwyg';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import { NewslettersItem } from '../../../core/models/interface';

const EmailNewsletter = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const data = useSelector((state: any) => state.newsletterData);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const [values, setValue] = React.useState();
  function onChange(e: any) {
    setValue(e.target.value);
  }
  const renderBody = (res: NewslettersItem) => {
    return (
      <div className="table-namesplit">
        <Link to="#" className="table-profileimage">
          <ImageWithBasePath src={res.img} className="me-2" alt="img" />
        </Link>
        <Link to="#" className="table-name">
          <span>{res.name}</span>
          <p>{res.email}</p>
        </Link>
      </div>
    );
  };
  const renderBody2 = () => {
    return (
      <div className="table-actions render-action d-flex">
        <Link
          className="delete-table me-2"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#send-email"
        >
          <ImageWithBasePath src="assets/img/icons/sms.svg" alt="svg" />
        </Link>
        <Link
          className="delete-table"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-newsletter"
        >
          <ImageWithBasePath src="assets/img/icons/delete.svg" alt="svg" />
        </Link>
      </div>
    );
  };
  return (
    <div className="page-wrapper page-settings">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>Email Newsletter</h5>
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
                  to={'#'}
                  className="btn btn-primaryline"
                  data-bs-toggle="modal"
                  data-bs-target="#send-email"
                >
                  <i className="fa fa-envelope me-2" aria-hidden="true" />
                  Send Email
                </Link>
              </li>
              <li>
                <Link
                  to={'#'}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-subscriber"
                >
                  <i className="fa fa-plus me-2" />
                  Add Subscriber
                </Link>
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
                <Column sortable body={renderBody} header="Email"></Column>
                <Column sortable field="date" header="Subcribed Date"></Column>
                <Column sortable field="date2" header="Last Activity"></Column>
                <Column header="Action" body={renderBody2}></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
      {/* Send Email */}
      <div className="modal fade" id="send-email">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Send Newsletter</h5>
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
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Content</label>
                  <DefaultEditor value={values}
                
                  onChange={onChange} />
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Send Email */}
      {/* Add Subscriber */}
      <div className="modal fade" id="add-subscriber">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Subscriber</h5>
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
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Subscriber */}
      {/* Delete Newsletter */}
      <div className="modal fade" id="delete-newsletter">
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
                  <h4>Delete Newsletter?</h4>
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
      {/* /Delete Newsletter */}
    </div>
  );
};

export default EmailNewsletter;
