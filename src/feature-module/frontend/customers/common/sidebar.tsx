import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import StickyBox from 'react-sticky-box';
const CustomerSideBar = () => {
  const routes = all_routes;
  const location = useLocation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [subdroptoggle, setsubdroptoggle] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  useEffect(() => {
    
    
    return () => {
      location.pathname.includes('settings') ? setsubdroptoggle(true): setsubdroptoggle(false)
    }
  }, [location.pathname])
  
  const sidebar_data = [
    {
      link: routes.customerDashboard,
      name: 'Dashboard',
      icon: <i className="ti ti-layout-grid me-2" />,
    },
    {
      link: routes.customerBooking,
      name: 'Bookings',
      icon: <Icon.Smartphone className="sidebar-feather me-3" />,
    },
    {
      link: routes.customerFavourite,
      name: 'Favorites',
      icon: <Icon.Heart className="sidebar-feather me-3" />,
    },
    {
      link: routes.customerWallet,
      name: 'Wallet',
      icon: <Icon.CreditCard className="sidebar-feather me-3" />,
    },
    {
      link: routes.customerReviews,
      name: 'Reviews',
      icon: <Icon.Star className="sidebar-feather me-3" />,
    },
    {
      link: routes.customerChat,
      name: 'Chat',
      icon: <Icon.MessageCircle className="sidebar-feather me-3" />,
    },
    {
      link: routes.customerBooking,
      name: 'Settings',
      icon: <Icon.Settings className="sidebar-feather me-3" />,
    },
    {
      link: routes.homeOne,
      name: 'LogOut',
      icon: <Icon.LogOut className="sidebar-feather me-3" />,
    },
  ];

  const activeRouterPath = (link: string) => {
    return link === location.pathname;
  };

  return (
    <>
    <StickyBox>
    <div className="card user-sidebar mb-4 mb-lg-0">
      <div className="card-header user-sidebar-header mb-4">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <span className="user rounded-circle avatar avatar-xxl mb-2">
            <ImageWithBasePath
              src="assets/img/profiles/avatar-21.jpg"
              className="img-fluid rounded-circle"
              alt="Img"
            />
          </span>
          <h6 className="mb-2">John Smith</h6>
          <p className="fs-14">Member Since Sep 2021</p>
        </div>
      </div>
      <div className="card-body user-sidebar-body p-0">
     
        <ul>
          <li className="mb-4">
            <Link
              to={routes.customerDashboard}
              className={`d-flex align-items-center ${location.pathname === routes.customerDashboard && 'active'}`}
            >
              <i className="ti ti-layout-grid me-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to={routes.customerBooking}
              className={`d-flex align-items-center ${location.pathname === routes.customerBooking || location.pathname === routes.customerBookingCalendar ? 'active':''}`}
            >
              <i className="ti ti-device-mobile me-2" />
              Bookings
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to={routes.customerFavourite}
              className={`d-flex align-items-center ${location.pathname === routes.customerFavourite && 'active'}`}
            >
              <i className="ti ti-heart me-2" />
              Favorites
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to={routes.customerWallet}
              className={`d-flex align-items-center ${location.pathname === routes.customerWallet && 'active'}`}
            >
              <i className="ti ti-wallet me-2" />
              Wallet
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to={routes.customerReviews}
              className={`d-flex align-items-center ${location.pathname === routes.customerReviews && 'active'}`}
            >
              <i className="ti ti-star me-2" />
              Reviews
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to={routes.customerChat}
              className={`d-flex align-items-center ${location.pathname === routes.customerChat && 'active'}`}
            >
              <i className="ti ti-message-circle me-2" />
              Chat
            </Link>
          </li>
          <li className="submenu">
            <Link to="#" onClick={() => setsubdroptoggle(!subdroptoggle)}
             className={`d-block mb-3 ${subdroptoggle ? 'subdrop' : ''} ${location.pathname.includes('settings')?'active':''}`}>
              <i className="ti ti-settings me-2" />
              <span>Settings</span>
              <span className="menu-arrow" />
            </Link>
            <ul className={`ms-4 ${subdroptoggle && 'd-block'}`}>
              <li className="mb-3">
                <Link
                  to={routes.customerProfile}
                  className={`fs-14 d-inline-flex align-items-center ${location.pathname === routes.customerProfile && 'active'}`}
                >
                  <i className="ti ti-chevrons-right me-2" />
                  Account Settings
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={routes.customerSecurity}
                  className={`fs-14 d-inline-flex align-items-center ${location.pathname === routes.customerSecurity && 'active'}`}
                >
                  <i className="ti ti-chevrons-right me-2" />
                  Security Settings
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={routes.customerNotification}
                  className={`fs-14 d-inline-flex align-items-center ${location.pathname === routes.customerNotification && 'active'}`}
                >
                  <i className="ti ti-chevrons-right me-2" />
                  Notifications
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to={routes.customerConnectedApps}
                  className={`fs-14 d-inline-flex align-items-center ${location.pathname === routes.customerConnectedApps && 'active'}`}
                >
                  <i className="ti ti-chevrons-right me-2" />
                  Connected Apps
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#del-account"
                  className="fs-14"
                >
                  <i className="ti ti-chevrons-right me-2" />
                  Delete Account
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-0">
            <Link to={routes.login} className={`d-flex align-items-center `}>
              <i className="ti ti-logout me-2" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </StickyBox>
    <>
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

    </>
  );
};

export default CustomerSideBar;
