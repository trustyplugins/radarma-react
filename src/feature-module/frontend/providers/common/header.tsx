import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  set_dark_mode,
  set_is_mobile_sidebar,
  set_mouseoversidebar_data,
  set_toggleSidebar_data_2,
} from '../../../../core/data/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { all_routes } from '../../../../core/data/routes/all_routes';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { AppState } from '../../../../core/models/interface';

const ProviderHeader = () => {
  const routes = all_routes;
  const toggle_data = useSelector((state: AppState) => state.toggleSidebar2);
 
  const dispatch = useDispatch();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    // Toggle the state
    setIsFullscreen(!isFullscreen);
  };
  const toogle = () => {
    dispatch(set_toggleSidebar_data_2(toggle_data ? false : true));
  };
  const mobileSidebar = useSelector((state: AppState) => state.mobileSidebar);

  const handleClick = () => {
    dispatch(set_is_mobile_sidebar(!mobileSidebar));
  };
  const toggle = () => {
    dispatch(set_mouseoversidebar_data(true));
  };
  const toggle2 = () => {
    dispatch(set_mouseoversidebar_data(false));
  };

  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));
  const LayoutDark = () => {
    const htmlElement = document.documentElement;
    if (darkMode === "enabled") {
      localStorage.setItem("darkMode", "enabled");
      dispatch(set_dark_mode(true));
      setDarkMode("enabled");
      htmlElement.classList.add('dark');
    } else {
      localStorage.setItem("darkMode", "disabled");
      dispatch(set_dark_mode(false));
      setDarkMode("disabled");
      htmlElement.classList.remove('dark');
    }
  };
  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode"));
    LayoutDark();
  }, [darkMode]);
  return (
    <div className="header provider-header">
      {/* Logo */}
      <div className="header-left active" 
      onMouseEnter={toggle}
      onMouseLeave={toggle2}>
        <Link to={routes.index} className="logo logo-normal">
          <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
        </Link>
        <Link to={routes.index} className="logo-small">
          <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo" />
        </Link>
        <Link id="toggle_btn" onClick={toogle} to="#">
          <i className="ti ti-menu-deep" />
        </Link>
      </div>
      {/* /Logo */}
      <Link id="mobile_btn" onClick={handleClick} className="mobile_btn" to="#sidebar">
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </Link>
      <div className="header-user">
        <div className="nav user-menu">
          {/* Search */}
          <div className="nav-item nav-search-inputs">
            <div className="top-nav-search">
              <Link to="#" className="responsive-search">
                <i className="fa fa-search" />
              </Link>
              <form action="#" className="dropdown">
                <div className="searchinputs" id="dropdownMenuClickable">
                  <input type="text" placeholder="Search" />
                  <div className="search-addon">
                    <span>
                      <i className="feather icon-user" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* /Search */}
          <div className="d-flex align-items-center">
            <div className="me-2 site-link">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center me-2"
              >
                <i className="feather icon-globe me-1" />
                Visit Website
              </Link>
            </div>
            <div className="provider-head-links">
              <div>
                
                <Link
                  to="#"
                  id="dark-mode-toggle"
                  onClick={() => setDarkMode("enabled")}
                  className={`dark-mode-toggle me-2 ${darkMode === "disabled"  && 'activate' }`}
                >
                  <i className="fa-regular fa-moon" />
                </Link>
                <Link
                  to="#"
                  id="light-mode-toggle"
                  onClick={() => setDarkMode("disabled")}
                  className={`dark-mode-toggle me-2 ${darkMode === "enabled" && 'activate' }`}
                >
                  <i className="ti ti-sun-filled" />
                </Link>
              </div>
            </div>
            <div className="provider-head-links">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center me-2 dropdown-toggle notify-link"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="true"
              >
                <i className="feather icon-bell" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end notification-dropdown p-3">
                <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                  <h6 className="notification-title">
                    Notifications <span className="fs-16 text-gray"> (2)</span>
                  </h6>
                  <div className="d-flex align-items-center">
                    <Link to="#" className="text-primary fs-15 me-3 lh-1">
                      Mark all as read
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="bg-white dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        <i className="ti ti-calendar-due me-1" />
                        Today
                      </Link>
                      <ul className="dropdown-menu mt-2 p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            This Week
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Week
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Week
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="noti-content">
                  <div className="d-flex flex-column">
                    <div className="border-bottom mb-3 pb-3">
                      <Link to={routes.commonNotification}>
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-52.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center">
                              <p className="mb-1 w-100">
                                <span className="text-dark fw-semibold">
                                  Stephan Peralt
                                </span>{' '}
                                rescheduled the service to 14/01/2024.{' '}
                              </p>
                              <span className="d-flex justify-content-end ">
                                {' '}
                                <i className="ti ti-point-filled text-primary" />
                              </span>
                            </div>
                            <span>Just Now</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <Link to={routes.commonNotification} className="pb-0">
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-36.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center">
                              <p className="mb-1 w-100">
                                <span className="text-dark fw-semibold">
                                  Harvey Smith
                                </span>{' '}
                                has requested your service.
                              </p>
                              <span className="d-flex justify-content-end ">
                                {' '}
                                <i className="ti ti-point-filled text-primary" />
                              </span>
                            </div>
                            <span>5 mins ago</span>
                            <div className="d-flex justify-content-start align-items-center mt-2">
                              <span className="btn btn-light btn-sm me-2">
                                Deny
                              </span>
                              <span className="btn btn-dark btn-sm">
                                Accept
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <Link to={routes.commonNotification}>
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <span className="text-dark fw-semibold">
                                {' '}
                                Anthony Lewis
                              </span>{' '}
                              has left feedback for your recent service{' '}
                            </p>
                            <span>10 mins ago</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="border-0 mb-3 pb-0">
                      <Link to={routes.commonNotification}>
                        <div className="d-flex">
                          <span className="avatar avatar-lg me-2 flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-22.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </span>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <span className="text-dark fw-semibold">
                                Brian Villaloboshas{' '}
                              </span>{' '}
                              cancelled the service scheduled for 14/01/2024.
                            </p>
                            <span>15 mins ago</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex p-0 notification-footer-btn">
                  <Link to="#" className="btn btn-light rounded  me-2">
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-dark rounded ">
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="provider-head-links">
              <Link
                to="#"
                onClick={toggleFullscreen}
                className="d-flex align-items-center justify-content-center me-2"
              >
                <i className="feather icon-maximize" />
              </Link>
            </div>
            <div className="dropdown">
              <Link to="#" data-bs-toggle="dropdown">
                <div className="booking-user d-flex align-items-center">
                  <span className="user-img">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="user" />
                  </span>
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
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu">
        <Link
          to="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </Link>
        <div className="dropdown-menu dropdown-menu-end">
         
          <Link className="dropdown-item" to={routes.login}>
            Logout
          </Link>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>
  );
};

export default ProviderHeader;
