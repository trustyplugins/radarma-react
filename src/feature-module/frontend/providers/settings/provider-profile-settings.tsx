import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from 'primereact/dropdown';
import { TagsInput } from 'react-tag-input-component';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const ProviderProfileSettings = () => {
  const [selectedGender, setGender] = useState(null);
  const [selectedCurrency, setCurrency] = useState(null);
  const [tags] = useState(['English', 'French']);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const gender = [
    { name: 'Select Gender' },
    { name: 'Male' },
    { name: 'Female' },
  ];
  const currency = [
    { name: 'Choose Currency' },
    { name: 'Eur' },
    { name: 'Aud' },
  ];
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h5>Account Settings</h5>
          </div>
        </div>
      </div>
      {/* Profile settings */}
      <div className="row">
        <div className="col-md-10 mx-auto">
          {/* Account Settings */}
          <div className="card mb-0">
            <div className="card-body">
              <h6 className="user-title">Profile Picture</h6>
              <div className="pro-picture">
                <div className="pro-img avatar avatar-xl">
                  <ImageWithBasePath
                    src="assets/img/user/user-02.jpg"
                    alt="user"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="pro-info">
                  <div className="d-flex mb-2">
                    <Link
                      to="#"
                      className="btn btn-dark btn-sm d-flex align-items-center me-3"
                    >
                      <i className="ti ti-cloud-upload me-1" />
                      Upload
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-light btn-sm d-flex align-items-center"
                    >
                      Remove
                    </Link>
                  </div>
                  <p className="fs-14">
                    *image size should be at least 320px big,and less then
                    500kb. Allowed files .png and .jpg.
                  </p>
                </div>
              </div>
              <h6 className="user-title">General Information</h6>
              <div className="general-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">User Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Mobile Number</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Gender</label>
                      <Dropdown
                        value={selectedGender}
                        onChange={(e) => setGender(e.value)}
                        options={gender}
                        optionLabel="name"
                        placeholder="English"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Date of birth</label>
                      <div className=" input-icon react-calender position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}               
                          placeholderText='DD/MM/YYYY'
                          className="form-control datetimepicker w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">Your Bio</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="user-title">Address </h6>
              <div className="row address-info">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Postal Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Currency Code</label>
                    <Dropdown
                        value={selectedCurrency}
                        onChange={(e) => setCurrency(e.value)}
                        options={currency}
                        optionLabel="name"
                        placeholder="Choose Currency"
                        className="select w-100"
                      />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Language</label>
                    <TagsInput
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-expect-error
                          className="input-tags form-control"
                          tags={tags}
                          value={tags}
                        />
                  </div>
                </div>
              </div>
              <div className="acc-submit d-flex justify-content-end">
                <Link to="#" className="btn btn-light me-3">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-dark">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Account Settings */}
      </div>
      {/* /profile-settings */}
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  );
};

export default ProviderProfileSettings;
