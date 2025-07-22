import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, To, useLocation } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { set_toggleSidebar_data } from '../../../../core/data/redux/action';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { AppState, Header } from '../../../../core/models/interface';
const routes = all_routes;

const HeaderNine = () => {
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
    header_data.map((mainMenus: { menu: Header }) => {
      mainMenus.menu.map((menus: { routes: string }) => {
        checkActive = location.pathname == menus.routes ? true : false;
      });
    });
    const all_routes: string[] = [];
    routesArray.map((item) => {
      all_routes.push(item.routes);
    });
    return all_routes.includes(location.pathname);
  };
  return (
    <header className="header header-nine">
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
            <Link to={routes.homeOne} className="navbar-brand logo-small">
              <ImageWithBasePath
                src="assets/img/logo-icon.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to={routes.homeOne} className="menu-logo">
                <ImageWithBasePath
                  src="assets/img/logo-02.svg"
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
              {header_data.map(
                (
                  item: any,
                  index: number,
                ) => {
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
                            {item.menu.map((menu : any, menuIndex: any) => {
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
                                            subMenu: {
                                              routes: To;
                                              menuValue:
                                                | string
                                                | number
                                                | boolean
                                                | React.ReactElement<
                                                    | string
                                                    | React.JSXElementConstructor<string>
                                                  >
                                                | Iterable<React.ReactNode>
                                                | React.ReactPortal
                                                | null
                                                | undefined;
                                            },
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
                },
              )}
              <li>
                <Link to="/admin/index">Admin</Link>
              </li>
              <li className="login-link">
                <Link to="/choose-signup">Register</Link>
              </li>
              <li className="login-link">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
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
        </nav>
      </div>
    </header>
  );
};

export default HeaderNine;
