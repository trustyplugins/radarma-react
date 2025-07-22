import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import {
  set_header_data,
  set_toggleSidebar_data,
} from '../../../../core/data/redux/action';
import * as Icon from 'react-feather';
import { AppState, Header } from '../../../../core/models/interface';
import { header } from '../../../../core/data/json/header';

type props = {
  type: number;
};

const HomeHeader: React.FC<props> = ({ type }) => {
  const routes = all_routes;
  const location = useLocation();
  // const header_data = useSelector((state: Header) => state.header_data);
  const header_data = header;
  const toggle_data = useSelector((state: AppState) => state.toggleSidebar);
  const [scrollYPosition, setScrollYPosition] = useState<number>(0);
  const [close, setClose] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState({
    logo: '',
    logoSmall: '',
    logoSvg: '',
  });
  const dispatch = useDispatch();
  const toogle = () => {
    dispatch(set_toggleSidebar_data(toggle_data ? false : true));
  };

  const activeRouterPath = (routesArray: Header) => {
    let checkActive = false;
    checkActive;
    header_data.map((mainMenus: { menu: any }) => {
      mainMenus.menu.map((menus: Header) => {
        checkActive = location.pathname == menus.routes ? true : false;
      });
    });
    const all_routes: string[] = [];
    routesArray.map((item: Header) => {
      all_routes.push(item.routes);
    });
    return all_routes.includes(location.pathname);
  };

  // useEffect(() => {
  // }, [header_data]);

  const setHeaderData = () => {
    dispatch(set_header_data([]));
  };

  const handleScroll = () => {
    setScrollYPosition(scrollY);
  };
  useEffect(() => {
    // Select all 'submenu' elements
    const submenus = document.querySelectorAll('.has-submenu')
    // Loop through each 'submenu'
    submenus.forEach((submenu) => {
      // Find all 'li' elements within the 'submenu'
      const listItems = submenu.querySelectorAll('li')
      const listItems2 = submenu.querySelectorAll('.single-demo')
      submenu.classList.remove('active')
      // Check if any 'li' has the 'active' class
      listItems.forEach((item) => {
        if (item.classList.contains('active')) {
          // Add 'active' class to the 'submenu'
          submenu.classList.add('active')
          return
        }
      })
      listItems2.forEach((item) => {
        if (item.classList.contains('active')) {
          // Add 'active' class to the 'submenu'
          submenu.classList.add('active')
          return
        }
      })
    })
    
  }, [location.pathname])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const routerPath = (pathType: number) => {
    switch (pathType) {
      case 1:
        return { path: routes.homeOne, className: 'header-new' };
        break;
      case 2:
        return { path: routes.homeOne, className: 'header-one' };
        break;
      case 3:
        return { path: routes.homeTwo, className: 'header-two' };
        break;
      case 4:
        return { path: routes.homeThree, className: 'header-three' };
        break;
      case 5:
        return { path: routes.homeFour, className: 'header-four' };
        break;
      case 6:
        return { path: routes.homeFive, className: 'header-five' };
        break;
      case 7:
        return { path: routes.homeSix, className: 'header-six' };
        break;
      case 8:
        return { path: routes.homeSeven, className: 'header-seven' };
        break;
      case 9:
        return { path: routes.homeEight, className: 'header-eight' };
        break;
      case 10:
        return { path: routes.homeNine, className: 'header-nine' };
        break;
      case 11:
        return { path: routes.index, className: 'header-one' };
        break;
      default:
        return { path: routes.homeOne, className: 'header-one' };
        break;
    }
  };
  const renderButtons = (pathType: number) => {
    switch (pathType) {
      case 1:
        return (
        <ul className="nav header-navbar-rht">
            <li className="nav-item pe-1">
              <Link className="nav-link btn btn-light" to="#" data-bs-toggle="modal" data-bs-target="#login-modal"><i className="ti ti-lock me-2"></i>Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-linear-primary" to="#" data-bs-toggle="modal" data-bs-target="#register-modal"><i className="ti ti-user-filled me-2"></i>Join Us</Link>
            </li>
				</ul>
        );
        break;
      case 2:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link
                className="nav-link header-reg"
                to={routes.userSignup}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link header-login"
                to={routes.login}
              >
              <i className="fa-regular fa-circle-user me-2"></i>Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 3:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.login}>
              <i className="feather icon-user" /> Register / Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 4:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.userSignup}>
               <i className="feather icon-calendar me-2"/>
                APPOINTMENT
              </Link>
            </li>
            <li className="nav-item">
              <div className="cta-btn">
                <Link className="btn" to={routes.userSignup}>
                 <i className="feather icon-users me-2"/>
                  REGISTER /
                </Link>
                <Link className="btn ms-1" to={routes.login}>
                  LOGIN
                </Link>
              </div>
            </li>
          </ul>
        );
        break;
      case 5:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.login}>
                <i className="feather icon-users me-2" />
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.userSignup}>
                <i className="feather icon-users me-2" />
                Register
              </Link>
            </li>
          </ul>
        );
        break;
      case 6:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-reg" to={routes.userSignup}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.login}>
              <i className="feather icon-user me-2" />
                Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 7:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-button-six" to={routes.userSignup}>
                <i className="feather icon-user-plus me-2" />
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-button-six" to={routes.login}>
                <i className="feather icon-log-in me-2" />
                Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 8:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.userSignup}>
                <i className="feather icon-user me-2" />
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.login}>
                <i className="feather icon-log-in me-2" />
                Login
              </Link>
            </li>
          </ul>
        );
        break;
      case 9:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.login}>
                <i className="feather icon-log-in me-2" />
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-login" to={routes.userSignup}>
                <i className="feather icon-user-plus me-2" />
                Register
              </Link>
            </li>
          </ul>
        );
        break;
      case 10:
        return (
          <ul className="nav header-navbar-rht header-navbar-rht-nine ">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Become A Professional
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Become A User
              </Link>
            </li>
          </ul>
        );
        break;
      case 11:
        return (
          <div className="header-btn d-flex align-items-center">
                <div className="provider-head-links">
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center me-2 notify-link"
                    data-bs-toggle="dropdown"
                  >
                    <i className="feather icon-bell" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end notification-dropdown p-4">
                    <div className="d-flex dropdown-body align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                      <h6 className="notification-title">
                        Notifications <span className="fs-18 text-gray"> (2)</span>
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
                                    {" "}
                                    Anthony Lewis
                                  </span>{" "}
                                  has left feedback for your recent service{" "}
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
                                    Brian Villaloboshas{" "}
                                  </span>{" "}
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
                    to={routes.customerChat}
                    className="d-flex align-items-center justify-content-center me-2"
                  >
                    <i className="feather icon-mail" />
                  </Link>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className=""
                  >
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
                <div className="header__hamburger d-lg-none my-auto">
                  <div className="sidebar-menu">
                    <i className="fa-solid fa-bars" />
                  </div>
                </div>
              </div>
        );
        break;

        break;
      default:
        return (
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link
                className="nav-link header-reg"
                to="/authentication/choose-signup"
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link header-login"
                to="/authentication/login"
              >
                <i className="fa-regular fa-circle-user me-2"></i>Login
              </Link>
            </li>
          </ul>
        );
        break;
    }
  };

  useEffect(() => {
    type == 1 || type == 4 || type == 10
      ? setImageUrl({
          logo: 'assets/img/logo.png',
          logoSmall: 'assets/img/logo-small.png',
          logoSvg: 'assets/img/logo.svg',
        })
      : setImageUrl({
          logo: 'assets/img/logo-02.svg',
          logoSmall: 'assets/img/logo-icon.png',
          logoSvg: 'assets/img/logo-02.svg',
        });
  }, [type]);

  return (
    <>
      <div className={` top-bar ${type != 3 || !close ? 'd-none' : ''}`}>
        <h6>50% OFF on Christmas</h6>
        <ul>
          <li>2</li>
          <li>15</li>
          <li>33</li>
          <li>32</li>
        </ul>
        <Link to="#" className="top-close" onClick={() => setClose(false)}>
          <Icon.X />
        </Link>
      </div>
      <header
        className={`header ${routerPath(type).className} ${
          scrollYPosition > 200 ? 'fixed' : ''
        }`}
      >
        <div className={` ${type == 4 || type == 1 ? 'container-fluid' : 'container'}`}>
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link onClick={toogle} id="mobile_btn" to="#">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to={routes.index} className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link
                to={routes.index}
                className="navbar-brand logo-small"
              >
                <ImageWithBasePath
                  src="assets/img/logo-small.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to={routerPath(type).path} className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  onClick={toogle}
                  id="menu_close"
                  className="menu-close"
                  to="#"
                >
                  {' '}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav align-items-lg-center">
                {type == 1 ? 
                    <li className="d-none d-lg-block">
                      <div>
                        <div className="dropdown">
                          <Link to="#" className="dropdown-toggle bg-light-300 fw-medium"
                            data-bs-toggle="dropdown">
                            <i className="ti ti-layout-grid me-1"></i>Categories
                          </Link>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Construction</Link></li>
                            <li><Link className="dropdown-item" to="#">Removals</Link></li>
                            <li><Link className="dropdown-item" to="#">Interior</Link></li>
                          </ul>
                        </div>
                      </div>
                      
                    </li>
                    :
                    <></>        
                }
                
                {header_data.map((item: any, index: number) => {
                  return (
                    <>
                      {item.separateRoute == false && (
                        <li
                          key={index + 1}
                          className={`has-submenu ${
                            item.tittle == 'Home' ? 'megamenu' : ''
                          } ${activeRouterPath(item.menu) ? 'active' : ''} `}
                        >
                          <Link
                            to={''}
                            onClick={() => (item.showAsTab = !item.showAsTab)}
                          >
                            {item.tittle} <i className="fas fa-chevron-down" />
                          </Link>
                          <ul
                            className={`submenu ${
                              item.tittle == 'Home' ? 'mega-submenu' : ''
                            } ${item.showAsTab == true ? 'show-sub-menu' : ''}`}
                          >
                            {item.menu.map(
                              (menu: any, menuIndex: number) => {
                                return (
                                  <>
                                    {menu.hasSubRoute == false &&
                                      item.tittle != 'Home' && (
                                        <li className={menu.routes == location.pathname ? 'active': ''} key={menuIndex + 1}>
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
                                                <li className={subMenu.routes == location.pathname ? 'active': ''} key={subMenuIndex + 1}>
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
                                    {menu.menuValue == 'Electrical Home' && (
                                      <li>
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
                                      </li>
                                      
                                    )}
                                  </>
                                );
                              },
                            )}
                          </ul>
                        </li>
                      )}
                    </>
                  );
                })}
                {type == 1 ? 
                    <li className="nav-item">
                      <Link className="nav-link" to="#" data-bs-toggle="modal" data-bs-target="#provider">Become a Provider</Link>
                    </li>
                  :
                  <></>
                  }
                <li className={`nav-item ${type == 10 ? 'd-none' : ''}`}>
                  <Link target='_blank' to="/admin/dashboard">Admin</Link>
                </li>
                
              </ul>
            </div>
            {renderButtons(type)}
          </nav>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;