import React from 'react'
import SettingsSidebar from '../common/settingssidebar';

const AdminLoginActivity = () => {
    return (

        <div className="page-wrapper page-settings">
          <SettingsSidebar />
          <div className="content w-100">
            <div className="content-page-header">
              <h5>Login Activity</h5>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="table-resposnive table-bottom">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Device</th>
                        <th>IP Address</th>
                        <th>Location</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>22 Sep 2023, 11:40:30</td>
                        <td>Chrome - Windows</td>
                        <td>232.222.12.72 </td>
                        <td>Chennai / India</td>
                        <td><h6 className="success-labels">Connect</h6></td>
                      </tr>
                      <tr>
                        <td>21 Sep 2023, 13:10:50</td>
                        <td>Safari Macos</td>
                        <td>224.111.12.75</td>
                        <td>Newyork / USA</td>
                        <td><h6 className="success-labels">Connect</h6></td>
                      </tr>
                      <tr>
                        <td>20 Sep 2023, 14:16:10</td>
                        <td>Firefox Windows</td>
                        <td>111.222.13.28</td>
                        <td>Newyork / USA</td>
                        <td><h6 className="success-labels">Connect</h6></td>
                      </tr>
                      <tr>
                        <td>19 Sep 2023, 10:20:20</td>
                        <td>Safari Macos</td>
                        <td>333.555.10.54</td>
                        <td>Newyork / USA</td>
                        <td><h6 className="success-labels">Connect</h6></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AdminLoginActivity