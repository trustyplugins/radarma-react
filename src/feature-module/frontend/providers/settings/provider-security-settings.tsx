import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import PhoneInput from 'react-phone-input-2';
const ProviderSecuritySettings = () => {
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
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>Security Settings</h5>
        </div>
      </div>
      {/* Security Settings */}
      <div className="row">
        <div className="col-xl-4 col-md-4 d-flex mb-3">
          <div className="linked-item flex-fill">
            <div className="linked-wrap">
              <div className="linked-acc">
                <span className="link-icon rounded-circle">
                  <i className="ti ti-lock" />
                </span>
                <div className="linked-info">
                  <h6 className="fs-16">Password</h6>
                  <p className="text-gray fs-12">
                    Last Changed :{" "}
                    <span className="text-dark fs-12">
                      22 Sep 2023, 10:30:55 AM
                    </span>
                  </p>
                </div>
              </div>
              <div className="linked-action">
                <button
                  className="btn btn-dark btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#change-password"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 d-flex mb-3">
          <div className="linked-item flex-fill">
            <div className="linked-wrap">
              <div className="linked-acc">
                <span className="link-icon rounded-circle">
                  <i className="ti ti-fingerprint-scan" />
                </span>
                <div className="linked-info row align-items-center">
                  <div className="col-md-9">
                    <h6 className="fs-16">Two Factor </h6>
                    <p className="text-gray fs-12 text-truncate">
                      Strengthens security with an extra step.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className=" d-flex align-items-center justify-content-end form-check form-switch mb-3">
                      <input
                        type="checkbox"
                        id="status-two"
                        className="form-check-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="linked-action">
                <button className="btn btn-dark btn-sm">Disable</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 d-flex mb-3">
          <div className="linked-item flex-fill">
            <div className="linked-wrap">
              <div className="linked-acc">
                <span className="link-icon rounded-circle">
                  <i className="ti ti-device-mobile" />
                </span>
                <div className="linked-info row align-items-center">
                  <div className="col-md-9">
                    <h6 className="fs-16 text-truncate">
                      Phone Number Verification{" "}
                    </h6>
                    <p className="text-gray fs-12 text-truncate">
                      Verified Mobile Number :{" "}
                      <span className="text-dark fs-12"> +99264710583</span>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                      <span>
                        <i className="ti ti-circle-check-filled text-success" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="linked-action">
                <button
                  className="btn btn-dark btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#change-phone-number"
                >
                  Change
                </button>
                <button className="btn btn-light btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 d-flex mb-3">
          <div className="linked-item flex-fill">
            <div className="linked-wrap">
              <div className="linked-acc">
                <span className="link-icon rounded-circle">
                  <i className="ti ti-mail" />
                </span>
                <div className="linked-info row align-items-center">
                  <div className="col-md-9">
                    <h6 className="fs-16 text-truncate">Email Verification</h6>
                    <p className="text-gray fs-12 text-truncate">
                      Verified Email :
                      <span className="text-dark fs-12"> info@example.com</span>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                      <span>
                        <i className="ti ti-circle-check-filled text-success" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="linked-action">
                <button
                  className="btn btn-dark btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#change-email"
                >
                  Change
                </button>
                <button className="btn btn-light btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 d-flex mb-3">
          <div className="linked-item flex-fill">
            <div className="linked-wrap">
              <div className="linked-acc">
                <span className="link-icon rounded-circle">
                  <i className="ti ti-device-imac" />
                </span>
                <div className="linked-info row align-items-center">
                  <div className="col-md-9">
                    <h6 className="fs-16 text-truncate">Device Management</h6>
                    <p className="text-gray fs-12 text-truncate">
                      Last Changed :
                      <span className="text-dark fs-12">
                        {" "}
                        22 Jul 2024, 10:30:55 AM
                      </span>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                      <span>
                        <i className="ti ti-circle-check-filled text-success" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="linked-action">
                <Link
                  to={routes.providerDeviceManagement}
                  className="btn btn-dark btn-sm"
                >
                  Manage
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 d-flex mb-3">
          <div className="linked-item flex-fill">
            <div className="linked-wrap">
              <div className="linked-acc">
                <span className="link-icon rounded-circle">
                  <i className="ti ti-user-edit" />
                </span>
                <div className="linked-info row align-items-center">
                  <div className="col-md-9">
                    <h6 className="fs-16 text-truncate">Account Activity</h6>
                    <p className="text-gray fs-12 text-truncate">
                      Last Changed :
                      <span className="text-dark fs-12">
                        {" "}
                        22 Jul 2024, 10:30:55 AM
                      </span>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex justify-content-end">
                      <span>
                        <i className="ti ti-circle-check-filled text-success" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="linked-action">
                <Link
                  to={routes.providerLoginActivity}
                  className="btn btn-dark btn-sm"
                >
                  Manage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Security Settings */}
    </div>
  </div>
  {/* /Page Wrapper */}
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
          <form>
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


  )
}

export default ProviderSecuritySettings