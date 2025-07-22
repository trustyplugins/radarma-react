import React, { useState } from 'react'
import CustomerModal from './customerModal'
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { customerIdOption, customerOption, statusOption } from '../../../../core/data/json/dropDownData';
import CustomDropdown from '../../common/dropdown/commonSelect';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';

const CustomerList = () => {
  const routes = all_routes
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
        <h4>Customers</h4>
        <div className="d-flex align-items-center flex-wrap row-gap-3">
          <span className="fs-14 me-2">Sort</span>
          <div className="dropdown me-2">
            <Link
              to="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Newly Added
            </Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item active">
                Ascending
              </Link>
              <Link to="#" className="dropdown-item">
                Descending
              </Link>
            </div>
          </div>
          <div className="dropdown me-2">
            <Link
              to="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Export
            </Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item active">
                Export as PDF
              </Link>
              <Link to="#" className="dropdown-item">
                Export as Excel
              </Link>
            </div>
          </div>
          <Link
            to="#"
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-printer" />
          </Link>
          <Link
            to="#"
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
            id="filter_search"
            onClick={()=>setShowFilter(!showFilter)}
          >
            <i className="ti ti-sort-descending" />
          </Link>
          <Link
            to={routes.customerGrid}
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-layout-grid" />
          </Link>
          <Link
            to={routes.customerList}
            className="tags active d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-list" />
          </Link>
          <Link
            to="#"
            className="btn btn-dark d-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#add-user"
          >
            <i className="ti ti-circle-plus me-2" />
            Add Customer
          </Link>
        </div>
      </div>
      <div id="filter_inputs" style={{display: showFilter ? 'block':'none'}}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
              <div className="sel-cal react-calender Calendar-icon">
                <span>
                  <i className="ti ti-calendar-month" />
                </span>
                <CommonDatePicker/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={customerIdOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={customerOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={statusOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="provide-table manage-table">
          <div className="table-responsive">
            <table className="table  datatable">
              <thead className="thead-light">
                <tr>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Phone</th>
                  <th>Created On</th>
                  <th>Payments</th>
                  <th>Total Bookings</th>
                  <th>Last Booking</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ST0263</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.customerDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14">
                          <Link to={routes.customerDetails}>Anthony Lewis</Link>
                        </h6>
                        <span className="fs-12">anthony@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>+1 634 967 2145</td>
                  <td>14/01/2024</td>
                  <td>$2000</td>
                  <td>60</td>
                  <td>16/04/2024</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#delete-user"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST5246</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.customerDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-35.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14">
                          <Link to={routes.customerDetails}>Brian Villalobos</Link>
                        </h6>
                        <span className="fs-12">brian@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>+1 314 367 2146</td>
                  <td>21/01/2024</td>
                  <td>$1800</td>
                  <td>50</td>
                  <td>03/05/2024</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#delete-user"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST7645</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.customerDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-36.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14">
                          <Link to={routes.customerDetails}>Harvey Smith</Link>
                        </h6>
                        <span className="fs-12">harvey@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>+1 964 648 5497</td>
                  <td>20/02/2024</td>
                  <td>$1200</td>
                  <td>30</td>
                  <td>22/06/2024</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#delete-user"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST1269</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.customerDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-52.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14">
                          <Link to={routes.customerDetails}>Stephan Peralt</Link>
                        </h6>
                        <span className="fs-12">peral@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>+1 654 749 6488</td>
                  <td>15/03/2024</td>
                  <td>$1700</td>
                  <td>45</td>
                  <td>14/06/2024</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST7436</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.customerDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-53.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14">
                          <Link to={routes.customerDetails}>Doglas Martini</Link>
                        </h6>
                        <span className="fs-12">martniwr@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>+1 968 648 6964</td>
                  <td>12/04/2024</td>
                  <td>$1100</td>
                  <td>25</td>
                  <td>08/07/2024</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Inactive
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#delete-user"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST3695</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.customerDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-54.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14">
                          <Link to={routes.customerDetails}>Linda Ray</Link>
                        </h6>
                        <span className="fs-12">ray456@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>+1 315 249 3478</td>
                  <td>20/05/2024</td>
                  <td>$800</td>
                  <td>10</td>
                  <td>17/08/2024</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Inactive
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#delete-user"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST5348</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.customerDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-55.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14">
                          <Link to={routes.customerDetails}>Elliot Murray</Link>
                        </h6>
                        <span className="fs-12">murray@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>+1 314 987 3145</td>
                  <td>06/07/2024</td>
                  <td>$1000</td>
                  <td>20</td>
                  <td>22/10/2024</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Inactive
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-user"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#delete-user"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-paginate d-flex justify-content-between align-items-center flex-wrap row-gap-3">
          <div className="value d-flex align-items-center">
            <span>Show</span>
            <select>
              <option>7</option>
            </select>
            <span>entries</span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-2 text-gray-9">1 - 07 of 10</span>
            <nav aria-label="Page navigation">
              <ul className="paginations d-flex justify-content-center align-items-center">
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 active d-flex justify-content-center align-items-center "
                    to="#"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center"
                    to="#"
                  >
                    2
                  </Link>
                </li>
                <li className="page-item ">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center"
                    to="#"
                  >
                    3
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
 <CustomerModal/>
</>

  )
}

export default CustomerList