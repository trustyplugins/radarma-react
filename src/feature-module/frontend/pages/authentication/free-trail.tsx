import React from 'react';
import PagesAuthHeader from './common/header';
import { all_routes } from '../../../../core/data/routes/all_routes';
import AuthFooter from './common/footer';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useNavigate } from 'react-router-dom';

const FreeTrail = () => {
const navigate = useNavigate()
  const routes = all_routes;
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
                        <h3 className="mb-2">Start your free trial</h3>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Company Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Domain</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Work Email</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-0">
                        <button
                          type="submit"
                          className="btn btn-lg btn-linear-primary w-100"
                        >
                          Register
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
              </form>
            </div>
          </div>
        </div>
      </div>

      <AuthFooter/>
    </>
  );
};

export default FreeTrail;
