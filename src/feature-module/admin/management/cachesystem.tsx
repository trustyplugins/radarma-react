import React from 'react'
import { Link } from 'react-router-dom'

const CacheSystem = () => {
  return (
    <>
      <div className="page-wrapper">
  <div className="content">
    <div className="row">
      <div className="col-lg-7 col-sm-12 m-auto">
        <div className="content-page-header">
          <h5>Cache System</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-groupheads d-flex d-flex justify-content-between">
              <h2>Service Cache System</h2>
              <div className="active-switch toogle-primary d-flex align-items-center">
                <h6 className="fs-14">Enable</h6>
                <label className="switch">
                  <input type="checkbox"   checked={true}/>
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Refresh Cache Files When Database Changes</label>
              <ul className="custom-radiosbtn">
                <li>
                  <label className="radiossets">
                    Yes
                    <input type="radio"   checked={true} name="radio" />
                    <span className="checkmark-radio" />
                  </label>
                </li>
                <li>
                  <label className="radiossets">
                    No
                    <input type="radio" name="radio" />
                    <span className="checkmark-radio" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>
                Cache Refresh Time (Minute){" "}
                <span>
                  (After this time, your cache files will be refreshed.)
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Cache Refresh Time"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-groupheads d-flex d-flex justify-content-between">
              <h2>Static Content Cache System</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="form-groupheads d-flex d-flex justify-content-between">
              <h2 className="fs-14">Status</h2>
              <div className="active-switch toogle-primary d-flex align-items-center">
                <h6 className="fs-14">Enable</h6>
                <label className="switch">
                  <input type="checkbox"   checked={true} />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="btn-path">
              <Link to="#" className="btn btn-primary me-3">
                {" "}
                Save
             </Link>
              <Link to="#" className="btn btn-cancel ">
                Reset
             </Link>
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

export default CacheSystem
