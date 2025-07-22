import React from 'react';
import ProviderHeader from './common/header';
import ProviderSidebar from './common/sidebar';
import ProvidersRoutes from './providers.routes';

const Providers = () => {
  return (
    <>
      {location?.pathname == '/providers/authentication/provider-signup' ||
      location?.pathname == '/providers/authentication/provider-signup-payment' ||
      location?.pathname == '/providers/authentication/provider-signup-subscription' ? 
      (
        <></>
      ) : (
        <ProviderHeader />
      )}
      {location?.pathname == '/providers/authentication/provider-signup' ||
       location?.pathname == '/providers/authentication/provider-signup-payment' ||
       location?.pathname == '/providers/authentication/provider-signup-subscription' ? 
      (
        <></>
      ) : (
        <ProviderSidebar />
      )}

      <ProvidersRoutes />
    </>
  );
};

export default Providers;
