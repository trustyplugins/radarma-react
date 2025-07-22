import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../core/data/routes/all_routes'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import CustomDropdown from '../../common/dropdown/commonSelect'
import { paymentOption, serviceOption, staffOption, statusOption2 } from '../../../../core/data/json/dropDownData'
import CommonDatePicker from '../../../../core/hooks/commonDatePicker'

const CustomerDetails = () => {
  const routes = all_routes
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <h4 className="mb-4">Customers Details</h4>
      <div className="row">
        <div className="col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between pb-3 border-bottom mb-3">
                <h6>Personal Info</h6>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <span className="avatar avatar-lg flex-shrink-0 me-2">
                  <ImageWithBasePath
                    src="assets/img/user/user-01.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </span>
                <div>
                  <div className="d-flex flex-wrap row-gap-2">
                    <h6 className="me-2 fw-medium">Harvey Smith</h6>
                    <span className="badge bg-primary-transparent">
                      Last Booking : 16/04/2024
                    </span>
                  </div>
                  <span className="fs-14">harvey@example.com</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                <div>
                  <h6 className="fs-14">Phone</h6>
                  <span className="fs-14">+1 634 967 2145</span>
                </div>
                <div>
                  <h6 className="fs-14">Total Bookings</h6>
                  <span className="fs-14">60</span>
                </div>
                <div>
                  <h6 className="fs-14">Payments</h6>
                  <span className="fs-14">4</span>
                </div>
                <div>
                  <h6 className="fs-14">Created On</h6>
                  <span className="fs-14">14/01/2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex pb-3 border-bottom mb-4">
                <h6>Address Info</h6>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div>
                  <h6 className="me-2 fs-14">Adddress</h6>
                  <span className="fs-14">
                    {" "}
                    7865 Oakwood Drive, Apt 5B, Willow Creek Estates
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                <div>
                  <h6 className="fs-14">Country</h6>
                  <span className="fs-14">United States</span>
                </div>
                <div>
                  <h6 className="fs-14">State</h6>
                  <span className="fs-14">California</span>
                </div>
                <div>
                  <h6 className="fs-14">City</h6>
                  <span className="fs-14">Greenfield</span>
                </div>
                <div>
                  <h6 className="fs-14">Zip Code</h6>
                  <span className="fs-14">93927</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
          <h4>Services Info</h4>
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
            >
              <i className="ti ti-sort-descending" />
            </Link>
          </div>
        </div>
        <div id="filter_inputs">
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
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xl">
              <div className="mb-3">
              <CustomDropdown
                options={staffOption}
                className="select d-flex"
                placeholder="Select"
            />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xl">
              <div className="mb-3">
              <CustomDropdown
                options={paymentOption}
                className="select d-flex"
                placeholder="Select"
            />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xl">
              <div className="mb-3">
              <CustomDropdown
                options={statusOption2}
                className="select d-flex"
                placeholder="Select"
            />
              </div>
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
                  <th>Service Name</th>
                  <th>Booking Date</th>
                  <th>Staff Name</th>
                  <th>Payment Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/providers/provider-15.jpg"
                          className="rounded"
                          alt="user"
                        />
                      </Link>
                      <h6 className="fs-14">
                        <Link to={routes.serviceDetails1}>Computer Repair</Link>
                      </h6>
                    </div>
                  </td>
                  <td>16/04/2024</td>
                  <td className="d-flex align-items-center">
                    <Link
                      to={routes.staffDetails}
                      className="avatar avatar-lg me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-16.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </Link>
                    <h6 className="fs-14">
                      <Link to={routes.staffDetails}>Jeff Fitch</Link>
                    </h6>
                  </td>
                  <td>Paypal</td>
                  <td>$2000</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex  align-items-center">
                        <i className="ti ti-point-filled" />
                        Paid
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/providers/provider-17.jpg"
                          className="rounded"
                          alt="user"
                        />
                      </Link>
                      <h6 className="fs-14">
                        <Link to={routes.serviceDetails1}>Steam Car Wash</Link>
                      </h6>
                    </div>
                  </td>
                  <td>03/05/2024</td>
                  <td className="d-flex align-items-center">
                    <Link
                      to={routes.staffDetails}
                      className="avatar avatar-lg me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-17.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </Link>
                    <h6 className="fs-14">
                      <Link to={routes.staffDetails}>Jacob Kline</Link>
                    </h6>
                  </td>
                  <td>Stripe</td>
                  <td>$1800</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex  align-items-center">
                        <i className="ti ti-point-filled" />
                        Overdue
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/providers/provider-19.jpg"
                          className="rounded"
                          alt="user"
                        />
                      </Link>
                      <h6 className="fs-14">
                        <Link to={routes.serviceDetails1}>House Cleaning </Link>
                      </h6>
                    </div>
                  </td>
                  <td>22/06/2024</td>
                  <td className="d-flex align-items-center">
                    <Link
                      to={routes.staffDetails}
                      className="avatar avatar-lg me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-33.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </Link>
                    <h6 className="fs-14">
                      <Link to={routes.staffDetails}>Donald Gordon</Link>
                    </h6>
                  </td>
                  <td>Stripe</td>
                  <td>$1200</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-info-transparent d-flex  align-items-center">
                        <i className="ti ti-point-filled" />
                        Pending
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/providers/provider-14.jpg"
                          className="rounded"
                          alt="user"
                        />
                      </Link>
                      <h6 className="fs-14">Building Construction</h6>
                    </div>
                  </td>
                  <td>14/06/2024</td>
                  <td className="d-flex align-items-center">
                    <Link
                      to={routes.staffDetails}
                      className="avatar avatar-lg me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-26.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </Link>
                    <h6 className="fs-14">
                      <Link to={routes.staffDetails}>Kara Coble</Link>
                    </h6>
                  </td>
                  <td>Paypal</td>
                  <td>$1700</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge bg-warning-transparent d-flex  align-items-center">
                        <i className="ti ti-point-filled" />
                        Draft
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/providers/provider-16.jpg"
                          className="rounded"
                          alt="user"
                        />
                      </Link>
                      <h6 className="fs-14">
                        <Link to={routes.serviceDetails1}>Interior Designing</Link>
                      </h6>
                    </div>
                  </td>
                  <td>08/07/2024</td>
                  <td className="d-flex align-items-center">
                    <Link
                      to={routes.staffDetails}
                      className="avatar avatar-lg me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-35.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </Link>
                    <h6 className="fs-14">
                      <Link to={routes.staffDetails}>Jacob Vance</Link>
                    </h6>
                  </td>
                  <td>Paypal</td>
                  <td>$1100</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex  align-items-center">
                        <i className="ti ti-point-filled" />
                        Paid
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/providers/provider-23.jpg"
                          className="rounded"
                          alt="user"
                        />
                      </Link>
                      <h6 className="fs-14">
                        <Link to={routes.serviceDetails1}>Plumbing Services</Link>
                      </h6>
                    </div>
                  </td>
                  <td>17/08/2024</td>
                  <td className="d-flex align-items-center">
                    <Link
                      to={routes.staffDetails}
                      className="avatar avatar-lg me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-36.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </Link>
                    <h6 className="fs-14">
                      <Link to={routes.staffDetails}>William Smith</Link>
                    </h6>
                  </td>
                  <td>Paypal</td>
                  <td>$800</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex  align-items-center">
                        <i className="ti ti-point-filled" />
                        Overdue
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/providers/provider-13.jpg"
                          className="rounded"
                          alt="user"
                        />
                      </Link>
                      <h6 className="fs-14">
                        <Link to={routes.serviceDetails1}>Car Repair Services</Link>
                      </h6>
                    </div>
                  </td>
                  <td>22/10/2024</td>
                  <td className="d-flex align-items-center">
                    <Link
                      to={routes.staffDetails}
                      className="avatar avatar-lg me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-52.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </Link>
                    <h6 className="fs-14">
                      <Link to={routes.staffDetails}>Taylor Pacheco</Link>
                    </h6>
                  </td>
                  <td>Stripe</td>
                  <td>$1000</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex  align-items-center">
                        <i className="ti ti-point-filled" />
                        Overdue
                      </span>
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
</>

  )
}

export default CustomerDetails