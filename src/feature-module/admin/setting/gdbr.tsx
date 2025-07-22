import React from 'react'
import SettingsSidebar from '../common/settingssidebar'

const Gdbr = () => {
  return (
    <>
      <div className="page-wrapper page-settings">
  <div className="content-sidelink">
    <div className="content-sidelinkheading">
      <h6>Settings</h6>
    </div>
   <SettingsSidebar/>
  </div>
  <div className="content w-100">
    <div className="col-lg-8">
      <div className="content-page-header d-flex d-flex justify-content-between">
        <h5>Cookies Agreement</h5>
        <div className="active-switch d-flex align-items-center">
          <h6 className="fs-14">Enable</h6>
          <label className="switch">
            <input type="checkbox" defaultChecked={false} />
            <span className="sliders round" />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <label className="fs-14 fw-500">Cookies Constent Text</label>
            <textarea
              className="form-control"
              placeholder="Enter Constent Text"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="fs-14 fw-500">Cookies Position</label>
            <ul className="custom-radiosbtn">
              <li>
                <label className="radiossets">
                  Right
                  <input type="radio" defaultChecked={true} name="radio" />
                  <span className="checkmark-radio" />
                </label>
              </li>
              <li>
                <label className="radiossets">
                  Left
                  <input type="radio" name="radio" />
                  <span className="checkmark-radio" />
                </label>
              </li>
              <li>
                <label className="radiossets">
                  Center
                  <input type="radio" name="radio" />
                  <span className="checkmark-radio" />
                </label>
              </li>
              <li>
                <label className="radiossets">
                  Full Width
                  <input type="radio" name="radio" />
                  <span className="checkmark-radio" />
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="form-group">
            <label className="fs-14 fw-500">Button Text</label>
            <input
              type="text"
              className="form-control"
              placeholder="Agree Button"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="form-group">
            <label className="fs-14 fw-500">&nbsp;</label>
            <input
              type="text"
              className="form-control"
              placeholder="Decline Button"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group mb-0">
            <label className="fs-14 fw-500">Show Decline Button</label>
          </div>
          <div className="active-switch toogle-primary d-flex align-items-center mb-3 ">
            <h6>Show</h6>
            <label className="switch ">
              <input type="checkbox" defaultChecked={true} />
              <span className="sliders round" />
            </label>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="fs-14 fw-500">Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Link"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Gdbr