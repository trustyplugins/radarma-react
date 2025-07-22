import React, { useEffect } from "react";

import { Outlet } from "react-router";

const AuthFeature = () => {
  useEffect(() => {
    window.location.pathname.includes("/admin")
    ? import("../style/admin/css/admin.css")
    : import("../style/scss/main.scss");
  }, [location.pathname])
  return (
    <>
      {/* Main Wrapper */}
      <div className="authentication-page">
      <div className="d-flex justify-content-between vh-100 overflow-auto flex-column" >
        <Outlet />
      </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default AuthFeature;
