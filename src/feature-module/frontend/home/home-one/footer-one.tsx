import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterOne = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedValue, setselectedValue] = useState(null);

  const language = [
    { name: 'English' },
    { name: 'France' },
    { name: 'Spanish' },
  ];
  const value = [{ name: 'US Dollars' }, { name: 'INR' }, { name: 'Kuwait' }];
  const routes = all_routes

  return (
    <footer className="footer footer-second">
  {/* Footer Top */}
  <div className="footer-top " data-aos="fade-up">
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
              <h6 className="mb-3">Our Experts Are available 24/7</h6>
              <div>
                <p className="fs-16">
                  <span className="ti ti-device-mobile me-2" />
                  1800 - 672 - 4399
                </p>
              </div>
              <div>
                <p className="fs-16">
                  <span className="ti ti-device-mobile me-2" />
                  info@example.com
                </p>
              </div>
            </div>
            <div className="footer-selects">
              <h2 className="footer-title">Language &amp; Currency</h2>
              <div className="row">
                <div className="col-lg-12 d-flex">
                  <div className="footer-select">
                    <ImageWithBasePath src="assets/img/icons/global.svg" alt="img" />
                    <Dropdown
                              value={selectedLanguage}
                              onChange={(e) => setSelectedLanguage(e.value)}
                              options={language}
                              optionLabel="name"
                              placeholder="English"
                              className="select footer-react-select"
                            />
                  </div>
                  <div className="footer-select">
                    <ImageWithBasePath
                      src="assets/img/icons/dropdown.svg"
                      className="footer-dropdown"
                      alt="img"
                    />
                    <Dropdown
                              value={selectedValue}
                              onChange={(e) => setselectedValue(e.value)}
                              options={value}
                              optionLabel="name"
                              placeholder="US Dollars"
                              className="select footer-react-select"
                            />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-4">
          {/* Footer Widget */}
          <div className="footer-widget footer-menus">
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
          <div className="footer-widget footer-menus">
            <h2 className="footer-title">About us</h2>
            <ul>
              <li>
                <Link to={routes.aboutUs}>About</Link>
              </li>
              <li>
                <Link to={routes.search}>Services</Link>
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
          <div className="footer-widget footer-menus">
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
              <button type="submit" className="btn footer-btn">
                <i className="feather-send" />
              </button>
            </div>
            <h2 className="footer-title">Follow Us</h2>
            <div className="social-icon">
              <ul className="mb-0">
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
          {/* /Footer Widget */}
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Top */}
  {/* Footer Bottom */}
  <div className="footer-bottoms">
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

export default FooterOne;
