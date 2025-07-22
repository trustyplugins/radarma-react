import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import ReviewdatatypeModal from '../common/modals/review-datatype-modal';
import { ReviewTypeInterface } from '../../../core/models/interface';

const ReviewType = () => {
  const data = useSelector((state: any) => state.review_data_type);

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const status = (data: ReviewTypeInterface) => {
    return (
      <div className="active-switch">
        <label className="switch">
          <input type="checkbox" checked={data.isActive} />
          <span className="sliders round" />
        </label>
      </div>
    );
  };

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <button
          className="delete-table border-none me-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#edit-review-type"
        >
          <Icon.Edit className="react-feather-custom" />
        </button>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-review-type"
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
            <h5>Reviews Type</h5>
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
                    data-bs-target="#add-review-type"
                  >
                    <i className="fa fa-plus me-2" />
                    Add Review Type
                  </button>
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
                  showGridlines
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="#"></Column>
                  <Column sortable field="status" header="Review Type"></Column>
                  <Column
                    sortable
                    field="isActive"
                    header="Status"
                    body={status}
                  ></Column>

                  <Column
                    sortable
                    field="id"
                    header="Action"
                    body={actionButton}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
          <ReviewdatatypeModal />
        </div>
      </div>
    </>
  );
};

export default ReviewType;
