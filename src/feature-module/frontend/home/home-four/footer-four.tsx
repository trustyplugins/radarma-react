import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const footerTwo = () => {
  const routes = all_routes;

  return (
    <footer className="footer footer-5">
    {/* Footer Top */}
    <div className="footer-top aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to={routes.index}>
                  <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="footer-content">
                <h6 className="mb-3 text-gray-6">
                  Our Experts Are available 24/7
                </h6>
                <div>
                  <p className="fs-16">
                    <span className="ti ti-device-mobile me-2" />
                    1800 - 672 - 4399
                  </p>
                </div>
                <div>
                  <p className="fs-16">
                    <span className="ti ti-mail me-2" />
                    mail@truelysell.com
                  </p>
                </div>
              </div>
              <div className="footer-selects">
                <div className="d-flex gap-3 mt-2">
                  <div className="iplay">
                    <Link to="">
                      <ImageWithBasePath
                        src="assets/img/icons/app-store.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="gplay">
                    <Link to="">
                      <ImageWithBasePath
                        src="assets/img/icons/goolge-play.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-4">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Pages</h2>
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">For business</Link>
                </li>
                <li>
                  <Link to={routes.categories}>All Categories</Link>
                </li>
                <li>
                  <Link to={routes.contactUs}>Contact</Link>
                </li>
                <li>
                  <Link to={routes.blogGrid}>Our Blog</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-4">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">About us</h2>
              <ul>
                <li>
                  <Link to={routes.aboutUs}>About</Link>
                </li>
                <li>
                  <Link to={routes.serviceGrid}>Services</Link>
                </li>
                <li>
                  <Link to={routes.howItWorks}>How we work</Link>
                </li>
                <li>
                  <Link to="#">News</Link>
                </li>
                <li>
                  <Link to="#">Help Guide</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-4">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Resources</h2>
              <ul>
                <li>
                  <Link to="#">Download</Link>
                </li>
                <li>
                  <Link to="#">Help Center</Link>
                </li>
                <li>
                  <Link to="#">Guides</Link>
                </li>
                <li>
                  <Link to="#">Partner Network</Link>
                </li>
                <li>
                  <Link to="#">Guide</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget">
              <h2 className="footer-subtitle">Newsletter Signup</h2>
              <div className="subscribe-form mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                <button
                  type="submit"
                  className="btn footer-btn btn-dark d-flex justify-content-center align-items-center"
                >
                  <i className="feather icon-send" />
                </button>
              </div>
              <h2 className="footer-title">Connect With us</h2>
              <div className="social-icon">
                <ul className="mb-0">
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
            </div>
            {/* /Footer Widget */}
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Top */}
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        {/* Copyright */}
        <div className="copyright">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <div className="copyright-text">
                <p className="mb-0 fs-14">
                  © 2025 Truelysell. All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Copyright Menu */}
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li>
                    <Link to={routes.privacyPolicy}>Home</Link>
                  </li>
                  <li>
                    <Link to={routes.termsCondition}>Site Map</Link>
                  </li>
                  <li>
                    <Link to={routes.termsCondition}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link to={routes.termsCondition}>Cookie Policy</Link>
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

export default footerTwo;
