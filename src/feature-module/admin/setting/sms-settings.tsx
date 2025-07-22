import React from 'react'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath'
import SettingsSidebar from '../common/settingssidebar'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';

const SmsSettings = () => {
  return (
    <>
     <div className="page-wrapper page-settings">
    <div className="content w-100 ">
      <div className="content-sidelink float-start">
        <div className="content-sidelinkheading">
          <h6>Settings</h6>
        </div>
        <SettingsSidebar />
      </div>
      <div className="content w-100">
        <div className="content-page-header">
          <h5>SMS Settings</h5>
        </div>
        <div className="location-set">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="location-setcontent">
                <h5>SMS</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
              </div>
            </div>
            <div className="col-lg-6 col-12 text-end">
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="location-set">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="location-setcontent">
                <h5>Default OTP</h5>
                <h6>You can use default OTP 1234 for Demo</h6>
              </div>
            </div>
            <div className="col-lg-6 col-12 text-end">
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row location-set">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="form-grouphead mb-2">
              <h2>SMS Provider</h2>
            </div>
            <div className="nav-menus">
              <ImageWithBasePath src="assets/img/company/nexmo.png" alt="img" />
              <div className="settings-view">
                <div className="active-switch">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="sliders round" />
                  </label>
                </div>
                <Link to="#" className="ms-3 me-0" data-bs-toggle="modal" data-bs-target="#nexmo-config"><Icon.Settings className="standard-feather" /></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="form-grouphead mb-2">
              <h2>&nbsp;</h2>
            </div>
            <div className="nav-menus">
              <ImageWithBasePath src="assets/img/company/2-factor.png" alt="img" />
              <div className="settings-view">
                <div className="active-switch">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="sliders round" />
                  </label>
                </div>
                <Link to="#" className="ms-3 me-0" data-bs-toggle="modal" data-bs-target="#twofactor-config"><Icon.Settings className="standard-feather" /></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="form-grouphead mb-2">
              <h2>&nbsp;</h2>
            </div>
            <div className="nav-menus">
              <ImageWithBasePath src="assets/img/company/twilio.png" alt="img" />
              <div className="settings-view">
                <div className="active-switch">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="sliders round" />
                  </label>
                </div>
                <Link to="#" className="ms-3 me-0" data-bs-toggle="modal" data-bs-target="#twilio-config"><Icon.Settings className="standard-feather" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    {/* Nexmo */}
    <div className="modal fade" id="nexmo-config">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Nexmo Configuration</h5>
                <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
                  <Icon.X className="standard-feather" />
                </button>
              </div>
              <div className="modal-body pt-0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">API Key</label>
                    <input type="text" className="form-control" placeholder="Enter API key" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">API Secret Key</label>
                    <input type="text" className="form-control" placeholder="Enter API Secret Key" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Sender ID</label>
                    <input type="text" className="form-control" placeholder="Enter API Sender ID" />
                  </div>
                  <div className="text-end">
                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Nexmo */}
        {/* 2Factor */}
        <div className="modal fade" id="twofactor-config">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">2Factor Configuration</h5>
                <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
                  <Icon.X className="standard-feather" />
                </button>
              </div>
              <div className="modal-body pt-0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">API Key</label>
                    <input type="text" className="form-control" placeholder="Enter API key" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">API Secret Key</label>
                    <input type="text" className="form-control" placeholder="Enter API Secret Key" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Sender ID</label>
                    <input type="text" className="form-control" placeholder="Enter API Sender ID" />
                  </div>
                  <div className="text-end">
                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /2Factor */}
        {/* Twilio */}
        <div className="modal fade" id="twilio-config">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Twilio Configuration</h5>
                <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
                  <Icon.X className="standard-feather" />
                </button>
              </div>
              <div className="modal-body pt-0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">API Key</label>
                    <input type="text" className="form-control" placeholder="Enter API key" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">API Secret Key</label>
                    <input type="text" className="form-control" placeholder="Enter API Secret Key" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Sender ID</label>
                    <input type="text" className="form-control" placeholder="Enter API Sender ID" />
                  </div>
                  <div className="text-end">
                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Twilio */}
    </>
  )
}

export default SmsSettings