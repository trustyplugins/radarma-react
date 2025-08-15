import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import { set_is_mobile_sidebar } from '../../../core/data/redux/action';
import { useDispatch } from 'react-redux';
import { all_routes } from '../../../core/data/routes/all_routes';

const AdminHeader = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    // Toggle the state
    setIsFullscreen(!isFullscreen);
  };
  // const mobileSidebar = useSelector((state : any) => state.mobileSidebar)
  const dispatch = useDispatch();
  const routes = all_routes
  return (
    <div className="admin-header">
      <div className="header-left">
        <Link to="index" className="logo">
          <ImageWithBasePath
            src="assets/img/logo.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>
        <Link to="index" className=" logo-small">
          <ImageWithBasePath
            src="assets/admin/img/logo-small.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <Link
        className="mobile_btn"
        id="mobile_btn"
        to="#"
        onClick={() => {
          dispatch(set_is_mobile_sidebar(true));
        }}
      >
        <i className="fas fa-align-left" />
      </Link>
      <div className="header-split">
        <div className="page-headers">
          <div className="search-bar">
            <span>
              <Icon.Search className="react-feather-custom"></Icon.Search>
            </span>
            <input type="text" placeholder="Search" className="form-control" />
          </div>
        </div>
        <ul className="nav admin-user-menu">
          
          {/* User Menu */}
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="user-link  nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <ImageWithBasePath
                  className="rounded-circle"
                  src="assets/admin/img/user.jpg"
                  width={40}
                  alt="Admin"
                />
                <span className="animate-circle" />
              </span>
              <span className="user-content">
                <span className="user-name">John Smith</span>
                <span className="user-details">Demo User</span>
              </span>
            </Link>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilemenu ">
                <div className="user-detials">
                  <Link to="account">
                    <span className="profile-image">
                      <ImageWithBasePath
                        src="assets/admin/img/user.jpg"
                        alt="img"
                        className="profilesidebar"
                      />
                    </span>
                    <span className="profile-content">
                      <span>John Smith</span>
                      <span>John@example.com</span>
                    </span>
                  </Link>
                </div>
                <div className="subscription-menu">
                  <ul>
                    <li>
                      <Link to="account-settings">Profile</Link>
                    </li>
                    <li>
                      <Link to="localization">Settings</Link>
                    </li>
                  </ul>
                </div>
                <div className="subscription-logout">
                  <Link to="logout">Log Out</Link>
                </div>
              </div>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
