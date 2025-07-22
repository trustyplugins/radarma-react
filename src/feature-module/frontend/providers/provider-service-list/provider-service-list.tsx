import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
const routes = all_routes;
const ProviderServiceList = () => {
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
                className="tags d-flex justify-content-center align-items-center  rounded me-2"
              >
                <i className="ti ti-layout-grid" />
              </Link>
              <Link
                to="#"
                className="tags active d-flex justify-content-center align-items-center border rounded me-2"
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
                  <div className="col-xxl-12 col-lg-12">
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.serviceDetails1} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-15.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Computer
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>Computer Services</Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              New Jersey, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Active
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-13.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Car Wash
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>
                                Car Repair Services
                              </Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              New Jersey, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Active
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-16.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Interior
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>
                                Interior Designing
                              </Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              Detroit, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Active
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-17.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Car Wash
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>Steam Car Wash</Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              San Jose, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Active
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-18.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Electrical
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>
                                Electric Panel Repairing Service
                              </Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              Texas, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Active
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
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
                  <div className="col-xxl-12 col-lg-12">
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.serviceDetails1} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-15.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Computer
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>Computer Services</Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              New Jersey, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#in-active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Inactive
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-13.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Car Wash
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>
                                Car Repair Services
                              </Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              New Jersey, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#in-active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Inactive
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-16.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Interior
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>
                                Interior Designing
                              </Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              Detroit, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#in-active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Inactive
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-17.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Car Wash
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>Steam Car Wash</Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              San Jose, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#in-active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Inactive
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
                          >
                            Apply Offer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow-none booking-list">
                      <div className="card-body d-md-flex align-items-center">
                        <div className="booking-widget d-sm-flex align-items-center row-gap-3 flex-fill  mb-3 mb-md-0">
                          <div className="booking-img me-sm-3 mb-3 mb-sm-0">
                            <Link to={routes.bookingDetails} className="avatar">
                              <ImageWithBasePath
                                src="assets/img/providers/provider-18.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="fav-item">
                              <Link to="#" className="fav-icon">
                                <i className="ti ti-heart" />
                              </Link>
                            </div>
                          </div>
                          <div className="service-infos">
                            <span className="badge bg-primary-transparent me-2 mb-2">
                              Electrical
                            </span>
                            <span className="fs-10">
                              <i className="ti ti-star-filled text-warning" />
                              4.9
                            </span>
                            <h6 className="mb-2 fs-16">
                              <Link to={routes.serviceDetails1}>
                                Electric Panel Repairing Service
                              </Link>
                            </h6>
                            <span>
                              <i className="ti ti-map-pin" />
                              Texas, USA
                            </span>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-service"
                          >
                            <i className="ti ti-edit me-1" />
                            Edit
                          </Link>
                          <Link
                            to="#"
                            className="me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#in-active"
                          >
                            <i className="ti ti-info-circle me-1" />
                            Inactive
                          </Link>
                          <Link
                            to={routes.createService}
                            className="btn btn-light"
                            
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

export default ProviderServiceList