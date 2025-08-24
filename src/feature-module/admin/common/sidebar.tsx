import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import * as Icon from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  set_is_mobile_sidebar, 
} from '../../../core/data/redux/action';
import { all_routes } from '../../../core/data/routes/all_routes';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { adminSidebar } from '../../../core/data/json/admin_sidebar_data';
import { adminSidebar2 } from '../../../core/data/json/admin_sidebar_data_A2';
import { AppState, SideBarData } from '../../../core/models/interface';

const AdminSidebar = ({ userRole }: { userRole: string | null }) => {
  const routes = all_routes;
  const mobileSidebar = useSelector((state: AppState) => state.mobileSidebar);
  const [sidebarData, setSidebarData] = useState(adminSidebar2);
  const dispatch = useDispatch();
  // Set sidebar data based on role
  useEffect(() => {
    if (!userRole) return;
    if (userRole === 'A1') {
      setSidebarData(adminSidebar);
    } else {
      setSidebarData(adminSidebar2);
    }
  }, [userRole]);

  const location = useLocation();

  const activeRouterPath = (routePath: string) => {
    return location.pathname === routePath;
  };

  const activeRouterMenu = (menu: string) => {
    return location.pathname.includes(menu.toLowerCase());
  };

  const expandSubMenus = (menu: SideBarData) => {
    sessionStorage.setItem('menuValue', menu.menuValue);
    const updatedAdminSidebar = sidebarData.map((section) => {
      const updatedSection = { ...section };
      updatedSection.menu = section.menu.map((menuItem) =>
        menu.menuValue !== menuItem.menuValue
          ? { ...menuItem, showSubRoute: false }
          : { ...menuItem, showSubRoute: !menu.showSubRoute }
      );
      return updatedSection;
    });
    setSidebarData(updatedAdminSidebar);
  };

  return (
    <>
    {mobileSidebar && (
      <div
        className="sidebar-overlay header-overlay opened"
        onClick={() => dispatch(set_is_mobile_sidebar(false))}
      />
    )}
    <div
      className={`admin-sidebar ${mobileSidebar ? "active" : ""}`}
      id="sidebar"
    >
      <div className="admin-sidebar-header">
        <div className="admin-sidebar-logo">
          <Link to="/dashboard">
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
        {/* <div className="admin-siderbar-toggle">
          <Link to="#" onClick={toggle}>
            <label className="switch" id="toggle_btn">
              <input type="checkbox" />
              <span className="admin-slider round" />
            </label>
          </Link>
        </div> */}
      </div>

      <div className="admin-sidebar-inner slimscroll">
        <Scrollbars>
          <div id="sidebar-menu" className="admin-sidebar-menu">
            <ul>
              {sidebarData.map((mainTitle: any, index: number) => (
                <React.Fragment key={`section-${index}`}>
                  <li className="menu-title">
                    <h6>{mainTitle.tittle}</h6>
                  </li>
                  {mainTitle.menu.map((menu: SideBarData, menuIndex: number) => (
                    <React.Fragment key={`menu-${menuIndex}`}>
                      {menu.hasSubRoute === false ? (
                        <li>
                          <Link
                            to={menu.route}
                            className={menu.showSubRoute ? 'active' : ''}
                          >
                            {menu.icon} <span>{menu.menuValue}</span>
                          </Link>
                        </li>
                      ) : (
                        <li className="submenu">
                          <Link
                            to="#"
                            onClick={() => expandSubMenus(menu)}
                            className={`${menu.showSubRoute ? 'subdrop' : ''} ${
                              activeRouterMenu(menu.menuValue) ? 'active' : ''
                            }`}
                          >
                            {menu.icon}
                            <span>{menu.menuValue}</span>
                            <span className="menu-arrow">
                              {menu.showSubRoute ? (
                                <Icon.ChevronDown className="react-feather-custom" />
                              ) : (
                                <Icon.ChevronRight className="react-feather-custom" />
                              )}
                            </span>
                          </Link>
                          <ul style={{ display: menu.showSubRoute ? 'block' : 'none' }}>
                            {menu.subMenus.map((subMenus: any, subIndex: number) => (
                              <li key={`sub-${subIndex}`}>
                                <Link
                                  to={subMenus.route}
                                  className={activeRouterPath(subMenus.route) ? 'active' : ''}
                                >
                                  {subMenus.menuValue}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </Scrollbars>
      </div>
    </div>
    </>
  );
  
};

export default AdminSidebar;
