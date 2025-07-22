import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const Booking1 = () => {
  const routes = all_routes;
  const [value, onChange] = useState(new Date());
  const [selectedCity, setselectedCity] = useState(null);
  const [selectedState, setselectedState] = useState(null);
  const [selectedCountry, setselectedCountry] = useState(null);

  const city = [
    { name: 'Select City' },
    { name: 'Tornoto' },
    { name: 'Texas' },
  ];
  const state = [
    { name: 'Select State' },
    { name: 'Tornoto' },
    { name: 'Texas' },
  ];
  const country = [{ name: 'Select Country' }, { name: 'US' }, { name: 'UK' }];

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
              <li className="active col-md-4">
                <div className="multi-step-icon">
                  <ImageWithBasePath src="assets/img/icons/calendar-icon.svg" alt="img" />
                </div>
                <div className="multi-step-info">
                  <h6>Appointment</h6>
                  <p>Choose time &amp; date for the service</p>
                </div>
              </li>
              <li className="col-md-4">
                <div className="multi-step-icon">
                  <ImageWithBasePath src="assets/img/icons/wallet-icon.svg" alt="img" />
                </div>
                <div className="multi-step-info">
                  <h6>Payment</h6>
                  <p>Select Payment Gateway</p>
                </div>
              </li>
              <li className="col-md-4">
                <div className="multi-step-icon">
                  <ImageWithBasePath src="assets/img/icons/book-done.svg" alt="img" />
                </div>
                <div className="multi-step-info">
                  <h6>Done </h6>
                  <p>Completion of Booking</p>
                </div>
              </li>
            </ul>
            {/* /Booking Step */}
            {/* Appointment */}
            <div className="booking-service card shadow-none">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 service-img me-3">
                        <ImageWithBasePath
                          src="assets/img/services/service-27.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="serv-profile">
                        <span className="badge badge-soft-primary">
                          Car Wash
                        </span>
                        <h5 className="my-2">Car Repair Services</h5>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md rounded-circle me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="rounded-circle"
                              alt="img"
                            />
                          </span>
                          <div className="serv-pro-info">
                            <h6 className="fs-14 fw-medium">Thomas Herzberg</h6>
                            <p className="serv-review">
                              <i className="fa-solid fa-star" />{" "}
                              <span>4.9 </span>(255 reviews)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="">
                          <div className="provide-box d-flex align-items-center mb-3">
                            <span className="me-2">
                              <i className="feather icon-phone" />
                            </span>
                            <div className="provide-info">
                              <h6 className="fs-14 fw-medium mb-1">Phone</h6>
                              <p>+1 888 888 8888</p>
                            </div>
                          </div>
                          <div className="provide-box d-flex align-items-center">
                            <span className="me-2">
                              <i className="feather icon-mail" />
                            </span>
                            <div className="provide-info">
                              <h6 className="fs-14 fw-medium mb-1">Email</h6>
                              <p>thomas@example.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="">
                          <div className="provide-box d-flex align-items-center mb-3">
                            <span className="me-2">
                              <i className="feather icon-map-pin" />
                            </span>
                            <div className="provide-info">
                              <h6 className="fs-14 fw-medium mb-1">Address</h6>
                              <p>Hanover, Maryland</p>
                            </div>
                          </div>
                          <div className="provide-box d-flex align-items-center">
                            <span className="me-2">
                              <i className="ti ti-wallet" />
                            </span>
                            <div className="provide-info">
                              <h6 className="fs-14 fw-medium mb-1">
                                Service Amount
                              </h6>
                              <h5>$150.00 </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="d-flex align-items-center social">
                      <Link
                        to="#"
                        className="d-flex align-items-center justify-content-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-form border-top border-bottom pt-4 pb-2">
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <Dropdown
                        value={selectedCity}
                        onChange={(e) => setselectedCity(e.value)}
                        options={city}
                        optionLabel="name"
                        placeholder="Select City"
                        className="select w-100"
                      />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <Dropdown
                        value={selectedState}
                        onChange={(e) => setselectedState(e.value)}
                        options={state}
                        optionLabel="name"
                        placeholder="Select State"
                        className="select w-100"
                      />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <Dropdown
                        value={selectedCountry}
                        onChange={(e) => setselectedCountry(e.value)}
                        options={country}
                        optionLabel="name"
                        placeholder="Select Country"
                        className="select w-100"
                      />
                  </div>
                </div>
              </div>
            </div>
            {/* /Appointment */}
            {/* Appointment Date & Time */}
            <div className="row">
              <div className="col-lg-4">
                <div className="book-title">
                  <h5>Appointment Date</h5>
                </div>
                <div className="card">
                  <div className="card-body p-2 pt-3">
                    <div id="datetimepickershow" >
                    <Calendar
                      className='w-100 border-0'
                      onChange={()=>onChange}
                      value={value}
                    />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-12">
                    <div className="book-title">
                      <h5>Appointment Time</h5>
                    </div>
                  </div>
                </div>
                <div className="token-slot mt-2">
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">09.00 AM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">09.30 AM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">10.00 AM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">10.30 AM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">11.00 AM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">11.30 AM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">12.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">12.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">01.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">01.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">02.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">02.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">03.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">03.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">04.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">04.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">05.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">05.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">06.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">06.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">07.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">07.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">08.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">08.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">09.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">09.30 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">10.00 PM</span>
                    </label>
                  </div>
                  <div className="form-check-inline visits me-0">
                    <label className="visit-btns">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="appintment"
                      />
                      <span className="visit-rsn">10.30 PM</span>
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-end mt-4">
                  <Link to="#" className="btn btn-light me-2">
                    Cancel
                  </Link>
                  <Link to={routes.bookingPayment} className="btn btn-dark">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
            {/* /Appointment Date & Time */}
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

export default Booking1;
