import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomerDevicemanage } from '../../../../core/models/interface';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';

const DeviceManagement = () => {
  const data = useSelector(
    (state: any) => state.device_management,
  );
  const statusRender = (rowData: CustomerDevicemanage) => {
    const [status] = rowData.status.split('\n');
    return (
      <Link to="#">
        <span className="badge-danger">{status}</span>
      </Link>
    );
  };

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
              <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                <h4>Device Management</h4>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <div className="table-resposnive">
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th>Device Name</th>
                          <th>Date</th>
                          <th>IP Address</th>
                          <th>Location</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p className="fs-14">Chrome - Windows</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">22 Sep 2022, 11:40:30</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">232.222.12.72</p>
                          </td>
                          <td>
                            <p className="fs-14 text-gray">Chennai / India</p>
                          </td>
                          <td>
                            <span className="badge badge-danger-transparent p-2">
                              Delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="fs-14">Safari Macos</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">21 Sep 2022, 13:10:50</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">224.111.12.75</p>
                          </td>
                          <td>
                            <p className="fs-14 text-gray">Newyork / USA</p>
                          </td>
                          <td>
                            <span className="badge badge-danger-transparent p-2">
                              Delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="fs-14">Firefox Windows</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">20 Sep 2022, 14:16:10</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">111.222.13.28</p>
                          </td>
                          <td>
                            <p className="fs-14 text-gray">Chennai / India</p>
                          </td>
                          <td>
                            <span className="badge badge-danger-transparent p-2">
                              Delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="fs-14">Safari Macos</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">19 Sep 2022, 10:20:20</p>
                          </td>
                          <td>
                            <p className="text-gray fs-14">333.555.10.54</p>
                          </td>
                          <td>
                            <p className="fs-14 text-gray">Chennai / India</p>
                          </td>
                          <td>
                            <span className="badge badge-danger-transparent p-2">
                              Delete
                            </span>
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
    </>
  );
};

export default DeviceManagement;
