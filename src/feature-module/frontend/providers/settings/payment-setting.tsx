import React, { useState } from 'react';
import ProviderHeader from '../common/header';
import ProviderSidebar from '../common/sidebar';
import { Link } from 'react-router-dom';

const PaymentSetting = () => {


  return (
    <>
      <>
        <ProviderHeader />
        <ProviderSidebar />
        <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h5>Payment Settings</h5>
          </div>
        </div>
        {/* Payment settings */}
        <div className="row">
          <div className="col-md-12">
            <div className="general-info">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Account No</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Bank Name</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Bank Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">IFSC Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Pan No</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Sort Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Routing No</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Email Id</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Contact No</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Payment Mode</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Payment Purpose</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="acc-submit d-flex justify-content-end">
              <Link to="#" className="btn btn-light me-3">
                Cancel
              </Link>
              <Link to="#" className="btn btn-dark">
                Update
              </Link>
            </div>
          </div>
          {/* /Account Settings */}
        </div>
        {/* /profile-settings */}
      </div>
    </div>
      </>
    </>
  );
};

export default PaymentSetting;
