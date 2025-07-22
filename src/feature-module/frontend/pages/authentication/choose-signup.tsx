import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import PagesAuthHeader from './common/header';
import { all_routes } from '../../../../core/data/routes/all_routes';

const ChooseSignup = () => {
  const routes = all_routes;
  return (
    <>
    
    <PagesAuthHeader />
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Choose Signup */}
            <div className="col-md-6 col-lg-6 mx-auto">
              <div className="login-wrap">
                <div className="login-header">
                  <h3>Sign Up</h3>
                </div>
                <div className="row">
                  {/* Provider Signup */}
                  <div className="col-md-6 d-flex">
                    <div className="choose-signup flex-fill">
                      <h6>Providers</h6>
                      <div className="choose-img">
                        <ImageWithBasePath src="assets/img/provider.png" alt="image" />
                      </div>
                      <Link
                        to={routes.providerSignup}
                        className="btn btn-secondary w-100"
                      >
                        Sign Up
                        <Icon.ArrowRightCircle  className="standard-feather ms-1" />
                      </Link>
                    </div>
                  </div>
                  {/* /Provider Signup */}
                  {/* User Signup */}
                  <div className="col-md-6 d-flex">
                    <div className="choose-signup flex-fill mb-0">
                      <h6>Users</h6>
                      <div className="choose-img">
                        <ImageWithBasePath src="assets/img/user.png" alt="image" />
                      </div>
                      <Link
                        to={routes.userSignup}
                        className="btn btn-secondary w-100"
                      >
                        Sign Up
                        <Icon.ArrowRightCircle className="standard-feather ms-1" />
                      </Link>
                    </div>
                  </div>
                  {/* /User Signup */}
                </div>
              </div>
            </div>
            {/* /Choose Signup */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseSignup;
