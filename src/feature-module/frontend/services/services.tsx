import React from 'react';
import ServicesRoutes from './services.routes';
import NewFooter from '../home/footer/newFooter';
import HomeHeader from '../home/header/home-header';

const Services = () => {
  return (
    <>
      {/* <HomeHeader type={1} /> */}
      <HomeHeader type={2}/>
      <ServicesRoutes />
      <NewFooter />
    </>
  );
};

export default Services;
