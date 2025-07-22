import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../core/data/routes/all_routes'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'

const NewFooter = () => {
    const routes = all_routes
  return (
    <>
    {/* Footer */}
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-2">
              <div className="footer-widget">
                <h5 className="mb-4">Product</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to="#">Features</Link>
                  </li>
                  <li>
                    <Link to="#">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#">Case studies</Link>
                  </li>
                  <li>
                    <Link to="#">Reviews</Link>
                  </li>
                  <li>
                    <Link to="#">Updates</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="footer-widget">
                <h5 className="mb-4">Support</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to="#">Getting started</Link>
                  </li>
                  <li>
                    <Link to="#">Help center</Link>
                  </li>
                  <li>
                    <Link to="#">Server status</Link>
                  </li>
                  <li>
                    <Link to="#">Report a bug</Link>
                  </li>
                  <li>
                    <Link to="#">Chat support</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="footer-widget">
                <h5 className="mb-4">For Provider</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to={routes.aboutUs}>About</Link>
                  </li>
                  <li>
                    <Link to={routes.contactUs}>Contact us</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                  <li>
                    <Link to={routes.faq}>Faq’s</Link>
                  </li>
                  <li>
                    <Link to={routes.blogGrid}>Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="footer-widget">
                <h5 className="mb-4">Support</h5>
                <ul className="footer-menu">
                  <li>
                    <Link to="#">Getting started</Link>
                  </li>
                  <li>
                    <Link to="#">Help center</Link>
                  </li>
                  <li>
                    <Link to="#">Other Products</Link>
                  </li>
                  <li>
                    <Link to="#">Report a bug</Link>
                  </li>
                  <li>
                    <Link to="#">Chat support</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="footer-widget">
                <div className="card bg-light-200 border-0 mb-3">
                  <div className="card-body">
                    <h5 className="mb-3">SignUp For Subscription</h5>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-linear-primary btn-lg w-100"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                  <h6 className="fs-14 me-2">Download Our App</h6>
                  <ImageWithBasePath
                    src="assets/img/icons/app-store.svg"
                    className="me-2"
                    alt="img"
                  />
                  <ImageWithBasePath
                    src="assets/img/icons/goolge-play.svg"
                    className="me-2"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between flex-wrap mt-3">
            <ul className="social-icon mb-3">
              <li>
                <Link to="#">
                  <ImageWithBasePath src="assets/img/icons/fb.svg" className="img" alt="Img" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/instagram.svg"
                    className="img"
                    alt="Img"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/twitter.svg"
                    className="img"
                    alt="Img"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/whatsapp.svg"
                    className="img"
                    alt="Img"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/youtube.svg"
                    className="img"
                    alt="Img"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/linkedin.svg"
                    className="img"
                    alt="Img"
                  />
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="dropdown me-3 mb-3">
                <Link
                  to="#"
                  className="dropdown-toggle bg-light-300 fw-medium"
                  data-bs-toggle="dropdown"
                >
                  <ImageWithBasePath
                    src="assets/img/flags/us.png"
                    className="flag me-2"
                    alt="Flag"
                  />
                  English
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      <ImageWithBasePath
                        src="assets/img/flags/us.png"
                        className="flag me-2"
                        alt="Flag"
                      />
                      English
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <ImageWithBasePath
                        src="assets/img/flags/jp.png"
                        className="flag me-2"
                        alt="Flag"
                      />
                      Japanese
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <ImageWithBasePath
                        src="assets/img/flags/cn.png"
                        className="flag me-2"
                        alt="Flag"
                      />
                      Chinese
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown mb-3">
                <Link
                  to="#"
                  className="dropdown-toggle bg-light-300 fw-medium"
                  data-bs-toggle="dropdown"
                >
                  USD
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      USD
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      EURO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      YEN
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="mb-2">
                  Copyright © 2024 - All Rights Reserved Truelysell
                </p>
                <ul className="menu-links mb-2">
                  <li>
                    <Link to="#"> Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
    {/* /Footer */}
  </>
  
  )
}

export default NewFooter