import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown } from 'primereact/dropdown';
import { TagsInput } from 'react-tag-input-component';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomerProfile = () => {
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
    <BreadCrumb title="Settings" item1="Customer" item2="Settings" />
    <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 ">
                <CustomerSideBar />
              </div>
              <div className="col-xl-9 col-lg-8">
              <h4 className="mb-3">Account Settings</h4>
              <h6 className="mb-4">Profile Picture</h6>
              <div className="d-flex align-items-center mb-4">
                <span className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </span>
                <div>
                  <Link to="" className="btn btn-dark me-2 mb-2">
                    <i className="feather icon-upload-cloud me-1" />
                    Upload
                  </Link>
                  <Link to="#" className="btn btn-light mb-2">
                    Remove
                  </Link>
                  <p>
                    *image size should be at least 320px big,and less then 500kb. Allowed
                    files .png and .jpg.
                  </p>
                </div>
              </div>
              <h6>General Information</h6>
              <div className="general-info mb-0">
                <div className="row mb-4">
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
                  <div className="col-md-12 mb-3">
                    <div className="mb-3">
                      <label className="form-label d-block">Your Bio</label>
                      <textarea className="form-control" rows={5} defaultValue={""} />
                    </div>
                  </div>
                </div>
                <h6 className="user-title">Address </h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className=" mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" mb-3">
                      <label className="form-label">Country</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" mb-3">
                      <label className="form-label">State</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" mb-3">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" mb-3">
                      <label className="form-label">Postal Code</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" mb-3">
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
                <div className="acc-submit d-flex justify-content-end align-items-center">
                  <Link to="#" className="btn btn-light me-2">
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-dark">
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
