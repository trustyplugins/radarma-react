import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterNine = () => {
  const routes = all_routes;
  return (
    <footer className="footer footer-nine">
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-12">
          {/* Footer Widget */}
          <div className="footer-widget">
            <div className="footer-logo">
              <Link to={routes.index}>
                <ImageWithBasePath src="assets/img/white-logo.svg" alt="logo" />
              </Link>
            </div>
            <div>
              <p>
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt
              </p>
              <ul className="social-icon mb-0">
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-google" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-whatsapp" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-6 col-lg-8 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget">
                <h6 className="mb-3">Product</h6>
                <ul className="footer-menu">
                  <li>
                    <Link to="#">Account</Link>
                  </li>
                  <li>
                    <Link to={routes.booking}>Book Appointment</Link>
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
                    <Link to={routes.contactUs}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget">
                <h6 className="mb-3">About</h6>
                <ul className="footer-menu">
                  <li>
                    <Link to={routes.categories}>Categories</Link>
                  </li>
                  <li>
                    <Link to={routes.search}>Services</Link>
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
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="footer-widget">
                <h6 className="mb-3">Services</h6>
                <ul className="footer-menu">
                  <li>
                    <Link to={routes.serviceDetails1}>Car Wash</Link>
                  </li>
                  <li>
                    <Link to={routes.serviceDetails1}>Beauty Saloon</Link>
                  </li>
                  <li>
                    <Link to={routes.serviceDetails1}>Construction</Link>
                  </li>
                  <li>
                    <Link to={routes.serviceDetails1}>Plumbing service</Link>
                  </li>
                  <li>
                    <Link to={routes.serviceDetails1}>Painting service</Link>
                  </li>
                  <li>
                    <Link to={routes.serviceDetails1}>Plumbing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-12">
          {/* Footer Widget */}
          <div className="footer-widget footer-contact">
            <h6 className="mb-3">Contact</h6>
            <div className="footer-contact-info">
              <div className="footer-address">
                <span>
                  <i className="feather icon-phone-call" />
                </span>
                <div>
                  <h6>Phone Number</h6>
                  <p>310-437-2766</p>
                </div>
              </div>
              <div className="footer-address">
                <span>
                  <i className="feather icon-mail" />
                </span>
                <div>
                  <h6>Mail Address</h6>
                  <p>example@truelysell.com</p>
                </div>
              </div>
              <div className="footer-address">
                <span>
                  <i className="feather icon-map-pin" />
                </span>
                <div>
                  <h6>Address</h6>
                  <p>706 Campfire Ave. Meriden, CT </p>
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
  <div className="footer-bottom">
    <div className="container">
      {/* Copyright */}
      <div className="copyright">
        <div className="copyright-text text-center">
          <p className="mb-0">
            Copyright 2025 © TruelySell. All rights reserved.
          </p>
        </div>
      </div>
      {/* /Copyright */}
    </div>
  </div>
  {/* /Footer Bottom */}
</footer>

  );
};

export default FooterNine;
