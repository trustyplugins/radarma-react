import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { all_routes } from '../../../core/data/routes/all_routes';
import { RejectedTransferdatas } from '../../../core/models/interface';

const RejectTransferlist = () => {
  const data = useSelector(
    (state: any) => state.rejected_transferlist,
  );

  const routes = all_routes;

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const serviceName = (data: RejectedTransferdatas) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.image} className="me-2" alt="img" />
          <span>{data.name}</span>
        </Link>
      </div>
    );
  };

  const customer = (data: RejectedTransferdatas) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.customerimg} className="me-2" alt="img" />
          <span>{data.customer}</span>
        </Link>
      </div>
    );
  };

  const receipt = (data: RejectedTransferdatas) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.invoiceimg} className="me-2" alt="img" />
          <span>{data.invoice}</span>
        </Link>
      </div>
    );
  };

  const statusBar = (data: RejectedTransferdatas) => {
    return (
      <div>
        <h6 className={data.className}>{data.status}</h6>
      </div>
    );
  };

  const Action = () => {
    return (
      <div>
        <Link
          className="delete-table"
          to="#"
          data-bs-toggle="dropdown"
          aria-expanded="true"
        >
          <i className="fa fa-ellipsis-v" aria-hidden="true" />
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link to="#" className="dropdown-item">
              Transfer View
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item">
              Transfer Edit
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Bank Transfer</h5>
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
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-sets">
                <div className="tab-contents-sets">
                  <ul>
                    <li>
                      <Link to={routes.bankTransferList}>All List</Link>
                    </li>
                    <li>
                      <Link to={routes.approvedTransferlist}>Approved </Link>
                    </li>
                    <li>
                      <Link to={routes.pendingTransferlist}>Pending </Link>
                    </li>
                    <li>
                      <Link to={routes.successTransferlist}>Successful </Link>
                    </li>
                    <li>
                      <Link to={routes.rejectedTransferlist} className="active">
                        Rejected lists
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
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
                  <Column sortable field="id" header="Id"></Column>
                  <Column
                    sortable
                    field="name"
                    header="Service"
                    body={serviceName}
                  ></Column>
                  <Column
                    sortable
                    field="customer"
                    header="Customer"
                    body={customer}
                  ></Column>
                  <Column
                    sortable
                    field="invoice"
                    header="Receipt"
                    body={receipt}
                  ></Column>
                  <Column
                    sortable
                    field="description"
                    header="Description"
                  ></Column>
                  <Column sortable field="date" header="Date"></Column>

                  <Column
                    sortable
                    field="status"
                    header="Status"
                    body={statusBar}
                  ></Column>

                  <Column
                    sortable
                    field="action"
                    header="Action"
                    body={Action}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectTransferlist;
