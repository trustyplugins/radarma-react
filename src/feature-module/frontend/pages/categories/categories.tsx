import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const Categories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb title="Categories" item1="Categories" />
      {/* /Breadcrumb */}
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-01.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Construction</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-26.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-02.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Removal</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-28.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-05.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Electrical</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-29.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-03.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Furniture Assembly</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-30.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-08.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Mobile Barbers</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-31.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-07.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Deliveries</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-01.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-14.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Cleaning</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-33.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-06.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Man and Van</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-34.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-11.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Nail Technicians</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-35.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-13.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Shop &amp; Deliver</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-32.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-15.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Car Transport</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-37.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-12.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Hairdressers</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-38.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-04.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Computer Service</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-39.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-10.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Plumbing</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-40.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-16.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Carpentry</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-41.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-09.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Interior</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-42.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="category card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-body">
                      <div className="feature-icon d-flex justify-content-center align-items-center mb-2">
                        <span className="rounded-pill d-flex justify-content-center align-items-center p-3">
                          <ImageWithBasePath
                            src="assets/img/icons/category-17.svg"
                            className="img-fluid"
                            alt="logo"
                          />
                        </span>
                      </div>
                      <h5 className="text-center">Car Wash</h5>
                      <div className="overlay">
                        <ImageWithBasePath
                          src="assets/img/services/service-43.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </>
    </>
  );
};

export default Categories;
