import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import BookingModals from '../../customers/common/bookingModals';

const BookingDetails = () => {
  const routes = all_routes;

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <>
      <BreadCrumb title='Booking Details' item1='Pages' item2='Booking Details'/>
      {/* /Breadcrumb */}
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 mx-auto">
                <div className="breadcrumb">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb mb-4">
                      <li className="breadcrumb-item">
                        <Link to={routes.index}>Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Orders
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        ID 2378910
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="row booking-details">
                  <div className="col-md-4">
                    <div>
                      <h4 className="mb-2">Booking ID: 2378910</h4>
                      <p className="fs-12">
                        <i className="feather icon-calendar me-1" /> 22 Sep 2023 10:23 AM
                      </p>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="d-flex gap-3 justify-content-end">
                      <Link
                        to="#"
                        className="btn btn-light d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-current-location me-1" />
                        LiveTrack
                      </Link>
                      <Link
                        to={routes.invoice}
                        className="btn btn-light d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-file-text me-1" />
                        Invoice
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-light d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-printer me-1" />
                        Print
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Slot Booked */}
                <div className="slot-box mt-3">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="slot-booked">
                        <h6>Booked Slot</h6>
                        <ul>
                          <li className="fs-12 d-flex align-items-center mb-2">
                            <i className="feather icon-calendar me-1" /> 22 Sep 2023
                          </li>
                          <li className="fs-12 d-flex align-items-center">
                            <i className="feather icon-clock  me-1" /> 10:00AM - 11:00AM
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slot-user">
                        <h6>Services Provider</h6>
                        <div className="slot-chat">
                          <div className="slot-user-img d-flex align-items-center">
                            <ImageWithBasePath
                              className="avatar rounded-circle  me-2"
                              src="assets/img/profiles/avatar-31.jpg"
                              alt="image"
                            />
                            <div className="slot-user-info">
                              <p className="mb-1 fs-12">John Doe</p>
                              <p className="mb-0 fs-12">john@example.com</p>
                            </div>
                          </div>
                          <div className="chat-item d-flex align-items-center">
                            <div className="slot-user-info">
                              <p className="mb-0 fs-12">+1 888 888 8888</p>
                              <p className="mb-0 fs-12">Montana, USA</p>
                            </div>
                            <div>
                              <Link
                                to={routes.customerChat}
                                className="btn btn-sm btn-dark d-flex align-items-center"
                              >
                                {" "}
                                <i className="ti ti-message me-1" /> Chat
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="slot-action">
                        <h6>Booking Status</h6>
                        <span className="badge badge-success-100 p-2 me-3">
                          Completed
                        </span>
                        <span className="badge badge-skyblue p-2">Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Slot Booked */}
                <div className="payment-summary">
                  <div className="row">
                    {/* Service Location */}
                    <div className="col-md-6 service-location">
                      <h6 className="order-title">
                        Service Location &amp; Contact Details
                      </h6>
                      <div className="slot-address">
                        <ul>
                          <li>
                            <span>
                              <i className=" ti ti-map-pin" />
                            </span>
                            <div>
                              <h6>Address</h6>
                              <p>38 Taylor Street Mount Vernon, NY 10550</p>
                            </div>
                          </li>
                          <li>
                            <span>
                              <i className="ti ti-mail" />
                            </span>
                            <div>
                              <h6>Email</h6>
                              <p>johnsmith@example.com</p>
                            </div>
                          </li>
                          <li>
                            <span>
                              <i className="ti ti-phone" />
                            </span>
                            <div>
                              <h6>Phone</h6>
                              <p>+1 888 888 8888</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="slot-pay">
                        <p> Payment</p>
                        <span className="fs-14">
                          Visa **** **** **** **56{" "}
                          <ImageWithBasePath src="assets/img/icons/visa.svg" alt="Img" />
                        </span>
                      </div>
                    </div>
                    {/* /Service Location */}
                    {/* Order Summary */}
                    <div className="col-md-6 order-summary">
                      <h6 className="order-title">Order Summary</h6>
                      <div className="ord-summary">
                        <div className="order-amt">
                          <div className="order-info">
                            <div className="order-img">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-26.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="order-profile">
                              <h6>Computer Services</h6>
                              <p>Newyork, USA</p>
                            </div>
                          </div>
                          <h5>$599.00</h5>
                        </div>
                        <ul>
                          <li>
                            Sub Total <span className="ord-amt">$257.00</span>
                          </li>
                          <li>
                            <p className="ord-code mb-0">
                              {" "}
                              Discount{" "}
                              <span className=" ms-2 p-2 badge badge-info-transparent">
                                NEW 2024
                              </span>
                            </p>{" "}
                            <span className="ord-amt">-$11.00</span>
                          </li>
                          <li>
                            Tax @ 12.5% <span className="ord-amt">$5.36</span>
                          </li>
                          <li className="ord-total mb-0">
                            Total <span className="ord-amt">$251.36</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Order Summary */}
                    <div className="row booking">
                      {/* Booking History */}
                      <div className="col-md-6">
                        <h6 className="order-title">Booking History</h6>
                        <div className="book-history">
                          <ul>
                            <li>
                              <h6>Booking</h6>
                              <p>
                                <i className="ti ti-calendar me-1" /> September 5,
                                2023
                              </p>
                            </li>
                            <li>
                              <h6>Provider Accept</h6>
                              <p>
                                <i className="ti ti-calendar me-1" /> September 5,
                                2023
                              </p>
                            </li>
                            <li>
                              <h6>Completed on</h6>
                              <p>
                                <i className="ti ti-calendar me-1" /> September 5,
                                2023
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Booking History */}
                      {/* Reviews */}
                      <div className="col-md-6">
                        <div className="order-reviews">
                          <div className="row align-items-center mb-4">
                            <div className="col-5">
                              <h6 className="order-title">Reviews</h6>
                            </div>
                            <div className="col-7 text-end d-flex justify-content-end">
                              <Link
                                to="#"
                                className="btn btn-sm d-flex align-items-center btn-dark"
                                data-bs-toggle="modal"
                                data-bs-target="#add-review"
                              >
                                <i className="feather icon-plus-circle me-2" />
                                Add Review
                              </Link>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="order-comment">
                                <div className="rating">
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                  <i className="ti ti-star-filled text-warning" />
                                </div>
                                <h6>A wonderful experience was all the help...</h6>
                                <p>
                                  <i className="fa-solid fa-calendar-days me-1" />{" "}
                                  September 5, 2023
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Reviews */}
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
  );
};

export default BookingDetails;
