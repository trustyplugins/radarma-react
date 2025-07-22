import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
const routes = all_routes;

const ProviderServices = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>My Services</h5>
          <div className="d-flex align-items-center">
            <span className="fs-14 me-2">Sort</span>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle bg-light-300 "
                data-bs-toggle="dropdown"
              >
                Newly Added
              </Link>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item active">
                  Recently Added
                </Link>
              </div>
            </div>
            <Link
              to={routes.providerService}
              className="tags active d-flex justify-content-center align-items-center  rounded me-2"
            >
              <i className="ti ti-layout-grid" />
            </Link>
            <Link
              to={routes.providerServiceList}
              className="tags d-flex justify-content-center align-items-center border rounded me-2"
            >
              <i className="ti ti-list" />
            </Link>
            <Link
              to={routes.createService}
              className="btn btn-dark d-flex align-items-center"
            >
              <i className="ti ti-circle-plus me-2" />
              Add Services
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12">
          <div className="tab-list mb-4" role="tablist">
            <ul className="nav d-flex align-items-center">
              <li>
                <Link
                  to="#"
                  className="act-btn active me-3 p-2 rounded fs-14"
                  data-bs-toggle="tab"
                  data-bs-target="#active-service"
                  role="tab"
                  aria-controls="active-service"
                  aria-selected="true"
                  tabIndex={-1}
                >
                  Active Services
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="act-btn p-2 rounded fs-14"
                  data-bs-toggle="tab"
                  data-bs-target="#inactive-service"
                  role="tab"
                  aria-controls="inactive-service"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Inactive Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content pt-0">
            <div
              className="tab-pane active"
              id="active-service"
              role="tabpanel"
              aria-labelledby="active-service"
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-13.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Car Wash</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>Car Repair Service</Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            New Jersey, USA
                          </p>
                          <h5>
                            $20.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$25.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-14.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Construction</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Toughened Glass Fitting Services
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Chicago, USA
                          </p>
                          <h5>
                            $15.00
                            <span className="fs-13 text-gray">
                              <del>$20.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2 " />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-15.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Computer</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Computer &amp; Server AMC Service
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Los Angeles, USA
                          </p>
                          <h5>
                            $15.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$20.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light "
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-16.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Interior</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>Interior Designing</Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Detroit, USA
                          </p>
                          <h5>
                            $25.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$30.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-17.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Car Wash</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>Steam Car Wash</Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            San Jose, USA
                          </p>
                          <h5>
                            $15.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$25.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-18.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Electrical</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Electric Panel Repairing Service
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Texas, USA
                          </p>
                          <h5>
                            $10.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$15.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-19.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Cleaning</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            House Cleaning Services
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Denver, USA
                          </p>
                          <h5>
                            $15.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$20.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link to="#">
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-20.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Painting</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Commercial Wall Painting
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Austin, USA
                          </p>
                          <h5>
                            $25.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$30.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-22.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Construction</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Building Construction Services
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Houston, USA
                          </p>
                          <h5>
                            $20.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$25.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link to="#">
                              <i className="ti ti-edit me-2" />
                              Edit
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Inactive
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="inactive-service"
              role="tabpanel"
              aria-labelledby="inactive-service"
            >
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-13.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Car Wash</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>Car Repair Service</Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            New Jersey, USA
                          </p>
                          <h5>
                            $20.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$25.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-14.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Construction</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Toughened Glass Fitting Services
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Chicago, USA
                          </p>
                          <h5>
                            $15.00
                            <span className="fs-13 text-gray">
                              <del>$20.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-15.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Computer</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Computer &amp; Server AMC Service
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Los Angeles, USA
                          </p>
                          <h5>
                            $15.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$20.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light "
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-16.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Interior</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>Interior Designing</Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Detroit, USA
                          </p>
                          <h5>
                            $25.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$30.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-17.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Car Wash</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>Steam Car Wash</Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            San Jose, USA
                          </p>
                          <h5>
                            $15.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$25.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-18.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Electrical</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Electric Panel Repairing Service
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Texas, USA
                          </p>
                          <h5>
                            $10.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$15.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-19.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Cleaning</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            House Cleaning Services
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Denver, USA
                          </p>
                          <h5>
                            $15.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$20.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-20.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Painting</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Commercial Wall Painting
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Austin, USA
                          </p>
                          <h5>
                            $25.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$30.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card p-0">
                    <div className="card-body p-0">
                      <div className="img-sec w-100">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/providers/provider-22.jpg"
                            className="img-fluid rounded-top w-100"
                            alt="img"
                          />
                        </Link>
                        <div className="image-tag d-flex justify-content-end align-items-center">
                          <span className="trend-tag">Construction</span>
                          <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                            <i className="fa fa-star filled me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <h5 className="mb-2 text-truncate">
                          <Link to={routes.serviceDetails1}>
                            Building Construction Services
                          </Link>
                        </h5>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-map-pin me-2" />
                            Houston, USA
                          </p>
                          <h5>
                            $20.00{" "}
                            <span className="fs-13 text-gray">
                              <del>$25.00/hr</del>
                            </span>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#del-service"
                            >
                              <i className="ti ti-trash me-2" />
                              Delete
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#in-active"
                            >
                              <i className="ti ti-info-circle me-2" />
                              Active
                            </Link>
                          </div>
                          <Link
                            to="#"
                            className="btn bg-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="value d-flex align-items-center">
              <span>Show</span>
              <select>
                <option>7</option>
              </select>
              <span>entries</span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span className="me-2 text-gray-9">1 - 07 of 10</span>
              <nav aria-label="Page navigation">
                <ul className="paginations d-flex justify-content-center align-items-center">
                  <li className="page-item me-2">
                    <Link
                      className="page-link-1 active d-flex justify-content-center align-items-center "
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item me-2">
                    <Link
                      className="page-link-1 d-flex justify-content-center align-items-center "
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item ">
                    <Link
                      className="page-link-1 d-flex justify-content-center align-items-center "
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Inactive */}
  <div className="modal fade custom-modal" id="in-active">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Inactive Service</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form>
              <p>Are you sure want to inactive this service?</p>
              <div className="modal-submit text-end">
                <Link
                  to="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Inactive */}
  {/* active */}
  <div className="modal fade custom-modal" id="active">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Active Services</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form >
              <p>Are you sure want to active this service?</p>
              <div className="modal-submit text-end">
                <Link
                  to="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /active */}
  {/* Delete Service */}
  <div className="modal fade custom-modal" id="del-service">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete Service</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form>
              <p>Are you sure want to delete this service?</p>
              <div className="modal-submit text-end">
                <Link
                  to="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Service */}
</>

  )
}

export default ProviderServices