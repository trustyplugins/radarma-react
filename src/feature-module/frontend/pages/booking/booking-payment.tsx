import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const BookingPayment = () => {
  const routes = all_routes;
  return (
    <>
    <BreadCrumb title='Bookings' item1='Customer' item2='Bookings'/>
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="row">
          {/* Booking */}
          <div className="col-lg-12">
            {/* Booking Step */}
            <ul className="step-register row">
              <li className="activate col-md-4">
                <div className="multi-step-icon">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/calendar-icon.svg" alt="img" />
                  </span>
                </div>
                <div className="multi-step-info">
                  <h6>Appointment</h6>
                  <p>Choose time &amp; date for the service</p>
                </div>
              </li>
              <li className="active col-md-4">
                <div className="multi-step-icon">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/wallet-icon.svg" alt="img" />
                  </span>
                </div>
                <div className="multi-step-info">
                  <h6>Payment</h6>
                  <p>Select Payment Gateway</p>
                </div>
              </li>
              <li className="col-md-4">
                <div className="multi-step-icon">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/book-done.svg" alt="img" />
                  </span>
                </div>
                <div className="multi-step-info">
                  <h6>Done </h6>
                  <p>Completion of Booking</p>
                </div>
              </li>
            </ul>
            {/* /Booking Step */}
            {/* Booking Payment */}
            <div className="row">
              <div className="col-lg-6">
                <h5 className="pay-title">Payment Methods</h5>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        defaultChecked
                      />
                      <label
                        className="btn  btn-check-label bg-light-500 w-100 d-flex justify-content-between align-items-center"
                        htmlFor="btnradio1"
                      >
                        <span className="d-flex align-items-center">
                          <span className="check-outer me-2">
                            <i />
                          </span>
                          Wallet
                        </span>
                        <span>
                          <i className="ti ti-wallet" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                      />
                      <label
                        className="btn btn-check-label bg-light-500 w-100 d-flex justify-content-between align-items-center"
                        htmlFor="btnradio2"
                      >
                        <span className="d-flex align-items-center">
                          <span className="check-outer me-2">
                            <i />
                          </span>
                          Paypal
                        </span>
                        <span>
                          <i className="ti ti-brand-paypal" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                      />
                      <label
                        className="btn  btn-check-label bg-light-500 w-100 d-flex justify-content-between align-items-center"
                        htmlFor="btnradio3"
                      >
                        <span className="d-flex align-items-center">
                          <span className="check-outer me-2">
                            <i />
                          </span>
                          Cash On Delivery
                        </span>
                        <span>
                          <i className="ti ti-coin" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="payment-cards">
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio4"
                      />
                      <label
                        className="btn btn-check-label credit-card-option bg-light-500 w-100 d-flex justify-content-between align-items-center"
                        htmlFor="btnradio4"
                      >
                        <span className="d-flex align-items-center">
                          <span className="check-outer me-2">
                            <i />
                          </span>
                          Credit / Debit Card
                        </span>
                        <span>
                          <i className="ti ti-coin" />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="payment-list">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="col-form-label">
                              Name on Card
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Name on Card"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="col-form-label">
                              Card Number
                            </label>
                            <input
                              className="form-control"
                              placeholder="**** **** **** ****"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="col-form-label">&nbsp;</label>
                            <div className="d-flex align-items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/payment-01.svg"
                                className="me-2"
                                alt=""
                              />
                              <ImageWithBasePath
                                src="assets/img/icons/payment-02.svg"
                                className="me-2"
                                alt=""
                              />
                              <ImageWithBasePath
                                src="assets/img/icons/payment-03.svg"
                                className="me-2"
                                alt=""
                              />
                              <ImageWithBasePath
                                src="assets/img/icons/payment-04.svg"
                                className="me-2"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="col-form-label">
                              Expiration date
                            </label>
                            <input
                              className="form-control"
                              placeholder="MM/YY"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="col-form-label">
                              Security code
                            </label>
                            <input
                              className="form-control"
                              placeholder="CVV"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="pay-title">Booking Summary</h5>
                <div className="summary-box">
                  <div className="booking-info">
                    <div className="service-book">
                      <div className="service-book-img">
                        <ImageWithBasePath
                          src="assets/img/services/rated-service-07.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="serv-profile">
                        <span className="badge badge-soft-primary">
                          Car Wash
                        </span>
                        <h2>Car Repair Services</h2>
                        <ul>
                          <li className="serv-pro">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="img"
                            />
                          </li>
                          <li className="serv-review">
                            <i className="fa-solid fa-star" /> <span>4.9 </span>
                            (255 reviews)
                          </li>
                          <li className="service-map">
                            <i className="feather icon-map-pin" /> Alabama, USA
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="booking-summary">
                    <ul className="booking-date">
                      <li>
                        Date <span>07/09/2023</span>
                      </li>
                      <li>
                        Time <span>12.30 Pm - 01. 00 PM</span>
                      </li>
                      <li>
                        Service Provider <span>Thomas Herzberg</span>
                      </li>
                    </ul>
                    <ul className="booking-date">
                      <li>
                        Subtotal <span>$150.00</span>
                      </li>
                      <li>
                        Coupoun Discount <span>$5.00</span>
                      </li>
                      <li>
                        Services Charges <span>$3.00</span>
                      </li>
                    </ul>
                    <div className="booking-total">
                      <ul className="booking-total-list">
                        <li>
                          <span>Total</span>
                          <span className="total-cost">$148.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="booking-coupon">
                  <div className="form-group w-100">
                    <div className="coupon-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon Code"
                      />
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/coupon-icon.svg"
                          alt="image"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-dark">Apply</button>
                  </div>
                </div>
                <div className="save-offer">
                  <p>
                    <i className="fa-solid fa-circle-check" /> Your total saving
                    on this order $5.00
                  </p>
                </div>
                <div className="booking-pay">
                  <Link
                    to={routes.bookingDone}
                    className="btn btn-dark me-3 w-100"
                  >
                    Proceed to Pay $148
                  </Link>
                  <Link to="#" className="btn btn-light">
                    Skip
                  </Link>
                </div>
              </div>
            </div>
            {/* /Booking Payment */}
          </div>
          {/* /Booking */}
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </>
  );
};

export default BookingPayment;
