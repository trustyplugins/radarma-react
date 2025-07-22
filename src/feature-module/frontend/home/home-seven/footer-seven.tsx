import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterSeven = () => {
  const routes = all_routes;
  return (
    <footer className="footer footer-seven">
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-widget-seven">
            <div className="footer-logo">
              <Link to={routes.index}>
                <ImageWithBasePath src="assets/img/logo-white.svg" alt="logo" />
              </Link>
            </div>
            <div className="footer-content">
              <p>
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className="footer-selects footer-selects-seven">
              <h2 className="footer-subtitle">Newsletter Signup</h2>
              <div className="subscribe-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn footer-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Support</h2>
            <ul>
              <li>
                <Link to="#">Account</Link>
              </li>
              <li>
                <Link to="#">Book Appointment</Link>
              </li>
              <li>
                <Link to="#">Orders</Link>
              </li>
              <li>
                <Link to="#">Payments</Link>
              </li>
              <li>
                <Link to="#">Returns</Link>
              </li>
              <li>
                <Link to={routes.contactUs}>Contact us</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">About</h2>
            <ul>
              <li>
                <Link to={routes.categories}>Categories</Link>
              </li>
              <li>
                <Link to={routes.serviceGrid}>Services</Link>
              </li>
              <li>
                <Link to={routes.aboutUs}>About us</Link>
              </li>
              <li>
                <Link to={routes.faq}>FAQ</Link>
              </li>
              <li>
                <Link to={routes.blogGrid}>Blog</Link>
              </li>
              <li>
                <Link to={routes.termsCondition}>Terms</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Services</h2>
            <ul>
              <li>
                <Link to="#">Car Wash</Link>
              </li>
              <li>
                <Link to="#">Beauty Saloon</Link>
              </li>
              <li>
                <Link to="#">Construction</Link>
              </li>
              <li>
                <Link to="#">Plumbing service</Link>
              </li>
              <li>
                <Link to="#">Painting service</Link>
              </li>
              <li>
                <Link to="#">Plumbing</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-3 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget">
            <h2 className="footer-title">Contact</h2>
            <div className="footer-six-main">
              <div className="footer-six-left">
                <span className="footer-seven-icon">
                  <ImageWithBasePath src="assets/img/icons/call-calling.svg" alt="image" />
                </span>
                <div className="footer-six-ryt">
                  <span>Phone Number</span>
                  <h6>310-437-2766</h6>
                </div>
              </div>
              <div className="footer-six-left">
                <span className="footer-seven-icon">
                  <ImageWithBasePath src="assets/img/icons/sms.svg" alt="image" />
                </span>
                <div className="footer-six-ryt">
                  <span>Mail Address</span>
                  <h6>support@truelysell.com</h6>
                </div>
              </div>
              <div className="footer-six-left ">
                <span className="footer-seven-icon">
                  <ImageWithBasePath src="assets/img/icons/location.svg" alt="image" />
                </span>
                <div className="footer-six-ryt">
                  <span>Address</span>
                  <h6>706 Campfire Ave. Meriden, CT 06450</h6>
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
  <div className="footer-bottom footer-bottom-seven">
    <div className="container">
      {/* Copyright */}
      <div className="copyright">
        <div className="row gy-2">
          <div className="col-md-6">
            <div className="copyright-text">
              <p>Copyright 2024 © Truelysell. All right reserved.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-icon justify-content-md-end">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-facebook" />{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" />{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Copyright */}
    </div>
  </div>
  {/* /Footer Bottom */}
</footer>

  );
};

export default FooterSeven;
