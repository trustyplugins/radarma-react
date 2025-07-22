import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import PagesAuthHeader from '../authentication/common/header';

const Error500 = () => {
  const routes = all_routes;
  return (
    <>
          <>
      <div className="error-404">
        <div className="contacts-overlay-img d-none d-md-block">
          <ImageWithBasePath src="assets/img/bg/bg-07.png" alt="img" className="img-fluid" />
        </div>
        {/* Header */}
        <PagesAuthHeader/>
        {/* /Header */}
        <>
          {/* Main Wrapper */}
          <div className="main-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 mx-auto">
                  <div className="img-success d-flex justify-content-center mx-auto">
                    <ImageWithBasePath
                      src="assets/img/bg/error-500.png"
                      alt="Img"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <h1 className="text-center display-6 mb-2">
                      500 Oops! Internal Server Error
                    </h1>
                    <div className="text-center mb-4">
                      <span className="text-gray fs-14 ">
                        The server has been deserted for a while, please be patient or
                        try again later
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link
                        to={routes.index}
                        className="btn btn-dark d-flex align-items-center "
                      >
                        <i className="ti ti-circle-arrow-left me-1" />
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Main Wrapper */}
        </>

      </div>
    </>
    </>
  );
};

export default Error500;
