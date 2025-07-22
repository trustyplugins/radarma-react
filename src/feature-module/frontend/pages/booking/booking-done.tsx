import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const BookingDone = () => {
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
              <li className="activate col-md-4">
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
              <li className="active col-md-4">
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
            {/* Booking Done */}
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="booking-done">
                  <ImageWithBasePath
                    src="assets/img/payment-success.svg"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="booking-done">
                  <h6>Successfully Completed Payment</h6>
                  <p>Your Booking has been Successfully Competed</p>
                  <div className="book-submit">
                    <Link to={routes.index} className="btn btn-dark">
                      <i className="feather icon-arrow-left-circle" /> Go to Home
                    </Link>
                    <Link to={routes.invoice} className="btn btn-light">
                      Booking History
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Booking Done */}
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

export default BookingDone;
