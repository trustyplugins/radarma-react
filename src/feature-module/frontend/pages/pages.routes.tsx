import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './about-us/about-us';
import Categories from './categories/categories';

import Faq from './faq/faq';
import Howitworks from './how-it-works/how-it-works';
import TermsCondition from './terms-condition/terms-condition';
import ContactUs from './contact-us/contact-us';
import Installer from './installer/installer';
import InstallerNew from './installer-new/installer-new';
import Maintenance from './maintenance/maintenance';
import Pricing from './pricing/pricing';
import PrivacyPolicy from './privacy-policy/privacy-policy';
import Booking1 from './booking/booking-1';
import SessionExpired from './session-expired/session-expired';
import Error404 from './Error page/error404';
import Error500 from './Error page/error500';

import BookingDetails from './booking/booking-details';
import PaymentSetting from '../providers/settings/payment-setting';
import CommingSoon from './comming-soon/comming-soon';
import BookingWizard from './booking/booking-wizard';
import Invoice from '../customers/invoice/invoice';
import Categories2 from './categories/categories2';

const PagesRoutes = () => {
  const all_pages_routes = [
    {
      path: '/about-us',
      name: 'about-us',
      element: <AboutUs />,
      route: Route,
    },
    {
      path: '/categories',
      name: 'categories',
      element: <Categories />,
      route: Route,
    },
    {
      path: '/categories-2',
      name: 'categories-2',
      element: <Categories2 />,
      route: Route,
    },
    {
      path: '/coming-soon',
      name: 'coming-soon',
      element: <CommingSoon />,
      route: Route,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      element: <ContactUs />,
      route: Route,
    },
    {
      path: '/faq',
      name: 'faq',
      element: <Faq />,
      route: Route,
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      element: <Howitworks />,
      route: Route,
    },
    
    {
      path: '/invoice',
      name: 'invoice',
      element: <Invoice />,
      route: Route,
    },
    {
      path: '/terms-condition',
      name: 'terms-condition',
      element: <TermsCondition />,
      route: Route,
    },
    {
      path: '/installer',
      name: 'installer',
      element: <Installer />,
      route: Route,
    },
    {
      path: '/installer-new',
      name: 'installer',
      element: <InstallerNew />,
      route: Route,
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      element: <Maintenance />,
      route: Route,
    },
    {
      path: '/pricing-plan',
      name: 'pricing',
      element: <Pricing />,
      route: Route,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      element: <PrivacyPolicy />,
      route: Route,
    },
    {
      path: '/booking',
      name: 'booking',
      element: <BookingWizard />,
      route: Route,
    },
    {
      path: '/booking/booking-1',
      name: 'booking-1 ',
      element: <Booking1 />,
      route: Route,
    },
    {
      path: '/booking/booking-details',
      name: 'booking-details',
      element: <BookingDetails />,
      route: Route,
    },
    {
      path: '/session-expired',
      name: 'SessionExpired',
      element: <SessionExpired />,
      route: Route,
    },

    {
      path: '/payment-setting',
      name: 'payment-setting',
      element: <PaymentSetting />,
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
      <Routes>
        <Route>
          {all_pages_routes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default PagesRoutes;
