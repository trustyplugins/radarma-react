import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const CustomerHeader = () => {
  const openMobileSidebar = () => {
    console.log('Hii');
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={openMobileSidebar}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="index.html" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link to="index.html" className="navbar-brand logo-small">
                <ImageWithBasePath
                  src="assets/img/logo-small.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="index.html" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link id="menu_close" className="menu-close" to="#">
                  {' '}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu megamenu">
                  <Link to="#">
                    Home <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu mega-submenu">
                    <li>
                      <div className="megamenu-wrapper">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="single-demo ">
                              <div className="demo-img">
                                <Link to="index.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-01.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index.html">Electrical Home</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo ">
                              <div className="demo-img">
                                <Link to="index-2.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-02.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-2.html">Cleaning Home</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo ">
                              <div className="demo-img">
                                <Link to="index-3.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-03.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-3.html">Saloon Home</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="index-4.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-04.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-4.html">Catering Home</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="index-5.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-05.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-5.html">Car Wash Home</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="index-6.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-06.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-6.html">Cleaning Home</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="index-7.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-07.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-7.html">
                                  House Problem Home
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="index-8.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-08.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-8.html">Pet Grooming Home</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="index-9.html">
                                  <ImageWithBasePath
                                    src="assets/img/home-09.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="index-9.html">Mechanic Home</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Services <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="service-grid.html">Service Grid</Link>
                    </li>
                    <li>
                      <Link to="service-list.html">Service List</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Service Details</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="service-details.html">
                            Service Details 1
                          </Link>
                        </li>
                        <li>
                          <Link to="service-details2.html">
                            Service Details 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="search.html">Search</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Providers</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="providers.html">Providers List</Link>
                        </li>
                        <li>
                          <Link to="provider-details.html">
                            Providers Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="create-service.html">Create Service</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu active">
                  <Link to="#">
                    Customers <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="customer-dashboard.html">Dashboard</Link>
                    </li>
                    <li className="active">
                      <Link to="customer-booking.html">Booking</Link>
                    </li>
                    <li>
                      <Link to="customer-favourite.html">Favorites</Link>
                    </li>
                    <li>
                      <Link to="customer-wallet.html">Wallet</Link>
                    </li>
                    <li>
                      <Link to="customer-reviews.html">Reviews</Link>
                    </li>
                    <li>
                      <Link to="customer-chat.html">Chat</Link>
                    </li>
                    <li>
                      <Link to="customer-profile.html">Settings</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Providers <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="provider-dashboard.html">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="provider-services.html">My Services</Link>
                    </li>
                    <li>
                      <Link to="provider-booking.html">Booking</Link>
                    </li>
                    <li>
                      <Link to="provider-payout.html">Payout</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Settings</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="provider-appointment-settings.html">
                            Appointment Settings
                          </Link>
                        </li>
                        <li>
                          <Link to="provider-profile-settings.html">
                            Account Settings
                          </Link>
                        </li>
                        <li>
                          <Link to="provider-social-profile.html">
                            Social Profiles
                          </Link>
                        </li>
                        <li>
                          <Link to="provider-security-settings.html">
                            Security
                          </Link>
                        </li>
                        <li>
                          <Link to="provider-plan.html">
                            Plan &amp; Billings
                          </Link>
                        </li>
                        <li>
                          <Link to="provider-notifcations.html">
                            Notifications
                          </Link>
                        </li>
                        <li>
                          <Link to="provider-connected-apps.html">
                            Connected Apps
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="provider-availability.html">Availability</Link>
                    </li>
                    <li>
                      <Link to="provider-holiday.html">
                        Holidays &amp; Leave
                      </Link>
                    </li>
                    <li>
                      <Link to="provider-coupons.html">Coupons</Link>
                    </li>
                    <li>
                      <Link to="provider-offers.html">Offers</Link>
                    </li>
                    <li>
                      <Link to="provider-reviews.html">Reviews</Link>
                    </li>
                    <li>
                      <Link to="provider-earnings.html">Earnings</Link>
                    </li>
                    <li>
                      <Link to="provider-chat.html">Chat</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="#">
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="about-us.html">About</Link>
                    </li>
                    <li>
                      <Link to="contact-us.html">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="how-it-works.html">How It Works</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Error Page</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="error-404.html">404 Error</Link>
                        </li>
                        <li>
                          <Link to="error-500.html">500 Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Authentication</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="choose-signup.html">Signup Choose </Link>
                        </li>
                        <li>
                          <Link to="user-signup.html">Customer Signup</Link>
                        </li>
                        <li>
                          <Link to="provider-signup.html">Provider Signup</Link>
                        </li>
                        <li>
                          <Link to="login.html">Login</Link>
                        </li>
                        <li>
                          <Link to="reset-password.html">Reset Password</Link>
                        </li>
                        <li>
                          <Link to="password-recovery.html">
                            Password Update
                          </Link>
                        </li>
                        <li>
                          <Link to="phone-otp.html">Phone OTP</Link>
                        </li>
                        <li>
                          <Link to="email-otp.html">Email OTP</Link>
                        </li>
                        <li>
                          <Link to="free-trial.html">Free Trial</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Booking</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="booking.html">Booking 1</Link>
                        </li>
                        <li>
                          <Link to="booking-2.html">Booking 2</Link>
                        </li>
                        <li>
                          <Link to="booking-payment.html">
                            Booking Checkout
                          </Link>
                        </li>
                        <li>
                          <Link to="booking-done.html">Booking Success</Link>
                        </li>
                        <li>
                          <Link to="booking-details.html">Booking Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="categories.html">Categories</Link>
                    </li>
                    <li>
                      <Link to="pricing.html">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link to="faq.html">FAQ</Link>
                    </li>
                    <li>
                      <Link to="maintenance.html">Maintenance</Link>
                    </li>
                    <li>
                      <Link to="coming-soon.html">Coming Soon</Link>
                    </li>
                    <li>
                      <Link to="privacy-policy.html">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="terms-condition.html">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="session-expired.html">Session Expired</Link>
                    </li>
                    <li>
                      <Link to="installer.html">Installer</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="blog-grid.html">
                    Blog <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="blog-grid.html">Blog Grid</Link>
                    </li>
                    <li>
                      <Link to="blog-list.html">Blog List</Link>
                    </li>
                    <li>
                      <Link to="blog-details.html">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="login-link">
                  <Link to="choose-signup.html">Register</Link>
                </li>
                <li className="login-link">
                  <Link to="login.html">Login</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht noti-pop-detail">
              {/* Language */}
              <li className="nav-item dropdown lang-nav">
                <div className="flag-dropdown">
                  <Link
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                  >
                    <i className="feather-globe me-1" /> <span>EN</span>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item">
                      English
                    </Link>
                    <Link to="#" className="dropdown-item">
                      French
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Spanish
                    </Link>
                    <Link to="#" className="dropdown-item">
                      German
                    </Link>
                  </div>
                </div>
              </li>
              {/* /Language */}
              {/* Language */}
              <li className="nav-item flag-nav dropdown">
                <div className="flag-dropdown">
                  <Link
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                  >
                    <ImageWithBasePath
                      src="assets/img/flags/us.png"
                      className="rounded-circle me-1"
                      height={16}
                      alt="Flag"
                    />{' '}
                    <span>USD</span>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/us.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      USD
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath
                        src="assets/img/flags/fr.png"
                        alt="Flag"
                        height={16}
                      />{' '}
                      Euro
                    </Link>
                  </div>
                </div>
              </li>
              {/* /Language */}
              {/* Chat */}
              <li className="nav-item logged-item msg-nav">
                <Link to="customer-chat.html" className="nav-link">
                  <ImageWithBasePath
                    src="assets/img/icons/message-icon.svg"
                    alt="Message Icon"
                  />
                </Link>
              </li>
              {/* /Chat */}
              {/* Notifications */}
              <li className="nav-item dropdown logged-item noti-nav noti-wrapper">
                <Link
                  to="#"
                  className="dropdown-toggle nav-link notify-link"
                  data-bs-toggle="dropdown"
                >
                  <span className="noti-message">1</span>
                  <ImageWithBasePath
                    src="assets/img/icons/bell-icon.svg"
                    alt="Bell"
                  />
                </Link>
                <div className="dropdown-menu notify-blk notifications">
                  <div className="topnav-dropdown-header">
                    <div>
                      <p className="notification-title">
                        Notifications <span> 3 </span>
                      </p>
                    </div>
                    <Link to="#" className="clear-noti">
                      <i className="fa-regular fa-circle-check" /> Mark all as
                      read{' '}
                    </Link>
                  </div>
                  <div className="noti-content">
                    <ul className="notification-list">
                      <li className="notification-message">
                        <Link to="notification.html">
                          <div className="media noti-img d-flex">
                            <span className="avatar avatar-sm flex-shrink-0">
                              <ImageWithBasePath
                                className="avatar-img rounded-circle img-fluid"
                                alt="User Image"
                                src="assets/img/notifications/avatar-01.jpg"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                Lex Murphy left 6 comments on Isla Nublar SOC2
                                compliance report
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  1m ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="notification-message">
                        <div className="media noti-img d-flex">
                          <Link to="notification.html">
                            <span className="avatar avatar-sm flex-shrink-0">
                              <ImageWithBasePath
                                className="avatar-img rounded-circle img-fluid"
                                alt="User Image"
                                src="assets/img/notifications/avatar-02.jpg"
                              />
                            </span>
                          </Link>
                          <div className="media-body flex-grow-1">
                            <Link to="notification.html">
                              <p className="noti-details">
                                Ray Arnold requested access to UNIX directory
                                tree hierarchy
                              </p>
                            </Link>
                            <p className="noti-time">
                              <span className="notification-time">1 min</span>
                            </p>
                            <div className="notify-btns">
                              <button className="btn btn-secondary">
                                Decline
                              </button>
                              <button className="btn btn-primary">
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="notification-message">
                        <Link to="notification.html">
                          <div className="media noti-img d-flex">
                            <span className="avatar avatar-sm flex-shrink-0">
                              <ImageWithBasePath
                                className="avatar-img rounded-circle img-fluid"
                                alt="User Image"
                                src="assets/img/notifications/avatar-03.jpg"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                Dennis Nedry commented on Isla Nublar SOC2
                                compliance report
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  1m ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="notification-message">
                        <Link to="notification.html">
                          <div className="media noti-img d-flex">
                            <span className="avatar avatar-sm flex-shrink-0">
                              <ImageWithBasePath
                                className="avatar-img rounded-circle img-fluid"
                                alt="User Image"
                                src="assets/img/notifications/avatar-04.jpg"
                              />
                            </span>
                            <div className="media-body flex-grow-1">
                              <p className="noti-details">
                                John Hammond created Isla Nublar SOC2 compliance
                                report
                              </p>
                              <p className="noti-time">
                                <span className="notification-time">
                                  1m ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="topnav-dropdown-footer">
                    <Link to="notification.html">
                      View All Notifications{' '}
                      <ImageWithBasePath
                        src="assets/img/icons/arrow-right-01.svg"
                        alt="Arrow"
                      />
                    </Link>
                  </div>
                </div>
              </li>
              {/* /Notifications */}
              {/* User Menu */}
              <li className="nav-item dropdown has-arrow account-item">
                <Link
                  to="#"
                  className="dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                >
                  <div className="user-infos">
                    <span className="user-img">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="rounded-circle"
                        alt="User Image"
                      />
                    </span>
                    <div className="user-info">
                      <h6>John Smith</h6>
                      <p>Demo User</p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-menu dropdown-menu-end emp">
                  <Link className="dropdown-item" to="customer-profile.html">
                    <i className="feather-user me-2" /> Profile
                  </Link>
                  <Link className="dropdown-item" to="index.html">
                    <i className="feather-log-out me-2" /> Logout
                  </Link>
                </div>
              </li>
              {/* /User Menu */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default CustomerHeader;
