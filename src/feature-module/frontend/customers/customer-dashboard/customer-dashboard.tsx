import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import CountUp from 'react-countup';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';
import { all_routes } from '../../../../core/data/routes/all_routes';

const CustomerDashboard = () => {
  const routes = all_routes
  return (
    <>
    <BreadCrumb title='Dashboard' item1='Customer' item2='Dashboard'/>
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 ">
            <CustomerSideBar/>
          </div>
          <div className="col-xl-9 col-lg-8">
            <h4 className="mb-3">Dashboard</h4>
            <div className="row mb-4">
              <div className="col-xxl-3 col-md-6">
                <div className="card dash-widget">
                  <div className="card-body">
                    <div className="d-flex  justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="dash-icon bg-primary-transparent d-flex justify-content-center align-items-center rounded-circle">
                          <i className="ti ti-shopping-cart" />
                        </span>
                        <div className="ms-2">
                          <span className="fs-14">Total Orders</span>
                          <h5>
                          
                            <span className="counter"><CountUp end={27} duration={2} /></span>
                          </h5>
                        </div>
                      </div>
                      <span className="badge badge-success">
                        <i className="ti ti-circle-arrow-up me-1" />
                        16%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6">
                <div className="card dash-widget">
                  <div className="card-body">
                    <div className="d-flex  justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="dash-icon bg-secondary-transparent d-flex justify-content-center align-items-center rounded-circle">
                          <i className="ti ti-wallet" />
                        </span>
                        <div className="ms-2">
                          <span className="fs-14">Total Spend</span>
                          <h5>
                            $ <span className="counter"><CountUp end={2500} duration={2} /></span>
                          </h5>
                        </div>
                      </div>
                      <span className="badge badge-danger">
                        <i className="ti ti-circle-arrow-down me-1" />
                        5%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6">
                <div className="card dash-widget">
                  <div className="card-body">
                    <div className="d-flex  justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="dash-icon bg-success-transparent d-flex justify-content-center align-items-center rounded-circle ">
                          <i className="ti ti-cards" />
                        </span>
                        <div className="ms-2">
                          <span className="fs-14">Wallet</span>
                          <h5>
                            $ <span className="counter"><CountUp end={200} duration={2} /></span>
                          </h5>
                        </div>
                      </div>
                      <span className="badge badge-danger">
                        <i className="ti ti-circle-arrow-down me-1" />
                        5%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6">
                <div className="card dash-widget">
                  <div className="card-body">
                    <div className="d-flex  justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <span className="dash-icon bg-info-transparent d-flex justify-content-center align-items-center rounded-circle">
                          <i className="ti ti-cards" />
                        </span>
                        <div className="ms-2">
                          <span className="fs-14">Total Savings</span>
                          <h5>
                            $ <span className="counter"><CountUp end={354} duration={2} /></span>
                          </h5>
                        </div>
                      </div>
                      <span className="badge badge-success">
                        <i className="ti ti-circle-arrow-up me-1" />
                        16%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-5 col-lg-5 d-flex">
                <div className="w-100">
                  <h5 className="mb-3">Recent Transaction</h5>
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                <i className="ti ti-devices-2 fs-20 text-dark" />
                              </span>
                              <div>
                                <h6 className="fs-14">Service Booking</h6>
                                <span className="text-gray fs-12">
                                  <i className="feather icon-calendar" />
                                  22 Sep 2023
                                  <span className="ms-2">
                                    <i className="feather icon-clock" />
                                    10:12 AM
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <h6>$280.00</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                <i className="ti ti-refresh fs-20 text-dark" />
                              </span>
                              <div>
                                <h6 className="fs-14">Service Refund</h6>
                                <span className="text-gray fs-12">
                                  <i className="feather icon-calendar" />
                                  15 Oct 2022
                                  <span className="ms-2">
                                    <i className="ti ti-clock me-1" />
                                    14:36 PM
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <h6>$395.00</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                <i className="ti ti-wallet fs-20 text-dark" />
                              </span>
                              <div>
                                <h6 className="fs-14">Wallet Topup</h6>
                                <span className="text-gray fs-12">
                                  <i className="feather icon-calendar" />
                                  18 Oct 2022
                                  <span className="ms-2">
                                    <i className="ti ti-clock me-1" />
                                    15:19 PM
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <h6>$1000.00</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                <i className="ti ti-devices-2 fs-20 text-dark" />
                              </span>
                              <div>
                                <h6 className="fs-14">Service Booking</h6>
                                <span className="text-gray fs-12">
                                  <i className="feather icon-calendar" />
                                  28 Oct 2022
                                  <span className="ms-2">
                                    <i className="ti ti-clock me-1" />
                                    11:17 AM
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <h6>$598.65</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                <i className="ti ti-devices-2 fs-20 text-dark" />
                              </span>
                              <div>
                                <h6 className="fs-14">Service Booking</h6>
                                <span className="text-gray fs-12">
                                  <i className="feather icon-calendar" />
                                  10 Nov 2022
                                  <span className="ms-2">
                                    <i className="ti ti-clock me-1" />
                                    09:13 AM
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <h6>$300.00</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="dash-icon-1 bg-gray d-flex justify-content-center align-items-center rounded-circle avatar avatar-lg me-2">
                                <i className="ti ti-devices-2 fs-20 text-dark" />
                              </span>
                              <div>
                                <h6 className="fs-14">Service Booking</h6>
                                <span className="text-gray fs-12">
                                  <i className="feather icon-calendar" />
                                  10 Nov 2022
                                  <span className="ms-2">
                                    <i className="ti ti-clock me-1" />
                                    09:13 AM
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            <h6>$300.00</h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-lg-7 d-flex">
                <div className="w-100">
                  <h5 className="mb-3">Recent Booking</h5>
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <Link to={routes.bookingDetails} className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/providers/provider-15.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Computer Repair</h6>
                                  <span className="text-gray fs-12">
                                    <i className="feather icon-calendar me-1" />
                                    10 Nov 2022
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <Link to="#" className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-01.jpg"
                                  className="rounded-circle img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">John Smith</h6>
                                  <span className="text-gray fs-14">
                                    john@gmail.com
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={routes.bookingDetails} className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/providers/provider-13.jpg"
                                  className="img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Car Repair </h6>
                                  <span className="text-gray fs-12 me-1">
                                    <i className="feather icon-calendar" />
                                    15 Oct 2022
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <Link to="#" className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-02.jpg"
                                  className="rounded-circle img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Timothy</h6>
                                  <span className="text-gray fs-14">
                                    timothy@gmail.com
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={routes.bookingDetails} className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/providers/provider-16.jpg"
                                  className="img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Interior Designing </h6>
                                  <span className="text-gray fs-12 me-1">
                                    <i className="feather icon-calendar" />
                                    18 Oct 2022
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <Link to="#" className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-03.jpg"
                                  className="rounded-circle img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Jordan</h6>
                                  <span className="text-gray fs-14">
                                    jordan@gmail.com
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={routes.bookingDetails} className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/providers/provider-17.jpg"
                                  className="img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Steam Car Wash</h6>
                                  <span className="text-gray fs-12 me-1">
                                    <i className="feather icon-calendar" />
                                    28 Oct 2022
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <Link to="#" className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-05.jpg"
                                  className="rounded-circle img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Armand</h6>
                                  <span className="text-gray fs-14">
                                    armand@gmail.com
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={routes.bookingDetails} className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/providers/provider-19.jpg"
                                  className="img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">House Cleaning</h6>
                                  <span className="text-gray fs-12 me-1">
                                    <i className="feather icon-calendar" />
                                    10 Nov 2022
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <Link to="#" className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-04.jpg"
                                  className="rounded-circle img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Joseph</h6>
                                  <span className="text-gray fs-14">
                                    joseph@gmail.com
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={routes.bookingDetails} className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/providers/provider-09.jpg"
                                  className="img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Car Repair</h6>
                                  <span className="text-gray fs-12 me-1">
                                    <i className="feather icon-calendar" />
                                    10 Nov 2022
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td>
                            <Link to="#" className="d-flex">
                              <span className="avatar avatar-lg me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-06.jpg"
                                  className="rounded-circle img-fluid"
                                  alt="Img"
                                />
                              </span>
                              <div className="d-flex align-items-center">
                                <div>
                                  <h6 className="fs-14">Adrian</h6>
                                  <span className="text-gray fs-14">
                                    jadrian@gmail.com
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="text-end">
                            <Link
                              to="#"
                              className="btn btn-light btn-sm"
                            >
                              Cancel
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </>
  );
};

export default CustomerDashboard;
