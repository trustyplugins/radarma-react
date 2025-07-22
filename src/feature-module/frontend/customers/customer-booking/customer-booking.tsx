import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';
import BookingModals from '../common/bookingModals';

const CustomerBooking = () => {
  const routes = all_routes;
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  return (
    <>
    <BreadCrumb title='Bookings' item1='Customer' item2='Bookings'/>
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 ">
            <CustomerSideBar/>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
              <h4>Booking List</h4>
              <div className="d-flex align-items-center">
                <p className="text-dark me-2 mb-0">Sort</p>
                <div className="dropdown me-2">
                  <Link
                    to="#;"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Newly Added
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#;" className="dropdown-item active">
                      Newly Added
                    </Link>
                    <Link to="#;" className="dropdown-item">
                      Oldest
                    </Link>
                  </div>
                </div>
                <Link
                  to={routes.customerBookingCalendar}
                  className="tags d-flex justify-content-center align-items-center border rounded me-2"
                >
                  <i className="ti ti-calendar-month" />
                </Link>
                <Link
                  to="#;"
                  className="tags d-flex justify-content-center align-items-center border rounded"
                >
                  <i className="ti ti-filter" />
                </Link>
              </div>
            </div>
            <div className="card shadow-none booking-list">
              <div className="card-body d-md-flex align-items-center">
                <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                  <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                    <Link to={routes.bookingDetails} className="avatar">
                      <ImageWithBasePath src="assets/img/services/service-08.jpg" alt="User Image" />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className={`fav-icon ${selectedItems[1] ? 'selected' : ''}`} onClick={() => handleItemClick(1)}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="booking-det-info">
                    <h6 className="mb-3">
                      <Link to={routes.bookingDetails}>Computer Services</Link>
                      <span className="badge badge-soft-danger ms-2">Cancelled</span>
                    </h6>
                    <ul className="booking-details">
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Booking Date</span>{" "}
                        <small className="me-2">: </small>27 Sep, 17:00-18:00
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Amount</span>{" "}
                        <small className="me-2">: </small> $100.00
                        <span className="badge badge-soft-primary ms-2">Paypal</span>
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Location</span>{" "}
                        <small className="me-2">: </small>Newyork, USA
                      </li>
                      <li className="d-flex align-items-center flex-wrap">
                        <span className="book-item">Provider</span>{" "}
                        <small className="me-2">: </small>
                        <div className="user-book d-flex align-items-center flex-wrap me-2">
                          <div className="avatar avatar-xs me-2">
                            <ImageWithBasePath
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </div>
                          John Doe
                        </div>
                        <p className="mb-0 me-2">
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          info@johndoe.com
                        </p>
                        <p>
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          +1 888 888 8888
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link
                    to={routes.booking}
                    className="btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#reschedule"
                  >
                    Reschedule
                  </Link>
                </div>
              </div>
            </div>
            <div className="card shadow-none booking-list">
              <div className="card-body d-md-flex align-items-center">
                <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                  <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                    <Link to={routes.bookingDetails} className="avatar">
                      <ImageWithBasePath src="assets/img/services/service-09.jpg" alt="User Image" />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className={`fav-icon ${selectedItems[2] ? 'selected' : ''}`} onClick={() => handleItemClick(2)}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="booking-det-info">
                    <h6 className="mb-3">
                      <Link to={routes.bookingDetails}>Car Repair Services</Link>
                      <span className="badge badge-soft-success ms-2">Completed</span>
                    </h6>
                    <ul className="booking-details">
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Booking Date</span>{" "}
                        <small className="me-2">: </small>23 Sep 2022, 10:00-11:00
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Amount</span>{" "}
                        <small className="me-2">: </small> $50.00
                        <span className="badge badge-soft-primary ms-2">COD</span>
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Location</span>{" "}
                        <small className="me-2">: </small>Alabama, USA
                      </li>
                      <li className="d-flex align-items-center flex-wrap">
                        <span className="book-item">Provider</span>{" "}
                        <small className="me-2">: </small>
                        <div className="user-book d-flex align-items-center flex-wrap me-2">
                          <div className="avatar avatar-xs me-2">
                            <ImageWithBasePath
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </div>
                          John Smith
                        </div>
                        <p className="mb-0 me-2">
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          info@johnsmith.com
                        </p>
                        <p>
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          +1 607-276-5393
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-end">
                  <div className="d-flex align-items-center flex-wrap row-gap-2">
                    <Link to={routes.booking} className="btn btn-dark me-2">
                      Rebook
                    </Link>
                    <Link
                      to={routes.booking}
                      className="btn btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#add-review"
                    >
                      <i className="ti ti-circle-plus me-2" />
                      Add Review
                    </Link>
                  </div>
                  <div className="view-action mt-3 mb-0 me-0 ms-0">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <Link to={routes.bookingDetails} className="text-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none booking-list">
              <div className="card-body d-md-flex align-items-center">
                <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                  <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                    <Link to={routes.bookingDetails} className="avatar">
                      <ImageWithBasePath src="assets/img/services/service-10.jpg" alt="User Image" />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className={`fav-icon ${selectedItems[3] ? 'selected' : ''}`} onClick={() => handleItemClick(3)}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="booking-det-info">
                    <h6 className="mb-3">
                      <Link to={routes.bookingDetails}>Interior Designing</Link>
                      <span className="badge badge-soft-info ms-2">Inprogress</span>
                    </h6>
                    <ul className="booking-details">
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Booking Date</span>{" "}
                        <small className="me-2">: </small>22 Sep 2022, 11:00-12:00
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Amount</span>{" "}
                        <small className="me-2">: </small> $50.00
                        <span className="badge badge-soft-primary ms-2">Paypal</span>
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Location</span>{" "}
                        <small className="me-2">: </small>Washington, DC, USA
                      </li>
                      <li className="d-flex align-items-center flex-wrap">
                        <span className="book-item">Provider</span>{" "}
                        <small className="me-2">: </small>
                        <div className="user-book d-flex align-items-center flex-wrap me-2">
                          <div className="avatar avatar-xs me-2">
                            <ImageWithBasePath
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </div>
                          Quentin
                        </div>
                        <p className="mb-0 me-2">
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          info@quentin.com
                        </p>
                        <p>
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          +1 601-810-9218
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-end">
                  <div className="d-flex align-items-center flex-wrap row-gap-2">
                    <Link to={routes.customerChat} className="btn btn-dark me-2">
                      <i className="ti ti-message-2 me-2" />
                      Chat
                    </Link>
                    <Link
                      to={routes.booking}
                      className="btn btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#cancel_appointment"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none booking-list">
              <div className="card-body d-md-flex align-items-center">
                <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                  <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                    <Link to={routes.bookingDetails} className="avatar">
                      <ImageWithBasePath src="assets/img/services/service-11.jpg" alt="User Image" />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className={`fav-icon ${selectedItems[4] ? 'selected' : ''}`} onClick={() => handleItemClick(4)}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="booking-det-info">
                    <h6 className="mb-3">
                      <Link to={routes.bookingDetails}>Interior Designing</Link>
                      <span className="badge badge-soft-info ms-2">Inprogress</span>
                    </h6>
                    <ul className="booking-details">
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Booking Date</span>{" "}
                        <small className="me-2">: </small>22 Sep 2022, 11:00-12:00
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Amount</span>{" "}
                        <small className="me-2">: </small> $50.00
                        <span className="badge badge-soft-primary ms-2">Paypal</span>
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Location</span>{" "}
                        <small className="me-2">: </small>Washington, DC, USA
                      </li>
                      <li className="d-flex align-items-center flex-wrap">
                        <span className="book-item">Provider</span>{" "}
                        <small className="me-2">: </small>
                        <div className="user-book d-flex align-items-center flex-wrap me-2">
                          <div className="avatar avatar-xs me-2">
                            <ImageWithBasePath
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </div>
                          Quentin
                        </div>
                        <p className="mb-0 me-2">
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          info@quentin.com
                        </p>
                        <p>
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          +1 601-810-9218
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-end">
                  <div className="d-flex align-items-center flex-wrap row-gap-2">
                    <Link to={routes.customerChat} className="btn btn-dark me-2">
                      <i className="ti ti-message-2 me-2" />
                      Chat
                    </Link>
                    <Link
                      to={routes.booking}
                      className="btn btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#cancel_appointment"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none booking-list mb-0">
              <div className="card-body d-md-flex align-items-center">
                <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                  <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                    <Link to={routes.bookingDetails} className="avatar">
                      <ImageWithBasePath src="assets/img/services/service-12.jpg" alt="User Image" />
                    </Link>
                    <div className="fav-item">
                      <Link to="#" className={`fav-icon ${selectedItems[5] ? 'selected' : ''}`} onClick={() => handleItemClick(5)}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="booking-det-info">
                    <h6 className="mb-3">
                      <Link to={routes.bookingDetails}>Car Repair Services</Link>
                      <span className="badge badge-soft-success ms-2">Completed</span>
                    </h6>
                    <ul className="booking-details">
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Booking Date</span>{" "}
                        <small className="me-2">: </small>23 Sep 2022, 10:00-11:00
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Amount</span>{" "}
                        <small className="me-2">: </small> $50.00
                        <span className="badge badge-soft-primary ms-2">COD</span>
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <span className="book-item">Location</span>{" "}
                        <small className="me-2">: </small>Alabama, USA
                      </li>
                      <li className="d-flex align-items-center flex-wrap">
                        <span className="book-item">Provider</span>{" "}
                        <small className="me-2">: </small>
                        <div className="user-book d-flex align-items-center flex-wrap me-2">
                          <div className="avatar avatar-xs me-2">
                            <ImageWithBasePath
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </div>
                          John Smith
                        </div>
                        <p className="mb-0 me-2">
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          info@johnsmith.com
                        </p>
                        <p>
                          <i className="ti ti-point-filled fs-10 text-muted me-2" />
                          +1 607-276-5393
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-end">
                  <div className="d-flex align-items-center flex-wrap row-gap-2">
                    <Link to={routes.booking} className="btn btn-dark me-2">
                      Rebook
                    </Link>
                    <Link
                      to={routes.booking}
                      className="btn btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#add-review"
                    >
                      <i className="ti ti-circle-plus me-2" />
                      Add Review
                    </Link>
                  </div>
                  <div className="view-action mt-3 mb-0 me-0 ms-0">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <Link to={routes.bookingDetails} className="text-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  <BookingModals/>
</>

    </>
  );
};

export default CustomerBooking;
