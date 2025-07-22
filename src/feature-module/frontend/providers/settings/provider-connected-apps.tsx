import React from 'react';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const ProviderConnectedApps = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>Connected Apps</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="card connected-apps">
            <div className="card-body">
              <div className="d-flex app-body-content">
                <div className="me-2">
                  <span className="rounded-circle">
                    <ImageWithBasePath
                      src="assets/img/icons/google-icon.svg"
                      alt="img"
                      className="img-fluid avatar-md"
                    />
                  </span>
                </div>
                <div>
                  <h6 className="fs-16 mb-1">Google Calendar</h6>
                  <p className="fs-14">
                    Simplifies scheduling and keeps track of your events and
                    appointments.
                  </p>
                </div>
              </div>
              <div className="app-footer-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="badge badge-soft-success">Connect</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-end form-check form-switch">
                      <input
                        type="checkbox"
                        id="status-2"
                        className="form-check-input"
                        defaultChecked
                      />
                    </div>
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

  );
};

export default ProviderConnectedApps;
