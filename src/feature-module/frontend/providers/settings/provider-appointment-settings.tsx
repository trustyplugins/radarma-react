import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';

const ProviderAppointmentSettings = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);

  const value = [{ name: '30 Min' }, { name: '40 Min' }, { name: '50 Min' }];
  const value2 = [{ name: '30 Minutes' }, { name: '40 Minutes' }, { name: '50 Minutes' }];
  const value3 = [{ name: '4 Months' }, { name: '5 Months' }, { name: '6 Months' }];


    return (
      <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <h5>Appointment Settings</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 d-flex">
              {/* Appointment Settings */}
              <div className="appointment-setting-list flex-fill">
                <div className="appoint-wrapper">
                  <h5>Appointment Time Intervals</h5>
                  <p>Set the appointment time intervals</p>
                </div>
                <div className="form-group">
                <Dropdown
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.value)}
                        options={value}
                        optionLabel="name"
                        placeholder="30 Min"
                        className="select provider-select"
                      />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-flex">
              <div className="appointment-setting-list flex-fill">
                <div className="appoint-wrapper">
                  <h5>Minimum Advance Booking Time</h5>
                  <p>Minimum advance booking time (1 hours to 10 days)</p>
                </div>
                <div className="form-group">
                <Dropdown
                        value={selectedValue2}
                        onChange={(e) => setSelectedValue2(e.value)}
                        options={value2}
                        optionLabel="name"
                        placeholder="30 Minutes"
                        className="select provider-select"
                      />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-flex">
              <div className="appointment-setting-list flex-fill">
                <div className="appoint-wrapper">
                  <h5>Appointment Auto Confirm</h5>
                  <p>Enable/disable appointment auto confirm</p>
                </div>
                <div className="  d-flex align-items-center form-check form-switch">
                  <input
                    type="checkbox"
                    id="status-one"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-flex">
              <div className="appointment-setting-list flex-fill">
                <div className="appoint-wrapper">
                  <h5>Allow Multiple Booking for Same Time Slot</h5>
                  <p>Set the appointment time intervals</p>
                </div>
                <div className="  d-flex align-items-center form-check form-switch">
                  <input
                    type="checkbox"
                    id="status-two"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 d-flex">
              <div className="appointment-setting-list flex-fill">
                <div className="appoint-wrapper">
                  <h5>Maximum Advance Booking Time</h5>
                  <p>Set maximum advance booking time (upto 5 years)</p>
                </div>
                <div className="form-group">
                <Dropdown
                        value={selectedValue3}
                        onChange={(e) => setSelectedValue3(e.value)}
                        options={value3}
                        optionLabel="name"
                        placeholder="4 Months"
                        className="select provider-select"
                      />
                </div>
              </div>
            </div>
            {/* /Appointment Settings */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
    
      );
}

export default ProviderAppointmentSettings