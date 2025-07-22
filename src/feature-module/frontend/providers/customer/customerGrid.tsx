import React, { useState } from 'react'
import CustomerModal from './customerModal'
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import CustomDropdown from '../../common/dropdown/commonSelect';
import { customerIdOption, customerOption, statusOption } from '../../../../core/data/json/dropDownData';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';

const CustomerGrid = () => {
  const routes = all_routes
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="row">
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
              className="tags active d-flex justify-content-center align-items-center border rounded me-2"
            >
              <i className="ti ti-layout-grid" />
            </Link>
            <Link
              to={routes.customerList}
              className="tags d-flex justify-content-center align-items-center border rounded me-2"
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
      </div>
      <div className="row justify-content-center">
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Anthony Lewis</Link>
                  </h6>
                  <span className="fs-12">anthony@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 634 967 2145</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">60</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">14/01/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$2000</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 16/04/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-35.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Brian Villalobos</Link>
                  </h6>
                  <span className="fs-12">brian@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 634 967 2146</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">50</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">20/02/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$1800</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 03/05/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-36.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Harvey Smith</Link>
                  </h6>
                  <span className="fs-12">harvey@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 964 648 5497</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">30</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">20/02/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$1200</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 22/06/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-52.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Stephan Peralt</Link>
                  </h6>
                  <span className="fs-12">peral@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 654 749 6488</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">45</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">15/03/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$1700</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 14/06/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-53.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Doglas Martini</Link>
                  </h6>
                  <span className="fs-12">martniwr@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 968 648 6964</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">25</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">12/04/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$1100</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 08/07/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-54.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Linda Ray</Link>
                  </h6>
                  <span className="fs-12">ray456@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 315 249 3478</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">10</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">20/05/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$800</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 17/08/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-55.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Elliot Murray</Link>
                  </h6>
                  <span className="fs-12">anthony@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 314 987 3145</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">20</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">06/07/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$1000</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 14/06/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Anthony Lewis</Link>
                  </h6>
                  <span className="fs-12">anthony@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 634 967 2145</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">60</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">14/01/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$2000</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 16/04/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Anthony Lewis</Link>
                  </h6>
                  <span className="fs-12">anthony@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 634 967 2145</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">60</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">14/01/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$2000</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 16/04/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Anthony Lewis</Link>
                  </h6>
                  <span className="fs-12">anthony@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 634 967 2145</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">60</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">14/01/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$2000</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 16/04/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Anthony Lewis</Link>
                  </h6>
                  <span className="fs-12">anthony@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 634 967 2145</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">60</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">14/01/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$2000</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 16/04/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center pb-2 border-bottom mb-3">
                <Link
                  to={routes.customerDetails}
                  className="avatar avatar-lg me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="Img"
                  />
                </Link>
                <div>
                  <h6 className="fs-14">
                    <Link to={routes.customerDetails}>Anthony Lewis</Link>
                  </h6>
                  <span className="fs-12">anthony@example.com</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Phone</span>
                    <h6 className="fs-12">+1 634 967 2145</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Total Bookings</span>
                    <h6 className="fs-12">60</h6>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="mb-3">
                    <span className="fs-12">Created On</span>
                    <h6 className="fs-12">14/01/2024</h6>
                  </div>
                  <div className="mb-3">
                    <span className="fs-12">Amount Received </span>
                    <h6 className="fs-12">$2000</h6>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap row-gap-2 border-top pt-3">
                <span className="badge badge-light text-dark">
                  Last Booking : 16/04/2024
                </span>
                <span className="badge badge-success-100 d-flex align-items-center">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link
          to="#"
          className="btn btn-dark d-flex align-items-center"
        >
          <i className="ti ti-loader me-2" />
          Loading
        </Link>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  <CustomerModal/>
</>

  )
}

export default CustomerGrid