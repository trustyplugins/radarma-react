import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../../core/data/routes/all_routes';
import { useSelector, useDispatch } from 'react-redux';
import { set_toggleSidebar_data } from '../../../../../core/data/redux/action';
import { AppState, Header } from '../../../../../core/models/interface';

const ProviderAuthHeader2 = () => {
  const location = useLocation();
  const header_data = useSelector((state: Header) => state.header_data);
  const toggle_data = useSelector((state: AppState) => state.toggleSidebar);
  const dispatch = useDispatch();
  const toogle = () => {
    dispatch(set_toggleSidebar_data(toggle_data ? false : true));
  };

  const activeRouterPath = (routesArray: Header) => {
    let checkActive = false;
    checkActive;
    header_data.map((mainMenus: any) => {
      mainMenus.menu.map((menus: any) => {
        checkActive = location.pathname == menus.routes ? true : false;
      });
    });
    const all_routes: string[] = [];
    routesArray.map((item: Header) => {
      all_routes.push(item.routes);
    });
    return all_routes.includes(location.pathname);
  };

  const routes = all_routes;
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link onClick={toogle} id="mobile_btn" to="#">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link>
            <Link to={routes.homeOne} className="navbar-brand logo">
              <ImageWithBasePath
                src="assets/img/logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
            <Link to={routes.homeOne} className="navbar-brand logo-small">
              <ImageWithBasePath
                src="assets/img/logo-small.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to={routes.homeOne} className="menu-logo">
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
            <ul className="main-nav">
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
                          to="#"
                          onClick={() => (item.showAsTab = !item.showAsTab)}
                        >
                          {item.tittle} <i className="fas fa-chevron-down" />
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
                                        (menu.showSubRoute = !menu.showSubRoute)
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
                                {menu.menuValue == 'Electrical Home' && (
                                  <div className="megamenu-wrapper">
                                    <div className="row">
                                      {item.menu.map(
                                        (menu: Header, megaIndex: number) => {
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
                              </>
                            );
                          })}
                        </ul>
                      </li>
                    )}
                  </>
                );
              })}

              <li>
                <Link to="/admin/dashboard">Admin</Link>
              </li>
              <li className="login-link">
                <Link to={routes.chooseSignUp}>Register</Link>
              </li>
              <li className="login-link">
                <Link to={routes.login}>Login</Link>
              </li>
            </ul>
          </div>
          {location?.pathname !=
          '/providers/authentication/provider-signup-subscription' ? (
            <>
              <ul className="nav header-navbar-rht">
                <li className="nav-item dropdown flag-nav">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <ImageWithBasePath src="assets/img/flag.png" alt="Flag" />{' '}
                    En
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/us.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      En
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/fr.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      French
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/de.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      German
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link header-login" to={routes.login}>
                    <i className="fa-regular fa-circle-user me-2" />
                    Login
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
          {location?.pathname ==
          '/providers/authentication/provider-signup-subscription' ? (
            <>
              <ul className="nav header-navbar-rht log-rht">
                <li className="nav-item">
                  <Link className="nav-link" to={routes.faq}>
                    FAQ
                  </Link>
                </li>
                <li className="nav-item dropdown flag-nav">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <ImageWithBasePath src="assets/img/flag.png" alt="Flag" />{' '}
                    En
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/us.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      En
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/fr.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      French
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/de.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      German
                    </Link>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
        </nav>
      </div>
    </header>
  );
};

export default ProviderAuthHeader2;
