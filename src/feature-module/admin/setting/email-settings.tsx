import React from 'react'
import SettingsSidebar from '../common/settingssidebar'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const EmailSettings = () => {
  return (
    <>
    <div className="page-wrapper page-settings">
      <div className="content-sidelink">
        <div className="content-sidelinkheading">
          <h6>Settings</h6>
        </div>
        <SettingsSidebar />
      </div>
      <div className="content w-100">
        <div className="content-page-header">
          <h5>Email Settings</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <label className="form-label">Mail Provider</label>
                  </div>
                  <div className="col-lg-6">
                    <div className="nav-menus location-set">
                      <h4>PHP Mail</h4>
                      <div className="settings-view">
                        <Link to="#" data-bs-toggle="modal" data-bs-target="#phpmail-config"><Icon.Settings className="standard-feather" /></Link>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="nav-menus location-set">
                      <h4>SMTP</h4>
                      <div className="settings-view">
                        <Link to="#" data-bs-toggle="modal" data-bs-target="#smtp-config"><Icon.Settings className="standard-feather" /></Link>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group-set">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                          <h4>Email From Name</h4>
                          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="form-group mb-0">
                            <label className="form-label">Name</label>
                            <input type="text" placeholder="Enter From Name" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-set">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                          <h4>Email From Address</h4>
                          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="form-group mb-0">
                            <label className="form-label">Address</label>
                            <input type="text" placeholder="Enter Address" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-set mb-0">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                          <h4>Email Global Footer</h4>
                          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <div className="form-group mb-0">
                            <label className="form-label">Global Footer</label>
                            <input type="text" placeholder="Enter Your Message" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="form-groupheads">
                  <h2>Send Test Email</h2>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="text" placeholder="Enter Email Address" className="form-control" />
                </div>
                <div className="btn-path">
                  <Link to="#" className="btn btn-cancel me-3">Reset</Link>
                  <Link to="#" className="btn btn-primary">Send Email</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* PHP Mail Config */}
      <div className="modal fade" id="phpmail-config">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">PHP Mail</h5>
                <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
                <Icon.X className="standard-feather" />
                </button>
              </div>
              <div className="modal-body pt-0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email From Address</label>
                    <input type="text" className="form-control" defaultValue="demo2" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Password</label>
                    <div className="form-icon">
                      <input type="password" className="form-control" defaultValue="*************" />
                      <span><Icon.Lock className="standard-feather" /></span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Emails From Name</label>
                    <input type="text" className="form-control" defaultValue="John Smith" />
                  </div>
                  <div className="text-end">
                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /PHP Mail Config */}
        {/* SMTP Config */}
        <div className="modal fade" id="smtp-config">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">SMTP</h5>
                <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
                 <Icon.X className="standard-feather" />
                </button>
              </div>
              <div className="modal-body pt-0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email From Address</label>
                    <input type="text" className="form-control" defaultValue="demo2" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Password</label>
                    <div className="form-icon">
                      <input type="password" className="form-control" defaultValue="*************" />
                      <span><Icon.Lock className="standard-feather" /></span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Host</label>
                    <input type="text" className="form-control" defaultValue="ssl://smtp.googlemail.com" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Email Port</label>
                    <input type="text" className="form-control" defaultValue={465} />
                  </div>
                  <div className="text-end">
                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /SMTP Config */}
  </>
  )
}

export default EmailSettings