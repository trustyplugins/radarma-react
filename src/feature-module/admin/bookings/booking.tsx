/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { all_routes } from '../../../core/data/routes/all_routes';
import * as Icon from 'react-feather';
import { BookingInterface } from '../../../core/models/interface';

const Booking = () => {
  const routes = all_routes;
  const data = useSelector((state: any) => state.all_booking);
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const value2 = [
    { name: 'Select Status' },
    { name: 'Pending' },
    { name: 'Inprogress' },
    { name: 'Completed' },
    { name: 'Cancelled' },
  ];
  

  const providerImage = (rowData: BookingInterface) => {
    const [provider] = rowData.provider.split('\n');
    return (
      <Link to="#" className="table-profileimage">
        <ImageWithBasePath src={rowData.img1} className="me-2" alt="img" />
        <span>{provider}</span>
      </Link>
    );
  };
  const userImage = (rowData: BookingInterface) => {
    const [user] = rowData.user.split('\n');
    return (
      <Link to="#" className="table-profileimage">
        <ImageWithBasePath src={rowData.img2} className="me-2" alt="img" />
        <span>{user}</span>
      </Link>
    );
  };
  const serviceImage = (rowData: BookingInterface) => {
    const [service] = rowData.service.split('\n');
    return (
      <Link to="#" className="table-imgname">
        <ImageWithBasePath src={rowData.img3} className="me-2" alt="img" />
        <span>{service}</span>
      </Link>
    );
  };
  const statusButton = (rowData: BookingInterface) => {
    if (rowData.status === 'Completed') {
      return <span className="badge-delete">{rowData.status}</span>;
    } else if (rowData.status === 'Canceleld') {
      return <span className="badge-inactive">{rowData.status}</span>;
    } else if (rowData.status === 'Inprogress') {
      return <span className="badge-inactive">{rowData.status}</span>;
    } else if (rowData.status === 'Pending') {
      return <span className="badge-pending">{rowData.status}</span>;
    } else {
      return rowData.status;
    }
  };
  const actionButton = () => {
    return (
      <div className="table-select">
      <div className="form-group mb-0">
        <select className="form-select">
          <option>Select Status</option>
          <option> Pending</option>
          <option> Inprogress</option>
          <option>Completed</option>
          <option>cancelled</option>
        </select>
      </div>
    </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Booking List</h5>
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
            <div className="col-12">
              <div className="tab-sets">
                <div className="tab-contents-sets">
                  <ul>
                    <li>
                      <Link to={routes.booking} className="active">
                        All Booking
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.pendingBooking}>Pending </Link>
                    </li>
                    <li>
                      <Link to={routes.inProgressBooking}>Inprogress </Link>
                    </li>
                    <li>
                      <Link to={routes.completedBooking}>Completed</Link>
                    </li>
                    <li>
                      <Link to={routes.cancelledBooking}>Cancelled</Link>
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
                    <Column sortable field="#" header="#"></Column>
                    <Column sortable field="date" header="Date"></Column>
                    <Column
                      sortable
                      field="bookingTime"
                      header="Booking Time"
                    ></Column>
                    <Column
                      sortable
                      field="provider"
                      header="Provider"
                      body={providerImage}
                    ></Column>
                    <Column
                      sortable
                      field="user"
                      header="User"
                      body={userImage}
                    ></Column>
                    <Column
                      sortable
                      field="service"
                      header="Service"
                      body={serviceImage}
                    ></Column>
                    <Column sortable field="amount" header="Amount"></Column>
                    <Column
                      sortable
                      field="status"
                      header="Status"
                      body={statusButton}
                    ></Column>
                    <Column
                      sortable
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

export default Booking;
