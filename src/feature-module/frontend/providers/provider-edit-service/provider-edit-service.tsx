import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const ProviderEditService = () => {
  dayjs.extend(customParseFormat);

  const onChange = (time: any, timeString: any) => {
    console.log(time, timeString);
  };
  const routes = all_routes;
  const [currentStep, setCurrentStep] = useState(1);
  const [addList, setAddList] = useState(['']);
  const [selectedLanguage, setselectedLanguage] = useState();
  const [selectedSub, setselectedSub] = useState();
  const handleNext = () =>{
    setCurrentStep(currentStep + 1);
  }
  const handlePrev = () =>{
    setCurrentStep(currentStep - 1);
  }
  const handelAdd = () => {
    setAddList([...addList, ' ']);
  };
  const handelRemove = (index: any) => {
    const list = [...addList];
    list.splice(index, 1);
    setAddList(list);
  };
  const [images, setImages] = useState([
    'assets/img/services/service-01.jpg',
    'assets/img/services/service-02.jpg',
    'assets/img/services/service-03.jpg',
    'assets/img/services/service-04.jpg',
  ]);
  const deleteImage = (index: any) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };
  const category = [
    { name: 'Car wash' },
    { name: 'House Cleaning' },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-md-4">
                <div className="provider-subtitle">
                  <h6>Edit Service</h6>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12 mx-auto">
              {/* Service List */}
              <div className="service-wizard">
              <ul id="progressbar">
                    <li
                      className={
                        currentStep === 1
                          ? 'active'
                          : currentStep > 1
                          ? 'activated'
                          : ''
                      }
                    >
                      <div className="multi-step-icon span-info">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </div>
                      <div className="multi-step-info">
                        <h6>Information</h6>
                      </div>
                    </li>
                    <li
                      className={
                        currentStep === 2
                          ? 'active'
                          : currentStep > 2
                          ? 'activated'
                          : ''
                      }
                    >
                      <div className="multi-step-icon">
                        <span>
                          <i className="fa-regular fa-clock" />
                        </span>
                      </div>
                      <div className="multi-step-info">
                        <h6>Availability</h6>
                      </div>
                    </li>
                    <li
                      className={
                        currentStep === 3
                          ? 'active'
                          : currentStep > 3
                          ? 'activated'
                          : ''
                      }
                    >
                      <div className="multi-step-icon">
                        <span>
                          <i className="fa-regular fa-map" />
                        </span>
                      </div>
                      <div className="multi-step-info">
                        <h6>Location</h6>
                      </div>
                    </li>
                    <li
                      className={
                        currentStep === 4
                          ? 'active'
                          : currentStep > 4
                          ? 'activated'
                          : ''
                      }
                    >
                      <div className="multi-step-icon">
                        <span>
                          <Icon.Image />
                        </span>
                      </div>
                      <div className="multi-step-info">
                        <h6>Gallery</h6>
                      </div>
                    </li>
                    <li
                      className={
                        currentStep === 5
                          ? 'active'
                          : currentStep > 5
                          ? 'activated'
                          : ''
                      }
                    >
                      <div className="multi-step-icon">
                        <span>
                          <i className="fa-solid fa-chart-bar" />
                        </span>
                      </div>
                      <div className="multi-step-info">
                        <h6>Seo</h6>
                      </div>
                    </li>
                  </ul>
              </div>
              {/* /Service List */}
              <div className="service-inform-fieldset">
                {/* Service Information */}
                {currentStep === 1 && (
                <fieldset id="first-field">
                  <div className="card add-service">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="sub-title">
                          <h6>Service Information</h6>
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">
                            Service Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Services Name"
                            defaultValue="Car Repair Services"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">Category</label>
                          <Dropdown
                                  value={selectedLanguage}
                                  onChange={(e) => setselectedLanguage(e.value)}
                                  options={category}
                                  optionLabel="name"
                                  placeholder="Car Wash"
                                  className="select service-select"
                                />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">Sub Category</label>
                          <Dropdown
                                  value={selectedSub}
                                  onChange={(e) => setselectedSub(e.value)}
                                  options={category}
                                  optionLabel="name"
                                  placeholder="House Cleaning"
                                  className="select service-select"
                                />                     

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label d-block">
                            Price
                            <span className="brief-bio float-end">
                              Set 0 for free
                            </span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={100}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label d-block">
                            Duration
                          </label>
                          <div className="form-duration">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="45 mins"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <label className="col-form-label">Description</label>
                          <textarea
                            className="form-control ck-editor"
                            defaultValue={
                              'Car wash is a facility used to clean the exterior and, in some cases, the interior of motor vehicles.'
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card add-service">
                    <div className="add-service-toggle">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="sub-title">
                            <h6>Additional Service</h6>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="status-toggle sml-status float-sm-end">
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                            />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="addservice-info">
                          {addList.map((add, index) => (
                            <div className="row service-cont" key={index}>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="col-form-label">Additional Service</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Car Repair"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label className="col-form-label">
                                    Price
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="200"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="d-flex">
                                  <div className="form-group w-100">
                                    <label className="col-form-label">
                                      Duration
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="60 min"
                                    />
                                  </div>
                                  <div
                                    className="form-group"
                                    onClick={handelRemove}
                                  >
                                    <label className="col-form-label">
                                      &nbsp;
                                    </label>
                                    <Link
                                      to="#"
                                      className="btn btn-danger-outline trash"
                                    >
                                      <i className="far fa-trash-alt"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                    <Link to="#" className="add-text add-extra" onClick={handelAdd}>
                      <i className="feather-plus-circle" /> Add Additional
                      Service
                    </Link>
                  </div>
                  <div className="card add-service">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="sub-title">
                          <h6>Video</h6>
                        </div>
                        <div className="form-group mb-0">
                          <label className="col-form-label">Video Link</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="https://www.youtube.com/shorts/Lf-Z7H8bZ8o"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field-bottom-btns">
                        <div className="field-btns">
                          <button
                            className="btn btn-primary next_btn"
                            type="button" onClick={handleNext}
                          >
                            Next <i className="fa-solid fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                )}
                {/* /Service Information */}
               
                {/* Availability */}
                {currentStep === 2 && (
                <fieldset style={{ display: 'block' }}>
                  <div className="card add-service">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="sub-title">
                          <h6>Availability</h6>
                        </div>
                      </div>
                      <div className="col-md-12">
                        {/* Timeslot */}
                        <div className="timeslot-sec availablt-time-slots">
                          {/* Schedule Nav */}
                          <label className="col-form-label">
                            Configure Time Slots
                          </label>
                          <div className="schedule-nav">
                            <ul className="nav">
                              <li className="nav-item">
                                <Link
                                  className="nav-link active"
                                  data-bs-toggle="tab"
                                  to="#all_days"
                                >
                                  All Days
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  to="#slot_monday"
                                >
                                  Monday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  to="#slot_tuesday"
                                >
                                  Tuesday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  to="#slot_wednesday"
                                >
                                  Wednesday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  to="#slot_thursday"
                                >
                                  Thursday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  to="#slot_friday"
                                >
                                  Friday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  to="#slot_saturday"
                                >
                                  Saturday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                  to="#slot_sunday"
                                >
                                  Sunday
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* /Schedule Nav */}
                          <div className="tab-content pt-0">
                            <div className="tab-pane active" id="all_days">
                              <div className="hours-info">
                                <h4 className="nameof-day">All Days</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                      <TimePicker
                                            className="input-group-text"
                                            onChange={onChange}
                                            bordered={false}
                                            defaultValue={dayjs(
                                              '00:00:00',
                                              'HH:mm:ss',
                                            )}
                                          />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                      <TimePicker
                                            className="input-group-text"
                                            onChange={onChange}
                                            bordered={false}
                                            defaultValue={dayjs(
                                              '00:00:00',
                                              'HH:mm:ss',
                                            )}
                                          />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <TimePicker
                                              className="input-group-text"
                                              onChange={onChange}
                                              bordered={false}
                                              defaultValue={dayjs(
                                                '00:00:00',
                                                'HH:mm:ss',
                                              )}
                                            />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="slot_monday">
                              <div className="hours-info">
                                <h4 className="nameof-day">Monday</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <TimePicker
                                              className="input-group-text"
                                              onChange={onChange}
                                              bordered={false}
                                              defaultValue={dayjs(
                                                '00:00:00',
                                                'HH:mm:ss',
                                              )}
                                            />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="slot_tuesday">
                              <div className="hours-info">
                                <h4 className="nameof-day">Tuesday</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <TimePicker
                                              className="input-group-text"
                                              onChange={onChange}
                                              bordered={false}
                                              defaultValue={dayjs(
                                                '00:00:00',
                                                'HH:mm:ss',
                                              )}
                                            />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="slot_wednesday">
                              <div className="hours-info">
                                <h4 className="nameof-day">Wednesday</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Slot"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="slot_thursday">
                              <div className="hours-info">
                                <h4 className="nameof-day">Thursday</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Slot"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="slot_friday">
                              <div className="hours-info">
                                <h4 className="nameof-day">Friday</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <TimePicker
                                              className="input-group-text"
                                              onChange={onChange}
                                              bordered={false}
                                              defaultValue={dayjs(
                                                '00:00:00',
                                                'HH:mm:ss',
                                              )}
                                            />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="slot_saturday">
                              <div className="hours-info">
                                <h4 className="nameof-day">Saturday</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <TimePicker
                                              className="input-group-text"
                                              onChange={onChange}
                                              bordered={false}
                                              defaultValue={dayjs(
                                                '00:00:00',
                                                'HH:mm:ss',
                                              )}
                                            />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="slot_sunday">
                              <div className="hours-info">
                                <h4 className="nameof-day">Sunday</h4>
                                <div className="row hours-cont">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        From
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        To
                                      </label>
                                      <div className="form-icon">
                                        <input
                                          type="text"
                                          className="form-control timepicker"
                                          placeholder="Select Time"
                                        />
                                        <span className="cus-icon">
                                          <i className="feather-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="col-form-label">
                                        Slots
                                      </label>
                                      <TimePicker
                                              className="input-group-text"
                                              onChange={onChange}
                                              bordered={false}
                                              defaultValue={dayjs(
                                                '00:00:00',
                                                'HH:mm:ss',
                                              )}
                                            />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Timeslot */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field-bottom-btns">
                        <div className="field-btns">
                          <button
                            className="btn btn-primary prev_btn"
                            type="button" onClick={handlePrev}
                          >
                            <i className="fa-solid fa-arrow-left" />
                            Prev
                          </button>
                        </div>
                        <div className="field-btns">
                          <button
                            className="btn btn-primary next_btn"
                            type="button" onClick={handleNext}
                          >
                            Next <i className="fa-solid fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                )}
                
                {/* /Availability */}
               
                {/* Location */}
                {currentStep === 3 && (
                <fieldset style={{display:'block'}}>
                  <div className="card add-service">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="sub-title">
                          <h6>Location</h6>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-form-label">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Address"
                            defaultValue="Maryland City, MD, USA"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Country"
                            defaultValue="USA"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your City"
                            defaultValue="Maryland"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">State</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your State"
                            defaultValue="MD"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">Pincode</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Pincode"
                            defaultValue={629145}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-form-label">
                            Google Maps Place ID
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Maps Place ID"
                            defaultValue={765}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">Latitude</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Latitude Number"
                            defaultValue="value"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">Longitude</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Longitude Number"
                            defaultValue="value"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="map-grid">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                            allowFullScreen={true}
                            aria-hidden="false"
                            tabIndex={0}
                            className="contact-map"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="field-bottom-btns">
                        <div className="field-btns">
                          <button
                            className="btn btn-primary prev_btn"
                            type="button" onClick={handlePrev}
                          >
                            <i className="fa-solid fa-arrow-left" />
                            Prev
                          </button>
                        </div>
                        <div className="field-btns">
                          <button
                            className="btn btn-primary next_btn"
                            type="button" onClick={handleNext}
                          >
                            Next <i className="fa-solid fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                )}
                {/* /Location */}
                {/* Gallery */}
                {currentStep === 4 && (
                <fieldset style={{display:'block'}}>
                  <div className="card add-service">
                    <div className="sub-title">
                      <h6>Gallery</h6>
                    </div>
                    <div className="file-upload">
                      <ImageWithBasePath src="assets/img/icons/upload-icon.svg" alt="image" />
                      <h6>
                        Drag &amp; drop files or <span>Browse</span>
                      </h6>
                      <p>Supported formates: JPEG, PNG</p>
                      <input type="file" accept="video/image" />
                    </div>
                    <div className="file-preview">
                      <label>Select Default Image</label>
                      <ul className="gallery-selected-img">
                            {images.map((image, index) => (
                              <li key={index}>
                                <div className="img-preview">
                                  <ImageWithBasePath
                                    src={image}
                                    alt={`Service Image ${index + 1}`}
                                  />
                                  <Link
                                    to="#"
                                    className="remove-gallery"
                                    onClick={() => deleteImage(index)}
                                  >
                                    <Icon.Trash2
                                      style={{ width: '16px', height: '16px' }}
                                    />
                                  </Link>
                                </div>
                                <label className="custom_check">
                                  <input
                                    type="radio"
                                    name="gallery"
                                    defaultChecked={index === 0}
                                  />
                                  <span className="checkmark" />
                                </label>
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>
                  <div className="field-bottom-btns">
                    <div className="field-btns">
                      <button
                        className="btn btn-primary prev_btn"
                        type="button" onClick={handlePrev}
                      >
                        <i className="fa-solid fa-arrow-left" />
                        Prev
                      </button>
                    </div>
                    <div className="field-btns">
                      <button
                        className="btn btn-primary next_btn"
                        type="button" onClick={handleNext}
                      >
                        Next <i className="fa-solid fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </fieldset>
                )}
                {/* /Gallery */}
                {/* Seo */}
                {currentStep === 5 && (
                <fieldset style={{display:'block'}}>
                  <div className="card add-service">
                    <div className="sub-title">
                      <h6>SEO</h6>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-form-label">Meta Title</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Meta Title"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="col-form-label">
                            Meta Keywords
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Keyword"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <label className="col-form-label">
                            Meta Description
                          </label>
                          <textarea
                            className="form-control"
                            rows={5}
                            defaultValue={'Description'}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field-bottom-btns">
                    <div className="field-btns">
                      <button
                        className="btn btn-primary prev_btn"
                        type="button" onClick={handlePrev}
                      >
                        <i className="fa-solid fa-arrow-left" />
                        Prev
                      </button>
                    </div>
                    <div className="field-btns">
                      <Link
                        to={routes.providerService}
                        className="btn btn-primary done_btn"
                        data-bs-toggle="modal"
                        data-bs-target="#successmodal" 
                      >
                        Next
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </fieldset>
                )}
                {/* /Seo */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inactive Service */}
      <div className="modal fade custom-modal" id="in-active">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 justify-content-between">
              <h5 className="modal-title">Inactive Service</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="write-review">
                <form action={routes.providerService}>
                  <p>Are you sure want to inactive this service?</p>
                  <div className="modal-submit text-end">
                    <Link
                      to="#"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Yes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Inactive Service */}
      {/* Active Service */}
      <div className="modal fade custom-modal" id="active">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 justify-content-between">
              <h5 className="modal-title">Active Service</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="write-review">
                <form action={routes.providerService}>
                  <p>Are you sure want to active this service?</p>
                  <div className="modal-submit text-end">
                    <Link
                      to="#"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Yes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Inactive Service */}
      {/* Delete Service */}
      <div className="modal fade custom-modal" id="del-service">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 justify-content-between">
              <h5 className="modal-title">Delete Service</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="write-review">
                <form action={routes.providerService}>
                  <p>Are you sure want to Delete this service?</p>
                  <div className="modal-submit text-end">
                    <Link
                      to="#"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-primary">
                      Yes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Service */}
      {/* Modal Succss */}
      <div
        className="modal fade add-service-modal"
        id="successmodal"
        tabIndex={-1}
        aria-labelledby="successmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <span>
                <i className="fa-regular fa-circle-check" />
              </span>
              <h3>Success</h3>
              <p>Service has been edited succeessfully</p>
              <div className="popup-btn">
                <Link to={routes.providerService} className="btn btn-primary">
                  Go to Dashboard <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Succss */}
    </>
  );
};

export default ProviderEditService;
