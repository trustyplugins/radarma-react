import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import CustomDropdown from '../dropdown/commonSelect'

const BecomeProvider = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [completedTab, setCompletedTab] = useState(0);
const Options1 = [
    { label: 'House Cleaning', value: '1' },
    { label: 'Car Wash', value: '2' },
];
const Options4 = [
    { label: 'United States', value: '1' },
    { label: 'United Kingdom', value: '2' },
];
const Options2 = [
    { label: 'Rochester', value: '1' },
    { label: 'Wisbech', value: '2' },
    { label: 'Marlow', value: '3' },
];
const Options3 = [
    { label: 'Newyork', value: '1' },
    { label: 'Fenland', value: '2' },
    { label: 'Wycombe', value: '3' },
];
return (
    <>
  {/* Provider Modal */}
  <div className="modal fade" id="provider" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between">
          <h5>Become a Provider</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="wizard-fieldset">
          <div className="modal-body pb-0">
            <ul
              className="d-flex align-items-center flex-wrap mb-1 border-bottom"
              id="providerwizard"
            >
              <li className={`${activeTab === 1 || activeTab === 2 ? 'active' : ''} ${completedTab >= 1? 'activated' : ''}  d-flex align-items-center me-4 mb-3`}>
                <span className="avatar avatar-md rounded me-2 border-bottom">
                  1
                </span>
                <h6 className="fs-16 fw-medium">Choose Category</h6>
              </li>
              <li className={`d-flex align-items-center me-4 mb-3 ${activeTab === 3 ? 'active' : ''} ${completedTab >= 2 ? 'activated' : ''}`}>
                <span className="avatar avatar-md rounded me-2">2</span>
                <h6 className="fs-16 fw-medium">Service Location</h6>
              </li>
              <li className={`d-flex align-items-center me-4 mb-3 ${activeTab === 4 ? 'active' : ''} ${completedTab >= 3  ? 'activated' : ''}`}>
                <span className="avatar avatar-md rounded me-2">3</span>
                <h6 className="fs-16 fw-medium">Personal Info</h6>
              </li>
              <li className={`d-flex align-items-center mb-3 ${activeTab === 5? 'active' : ''}`}>
                <span className="avatar avatar-md rounded me-2">4</span>
                <h6 className="fs-16 fw-medium">Confirmation</h6>
              </li>
            </ul>
          </div>
          <fieldset className={`first-field ${activeTab === 1 ? 'd-block' : 'd-none'}`} id="first-field">
            <div className="modal-body pb-1">
              <div className="bg-light-300 p-3 br-10 text-center mb-4">
                <h4>List your service &amp; Get the leads around you</h4>
                <p>List your service &amp; Get the leads around you</p>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  What type of Service do your Provide?
                </label>
                <CustomDropdown
                options={Options1}
                className="select d-flex"
                placeholder="Select Service"
            />
              </div>
              <div className="mb-2">
                <label className="form-label">Popular Service Categories</label>
                <div className="category-badge">
                  <span className="badge d-inline-flex align-items-center mb-2 me-2">
                    <ImageWithBasePath
                      src="assets/img/icons/service-icon-01.svg"
                      alt="icon"
                      className="me-2"
                    />
                    Construction
                  </span>
                  <span className="badge d-inline-flex align-items-center mb-2 me-2">
                    <ImageWithBasePath
                      src="assets/img/icons/service-icon-02.svg"
                      alt="icon"
                      className="me-2"
                    />
                    Removals
                  </span>
                  <span className="badge d-inline-flex align-items-center mb-2 me-2">
                    <ImageWithBasePath
                      src="assets/img/icons/service-icon-03.svg"
                      alt="icon"
                      className="me-2"
                    />
                    Furniture Assembly
                  </span>
                  <span className="badge d-inline-flex align-items-center mb-2 me-2">
                    <ImageWithBasePath
                      src="assets/img/icons/service-icon-04.svg"
                      alt="icon"
                      className="me-2"
                    />
                    Electrical
                  </span>
                  <span className="badge d-inline-flex align-items-center mb-2">
                    <ImageWithBasePath
                      src="assets/img/icons/service-icon-05.svg"
                      alt="icon"
                      className="me-2"
                    />
                    Computer Service
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-footer text-end">
              <Link
                to="#"
                onClick={()=>{setActiveTab(2)}}
                className="btn btn-linear-primary next_btn"
              >
                Get Started
              </Link>
            </div>
          </fieldset>
          <fieldset className={`second-field ${activeTab === 2 ? 'd-block' : 'd-none'}`}>
            <div className="modal-body pb-1">
              <div className="bg-light-300 p-3 br-10 text-center mb-4">
                <h4>List your service &amp; Get the leads around you</h4>
                <p>List your service &amp; Get the leads around you</p>
              </div>
              <div className="mb-4">
                <label className="form-label">
                  What type of Service do your Provide?
                </label>
                <CustomDropdown
                options={Options1}
                className="select d-flex"
                placeholder="Select Service"
            />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  What type of Sub Services do your Provide?
                </label>
                <div className="form-check ps-0">
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service1"
                      type="checkbox"
                      id="service1"
                      defaultChecked
                    />
                    <label className="form-check-label ms-2" htmlFor="service1">
                      Commercial Property
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service2"
                    />
                    <label className="form-check-label ms-2" htmlFor="service2">
                      Empty House Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center active mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service3"
                      defaultChecked
                    />
                    <label className="form-check-label ms-2" htmlFor="service3">
                      Glass Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service4"
                    />
                    <label className="form-check-label ms-2" htmlFor="service4">
                      Carpet washing
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center active mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service5"
                      defaultChecked
                    />
                    <label className="form-check-label ms-2" htmlFor="service5">
                      Sofa Washing
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service6"
                    />
                    <label className="form-check-label ms-2" htmlFor="service6">
                      Office Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service7"
                    />
                    <label className="form-check-label ms-2" htmlFor="service7">
                      Exterior Glass Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service8"
                    />
                    <label className="form-check-label ms-2" htmlFor="service8">
                      Shop Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service9"
                    />
                    <label className="form-check-label ms-2" htmlFor="service9">
                      Ironing Service
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="service10"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="service10"
                    >
                      Bed Washing
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-between">
              <Link to="#" onClick={()=>{setActiveTab(1); setCompletedTab(0)}} className="btn btn-light prev_btn">
                <i className="ti ti-arrow-left me-2" />
                Back
              </Link>
              <Link
                to="#"
                onClick={()=>{setActiveTab(3); setCompletedTab(1)}}
                className="btn btn-linear-primary next_btn"
              >
                Add Location
                <i className="ti ti-arrow-right ms-2" />
              </Link>
            </div>
          </fieldset>
          <fieldset className={activeTab === 3 ? 'd-block' : 'd-none'}>
            <div className="modal-body pb-1">
              <div className="bg-light-300 p-3 br-10 text-center mb-4">
                <h4>Where would you like to see leads from?</h4>
                <p>
                  Tell us the area you cover so we can show you leads for your
                  location
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <CustomDropdown
                options={Options2}
                className="select d-flex"
                placeholder="Select City"
            />
              </div>
              <div className="mb-3">
                <label className="form-label">State</label>
                <CustomDropdown
                options={Options3}
                className="select d-flex"
                placeholder="Select State"
            />
              </div>
              <div className="mb-3">
                <label className="form-label">Country</label>
                <CustomDropdown
                options={Options4}
                className="select d-flex"
                placeholder="Select Country"
            />
              </div>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-between">
              <Link to="#" onClick={()=>{setActiveTab(2); setCompletedTab(0)}} className="btn btn-light prev_btn">
                <i className="ti ti-arrow-left me-2" />
                Back
              </Link>
              <Link
                to="#"
                onClick={()=>{setActiveTab(4); setCompletedTab(2)}}
                className="btn btn-linear-primary next_btn"
              >
                Add Location
                <i className="ti ti-arrow-right ms-2" />
              </Link>
            </div>
          </fieldset>
          <fieldset className={activeTab === 4 ? 'd-block' : 'd-none'}>
            <div className="modal-body pb-1">
              <div className="bg-light-300 p-3 br-10 text-center mb-4">
                <h4>Some details about you</h4>
                <p>
                  You’re just a few steps away from viewing our House Cleaning
                  leads
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check ps-0">
                    <label className="form-label d-block">Select Gender</label>
                    <div className="form-radio d-inline-flex align-items-center active mb-3 me-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="gender"
                        type="radio"
                        id="male"
                        defaultChecked
                      />
                      <label className="form-check-label ms-2" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-radio d-inline-flex align-items-center mb-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="gender"
                        type="radio"
                        id="female"
                      />
                      <label className="form-check-label ms-2" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="form-check ps-0">
                    <label className="form-label d-block">
                      Does your company have a website?
                    </label>
                    <div className="form-radio d-inline-flex align-items-center active mb-3 me-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="website"
                        type="radio"
                        id="yes"
                        defaultChecked
                      />
                      <label className="form-check-label ms-2" htmlFor="yes">
                        Yes
                      </label>
                    </div>
                    <div className="form-radio d-inline-flex align-items-center mb-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="website"
                        type="radio"
                        id="no"
                      />
                      <label className="form-check-label ms-2" htmlFor="no">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="form-check ps-0">
                    <label className="form-label d-block">
                      Does your company have a website?
                    </label>
                    <div className="form-radio d-inline-flex align-items-center active mb-3 me-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="emp"
                        type="radio"
                        id="self"
                        defaultChecked
                      />
                      <label className="form-check-label ms-2" htmlFor="self">
                        Self-employed
                      </label>
                    </div>
                    <div className="form-radio d-inline-flex align-items-center mb-3 me-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="emp"
                        type="radio"
                        id="two"
                      />
                      <label className="form-check-label ms-2" htmlFor="two">
                        2–10
                      </label>
                    </div>
                    <div className="form-radio d-inline-flex align-items-center mb-3 me-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="emp"
                        type="radio"
                        id="three"
                      />
                      <label className="form-check-label ms-2" htmlFor="three">
                        11–50
                      </label>
                    </div>
                    <div className="form-radio d-inline-flex align-items-center mb-3 me-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="emp"
                        type="radio"
                        id="four"
                      />
                      <label className="form-check-label ms-2" htmlFor="four">
                        51–200
                      </label>
                    </div>
                    <div className="form-radio d-inline-flex align-items-center mb-3">
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="emp"
                        type="radio"
                        id="more"
                      />
                      <label className="form-check-label ms-2" htmlFor="more">
                        200+
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-between">
              <Link to="#" onClick={()=>{setActiveTab(3);setCompletedTab(1)}} className="btn btn-light prev_btn">
                <i className="ti ti-arrow-left me-2" />
                Back
              </Link>
              <Link
                to="#"
                onClick={()=>{setActiveTab(5);setCompletedTab(3)}}
                className="btn btn-linear-primary next_btn"
              >
                Submit
                <i className="ti ti-arrow-right ms-2" />
              </Link>
            </div>
          </fieldset>
          <fieldset className={activeTab === 5 ? 'd-block' : 'd-none'}>
            <div className="modal-body pb-1">
              <div className="bg-light-300 p-3 br-10 text-center mb-4">
                <h4>Maximise your leads</h4>
                <p>Add other services you can provide</p>
              </div>
              <div className="mb-3">
                <label className="form-label d-block">
                  What type of Sub Services do your Provide?
                </label>
                <span className="badge bg-info fs-13 fw-medium">
                  House Cleaning
                </span>
              </div>
              <div className="mb-2">
                <label className="form-label">
                  What type of Sub Services do your Provide?
                </label>
                <div className="form-check ps-0">
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service1"
                      type="checkbox"
                      id="services1"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services1"
                    >
                      Commercial Property
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services2"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services2"
                    >
                      Empty House Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center active mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services3"
                      defaultChecked
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services3"
                    >
                      Glass Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services4"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services4"
                    >
                      Carpet washing
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center active mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services5"
                      defaultChecked
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services5"
                    >
                      Sofa Washing
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services6"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services6"
                    >
                      Office Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services7"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services7"
                    >
                      Exterior Glass Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services8"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services8"
                    >
                      Shop Cleaning
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services9"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services9"
                    >
                      Ironing Service
                    </label>
                  </div>
                  <div className="form-checkbox d-inline-flex align-items-center mb-2 me-3">
                    <input
                      className="form-check-input ms-0 mt-0"
                      name="service"
                      type="checkbox"
                      id="services10"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="services10"
                    >
                      Bed Washing
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-end">
              <Link
                to="#"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#success_modal"
                className="btn btn-linear-primary"
                onClick={()=>{setActiveTab(1);setCompletedTab(0)}}
              >
                Confirm &amp; Submit
              </Link>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
  {/* /Provider Modal */}
  {/* Success Modal */}
  <div
    className="modal fade"
    id="success_modal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
          <div className="mb-4">
            <span className="success-icon mx-auto mb-4">
              <i className="ti ti-check" />
            </span>
            <h4 className="mb-1">Registration Successful</h4>
            <p>
              You will get a Verification link Via email for the Verify the
              Account.
            </p>
          </div>
          <Link
            to="#"
            data-bs-dismiss="modal"
            className="btn btn-linear-primary"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* /Success Modal */}
</>

  )
}

export default BecomeProvider