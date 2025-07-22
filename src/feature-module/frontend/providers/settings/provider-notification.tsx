import React from 'react';

const ProviderNotification = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>Notifications</h5>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12">
          {/* General Notification */}
          <div className="custom-datatable-filter table-responsive notification">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>General Notifications</th>
                  <th>Push</th>
                  <th>Email</th>
                  <th>SMS </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>General Notifications Newsletter</p>
                    <span className="fs-12 text-gray">
                      Manage notification settings for timely newsletter
                      updates.
                    </span>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-1"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-2"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-3"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Daily Updates</p>
                    <span className="fs-12 text-gray">
                      Set your notification preferences for daily updates.
                    </span>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-4"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-5"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-6"
                        className="form-check-input"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /General Notification */}
          {/* Booking Notification */}
          <div className="custom-datatable-filter table-responsive notification">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>Booking</th>
                  <th>Push</th>
                  <th>Email</th>
                  <th>SMS </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Booking Request</p>
                    <span className="fs-12 text-gray">
                      Enable notifications to stay updated on your booking
                      requests.
                    </span>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-7"
                        className="form-check-input"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-8"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-9"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Booking Status</p>
                    <span className="fs-12 text-gray">
                      Get instant notifications on your booking status.
                    </span>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-10"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-11"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-12"
                        className="form-check-input"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Refund Request</p>
                    <span className="fs-12 text-gray">
                      Receive updates on your refund request status instantly.
                    </span>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-13"
                        className="form-check-input"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-14"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-15"
                        className="form-check-input"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /Booking Notification */}
          {/* Subscription  Notification */}
          <div className="custom-datatable-filter table-responsive notification">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>Subscription </th>
                  <th>Push</th>
                  <th>Email</th>
                  <th>SMS </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Subscription Notification</p>
                    <span className="fs-12 text-gray">
                      Stay updated with notifications about your subscription.
                    </span>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-16"
                        className="form-check-input"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-17"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-18"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /Subscription  Notification */}
          {/* Wallet  Notification */}
          <div className="custom-datatable-filter table-responsive notification mb-0">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>Wallet </th>
                  <th>Push</th>
                  <th>Email</th>
                  <th>SMS </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Wallet Notification</p>
                    <span className="fs-12 text-gray">
                      Get notifications for all wallet transactions and updates.
                    </span>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-19"
                        className="form-check-input"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-20"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                  <td>
                    <div className="  d-flex align-items-center form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-21"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /Wallet  Notification */}
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  );
};

export default ProviderNotification;
