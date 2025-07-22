import React, { useState } from 'react';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import TemplateDemo from '../../common/multi-select/multiSelect';
import CustomDropdown from '../../common/dropdown/commonSelect';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import DefaultEditor from 'react-simple-wysiwyg';

const CreateService = () => {
  const routes = all_routes;
  const [showModal, setShowModal] = useState(false);
  const [addList, setAddList] = useState(['']);
  const [addList2, setAddList2] = useState(['']);
  const [addList3, setAddList3] = useState(['']);
  const handelAdd = () => {
    setAddList([...addList, ' ']);
  };

  const onChange = (time: any, timeString: any) => {
    console.log(time, timeString);
  };
  const [values] = React.useState();
  const handelRemove = (index: any) => {
    const list = [...addList];
    list.splice(index, 1);
    setAddList(list);
  };
  const handelAdd2 = () => {
    setAddList2([...addList2, ' ']);
  };

  const handelRemove2 = (index: any) => {
    const list = [...addList2];
    list.splice(index, 1);
    setAddList2(list);
  };
  const handelAdd3 = () => {
    setAddList3([...addList3, ' ']);
  };

  const handelRemove3 = (index: any) => {
    const list = [...addList3];
    list.splice(index, 1);
    setAddList3(list);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handelOpen = () => {
    setCurrentStep(1);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo({
        top: 0,
        behavior: "smooth" // smooth scrolling
    });
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const Options1 = [
    { label: 'House Cleaning', value: '1' },
    { label: 'Car Wash', value: '2' },
  ];
  const Options2 = [
    { label: 'Percentage', value: '1' },
    { label: 'Price', value: '2' },
  ];
  const Options3 = [
    { label: 'Minutes', value: '1' },
    { label: 'Hours', value: '2' },
  ];
  const Options4 = [
    { label: 'Canada', value: '1' },
    { label: 'Brazil', value: '2' },
  ];
  const Options5 = [
    { label: 'Percentage', value: '1' },
    { label: 'Price', value: '2' },
  ];
  const Options6 = [
    { label: 'London', value: '1' },
    { label: 'Paris', value: '2' },
  ];

  return (
    <>
    <BreadCrumb title='Create a Service' item1="Service" item2="Create a Service"/>
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="service-wizard mb-4">
                  <ul
                    className="d-flex align-items-center flex-wrap row-gap-2"
                    id="progressbar"
                  >
                    <li
                      className={`${currentStep === 1 ? 'active' : currentStep > 1 ? 'activated' : ''} me-2`}
                    >
                      <span className="me-2">
                        <i className="ti ti-info-circle" />
                      </span>
                      <h6>Service Information</h6>
                    </li>
                    <li
                      className={`${currentStep === 2 ? 'active' : currentStep > 2 ? 'activated' : ''} me-2`}
                    >
                      <span className="me-2">
                        <i className="ti ti-map-pin" />
                      </span>
                      <h6>Location</h6>
                    </li>
                    <li
                      className={`${currentStep === 3 ? 'active' : currentStep > 3 ? 'activated' : ''} me-2`}
                    >
                      <span className="me-2">
                        <i className="ti ti-photo" />
                      </span>
                      <h6>Gallery</h6>
                    </li>
                    <li
                      className={`${currentStep === 4 ? 'active' : currentStep > 4 ? 'activated' : ''} me-2`}
                    >
                      <span className="me-2">
                        <i className="ti ti-message-question" />
                      </span>
                      <h6>FAQ</h6>
                    </li>
                    <li
                      className={`${currentStep === 5 ? 'active' : currentStep > 5 ? 'activated' : ''} me-2`}
                    >
                      <span className="me-2">
                        <i className="ti ti-shield" />
                      </span>
                      <h6>Seo</h6>
                    </li>
                  </ul>
                </div>
                <div className="service-inform-fieldset">
                  {currentStep === 1 && (
                    <fieldset id="first-field" style={{ display: 'block' }}>
                      <h4 className="mb-3">Service Information</h4>
                      <form >
                        <div className="card">
                          <div className="card-body">
                            <div
                              className="accordion"
                              id="accordionPanelsStayOpenExample"
                            >
                              <div className="accordion-item mb-3">
                                <div
                                  className="accordion-header"
                                  id="accordion-headingOne"
                                >
                                  <div
                                    className="accordion-button p-0"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion-collapseOne"
                                    aria-expanded="true"
                                    aria-controls="accordion-collapseOne"
                                    role="button"
                                  >
                                    Basic Information
                                  </div>
                                </div>
                                <div
                                  id="accordion-collapseOne"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="accordion-headingOne"
                                >
                                  <div className="accordion-body p-0 mt-3 pb-1">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Service Title{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Slug{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Category{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>

                                          <CustomDropdown
                                            options={Options1}
                                            className="select d-flex"
                                            placeholder="Select Service"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Sub Category{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>

                                          <CustomDropdown
                                            options={Options1}
                                            className="select d-flex"
                                            placeholder="Select Sub Category"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mb-3">
                                <div
                                  className="accordion-header"
                                  id="accordion-headingTwo"
                                >
                                  <div
                                    className="accordion-button p-0"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion-collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="accordion-collapseTwo"
                                  >
                                    Pricing
                                    <div className="form-check form-switch ms-3">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                      <label className="form-check-label">
                                        Free
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="accordion-collapseTwo"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="accordion-headingTwo"
                                >
                                  <div className="accordion-body p-0 mt-3 pb-1">
                                    <div className="row">
                                      <div className="col-xl-3 col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Enter Amount{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xl-3 col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Offer Price{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <CustomDropdown
                                            options={Options5}
                                            className="select d-flex"
                                            placeholder="Select "
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xl-3 col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Price after discount
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            disabled
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xl-3 col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Tax{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <CustomDropdown
                                            options={Options2}
                                            className="select d-flex"
                                            placeholder="Select"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-xl-3 col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Duration{' '}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <CustomDropdown
                                            options={Options3}
                                            className="select d-flex"
                                            placeholder="Select"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-check mb-3">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="zoom_meet"
                                            defaultChecked
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="zoom_meet"
                                          >
                                            Allow Zoom Meeting
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="mb-3 zoom-meet-link">
                                          <label className="form-label">
                                            Zoom Invitation Link
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-check mb-3">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="google_meet"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="google_meet"
                                          >
                                            Allow Google Meet
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="mb-3 google-meet-link">
                                          <label className="form-label">
                                            Google Invitation Link
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mb-3">
                                <div
                                  className="accordion-header"
                                  id="accordion-headingThree"
                                >
                                  <div
                                    className="accordion-button p-0"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion-collapseThree"
                                    aria-expanded="true"
                                    aria-controls="accordion-collapseThree"
                                    role="button"
                                  >
                                    Location &amp; Staffs{' '}
                                    <span className="fs-14 ms-1 text-default">
                                      ( Can add multiple Locations )
                                    </span>
                                  </div>
                                </div>
                                <div
                                  id="accordion-collapseThree"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="accordion-headingThree"
                                >
                                  <div className="accordion-body p-0 mt-3 pb-1">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Staff{' '}
                                            <span className="text-danger">
                                              {' '}
                                              *
                                            </span>
                                          </label>
                                          <TemplateDemo />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mb-3">
                                <div
                                  className="accordion-header"
                                  id="accordion-headingFour"
                                >
                                  <div
                                    className="accordion-button p-0"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion-collapseFour"
                                    aria-expanded="true"
                                    aria-controls="accordion-collapseFour"
                                    role="button"
                                  >
                                    Includes
                                  </div>
                                </div>
                                <div
                                  id="accordion-collapseFour"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="accordion-headingFour"
                                >
                                  <div className="accordion-body p-0 mt-3 pb-1">
                                    <div className="addtitle-info">
                                    {addList2.map((add: any, index: any) => (
                                      <div className="row" key={index}>
                                        <div className="col-md-12">
                                          <div className="mb-3">
                                            <label className="form-label">
                                              Title{' '}
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <div className="d-flex align-items-center">
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                              {addList2.length > 1 ? <Link
                                                to="#"
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                // @ts-expect-error
                                                onClick={() => handelRemove2()}
                                                className="text-primary d-inline-flex align-items-center text-danger delete-item ms-4"
                                              >
                                                <i className="ti ti-trash"></i>
                                              </Link>:<></>}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      ))}
                                    </div>
                                    <Link
                                      to="#"
                                      onClick={handelAdd2}
                                      className="text-primary d-inline-flex align-items-center add-extra fs-14 mb-3"
                                    >
                                      <i className="ti ti-circle-plus me-2" />
                                      Add New
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mb-3">
                                <div
                                  className="accordion-header"
                                  id="accordion-headingFive"
                                >
                                  <div
                                    className="accordion-button p-0"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion-collapseFive"
                                    aria-expanded="true"
                                    aria-controls="accordion-collapseFive"
                                    role="button"
                                  >
                                    Add Additional Services
                                  </div>
                                </div>
                                <div
                                  id="accordion-collapseFive"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="accordion-headingFive"
                                >
                                  <div className="accordion-body p-0 mt-3 pb-1">
                                    <div className="addservice-info">
                                    {addList.map((add: any, index: any) => (
                                      <div className="row addservice-info-row" key={index}>
                                        <div className="col-xl-5">
                                          <div className="d-flex align-items-center mb-3">
                                            <div className="file-upload service-file-upload d-flex align-items-center justify-content-center flex-column me-4">
                                              <i className="ti ti-photo" />
                                              <input
                                                type="file"
                                                accept="video/image"
                                              />
                                            </div>
                                            <div className="mb-3 flex-fill">
                                              <label className="form-label">
                                                Name{' '}
                                                <span className="text-danger">
                                                  *
                                                </span>
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-xl-3">
                                          <div className="mb-3">
                                            <label className="form-label">
                                              Price{' '}
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-xl-4">
                                         
                                          <div className="mb-3">
                                            <label className="form-label">
                                              Duration{' '}
                                              <span className="text-danger">
                                                *
                                              </span>
                                            </label>
                                            <div className='d-flex align-items-center'>

                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                            {addList.length > 1 ? <Link
                                                to="#"
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                // @ts-expect-error
                                                onClick={() => handelRemove()}
                                                className="text-primary d-inline-flex align-items-center text-danger delete-item ms-4"
                                              >
                                                <i className="ti ti-trash"></i>
                                              </Link>:<></>}
                                            </div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                      ))}
                                    </div>
                                    <Link
                                      to="#"
                                      onClick={handelAdd}
                                      className="text-primary d-inline-flex align-items-center fs-14 add-extra2 mb-3"
                                    >
                                      <i className="ti ti-circle-plus me-2" />
                                      Add New
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mb-3">
                                <div
                                  className="accordion-header"
                                  id="accordion-headingSix"
                                >
                                  <div
                                    className="accordion-button p-0"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion-collapseSix"
                                    aria-expanded="true"
                                    aria-controls="accordion-collapseSix"
                                    role="button"
                                  >
                                    Service Overview
                                  </div>
                                </div>
                                <div
                                  id="accordion-collapseSix"
                                  className="accordion-collapse collapse show"
                                  aria-labelledby="accordion-headingSix"
                                >
                                  <div className="accordion-body p-0 mt-3 pb-1">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Overview
                                          </label>
                                          <DefaultEditor
                                value={values}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                                onChange={onChange}
                              />

                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="mb-3">
                                          <label className="form-label">
                                            Service Status{' '}
                                            <span className="text-danger">
                                              {' '}
                                              *
                                            </span>
                                          </label>
                                          <div className="d-flex align-items-center mb-3">
                                            <div className="form-check me-3">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                id="status_active"
                                                defaultChecked
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="status_active"
                                              >
                                                Active
                                              </label>
                                            </div>
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                id="status_inactive"
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="status_inactive"
                                              >
                                                Inactive
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
                            <div className="text-end">
                              <button
                                className="btn btn-dark next_btn"
                                onClick={handleNext}
                                type="button"
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </fieldset>
                  )}
                  {currentStep === 2 && (
                    <fieldset style={{ display: 'block' }}>
                      <h4 className="mb-3">Location</h4>
                      <form >
                        <div className="card">
                          <div className="card-body">
                            <div className="border-bottom mb-3 pb-3">
                              <h4 className="fs-20">Add Location</h4>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Address <span> *</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Country{' '}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <CustomDropdown
                                    options={Options4}
                                    className="select d-flex"
                                    placeholder="Select"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    City <span className="text-danger">*</span>
                                  </label>
                                  <CustomDropdown
                                    options={Options6}
                                    className="select d-flex"
                                    placeholder="Select"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    State <span className="text-danger">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Pincode{' '}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="border-bottom mb-3 pb-3">
                                  <div className="map-grid mb-0">
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                                      allowFullScreen
                                      aria-hidden="false"
                                      tabIndex={0}
                                      className="contact-map w-100"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                              <button
                                type="button"
                                onClick={handlePrev}
                                className="btn btn-light prev_btn me-3"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                onClick={handleNext}
                                className="btn btn-dark next_btn"
                              >
                                Save &amp; Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </fieldset>
                  )}
                  {currentStep === 3 && (
                    <fieldset style={{ display: 'block' }}>
                      <h4 className="mb-3">Gallery</h4>
                      <form >
                        <div className="card">
                          <div className="card-body">
                            <div className="border-bottom mb-3 pb-3">
                              <h4 className="fs-20">Add Media &amp; Files</h4>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Add Service Images{' '}
                                    <span className="text-danger"> *</span>
                                  </label>
                                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                                    <div className="avatar avatar-gallery me-3">
                                      <ImageWithBasePath
                                        src="assets/img/gallery/gallery-01.jpg"
                                        alt="Img"
                                      />
                                      <Link
                                        to="#"
                                        className="trash-top d-flex align-items-center justify-content-center"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                    <div className="avatar avatar-gallery me-3">
                                      <ImageWithBasePath
                                        src="assets/img/gallery/gallery-02.jpg"
                                        alt="Img"
                                      />
                                      <Link
                                        to="#"
                                        className="trash-top d-flex align-items-center justify-content-center"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                    <div className="avatar avatar-gallery me-3">
                                      <ImageWithBasePath
                                        src="assets/img/gallery/gallery-03.jpg"
                                        alt="Img"
                                      />
                                      <Link
                                        to="#"
                                        className="trash-top d-flex align-items-center justify-content-center"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                    <div className="avatar avatar-gallery me-3">
                                      <ImageWithBasePath
                                        src="assets/img/gallery/gallery-04.jpg"
                                        alt="Img"
                                      />
                                      <Link
                                        to="#"
                                        className="trash-top d-flex align-items-center justify-content-center"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                    <div className="avatar avatar-gallery me-3">
                                      <ImageWithBasePath
                                        src="assets/img/gallery/gallery-05.jpg"
                                        alt="Img"
                                      />
                                      <Link
                                        to="#"
                                        className="trash-top d-flex align-items-center justify-content-center"
                                      >
                                        <i className="ti ti-trash" />
                                      </Link>
                                    </div>
                                    <div className="file-upload d-flex align-items-center justify-content-center flex-column">
                                      <i className="ti ti-photo mb-2" />
                                      <p className="mb-0">Add Images</p>
                                      <input type="file" accept="video/image" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Service Video
                                  </label>
                                  <div className="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column mb-2">
                                    <span className="upload-img d-block mb-2">
                                      <ImageWithBasePath
                                        src="assets/img/icons/upload-icon.svg"
                                        alt="Img"
                                      />
                                    </span>
                                    <p className="mb-0">
                                      Drag &amp; Drop or{' '}
                                      <span className="text-primary">
                                        Browse
                                      </span>
                                    </p>
                                    <input type="file" accept="video/image" />
                                  </div>
                                  <div className="avatar avatar-gallery me-3">
                                    <ImageWithBasePath
                                      src="assets/img/gallery/gallery-03.jpg"
                                      alt="Img"
                                    />
                                    <Link
                                      to="#"
                                      className="trash-top d-flex align-items-center justify-content-center"
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Video Link
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end border-top pt-3">
                              <button
                                type="button"
                                onClick={handlePrev}
                                className="btn btn-light prev_btn me-3"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                onClick={handleNext}
                                className="btn btn-dark next_btn"
                              >
                                Save &amp; Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </fieldset>
                  )}
                  {currentStep === 4 && (
                    <fieldset style={{ display: 'block' }}>
                      <h4 className="mb-3">FAQ</h4>
                      <form >
                        <div className="card">
                          <div className="card-body">
                            <div className="add-faq-info">
                            {addList3.map((add: any, index: any) => (
                              <div className="row" key={index}>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Question{' '}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Answer{' '}
                                    </label>
                                    <div className='d-flex align-items-center'>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                    {addList3.length > 1 ? <Link
                                                to="#"
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                // @ts-expect-error
                                                onClick={() => handelRemove3()}
                                                className="text-primary d-inline-flex align-items-center text-danger delete-item ms-4"
                                              >
                                                <i className="ti ti-trash"></i>
                                              </Link>:<></>}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              ))}
                            </div>
                            <Link
                              to="#"
                              onClick={handelAdd3}
                              className="text-primary d-inline-flex align-items-center fs-14 add-extra-faq mb-3"
                            >
                              <i className="ti ti-circle-plus me-2" />
                              Add New
                            </Link>
                            <div className="d-flex align-items-center justify-content-end border-top pt-3">
                              <button
                                type="button"
                                onClick={handlePrev}
                                className="btn btn-light prev_btn me-3"
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                onClick={handleNext}
                                className="btn btn-dark next_btn"
                              >
                                Save &amp; Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </fieldset>
                  )}
                  {currentStep === 5 && (
                    <fieldset style={{ display: 'block' }}>
                      <h4 className="mb-3">Seo</h4>
                      <form >
                        <div className="card">
                          <div className="card-body">
                            <div className="border-bottom mb-3 pb-3">
                              <h4 className="fs-20">Seo Details</h4>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Meta Title{' '}
                                    <span className="text-danger">*</span>{' '}
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Meta Keywords{' '}
                                    <span className="text-danger"> *</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Meta Description{' '}
                                    <span className="text-danger"> *</span>
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-end border-top pt-3">
                              <button
                                type="button"
                                className="btn btn-light prev_btn me-3"
                                onClick={handlePrev}
                              >
                                Back
                              </button>
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={handelOpen}
                              >
                                Save &amp; Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </fieldset>
                  )}
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <div className="text-end mb-4">
                    <Link to="#" className="btn btn-light">
                      <i className="ti ti-eye me-2" />
                      Live Preview
                    </Link>
                  </div>
                  <h4 className="mb-4">Quick Preview</h4>
                </div>
                <div className="service-item">
                  <div className="service-img">
                    <div className="slide-images">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          src="assets/img/services/service-27.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <span className="trend-tag">Car Wash</span>
                  </div>
                  <div className="service-content">
                    <h6 className="text-truncate mb-1">
                      <Link to={routes.serviceDetails1}>Electrical Services</Link>
                    </h6>
                    <p className="fw-medium fs-14 mb-3">
                      <i className="ti ti-map-pin me-1" />
                      Montana, USA
                    </p>
                    <p className="service-price">
                      $20.00{' '}
                      <span className="text-decoration-line-through">
                        $25.00
                      </span>
                      <span> /hr</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal centered show={showModal}>
        <div className="modal-body">
          <div className="text-center py-4">
            <span className="success-check mb-3 mx-auto">
              <i className="ti ti-check" />
            </span>
            <h4 className="mb-2">Service Created Successfullly</h4>
            <p>
              “Electrical Services” has been Created, and updated on your
              Service List
            </p>
            <div className="f-flex align-items-center justify-content-center mt-3">
              <Link to="#" className="btn btn-light me-3" onClick={handleClose}>
                Close
              </Link>
              <Link
                to={routes.serviceDetails1}
                className="btn btn-linear-primary"
              >
                Preview
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateService;
