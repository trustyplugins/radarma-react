import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../core/data/routes/all_routes'
import CustomDropdown from '../../common/dropdown/commonSelect'
import CommonDatePicker from '../../../../core/hooks/commonDatePicker'
import { hrsOption, minsOption, numberOption } from '../../../../core/data/json/dropDownData'

const StaffDetailModal = () => {
    const routes= all_routes
    const [showModal, setShowModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const handleClose = () => {
        setShowModal(false);
      };
      const handelOpen = () => {
        setCurrentStep(1)
        setTimeout(() => {
          setShowModal(true);
        }, 500);
      };
      const handleNext = () => {
        setCurrentStep(currentStep + 1);
      };
    
      const handlePrev = () => {
        setCurrentStep(currentStep - 1);
      };
  return (
    <>
  {/* Edit Availability */}
  <div className="modal fade custom-modal" id="edit-availability">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Update Availability</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="modal-wizard">
              <ul className="d-flex align-items-center mb-3" id="progress-list">
                <li className={`d-flex align-items-center me-3 ${currentStep === 1 ? 'active' : currentStep > 1 ? 'activated' : ''}`}>
                  <span>
                    <i className="feather-calendar me-2" />
                  </span>
                  <p className="fs-14 fw-medium">Add Days</p>
                </li>
                <li className={`d-flex align-items-center me-3 ${currentStep === 2 ? 'active' : currentStep > 2 ? 'activated' : ''}`}>
                  <span>
                    <i className="ti ti-calendar-filled me-2" />
                  </span>
                  <p className="fs-14 fw-medium">Breaks</p>
                </li>
                <li className={`d-flex align-items-center ${currentStep === 3 ? 'active' : currentStep > 3 ? 'activated' : ''}`}>
                  <span>
                    <i className="ti ti-clock-off me-2" />
                  </span>
                  <p className="fs-14 fw-medium">Unavailable Days</p>
                </li>
              </ul>
            </div>
            <div className="available-slot-details">
            {currentStep === 1 && (
              <fieldset id="first-availability">
                <div className="accordion" id="availability_accordion">
                  <div>
                    <div className="card shadow-none rounded">
                      <div className="card-body">
                        <div className="accordion-item">
                          <div
                            className="accordion-header"
                            id="accordion-headingOne"
                          >
                            <div
                              className="accordion-button p-0 border-bottom pb-3"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordion-collapseOne"
                              aria-expanded="true"
                              aria-controls="accordion-collapseOne"
                            >
                              <h6 className="fs-16 fw-medium ms-4">Monday</h6>
                              <div className="form-check form-switch ms-auto">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            id="accordion-collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="accordion-headingOne"
                            data-bs-parent="#availability_accordion"
                          >
                            <div className="accordion-body border-0 p-0 mt-3">
                              <div className="row gx-3">
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Start Time{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className=" input-icon position-relative">
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="dd-mm-yyyy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      End Time{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className=" input-icon position-relative">
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="dd-mm-yyyy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Duration{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <CustomDropdown
                                        options={hrsOption}
                                        className="select d-flex"
                                        placeholder="Select"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      No of Slots{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <CustomDropdown
                                        options={numberOption}
                                        className="select d-flex"
                                        placeholder="Select"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Interval Duration{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <CustomDropdown
                                        options={minsOption}
                                        className="select d-flex"
                                        placeholder="Select"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <Link
                                  to="#"
                                  className="text-primary d-inline-flex align-items-center add-extra fs-14 mb-3"
                                >
                                  <i className="ti ti-circle-plus me-2" />
                                  Add New
                                </Link>
                                <button type="button" className="btn btn-dark">
                                  <i className="ti ti-rotate-clockwise-2 me-2" />
                                  Generate Time Slots
                                </button>
                              </div>
                              <div className="slots-available mt-3">
                                <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                                  <h6 className="fs-16 fw-medium">Slot 1</h6>
                                  <Link
                                    to="#"
                                    className="text-danger fs-12 fw-medium rounded p-1 bg-white d-block"
                                  >
                                    Remove this Slot
                                  </Link>
                                </div>
                                <div>
                                  <div className="row g-2">
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            8:30 - 9:30{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            9:30 - 10:00{" "}
                                            <span className="d-block fs-10">
                                              4 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:30 - 11:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            11:30 - 12:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            8:30 - 9:30{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            9:30 - 10:00{" "}
                                            <span className="d-block fs-10">
                                              4 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:30 - 11:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            11:30 - 12:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            8:30 - 9:30{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            9:30 - 10:00{" "}
                                            <span className="d-block fs-10">
                                              4 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:30 - 11:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            11:30 - 12:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
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
                    <div className="card shadow-none rounded">
                      <div className="card-body">
                        <div className="accordion-item">
                          <div
                            className="accordion-header"
                            id="accordion-headingTwo"
                          >
                            <div
                              className="accordion-button p-0 border-bottom pb-3"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordion-collapseTwo"
                              aria-expanded="false"
                              aria-controls="accordion-collapseTwo"
                            >
                              <h6 className="fs-16 fw-medium ms-4">Tuesday</h6>
                              <div className="form-check form-switch ms-auto">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            id="accordion-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="accordion-headingTwo"
                            data-bs-parent="#availability_accordion"
                          >
                            <div className="accordion-body border-0 p-0 mt-3">
                              <div className="row gx-3">
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Start Time{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className=" input-icon position-relative">
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="dd-mm-yyyy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      End Time{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className=" input-icon position-relative">
                                      <span className="input-icon-addon">
                                        <i className="ti ti-clock" />
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control timepicker"
                                        placeholder="dd-mm-yyyy"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Duration{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <CustomDropdown
                                        options={hrsOption}
                                        className="select d-flex"
                                        placeholder="Select"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      No of Slots{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <CustomDropdown
                                        options={numberOption}
                                        className="select d-flex"
                                        placeholder="Select"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 col-lg">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Interval Duration{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <CustomDropdown
                                        options={minsOption}
                                        className="select d-flex"
                                        placeholder="Select"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <Link
                                  to="#"
                                  className="text-primary d-inline-flex align-items-center add-extra fs-14 mb-3"
                                >
                                  <i className="ti ti-circle-plus me-2" />
                                  Add New
                                </Link>
                                <button type="button" className="btn btn-dark">
                                  <i className="ti ti-rotate-clockwise-2 me-2" />
                                  Generate Time Slots
                                </button>
                              </div>
                              <div className="slots-available mt-3">
                                <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                                  <h6 className="fs-16 fw-medium">Slot 1</h6>
                                  <Link
                                    to="#"
                                    className="text-danger fs-12 fw-medium rounded p-1 bg-white d-block"
                                  >
                                    Remove this Slot
                                  </Link>
                                </div>
                                <div>
                                  <div className="row g-2">
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            8:30 - 9:30{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            9:30 - 10:00{" "}
                                            <span className="d-block fs-10">
                                              4 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:30 - 11:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            11:30 - 12:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            8:30 - 9:30{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            9:30 - 10:00{" "}
                                            <span className="d-block fs-10">
                                              4 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:30 - 11:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            11:30 - 12:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            8:30 - 9:30{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            9:30 - 10:00{" "}
                                            <span className="d-block fs-10">
                                              4 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment2"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:00 - 10:30
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            10:30 - 11:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                      <div className="form-check-inline visits w-100 p-0 me-0">
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            className="form-check-input"
                                            name="appointment"
                                          />
                                          <span className="visit-rsn fs-12 bg-white">
                                            11:30 - 12:00{" "}
                                            <span className="d-block fs-10">
                                              2 Slots
                                            </span>
                                          </span>
                                        </label>
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
                <div className="d-flex justify-content-end align-items-center mt-3 pt-3 border-top">
                  <button className="btn btn-dark next_btn" type="button" onClick={handleNext}>
                    Save &amp; Continue
                  </button>
                </div>
              </fieldset>
            )}
            {currentStep === 2 && (
              <fieldset style={{ display: 'block' }}>
                <div className="accordion" id="availability_accordion2">
                  <div className="card shadow-none rounded">
                    <div className="card-body pb-0">
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          id="accordion2-headingOne"
                        >
                          <div
                            className="accordion-button p-0 border-bottom pb-3"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion2-collapseOne"
                            aria-expanded="true"
                            aria-controls="accordion2-collapseOne"
                          >
                            <h6 className="fs-16 fw-medium ms-4">All Days</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="accordion2-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion2-headingOne"
                          data-bs-parent="#availability_accordion2"
                        >
                          <div className="accordion-body border-0 p-0 mt-3">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Morning Break
                                  </label>
                                  <div className="sel-cal Calendar-icon">
                                    <span>
                                      <i className="ti ti-clock" />
                                    </span>
                                    <input
                                      className="form-control timepicker"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Lunch</label>
                                  <div className="sel-cal Calendar-icon">
                                    <span>
                                      <i className="ti ti-clock" />
                                    </span>
                                    <input
                                      className="form-control timepicker"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Evening Break
                                  </label>
                                  <div className="sel-cal Calendar-icon">
                                    <span>
                                      <i className="ti ti-clock" />
                                    </span>
                                    <input
                                      className="form-control timepicker"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow-none rounded">
                    <div className="card-body pb-0">
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          id="accordion2-headingTwo"
                        >
                          <div
                            className="accordion-button p-0 border-bottom pb-3"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion2-collapseTwo"
                            aria-expanded="false"
                            aria-controls="accordion2-collapseTwo"
                          >
                            <h6 className="fs-16 fw-medium ms-4">Monday</h6>
                            <div className="form-check form-switch ms-auto">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="accordion2-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="accordion2-headingTwo"
                          data-bs-parent="#availability_accordion2"
                        >
                          <div className="accordion-body border-0 p-0 mt-3">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Morning Break
                                  </label>
                                  <div className="sel-cal Calendar-icon">
                                    <span>
                                      <i className="ti ti-clock" />
                                    </span>
                                    <input
                                      className="form-control timepicker"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Lunch</label>
                                  <div className="sel-cal Calendar-icon">
                                    <span>
                                      <i className="ti ti-clock" />
                                    </span>
                                    <input
                                      className="form-control timepicker"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Evening Break
                                  </label>
                                  <div className="sel-cal Calendar-icon">
                                    <span>
                                      <i className="ti ti-clock" />
                                    </span>
                                    <input
                                      className="form-control timepicker"
                                      type="text"
                                    />
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
                <div className="d-flex justify-content-end align-items-center mt-3 pt-3 border-top">
                  <Link
                    to="#"
                    onClick={handlePrev}
                    className="btn btn-light prev_btn me-2"
                  >
                    Back
                  </Link>
                  <button onClick={handleNext} className="btn btn-dark next_btn" type="button">
                    Save &amp; Continue
                  </button>
                </div>
              </fieldset>
            )}
            {currentStep === 3 && (
              <fieldset style={{ display: 'block' }}>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Stat Date &amp; End Date{" "}
                          <span className="text-danger"> *</span>
                        </label>
                        <div className="sel-cal react-calender Calendar-icon">
                          <span>
                            <i className="ti ti-calendar" />
                          </span>
                          <CommonDatePicker/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-0">
                        <h6 className="fw-medium fs-16 mb-2">
                          Unavailable days
                        </h6>
                        <div className="d-flex align-items-center justify-content-between border rounded p-2 bg-light-300">
                          <div>
                            <span className="fs-14 d-block mb-1">
                              Unavailable on
                            </span>
                            <p className="fs-14 fw-medium">
                              Sep 15 2024, Wednesday
                            </p>
                          </div>
                          <span className="badge badge-success">Upcoming</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-end align-items-center mt-3 pt-3 border-top">
                  <Link
                    to="#"
                    className="btn btn-light prev_btn me-2"
                    onClick={handlePrev}
                  >
                    Back
                  </Link>
                  <button
                    className="btn btn-dark"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={handelOpen}
                  >
                    Save &amp; Continue
                  </button>
                </div>
              </fieldset>
            )}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Availability */}
  {/* Modal Succss */}
  <Modal className=" service-models" centered show={showModal}>
        <div className="modal-body">
          <div className="text-center py-4">
            <span className="success-check mb-3 mx-auto">
              <i className="ti ti-check" />
            </span>
            <h4 className="mb-2">Availability Created Successfully</h4>
            <p>
              Availability for “Electrical Services” has been Created, and
              updated on your List
            </p>
            <div className="f-flex align-items-center justify-content-center mt-3">
              <Link
                to="#"
                className="btn btn-light me-3"
                onClick={handleClose}
              >
                Close
              </Link>
              <Link to={routes.staffList} className="btn btn-dark">
                Go to List
              </Link>
            </div>
          </div>
        </div>
        </Modal>
  {/* Modal Succss */}
</>

  )
}

export default StaffDetailModal