import React, { MouseEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
interface props {
    handleNext: MouseEventHandler;
    handlePrev?: MouseEventHandler
}
const BookLocation = ({handleNext}:props) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index); // Set the clicked item as the selected one
      };
  return (
    <fieldset className="booking-content" id="first-field">
                    <div className="book-card">
                      <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="fs-16 me-2 mb-2">Select Location</h6>
                          <span className="badge badge-info-transparent mb-2">
                            Total : 05
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="dropdown loc-dropdown me-2 mb-2">
                            <Link
                              to="#"
                              className="dropdown-toggle bg-light-500"
                              data-bs-toggle="dropdown"
                            >
                              All Locations
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  1052 Edsel Road LA
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  1197 Tennessee Avenue
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  1214 Rich land Avenue
                                </Link>
                              </li>
                            </ul>
                          </div>
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
                        <div className="col-lg-4 col-md-6">
                          <div className={`card location-card mb-0 ${selectedIndex === 1 ? 'selected' : ''}`} onClick={() => handleClick(1)}>
                            <div className="card-body p-3 text-center">
                              <div className="trend-icon">
                                <span className="bg-info">
                                  <ImageWithBasePath
                                    src="assets/img/icons/loc-icon.svg"
                                    alt="icon"
                                  />
                                </span>
                              </div>
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/service-01.svg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">
                                Lighting Services - California Shop
                              </h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                <i className="ti ti-map-pin-check me-1" />
                                1052 Edsel Road LA
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  12 Staffs
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  5.0
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className={`card location-card mb-0 ${selectedIndex === 2 ? 'selected' : ''}`} onClick={() => handleClick(2)}>
                            <div className="card-body p-3 text-center">
                              <div className="trend-icon">
                                <span className="bg-info">
                                  <ImageWithBasePath
                                    src="assets/img/icons/loc-icon.svg"
                                    alt="icon"
                                  />
                                </span>
                              </div>
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/service-02.svg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">
                                Lighting Services - California Shop
                              </h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                <i className="ti ti-map-pin-check me-1" />
                                1052 Edsel Road LA
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  15 Staffs
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.9
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className={`card location-card mb-0 ${selectedIndex === 3 ? 'selected' : ''}`} onClick={() => handleClick(3)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/service-03.svg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">
                                Lighting Services -Texas Shop
                              </h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                <i className="ti ti-map-pin-check me-1" />
                                1214 Rich land Avenue
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  16 Staffs
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.0
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className={`card location-card mb-0 ${selectedIndex === 4 ? 'selected' : ''}`} onClick={() => handleClick(4)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/service-04.svg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">
                                Lighting Services - New York Shop
                              </h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                <i className="ti ti-map-pin-check me-1" />
                                4127 Small Street
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  16 Staffs
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className={`card location-card mb-0 ${selectedIndex === 5 ? 'selected' : ''}`} onClick={() => handleClick(5)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/service-05.svg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">
                                Lighting Services - New Jersy Shop
                              </h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                <i className="ti ti-map-pin-check me-1" />
                                3527 Saint James Drive
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  21 Staffs
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.5
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-footer d-flex align-items-center justify-content-end">
                      <Link
                        to="#"
                        onClick={handleNext}
                        className="btn btn-sm btn-dark d-inline-flex align-items-center next_btn"
                      >
                        Next
                        <i className="ti ti-arrow-right ms-1" />
                      </Link>
                    </div>
                  </fieldset>
  )
}

export default BookLocation