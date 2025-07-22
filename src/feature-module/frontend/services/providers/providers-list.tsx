import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import StickyBox from 'react-sticky-box';

const ProvidersList = () => {
  const routes = all_routes;
  return (
    <div>
    {/* Breadcrumb */}
    <BreadCrumb title='Providers' item1='Providers'/>
    {/* /Breadcrumb */}	
    <div className="page-wrapper">
  <div className="content">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-xl-3 col-lg-4 theiaStickySidebar">
        <StickyBox>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                  <h5>
                    <i className="ti ti-filter-check me-2" />
                    Filters
                  </h5>
                  <Link to="#">Reset Filter</Link>
                </div>
                <div className="mb-3 pb-3 border-bottom">
                  <label className="form-label">Search By Keyword</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  />
                </div>
                <div className="accordion">
                  <div className="accordion-item mb-3">
                    <div
                      className="accordion-header"
                      id="accordion-headingThree"
                    >
                      <div
                        className="accordion-button p-0 mb-3"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapseThree"
                        aria-expanded="true"
                        aria-controls="accordion-collapseThree"
                        role="button"
                      >
                        Categories
                      </div>
                    </div>
                    <div
                      id="accordion-collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="accordion-headingThree"
                    >
                      <div className="mb-3">
                        <div className="form-check mb-2">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked
                            />
                            All Categories
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            Construction
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            Car Wash
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            Electrical
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            Cleaning
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion border-bottom mb-3">
                  <div className="accordion-header" id="accordion-headingFour">
                    <div
                      className="accordion-button p-0 mb-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-collapseFour"
                      aria-expanded="true"
                      aria-controls="accordion-collapseFour"
                      role="button"
                    >
                      Price Range
                    </div>
                  </div>
                  <div
                    id="accordion-collapseFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="accordion-headingFour"
                  >
                    <div className="row gx-2">
                      <div className="col-6">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="$ Min"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="$ Max"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion border-bottom mb-3">
                  <div className="accordion-header" id="accordion-headingFive">
                    <div
                      className="accordion-button p-0 mb-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-collapseFive"
                      aria-expanded="true"
                      aria-controls="accordion-collapseFive"
                      role="button"
                    >
                      Location
                    </div>
                  </div>
                  <div
                    id="accordion-collapseFive"
                    className="accordion-collapse collapse show"
                    aria-labelledby="accordion-headingFive"
                  >
                    <div className="mb-3">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Select Location"
                        />
                        <span className="icon-addon">
                          <i className="ti ti-map-pin" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-item mb-3">
                    <div className="accordion-header" id="accordion-headingTwo">
                      <div
                        className="accordion-button fs-18 p-0 mb-3"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapseTwo"
                        aria-expanded="true"
                        aria-controls="accordion-collapseTwo"
                        role="button"
                      >
                        Ratings
                      </div>
                    </div>
                    <div
                      id="accordion-collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="accordion-headingTwo"
                    >
                      <div className="mb-3">
                        <div className="form-check mb-2">
                          <label className="form-check-label d-block">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked
                            />
                            <span className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span className="float-end">(55)</span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label d-block">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <span className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <span className="float-end">(48)</span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label d-block">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <span className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <span className="float-end">(13)</span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label d-block">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <span className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <span className="float-end">(05)</span>
                            </span>
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <label className="form-check-label d-block">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <span className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <i className="fa-regular fa-star filled" />
                              <span className="float-end">(00)</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-dark w-100">
                  Search
                </button>
              </form>
            </div>
          </div>
          </StickyBox>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="card ">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-01.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Michael</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Carpenter</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $50.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(320)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-02.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Antoinette</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Cleaner</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $25.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(120)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-03.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Thompson</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Mechanic</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $30.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(95)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-04.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Lawrence</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Engineer</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $70.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(228)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-05.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Ellen</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Designer</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $30.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(130)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-06.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Nathaniel</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Plumber</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $45.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(95)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-07.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Stephanie</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Carpenter</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $40.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(228)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-08.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Charles</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Serviceman</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $55.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(130)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-09.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>George</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Mechanic</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $70.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(95)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-10.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Nicholas</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Electrician</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $20.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(320)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-11.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>Gloria</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Cleaner</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $30.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(420)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-img card-img-hover mb-3">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath
                        src="assets/img/providers/provider-12.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <h5 className="d-flex align-items-center mb-1">
                          <Link to={routes.providerDetails}>John Smith</Link>
                          <span className="text-success ms-2">
                            <i className="fa fa-check-circle" />
                          </span>
                        </h5>
                        <span>Electrician</span>
                      </div>
                      <p className="fs-18 fw-medium text-dark">
                        $20.00
                        <span className="fw-normal fs-13 text-default">
                          /hr
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span className="ms-2 d-inline-block">(320)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
  )
}

export default ProvidersList