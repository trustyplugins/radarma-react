import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useDispatch, useSelector } from 'react-redux';
import { set_mouseoversidebar_data } from '../../../../core/data/redux/action';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { AppState } from '../../../../core/models/interface';

const ProviderSidebar = () => {
  const routes = all_routes;

  const location = useLocation();
  const toggle_data = useSelector((state: AppState) => state.mouseOverSidebar);
  const dispatch = useDispatch();
  const [subdroptoggle, setsubdroptoggle] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const activeRouterPath = (link: string) => {
    return link === location.pathname;
  };
  const activeRouterPath2 = () => {
    return location.pathname.includes('settings');
  };
  const activeRouterPath3 = () => {
    return location.pathname.includes('staff');
  };
  const activeRouterPath4 = () => {
    return location.pathname.includes('customer');
  };
  // useEffect(() => {
  //   activeRouterPath
  // }, [])

  const toogle = () => {
    dispatch(set_mouseoversidebar_data( true));
  };
  const toogle2 = () => {
    dispatch(set_mouseoversidebar_data(false));
  };
  return (
    <>
    <div
      onMouseEnter={toogle}
      onMouseLeave={toogle2}
      className="sidebar"
      id="sidebar"
    >
        <Scrollbars style={{ width: "100%", height: "100%" }}>
      <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li
                className={`${
                  activeRouterPath('/providers/dashboard') ? 'active' : ''
                }`}
              >
                <Link to="/providers/dashboard">
                <i className="ti ti-layout-grid"/>{' '}
                  <span>Dashboard</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath('/providers/provider-service')
                    ? 'active'
                    : ''
                }`}
              >
                <Link to="/providers/provider-service">
                <i className="ti ti-briefcase"/>{' '}
                  <span>My Services</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath('/providers/provider-booking')
                    ? 'active'
                    : ''
                }`}
              >
                <Link to="/providers/provider-booking">
                <i className="ti ti-calendar-month"/>{' '}
                  <span>Bookings </span>
                </Link>
              </li>
              <li
                className={`${activeRouterPath3() ? 'active' : ''}`}
              >
                <Link to={routes.staffList}>
                <i className="ti ti-users"/>{' '}
                  <span>Staffs</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath4() ? 'active' : ''
                }`}
              >
                <Link to={routes.customerList}>
                <i className="ti ti-user"/>{' '}
                  <span>Customers</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath('/providers/provider-payout') ? 'active' : ''
                }`}
              >
                <Link to={'/providers/provider-payout'}>
                <i className="ti ti-wallet"/>{' '}
                  <span>Payout</span>
                </Link>
              </li>
              {/* <li
                className={`${
                  activeRouterPath('/providers/provider-availability')
                    ? 'active'
                    : ''
                }`}
              >
                <Link to="/providers/provider-availability">
                <i className="ti ti-user"/>{' '}
                  <span>Availability</span>
                </Link>
              </li> */}
              
              <li
                className={`${
                  activeRouterPath('/providers/provider-holiday')
                    ? 'active'
                    : ''
                }`}
              >
                <Link to="/providers/provider-holiday">
                <i className="feather icon-calendar"/>{' '}
                  <span>Holidays &amp; Leave</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath('/providers/provider-coupons')
                    ? 'active'
                    : ''
                }`}
              >
                <Link to="/providers/provider-coupons">
                <i className="ti ti-ticket"/>{' '}
                  <span>Coupons</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath('/providers/provider-offer') ? 'active' : ''
                }`}
              >
                <Link to="/providers/provider-offer">
                <i className="ti ti-square-percentage"/>{' '}
                  <span>Offers</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath('/providers/provider-review') ? 'active' : ''
                }`}
              >
                <Link to="/providers/provider-review">
                <i className="ti ti-star"/>{' '}
                  <span>Reviews</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath(routes.providerEnquiry) ? 'active' : ''
                }`}
              >
                <Link to={routes.providerEnquiry}>
                <i className="ti ti-mail"/>{' '}
                  <span>Enquiries</span>
                </Link>
              </li>
              <li
                className={`${
                  activeRouterPath('/providers/provider-earnings')
                    ? 'active'
                    : ''
                }`}
              >
                <Link to="/providers/provider-earnings">
                <i className="ti ti-cash-banknote"/>{' '}
                  <span>Earnings</span>
                </Link>
              </li>
              {/* <li
                className={`${
                  activeRouterPath('/providers/provider-subscription')
                    ? 'active'
                    : ''
                }`}
              >
                <Link to="/providers/provider-subscription">
                  <Icon.DollarSign className="react-feather icon-icon" />
                  <span>Subscription</span>
                </Link>
              </li> */}
              
              
              
              <li
                className={`${
                  activeRouterPath('/providers/provider-chat') ? 'active' : ''
                }`}
              >
                <Link to="/providers/provider-chat">
                <i className="ti ti-messages"/>{' '}
                  <span>Chat</span>
                </Link>
              </li>
              <li className={`submenu `}>
                <Link
                  to="#"
                  onClick={() => setsubdroptoggle(!subdroptoggle)}
                  className={`${subdroptoggle ? 'subdrop' : ''} ${activeRouterPath2() ? 'active' : ''}`}
                >
                  <i className="ti ti-settings" />{' '}
                  <span>Settings</span> <span className="menu-arrow" />
                </Link>
                <ul style={{ display: subdroptoggle ? 'block' : 'none' }}>
                  <li
                  >
                    <Link to="/providers/settings/provider-appointment-settings" 
                    className={`${
                      activeRouterPath(routes.providerAppointmentSettings)
                        ? 'active'
                        : ''
                    }`}>
                    <i className="ti ti-chevrons-right me-2"/> Appointment
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/provider-profile-settings" 
                    className={`${
                      activeRouterPath(routes.providerProfileSettings)
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/> Account 
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/provider-social-profile" 
                    className={`${
                      activeRouterPath(
                        '/providers/settings/provider-social-profile',
                      )
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/>Social Profiles
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/provider-security-settings"
                    className={`${
                      activeRouterPath(
                        '/providers/settings/provider-security-settings',
                      )
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/> Security 
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/provider-plan"
                    className={`${
                      activeRouterPath('/providers/settings/provider-plan')
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/> Plan &amp; Billings
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/payment-setting"
                    className={`${
                      activeRouterPath('/providers/settings/payment-setting')
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/> Payment
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/provider-notification"
                    className={`${
                      activeRouterPath(
                        '/providers/settings/provider-notification',
                      )
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/> Notifications
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/provider-connected-apps"
                    className={`${
                      activeRouterPath(
                        '/providers/settings/provider-connected-apps',
                      )
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/> Connected Apps
                    </Link>
                  </li>
                  <li>
                    <Link to="/providers/settings/verification"
                    className={`${
                      activeRouterPath(
                        '/providers/settings/provider-appointment-settings',
                      )
                        ? 'active'
                        : ''
                    }`}
                  >
                    <i className="ti ti-chevrons-right me-2"/> Profile Verification
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#del-account"><i className="ti ti-chevrons-right me-2"/>Delete Account</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={routes.login}>
                <i className="ti ti-logout-2"/>{' '}
                  <span>Logout</span>
                </Link>
              </li>
              
            </ul>
            
          </div>
       
      </div>
        </Scrollbars>
    </div>
      {/* Delete Account */}
  <div className="modal fade custom-modal" id="del-account">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete Account</h5>
          <a
            href="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </a>
        </div>
        <form>
          <div className="modal-body">
            <p className="mb-3">
              Are you sure you want to delete This Account? To delete your
              account, Type your password.
            </p>
            <div className="mb-0">
              <label className="form-label">Password</label>
              <div className="pass-group">
                <input
                  type={passwordVisible?'text':'password'}
                  className="form-control pass-input"
                  placeholder="*************"
                />
                <span onClick={togglePasswordVisibility} className={`toggle-password feather  ${passwordVisible?'icon-eye' : 'icon-eye-off'}`} />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
            <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Delete Account */}
  </>
  );
};

export default ProviderSidebar;
