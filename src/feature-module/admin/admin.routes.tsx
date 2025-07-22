import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Countries from './location/countries';
import Cities from './location/cities';
import ConnectApps from './setting/connectapps';
import Chat from './chat/chat';
import CompletedBooking from './bookings/completedbooking';
import BlogCategories from './blog/blog-categories';
import BlogComments from './blog/blog-comments';
import CronJob from './setting/cronjob';
import Currencies from './setting/currencies';
import Customers from './users/customers';
import AdminEarnings from './reports/admin-earnings';
import AllBlog from './blog/all-blog';
import ApprovedTransferlist from './finance-accounts/approved-transferlist';
import AvailablePlugins from './plugin/available-plugins';
import AppointmentSettings from './setting/appointment-settings';
import AuthenticationSettings from './setting/authentication-settings';
import Announcements from './support/announcements';
import CurrencySettings from './setting/currency-settings';
import CustomerWallet from './reports/customer-wallet';
import PayoutRequests from './payouts/payout-request';
import PayoutSettigs from './payouts/payout-settigs';
import PaymentSettings from './setting/payment-settings';
import PaymentGateway from './setting/payment-gateway';
import BanIpAddress from './setting/ban-ip-address';
import CalendarSetting from './setting/calendar-setting';
import BankTransferList from './finance-accounts/banktransferlist';
import Booking from './bookings/booking';
import CancelledBooking from './bookings/cancelled-booking';
import Membership from './membership/membership';
import MembershipAddon from './membership/membership-addon';
import PageList from './pages/page-list';
import Databasebackup from './setting/database-backup';
import EditBlog from './blog/edit-blog';
import Editpage from './pages/edit-page';
import Dashboard from './dashboard/dashboard';
import InactiveBlog from './blog/inactive-blog';
import InprogressBooking from './bookings/inprogress-booking';
import PendingBooking from './bookings/pending-booking';
import InactiveServices from './services/inactive-services';
import PendingServices from './services/pending-services';
import HeaderSettings from './setting/header-settings';
import Language from './setting/language';
import LoginActivity from './setting/login-activity';
import Localization from './setting/localization';
import SystemBackup from './setting/system-backup';
import Gdbr from './setting/gdbr';
import FooterSettings from './setting/footer-settings';
import SuccessTransferlist from './finance-accounts/success-transferlist';
import ViewService from './view-service/view-service';
import EmailSettings from './setting/email-settings';
import PendingBlog from './blog/pending-blog';
import Wallet from './finance-accounts/wallet/wallet';
import TaxRates from './setting/tax-rates';
import TypographySetting from './setting/typography-setting';
import SystemInformation from './setting/system-information';
import RefundRequest from './finance-accounts/refund-request';
import RejectTransferlist from './finance-accounts/rejected-transferlist';
import SocialAuthentication from './setting/social-authentication';
import SocialProfile from './setting/social-profile';
import StorageSettings from './setting/storage-settings';
import CategoriesList from './categories/categories-list';
import Categories from '../frontend/pages/categories/categories';
import SubCategoriesList from './categories/subcategories-list';
import States from './location/states';
import VerficationRequest from './verfication-request/verfication-request';
import Roles from './roles-permission/roles';
import ActiveServices from './services/active-services';
import AccountSettings from './setting/account-settings';
import Permissions from './roles-permission/permission';
import Review from './services/review';
import ReviewType from './services/review-type';
import SalesTransactions from './finance-accounts/sales-transactions';
import Security from './setting/security';
import RegisterReport from './reports/register-report';
import WalletHistory from './finance-accounts/wallet/wallet-history';
import MembershipTransaction from './reports/membership-transaction';
import SeoSettings from './setting/seo-settings';
import ServiceSettings from './setting/service-settings';
import SiteInformation from './setting/site-information';
import SmsSettings from './setting/sms-settings';
import ServiceSales from './sales-report/service-sales';
import AllService from './services/all-service';
import Providers from './users/providers';
import ProviderSales from './reports/provider-sales';
import ProviderSettings from './setting/provider-settings';
import ProviderWallet from './reports/provider-wallet';
import AdminSignin from './authentication/signin';
import AdminSignup from './authentication/signup';
import ForgetPassword from './authentication/forget-password';
import PagesList from './pages/pages-list';
import Users from './users/users';

import ProviderEarnings from './reports/provider-earnings';
import AddHome from './pages/add-home';
import AddMembership from './membership/add-membership';
import PreferenceSettings from './setting/preference-settings';
import AddPage from './pages/add-page';
import AddBlog from './blog/add-blog';
import DeletedServices from './services/deleted-services';
import PendingTransferList from './finance-accounts/pending-transferlist';
import RefundReport from './reports/refund-report';

import Notification from './setting/notification';
import Appearance from './setting/appearance';
import CashOnDelivery from './finance-accounts/cash-on-delivery';
import Testimonials from './content/testimonials';
import Faq from './content/faq';
import Coupons from './marketing/coupons';
import FeatureServices from './marketing/feature-services';
import EmailNewsletter from './marketing/email-newsletter';
import Offer from './marketing/offer';
import CacheSystem from './management/cachesystem';
import CreateMenu from './management/create-menu';
import EmailTemplate from './management/email-template';
import WebsiteSettings from './management/website-settings';
import AbuseReport from './support/abuse-report';
import ContactMessageview from './support/contact-message-view';
import ContactMessages from './support/contact-messages';

import MenuManagement from './management/menu-management';
import SmsTemplate from './management/sms-template';
import EditManagement from './management/editManagement';
import DeviceManagementSettting from './management/device-management';
import PluginManager from './management/plugin-manager';
import DeleteAccountrequests from './user-management/deleteAccountrequests';
import AddService from './services/add-service';
import EditService from './services/edit-service';

const AdminRoutes = () => {
  const all_admin_routes = [
    {
      path: '/support/abuse-reports',
      name: 'abuse-reports',
      element: <AbuseReport />,
      route: Route,
    },
    {
      path: '/support/contact-messages',
      name: 'contact-messages',
      element: <ContactMessages />,
      route: Route,
    },
    {
      path: '/location/countries',
      name: 'countries',
      element: <Countries />,
      route: Route,
    },
    {
      path: '/location/cities',
      name: 'cities',
      element: <Cities />,
      route: Route,
    },
    {
      path: '/management/menu-management',
      name: 'menu-management',
      element: <MenuManagement />,
      route: Route,
    },
    {
      path: '/categories',
      name: 'categories',
      element: <Categories />,
      route: Route,
    },
    {
      path: '/finance-accounts/cash-on-delivery',
      name: 'cashOnDelivery',
      element: <CashOnDelivery />,
      route: Route,
    },
    {
      path: '/chat',
      name: 'chat',
      element: <Chat />,
      route: Route,
    },
    {
      path: '/booking/completed-booking',
      name: 'completedbooking',
      element: <CompletedBooking />,
      route: Route,
    },
    {
      path: '/pending-booking',
      name: 'pending-booking',
      element: <PendingBooking />,
      route: Route,
    },
    {
      path: '/booking',
      name: 'Booking',
      element: <Booking />,
      route: Route,
    },
    {
      path: '/bookings/cancelled-booking',
      name: 'CancelledBooking',
      element: <CancelledBooking />,
      route: Route,
    },
    {
      path: '/finance-accounts/bank-transferlist',
      name: 'banktransferlist',
      element: <BankTransferList />,
      route: Route,
    },
    {
      path: '/management/cachesystem',
      name: 'CacheSystem',
      element: <CacheSystem />,
      route: Route,
    },
    {
      path: '/setting/calendar-settings',
      name: 'calendar-settings',
      element: <CalendarSetting />,
      route: Route,
    },
    {
      path: '/blog/blog-categories',
      name: 'blog-categories',
      element: <BlogCategories />,
      route: Route,
    },
    {
      path: '/blog/blog-comments',
      name: 'blog-comments',
      element: <BlogComments />,
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
      path: '/users/customers',
      name: 'customers',
      element: <Customers />,
      route: Route,
    },
    {
      path: '/users',
      name: 'users',
      element: <Users />,
      route: Route,
    },
    {
      path: '/membership',
      name: 'membership',
      element: <Membership />,
      route: Route,
    },
    {
      path: '/memberships/membership-addon',
      name: 'membership-addon',
      element: <MembershipAddon />,
      route: Route,
    },
    {
      path: '/pages/page-list',
      name: 'Page-List',
      element: <PageList />,
      route: Route,
    },
    {
      path: '/page-list',
      name: 'page-list',
      element: <PageList />,
      route: Route,
    },
    {
      path: '/pages/add-page',
      name: 'add-page',
      element: <AddPage />,

      route: Route,
    },

    {
      path: '/blog/all-blog',
      name: 'all-blog',
      element: <AllBlog />,
      route: Route,
    },
    {
      path: '/blog/pending-blog',
      name: 'pending-blog',
      element: <PendingBlog />,
      route: Route,
    },
    {
      path: '/finance-accounts/approved-transferlist',
      name: 'approved-transferlist',
      element: <ApprovedTransferlist />,
      route: Route,
    },
    {
      path: '/plugin/available-plugin',
      name: 'available-plugin',
      element: <AvailablePlugins />,
      route: Route,
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
      path: '/plugin/available-plugins',
      name: 'available-plugin',
      element: <AvailablePlugins />,
      route: Route,
    },
    {
      path: '/payouts/payout-request',
      name: 'payout-request',
      element: <PayoutRequests />,
      route: Route,
    },
    {
      path: '/payouts/payout-settings',
      name: 'payout-settings',
      element: <PayoutSettigs />,
      route: Route,
    },
    {
      path: '/delete-account-requests',
      name: 'delete-account-requests',
      element: <DeleteAccountrequests />,
      route: Route,
    },
    {
      path: '/setting/header-settings',
      name: 'header-settings',
      element: <HeaderSettings />,
      route: Route,
    },
    {
      path: '/setting/language',
      name: 'language',
      element: <Language />,
      route: Route,
    },
    {
      path: '/setting/login-activity',
      name: 'login-activity',
      element: <LoginActivity />,
      route: Route,
    },
    {
      path: '/setting/localization',
      name: 'localization',
      element: <Localization />,
      route: Route,
    },
    {
      path: '/blog/inactive-blog',
      name: 'inactive-blog',
      element: <InactiveBlog />,
      route: Route,
    },
    {
      path: '/services/inactive-services',
      name: 'inactive-services',
      element: <InactiveServices />,
      route: Route,
    },
    {
      path: '/booking/inprogress-booking',
      name: 'inprogress-booking',
      element: <InprogressBooking />,
      route: Route,
    },
    {
      path: '/services/pending-services',
      name: 'pending-services',
      element: <PendingServices />,
      route: Route,
    },
    {
      path: '/management/sms-template',
      name: 'sms-template',
      element: <SmsTemplate />,
      route: Route,
    },
    {
      path: '/location/state',
      name: 'state',
      element: <States />,
      route: Route,
    },
    {
      path: '/categories/categories-list',
      name: 'categories',
      element: <CategoriesList />,
      route: Route,
    },
    {
      path: '/reports/provider-earnings',
      name: 'provider-earnings',
      element: <ProviderEarnings />,
      route: Route,
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
      path: '/support/contact-messages-view',
      name: 'contact-messages-view',
      element: <ContactMessageview />,
      route: Route,
    },
    {
      path: '/reports/admin-earnings',
      name: 'admin-earnings',
      element: <AdminEarnings />,
      route: Route,
    },
    {
      path: '/pages-list',
      name: 'Pages-list',
      element: <PagesList />,
      route: Route,
    },
    {
      path: '/services/all-services',
      name: 'all-services',
      element: <AllService />,
      route: Route,
    },
    {
      path: '/services/active-services',
      name: 'active-services',
      element: <ActiveServices />,
      route: Route,
    },
    {
      path: '/services/add-service',
      name: 'add-services',
      element: <AddService />,
      route: Route,
    },
    {
      path: '/wallet-history',
      name: 'wallet-history',
      element: <WalletHistory />,
      route: Route,
    },
    {
      path: '/services/deleted-services',
      name: 'deleted-services',
      element: <DeletedServices />,
      route: Route,
    },
    {
      path: '/edit-blog',
      name: '/edit-blog',
      element: <EditBlog />,
      route: Route,
    },
    {
      path: '/edit-management',
      name: 'edit-management',
      element: <EditManagement />,
      route: Route,
    },

    {
      path: '/edit-page',
      name: '/edit-page',
      element: <Editpage />,
      route: Route,
    },
    {
      path: '/device-management',
      name: 'device-management',
      element: <DeviceManagementSettting />,
      route: Route,
    },
    {
      path: '/roles',
      name: 'Roles',
      element: <Roles />,
      route: Route,
    },
    {
      path: '/permissions',
      name: 'Permissions',
      element: <Permissions />,
      route: Route,
    },
    {
      path: '/edit-service',
      name: 'edit-service',
      element: <EditService />,
      route: Route,
    },
    {
      path: '/setting/account-settings',
      name: 'email-settings',
      element: <AccountSettings />,
      route: Route,
    },
    {
      path: '/finance-accounts/rejected-tranferlist',
      name: 'rejected-tranferlist',
      element: <RejectTransferlist />,
      route: Route,
    },
    {
      path: '/sub-categories',
      name: 'SubcategoriesList',
      element: <SubCategoriesList />,
      route: Route,
    },
    {
      path: '/content/testimonials',
      name: 'testimonials',
      element: <Testimonials />,
      route: Route,
    },
    {
      path: '/finance-accounts/wallet',
      name: 'wallet',
      element: <Wallet />,
      route: Route,
    },
    {
      path: '/verification-request',
      name: 'verification-request',
      element: <VerficationRequest />,
      route: Route,
    },
    {
      path: '/content/faq',
      name: 'faq',
      element: <Faq />,
      route: Route,
    },
    {
      path: '/marketing/featured-services',
      name: 'featured-services',
      element: <FeatureServices />,
      route: Route,
    },
    {
      path: '/management/email-templates',
      name: 'email-templates',
      element: <EmailTemplate />,
      route: Route,
    },
    {
      path: '/view-service',
      name: 'view-service',
      element: <ViewService />,
      route: Route,
    },
    {
      path: '/finance-accounts/successful-transferlist',
      name: 'successful-transferlist',
      element: <SuccessTransferlist />,
      route: Route,
    },
    {
      path: '/signin',
      name: 'signin',
      element: <AdminSignin />,
      route: Route,
    },
    {
      path: '/management/website-settings',
      name: 'website-settings',
      element: <WebsiteSettings />,
      route: Route,
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
      path: '/marketing/email-newsletter',
      name: 'email-newsletter',
      element: <EmailNewsletter />,
      route: Route,
    },
    {
      path: '/review',
      name: 'review',
      element: <Review />,
      route: Route,
    },
    {
      path: '/review-type',
      name: 'review-type',
      element: <ReviewType />,
      route: Route,
    },
    {
      path: '/finance-accounts/sales-transactions',
      name: 'sales-transactions',
      element: <SalesTransactions />,
      route: Route,
    },
    {
      path: '/reports/register-report',
      name: 'register-report',
      element: <RegisterReport />,
      route: Route,
    },
    {
      path: '/reports/membership-transaction',
      name: 'membership-transaction',
      element: <MembershipTransaction />,
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
      path: '/pages-list',
      name: 'pages-list',
      element: <PagesList />,
      route: Route,
    },

    {
      path: '/finance-accounts/pending-transferlist',
      name: 'pending-transferlist',
      element: <PendingTransferList />,
      route: Route,
    },
    {
      path: '/marketing/offer',
      name: 'offer',
      element: <Offer />,
      route: Route,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      element: <Dashboard />,
      route: Route,
    },

    {
      path: '/finance-accounts/refund-request',
      name: 'refund-request',
      element: <RefundRequest />,
    },
  ];

  const settingssidebarmodule = [
    {
      path: '/setting/connected-apps',
      name: 'connected-apps',
      element: <ConnectApps />,
      route: Route,
    },
    {
      path: '/setting/ban-ip-address',
      name: 'ban-ip-address',
      element: <BanIpAddress />,
    },
    {
      path: '/setting/currencies',
      name: 'currencies',
      element: <Currencies />,
      route: Route,
    },
    {
      path: '/setting/currency-settings',
      name: 'currency-settings',
      element: <CurrencySettings />,
      route: Route,
    },
    {
      path: '/setting/typography-settings',
      name: 'typography-settings',
      element: <TypographySetting />,
      route: Route,
    },
    {
      path: '/setting/database-backup',
      name: 'database-backup',
      element: <Databasebackup />,
      route: Route,
    },

    {
      path: '/setting/payment-settings',
      name: 'payment-setting',
      element: <PaymentSettings />,
      route: Route,
    },
    {
      path: '/setting/payment-gateways',
      name: 'payment-gateways',
      element: <PaymentGateway />,
      route: Route,
    },
    {
      path: '/setting/tax-rates',
      name: 'tax-rates',
      element: <TaxRates />,
      route: Route,
    },
    {
      path: '/setting/system-information',
      name: 'system-information',
      element: <SystemInformation />,
      route: Route,
    },
    {
      path: '/setting/system-backup',
      name: 'system-backup',
      element: <SystemBackup />,
      route: Route,
    },
    {
      path: '/setting/gdbr',
      name: 'gdbr',
      element: <Gdbr />,
      route: Route,
    },
    {
      path: '/setting/footer-settings',
      name: 'footer-settings',
      element: <FooterSettings />,
      route: Route,
    },
    {
      path: '/setting/security',
      name: 'security',
      element: <Security />,
    },
    {
      path: '/users/providers',
      name: 'footer-settings',
      element: <Providers />,
      route: Route,
    },
    {
      path: '/reports/provider-sales',
      name: 'footer-settings',
      element: <ProviderSales />,
      route: Route,
    },
    {
      path: '/setting/provider-settings',
      name: 'footer-settings',
      element: <ProviderSettings />,
      route: Route,
    },
    {
      path: '/reports/provider-wallet',
      name: 'footer-settings',
      element: <ProviderWallet />,
      route: Route,
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      element: <ForgetPassword />,
      route: Route,
    },
    {
      path: '/blog/add-blog',
      name: 'add-blog',
      element: <AddBlog />,
      route: Route,
    },
    {
      path: '/pages/add-home',
      name: 'add-home',
      element: <AddHome />,
      route: Route,
    },
    {
      path: '/membership/add-membership',
      name: 'add-home',
      element: <AddMembership />,
      route: Route,
    },
    {
      path: '/setting/preference-settings',
      name: 'add-home',
      element: <PreferenceSettings />,
      route: Route,
    },
    {
      path: '/reports/refund-report',
      name: 'refund-report',
      element: <RefundReport />,
      route: Route,
    },
    {
      path: '/user/customers',
      name: 'customers',
      element: <Customers />,
      route: Route,
    },
    {
      path: '/user/customers',
      name: 'customers',
      element: <Customers />,
      route: Route,
    },
    {
      path: '/setting/notification',
      name: 'notification',
      element: <Notification />,
      route: Route,
    },
    {
      path: '/setting/appearance',
      name: 'appearance',
      element: <Appearance />,
      route: Route,
    },
    {
      path: '/management/plugin-manager',
      name: 'plugin-manager',
      element: <PluginManager />,
      route: Route,
    },
  ];

  return (
    <>
      <Routes>
        <Route>
          {all_admin_routes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
          {settingssidebarmodule.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}

          {/* <Route path="/device-management" element={DeviceManagement} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
