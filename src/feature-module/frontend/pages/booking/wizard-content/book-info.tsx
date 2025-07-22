import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
interface props {
    handleNext: MouseEventHandler;
    handlePrev?: MouseEventHandler
}
const BookInfo = ({handlePrev,handleNext}:props) => {
  return (
    <fieldset className="booking-content" style={{ display: 'flex' }}>
                    <div className="book-card">
                      <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="fs-16 me-2 mb-2">
                            Add Personal Information
                          </h6>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="dropdown me-2 mb-2">
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
                        <div className="col-md-5">
                          <div className="cart-info-wrap">
                            <div className="mb-2 d-flex align-items-center justify-content-between">
                              <div>
                                <h6 className="fw-medium">Lighting Services</h6>
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
                                <h6 className="fw-medium">Switches Changes</h6>
                                <p className="fs-10">30 Min</p>
                              </div>
                              <h6 className="fs-12 fw-medium">$100</h6>
                            </div>
                            <div className="border-top pt-3 mt-3">
                              <h6 className="mb-2">Location</h6>
                              <div className="d-flex align-items-center mb-3">
                                <span className="avatar avatar-lg">
                                  <ImageWithBasePath
                                    src="assets/img/icons/service-02.svg"
                                    alt="img"
                                  />
                                </span>
                                <div className="ms-2">
                                  <h6 className="fw-medium mb-1">
                                    Lighting Services -California Shop
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="border-top pt-3">
                              <h6 className="mb-2">Staff</h6>
                              <div className="d-flex align-items-center mb-3">
                                <span className="avatar avatar-lg">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-04.jpg"
                                    alt="img"
                                  />
                                </span>
                                <div className="ms-2">
                                  <h6 className="fw-medium mb-1">
                                    Travis Machado
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="border-top pt-3 mt-3">
                              <h6 className="mb-2">Date &amp; Time</h6>
                              <p className="mb-2 text-gray-9 fw-medium d-flex align-items-center">
                                <i className="feather-calendar me-2" />
                                Fri, 12 Aug 2024
                              </p>
                              <p className="text-gray-9 fw-medium d-flex align-items-center">
                                <i className="feather-clock me-2" />
                                08:30 AM - 09:00 AM
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="row g-2">
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">
                                  First Name
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">
                                  Last Name
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">
                                  Email
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">
                                  Phone Number
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">
                                  Street Address
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">City</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">
                                  State
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label className="form-label fs-12">
                                  Postal Code
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div>
                                <label className="form-label fs-12">
                                  Add booking notes
                                </label>
                                <textarea
                                  className="form-control"
                                  rows={4}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="border-top pt-3 mt-3">
                            <h6 className="fs-13 fw-medium mb-1">
                              Cancellation policy
                            </h6>
                            <p>
                              Cancel for free anytime in advance, otherwise you
                              will be charged 100% of the service price for not
                              showing up.
                            </p>
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

export default BookInfo