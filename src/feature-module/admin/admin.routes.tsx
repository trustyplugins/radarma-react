import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CronJob from './setting/cronjob';
import AppointmentSettings from './setting/appointment-settings';
import AuthenticationSettings from './setting/authentication-settings';
import Announcements from './support/announcements';
import CustomerWallet from './reports/customer-wallet';
import CalendarSetting from './setting/calendar-setting';
import Dashboard from './dashboard/dashboard';
import InactiveServices from './services/inactive-services';
import PendingServices from './services/pending-services';
import Localization from './setting/localization';
import EmailSettings from './setting/email-settings';
import SocialAuthentication from './setting/social-authentication';
import SocialProfile from './setting/social-profile';
import StorageSettings from './setting/storage-settings';
import CategoriesList from './categories/categories-list';
//import Categories from '../frontend/pages/categories/categories';
import SubCategoriesList from './categories/subcategories-list';
import Roles from './roles-permission/roles';
import ActiveServices from './services/active-services';
import AccountSettings from './setting/account-settings';
import SeoSettings from './setting/seo-settings';
import ServiceSettings from './setting/service-settings';
import SiteInformation from './setting/site-information';
import SmsSettings from './setting/sms-settings';
import ServiceSales from './sales-report/service-sales';
import AllService from './services/all-service';
import Logout from './authentication/logout';
import AdminSignin from './authentication/signin';
import AdminSignup from './authentication/signup';
import ForgetPassword from './authentication/forget-password';
import Users from './users/users';
import DeletedServices from './services/deleted-services';
import Coupons from './marketing/coupons';
import CreateMenu from './management/create-menu';
import AddService from './services/add-service';
import { SessionProvider } from './SessionContext';
const AdminRoutes = ({ userRole }: { userRole: string | null }) => {
  const all_admin_routes = [
    {
      path: '/setting/calendar-settings',
      name: 'calendar-settings',
      element: <CalendarSetting />,
      route: Route,
    },
    {
      path: '/marketing/coupons',
      name: 'coupons',
      element: <Coupons />,
      route: Route,
    },
    {
      path: '/setting/cronjob',
      name: 'cronjob',
      element: <CronJob />,
      route: Route,
    },
    {
      path: '/management/create-menu',
      name: 'create-menu',
      element: <CreateMenu />,
      route: Route,
    },
    {
      path: '/users',
      name: 'users',
      element: <Users />,
      route: Route,
      role:['A1']
    },
    {
      path: '/setting/appointment-settings',
      name: 'appointment-settings',
      element: <AppointmentSettings />,
      route: Route,
    },
    {
      path: '/setting/authentication-settings',
      name: 'authentication-settings',
      element: <AuthenticationSettings />,
      route: Route,
    },
    {
      path: '/setting/social-authentication',
      name: 'social-authentication',
      element: <SocialAuthentication />,
      route: Route,
    },
    {
      path: '/setting/storage-settings',
      name: 'storage-settings',
      element: <StorageSettings />,
      route: Route,
    },
    {
      path: '/support/announcements',
      name: 'announcements',
      element: <Announcements />,
      route: Route,
    },
    {
      path: '/reports/customer-wallet',
      name: 'customer-wallets',
      element: <CustomerWallet />,
      route: Route,
    },
    {
      path: '/setting/localization',
      name: 'localization',
      element: <Localization />,
      route: Route,
      role:['A1']
    },
    {
      path: '/services/inactive-services',
      name: 'inactive-services',
      element: <InactiveServices />,
      route: Route,
      role:['A1','A2'] 
    },
    {
      path: '/services/pending-services',
      name: 'pending-services',
      element: <PendingServices />,
      route: Route,
      role:['A1','A2']
    },
    {
      path: '/categories/categories-list',
      name: 'categories',
      element: <CategoriesList />,
      route: Route,
      role:['A1']
    },
    {
      path: '/setting/social-profile',
      name: 'social-profile',
      element: <SocialProfile />,
      route: Route,
    },
    {
      path: '*',
      name: 'NotFound',
      element: <Navigate to="/" />,
      route: Route,
    },
    {
      path: '/services/all-services',
      name: 'all-services',
      element: <AllService />,
      route: Route,
      role:['A1','A2']
    },
    {
      path: '/services/active-services',
      name: 'active-services',
      element: <ActiveServices />,
      route: Route,
      role:['A1','A2']
    },
    {
      path: '/services/add-service',
      name: 'add-services',
      element: <AddService />,
      route: Route,
      role:['A1','A2']
    },
    {
      path: '/services/deleted-services',
      name: 'deleted-services',
      element: <DeletedServices />,
      route: Route,
      role:['A1','A2']
    },
    {
      path: '/roles',
      name: 'Roles',
      element: <Roles />,
      route: Route,
      role:['A1']
    },
    {
      path: '/setting/account-settings',
      name: 'email-settings',
      element: <AccountSettings />,
      route: Route,
      role:['A1']
    },
    {
      path: '/sub-categories',
      name: 'SubcategoriesList',
      element: <SubCategoriesList />,
      route: Route,
      role:['A1']
    },
    {
      path: '/signup',
      name: 'signup',
      element: <AdminSignup />,
      route: Route,
    },
    {
      path: '/setting/email-settings',
      name: 'email-settings',
      element: <EmailSettings />,
      route: Route,
    },
    {
      path: '/setting/seo-settings',
      name: 'seo-settings',
      element: <SeoSettings />,
      route: Route,
    },
    {
      path: '/setting/service-settings',
      name: 'service-settings',
      element: <ServiceSettings />,
      route: Route,
      role:['A1']
    },
    {
      path: '/setting/site-information',
      name: 'site-information',
      element: <SiteInformation />,
      route: Route,
    },
    {
      path: '/setting/sms-settings',
      name: 'sms-settings',
      element: <SmsSettings />,
      route: Route,
    },
    {
      path: '/reports/service-sales',
      name: 'service-sales',
      element: <ServiceSales />,
      route: Route,
    },
    {
      path: '/',
      name: 'dashboard',
      element: <Dashboard />,
      route: Route,
      role: ['A1','A2']
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      element: <Dashboard />,
      route: Route,
      role: ['A1','A2']
    },
  ];
  console.log(userRole);
  return (
    <>
     <SessionProvider>
      <Routes>
        {/* Admin (A1) only */}
        <Route>
          {all_admin_routes.map((route, idx) => {
            if (route.role?.includes(userRole)) {
              return <Route path={route.path} element={route.element} key={`a1-${idx}`} />;
            }
            return null;
          })}
        </Route>
        </Routes>
        </SessionProvider>
        <Routes>
        {/* Public Auth Routes */}
        <Route path="/signin" element={<AdminSignin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<AdminSignup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        {/* <Route path="*" element={<Navigate to="/signin" replace />} /> */}
      </Routes>
      
    </>
  );
};

export default AdminRoutes;
