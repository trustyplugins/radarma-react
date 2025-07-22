import React from 'react'
import { Link } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const Notification = () => {

  return (
    <>
    <BreadCrumb title='Notifications' item1='Home' item2='Notifications' />
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content content-two">
        <div className="container ">
          <div className="notification mb-0">
            <div className="d-flex justify-content-between mb-3">
              <Link to="#" className="btn btn-white  border">
                <i className="ti ti-calendar me-2" />
                Today
              </Link>
              <div>
                <Link to="#" className="btn btn-light  me-2">
                  <i className="ti ti-check me-2" />
                  Mark all as read
                </Link>
                <Link to="#" className="btn btn-dark ">
                  <i className="ti ti-trash me-2" />
                  Delete All
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-12 col-lg-12">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-md-flex align-items-center">
                      <div className="d-sm-flex flex-fill">
                        <div className="d-flex justify-content-between">
                          <span className="avatar avatar-lg me-3">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-36.jpg"
                              className="rounded-circle img-fluid"
                              alt="User Image"
                            />
                          </span>
                          <div className="d-flex flex-column">
                            <div className="d-flex align-items-center">
                              <h6 className="fs-16 fw-medium me-2">
                                Ray Arnold requested access to UNIX directory tree
                                hierarchy
                              </h6>
                              <span>
                                <i className="ti ti-point-filled text-primary" />
                              </span>
                            </div>
                            <span className="fs-12 mb-2">1m ago</span>
                            <div>
                              <Link
                                to="#"
                                className="btn btn-light me-2"
                              >
                                Decline
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-dark"
                              >
                                Accept
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className="btn btn-light me-2"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-lg-12">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-md-flex align-items-center">
                      <div className="d-sm-flex flex-fill">
                        <div className="d-flex justify-content-between">
                          <span className="avatar avatar-lg me-3">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-47.jpg"
                              className="rounded-circle img-fluid"
                              alt="User Image"
                            />
                          </span>
                          <div className="d-flex flex-column">
                            <div className="d-flex align-items-center">
                              <h6 className="fs-16 fw-medium">
                                John Hammond created Isla Nublar SOC2 compliance
                                report
                              </h6>
                            </div>
                            <span className="fs-12 mb-2">1m ago</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className="btn btn-light me-2"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-lg-12">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="d-md-flex align-items-center">
                      <div className="d-sm-flex flex-fill">
                        <div className="d-flex justify-content-between">
                          <span className="avatar avatar-lg me-3">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-25.jpg"
                              className="rounded-circle img-fluid"
                              alt="User Image"
                            />
                          </span>
                          <div className="d-flex flex-column">
                            <div className="d-flex align-items-center">
                              <h6 className="fs-16 fw-medium">
                                Lex Murphy left 6 comments on Isla Nublar SOC2
                                compliance report
                              </h6>
                            </div>
                            <span className="fs-12 mb-2">1m ago</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="toottip bg-light d-flex justify-content-center align-items-center rounded-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Mark as read"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                    </div>
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
  
  )
}

export default  Notification
