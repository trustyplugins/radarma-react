import React from 'react';
import * as Icon from 'react-feather';

const Securitymodal = () => {
  return (
    <div>
      {/* Change Password */}
      <div className="modal fade" id="change-password">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Password</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="form-control pass-input"
                    />
                    <span className="fas toggle-password fa-eye-slash" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <div className="pass-group" id="passwordInput">
                    <input
                      type="password"
                      className="form-control pass-inputs"
                    />
                    <span className="fas toggle-passwords fa-eye-slash" />
                  </div>
                  <div className="password-strength" id="passwordStrength">
                    <span id="poor" />
                    <span id="weak" />
                    <span id="strong" />
                    <span id="heavy" />
                  </div>
                  <div id="passwordInfo" />
                </div>
                <div className="mb-4">
                  <label className="form-label">New Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="form-control pass-inputa"
                    />
                    <span className="fas toggle-passworda fa-eye-slash" />
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Password */}
      {/* Change Email */}
      <div className="modal fade" id="change-email">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Email</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Current Email Address</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Email Address</label>
                  <input type="text" className="form-control" />
                  <p>
                    <i className="fa fa-info-circle me-2 ms-1" />
                    New Email Address Only Updated Once You Verified{' '}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="form-label">Current Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="form-control pass-input"
                    />
                    <span className="fas toggle-password fa-eye-slash" />
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Change Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Email */}
      {/* Change Phone Number */}
      <div className="modal fade" id="change-no">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Change Phone Number</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Phone Number</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className="form-control pass-inputs"
                      placeholder="*************"
                    />
                    <span className="fas toggle-passwords fa-eye-slash" />
                  </div>
                </div>
                <div className="mb-4">
                  <i className="fa fa-info-circle me-2 ms-1" />
                  New Phone Number Only Updated Once You Verified
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Change Number
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Phone Number */}
    </div>
  );
};

export default Securitymodal;
