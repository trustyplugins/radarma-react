import React, { useEffect, useState } from 'react';
import AdminRoutes from './admin.routes';
import AdminHeader from './common/header';
import AdminSidebar from './common/sidebar';
import { useNavigate,useLocation } from 'react-router-dom';
import PageLoader from '../../core/loader';
import { useDispatch, useSelector } from 'react-redux';
import '../../style/admin/css/admin.css';
import { set_toggleSidebar_data} from '../../core/data/redux/action';
import {AppState,ProviderEarningsadmindatas} from '../../core/models/interface';
import AdminSignin from './authentication/signin';
import supabase from '../../supabaseClient';
import { Session } from 'inspector/promises';
const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const toggle_data = useSelector(
    (state: ProviderEarningsadmindatas) => state.ProviderEarningsAdmin,
  );
  const toggle_data_2 = useSelector((state: AppState) => state.toggleSidebar2);
  const mobileMenu = useSelector((state: AppState) => state.toggleSidebar);
  const mouse_data = useSelector((state: AppState) => state.mouseOverSidebar);
  const mobileSidebar = useSelector((state: AppState) => state.mobileSidebar);
  const [userRole, setUserRole] = useState<string | null>(null);


  useEffect(() => {
    const load = async () => {
      const { data: { session} } = await supabase.auth.getSession();
  if (!session) {
    navigate("/signin", { replace: true });
    //return;
  }
      if (session?.user?.phone) {
        const dbMobile = session.user.phone.replace(/^\+?91/, '');
        const { data, error } = await supabase
          .from('rd_users')
          .select('*')
          .eq('mobile', dbMobile)
          .single();
  //console.log(data);
        setUserRole(error ? null : data?.role || null);
      } else {
        //setProfile(null);
      }
      setIsLoading(false);
    };
  
    load();
  
  }, []);
  
  useEffect(() => {
    console.log(window.location.pathname);
    import("../../style/scss/main.scss");
    import("../../style/admin/css/admin.css");
    // window.location.pathname.includes("/admin")
    //   ? import("../../style/admin/css/admin.css")
    //   : import("../../style/scss/main.scss");
  }, [location.pathname]);

console.log(userRole);

  return (
    <>
      {isLoading && <PageLoader />}
      {!isLoading && (
  <>
    <div
      className={`admin ${toggle_data_2 ? 'mini-sidebar' : ''} ${mobileSidebar ? 'menu-opened slide-nav' : ''} ${mouse_data ? 'expand-menu' : ''}`}>
      <div className={`main-wrapper ${mobileMenu ? 'menu-opened' : ''}`}>
        {['/signin', '/signup', '/forget-password', '/wallet-history'].includes(location.pathname) ? null : (
          <>
            <AdminHeader/>
            <AdminSidebar userRole={userRole}/>
          </>
        )}
         <AdminRoutes userRole={userRole} /> 
      </div>
      <div
        className={`sidebar-overlay header-overlay ${mobileMenu ? 'opened' : ''} ${toggle_data ? 'opened' : ''} ${mobileSidebar ? 'opened' : ''}`}
        onClick={() => dispatch(set_toggleSidebar_data(false))}
      ></div>
    </div>
  </>
)}



      
    </>
  );
};

export default Admin;
