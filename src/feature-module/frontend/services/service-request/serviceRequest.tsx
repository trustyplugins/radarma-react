import React, { useState } from 'react'
import BreadCrumb from '../../common/breadcrumb/breadCrumb'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';

const ServiceRequest = () => {
  const routes = all_routes
    const [selectedValue1, setSelectedValue1] = useState(null);
    const [selectedValue2, setSelectedValue2] = useState(null);
    const value1 = [
        { name: '0-2 Hrs' },
        { name: '2-3 Hrs' },
        { name: '3-4 Hrs' },
      ];
    const value2 = [
        { name: '1st Floor' },
        { name: '2st Floor' },
        { name: '3st Floor' },
      ];
      const [currentStep, setCurrentStep] = useState(1);
      const [count, setCount] = useState(1);
      const [count2, setCount2] = useState(1);
      const countPlus = () => {
        setCount(prevCount => prevCount + 1);
      }
      const countMinus = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
      }
      const countPlus2 = () => {
        setCount2(prevCount => prevCount + 1);
      }
      const countMinus2 = () => {
        setCount2(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
      }
      
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
    
        // Only set count if value is a number and greater than 0
        if (!isNaN(value) && value > 0) {
          setCount(value);
        }
      };
      const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
    
        // Only set count if value is a number and greater than 0
        if (!isNaN(value) && value > 0) {
          setCount2(value);
        }
      };
      const handleNext = () => {
        setCurrentStep(currentStep + 1);

      };
    
      const handlePrev = () => {
        setCurrentStep(currentStep - 1);
      };
  return (
    <>
    <BreadCrumb title='Book a Service' item1='Service' item2='Book a Service'/>
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="fieldset-wizard request-wizard">
          <div className="row">
            <div className="col-xl-3 col-lg-4 theiaStickySidebar">
              <div className="card shadow-none bg-light-500 booking-sidebar request-sidebar mb-4 mb-lg-0">
                <div className="card-body">
                  <div className="service-info bg-white d-flex align-items-center mb-3">
                    <span className="avatar avatar-xl me-2 flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/service-request.jpg"
                        className="border-0"
                        alt="img"
                      />
                    </span>
                    <div>
                      <h5 className="mb-1">Removals</h5>
                      <p className="fs-14">35 Providers Available</p>
                    </div>
                  </div>
                  <div className="booking-wizard p-0">
                    <h6 className="mb-3 fw-semibold">Steps</h6>
                    <ul className="wizard-progress" id="bokingwizard">
                      <li className={`${currentStep === 1 ? 'active' : currentStep > 1 ? 'activated' : ''} pb-4`}>
                        <span>Basic Information</span>
                      </li>
                      <li className={`${currentStep === 2 ? 'active' : currentStep > 2 ? 'activated' : ''} pb-4`}>
                        <span>Booking Schedule</span>
                      </li>
                      <li className={`${currentStep === 3 ? 'active' : currentStep > 3 ? 'activated' : ''} pb-4`}>
                        <span>Collection Address Details</span>
                      </li>
                      <li className={`${currentStep === 4 ? 'active' : currentStep > 4 ? 'activated' : ''} pb-4`}>
                        <span>Delivery Address Details</span>
                      </li>
                      <li className={`${currentStep === 5 ? 'active' : currentStep > 5 ? 'activated' : ''} pb-4`}>
                        <span>Additional Items</span>
                      </li>
                      <li className={`${currentStep === 6 ? 'active' : currentStep > 6 ? 'activated' : ''} pb-4`}>
                        <span>Review Order</span>
                      </li>
                      <li>
                        <span>Checkout</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
            {currentStep === 1 && (
              <fieldset id="first-field">
                <div className="card flex-fill mb-0">
                  <div className="card-body">
                    <h5 className="mb-3">Personal Details</h5>
                    <form >
                      <div>
                        <h6 className="mb-3 fs-16 fw-medium">
                          Basic Information
                        </h6>
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="remember_me"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember_me"
                          >
                            Is the Name and Contact details the same as on your
                            Profile?
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-4">
                              <div className="form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  First Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <div className="form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  Last Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <div className="form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  Email Address{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <div className="form-floating">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  Phone Number{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-4 border-top pt-4">
                              <div className="position-relative">
                                <label className="fs-12 select-floating-label">
                                  Floor Level{" "}
                                  <span className="text-danger">*</span>
                                </label>
                               
                                <Dropdown
                                    value={selectedValue1}
                                    onChange={(e) => setSelectedValue1(e.value)}
                                    options={value1}
                                    optionLabel="name"
                                    placeholder="Select"
                                    className="w-100 select"
                                    />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="cost_check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="cost_check"
                              >
                                Do you live in the CC Zone? (Costs $15 extra)
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button
                          type="button"
                          className="btn btn-linear-primary next_btn"
                          onClick={handleNext}
                        >
                          Next Step
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </fieldset>
              )}
              {currentStep === 2 && (
              <fieldset style={{ display: 'flex' }}>
                <div className="card flex-fill mb-0">
                  <div className="card-body">
                    <h5 className="mb-3">Booking Schedule</h5>
                    <form >
                      <div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <div className="form-floating react-calender  input-icon position-relative	">
                              <CommonDatePicker/>
                                <label className="fs-14">
                                  Select Date and Time{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <span className="input-icon-addon">
                                  <i className="ti ti-calendar" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <h6 className="fs-16 fw-medium mb-3">
                            Number of People in Luton Vans
                          </h6>
                          <div className="custom-increment">
                            <label className="d-block mb-2">
                              Number of People in Luton Vans
                            </label>
                            <div className="d-flex align-items-center">
                              <button
                                type="button"
                                className="quantity-plus btn quantity-btn"
                                data-type="plus"
                                data-field=""
                                onClick={countPlus}
                                
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                              <input
                                type="text"
                                id="quantity"
                                className="input-number"
                                value={count}
                                onChange={handleInputChange}
                              />
                              <button
                                type="button"
                                className="quantity-minus btn quantity-btn"
                                data-type="minus"
                                data-field=""
                                onClick={countMinus}
                              >
                                <span>
                                  <i className="fas fa-minus" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="check_2"
                          />
                          <label className="form-check-label" htmlFor="check_2">
                            Same Number of People in All Vans
                          </label>
                        </div>
                        <div className="mb-4">
                          <h6 className="fs-16 mb-3 fw-semibold">
                            Number of People in All Vans
                          </h6>
                          <p className="mb-2">Number of People in All Vans</p>
                          <div className="d-flex align-items-center flex-wrap row-gap-3">
                            <div className="form-check me-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="timing"
                                id="hour-radio-1"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="hour-radio-1"
                              >
                                2 (£70 Per Hour)
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="timing"
                                id="hour-radio-2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="hour-radio-2"
                              >
                                3 (£90 Per Hour)
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <Link
                          to="#"
                          onClick={handlePrev}
                          className="btn btn-light d-inline-flex align-items-center prev_btn me-2"
                        >
                          Back
                        </Link>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn btn-linear-primary next_btn"
                        >
                          Next Step
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 3 && (
              <fieldset style={{ display: 'flex' }}>
                <div className="card flex-fill mb-0">
                  <div className="card-body">
                    <h5 className="mb-3">Collection Address Details</h5>
                    <form >
                      <div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <div className="form-floating  input-icon position-relative	">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  Address <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-4">
                              <div className="form-floating  input-icon position-relative	">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  Postal Code{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                              <div className="form-check me-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="property"
                                  id="property-radio-1"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="property-radio-1"
                                >
                                  House
                                </label>
                              </div>
                              <div className="form-check me-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="property"
                                  id="property-radio-2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="property-radio-2"
                                >
                                  Flat
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="property"
                                  id="property-radio-3"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="property-radio-3"
                                >
                                  Business Premise
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="custom-increment">
                            <label className="d-block mb-2">
                              Number of Bedrooms
                            </label>
                            <div className="d-flex align-items-center">
                              <button
                                type="button"
                                className="quantity-plus btn quantity-btn"
                                data-type="plus"
                                data-field=""
                                onClick={countPlus2}
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                              <input
                                type="text"
                                id="increment-count"
                                className="input-number"
                                value={count2}
                                onChange={handleInputChange2}
                              />
                              <button
                                type="button"
                                className="quantity-minus btn quantity-btn"
                                data-type="minus"
                                onClick={countMinus2}
                                data-field=""
                              >
                                <span>
                                  <i className="fas fa-minus" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="position-relative">
                            <label className="fs-12 select-floating-label">
                              Floor Level <span className="text-danger">*</span>
                            </label>
                            <Dropdown
                                    value={selectedValue2}
                                    onChange={(e) => setSelectedValue2(e.value)}
                                    options={value2}
                                    optionLabel="name"
                                    placeholder="Select"
                                    className="w-100 select"
                                    />
                          </div>
                        </div>
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="check_3"
                          />
                          <label className="form-check-label" htmlFor="check_3">
                            There is a lift/elevator at the address
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <Link
                          to="#"
                          onClick={handlePrev}
                          className="btn btn-light d-inline-flex align-items-center prev_btn me-2"
                        >
                          Back
                        </Link>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn btn-linear-primary next_btn"
                        >
                          Next Step
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 4 && (
              <fieldset style={{ display: 'flex' }}>
                <div className="card flex-fill mb-0">
                  <div className="card-body">
                    <h5 className="mb-3">Delivery Address Details</h5>
                    <form >
                      <div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <div className="form-floating  input-icon position-relative	">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  Address <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-4">
                              <div className="form-floating  input-icon position-relative	">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=""
                                />
                                <label className="fs-14">
                                  Postal Code{" "}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                              <div className="form-check me-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="property"
                                  id="property-radio-4"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="property-radio-4"
                                >
                                  House
                                </label>
                              </div>
                              <div className="form-check me-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="property"
                                  id="property-radio-5"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="property-radio-5"
                                >
                                  Flat
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="property"
                                  id="property-radio-6"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="property-radio-6"
                                >
                                  Business Premise
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="custom-increment">
                            <label className="d-block mb-2">
                              Number of Bedrooms
                            </label>
                            <div className="d-flex align-items-center mb-3">
                              <button
                                type="button"
                                className="quantity-plus btn quantity-btn"
                                data-type="plus"
                                data-field=""
                              >
                                <span>
                                  <i className="fas fa-plus" />
                                </span>
                              </button>
                              <input
                                type="text"
                                id="increment-count2"
                                className="input-number"
                                defaultValue={1}
                              />
                              <button
                                type="button"
                                className="quantity-minus btn quantity-btn"
                                data-type="minus"
                                data-field=""
                              >
                                <span>
                                  <i className="fas fa-minus" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="position-relative">
                            <label className="fs-12 select-floating-label">
                              Floor Level <span className="text-danger">*</span>
                            </label>
                            <Dropdown
                                    value={selectedValue2}
                                    onChange={(e) => setSelectedValue2(e.value)}
                                    options={value2}
                                    optionLabel="name"
                                    placeholder="Select"
                                    className="w-100 select"
                                    />
                          </div>
                        </div>
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="check_4"
                          />
                          <label className="form-check-label" htmlFor="check_4">
                            There is a lift/elevator at the address
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <Link
                          to="#"
                          className="btn btn-light d-inline-flex align-items-center prev_btn me-2"
                          onClick={handlePrev}
                        >
                          Back
                        </Link>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn btn-linear-primary next_btn"
                        >
                          Next Step
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 5 && (
              <fieldset style={{ display: 'flex' }}>
                <div className="card flex-fill mb-0">
                  <div className="card-body">
                    <h5 className="mb-3">Additional Items</h5>
                    <form >
                      <div className="mb-3">
                        <label className="form-label d-block">
                          Please add Pictures or Videos
                        </label>
                        <div className="d-flex align-items-center justify-content-center upload-field flex-column">
                          <span className="d-block text-center mb-2">
                            <ImageWithBasePath
                              src="assets/img/icons/icon-upload.svg"
                              alt=""
                            />
                          </span>
                          <p className="fs-14 text-center mb-2">
                            Drag and drop your files here to upload{" "}
                            <span className="d-block mt-2">Or</span>
                          </p>
                          <div className="file-upload btn btn-linear-primary h-auto mb-2">
                            Browse Files
                            <input type="file" accept="video/image" />
                          </div>
                          <p className="text-center fs-14">
                            Only .jpg .png file types allowed and file <br />
                            size must be less than 100 MB
                          </p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Additional Notes/Special Requirements
                        </label>
                        <textarea
                          rows={3}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <Link
                          to="#"
                          onClick={handlePrev}
                          className="btn btn-light d-inline-flex align-items-center prev_btn me-2"
                        >
                          Back
                        </Link>
                        <button
                          type="button"
                          className="btn btn-linear-primary next_btn"
                          onClick={handleNext}
                        >
                          Next Step
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </fieldset>
            )}
            {currentStep === 6 && (
              <fieldset style={{ display: 'flex' }}>
                <div className="flex-fill">
                  <div className="review-order">
                    <h6 className="fs-16 fw-medium border-bottom mb-3 pb-3">
                      Order Details
                    </h6>
                    <div className="d-flex align-items-center justify-content-md-between flex-wrap gap-3">
                      <div className="rounded bg-white p-2 text-center review-item">
                        <h6 className="fw-medium fs-16 mb-1">
                          Booking Charges
                        </h6>
                        <span>£ 42.00</span>
                      </div>
                      <div className="rounded bg-white p-2 text-center review-item">
                        <h6 className="fw-medium fs-16 mb-1">CC Zone</h6>
                        <span>£ 0.00</span>
                      </div>
                      <div className="rounded bg-white p-2 text-center review-item">
                        <h6 className="fw-medium fs-16 mb-1">Subtotal</h6>
                        <span>£ 280.00</span>
                      </div>
                      <div className="rounded bg-white p-2 text-center review-item">
                        <h6 className="fw-medium fs-16 mb-1">V.A.T</h6>
                        <span>£ 0.00</span>
                      </div>
                      <div className="rounded bg-white p-2 text-center review-item">
                        <h6 className="fw-medium fs-16 mb-1">Total Payment</h6>
                        <span>£ 322.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-0">
                    <div className="card-body">
                      <h5 className="mb-3">Review Order</h5>
                      <div className="border-bottom mb-3">
                        <h6 className="fs-16 fw-medium mb-3">
                          Personal Details
                        </h6>
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  First Name
                                </h6>
                                <span>Name</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">Phone</h6>
                                <span>Phone</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Last Name
                                </h6>
                                <span>Name</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Booking Estimate
                                </h6>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">Email</h6>
                                <span>Email</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  CC Zone
                                </h6>
                                <span>CC Zone</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="fs-16 fw-medium mb-3">
                          Booking Schedule
                        </h6>
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Luton Van
                                </h6>
                                <span>2, 2</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Number of Luton Vans
                                </h6>
                                <span>2</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Booking Date/Time
                                </h6>
                                <span>26 September 2024</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="fs-16 fw-medium mb-3">
                          Collection Address Details
                        </h6>
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Address
                                </h6>
                                <span>Address</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Floor Level
                                </h6>
                                <span>1</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">Phone</h6>
                                <span>Phone</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">Email</h6>
                                <span>Email</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Is there a Lift
                                </h6>
                                <span>Yes</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Property Type
                                </h6>
                                <span>House</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  First Name
                                </h6>
                                <span>Name</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Number of Bedrooms
                                </h6>
                                <span>5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="fs-16 fw-medium mb-3">
                          Delivery Address Details
                        </h6>
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Address
                                </h6>
                                <span>Address</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Floor Level
                                </h6>
                                <span>1</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">Phone</h6>
                                <span>Phone</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">Email</h6>
                                <span>Email</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Is there a Lift
                                </h6>
                                <span>Yes</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Property Type
                                </h6>
                                <span>House</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  First Name
                                </h6>
                                <span>Name</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Number of Bedrooms
                                </h6>
                                <span>5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <h6 className="fs-16 fw-medium mb-3">
                          Additional Details
                        </h6>
                        <div className="row">
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Already have items
                                </h6>
                                <span>Nil</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Does the car start?
                                </h6>
                                <span>Nil</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Largest Items
                                </h6>
                                <span>Nil</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Special Notes
                                </h6>
                                <span>Notes</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Already bought items
                                </h6>
                                <span>No</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Hair Done?
                                </h6>
                                <span>Nil</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Items need mounting?
                                </h6>
                                <span>Nil</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <div className="mb-3">
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Does the car run and drive?
                                </h6>
                                <span>Nil</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Do you need furniture assembly?
                                </h6>
                                <span>Nil</span>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-14 fw-medium mb-1">
                                  Number of Items that need Assembling
                                </h6>
                                <span>1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <Link
                          to="#"
                          onClick={handlePrev}
                          className="btn btn-light d-inline-flex align-items-center prev_btn me-2"
                        >
                          Back
                        </Link>
                        <Link to={routes.login} className="btn btn-linear-primary">
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </>
  )
}

export default ServiceRequest