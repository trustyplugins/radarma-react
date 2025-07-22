import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const CommingSoon = () => {
  return (
    <div className="container">
    {/* Header */}
    <div className="authentication-header">
      <div className="container">
        <div className="col-md-12">
          <div className="text-center">
            <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
    {/* /Header */}
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content">
        <div className="maintenance">
          <div className="row ">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <div className="maintenance-content">
                <div className="maintenance-title">
                  <h1 className="display-6 mb-1">
                    We’re getting ready to launch
                  </h1>
                  <p className="fs-14">
                    We&apos;ll be here soon with our new awesome site, subscribe to be
                    notified.{" "}
                  </p>
                </div>
                <div className="maintenance-forms d-flex">
                  <div className="mb-3 me-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div>
                    <Link to="#" className="btn btn-dark">
                      Notify Me
                    </Link>
                  </div>
                </div>
                <div className="comming-soon-pg w-100">
                  <div>
                    <h6 className="mb-3">Coming Soon</h6>
                    <ul className="d-inline-flex align-items-center justify-content-center mb-3">
                      <li className="me-sm-3 me-2">
                        <div className="d-flex align-items-center justify-content-center flex-column">
                          <h3 className="days fs-sm-30 fs-30">54</h3>
                          <p className="fs-16">Day</p>
                        </div>
                      </li>
                      <li className="text-gray fw-medium me-sm-3 me-2">:</li>
                      <li className="me-sm-3 me-2">
                        <div className="d-flex align-items-center justify-content-center flex-column ">
                          <h3 className="hours fs-sm-30 fs-30">10</h3>
                          <p className="fs-16">Hrs</p>
                        </div>
                      </li>
                      <li className="text-gray fw-medium me-sm-3 me-2">:</li>
                      <li className="me-sm-3 me-2">
                        <div className="d-flex align-items-center justify-content-center flex-column ">
                          <h3 className="minutes fs-sm-30 fs-30">47</h3>
                          <p className="fs-16">Min</p>
                        </div>
                      </li>
                      <li className="text-gray fw-medium me-sm-3 me-2">:</li>
                      <li>
                        <div className="d-flex align-items-center justify-content-center flex-column">
                          <h3 className="seconds fs-sm-30 fs-30">00</h3>
                          <p className="fs-16">Sec</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="maintenance-img">
                <ImageWithBasePath
                  src="assets/img/bg/launch.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
    {/* Footer */}
    <div className="footer-copyright">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="maintenance-icons d-flex">
              <h6>We&apos;ll Be Back Shortly</h6>
              <div className="icons">
                <Link to="#">
                  <span>
                    <i className="fa-brands fa-facebook" />
                  </span>
                </Link>
                <Link to="#">
                  <span>
                    <i className="fa-brands fa-twitter" />
                  </span>
                </Link>
                <Link to="#">
                  <span>
                    <i className="fa-brands fa-instagram " />
                  </span>
                </Link>
                <Link to="#">
                  <span>
                    <i className="fa-brands fa-linkedin-in" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Footer */}
  </div>
  
  );
};

export default CommingSoon;
