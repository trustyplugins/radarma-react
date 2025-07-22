import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import PhoneInput from 'react-phone-input-2';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import ProviderAuthHeader from './common/header1';
import { all_routes } from '../../../../core/data/routes/all_routes';

const ProviderSignup = () => {
  const routes = all_routes;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const handleOnChange = (value: string, country: string) => {
    console.log(value, country);
    setPhone(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <ProviderAuthHeader />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 mx-auto">
              <div className="login-wrap">
                <div className="login-header">
                  <h3>Provider Signup</h3>
                </div>
                {/* Signup Form */}
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="col-form-label">Phone Number</label>
                      <div className="form-group">
                        {/* <input type="text" className="form-control form-control-lg group_formcontrol" id="phone" name="phone" placeholder="(256) 789-6253" /> */}
                        <PhoneInput
                          country={'us'}
                          value={phone}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label d-block">
                      Password
                      <span className="brief-bio float-end">
                        Must be 8 Characters at Least
                      </span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control pass-input"
                        placeholder="*************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <Icon.Eye className="react-feather-custom" />
                        ) : (
                          <Icon.EyeOff className="react-feather-custom" />
                        )}
                      </span>
                    </div>
                  </div>
                  <Link to={routes.providerDashboard}
                    type="submit"
                    className="btn btn-primary w-100 login-btn"
                  >
                    Signup
                  </Link>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">Or, log in with your email</span>
                  </div>
                  <div className="social-login">
                    <Link to="#" className="btn btn-google w-100">
                      <ImageWithBasePath
                        src="assets/img/icons/google.svg"
                        className="me-2"
                        alt="img"
                      />
                      Log in with Google
                    </Link>
                    <Link to="#" className="btn btn-google w-100">
                      <ImageWithBasePath
                        src="assets/img/icons/fb.svg"
                        className="me-2"
                        alt="img"
                      />
                      Log in with Facebook
                    </Link>
                  </div>
                  <p className="no-acc">
                    Already have an account ?{' '}
                    <Link to={routes.login}> Sign In</Link>
                  </p>
                </form>
                {/* /Signup Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderSignup;
