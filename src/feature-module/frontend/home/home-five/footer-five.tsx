import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterFive = () => {
  const routes = all_routes;

  return (
    <>
      <footer className="footer footer-five">
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget">
            <div className="footer-content">
              <h2 className="footer-subtitle">Newsletter Signup</h2>
              <div className="subscribe-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                <div className="footer-btn">
                  <button type="submit" className="btn btn-dark">
                    Send
                  </button>
                </div>
              </div>
            </div>
            {/* Footer Widget */}
            <div className="footer-widget">
              <h2 className="footer-title">Connect With us</h2>
              <div className="social-icon">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="ti ti-brand-facebook" />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ti ti-brand-twitter" />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ti ti-brand-youtube" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="ti ti-brand-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="download-icons">
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/appstore-five.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/googleplay-five.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title fs-18">Support</h2>
            <ul>
              <li>
                <Link to="#" className="fs-16">
                  Account
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title fs-18">About</h2>
            <ul>
              <li>
                <Link to="#" className="fs-16">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  About us
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="fs-16">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-contact">
            <h2 className="footer-title">Contact Us</h2>
            <div className="footer-contact-info">
              <div className="d-flex align-items-center">
                <div className="icons">
                  <span className="rounded-circle">
                    <i className="ti ti-phone" />
                  </span>
                </div>
                <div>
                  <p className="fs-14 text-white  mb-1">Phone Number</p>
                  <p className="fs-14 text-white mb-0">310-437-2766</p>
                </div>
              </div>
            </div>
            <div className="footer-contact-info">
              <div className="d-flex align-items-center">
                <div className="icons">
                  <span className="rounded-circle">
                    <i className="ti ti-mail" />
                  </span>
                </div>
                <div>
                  <p className="fs-14 text-white  mb-1">Mail Address</p>
                  <p className="fs-14 text-white mb-0">
                    contact@truelysell.com
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-contact-info">
              <div className="d-flex align-items-center">
                <div className="icons">
                  <span className="rounded-circle">
                    <i className="ti ti-map-pin" />
                  </span>
                </div>
                <div>
                  <p className="fs-14 text-white  mb-1">Address</p>
                  <p className="fs-14 text-white mb-0">
                    706 Campfire Ave. Meriden, CT{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Widget */}
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Top */}
  {/* Footer Bottom */}
  <div className="footer-bottom-car">
    <div className="container">
      {/* Copyright */}
      <div className="copyright">
        <div className="row align-items-center gy-3 justify-content-lg-center">
          <div className="col-md-6 col-lg-4">
            <div className="copyright-text">
              <p className="mb-0">Copyright © 2025. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="payment-image">
              <ul>
                <li>
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/payment/visa.png" alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/payment/mastercard.png" alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/payment/stripe.png" alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/payment/discover.png" alt="img" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            {/* Copyright Menu */}
            <div className="copyright-menu">
              <ul className="policy-menu">
                <li>
                  <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={routes.termsCondition}>Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            {/* /Copyright Menu */}
          </div>
        </div>
      </div>
      {/* /Copyright */}
    </div>
  </div>
  {/* /Footer Bottom */}
</footer>

    </>
  );
};

export default FooterFive;
