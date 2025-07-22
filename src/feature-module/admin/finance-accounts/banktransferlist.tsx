import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { all_routes } from '../../../core/data/routes/all_routes';
import * as Icon from 'react-feather';
import { BankTransferItemdatas } from '../../../core/models/interface';

const BankTransferList = () => {
  const data = useSelector(
    (state: any) => state.banktransferData,
  );
  const [selectedValue, setSelectedValue] = useState(null);
  const statusRenderer = (rowData: BankTransferItemdatas) => {
    if (rowData.status === 'Successful') {
      return <span className="badge-active">{rowData.status}</span>;
    } else if (rowData.status === 'Rejected') {
      return <span className="badge-inactive">{rowData.status}</span>;
    } else if (rowData.status === 'Approved') {
      return <span className="badge-inactive">{rowData.status}</span>;
    } else if (rowData.status === 'Pending') {
      return <span className="badge-pending">{rowData.status}</span>;
    } else {
      return rowData.status;
    }
  };
  const routes = all_routes;

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
                      <Link to={routes.bankTransferList} className="active">
                        All List
                      </Link>
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
                      <Link to={routes.rejectedTransferlist}>
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
                      field="service"
                      header="Service"
                      body={(rowData) => (
                        <td>
                          <Link to="#" className="table-imgname">
                            <ImageWithBasePath
                              className="avatar-img rounded me-2"
                              src={rowData.img1}
                              alt="User Image"
                            />
                            <span>{rowData.service}</span>
                          </Link>
                        </td>
                      )}
                    ></Column>
                    <Column
                      field="customer"
                      header="Customer"
                      body={(rowData) => (
                        <td>
                          <Link to="#" className="table-profileimage">
                            <ImageWithBasePath
                              className="me-2"
                              src={rowData.img2}
                              alt="User Image"
                            />
                            <span>{rowData.customer}</span>
                          </Link>
                        </td>
                      )}
                    ></Column>
                    <Column
                      field="receipt"
                      header="Receipt"
                      body={(rowData) => (
                        <td>
                          <Link to="#" className="table-imgname">
                            <ImageWithBasePath
                              className="me-2"
                              src={rowData.img3}
                              alt="User Image"
                            />
                            <span>{rowData.receipt}</span>
                          </Link>
                        </td>
                      )}
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
                      body={statusRenderer}
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
    </>
  );
};

export default BankTransferList;
