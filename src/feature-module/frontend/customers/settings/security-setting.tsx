import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';

const SecuritySetting = () => {
  const routes = all_routes;
  const [selectedItems, setSelectedItems] = useState(Array(6).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const [phone, setPhone] = useState('');
  const [phone2, setPhone2] = useState('');
  const handleOnChange = (value: string, country: string) => {
    console.log(value, country);
    setPhone(value);
  };
  const handleOnChange2 = (value: string, country: string) => {
    console.log(value, country);
    setPhone2(value);
  };
  return (
    <>
<BreadCrumb title="Settings" item1="Customer" item2="Settings" />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 ">
                <CustomerSideBar />
              </div>
              <div className="col-xl-9 col-lg-8">
                <h4 className="mb-3">Security Settings</h4>
                <div className="row justify-content-center align-items-center">
                  <div className="col-xxl-4 col-md-6">
                    <div className="card dash-widget-2">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span className="set-icon bg-light d-flex justify-content-center align-items-center rounded-circle p-1 me-2">
                            <i className="ti ti-lock text-dark fs-20" />
                          </span>
                          <div>
                            <p className="mb-0 text-gray-9 fw-medium">Password</p>
                            <span className="fs-12 text-truncate">
                              Last Changed :{" "}
                              <span className="text-gray-9">22 Jul 2024, 10:30:55 AM</span>
                            </span>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-dark"
                          data-bs-toggle="modal"
                          data-bs-target="#change-password"
                        >
                          Change Password
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card dash-widget-2">
                      <div className="card-body">
                        <div className="d-flex  align-items-center mb-3">
                          <span className="set-icon bg-light d-flex justify-content-center align-items-center rounded-circle p-1 me-2">
                            <i className="ti  ti-fingerprint-scan text-dark fs-20" />
                          </span>
                          <div className="sec-item row align-items-center">
                            <div className="col-lg-9 col-md-9 d-flex">
                              <div>
                                <h6 className="fs-16 mb-2">Two Factor </h6>
                                <p className="text-gray fs-12 text-truncate">
                                  Strengthens security with an extra step.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-3 d-flex">
                              <div className=" d-flex align-items-center justify-content-end form-check form-switch text-end mb-3">
                                <input
                                  type="checkbox"
                                  id="status-two"
                                  className="form-check-input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link to="#" className="btn btn-dark">
                          Disable
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card dash-widget-2">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span className="set-icon bg-light d-flex justify-content-center align-items-center rounded-circle p-1">
                            <i className="ti ti-device-mobile text-dark fs-20" />
                          </span>
                          <div className="ms-2">
                            <div className="d-flex">
                              <p className="mb-0 text-gray-9 text-truncatefw-medium me-1">
                                Phone Number Verification{" "}
                              </p>
                              <span className="set-icon-2 badge badge-success d-flex justify-content-center align-items-center rounded-circle ">
                                <i className="ti ti-check" />
                              </span>
                            </div>
                            <span className="fs-12">
                              Verified Mobile Number :
                              <span className="text-gray-9">+99264710583</span>
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="btn btn-dark me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#change-phone"
                          >
                            Change
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#del-account"
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card dash-widget-2">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span className="set-icon bg-light d-flex justify-content-center align-items-center rounded-circle p-1">
                            <i className="ti ti-mail text-dark fs-20" />
                          </span>
                          <div className="ms-2">
                            <div className="d-flex">
                              <p className="mb-0 text-gray-9 fw-medium me-1">
                                Email Verification
                              </p>
                              <span className="set-icon-2 badge badge-success d-flex justify-content-center align-items-center rounded-circle ">
                                <i className="ti ti-check" />
                              </span>
                            </div>
                            <span className="fs-12 text-truncate">
                              Verified Email :
                              <span className="text-gray-9">info@example.com</span>
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="btn btn-dark me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#change-email"
                          >
                            Change
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#del-account"
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card dash-widget-2">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span className="set-icon bg-light d-flex justify-content-center align-items-center rounded-circle p-1 me-2">
                            <i className="ti ti-device-imac text-dark fs-20" />
                          </span>
                          <div>
                            <p className="mb-0 text-gray-9 fw-medium">Device Management</p>
                            <span className="fs-12 text-truncate">
                              Last Changed :{" "}
                              <span className="text-gray-9">22 Jul 2024, 10:30:55 AM</span>
                            </span>
                          </div>
                        </div>
                        <Link to={routes.deviceManagement} className="btn btn-dark">
                          Manage
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card dash-widget-2">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <span className="set-icon bg-light d-flex justify-content-center align-items-center rounded-circle p-1 me-2">
                            <i className="ti ti-user-edit text-dark fs-20" />
                          </span>
                          <div>
                            <p className="mb-0 text-gray-9 fw-medium">Account Activity</p>
                            <span className="fs-12 text-truncate">
                              Last Changed :{" "}
                              <span className="text-gray-9">22 Jul 2024, 10:30:55 AM</span>
                            </span>
                          </div>
                        </div>
                        <Link to={routes.customerLoginActivity} className="btn btn-dark">
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <>
  {/* Change Password */}
  <div className="modal fade custom-modal" id="change-password">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Change Password</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form >
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <div className="pass-group">
                <input
                  type={selectedItems[1] ? 'text':'password'}
                  className="form-control pass-input"
                  placeholder="*************"
                />
                <span onClick={() => handleItemClick(1)} className={`toggle-password feather ${selectedItems[1] ? 'icon-eye' : 'icon-eye-off'}`} />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <div className="pass-group" id="passwordInput">
                <input
                  type={selectedItems[2] ? 'text':'password'}
                  className="form-control pass-input"
                  placeholder="*************"
                />
                <span onClick={() => handleItemClick(2)} className={`toggle-password feather ${selectedItems[2] ? 'icon-eye' : 'icon-eye-off'}`} />
              </div>
              <div className="password-strength" id="passwordStrength">
                <span id="poor" />
                <span id="weak" />
                <span id="strong" />
                <span id="heavy" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <div className="pass-group">
                <input
                  type={selectedItems[3] ? 'text':'password'}
                  className="form-control pass-input"
                  placeholder="*************"
                />
                <span onClick={() => handleItemClick(3)} className={`toggle-password feather ${selectedItems[3] ? 'icon-eye' : 'icon-eye-off'}`} />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer border-top">
          <div className="acc-submit">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button className="btn btn-dark" type="button" data-bs-dismiss="modal">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change Password */}
  {/* Change Email */}
  <div className="modal fade custom-modal" id="change-email">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Change Email</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form >
            <div className="wallet-add">
              <div className="mb-3">
                <label className="form-label">Current Email Address</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  New Email Address <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <div className="pass-group">
                  <input
                    type={selectedItems[4] ? 'text':'password'}
                    className="form-control pass-input"
                    placeholder="*************"
                  />
                  <span onClick={() => handleItemClick(4)} className={`toggle-password feather ${selectedItems[4] ? 'icon-eye' : 'icon-eye-off'}`} />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer border-top">
          <div className="acc-submit">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button className="btn btn-dark" type="button" data-bs-dismiss="modal">
              Change Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change Email */}
  {/* Change Phone */}
  <div className="modal fade custom-modal" id="change-phone">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Change Phone Number</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form >
            <div className="wallet-add">
              <div className="mb-3">
                <label className="form-label">Current Phone Number</label>
                
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={handleOnChange}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  New Phone Number <span className="text-danger">*</span>
                </label>
                <PhoneInput
                  country={'us'}
                  value={phone2}
                  onChange={handleOnChange2}
                  placeholder="Enter New Phone Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <div className="pass-group">
                  <input
                    type={selectedItems[5] ? 'text':'password'}
                    className="form-control pass-input"
                    placeholder="*************"
                  />
                  <span onClick={() => handleItemClick(5)} className={`toggle-password feather ${selectedItems[5] ? 'icon-eye' : 'icon-eye-off'}`} />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer border-top">
          <div className="acc-submit">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button className="btn btn-dark" type="button" data-bs-dismiss="modal">
              Change Number
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Change Phone */}
</>

    </>
  );
};

export default SecuritySetting;
