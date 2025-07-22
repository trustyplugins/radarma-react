import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath'
import * as Icon from 'react-feather'
import SocialAuthenticationModal from '../common/modals/social-authentication-modal'

const SocialAuthentication = () => {
  return (
    <>
      <div className="page-wrapper page-settings">
  <div className="content w-100">
    <div className="form-groupheads d-flex d-flex justify-content-between">
      <h2>Enable Social Authendication</h2>
      <div className="active-switch d-flex align-items-center">
        <h6 className="fs-14">Enable</h6>
        <label className="switch">
          <input type="checkbox" defaultChecked={true} />
          <span className="sliders round" />
        </label>
      </div>
    </div>
    <div className="row ">
      <div className="col-lg-6 col-sm-6 col-12">
        <div className="nav-menus location-set loc-set soc-active">
          < ImageWithBasePath src="assets/img/company/facebook.png" alt="img" />
          <div className="settings-view">
            <Link
             to="#"
              className="me-3 me-0"
              data-bs-toggle="modal"
              data-bs-target="#facebook-auth"
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
      <div className="col-lg-6 col-sm-6 col-12">
        <div className="nav-menus location-set loc-set">
          <ImageWithBasePath src="assets/img/company/google.png" alt="img" />
          <div className="settings-view">
            <Link
              to="#"
              className="me-3 me-0"
              data-bs-toggle="modal"
              data-bs-target="#google-auth"
            >
            <Icon.Settings size={15}/>
            </Link>
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
</div>
<SocialAuthenticationModal/>

    </>
  )
}

export default SocialAuthentication
