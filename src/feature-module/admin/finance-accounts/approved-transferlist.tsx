import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { all_routes } from '../../../core/data/routes/all_routes';
import {
 
  approvedtransfer
} from '../../../core/models/interface';

const ApprovedTransferlist = () => {
  const routes = all_routes;
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = () => {
    return (
      <>
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
      </>
    );
  };
  const serviceImage = (rowData: approvedtransfer) => {
    const [service] = rowData.service.split('\n');
    return (
      <Link to="#" className="table-imgname">
        <ImageWithBasePath src={rowData.img} className="me-2" alt="img" />
        <span>{service}</span>
      </Link>
    );
  };
  const customerImage = (rowData: approvedtransfer) => {
    const [customer] = rowData.customer.split('\n');
    return (
      <Link to="#" className="table-profileimage">
        <ImageWithBasePath src={rowData.img2} className="me-2" alt="img" />
        <span>{customer}</span>
      </Link>
    );
  };
  const invoiceImage = (rowData: approvedtransfer) => {
    const [receipt] = rowData.receipt.split('\n');
    return (
      <Link to="#" className="table-profileimage">
        <ImageWithBasePath src={rowData.img3} className="me-2" alt="img" />
        <span>{receipt}</span>
      </Link>
    );
  };
  const statusButton = (rowData: approvedtransfer) => {
    const [status] = rowData.status.split('\n');
    return <h6 className="badge-inactive">{status}</h6>;
  };
  const data = useSelector(
    (state: any) => state.approved_transferlist,
  );
  return (
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
                    <Link to={routes.approvedTransferlist} className="active">
                      Approved{' '}
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.pendingTransferlist}>Pending </Link>
                  </li>
                  <li>
                    <Link to={routes.successTransferlist}>Successful </Link>
                  </li>
                  <li>
                    <Link to={routes.rejectedTransferlist}>Rejected lists</Link>
                  </li>
                </ul>
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
                  <Column sortable field="#" header="#"></Column>
                  <Column
                    sortable
                    field="service"
                    header="Service"
                    body={serviceImage}
                  ></Column>
                  <Column
                    sortable
                    field="customer"
                    header="Customer"
                    body={customerImage}
                  ></Column>
                  <Column
                    sortable
                    field="receipt"
                    header="Receipt"
                    body={invoiceImage}
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
                    body={statusButton}
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
  );
};

export default ApprovedTransferlist;
