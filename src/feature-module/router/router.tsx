import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../admin/admin'; // 👈 this is your master wrapper

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Admin />} />
    </Routes>
  );
};

export default AllRoutes;
