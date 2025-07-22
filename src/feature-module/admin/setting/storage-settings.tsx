import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import SettingsSidebar from '../common/settingssidebar';
import StorageSettingsModal from '../common/modals/storage-settings-modal';

const StorageSettings = () => {
  return (
    <>
      <div className="page-wrapper ">
      <SettingsSidebar />
  <div className="content w-100 ps-0 pt-0">
    
    <div className="row">
      <div className="content-table">
        <div className="content-page-header">
          <h5>Storage</h5>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="nav-menus mb-3">
                <h4>Local Storage</h4>
                <div className="active-switch">
                  <label className="switch">
                    <input type="checkbox"  />
                    <span className="sliders round" />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nav-menus mb-3">
                <h4>AWS Storage</h4>
                <div className="settings-view">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#aws-config"
                  >
                   <Icon.Settings size={15}/>
                  </Link>
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
    </div>
  </div>
</div>
<StorageSettingsModal/>

    </>
  )
}

export default StorageSettings
