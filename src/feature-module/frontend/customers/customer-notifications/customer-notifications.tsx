import React from 'react';
import CustomerSideBar from '../common/sidebar';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const CustomerNotifications = () => {
  return (
    <>
     <BreadCrumb title="Settings" item1="Customer" item2="Settings" />

      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 ">
                <CustomerSideBar />
              </div>
             
              <div className="col-xl-9 col-lg-8">
                <h4 className="mb-4">Notifications</h4>
                <div className="notification-table">
                  <div className="table-responsive res-1">
                    <table className="table table-1">
                      <thead className="table-thead">
                        <tr>
                          <th>General Notifications</th>
                          <th className="text-center">Push</th>
                          <th className="text-center">Email</th>
                          <th className="text-center">SMS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="notify-item">
                              <h6 className="mb-1">General Notifications Newsletter</h6>
                              <p>
                                Manage notification settings for timely newsletter updates.
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="notify-item">
                              <h6 className="mb-1">Daily Updates</h6>
                              <p>Set your notification preferences for daily updates.</p>
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input className="form-check-input input-1" type="checkbox" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive res-1">
                    <table className="table table-1">
                      <thead className="table-thead">
                        <tr>
                          <th>Booking</th>
                          <th className="text-center">Push</th>
                          <th className="text-center">Email</th>
                          <th className="text-center">SMS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="notify-item">
                              <h6 className="mb-1">Booking Request</h6>
                              <p>
                                Enable notifications to stay updated on your booking requests.
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input className="form-check-input input-1" type="checkbox" />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="notify-item">
                              <h6 className="mb-1">Booking Status</h6>
                              <p>Get instant notifications on your booking status.</p>
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input className="form-check-input input-1" type="checkbox" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="notify-item">
                              <h6 className="mb-1">Refund Request</h6>
                              <p>Receive updates on your refund request status instantly.</p>
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input className="form-check-input input-1" type="checkbox" />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input className="form-check-input input-1" type="checkbox" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive res-1">
                    <table className="table table-1">
                      <thead className="table-thead">
                        <tr>
                          <th>Subscription</th>
                          <th className="text-center">Push</th>
                          <th className="text-center">Email</th>
                          <th className="text-center">SMS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="notify-item">
                              <h6 className="mb-1">Subscription Notification</h6>
                              <p>Stay updated with notifications about your subscription.</p>
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input className="form-check-input input-1" type="checkbox" />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive res-1 mb-0">
                    <table className="table table-1">
                      <thead className="table-thead">
                        <tr>
                          <th>Wallet</th>
                          <th className="text-center">Push</th>
                          <th className="text-center">Email</th>
                          <th className="text-center">SMS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="notify-item">
                              <h6 className="mb-1">Wallet Notification</h6>
                              <p>
                                Get notifications for all wallet transactions and updates.
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input className="form-check-input input-1" type="checkbox" />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-check form-switch ms-3">
                              <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
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
    </>
  );
};

export default CustomerNotifications;
