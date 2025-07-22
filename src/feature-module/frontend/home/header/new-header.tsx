import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../../../../core/models/interface';
import { all_routes } from '../../../../core/data/routes/all_routes';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
type props = {
  type: number;
};
const NewHeader: React.FC<props> = ({ type }) => {
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  const routes = all_routes;
  // const location = useLocation();
  const header_data = useSelector((state: Header) => state.header_data);
  const handleScroll = () => {
    setScrollYPosition(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/* Header */}
      <header className={`${scrollYPosition > 100 ? 'fixed' : ''}`}>
        <div className="container-fluid">
          <div className="offcanvas-info">
            <div className="offcanvas-wrap">
              <div className="offcanvas-detail">
                <div className="offcanvas-head d-flex justify-content-between align-items-center mb-3">
                  <Link to={routes.index}>
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      alt="logo-img"
                    />
                  </Link>
                  <div className="offcanvas-close">
                    <i className="ti ti-x" />
                  </div>
                </div>
                <div className="mobile-menu fix mb-3" />
                <div className="offcanvas__contact">
                  <div className="mt-4">
                    <Link to="login.html" className="btn btn-light w-100 mb-2">
                      <i className="ti ti-lock me-2" />
                      Sign In
                    </Link>
                    <Link
                      to="register.html"
                      className="btn btn-linear-primary w-100"
                    >
                      <i className="ti ti-user-filled me-2" />
                      Join Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-overlay" />
          <div className="header-nav">
            <div className="main-menu-wrapper">
              <div className="navbar-logo">
                <Link className="header-logo" to={routes.index}>
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="logo"
                    alt="Logo"
                  />
                </Link>
                {type === 1 && 
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-light-300 fw-medium"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-layout-grid me-1" />
                      Categories
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Construction
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Removals
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Interior
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
              </div>
              <nav id="mobile-menu">
                <ul className="main-nav">
                  {header_data.map((item: any, index: number) => {
                    return (
                      <>
                        {item.separateRoute == false && (
                          <li
                            key={index + 1}
                            className={`has-submenu ${
                              item.tittle == 'Home' ? 'megamenu' : ''
                            }  `}
                          >
                            <Link
                              to={''}
                              onClick={() => (item.showAsTab = !item.showAsTab)}
                            >
                              {item.tittle}{' '}
                              <i className="fas fa-chevron-down" />
                            </Link>
                            <ul
                              className={`submenu ${
                                item.tittle == 'Home' ? 'mega-submenu' : ''
                              } ${item.showAsTab == true ? 'show-sub-menu' : ''}`}
                            >
                              {item.menu.map((menu: any, menuIndex: number) => {
                                return (
                                  <>
                                    {menu.hasSubRoute == false &&
                                      item.tittle != 'Home' && (
                                        <li key={menuIndex + 1}>
                                          <Link to={menu.routes}>
                                            {menu.menuValue}
                                          </Link>
                                        </li>
                                      )}
                                    {menu.hasSubRoute == true && (
                                      <li
                                        key={menuIndex + 1}
                                        className="has-submenu"
                                      >
                                        <Link
                                          onClick={() =>
                                            (menu.showSubRoute =
                                              !menu.showSubRoute)
                                          }
                                          to={menu.routes}
                                        >
                                          {menu.menuValue}
                                        </Link>
                                        <ul
                                          className={`submenu ${
                                            menu.showSubRoute === true &&
                                            'show-sub-menu'
                                          }`}
                                        >
                                          {menu.subMenus.map(
                                            (
                                              subMenu: Header,
                                              subMenuIndex: number,
                                            ) => {
                                              return (
                                                <li key={subMenuIndex + 1}>
                                                  <Link to={subMenu.routes}>
                                                    {subMenu.menuValue}
                                                  </Link>
                                                </li>
                                              );
                                            },
                                          )}
                                        </ul>
                                      </li>
                                    )}
                                    <li>
                                      {menu.menuValue == 'Electrical Home' && (
                                        <div className="megamenu-wrapper">
                                          <div className="row">
                                            {item.menu.map(
                                              (
                                                menu: Header,
                                                megaIndex: number,
                                              ) => {
                                                return (
                                                  <div
                                                    className="col-lg-2"
                                                    key={megaIndex + 1}
                                                  >
                                                    <div
                                                      className={`single-demo ${
                                                        menu.routes ==
                                                        location.pathname
                                                          ? 'active'
                                                          : ''
                                                      }`}
                                                    >
                                                      <div className="demo-img">
                                                        <Link to={menu.routes}>
                                                          <ImageWithBasePath
                                                            src={menu.img}
                                                            className="img-fluid"
                                                            alt="img"
                                                          />
                                                        </Link>
                                                      </div>
                                                      <div className="demo-info">
                                                        <Link to={menu.routes}>
                                                          {menu.menuValue}
                                                        </Link>
                                                      </div>
                                                    </div>
                                                  </div>
                                                );
                                              },
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </li>
                        )}
                      </>
                    );
                  })}
                  {type === 1 ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#provider"
                      >
                        Become a Provider
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}

                  <li className="nav-item">
                    <Link className="nav-link" to={routes.dashboard}>
                      Admin
                    </Link>
                  </li>
                  {/* <li className={`has-submenu ${type == 10 ? 'd-none' : ''}`}>
                  <Link to="/admin/dashboard">Admin</Link>
                </li> */}
                  {/* <li className="login-link">
                  <Link to={routes.chooseSignUp}>Register</Link>
                </li>
                <li className="login-link">
                  <Link to={routes.login}>Login</Link>
                </li> */}
                </ul>
              </nav>
              {type === 1 && 
                <div className="header-btn d-flex align-items-center">
                  <Link
                    to="login.html"
                    className="btn btn-light me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#login-modal"
                  >
                    <i className="ti ti-lock me-2" />
                    Sign In
                  </Link>
                  <Link
                    to="register.html"
                    className="btn btn-linear-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#register-modal"
                  >
                    <i className="ti ti-user-filled me-2" />
                    Join Us
                  </Link>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div className="sidebar-menu">
                      <i className="fa-solid fa-bars" />
                    </div>
                  </div>
                </div>
              }
              {type === 11 && 
                <div className="header-btn d-flex align-items-center">
                <div className="provider-head-links">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-2 dropdown-toggle notify-link"
                    data-bs-toggle="dropdown"
                  >
                    <i className="feather icon-bell" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end notification-dropdown p-4">
                    <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                      <h6 className="notification-title">
                        Notifications <span className="fs-18 text-gray"> (2)</span>
                      </h6>
                      <div className="d-flex align-items-center">
                        <a href="#" className="text-primary fs-15 me-3 lh-1">
                          Mark all as read
                        </a>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="bg-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                          >
                            <i className="ti ti-calendar-due me-1" />
                            Today
                          </a>
                          <ul className="dropdown-menu mt-2 p-3">
                            <li>
                              <a
                                href="#"
                                className="dropdown-item rounded-1"
                              >
                                This Week
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item rounded-1"
                              >
                                Last Week
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item rounded-1"
                              >
                                Last Week
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="noti-content">
                      <div className="d-flex flex-column">
                        <div className="border-bottom mb-3 pb-3">
                          <a href="activities.html">
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
                                    </span>{" "}
                                    rescheduled the service to 14/01/2024.{" "}
                                  </p>
                                  <span className="d-flex justify-content-end ">
                                    {" "}
                                    <i className="ti ti-point-filled text-primary" />
                                  </span>
                                </div>
                                <span>Just Now</span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="border-bottom mb-3 pb-3">
                          <a href="activities.html" className="pb-0">
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
                                    </span>{" "}
                                    has requested your service.
                                  </p>
                                  <span className="d-flex justify-content-end ">
                                    {" "}
                                    <i className="ti ti-point-filled text-primary" />
                                  </span>
                                </div>
                                <span>5 mins ago</span>
                                <div className="d-flex justify-content-start align-items-center mt-2">
                                  <span className="btn btn-light btn-sm me-2">Deny</span>
                                  <span className="btn btn-dark btn-sm">Accept</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="border-bottom mb-3 pb-3">
                          <a href="activities.html">
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
                                    {" "}
                                    Anthony Lewis
                                  </span>{" "}
                                  has left feedback for your recent service{" "}
                                </p>
                                <span>10 mins ago</span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="border-0 mb-3 pb-0">
                          <a href="activities.html">
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
                                    Brian Villaloboshas{" "}
                                  </span>{" "}
                                  cancelled the service scheduled for 14/01/2024.
                                </p>
                                <span>15 mins ago</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex p-0 notification-footer-btn">
                      <a href="#" className="btn btn-light rounded  me-2">
                        Cancel
                      </a>
                      <a href="#" className="btn btn-dark rounded ">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div className="provider-head-links">
                  <a
                    href="user-chat.html"
                    className="d-flex align-items-center justify-content-center me-2"
                  >
                    <i className="feather icon-mail" />
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className=""
                  >
                    <div className="booking-user d-flex align-items-center">
                      <span className="user-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="user" />
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu p-2">
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="login.html"
                      >
                        <i className="ti ti-logout me-1" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header__hamburger d-lg-none my-auto">
                  <div className="sidebar-menu">
                    <i className="fa-solid fa-bars" />
                  </div>
                </div>
              </div>
              
              }
              {type === 12 && 
              <div className="header-btn d-flex align-items-center">
              <a href={routes.login} className="btn btn-light me-2">
                <i className="ti ti-lock me-2" />
                Login
              </a>
              <a href="register.html" className="btn btn-primary">
                <i className="ti ti-user-filled me-2" />
                Register
              </a>
              <div className="header__hamburger d-lg-none my-auto">
                <div className="sidebar-menu">
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
            
              }
            </div>
          </div>
        </div>
      </header>
      {/* /Header */}
    </>
  );
};

export default NewHeader;
