import React from 'react'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom'
interface props {
  setCurrentStep?: any
}
const BookConfirmation = ({setCurrentStep}:props) => {
  const setActive = () => {
    setCurrentStep(1)
  }
  return (
    <fieldset className="booking-content" style={{ display: 'flex' }}>
                    <div className="book-card">
                      <h6 className="fs-16 me-2 mb-3">Payment Method</h6>
                      <div className="card">
                        <div className="card-body">
                          <h6 className="fs-14 fw-medium mb-3">
                            Your Booking is Successful on Sun 16 July 2024at
                            5:00pm
                          </h6>
                          <div className="card shadow-none mb-0">
                            <div className="card-body p-3">
                              <div className="d-flex align-items-center justify-content-between flex-wrap p-2 bg-light-300 rounded mb-3">
                                <div className="d-flex align-items-center pb-2">
                                  <span className="avatar avatar-xl flex-shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/services/addservice-05.jpg"
                                      alt="img"
                                    />
                                  </span>
                                  <div className="ms-2">
                                    <h6 className="mb-1">Lighting Services</h6>
                                    <p>
                                      Booking ref.{" "}
                                      <span className="text-primary">
                                        #65742695
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <span className="badge badge-success">
                                  <i className="ti ti-circle-check-filled me-1" />
                                  Confirmed
                                </span>
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
                              <div className="border-top pt-2">
                                <div className="mb-2 d-flex align-items-center justify-content-between">
                                  <h6 className="fw-medium">Sub Total</h6>
                                  <p>$757</p>
                                </div>
                                <div className="mb-2 d-flex align-items-center justify-content-between">
                                  <h6 className="fw-medium">Tax</h6>
                                  <p>$60</p>
                                </div>
                                <div className="mb-2 d-flex align-items-center justify-content-between">
                                  <h6 className="fw-medium">Discount</h6>
                                  <p>$757</p>
                                </div>
                              </div>
                              <div className="border-top pt-2 d-flex align-items-center justify-content-between">
                                <h6 className="fs-14">Total</h6>
                                <h6 className="fs-14">$757</h6>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <Link
                              to="#"
                              className="btn btn-sm btn-info d-inline-flex align-items-center me-3 mt-3"
                            >
                              <i className="ti ti-calendar me-1" />
                              Add to Calendar
                            </Link>
                            <Link
                              to="#"
                              onClick={setActive}
                              className="btn btn-sm btn-primary d-inline-flex align-items-center mt-3"
                            >
                              <i className="ti ti-circle-plus me-1" />
                              Start New Booking
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
  )
}

export default BookConfirmation