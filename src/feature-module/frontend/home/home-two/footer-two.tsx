import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterTwo = () => {
  const routes = all_routes;
  return (
    <>
  {/* Footer */}
  <footer className="footer footer-two">
    {/* Footer Top */}
    <div className="footer-top aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to={routes.homeOne}>
                  <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                </Link>
              </div>
              {/* Footer Widget */}
              <div className="footer-widget footer-contact">
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span>
                      <i className="feather icon-phone-call" />
                    </span>
                    <div>
                      <h6>Tel</h6>
                      <p>310-437-2766</p>
                    </div>
                  </div>
                  <div className="footer-address">
                    <span>
                      <i className="feather icon-mail" />
                    </span>
                    <div>
                      <h6>Email Address</h6>
                      <p>truelysell@example.com</p>
                    </div>
                  </div>
                  <div className="footer-address">
                    <span>
                      <i className="feather icon-map-pin" />
                    </span>
                    <div>
                      <h6>Address</h6>
                      <p>
                        367 Hillcrest Lane, Irvine, California, United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Company</h2>
              <ul>
                <li>
                  <Link to={routes.aboutUs}>About Us</Link>
                </li>
                <li>
                  <Link to={routes.categories}>Categories</Link>
                </li>
                <li>
                  <Link to={routes.blogGrid}>Blogs</Link>
                </li>
                <li>
                  <Link to={routes.faq}>FAQ</Link>
                </li>
                <li>
                  <Link to={routes.blogList}>Blog List</Link>
                </li>
                <li>
                  <Link to="#">Gallery</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-2 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">Quick Links</h2>
              <ul>
                <li>
                  <Link to={routes.contactUs}>Contact us</Link>
                </li>
                <li>
                  <Link to={routes.customerChat}>Online Chat</Link>
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
                  <Link to="#">Call Center</Link>
                </li>
              </ul>
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
                  <Link to="#">Manage Deliveries</Link>
                </li>
                <li>
                  <Link to={routes.bookingDetails}>Orders</Link>
                </li>
                <li>
                  <Link to="#">Payments</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
                <li>
                  <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget">
              <h2 className="footer-title">Instagram Feed</h2>
              <ul className="row insta-row">
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-01.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-02.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-03.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-04.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-05.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-06.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-07.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-08.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
                </li>
                <li className="col-3 col-md-4">
                  <Link to="#">
                    <ImageWithBasePath
                      src="assets/img/services/service-09.jpg"
                      alt="Instagram Image"
                      className="img-fluid"
                    />
                  </Link>
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
    <div className="footer-bottom">
      <div className="container">
        {/* Copyright */}
        <div className="copyright">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="payment-image">
                <ul>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/payment/card-01.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/payment/card-02.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/payment/card-03.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/payment/card-04.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/payment/card-05.png" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/payment/card-06.png" alt="img" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="social-icon">
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
                      <i className="fa-brands fa-google" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Copyright Menu */}
              <div className="copyright-text">
                <p className="mb-0">Copyright © 2024. All Rights Reserved.</p>
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
  {/* /Footer */}
</>

  );
};

export default FooterTwo;
