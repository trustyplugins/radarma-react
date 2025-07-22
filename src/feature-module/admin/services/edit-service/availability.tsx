import React, { useState } from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

type props = {
  prevTab: CallableFunction;
  nextTab: CallableFunction;
};

interface InputEvent extends Event {
  target: HTMLInputElement;
}

const Availability: React.FC<props> = ({ prevTab, nextTab }) => {
  dayjs.extend(customParseFormat);

  const [workingHours, setWorkingHours] = useState([
    {
      id: 1,
      from: dayjs('00:00:00', 'HH:mm:ss'),
      to: dayjs('00:00:00', 'HH:mm:ss'),
      slots: '',
    },
  ]);

  const addNewWorkingHourRow = () => {
    const newId = workingHours.length + 1;
    setWorkingHours([
      ...workingHours,
      {
        id: newId,
        from: dayjs('00:00:00', 'HH:mm:ss'),
        to: dayjs('00:00:00', 'HH:mm:ss'),
        slots: '',
      },
    ]);
  };

  const deleteWorkingHourRow = (id: number) => {
    const updatedWorkingHours = workingHours.filter((hour) => hour.id !== id);
    setWorkingHours(updatedWorkingHours);
  };

  const handleTimeChange = (id: number, key: string, value: string) => {
    const updatedWorkingHours = workingHours.map((hour) =>
      hour.id === id ? { ...hour, [key]: value } : hour,
    );
    setWorkingHours(updatedWorkingHours);
  };

  const handleInputChange = (id: number, event: InputEvent) => {
    const { name, value } = event.target;
    const updatedWorkingHours = workingHours.map((hour) =>
      hour.id === id ? { ...hour, [name]: value } : hour,
    );
    setWorkingHours(updatedWorkingHours);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="available-section card-section ">
            <div className="available-heading">
              <h4>Availablity</h4>
            </div>
            {/* Timeslot */}
            <div className="timeslot-sec availablt-time-slots">
              {/* Schedule Nav */}
              <label className="col-form-label">Configure Time Slots</label>
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
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event : any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
                <div className="tab-pane fade" id="slot_monday">
                  <div className="hours-info">
                    <h4 className="nameof-day">Monday</h4>
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event: any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
                <div className="tab-pane fade" id="slot_tuesday">
                  <div className="hours-info">
                    <h4 className="nameof-day">Tuesday</h4>
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event: any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
                <div className="tab-pane fade" id="slot_wednesday">
                  <div className="hours-info">
                    <h4 className="nameof-day">Wednesday</h4>
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event: any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
                <div className="tab-pane fade" id="slot_thursday">
                  <div className="hours-info">
                    <h4 className="nameof-day">Thursday</h4>
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value:any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event: any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
                <div className="tab-pane fade" id="slot_friday">
                  <div className="hours-info">
                    <h4 className="nameof-day">Friday</h4>
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event:any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
                <div className="tab-pane fade" id="slot_saturday">
                  <div className="hours-info">
                    <h4 className="nameof-day">Saturday</h4>
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event: any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
                <div className="tab-pane fade" id="slot_sunday">
                  <div className="hours-info">
                    <h4 className="nameof-day">Sunday</h4>
                    {workingHours.map((hour) => (
                      <div key={hour.id} className="row hours-cont">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>From</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'from', value)
                                }
                                bordered={false}
                                defaultValue={hour.from}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>To</label>
                            <div className="form-availability-field">
                              <TimePicker
                                className="timepicker input-group-text"
                                onChange={(value: any) =>
                                  handleTimeChange(hour.id, 'to', value)
                                }
                                bordered={false}
                                defaultValue={hour.to}
                                format="h:mm A"
                              />
                              <span className="cus-icon">
                                <i className="fe fe-clock" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Slots</label>
                            <input
                              type="text"
                              className="form-control"
                              name="slots"
                              value={hour.slots}
                              onChange={(event: any) =>
                                handleInputChange(hour.id, event)
                              }
                              placeholder="Enter Slot"
                            />
                          </div>
                        </div>
                        {hour.id > 1 && (
                          <div className="col-md-1">
                            <button
                              onClick={() => deleteWorkingHourRow(hour.id)}
                              className="btn btn-danger-outline delete-icon"
                            >
                              <Icon.Trash2 className="react-feather-custom trashicon" />{' '}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="#"
                    className="link-sets add-text add-hours"
                    onClick={addNewWorkingHourRow}
                  >
                    <i className="fe fe-plus-circle" /> Add More
                  </Link>
                </div>
              </div>
            </div>
            {/* Timeslot */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="bottom-btn">
            <div className="field-btns">
              <button
                className="btn btn-prev prev_btn"
                type="button"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                onClick={prevTab}
              >
                <i className="fas fa-arrow-left" /> Prev
              </button>
              <button
                className="btn btn-primary next_btn"
                type="button"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                onClick={nextTab}
              >
                Next <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Availability;
