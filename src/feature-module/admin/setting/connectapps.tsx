import React from 'react'
import SettingsSidebar from '../common/settingssidebar'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath'

const ConnectApps = () => {
  return (
    <>
      <div className="page-wrapper page-settings">
        <SettingsSidebar/>
        <div className="content w-100">
          <div className="content-page-header">
            <h5>Connected Apps</h5>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="connectetapps">
                <div className="connectetappsimg">
                  <div className="connectet-img">
                    <ImageWithBasePath src="assets/img/icons/google.svg" alt="img" />
                  </div>
                  <div className="connectet-content">
                    <h3>Google Calendar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                  </div>
                </div>
                <div className="connectetappscontent">
                  <h6 className="success-labels">Connect</h6>
                  <div className="active-switch">
                    <label className="switch">
                      <input type="checkbox" defaultChecked={true} />
                      <span className="sliders round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ConnectApps
