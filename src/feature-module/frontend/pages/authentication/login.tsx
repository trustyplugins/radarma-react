import React from 'react';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import PagesAuthHeader from './common/header';
import { Link, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import AuthFooter from './common/footer';

const Login2 = () => {
  const routes = all_routes;
  const navigate = useNavigate()

  return (
    <>
     <PagesAuthHeader />
     <div className="main-wrapper">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5 mx-auto">
        <form onSubmit={()=>navigate(routes.index)}>
          <div className="d-flex flex-column justify-content-center">
            <div className="card p-sm-4 my-5">
              <div className="card-body">
                <div className="text-center mb-3">
                  <h3 className="mb-2">Welcome</h3>
                  <p>Enter your credentials to access your account</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <label className="form-label">Password</label>
                    <Link
                      to={routes.forgotPassword}
                      className="text-primary fw-medium text-decoration-underline mb-1 fs-14"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="remember_me"
                      />
                      <label className="form-check-label" htmlFor="remember_me">
                        Remember Me
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="otp_signin"
                      />
                      <label className="form-check-label" htmlFor="otp_signin">
                        Sign in with OTP
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-linear-primary w-100"
                  >
                    Sign In
                  </button>
                </div>
                <div className="login-or mb-3">
                  <span className="span-or">Or sign in with </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <Link
                    to="#"
                    className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-3"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/google-icon.svg"
                      className="me-2"
                      alt="Img"
                    />
                    Google
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-light flex-fill d-flex align-items-center justify-content-center"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/fb-icon.svg"
                      className="me-2"
                      alt="Img"
                    />
                    Facebook
                  </Link>
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    Don’t have a account?{" "}
                    <Link to={routes.userSignup} className="text-primary">
                      {" "}
                      Join us Today
                    </Link>
                  </p>
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
        </form>
      </div>
    </div>
  </div>
</div>
<AuthFooter/>
    </>
  );
};

export default Login2;
