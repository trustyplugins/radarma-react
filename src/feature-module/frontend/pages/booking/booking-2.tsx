import { Dropdown } from 'primereact/dropdown';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';

import Calendar from 'react-calendar';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const Booking2 = () => {
  const [value, onChange] = useState(new Date());
  const [selectedCountry, setselectedCountry] = useState(null);
  const [clear] = useState(true);
  const [isRescheduleModalFade, setIsRescheduleModalFade] = useState(false);

  const country = [{ name: 'Country' }, { name: 'US' }, { name: 'Kuwait' }];
  const [selectedFieldSet, setSelectedFieldSet] = useState(1);

  useEffect(() => {
    document.body.classList.add('modal-open');
  }, []);

  const handleNext = () => {
    setSelectedFieldSet(selectedFieldSet + 1);
  };

  const handlePrev = () => {
    setSelectedFieldSet(selectedFieldSet - 1);
  };

  const removeBackdrop = () => {
    setTimeout(() => {
      document.querySelector('.modal-backdrop')?.classList.remove('show');
    }, 1000);
  };

  return (
    <>
      {/* Reschedule */}

      <div
        className={`modal custom-modal reshchedule-modal${
          isRescheduleModalFade ? ' show' : ''
        }`}
        style={{ display: isRescheduleModalFade ? 'none' : 'block' }}
        data-bs-backdrop="static"
        id="reschedule-book-modal"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-body">
              <div
                className={`hide-show ${
                  selectedFieldSet === 1 ? 'd-block' : 'd-none'
                }`}
                id="show-first"
              >
                <div className="row">
                  <div className="col-lg-3 d-flex">
                    <div className="modal-active-dots text-center w-100">
                      <ul>
                        <li
                          className="active-dot active"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Select Date & Time"
                        />
                        <li className="active-dot" />
                        <li className="active-dot" />
                        <li className="active-dot" />
                      </ul>
                      <div className="calender-modal">
                        <ImageWithBasePath
                          src="assets/img/icons/modal-calender-icon.svg"
                          alt="calender Icon"
                        />
                        <h6>Date &amp; time</h6>
                        <p>Select date &amp; time to schedule appointment</p>
                      </div>
                      <div className="call-help">
                        <h6>
                          Questions?
                          <span>Call 321 546 8764 for help</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex">
                    <div className="main-booking-form w-100">
                      <div className="rechedule-calender">
                        <div className="book-title">
                          <h5>Select Date &amp; Time</h5>
                        </div>
                        <div id="datetimepickershow">
                          <Calendar onChange={() => onChange} value={value} />
                        </div>
                        <div className="pick-slot">
                          <h6>
                            Pick a Slot for <span> July 18</span>
                          </h6>
                          <div className="token-slot">
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">08:00 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">08:30 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">09:00 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">09:30 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">10:00 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">10:30 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">11:00 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">11:30 am</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">12:00 pm</span>
                              </label>
                            </div>
                            <div className="form-check-inline visits me-0">
                              <label className="visit-btns">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  name="appintment"
                                />
                                <span className="visit-rsn">12:30 pm</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field-bottom-btns select-timing justify-content-between">
                        <div className="field-btns">
                          <button
                            className="btn btn-primary prev_btnn disabled"
                            type="button"
                            onClick={handlePrev}
                          >
                            <i className="fa-solid fa-arrow-left" />
                            Prev
                          </button>
                        </div>
                        <div className="field-btns">
                          <button
                            className="btn btn-primary next_btnn"
                            type="button"
                            onClick={handleNext}
                          >
                            Next <i className="fa-solid fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card booking-summary-card">
                      <div className="card-body">
                        <div className="sub-title">
                          <h5>Booking Summary</h5>
                        </div>
                        <div className="appointment-details">
                          <ul>
                            <li>
                              <div className="detail-list">
                                <h5>Appointment date &amp; time</h5>
                                <h6 className="date-red">July 18, 11:30 am</h6>
                              </div>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Selected Service</h5>
                                <h6>Computer Services</h6>
                              </div>
                              <span>$40.00</span>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Additional Service</h5>
                                <h6>Changing Switch Boards</h6>
                              </div>
                              <span>$10.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <ul>
                          <li>
                            <h6>Sub Total</h6>
                            <span>$257.00</span>
                          </li>
                          <li>
                            <h6>Tax @ 12.5%</h6>
                            <span>$5.36</span>
                          </li>
                          <li className="total-amount">
                            <h6>Total</h6>
                            <span>$251.36</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`hide-show ${
                  selectedFieldSet === 2 ? 'd-block' : 'd-none'
                }`}
              >
                <div className="row">
                  <div className="col-lg-3">
                    <div className="modal-active-dots text-center">
                      <ul>
                        <li
                          className="active-dot activated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Select Date & Time"
                        />
                        <li
                          className="active-dot active"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Enter Information"
                        />
                        <li className="active-dot" />
                        <li className="active-dot" />
                      </ul>
                      <div className="calender-modal">
                        <ImageWithBasePath
                          src="assets/img/icons/booking-info-icon.svg"
                          alt="calender Icon"
                        />
                        <h6>Enter Information</h6>
                        <p>Ad your information for the appointment Booking</p>
                      </div>
                      <div className="call-help">
                        <h6>
                          Questions?
                          <span>Call 321 546 8764 for help</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex">
                    <div className="main-booking-form d-flex w-100">
                      <div className="rechedule-calender h-100">
                        <div className="book-title">
                          <h5>Enter Information</h5>
                        </div>
                        <div className="card booking-info-tab h-100">
                          <ul
                            className="nav nav-pills"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-guest-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-guest"
                                type="button"
                                role="tab"
                                aria-controls="pills-guest"
                                aria-selected="true"
                              >
                                Book as Guest
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-user-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-user"
                                type="button"
                                role="tab"
                                aria-controls="pills-user"
                                aria-selected="false"
                              >
                                Already have an account?
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pills-guest"
                              role="tabpanel"
                              aria-labelledby="pills-guest-tab"
                            >
                              <form>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="guest-address d-flex">
                                      <div className="guest-country w-100 me-2">
                                        <div className="form-group">
                                          <Dropdown
                                            value={selectedCountry}
                                            onChange={(e) =>
                                              setselectedCountry(e.value)
                                            }
                                            options={country}
                                            optionLabel="name"
                                            placeholder="Country"
                                            className="select footer-react-select"
                                          />
                                        </div>
                                      </div>
                                      <div className="guest-city w-100">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="guest-state-pin d-flex">
                                      <div className="guest-state w-100 me-2">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="State"
                                          />
                                        </div>
                                      </div>
                                      <div className="guest-pin w-100">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Zipcode"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group mb-0">
                                      <textarea
                                        className="form-control"
                                        placeholder="Comments"
                                        defaultValue={''}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div
                              className="tab-pane fade guest-user-tab"
                              id="pills-user"
                              role="tabpanel"
                              aria-labelledby="pills-user-tab"
                            >
                              <form>
                                <div className="sub-title">
                                  <h5>Login</h5>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                      />
                                    </div>
                                  </div>
                                  <div className="get-new-password">
                                    <p>
                                      Forgot Password ?{' '}
                                      <Link to=""> Click to Get Link</Link>
                                    </p>
                                  </div>
                                  <div className="form-group">
                                    <button className="btn btn-primary w-100">
                                      Login
                                    </button>
                                  </div>
                                </div>
                                <div className="join-user">
                                  <Link to="#">
                                    <i className="fa-solid fa-user me-2" />
                                    Join as a User
                                  </Link>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field-bottom-btns select-timing justify-content-between">
                        <div className="field-btns">
                          <button
                            className="btn btn-primary prev_btnn"
                            type="button"
                            onClick={handlePrev}
                          >
                            <i className="fa-solid fa-arrow-left" />
                            Prev
                          </button>
                        </div>
                        <div className="field-btns">
                          <button
                            className="btn btn-primary next_btnn"
                            type="button"
                            onClick={handleNext}
                          >
                            Next <i className="fa-solid fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card booking-summary-card">
                      <div className="card-body">
                        <div className="sub-title">
                          <h5>Booking Summary</h5>
                        </div>
                        <div className="appointment-details">
                          <ul>
                            <li>
                              <div className="detail-list">
                                <h5>Appointment date &amp; time</h5>
                                <h6 className="date-red">July 18, 11:30 am</h6>
                              </div>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Selected Service</h5>
                                <h6>Computer Services</h6>
                              </div>
                              <span>$40.00</span>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Additional Service</h5>
                                <h6>Changing Switch Boards</h6>
                              </div>
                              <span>$10.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <ul>
                          <li>
                            <h6>Sub Total</h6>
                            <span>$257.00</span>
                          </li>
                          <li>
                            <h6>Tax @ 12.5%</h6>
                            <span>$5.36</span>
                          </li>
                          <li className="total-amount">
                            <h6>Total</h6>
                            <span>$251.36</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`hide-show ${
                  selectedFieldSet === 3 ? 'd-block' : 'd-none'
                }`}
              >
                <div className="row">
                  <div className="col-lg-3">
                    <div className="modal-active-dots text-center">
                      <ul>
                        <li
                          className="active-dot activated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Select Date & Time"
                        />
                        <li
                          className="active-dot activated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Enter Information"
                        />
                        <li
                          className="active-dot active"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Payment Gateway"
                        />
                        <li className="active-dot" />
                      </ul>
                      <div className="calender-modal">
                        <ImageWithBasePath
                          src="assets/img/icons/payment-gateway-icon.svg"
                          alt="calender Icon"
                        />
                        <h6>Payment Gateway</h6>
                        <p>Select your payment type to pay for appointment</p>
                      </div>
                      <div className="call-help">
                        <h6>
                          Questions?
                          <span>Call 321 546 8764 for help</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex">
                    <div className="main-booking-form d-flex w-100">
                      <div className="rechedule-calender h-100">
                        <div className="book-title">
                          <h5>Payment Gateway</h5>
                        </div>
                        <div className="card booking-info-tab h-100">
                          <div className="payment-card">
                            <div className="payment-head">
                              <div className="payment-title">
                                <label className="custom_radio">
                                  <input
                                    type="radio"
                                    name="payment"
                                    className="card-payment"
                                  />
                                </label>
                                <h6>Paypal</h6>
                              </div>
                              <div className="card-icon">
                                <ImageWithBasePath
                                  src="assets/img/icons/paypal-icon.svg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="payment-card payment-bg">
                            <div className="payment-head">
                              <div className="payment-title">
                                <label className="custom_radio">
                                  <input
                                    type="radio"
                                    name="payment"
                                    className="card-payment"
                                  />
                                </label>
                                <h6>Credit / Debit Card</h6>
                              </div>
                              <div className="card-icon">
                                <ImageWithBasePath
                                  src="assets/img/card-icon-1.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="payment-card">
                            <div className="payment-head">
                              <div className="payment-title">
                                <label className="custom_radio credit-card-option">
                                  <input
                                    type="radio"
                                    name="payment"
                                    className="card-payment"
                                  />
                                </label>
                                <h6>Cash on Delivery</h6>
                              </div>
                              <div className="card-icon">
                                <ImageWithBasePath
                                  src="assets/img/card-icon-2.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field-bottom-btns select-timing justify-content-between">
                        <div className="field-btns">
                          <button
                            className="btn btn-primary prev_btnn"
                            type="button"
                            onClick={handlePrev}
                          >
                            <i className="fa-solid fa-arrow-left" />
                            Prev
                          </button>
                        </div>
                        <div className="field-btns">
                          <button
                            className="btn btn-primary next_btnn submit-btn"
                            type="button"
                            onClick={handleNext}
                          >
                            Submit <i className="fa-solid fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card booking-summary-card">
                      <div className="card-body">
                        <div className="sub-title">
                          <h5>Booking Summary</h5>
                        </div>
                        <div className="appointment-details">
                          <ul>
                            <li className="droped-item">
                              <div className="detail-list">
                                <h5>
                                  Customer Details{' '}
                                  <i className="fa-solid fa-circle-info" />
                                </h5>
                                <h6 className="date-red">Testuser</h6>
                              </div>
                              <ul className="customer-detail-list">
                                <li>
                                  <h6>Email Address</h6>
                                  <p>john@example.com</p>
                                </li>
                                <li>
                                  <h6>Phone Number</h6>
                                  <p>+1 63993 35556</p>
                                </li>
                                <li>
                                  <h6>Address</h6>
                                  <p>578 Fleming StreetMontgomery, AL 36104</p>
                                </li>
                                <li>
                                  <h6>Comments</h6>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Appointment date &amp; time</h5>
                                <h6 className="date-red">July 18, 11:30 am</h6>
                              </div>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Selected Service</h5>
                                <h6>Computer Services</h6>
                              </div>
                              <span>$40.00</span>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Additional Service</h5>
                                <h6>Changing Switch Boards</h6>
                              </div>
                              <span>$10.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <ul>
                          <li>
                            <h6>Sub Total</h6>
                            <span>$257.00</span>
                          </li>
                          <li>
                            <h6>Tax @ 12.5%</h6>
                            <span>$5.36</span>
                          </li>
                          <li className="total-amount">
                            <h6>Total</h6>
                            <span>$251.36</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hide-show ${
                  selectedFieldSet === 4 ? 'd-block' : 'd-none'
                }`}
              >
                <div className="row">
                  <div className="col-lg-3">
                    <div className="modal-active-dots text-center">
                      <ul>
                        <li
                          className="active-dot activated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        />
                        <li
                          className="active-dot activated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Enter Information"
                        />
                        <li
                          className="active-dot activated"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Payment Gateway"
                        />
                        <li
                          className="active-dot active"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Payment Gateway"
                        />
                      </ul>
                      <div className="calender-modal">
                        <ImageWithBasePath
                          src="assets/img/icons/payment-gateway-icon.svg"
                          alt="calender Icon"
                        />
                        <h6>Payment Gateway</h6>
                        <p>Select your payment type to pay for appointment</p>
                      </div>
                      <div className="call-help">
                        <h6>
                          Questions?
                          <span>Call 321 546 8764 for help</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex">
                    <div className="main-booking-form d-flex w-100">
                      <div className="rechedule-calender h-100">
                        <div className="book-title">
                          <h5>Payment Gateway</h5>
                        </div>
                        <div className="card booking-info-tab h-100 justify-content-between">
                          <div>
                            <div className="sub-title">
                              <h5>Saved Cards</h5>
                            </div>
                            <div className="card-pay-save">
                              <div className="payment-card save-cards">
                                <div className="payment-head">
                                  <div className="payment-title">
                                    <label className="custom_radio">
                                      <input
                                        type="radio"
                                        name="payments"
                                        className=""
                                      />
                                      <span className="checkmark" />
                                    </label>
                                    <ImageWithBasePath
                                      src="assets/img/icons/saved-card-icon.svg"
                                      alt="image"
                                    />
                                    <h6>Mastercard</h6>
                                  </div>
                                  <div className="card-number">
                                    <span> ********* 1234</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="add-more-card-details">
                              <div className="add-more-card">
                                <Link to="#">
                                  <i className="fa-solid fa-circle-plus" /> Add
                                  new card
                                </Link>
                              </div>
                              <div className="hide-cards-group">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name On Card"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Card Number"
                                  />
                                </div>
                                <div className="card-details d-flex">
                                  <div className="expiry-date w-100 me-2">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Expiry Date"
                                      />
                                    </div>
                                  </div>
                                  <div className="cvv-num w-100">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="CVV Number"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="save-later">
                                  <label className="custom_check">
                                    <input
                                      type="checkbox"
                                      name="rememberme"
                                      className="rememberme"
                                    />
                                    <span className="checkmark" />
                                    Save for later
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="secure-transaction">
                              <span>
                                <i className="fa-solid fa-lock" />
                              </span>
                              <p>
                                All transactions are secure and encrypted.
                                Credit card information is never stored.
                              </p>
                            </div>
                          </div>
                          <div className="total-price">
                            <h5>
                              Total Booking Price :{' '}
                              <span className="price-value"> $251.36</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="field-bottom-btns select-timing justify-content-between">
                        <div className="field-btns">
                          <button
                            className="btn btn-primary prev_btnn"
                            type="button"
                            onClick={handlePrev}
                          >
                            <i className="fa-solid fa-arrow-left" />
                            Prev
                          </button>
                        </div>
                        <div className="field-btns">
                          <button
                            className="btn btn-primary next_btnn submit-btn"
                            type="button"
                            onClick={handleNext}
                          >
                            Next
                            <i className="fa-solid fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex">
                    <div className="card booking-summary-card">
                      <div className="card-body">
                        <div className="sub-title">
                          <h5>Booking Summary</h5>
                        </div>
                        <div className="appointment-details">
                          <ul>
                            <li className="droped-item">
                              <div className="detail-list">
                                <h5>
                                  Customer Details{' '}
                                  <i className="fa-solid fa-circle-info" />
                                </h5>
                                <h6 className="date-red">Testuser</h6>
                              </div>
                              <ul className="customer-detail-list">
                                <li>
                                  <h6>Email Address</h6>
                                  <p>john@example.com</p>
                                </li>
                                <li>
                                  <h6>Phone Number</h6>
                                  <p>+1 63993 35556</p>
                                </li>
                                <li>
                                  <h6>Address</h6>
                                  <p>578 Fleming StreetMontgomery, AL 36104</p>
                                </li>
                                <li>
                                  <h6>Comments</h6>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </p>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Appointment date &amp; time</h5>
                                <h6 className="date-red">July 18, 11:30 am</h6>
                              </div>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Selected Service</h5>
                                <h6>Computer Services</h6>
                              </div>
                              <span>$40.00</span>
                            </li>
                            <li>
                              <div className="detail-list">
                                <h5>Additional Service</h5>
                                <h6>Changing Switch Boards</h6>
                              </div>
                              <span>$10.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-footer">
                        <ul>
                          <li>
                            <h6>Sub Total</h6>
                            <span>$257.00</span>
                          </li>
                          <li>
                            <h6>Tax @ 12.5%</h6>
                            <span>$5.36</span>
                          </li>
                          <li className="total-amount">
                            <h6>Total</h6>
                            <span>$251.36</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hide-show ${
                  selectedFieldSet === 5 ? 'd-block' : 'd-none'
                }`}
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-3">
                    <div className="modal-active-dots text-center">
                      <div className="calender-modal">
                        <ImageWithBasePath
                          src="assets/img/icons/appointment-confirm-icon.svg"
                          alt="calender Icon"
                        />
                        <h6>Confirm Order</h6>
                        <p>
                          Handles different career a accordingly, after a of the
                          for found customary feedback by happiness
                        </p>
                      </div>
                      <div className="call-help">
                        <h6>
                          Questions?
                          <span>Call 321 546 8764 for help</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-9 d-flex">
                    <div className="main-booking-form d-flex w-100">
                      <div className="rechedule-calender h-100">
                        <div className="book-title">
                          <h5>Confirmation</h5>
                        </div>
                        <div className="card booking-confirmation-info h-100 mb-0">
                          <div className="card-body">
                            <div className="appointment-details">
                              <div className="details-head">
                                <h6>Appointment Details</h6>
                                <span>UBID-52</span>
                              </div>
                              <div className="add-calender">
                                <Link to="">
                                  <span>
                                    <i className="fa-solid fa-calendar-days" />
                                  </span>
                                  Add to Calender
                                </Link>
                              </div>
                            </div>
                            <div className="confirmation-product-card">
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <div className="service-item">
                                    <span>
                                      <ImageWithBasePath
                                        src="assets/img/product-confirm-img.jpg"
                                        className="img-fluid"
                                        alt="image"
                                      />
                                    </span>
                                    <div className="product-info">
                                      <h5>Computer Services</h5>
                                      <span className="duration">
                                        Duration : 30 Min
                                      </span>
                                      <span className="date-time">
                                        July 18, 11:30 am - 12:30 pm{' '}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="product-info service-additional">
                                    <h6>Additional Service</h6>
                                    <span>Changing Switch Boards</span>
                                  </div>
                                </div>
                                <div className="col-md-2">
                                  <div className="product-info service-cost">
                                    <h6>Total Paid</h6>
                                    <span>$400</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="customer-provider">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="name-card">
                                    <h6>Customer</h6>
                                    <div className="profile-detail">
                                      <span className="profile-pic">
                                        <ImageWithBasePath
                                          src="assets/img/profiles/avatar-21.jpg"
                                          className="img-fluid"
                                          alt="image"
                                        />
                                      </span>
                                      <div className="email-name">
                                        <span>Adrian</span>
                                        <p>testuser@example.com</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="name-card">
                                    <h6>Provider</h6>
                                    <div className="profile-detail">
                                      <span className="profile-pic">
                                        <ImageWithBasePath
                                          src="assets/img/profiles/avatar-22.jpg"
                                          className="img-fluid"
                                          alt="image"
                                        />
                                      </span>
                                      <div className="email-name">
                                        <span>Harrris</span>
                                        <Link to="">Learn More</Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="payed-method">
                              <span>Payment Method : Debit card</span>
                            </div>
                            <div className="field-bottom-btns select-timing justify-content-end">
                              <div className="field-btns">
                                <button
                                  className="btn btn-primary next_btn submit-btn"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#successmodal"
                                  onClick={() => setIsRescheduleModalFade(true)}
                                >
                                  Confirm Order{' '}
                                  <i className="fa-solid fa-arrow-right" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Reschedule */}
      <div className={`modal-backdrop ${clear ? 'show' : ''}`}></div>

      <>
        {/* Modal Succss */}
        <div
          className="modal fade add-service-modal"
          data-bs-backdrop="static"
          id="successmodal"
          tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <span>
                  <i className="fa-regular fa-circle-check" />
                </span>
                <h3>Success</h3>
                <p>Booking has been successfully Confirmed on</p>
                <div className="booking-date-time">
                  <i className="fa-regular fa-clock"> </i> 25 July 2023, 19:00
                  pm
                </div>
                <div className="popup-btn">
                  <Link
                    to="customer-dashboard"
                    className="btn btn-primary"
                    onClick={removeBackdrop}
                  >
                    Go to Dashboard <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Succss */}
      </>
    </>
  );
};

export default Booking2;
