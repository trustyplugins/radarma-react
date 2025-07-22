import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../core/data/routes/all_routes'

const DemoUserHeader = () => {
    const routes = all_routes
  return (
    <header className="header">
    <div className="container">
      <div className="header-nav">
        <div className="main-menu-wrapper w-100 d-flex justify-content-between">
          <div className="navbar-logo">
            <Link className="header-logo" to={routes.index}>
              <ImageWithBasePath src="assets/img/logo.svg" className="logo" alt="Logo" />
            </Link>
          </div>
          <div className="header-btn d-flex align-items-center">
            <div className="dropdown">
              <Link to="#" data-bs-toggle="dropdown">
                <div className="booking-user d-flex align-items-center">
                  <span className="user-img">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="user" />
                  </span>
                  <div className="ms-2 d-none d-sm-block">
                    <h6 className="fs-14 fw-medium">Adrian Reniques</h6>
                    <p className="fs-12">Demo user</p>
                  </div>
                </div>
              </Link>
              <ul className="dropdown-menu p-2">
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to={routes.login}
                  >
                    <i className="ti ti-logout me-1" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  

  )
}

export default DemoUserHeader