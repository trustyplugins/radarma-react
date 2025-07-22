import React from 'react';

const ProviderDeviceManagement = () => {

  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>Device Management</h5>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12">
          {/* Coupons List */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>Device Name</th>
                  <th>Date</th>
                  <th>IP Address</th>
                  <th>Location </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Chrome - Windows</p>
                  </td>
                  <td>
                    <span className="fs-14">22 Sep 2022, 11:40:30</span>
                  </td>
                  <td>
                    <span className="fs-14">232.222.12.72</span>
                  </td>
                  <td>
                    <span className="fs-14">Chennai / India</span>
                  </td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center">
                      Delete
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Safari Macos</p>
                  </td>
                  <td>
                    <span className="fs-14">21 Sep 2022, 13:10:50</span>
                  </td>
                  <td>
                    <span className="fs-14">224.111.12.75</span>
                  </td>
                  <td>
                    <span className="fs-14">Newyork / USA</span>
                  </td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center">
                      Delete
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Firefox Windows</p>
                  </td>
                  <td>
                    <span className="fs-14">20 Sep 2022, 14:16:10</span>
                  </td>
                  <td>
                    <span className="fs-14">111.222.13.28</span>
                  </td>
                  <td>
                    <span className="fs-14">Chennai / India</span>
                  </td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center">
                      Delete
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Safari Macos</p>
                  </td>
                  <td>
                    <span className="fs-14">19 Sep 2022, 10:20:20</span>
                  </td>
                  <td>
                    <span className="fs-14">333.555.10.54</span>
                  </td>
                  <td>
                    <span className="fs-14">Chennai / India</span>
                  </td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center">
                      Delete
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /Coupons List */}
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  );
};

export default ProviderDeviceManagement;
