import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import SettingsSidebar from '../common/settingssidebar';

const ProviderSettings = () => {
  return (
    <div className="page-wrapper ">
      <div className="content w-100 ps-0 pt-0">
      <SettingsSidebar />
        <div className="row">
          <div className="content-table">
            <div className="col-12">
              <div className="form-groupheads d-flex d-flex justify-content-between">
                <h2>Provider Commission Activatation</h2>
                <div className="active-switch">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="sliders round" />
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Provider Commission</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="eg 10%"
                  />
                  <p>
                  <Icon.AlertCircle className='react-feather-custom' /> Note: Provider
                    Commission will be deducted from Provider Earnings
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn-path">
                  <Link to="#" className="btn btn-cancel me-3">
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-primary">
                    Update
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderSettings;
