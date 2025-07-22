import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import ProviderDetails from './providers/provider-details';
import ServiceDetails1 from './service-details/service-details1';
import ServiceDetails2 from './service-details/service-details2';
import ServiceList from './service-list/service-list';
import ServiceGrid from './service-grid/service-grid';
import Search from './search/search';
import SearchList from './search/search-list';
import ProvidersList from './providers/providers-list';
import CreateService from './create-service/createServices';
import ServiceRequest from './service-request/serviceRequest';

const ServicesRoutes = () => {
  const all_services_routes = [
    {
      path: '/create-service',
      name: 'create-service',
      element: <CreateService />,
      route: Route,
    },
    {
      path: '/providers/provider-details',
      name: 'provider-details',
      element: <ProviderDetails />,
      route: Route,
    },
    {
      path: '/providers/provider-list',
      name: 'provider',
      element: <ProvidersList />,
      route: Route,
    },
    {
      path: '/service-details/service-details1',
      name: 'service-details-1',
      element: <ServiceDetails1 />,
      route: Route,
    },
    {
      path: '/service-details/service-details2',
      name: 'service-details-2',
      element: <ServiceDetails2 />,
      route: Route,
    },
    {
      path: '/service-list',
      name: 'ServiceList',
      element: <ServiceList />,
      route: Route,
    },
    {
      path: '/service-grid',
      name: 'ServiceGrid',
      element: <ServiceGrid />,
      route: Route,
    },
    {
      path: '/search',
      name: 'search',
      element: <Search />,
      route: Route,
    },
    {
      path: '/service-request',
      name: 'service-request',
      element: <ServiceRequest />,
      route: Route,
    },
    {
      path: '/search-list',
      name: 'search-list',
      element: <SearchList />,
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
          {all_services_routes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default ServicesRoutes;
