import React, { useState } from 'react';
import * as Icon from 'react-feather';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
import { Link } from 'react-router-dom';

dayjs.extend(customParseFormat);
const onChange = (time: any, timeString: any) => {
  console.log(time, timeString);
};

const ProviderAvailability = () => {
  const [hoursArray1, setHoursArray1] = useState([0]);
  const [hoursArray2, setHoursArray2] = useState([0]);
  const [hoursArray3, setHoursArray3] = useState([0]);
  const [hoursArray4, setHoursArray4] = useState([0]);
  const [hoursArray5, setHoursArray5] = useState([0]);
  const [hoursArray6, setHoursArray6] = useState([0]);
  const [hoursArray7, setHoursArray7] = useState([0]);

  const addHours = (arrayName:any) => {
    if (arrayName === 'hoursArray1') {
      setHoursArray1([...hoursArray1, 1]);
    } else if (arrayName === 'hoursArray2') {
      setHoursArray2([...hoursArray2, 1]);
    } else if (arrayName === 'hoursArray3') {
      setHoursArray3([...hoursArray3, 1]);
    } else if (arrayName === 'hoursArray4') {
      setHoursArray4([...hoursArray4, 1]);
    } else if (arrayName === 'hoursArray5') {
      setHoursArray5([...hoursArray5, 1]);
    } else if (arrayName === 'hoursArray6') {
      setHoursArray6([...hoursArray6, 1]);
    } else if (arrayName === 'hoursArray7') {
      setHoursArray7([...hoursArray7, 1]);
    }
  };

  const deleteHours = (arrayName: any, index: any) => {
    if (arrayName === 'hoursArray1') {
      const newArray = [...hoursArray1];
      newArray.splice(index, 1);
      setHoursArray1(newArray);
    } else if (arrayName === 'hoursArray2') {
      const newArray = [...hoursArray2];
      newArray.splice(index, 1);
      setHoursArray2(newArray);
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="provider-subtitle">
                  <h6>Availability</h6>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Availability Days */}
          <div className="availability-sec">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="row">
                  <div className="col-sm-6">
                    <h6>All Days</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input
                        type="checkbox"
                        id="status_2"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="status_2" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="day-info">
                    {hoursArray1.map((hours, index) => (
                      <div className="row day-cont" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">From</label>
                            <div className="form-icon">
                              <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                               
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                              <span className="cus-icon">
                                <Icon.Clock className="react-feather-custom" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="form-group w-100">
                              <label className="col-form-label">To</label>
                              <div className="form-icon">
                               <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                 
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                                <span className="cus-icon">
                                  <Icon.Clock className="react-feather-custom" />
                                </span>
                              </div>
                            </div>
                            {index > 0 && (
                            <div className="form-group">
                              <label className="col-form-label">&nbsp;</label>
                              <Link
                                to="#"
                                className="btn btn-danger-outline trash"  onClick={() =>
                                      deleteHours('hoursArray1', index)
                                    }
                              >
                                <i className="far fa-trash-alt" />
                              </Link>
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <Link to="#" className="add-text add-day" onClick={() => addHours('hoursArray1')}>
                        <Icon.PlusCircle className="react-feather-custom" /> Add Hours
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6>Monday</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input
                        type="checkbox"
                        id="status_3"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="status_3" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="day-info">
                    {hoursArray2.map((hours, index) => (
                      <div className="row day-cont" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">From</label>
                            <div className="form-icon">
                              <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                 
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                              <span className="cus-icon">
                                <Icon.Clock className="react-feather-custom" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="form-group w-100">
                              <label className="col-form-label">To</label>
                              <div className="form-icon">
                               <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                                <span className="cus-icon">
                                  <Icon.Clock className="react-feather-custom" />
                                </span>
                              </div>
                            </div>
                            {index > 0 && (
                            <div className="form-group">
                              <label className="col-form-label">&nbsp;</label>
                              <Link
                                to="#"
                                className="btn btn-danger-outline trash"  onClick={() =>
                                      deleteHours('hoursArray2', index)
                                    }
                              >
                                <i className="far fa-trash-alt" />
                              </Link>
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <Link to="#" className="add-text add-day" onClick={() => addHours('hoursArray2')}>
                        <Icon.PlusCircle className="react-feather-custom" /> Add Hours
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6>Tuesday</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input
                        type="checkbox"
                        id="status_21"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="status_21" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="day-info">
                    {hoursArray3.map((hours, index) => (
                      <div className="row day-cont" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">From</label>
                            <div className="form-icon">
                              <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                              <span className="cus-icon">
                                <Icon.Clock className="react-feather-custom" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="form-group w-100">
                              <label className="col-form-label">To</label>
                              <div className="form-icon">
                               <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                                <span className="cus-icon">
                                  <Icon.Clock className="react-feather-custom" />
                                </span>
                              </div>
                            </div>
                            {index > 0 && (
                            <div className="form-group">
                              <label className="col-form-label">&nbsp;</label>
                              <Link
                                to="#"
                                className="btn btn-danger-outline trash"  onClick={() =>
                                      deleteHours('hoursArray3', index)
                                    }
                              >
                                <i className="far fa-trash-alt" />
                              </Link>
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <Link to="#" className="add-text add-day" onClick={() => addHours('hoursArray3')}>
                        <Icon.PlusCircle className="react-feather-custom" /> Add Hours
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6>Wednesday</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input
                        type="checkbox"
                        id="status_4"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="status_4" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="day-info">
                    {hoursArray4.map((hours, index) => (
                      <div className="row day-cont" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">From</label>
                            <div className="form-icon">
                              <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                              <span className="cus-icon">
                                <Icon.Clock className="react-feather-custom" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="form-group w-100">
                              <label className="col-form-label">To</label>
                              <div className="form-icon">
                               <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                                <span className="cus-icon">
                                  <Icon.Clock className="react-feather-custom" />
                                </span>
                              </div>
                            </div>
                            {index > 0 && (
                            <div className="form-group">
                              <label className="col-form-label">&nbsp;</label>
                              <Link
                                to="#"
                                className="btn btn-danger-outline trash"  onClick={() =>
                                      deleteHours('hoursArray4', index)
                                    }
                              >
                                <i className="far fa-trash-alt" />
                              </Link>
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <Link to="#" className="add-text add-day" onClick={() => addHours('hoursArray4')}>
                        <Icon.PlusCircle className="react-feather-custom" /> Add Hours
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6>Thursday</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input
                        type="checkbox"
                        id="status_5"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="status_5" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="day-info">
                    {hoursArray5.map((hours, index) => (
                      <div className="row day-cont" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">From</label>
                            <div className="form-icon">
                              <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                              <span className="cus-icon">
                                <Icon.Clock className="react-feather-custom" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="form-group w-100">
                              <label className="col-form-label">To</label>
                              <div className="form-icon">
                               <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                                <span className="cus-icon">
                                  <Icon.Clock className="react-feather-custom" />
                                </span>
                              </div>
                            </div>
                            {index > 0 && (
                            <div className="form-group">
                              <label className="col-form-label">&nbsp;</label>
                              <Link
                                to="#"
                                className="btn btn-danger-outline trash"  onClick={() =>
                                      deleteHours('hoursArray5', index)
                                    }
                              >
                                <i className="far fa-trash-alt" />
                              </Link>
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <Link to="#" className="add-text add-day" onClick={() => addHours('hoursArray5')}>
                        <Icon.PlusCircle className="react-feather-custom" /> Add Hours
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6>Friday</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input
                        type="checkbox"
                        id="status_6"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="status_6" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="day-info">
                    {hoursArray6.map((hours, index) => (
                      <div className="row day-cont" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">From</label>
                            <div className="form-icon">
                              <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                              <span className="cus-icon">
                                <Icon.Clock className="react-feather-custom" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="form-group w-100">
                              <label className="col-form-label">To</label>
                              <div className="form-icon">
                               <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                                <span className="cus-icon">
                                  <Icon.Clock className="react-feather-custom" />
                                </span>
                              </div>
                            </div>
                            {index > 0 && (
                            <div className="form-group">
                              <label className="col-form-label">&nbsp;</label>
                              <Link
                                to="#"
                                className="btn btn-danger-outline trash"  onClick={() =>
                                      deleteHours('hoursArray6', index)
                                    }
                              >
                                <i className="far fa-trash-alt" />
                              </Link>
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <Link to="#" className="add-text add-day" onClick={() => addHours('hoursArray6')}>
                        <Icon.PlusCircle className="react-feather-custom" /> Add Hours
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6>Saturday</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input
                        type="checkbox"
                        id="status_7"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="status_7" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="day-info">
                    {hoursArray7.map((hours, index) => (
                      <div className="row day-cont" key={index}>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-form-label">From</label>
                            <div className="form-icon">
                              <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                              <span className="cus-icon">
                                <Icon.Clock className="react-feather-custom" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex">
                            <div className="form-group w-100">
                              <label className="col-form-label">To</label>
                              <div className="form-icon">
                               <TimePicker
                                placeholder="Select Time"
                                className="form-control timepicker"
                                onChange={onChange}
                                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                              />
                                <span className="cus-icon">
                                  <Icon.Clock className="react-feather-custom" />
                                </span>
                              </div>
                            </div>
                            {index > 0 && (
                            <div className="form-group">
                              <label className="col-form-label">&nbsp;</label>
                              <Link
                                to="#"
                                className="btn btn-danger-outline trash"  onClick={() =>
                                      deleteHours('hoursArray7', index)
                                    }
                              >
                                <i className="far fa-trash-alt" />
                              </Link>
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                    <div className="form-group">
                      <Link to="#" className="add-text add-day" onClick={() => addHours('hoursArray7')}>
                        <Icon.PlusCircle className="react-feather-custom" /> Add Hours
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h6>Sunday</h6>
                    <h6 className="mb-sm-0">Today Closed</h6>
                  </div>
                  <div className="col-sm-6">
                    <div className="status-toggle sml-status d-flex justify-content-sm-end align-items-center">
                      <input type="checkbox" id="status_8" className="check" />
                      <label htmlFor="status_8" className="checktoggle">
                        checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Availability Days */}
        </div>
      </div>
    </>
  );
};

export default ProviderAvailability;
