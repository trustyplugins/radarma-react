import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';

const AdminSignup = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="login-pages">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="login-logo">
              <ImageWithBasePath
                src="assets/admin/img/logo-login.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-images">
              <ImageWithBasePath
                src="assets/admin/img/login-banner.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-content">
              <div className="login-contenthead">
              <h5>Create an Account</h5>
                <h6>Continue where you left off</h6>
              </div>
              <div className="login-input">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between">
                    <label>Password</label>
                  </div>
                  <div className="pass-group">
                    <input
                      type={isToggle ? 'text' : 'password'}
                      className="form-control pass-input"
                      placeholder="********"
                    />
                    <Link to="#" onClick={() => setIsToggle(!isToggle)}>
                      <span
                        className={`fas toggle-password ${
                          isToggle ? 'fa-eye' : 'fa-eye-slash'
                        }`}
                      />
                    </Link>
                  </div>
                </div>
                <div className="filter-checkbox mb-3">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span>
                          <i />
                        </span>
                        <b className="check-content">Remember Me</b>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="login-button">
                <Link to="/admin/index" className="btn btn-login">
                  Sign Up
                </Link>
              </div>
              <div className="signinform text-center">
                <h4>
                  Do you have an account?{' '}
                  <Link to="/admin/signin" className="hover-a">
                  Sign in
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
