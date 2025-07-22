import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const Pricing = () => {
  return (
      <>
      <BreadCrumb title='Pricing' item1='Home' item2='Pricing'/>

      <>
  {/* Page Wrapper */}
  <div className="page-wrapper subscription">
    <div className="content content-two">
      <div className="container">
        {/* Subscription */}
        <div className="row provider-price align-items-center">
          <div className="col-md-12">
            <div className="choose-title text-center">
              <div className="status-toggle status-tog d-inline-flex align-items-center gap-2">
                Monthly
                <div className="  d-flex align-items-center form-check form-switch">
                  <input
                    type="checkbox"
                    id="status-one"
                    className="form-check-input"
                  />
                </div>
                Yearly
              </div>
            </div>
          </div>
          {/* Price List */}
          <div className="col-md-4 ">
            <div className=" card ">
              <div className=" card-header">
                <div className="price-level">
                  <h6 className="fs-14">Basic</h6>
                </div>
                <h1 className="d-flex align-items-center ">
                  $50 <span className="text-gray fs-12 ms-2">/ month</span>
                </h1>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    10 Services
                  </li>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                    10 Stafff
                  </li>
                  <li>
                    {" "}
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    100 Appointments
                  </li>
                  <li>
                    <i className="ti ti-square-x me-1 text-danger" />
                    Gallery
                  </li>
                  <li>
                    <i className="ti ti-square-x me-1 text-danger" /> Addition
                    Services
                  </li>
                </ul>
                <div className="text-center d-flex align-items-center">
                  <Link
                    to="#"
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
                  >
                    Choose Plan{" "}
                    <i className="feather-arrow-right-circle ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Price List */}
          {/* Price List */}
          <div className="col-md-4 ">
            <div className="card active business-card">
              <div className=" card-header">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <div className="price-level">
                      <h6 className="fs-14">Business</h6>
                    </div>
                    <h1 className="d-flex align-items-center ">
                      $200 <span className="text-gray fs-12 ms-2">/ month</span>
                    </h1>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    10 Services
                  </li>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                    10 Stafff
                  </li>
                  <li>
                    {" "}
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    100 Appointments
                  </li>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    Gallery
                  </li>
                  <li>
                    <i className="ti ti-square-x me-1 text-danger" /> Addition
                    Services
                  </li>
                </ul>
                <div className="text-center d-flex align-items-center">
                  <Link
                    to="#"
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
                  >
                    Choose Plan{" "}
                    <i className="feather-arrow-right-circle ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Price List */}
          {/* Price List */}
          <div className="col-md-4 ">
            <div className="card ">
              <div className="card-header">
                <div>
                  <div className="price-level">
                    <h6 className="fs-14">Enterprise</h6>
                  </div>
                  <h1 className="d-flex align-items-center ">
                    $450 <span className="text-gray fs-12 ms-2">/ month</span>
                  </h1>
                </div>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    10 Services
                  </li>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                    10 Stafff
                  </li>
                  <li>
                    {" "}
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    100 Appointments
                  </li>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />
                    Gallery
                  </li>
                  <li>
                    <i className="ti ti-square-rounded-check me-1 text-success" />{" "}
                    Addition Services
                  </li>
                </ul>
                <div className="text-center d-flex align-items-center">
                  <Link
                    to="#"
                    className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
                  >
                    Choose Plan{" "}
                    <i className="feather-arrow-right-circle ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Price List */}
        </div>
        {/* /Subscription */}
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

      </>
  );
};

export default Pricing;
