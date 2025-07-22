import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BookingModals from '../../customers/common/bookingModals';
import { customerOption, serviceOption, staffOption } from '../../../../core/data/json/dropDownData';
import CustomDropdown from '../../common/dropdown/commonSelect';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';


const ProviderBooking = () => {
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
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
          <h4>Booking List</h4>
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <span className="fs-14 me-2 ">Sort</span>
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
                  Newly Added
                </Link>
                <Link to="#" className="dropdown-item">
                  Oldest
                </Link>
              </div>
            </div>
            <Link
              to={routes.providerBookDetails}
              className="tags d-flex justify-content-center align-items-center border rounded me-2"
            >
              <i className="ti ti-calendar-month" />
            </Link>
            <Link
              to={routes.providerBooking}
              className="tags active d-flex justify-content-center align-items-center border rounded me-2"
            >
              <i className="ti ti-list" />
            </Link>
            <Link
              to="#"
              className="btn btn-dark d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_booking"
            >
              <i className="ti ti-circle-plus me-2" />
              Add Bookings
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xxl-12 col-lg-12">
        <div className="card shadow-none booking-list">
              <div className="card-body d-md-flex align-items-center">
                <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                  <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                    <Link to={routes.bookingDetails} className="avatar">
                      <ImageWithBasePath src="assets/img/providers/provider-15.jpg" alt="User Image" />
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
                      <ImageWithBasePath src="assets/img/providers/provider-13.jpg" alt="User Image" />
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
                      <ImageWithBasePath src="assets/img/providers/provider-16.jpg" alt="User Image" />
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
                    <Link to={routes.providerChat} className="btn btn-dark me-2">
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
                      <ImageWithBasePath src="assets/img/providers/provider-19.jpg" alt="User Image" />
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
                    <Link to={routes.providerChat} className="btn btn-dark me-2">
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
                      <ImageWithBasePath src="assets/img/providers/provider-18.jpg" alt="User Image" />
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
      <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-3">
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
                  className="page-link-1 d-flex justify-content-center align-items-center "
                  to="#"
                >
                  2
                </Link>
              </li>
              <li className="page-item ">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center "
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
    {/* Add Booking */}
    <div className="modal fade custom-modal" id="add_booking">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Booking</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Staff</label>
                  <CustomDropdown
                options={staffOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Service</label>
                  <CustomDropdown
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Customer</label>
                  <CustomDropdown
                options={customerOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <div className="sel-cal react-calender Calendar-icon">
                    <span>
                      <i className="ti ti-calendar-month" />
                    </span>
                    <CommonDatePicker/>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <div className="sel-cal Calendar-icon">
                        <span>
                          <i className="ti ti-clock" />
                        </span>
                        <input
                          className="form-control timepicker"
                          type="text"
                          placeholder="dd-mm-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <div className="sel-cal Calendar-icon">
                        <span>
                          <i className="ti ti-clock" />
                        </span>
                        <input
                          className="form-control timepicker"
                          type="text"
                          placeholder="dd-mm-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-0">
                  <label className="form-label">Booking Message</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Booking */}
  {/* /Page Wrapper */}
  <BookingModals/>
</>

  );
};

export default ProviderBooking;
