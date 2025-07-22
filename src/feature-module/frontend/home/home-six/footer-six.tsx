import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterSix = () => {
  const routes = all_routes;
  return (
    <footer className="footer footer-six-content">
  <div className="footer-top-content d-none d-lg-block">
    <ImageWithBasePath src="assets/img/bg-wave.png" alt="image" />
  </div>
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-wid-six">
            <div className="footer-logo">
              <Link to={routes.index}>
                <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="footer-content">
              <div className="footer-six-main">
                <div className="footer-six-left">
                  <ImageWithBasePath src="assets/img/icons/call-calling.svg" alt="image" />
                  <div className="footer-six-ryt">
                    <span>Phone Number</span>
                    <h6>310-437-2766</h6>
                  </div>
                </div>
                <div className="footer-six-left">
                  <ImageWithBasePath src="assets/img/icons/sms.svg" alt="image" />
                  <div className="footer-six-ryt">
                    <span>Mail Address</span>
                    <h6>support@truelysell.com</h6>
                  </div>
                </div>
                <div className="footer-six-left ">
                  <ImageWithBasePath src="assets/img/icons/location.svg" alt="image" />
                  <div className="footer-six-ryt">
                    <span>Address</span>
                    <h6>706 Campfire Ave. Meriden, CT 06450</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Locations</h2>
            <ul>
              <li>
                <Link to="#">Atlanta, GA</Link>
              </li>
              <li>
                <Link to="#">Boston, MA</Link>
              </li>
              <li>
                <Link to="#">Chapel Hill, nC</Link>
              </li>
              <li>
                <Link to="#">Chicago, IL</Link>
              </li>
              <li>
                <Link to="#">Dallas, TX</Link>
              </li>
              <li>
                <Link to="#">Detroit, MI</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Support</h2>
            <ul>
              <li>
                <Link to={routes.contactUs}>Contact us</Link>
              </li>
              <li>
                <Link to="#">Online Chat</Link>
              </li>
              <li>
                <Link to="#">Whatsapp</Link>
              </li>
              <li>
                <Link to="#">Telegram</Link>
              </li>
              <li>
                <Link to="#">Ticketing</Link>
              </li>
              <li>
                <Link to="#">Call Centre</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Support</h2>
            <ul>
              <li>
                <Link to="#">Home Cleaning</Link>
              </li>
              <li>
                <Link to="#">Office Cleaning</Link>
              </li>
              <li>
                <Link to="#">Apartment Cleaning</Link>
              </li>
              <li>
                <Link to="#">Building Cleaning</Link>
              </li>
              <li>
                <Link to="#">Vehicle Cleaning</Link>
              </li>
              <li>
                <Link to="#">Carpet Cleaning</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-2 col-lg-4 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h2 className="footer-title">Others</h2>
            <ul>
              <li>
                <Link to="#">Home Cleaning</Link>
              </li>
              <li>
                <Link to="#">Office Cleaning</Link>
              </li>
              <li>
                <Link to="#">Apartment Cleaning</Link>
              </li>
              <li>
                <Link to="#">Commercial Cleaning</Link>
              </li>
              <li>
                <Link to="#">Building Cleaning</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Top */}
  {/* Footer Bottom */}
  <div className="footer-bottom footer-bottom-six">
    <div className="container">
      {/* Copyright */}
      <div className="copyright">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="copyright-text">
              <p className="mb-0">
                Copyright 2025 © TruelySell. All rights reserved
              </p>
            </div>
          </div>
          <div className="col-md-6">
            {/* Copyright Menu */}
            <div className="copyright-menu ">
              <ul>
                <li>
                  <Link to="#" className="footer-six-link">
                    <i className="fa-brands fa-google" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-six-link">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-six-link">
                    <i className="fa-brands fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-six-link">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-six-link">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-six-link">
                    <i className="fa-brands fa-whatsapp" />
                  </Link>
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

  );
};

export default FooterSix;
