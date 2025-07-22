import React from 'react'
import { Link } from 'react-router-dom';
import SettingsSidebar from '../common/settingssidebar';
const AuthenticationSettings = () => {
  return (

    <div className="page-wrapper page-settings">
     <SettingsSidebar />
      <div className="content w-100">
        <div className="content-page-header">
          <h5>Authentication Settings</h5>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-heading">
              <h4>Allow Registration</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="active-switch mb-2">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
              <ul>
                <li>
                  <label className="checkboxs">
                    <input type="checkbox" />
                    <span><i /></span>
                    <b className="check-content">Invite Only</b>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-heading">
              <h4>Verfication Require</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex align-items-center">
            <div className="form-group-set authentication-heading">
              <h4>Verfication Expired</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="form-group mb-0">
                <label>Expire</label>
                <input type="text" placeholder="60" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-heading">
              <h4>Refferal System</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="active-switch mb-1">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-heading">
              <h4>Login Type</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="form-group">
                <ul className="custom-radiosbtn">
                  <li>
                    <label className="radiossets">Mobile
                      <input type="radio" defaultChecked={true}name="radio-btn" />
                      <span className="checkmark-radio" />
                    </label>
                  </li>
                  <li>
                    <label className="radiossets">Email
                      <input type="radio" name="radio-btn" />
                      <span className="checkmark-radio" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-heading">
              <h4>Password</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="active-switch mb-1">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-heading">
              <h4>OTP System</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="active-switch mb-1">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-heading">
              <h4>OTP Type</h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="form-group-set authentication-buttons">
              <div className="form-group">
                <ul className="custom-radiosbtn">
                  <li>
                    <label className="radiossets">Sms OTP
                      <input type="radio" defaultChecked={true}name="radio" />
                      <span className="checkmark-radio" />
                    </label>
                  </li>
                  <li>
                    <label className="radiossets">Email OTP
                      <input type="radio" name="radio" />
                      <span className="checkmark-radio" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="btn-path">
            <Link to="#" className="btn btn-cancel me-3">Cancel</Link>
            <Link to="#" className="btn btn-primary">Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationSettings