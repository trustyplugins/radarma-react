import React from 'react';
import SettingsSidebar from '../common/settingssidebar';

const PreferenceSettings = () => {
  return (
    <div className="page-wrapper page-settings">
      <SettingsSidebar />
      <div className="content w-100">
        <div className="content-page-header">
          <h5>Preference Settings</h5>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="nav-menus mb-3">
              <h4>Maintenance Mode</h4>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="nav-menus mb-3">
              <h4>Wallet</h4>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="nav-menus mb-3">
              <h4>Coupon</h4>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="nav-menus mb-3">
              <h4>Multilanguage</h4>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="nav-menus mb-3">
              <h4>Subscription</h4>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="nav-menus mb-3">
              <h4>Chat</h4>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceSettings;
