import React, { useEffect, useState } from 'react';
import AdminRoutes from './admin.routes';
import AdminHeader from './common/header';
import AdminSidebar from './common/sidebar';
import { useLocation } from 'react-router-dom';
import PageLoader from '../../core/loader';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/admin/css/admin.css';
import { set_toggleSidebar_data} from '../../core/data/redux/action';
import {AppState,ProviderEarningsadmindatas} from '../../core/models/interface';
const Admin = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const toggle_data = useSelector(
    (state: ProviderEarningsadmindatas) => state.ProviderEarningsAdmin,
  );
  const toggle_data_2 = useSelector((state: AppState) => state.toggleSidebar2);
  const mobileMenu = useSelector((state: AppState) => state.toggleSidebar);
  const mouse_data = useSelector((state: AppState) => state.mouseOverSidebar);
  const mobileSidebar = useSelector((state: AppState) => state.mobileSidebar);
  useEffect(() => {
    setIsLoading(true);
  }, [location.pathname]);

  useEffect(() => {
    const delay = 2000;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [location.pathname]);
  useEffect(() => {
    window.location.pathname.includes("/admin")
      ? import("../../style/admin/css/admin.css")
      : import("../../style/scss/main.scss");
  }, [location.pathname])
  return (
    <>
      {isLoading && <PageLoader />}
      {!isLoading && (
        <>
          <div
            className={`admin ${toggle_data_2 ? 'mini-sidebar' : ''} ${mobileSidebar ? 'menu-opened slide-nav' : ''} ${ mouse_data ? 'expand-menu' : ''}`}>
           <div className={`main-wrapper ${mobileMenu ? 'menu-opened' : ''}`}>
              {location.pathname == '/signin' ||
                location.pathname == '/signup' ||
                location.pathname == '/forget-password' ||
                location.pathname == '/wallet-history' ? (
                <></>
              ) : (
                <>
                  <AdminHeader />
                  <AdminSidebar />
                </>
              )}
              <AdminRoutes />
            </div>
            <div
        className={`sidebar-overlay header-overlay ${mobileMenu ? 'opened' : ''} ${toggle_data ? 'opened' : ''} ${
          mobileSidebar ? 'opened' : ''
        }`}
        onClick={()=>dispatch(set_toggleSidebar_data(false))}
      ></div></div>
        </>
      )}
    </>
  );
};

export default Admin;
