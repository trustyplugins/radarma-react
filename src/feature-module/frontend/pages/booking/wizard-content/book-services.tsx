import React, { MouseEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
import * as Icon from 'react-feather';

interface props {
    handleNext: MouseEventHandler;
    handlePrev?: MouseEventHandler
}
const BookServices = ({handlePrev,handleNext}:props) => {
    const [active, setActive] = useState<boolean>(false);
    const [active2, setActive2] = useState<boolean>(false);
    const [active3, setActive3] = useState<boolean>(true);
    const [active4, setActive4] = useState<boolean>(false);
    const [active5, setActive5] = useState<boolean>(false);
  return (
    <fieldset className="booking-content" style={{ display: 'flex' }}>
                    <div className="book-card">
                      <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="fs-16 me-2 mb-2">
                            Select Additional Service
                          </h6>
                          <span className="badge badge-info-transparent mb-2">
                            Total : 05
                          </span>
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
                        <div className="col-md-6">
                          <div className="select-item d-flex align-items-center justify-content-between flex-wrap border p-2 pb-0 mb-0">
                            <div className="d-flex align-items-center pb-2">
                              <span className="avatar avatar-lg">
                                <ImageWithBasePath
                                  src="assets/img/services/addservice-01.jpg"
                                  alt="img"
                                  className="br-5"
                                />
                              </span>
                              <div className="ms-2">
                                <h6 className="mb-1 fs-12 fw-medium">
                                  Ceiling Fans Repairs
                                </h6>
                                <p className="fs-10">
                                  <span className="fs-12 text-gray-9 fw-medium">
                                    $400
                                  </span>{" "}
                                  / 30 min
                                </p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center pb-2">
                              <p className="mb-0 d-flex align-items-center fs-12 me-2">
                                <i className="ti ti-star-filled text-warning me-1" />
                                4.9
                              </p>
                              <Link
                                to="#"
                                className={`btn btn-light btn-sm btn-addon d-inline-flex align-items-center ${active?'active':''}`} onClick={()=>setActive(!active)}
                              >
                                {active? <Icon.CheckCircle className="react-feather-custom2 me-1"/>:<Icon.PlusCircle className="react-feather-custom2 me-1"/>}
                                
                                {active? 'Added' : 'Add'}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="select-item d-flex align-items-center justify-content-between flex-wrap border p-2 pb-0 mb-0">
                            <div className="d-flex align-items-center pb-2">
                              <span className="avatar avatar-lg">
                                <ImageWithBasePath
                                  src="assets/img/services/addservice-02.jpg"
                                  alt="img"
                                  className="br-5"
                                />
                              </span>
                              <div className="ms-2">
                                <h6 className="mb-1 fs-12 fw-medium">
                                  Switches Changes
                                </h6>
                                <p className="fs-10">
                                  <span className="fs-12 text-gray-9 fw-medium">
                                    $250
                                  </span>{" "}
                                  / 30 min
                                </p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center pb-2">
                              <p className="mb-0 d-flex align-items-center fs-12 me-2">
                                <i className="ti ti-star-filled text-warning me-1" />
                                4.9
                              </p>
                              <Link
                                to="#"
                                className={`btn btn-light btn-sm btn-addon d-inline-flex align-items-center ${active2?'active':''}`} onClick={()=>setActive2(!active2)}
                              >
                                {active2? <Icon.CheckCircle className="react-feather-custom2 me-1"/>:<Icon.PlusCircle className="react-feather-custom2 me-1"/>}
                                
                                {active2? 'Added' : 'Add'}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="select-item d-flex align-items-center justify-content-between flex-wrap border p-2 pb-0 mb-0">
                            <div className="d-flex align-items-center pb-2">
                              <span className="avatar avatar-lg">
                                <ImageWithBasePath
                                  src="assets/img/services/addservice-03.jpg"
                                  alt="img"
                                  className="br-5"
                                />
                              </span>
                              <div className="ms-2">
                                <h6 className="mb-1 fs-12 fw-medium">
                                  Outlets &amp; Wiring{" "}
                                </h6>
                                <p className="fs-10">
                                  <span className="fs-12 text-gray-9 fw-medium">
                                    $300
                                  </span>{" "}
                                  / 30 min
                                </p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center pb-2">
                              <p className="mb-0 d-flex align-items-center fs-12 me-2">
                                <i className="ti ti-star-filled text-warning me-1" />
                                4.9
                              </p>
                              <Link
                                to="#"
                                className={`btn btn-light btn-sm btn-addon d-inline-flex align-items-center ${active3?'active':''}`} onClick={()=>setActive3(!active3)}
                              >
                                {active3? <Icon.CheckCircle className="react-feather-custom2 me-1"/>:<Icon.PlusCircle className="react-feather-custom2 me-1"/>}
                                
                                {active3? 'Added' : 'Add'}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="select-item d-flex align-items-center justify-content-between flex-wrap border p-2 pb-0 mb-0">
                            <div className="d-flex align-items-center pb-2">
                              <span className="avatar avatar-lg">
                                <ImageWithBasePath
                                  src="assets/img/services/addservice-04.jpg"
                                  alt="img"
                                  className="br-5"
                                />
                              </span>
                              <div className="ms-2">
                                <h6 className="mb-1 fs-12 fw-medium">
                                  Fixing Faulty Wiring
                                </h6>
                                <p className="fs-10">
                                  <span className="fs-12 text-gray-9 fw-medium">
                                    $300
                                  </span>{" "}
                                  / 30 min
                                </p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center pb-2">
                              <p className="mb-0 d-flex align-items-center fs-12 me-2">
                                <i className="ti ti-star-filled text-warning me-1" />
                                4.5
                              </p>
                              <Link
                                to="#"
                                className={`btn btn-light btn-sm btn-addon d-inline-flex align-items-center ${active4?'active':''}`} onClick={()=>setActive4(!active4)}
                              >
                                {active4? <Icon.CheckCircle className="react-feather-custom2 me-1"/>:<Icon.PlusCircle className="react-feather-custom2 me-1"/>}
                                
                                {active4? 'Added' : 'Add'}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="select-item d-flex align-items-center justify-content-between flex-wrap border p-2 pb-0 mb-0">
                            <div className="d-flex align-items-center pb-2">
                              <span className="avatar avatar-lg">
                                <ImageWithBasePath
                                  src="assets/img/services/addservice-05.jpg"
                                  alt="img"
                                  className="br-5"
                                />
                              </span>
                              <div className="ms-2">
                                <h6 className="mb-1 fs-12 fw-medium">
                                  Lighting Fixtures
                                </h6>
                                <p className="fs-10">
                                  <span className="fs-12 text-gray-9 fw-medium">
                                    $1500
                                  </span>{" "}
                                  / 20 min
                                </p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center pb-2">
                              <p className="mb-0 d-flex align-items-center fs-12 me-2">
                                <i className="ti ti-star-filled text-warning me-1" />
                                4.9
                              </p>
                              <Link
                                to="#"
                                className={`btn btn-light btn-sm btn-addon d-inline-flex align-items-center ${active5?'active':''}`} onClick={()=>setActive5(!active5)}
                              >
                                {active5? <Icon.CheckCircle className="react-feather-custom2 me-1"/>:<Icon.PlusCircle className="react-feather-custom2 me-1"/>}
                                
                                {active5? 'Added' : 'Add'}
                              </Link>
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

export default BookServices