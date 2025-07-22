import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  set_current_route,
  set_current_route_array,
  set_is_mobile_sidebar,
  set_toggleSidebar_data,
} from '../core/data/redux/action';
// import Progress from './frontend/common/progress/progress';
import Cursor from './frontend/common/cursor/cursor';
import {
  AppState,
  CurrentRoute,
  ProviderEarningsadmindatas,
} from '../core/models/interface';
// import '../style/scss/main.scss'
const Feature = () => {
  const toggle_data = useSelector(
    (state: ProviderEarningsadmindatas) => state.ProviderEarningsAdmin,
  );
  const toggle_data_2 = useSelector((state: AppState) => state.toggleSidebar2);
  const mobileMenu = useSelector((state: AppState) => state.toggleSidebar);
  const mouse_data = useSelector((state: AppState) => state.mouseOverSidebar);

  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const current_route = useSelector((state: any) => state.current_route);
  const mobileSidebar = useSelector((state: AppState) => state.mobileSidebar);

  const current_route_array = useSelector(
    (state: CurrentRoute) => state.current_route_array,
  );
  const dispatch = useDispatch();
  const getRoutes = () => {
    setCurrentRoute(location.pathname);
    const splitVal = location.pathname.split('/');
    const route_data = {
      base: splitVal[1],
      page: splitVal[2] || '',
      last: splitVal[3] || '',
    };
    dispatch(set_current_route_array(splitVal));
    dispatch(set_current_route(route_data));
    dispatch(set_is_mobile_sidebar(false));
  };
  const htmlElement = document.documentElement;
  useEffect(() => {
    getRoutes();
    if(current_route.base !== 'providers') {
      htmlElement.classList.remove('dark');
    }
  }, [location.pathname, currentRoute]);

  // useEffect(() => {
  //   getRoutes();

  // }, []);
  useEffect(() => {
    window.location.pathname.includes("/admin")
    ? import("../style/admin/css/admin.css")
    : import("../style/scss/main.scss");
  }, [location.pathname])
  return (
    <div
      className={`${current_route.base == 'providers' ? 'provider-page' : ''} ${location.pathname == '/pages/booking' ? 'booking-page' : ''}
      ${current_route_array.includes('authentication') ? 'authentication-page ' : ''}
      ${current_route.base == 'admin' ? 'admin' : ''} ${toggle_data_2 ? 'mini-sidebar' : ''} 
      ${mobileSidebar ? 'menu-opened slide-nav' : ''} 
      ${ mouse_data ? 'expand-menu' : ''} ${current_route.base == 'home-two' ? 'body-two' : ''} 
      ${current_route.base == 'home-three' ? 'body-one' : ''} ${current_route.base == 'home-four' ? 'home-four' : ''} 
      ${current_route.base == 'home-seven' ? 'seven-home' : ''}${current_route.base == 'home-eight' ? 'home-eight' : ''} 
      ${current_route.base == 'home-nine' ? 'home-page-five' : ''} ${current_route.base == 'home-ten' ? 'home-ten' : ''}`}
    >
      <div className={`main-wrapper ${mobileMenu ? 'menu-opened' : ''}`}>
        <Outlet />
      </div>
      <div
        className={`sidebar-overlay header-overlay ${mobileMenu ? 'opened' : ''} ${toggle_data ? 'opened' : ''} ${
          mobileSidebar ? 'opened' : ''
        }`}
        onClick={()=>dispatch(set_toggleSidebar_data(false))}
      ></div>

      {/* {location.pathname.includes('home') ? <Progress /> : <></>} */}
      {location.pathname.includes('admin') ? <></> : <Cursor />}
    </div>
  );
};

export default Feature;
