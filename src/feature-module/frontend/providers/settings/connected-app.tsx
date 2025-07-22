import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const ConnectedApp = () => {
  return (
    <>
      <>
        <div className="content">
          <div className="container">
            <div className="row">
             
              <div className="col-lg-9">
                <div className="widget-title">
                  <h4>Connected Apps</h4>
                </div>
                <div className="linked-item">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="linked-acc">
                        <span className="link-icon">
                          <ImageWithBasePath src="assets/img/google.png" alt="image" />
                        </span>
                        <div className="linked-info">
                          <h6>Google Calendar</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <div className="d-flex align-items-center justify-content-md-end">
                        <Link to="#" className="btn-gconnect">
                          Connect
                        </Link>
                        <div className="status-toggle status-tog d-inline-flex justify-content-between align-items-center">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                          />
                          <label htmlFor="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Security Settings */}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ConnectedApp;
