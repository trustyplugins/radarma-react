import React from 'react';
import { Link } from 'react-router-dom';
import PagesAuthHeader from './common/header';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const LoginEmail = () => {
  const routes = all_routes;

  return (
    <>
     
      <PagesAuthHeader />

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 mx-auto">
              <div className="login-wrap">
                {/* <div class="login-back">
								<Link to={routes.homeOne}><ImageWithBasePath src="assets/img/icons/undo-icon.svg" class="me-2" alt="icon">Back To Home</Link>
							</div> */}
                <div className="login-header">
                  <h3>Sign in</h3>
                  <p>We Will send a confirmation code to your email.</p>
                  <h6>
                    Sign in with{' '}
                    <Link to="routes.loginphone1">Phone Number</Link>
                  </h6>
                </div>
                {/* Login Form */}
                <form>
                  <div className="log-form">
                    <div className="form-group">
                      <label className="col-form-label">E-mail</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="example@email.com"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="rememberme"
                            className="rememberme"
                          />
                          <span className="checkmark" />
                          Remember Me
                        </label>
                      </div>
                      <div className="col-md-6 text-end">
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="loginotp"
                            className="loginotp"
                          />
                          <span className="checkmark" />
                          Login with OTP
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary w-100 login-btn"
                    type="submit"
                  >
                    Sign in
                  </button>
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
                    Donot have an account ?{' '}
                    <Link to={routes.chooseSignUp}>Sign up</Link>
                  </p>
                </form>
                {/* /Login Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginEmail;
