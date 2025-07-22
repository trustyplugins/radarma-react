import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const Maintenance = () => {
  const routes = all_routes;
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
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="maintenance-content">
              <div className="maintenance-title">
                <h1 className="display-6 mb-1">We&apos;re Down For Maintenance</h1>
                <p className="fs-14">
                  Our website is currently undergoing scheduled maintenance,
                  will be right back in a few minutes.
                </p>
              </div>
              <div className="maintenance-icons">
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
              <div className="maintenance-btn d-flex">
                <Link
                  to={routes.index}
                  className="btn btn-dark d-flex align-items-center "
                >
                  <i className="ti ti-circle-arrow-left me-1" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="maintenance-img">
              <ImageWithBasePath
                src="assets/img/bg/maintenance.png"
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
</div>


    
  )
}

export default Maintenance
