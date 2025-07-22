import React from 'react';
import PagesAuthHeader from './common/header';
import { Link, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import AuthFooter from './common/footer';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const PasswordRecovery = () => {
  const routes = all_routes;
  const navigate = useNavigate()
  return (
    <>
     <PagesAuthHeader />
     <div className="main-wrapper">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5 mx-auto">
        <form onSubmit={()=>navigate(routes.phoneOtp)}>
          <div className="d-flex flex-column justify-content-center">
            <div className="card p-sm-4 my-5">
              <div className="card-body">
                <div className="text-center mb-3">
                  <h3 className="mb-2">Forgot Password?</h3>
                  <p>
                    Enter your email, we will send you a otp to reset your
                    password.
                  </p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-linear-primary w-100"
                  >
                    Submit
                  </button>
                </div>
                <div className=" d-flex justify-content-center">
                  <p>
                    Remember Password?{" "}
                    <Link to={routes.login} className="text-primary">
                      Sign In
                    </Link>
                  </p>
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

export default PasswordRecovery;
