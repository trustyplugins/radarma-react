import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes';

const SessionExpired = () => {
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
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="row justify-content-center align-items-center">
            <h1 className="display-6 mb-1 text-center">
              Your Session has expired
            </h1>
            <div className="col-md-9">
              <p className="fs-14 text-center mb-3">
                Please refresh the page. Don&apos;t worry, we kept all of your
                filters and breakdowns in place.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                to={routes.index}
                className="btn btn-dark d-flex align-items-center"
              >
                <i className="ti ti-circle-arrow-left me-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <ImageWithBasePath
              src="assets/img/bg/session-expired.png"
              alt="Session Expired"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</div>

  )
}

export default SessionExpired
