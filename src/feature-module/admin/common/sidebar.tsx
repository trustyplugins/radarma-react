import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import * as Icon from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  set_mouseoversidebar_data,
  set_toggleSidebar_data_2,
} from '../../../core/data/redux/action';
import { all_routes } from '../../../core/data/routes/all_routes';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { adminSidebar } from '../../../core/data/json/admin_sidebar_data';
import { AppState, SideBarData } from '../../../core/models/interface';

const AdminSidebar = () => {
  const routes = all_routes;
  const toggle_data = useSelector((state: AppState) => state.mouseOverSidebar);
  const toggle_data2 = useSelector((state: AppState) => state.toggleSidebar2);
  const dispatch = useDispatch();

  const [sidebarData, setSidebarData] = useState(adminSidebar);
  const toggle = () => {
    dispatch(set_toggleSidebar_data_2(toggle_data2 ? false : true));
  };
  const toogle = () => {
    dispatch(set_mouseoversidebar_data(toggle_data ? false : true));
  };
  const Location = useLocation();
  const activeRouterPath = (routesArray: string) => {
    return (routesArray = Location.pathname);
    console.log(routesArray);

  };


  const activeRouterMenu = (menu: string) => {
    return Location.pathname.includes(menu.toLowerCase());
  };
  const expandSubMenus = (menu: SideBarData) => {
    sessionStorage.setItem('menuValue', menu.menuValue);
    const updatedAdminSidebar = sidebarData.map((section) => {
      const updatedSection = { ...section };
      updatedSection.menu = section.menu.map((menuItem) =>
        menu.menuValue != menuItem.menuValue
          ? {
              ...menuItem,
              showSubRoute: false,
            }
          : {
              ...menuItem,
              showSubRoute: !menu.showSubRoute,
            },
      );
      return updatedSection;
    });
    setSidebarData(updatedAdminSidebar);
  };

  return (
    <div
      className="admin-sidebar"
      id="sidebar"
      onMouseEnter={toogle}
      onMouseLeave={toogle}
    >
      <div className="admin-sidebar-header">
        <div className="admin-sidebar-logo">
          <Link to="/admin/dashdoard">
            <ImageWithBasePath
              src="assets/admin/img/logo.svg"
              className="img-fluid logo"
              alt="Logo"
            />
          </Link>
          <Link to={routes.dashboard}>
            <ImageWithBasePath
              src="assets/admin/img/logo-small.svg"
              className="img-fluid logo-small"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="admin-siderbar-toggle">
          <Link to={'#'} onClick={toggle}>
            <label className="switch" id="toggle_btn">
              <input type="checkbox" />
              <span className="admin-slider round" />
            </label>
          </Link>
        </div>
      </div>
      <div className="admin-sidebar-inner slimscroll">
        <Scrollbars>
          <div id="sidebar-menu" className="admin-sidebar-menu">
            <ul>
              {sidebarData.map((mainTittle: any, index: any) => {
                return (
                  <>
                    <li className="menu-title" key={index + 1}>
                      <h6>{mainTittle.tittle}</h6>
                    </li>
                    {mainTittle.menu.map(
                      (menu: SideBarData, menuIndex: number) => {
                        return (
                          <>
                            {menu.hasSubRoute === false ? (
                              <li key={menuIndex + 1}>
                                <Link
                                  to={menu.route}
                                  className={`${
                                    menu.showSubRoute ? 'active' : ''
                                  }`}
                                >
                                  {menu.icon} <span>{menu.menuValue}</span>
                                </Link>
                              </li>
                            ) : (
                              <li className="submenu">
                                <Link
                                  to="#"
                                  onClick={() => expandSubMenus(menu)}
                                  className={`${
                                    menu.showSubRoute ? 'subdrop' : ''
                                  } ${
                                    activeRouterMenu(menu.menuValue)
                                      ? 'active'
                                      : ''
                                  }`}
                                >
                                  {menu.icon}
                                  <span>{menu.menuValue}</span>
                                  <span className="menu-arrow">
                                    {menu.showSubRoute ? (
                                      <Icon.ChevronDown className="react-feather-custom"></Icon.ChevronDown>
                                    ) : (
                                      <Icon.ChevronRight className="react-feather-custom"></Icon.ChevronRight>
                                    )}
                                  </span>
                                </Link>
                                <ul
                                  style={{
                                    display: menu.showSubRoute
                                      ? 'block'
                                      : 'none',
                                  }}
                                >
                                  {menu.subMenus.map(
                                    (
                                      subMenus: any,
                                      subMenu: number,
                                    ) => {
                                      return (
                                        <>
                                          <li key={subMenu + 1}>
                                            <Link
                                              to={subMenus.route}
                                              className={`${
                                                activeRouterPath(subMenus.route)
                                                  ? 'active'
                                                  : ''
                                              }`}
                                            >
                                              {subMenus.menuValue}
                                            </Link>
                                          </li>
                                        </>
                                      );
                                    },
                                  )}
                                </ul>
                              </li>
                            )}
                          </>
                        );
                      },
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default AdminSidebar;
