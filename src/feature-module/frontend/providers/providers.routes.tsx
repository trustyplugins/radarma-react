import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import ProviderAddon from './provider-addon/provider-addon';
import ConnectedApp from './settings/connected-app';
import Verification from './settings/verification';
import ProviderEditService from './provider-edit-service/provider-edit-service';
import ProviderHoliday from './provider-holiday/provider-holiday';
import ProviderNotification from './settings/provider-notification';
import ProviderOffer from './provider-offer/provider-offer';
import ProviderEarnings from './provider-earnings/provider-earning';
import ProviderDeviceManagement from './settings/provider-device-management';
import ProviderLoginActivity from './settings/provider-login-activity';
import ProviderAvailability from './provider-availability/provider-availability';
import ProviderBookDetails from './provider-book-details/provider-book-details';
import ProviderBooking from './provider-booking/provider-booking';
import ProviderChat from './provider-chat/provider-chat';
import ProviderCoupons from './provider-coupons/provider-coupons';
import ProviderAppointmentSettings from './settings/provider-appointment-settings';
import ProviderConnectedApps from './settings/provider-connected-apps';

import ProviderSubscription from './provider-subscription/provider-subscription';
import ProviderPayout from './provider-payout/provider-payout';
import ProviderReview from './provider-review/provider-review';
import ProviderSecuritySettings from './settings/provider-security-settings';

import ProviderServices from './provider-service/provider-service';
import ProviderServiceList from './provider-service-list/provider-service-list';
import ProviderSignup from './authentication/provider-signup';
import ProviderPlan from './settings/provider-plan';
import ProviderProfileSettings from './settings/provider-profile-settings';
import ProviderSocialProfile from './settings/provider-social-profile';
import ProviderDashboard from './dashboard/dashboard';
import ProviderSignupPayment from './authentication/provider-signup-payment';
import ProviderSignupSubscription from './authentication/provider-signup-subscription';
import AddSubscription from './add-subscription/add-subscription';
import StaffList from './staff/staffList';
import StaffGrid from './staff/staffGrid';
import StaffDetails from './staff/staffDetails';
import CustomerDetails from './customer/customerDetails';
import CustomerList from './customer/customerList';
import CustomerGrid from './customer/customerGrid';
import ProviderTransaction from './provider-payout/providerTransaction';
import ProviderLeaveHistory from './provider-holiday/provider-leave-history';
import ProviderEnquiry from './provider-enquiry/provider-enquiry';

const ProvidersRoutes = () => {
  const all_providers_routes = [
    {
      path: '/provider-addon',
      name: 'providerAddon',
      element: <ProviderAddon />,
      route: Route,
    },
    {
      path: '/providers/provider-edit-service',
      name: 'provider-edit-service',
      element: <ProviderEditService />,
      route: Route,
    },
    {
      path: '/provider-holiday',
      name: 'provider-holiday',
      element: <ProviderHoliday />,
      route: Route,
    },
    {
      path: '/leave-history',
      name: 'leave-history',
      element: <ProviderLeaveHistory />,
      route: Route,
    },
    {
      path: '/provider-enquiry',
      name: 'provider-enquiry',
      element: <ProviderEnquiry />,
      route: Route,
    },
    {
      path: '/settings/provider-notification',
      name: 'provider-notification',
      element: <ProviderNotification />,
      route: Route,
    },
    {
      path: '/provider-offer',
      name: 'provider-offer',
      element: <ProviderOffer />,
      route: Route,
    },
    {
      path: '/provider-earnings',
      name: 'provider-earnings',
      element: <ProviderEarnings />,
      route: Route,
    },
    {
      path: '/settings/provider-login-activity',
      name: 'ProviderLoginActivity',
      element: <ProviderLoginActivity />,
      route: Route,
    },
    
    {
      path: '/settings/connected-app',
      name: 'connected-app',
      element: <ConnectedApp />,
      route: Route,
    },
    {
      path: '/settings/verification',
      name: 'verfication',
      element: <Verification />,
      route: Route,
    },
    {
      path: 'settings/provider-device-management',
      name: 'ProviderDeviceManagement',
      element: <ProviderDeviceManagement />,
    },
    {
      path: '/settings/provider-profile-settings',
      name: 'provider-profile-settings',
      element: <ProviderProfileSettings />,
    },
    {
      path: '/settings/provider-plan',
      name: 'provider-plan',
      element: <ProviderPlan />,
    },
    {
      path: '/settings/provider-appointment-settings',
      name: 'provider-appointment-settings',
      element: <ProviderAppointmentSettings />,
      route: Route,
    },
    {
      path: '/provider-availability',
      name: 'provider-availability',
      element: <ProviderAvailability />,
      route: Route,
    },
    {
      path: '/provider-book-details',
      name: 'provider-book-details',
      element: <ProviderBookDetails />,
      route: Route,
    },
    {
      path: '/provider-booking',
      name: 'provider-booking',
      element: <ProviderBooking />,
      route: Route,
    },
    {
      path: '/provider-chat',
      name: 'provider-chat',
      element: <ProviderChat />,
      route: Route,
    },
    {
      path: '/provider-coupons',
      name: 'provider-coupons',
      element: <ProviderCoupons />,
      route: Route,
    },
    {
      path: '/dashboard',
      name: 'provider-dashboard',
      element: <ProviderDashboard />,
      route: Route,
    },
    {
      path: '/provider-service',
      name: 'provider-service',
      element: <ProviderServices />,
      route: Route,
    },
    
    {
      path: '/settings/provider-appointment-settings',
      name: 'provider-appointment-settings',
      element: <ProviderAppointmentSettings />,
      route: Route,
    },
    {
      path: '/settings/provider-connected-apps',
      name: 'provider-connected-apps',
      element: <ProviderConnectedApps />,
      route: Route,
    },
    {
      path: '/authentication/provider-signup',
      name: 'provider-signup',
      element: <ProviderSignup />,
      route: Route,
    },
    {
      path: '/authentication/provider-signup-payment',
      name: 'provider-signup-payment',
      element: <ProviderSignupPayment />,
      route: Route,
    },
    {
      path: '/authentication/provider-signup-subscription',
      name: 'provider-signup-subscription',
      element: <ProviderSignupSubscription />,
      route: Route,
    },
    {
      path: '/settings/provider-social-profile',
      name: 'provider-social-profile',
      element: <ProviderSocialProfile />,
      route: Route,
    },
    {
      path: '/provider-subscription',
      name: 'provider-social-profile',
      element: <ProviderSubscription />
    },
    {
      path: '/provider-payout',
      name: 'provider-payout',
      element: <ProviderPayout />,
      route: Route,
    },
    {
      path: '/provider-review',
      name: 'provider-review',
      element: <ProviderReview />,
      route: Route,
    },
    {
      path: '/staff/staff-list',
      name: 'staff-list',
      element: <StaffList />,
      route: Route,
    },
    {
      path: '/staff/staff-grid',
      name: 'staff-grid',
      element: <StaffGrid />,
      route: Route,
    },
    {
      path: '/staff/staff-details',
      name: 'staff-details',
      element: <StaffDetails />,
      route: Route,
    },
    {
      path: '/customer/customer-details',
      name: 'customer-details',
      element: <CustomerDetails />,
      route: Route,
    },
    {
      path: '/customer/customer-list',
      name: 'customer-list',
      element: <CustomerList />,
      route: Route,
    },
    {
      path: '/customer/customer-grid',
      name: 'customer-grid',
      element: <CustomerGrid />,
      route: Route,
    },
    {
      path: '/provider-transaction',
      name: 'provider-transaction',
      element: <ProviderTransaction/>,
      route: Route,
    },
    {
      path: '/settings/provider-security-settings',
      name: 'provider-security-settings',
      element: <ProviderSecuritySettings />,
      route: Route,
    },
    {
      path: '/settings/payment-settings',
      name: 'provider-security-settings',
      element: <ProviderSecuritySettings />,
      route: Route,
    },
    {
      path: '/provider-service',
      name: 'provider-service',
      element: <ProviderServices />,
      route: Route,
    },
    {
      path: '/provider-service-list',
      name: 'provider-service-list',
      element: <ProviderServiceList />,
      route: Route,
    },
    {
      path: '/settings/payment-settings',
      name: 'provider-security-settings',
      element: <ProviderSecuritySettings />,
      route: Route,
    },
    {
      path: '/providers/add-subscription',
      name: 'add-subscription',
      element: <AddSubscription />,
      route: Route,
    },
    {
      path: '*',
      name: 'NotFound',
      element: <Navigate to="/" />,
      route: Route,
    },
  ];
  return (
    <>
       <>
      <Routes>
        <Route>
          {all_providers_routes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
    </>
  )
}

export default ProvidersRoutes
