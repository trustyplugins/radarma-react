import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
interface props {
    handleNext: MouseEventHandler;
    handlePrev?: MouseEventHandler
}
const BookCart = ({handlePrev,handleNext}:props) => {
  return (
    <fieldset className="booking-content" style={{ display: 'flex' }}>
                    <div className="book-card">
                      <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="fs-16 me-2 mb-2">Cart</h6>
                        </div>
                        <div className="d-flex align-items-center flex-wrap mb-2">
                          <Link
                            to="#"
                            className="btn btn-sm btn-secondary d-inline-flex align-items-center prev_btn fs-10 mb-2 me-2"
                          >
                            <i className="ti ti-circle-plus me-1" />
                            Add New Booking
                          </Link>
                          <div className="dropdown mb-2">
                            <Link
                              to="#"
                              className="bg-light-500 d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-shopping-cart me-1" />
                              Cart
                              <span className="bg-primary num-count ms-1">
                                1
                              </span>
                            </Link>
                            <div className="dropdown-menu dropdown-sm p-3">
                              <h6 className="fs-13 mb-3">Added In Cart (02)</h6>
                              <div className="d-flex align-items-center p-2 bg-light rounded mb-3">
                                <span className="avatar avatar-lg">
                                  <ImageWithBasePath
                                    src="assets/img/services/addservice-05.jpg"
                                    alt="img"
                                  />
                                </span>
                                <div className="ms-2">
                                  <h6 className="mb-1">Lighting Services</h6>
                                  <p className="fs-12">
                                    <i className="ti ti-star-filled text-warning me-1" />
                                    <span className="text-gray-9">4.9</span>{" "}
                                    (255 reviews)
                                  </p>
                                </div>
                              </div>
                              <div className="mb-2 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fw-medium">
                                    Lighting Services
                                  </h6>
                                  <p className="fs-10">30 Min</p>
                                </div>
                                <h6 className="fs-12 fw-medium">$457</h6>
                              </div>
                              <div className="mb-2 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fw-medium">
                                    Outlets &amp; Wiring
                                  </h6>
                                  <p className="fs-10">30 Min</p>
                                </div>
                                <h6 className="fs-12 fw-medium">$200</h6>
                              </div>
                              <div className="mb-0 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fw-medium">
                                    Switches Changes
                                  </h6>
                                  <p className="fs-10">30 Min</p>
                                </div>
                                <h6 className="fs-12 fw-medium">$100</h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                <div>
                                  <h6 className="fw-medium">Total</h6>
                                </div>
                                <h6 className="fw-medium">$757</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6 d-flex">
                          <div className="card flex-fill">
                            <div className="card-body p-3 d-flex justify-content-between flex-column">
                              <div>
                                <div className="d-flex align-items-center p-3 bg-light-400 rounded mb-2">
                                  <span className="avatar avatar-lg">
                                    <ImageWithBasePath
                                      src="assets/img/services/addservice-05.jpg"
                                      alt="img"
                                    />
                                  </span>
                                  <div className="ms-2">
                                    <h6 className="fs-14 fw-medium mb-1">
                                      Lighting Services
                                    </h6>
                                    <p>30 Minutes</p>
                                  </div>
                                </div>
                                <div className="mb-2">
                                  <h6 className="fw-medium mb-1">
                                    Additional Service
                                  </h6>
                                  <p>Outlets &amp; Wiring, Switches Changes</p>
                                </div>
                                <div className="mb-2">
                                  <h6 className="fw-medium mb-1">Location</h6>
                                  <p>
                                    Spark Electrical Services - California Shop
                                  </p>
                                </div>
                                <div className="mb-2">
                                  <h6 className="fw-medium mb-1">Employee</h6>
                                  <p>Carl Newman</p>
                                </div>
                                <div className="mb-2">
                                  <h6 className="fw-medium mb-1">
                                    Date &amp; Time
                                  </h6>
                                  <p>Sun 16 July 2023 at 5:00pm</p>
                                </div>
                                <div className="mb-0">
                                  <h6 className="fw-medium mb-1">Amount</h6>
                                  <span className="badge badge-dark">$757</span>
                                </div>
                              </div>
                              <div className="text-center border-top pt-3 mt-3">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center link-danger fs-12"
                                >
                                  <i className="ti ti-trash me-1" />
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex">
                          <div className="card flex-fill">
                            <div className="card-body p-3 d-flex justify-content-between flex-column">
                              <div>
                                <div className="d-flex align-items-center p-3 bg-light-400 rounded mb-2">
                                  <span className="avatar avatar-lg">
                                    <ImageWithBasePath
                                      src="assets/img/services/addservice-05.jpg"
                                      alt="img"
                                    />
                                  </span>
                                  <div className="ms-2">
                                    <h6 className="fs-14 fw-medium mb-1">
                                      Lighting Services
                                    </h6>
                                    <p>30 Minutes</p>
                                  </div>
                                </div>
                                <div className="mb-2">
                                  <h6 className="fw-medium mb-1">Location</h6>
                                  <p>
                                    Spark Electrical Services - California Shop
                                  </p>
                                </div>
                                <div className="mb-2">
                                  <h6 className="fw-medium mb-1">Employee</h6>
                                  <p>Carl Newman</p>
                                </div>
                                <div className="mb-2">
                                  <h6 className="fw-medium mb-1">
                                    Date &amp; Time
                                  </h6>
                                  <p>Sun 16 July 2023 at 5:00pm</p>
                                </div>
                                <div className="mb-0">
                                  <h6 className="fw-medium mb-1">Amount</h6>
                                  <span className="badge badge-dark">$757</span>
                                </div>
                              </div>
                              <div className="text-center border-top pt-3 mt-3">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center link-danger fs-12"
                                >
                                  <i className="ti ti-trash me-1" />
                                  Remove
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-footer d-flex align-items-center justify-content-end">
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          onClick={handlePrev}
                          className="btn btn-sm btn-light d-inline-flex align-items-center prev_btn me-2"
                        >
                          <i className="ti ti-arrow-left me-1" />
                          Prev
                        </Link>
                        <Link
                          to="#"
                          onClick={handleNext}
                          className="btn btn-sm btn-dark d-inline-flex align-items-center next_btn"
                        >
                          Next
                          <i className="ti ti-arrow-right ms-1" />
                        </Link>
                      </div>
                    </div>
                  </fieldset>
  )
}

export default BookCart