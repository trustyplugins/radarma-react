import React, { MouseEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
interface props {
    handleNext: MouseEventHandler;
    handlePrev?: MouseEventHandler
}
const BookStaff = ({handlePrev,handleNext}:props) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index); // Set the clicked item as the selected one
      };
  return (
    <fieldset className="booking-content" style={{ display: 'flex' }}>
                    <div className="book-card">
                      <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="fs-16 me-2 mb-2">Select Staffs</h6>
                          <span className="badge badge-info-transparent mb-2">
                            Total : 09
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="dropdown loc-dropdown me-2 mb-2">
                            <Link
                              to="#"
                              className="dropdown-toggle bg-light-500"
                              data-bs-toggle="dropdown"
                            >
                              All Ratings
                            </Link>
                            <ul className="dropdown-menu">
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  5 Ratings
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  4 Ratings
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  3 Ratings
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  2 Ratings
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  1 Ratings
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
                          <div className={`card staff-card mb-0 ${selectedIndex === 1 ? 'selected' : ''}`} onClick={() => handleClick(1)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-01.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">Jeff Fitch</h6>
                              <p className="mb-2">fithch467@example.com</p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  08 Servicess
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
                          <div className={`card staff-card mb-0 ${selectedIndex === 2 ? 'selected' : ''}`} onClick={() => handleClick(2)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-17.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">Jacob Kline</h6>
                              <p className="mb-2">jk235@example.com</p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  07 Services
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.8
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className={`card staff-card mb-0 ${selectedIndex === 3 ? 'selected' : ''}`} onClick={() => handleClick(3)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-25.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">
                                Patricia Durham
                              </h6>
                              <p className="mb-2">parcet56@example.com</p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  06 Services
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
                          <div className={`card staff-card mb-0 ${selectedIndex === 4 ? 'selected' : ''}`} onClick={() => handleClick(4)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-14.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">David Kauffman</h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                davidew54@example.com
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  05 Services
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
                          <div className={`card staff-card mb-0 ${selectedIndex === 5 ? 'selected' : ''}`} onClick={() => handleClick(5)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-26.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">Kara Coble</h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                karade345@example.com
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  02 Services
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
                          <div className={`card staff-card mb-0 ${selectedIndex === 6 ? 'selected' : ''}`} onClick={() => handleClick(6)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-26.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">Marcela Garcia</h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                marc346@example.com
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  04 Services
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.8
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className={`card staff-card mb-0 ${selectedIndex === 7 ? 'selected' : ''}`} onClick={() => handleClick(7)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-22.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">Bill Andrus</h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                bild3567@example.com
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  04 Services
                                </p>
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.7
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className={`card staff-card mb-0 ${selectedIndex === 8 ? 'selected' : ''}`} onClick={() => handleClick(8)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-04.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">Travis Machado</h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                trc367@example.com
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  06 Services
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
                          <div className={`card staff-card mb-0 ${selectedIndex === 9 ? 'selected' : ''}`} onClick={() => handleClick(9)}>
                            <div className="card-body p-3 text-center">
                              <span className="avatar avatar-lg mx-auto mb-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-24.jpg"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-2 fw-medium">
                                Darrell Dolezal
                              </h6>
                              <p className="d-flex align-items-center justify-content-center mb-2">
                                darv456@example.com
                              </p>
                              <div className="d-flex align-items-center justify-content-between border-top pt-2">
                                <p className="mb-0 d-flex align-items-center">
                                  <i className="ti ti-circle-check-filled text-danger fs-5 me-1" />
                                  02 Services
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
                    <div className="booking-footer d-flex align-items-center justify-content-between flex-wrap">
                      <div className="form-check d-inline-flex align-items-center ps-0 me-3 mt-3">
                        <input
                          className="form-check-input ms-0 mt-0"
                          name="service1"
                          type="checkbox"
                          id="service"
                          defaultChecked
                        />
                        <label
                          className="form-check-label ms-2 text-black"
                          htmlFor="service"
                        >
                          Select Anyone for this Booking
                        </label>
                      </div>
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

export default BookStaff