import React from 'react';
import SettingsSidebar from '../common/settingssidebar';

const Notification = () => {
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content-sidelink">
        <SettingsSidebar />
        </div>
        <div className="content w-100">
          <div className="content-page-header">
            <h5>Notifications</h5>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-resposnive table-bottom">
                <table className="table">
                  <thead>
                    <tr>
                      <th>General Notifications</th>
                      <th>Push</th>
                      <th>Email</th>
                      <th>SMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="table-content">
                          <h5>General Notifications Newsletter</h5>
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table-content">
                          <h5>Daily Updates</h5>
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-resposnive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Booking</th>
                      <th>Push</th>
                      <th>Email</th>
                      <th>SMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="table-content">
                          <h5>Booking Request</h5>
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table-content">
                          <h5>Booking Status</h5>
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="table-content">
                          <h5>Refund Request</h5>
                          <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked={true} />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="sliders round" />
                          </label>
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
    </>
  );
};

export default Notification;
