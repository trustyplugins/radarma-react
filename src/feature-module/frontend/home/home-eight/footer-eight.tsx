import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterEight = () => {
  const routes = all_routes;
  return (
    <footer className="footer footer-eight">
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-5 col-md-4 col-sm-6">
          {/* Footer Widget */}
          <div className="footer-widget">
            <div className="footer-logo">
              <Link to={routes.index}>
                <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
              </Link>
            </div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
            </p>
            <div className="footer-contact-info">
              <p>
                <span>
                  <i className="feather icon-phone" />
                </span>{" "}
                321-546-8764
              </p>
              <p>
                <span>
                  <i className="feather icon-mail" />
                </span>
                support@example.com
              </p>
              <div className="footer-address">
                <p>
                  <span>
                    <i className="feather icon-map-pin" />
                  </span>
                  706 Campfire Ave. Meriden, CT 06450
                </p>
              </div>
            </div>
            <div className="social-icon">
              <ul className="flex-wrap">
                <li>
                  <Link to="#">
                    <i className="ti ti-brand-google" />{" "}
                  </Link>
                </li>
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
                    <i className="ti ti-brand-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="ti ti-brand-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="ti ti-brand-whatsapp" />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu-8 footer-menu-eight">
            <h2 className="footer-title">Support</h2>
            <ul>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to={routes.contactUs}>Contact us</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Online Chat</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Whatsapp</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Telegram</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Ticketing</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Call Center</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu-8 footer-menu-eight">
            <h2 className="footer-title">About Us</h2>
            <ul>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to={routes.aboutUs}>About us</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to={routes.blogGrid}>Blog</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Careers</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Jobs</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">In Press</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Gallery</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu-8 footer-menu-eight">
            <h2 className="footer-title">Top Cities</h2>
            <ul>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Manhattan</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Los Angels</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Chicago</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Alabama</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Houston</Link>
              </li>
              <li>
                <ImageWithBasePath src="assets/img/icons/mini-pink-feet.svg" alt="image" />
                <Link to="#">Newyork</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-side footer-menu-eight">
            <h2 className="footer-title">Application</h2>
            <p>
              The platform is straightforward, allowing users to post tasks and
              receive from local{" "}
            </p>
            <div className="app-eight-bottom d-flex mb-4">
              <Link
                to="#"
                className="app-eight-content-inner me-2"
              >
                <ImageWithBasePath src="assets/img/icons/app-store.svg" alt="image" />
              </Link>
              <Link to="#">
                <ImageWithBasePath src="assets/img/icons/goolge-play.svg" alt="image" />
              </Link>
            </div>
            <h6 className="mb-2">Newsletter</h6>
            <div className="subscribe-form mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
              />
              <button
                type="submit"
                className="btn footer-btn btn-primary d-flex justify-content-center align-items-center"
              >
                <i className="feather icon-send" />
              </button>
            </div>
          </div>
          {/* /Footer Widget */}
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Top */}
  {/* Footer Bottom */}
  <div className="footer-bottom footer-bottom-eight">
    <div className="container">
      <div className="copyright">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="copyright-text">
              <p>Copyright 2024 © Truelysell. All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Bottom */}
</footer>

  );
};

export default FooterEight;
