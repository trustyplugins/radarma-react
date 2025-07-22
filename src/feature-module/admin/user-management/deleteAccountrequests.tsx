import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import * as Icon from 'react-feather';
import DeleteAccountrequestsmodalpopup from '../common/modals/delete-account-requests-modal';
import { DeleteAccounts } from '../../../core/models/interface';

const DeleteAccountrequests = () => {
  const data = useSelector(
    (state: any) => state.delete_account_request_data,
  );

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = () => {
    return (
      <div className="table-actions d-flex align-items-center">
        <Link
          to="#"
          className="btn badge-active"
          data-bs-toggle="modal"
          data-bs-target="#delete-item"
        >
          Confirm
        </Link>
      </div>
    );
  };

  const userDetail = (data: DeleteAccounts) => {
    return (
      <div className="d-flex">
        <Link to="#" className="table-profileimage">
          <ImageWithBasePath src={data.customer} className="me-2" alt="img" />
        </Link>
        <Link to="#" className="table-name">
          <span>{data.customerName}</span>
          <p>{data.email}</p>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Delete Account Request</h5>
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
                <DataTable
                  paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={data}
                >
                  <Column sortable field="id" header="User Id"></Column>
                  <Column
                    sortable
                    field="customerName"
                    header="User Name"
                    body={userDetail}
                  ></Column>
                  <Column
                    sortable
                    field="dates"
                    header="Requisition Date"
                  ></Column>
                  <Column
                    sortable
                    field="dates1"
                    header="Delete Request Date"
                  ></Column>

                  <Column
                    sortable
                    field="Action"
                    header="Action"
                    body={actionButton}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
        <DeleteAccountrequestsmodalpopup />
      </div>
    </>
  );
};

export default DeleteAccountrequests;
