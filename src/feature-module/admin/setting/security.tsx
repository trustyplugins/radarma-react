import React from 'react';
import SettingsSidebar from '../common/settingssidebar';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';
import Securitymodal from '../common/modals/security-modal';

const Security = () => {
  const routes = all_routes;
  return (
    <>
      <div className="page-wrapper page-settings">
        <SettingsSidebar />
        <div className="content w-100">
          <div className="content-page-header">
            <h5>Security</h5>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="connectetapps">
                <div className="connectetappsimg">
                  <div className="connectet-img">
                    <img src="/assets/img/icons/lock.svg" alt="img" />
                  </div>
                  <div className="connectet-content">
                    <h3>Password</h3>
                    <p>
                      Last Changed <span> 22 Sep 2023, 10:30:55 AM</span>
                    </p>
                  </div>
                </div>
                <div className="connectetappscontent">
                  <button
                    type="button"
                    className="btn btn-linedark"
                    data-bs-toggle="modal"
                    data-bs-target="#change-password"
                  >
                    Change Password
                  </button>
                </div>
              </div>
              <div className="connectetapps">
                <div className="connectetappsimg">
                  <div className="connectet-img">
                    <img src="/assets/img/icons/scan.svg" alt="img" />
                  </div>
                  <div className="connectet-content">
                    <div className="d-flex align-items-center">
                      <h3>Two Factor Authendication</h3>
                      <h6 className="success-labels ms-3">Connect</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </div>
                <div className="connectetappscontent">
                  <Link to="#" className="btn btn-linedark">
                    Disable
                  </Link>
                </div>
              </div>
              <div className="connectetapps">
                <div className="connectetappsimg">
                  <div className="connectet-img">
                    <img src="/assets/img/icons/mobile.svg" alt="img" />
                  </div>
                  <div className="connectet-content">
                    <h3>Phone Number Verification </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </div>
                <div className="connectetappscontent">
                  <ul>
                    <li>
                      <Link to="#" className="text-danger">
                        <i className="fa fa-times-circle" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="btn btn-change"
                        data-bs-toggle="modal"
                        data-bs-target="#change-no"
                      >
                        Change
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn btn-removes">
                        Remove
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="connectetapps">
                <div className="connectetappsimg">
                  <div className="connectet-img">
                    <img src="/assets/img/icons/email.svg" alt="img" />
                  </div>
                  <div className="connectet-content">
                    <h3>Email Verification</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </div>
                <div className="connectetappscontent">
                  <ul>
                    <li>
                      <Link to="#" className="text-success">
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="btn btn-change"
                        data-bs-toggle="modal"
                        data-bs-target="#change-email"
                      >
                        Change
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn btn-removes">
                        Remove
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="connectetapps">
                <div className="connectetappsimg">
                  <div className="connectet-img">
                    <img src="/assets/img/icons/monitor.svg" alt="img" />
                  </div>
                  <div className="connectet-content">
                    <h3>Device Management</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </div>
                <div className="connectetappscontent">
                  <Link
                    to={routes.adminDevicemanagement}
                    className="btn btn-linedark"
                  >
                    Manage
                  </Link>
                </div>
              </div>
              <div className="connectetapps">
                <div className="connectetappsimg">
                  <div className="connectet-img">
                    <img src="/assets/img/icons/user-edit.svg" alt="img" />
                  </div>
                  <div className="connectet-content">
                    <h3>Account Activity</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </div>
                <div className="connectetappscontent">
                  <Link to={routes.loginActivity} className="btn btn-linedark">
                    View All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="btn-path">
                <Link to="#" className="btn btn-cancel me-3">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Securitymodal />
      </div>
    </>
  );
};

export default Security;
