import React, { useState } from 'react';
import PagesAuthHeader from './common/header';
import { all_routes } from '../../../../core/data/routes/all_routes';
import {  useNavigate } from 'react-router-dom';
import AuthFooter from './common/footer';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const ResetPassword = () => {
  const routes = all_routes;
  const navigate = useNavigate()

  const [password, setPassword] = useState('');
  const [passwordResponce, setPasswordResponce] = useState({
    passwordResponceText: "Use 8 or more characters with a mix of letters, number's symbols.",
    passwordResponceKey: '',
  });

  const onChangePassword = (password: string) => {
    setPassword(password);
    if (password.match(/^$|\s+/)) {
      setPasswordResponce({
        passwordResponceText: 'Whitespaces are not allowed',
        passwordResponceKey: '',
      });
    } else if (password.length === 0) {
      setPasswordResponce({
        passwordResponceText: '',
        passwordResponceKey: '',
      });
    } else if (password.length < 8) {
      setPasswordResponce({
        passwordResponceText: 'Weak. Must contain at least 8 characters',
        passwordResponceKey: '0',
      });
    } else if (
      password.search(/[a-z]/) < 0 ||
      password.search(/[A-Z]/) < 0 ||
      password.search(/[0-9]/) < 0
    ) {
      setPasswordResponce({
        passwordResponceText:
          'Average. Must contain at least 1 upper case and number',
        passwordResponceKey: '1',
      });
    } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      setPasswordResponce({
        passwordResponceText: 'Almost. Must contain a special symbol',
        passwordResponceKey: '2',
      });
    } else {
      setPasswordResponce({
        passwordResponceText: 'Awesome! You have a secure password.',
        passwordResponceKey: '3',
      });
    }
  };
  return (
    <>
      <PagesAuthHeader />
      <div className="main-wrapper">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5 mx-auto">
        <form onSubmit={()=>navigate(routes.success)}>
          <div className="d-flex flex-column justify-content-center">
            <div className="card p-sm-4 my-5">
              <div className="card-body">
                <div className="text-center mb-3">
                  <h3 className="mb-2">Reset Password</h3>
                  <p className="fs-14">
                    Your new password must be different from previous used
                    passwords.
                  </p>
                </div>
                <div>
                  <div className="input-block mb-3">
                    <div className="mb-3">
                      <label className="form-label">New Password</label>
                      <div className="pass-group" id="passwordInput">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => onChangePassword(e.target.value)}
                          className="form-control pass-input"
                        />
                      </div>
                    </div>
                    <div
                      className={`password-strength d-flex ${
                        passwordResponce.passwordResponceKey === '0'
                          ? 'poor-active'
                          : passwordResponce.passwordResponceKey === '1'
                          ? 'avg-active'
                          : passwordResponce.passwordResponceKey === '2'
                          ? 'strong-active'
                          : passwordResponce.passwordResponceKey === '3'
                          ? 'heavy-active'
                          : ''
                      }`}
                      id="passwordStrength"
                    >
                      <span id="poor" className="active" />
                      <span id="weak" className="active" />
                      <span id="strong" className="active" />
                      <span id="heavy" className="active" />
                    </div>
                    <div id="passwordInfo" className="mb-2" />
                    <p className="fs-12">
                      
                      {passwordResponce.passwordResponceText}
                    </p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <label className="form-label">Confirm Password</label>
                    </div>
                    <input type="password" className="form-control" />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-lg btn-linear-primary w-100"
                    >
                      Save Change
                    </button>
                  </div>
                </div>
                <div>
                  <ImageWithBasePath
                    src="assets/img/bg/authentication-bg.png"
                    className="bg-left-top"
                    alt="Img"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/authentication-bg.png"
                    className="bg-right-bottom"
                    alt="Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

      <AuthFooter/>
    </>
  );
};

export default ResetPassword;
