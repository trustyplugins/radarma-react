import React from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';

const MembershipAddon = () => {
  const routes = all_routes;
  return (
    <>
     <div className="page-wrapper page-settings">
  <div className="content">
    <form>
      <div className="content-page-header content-page-headersplit">
        <h5>Membership Addons</h5>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <div className="form-group">
            <label>Addon Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Addon Name "
            />
          </div>
        </div>
      </div>
      <div className="content-page-header mt-3">
        <h5>Addon Settings</h5>
      </div>
      <div className="location-set">
        <div className="row ">
          <div className="col-lg-6 col-12">
            <div className="location-setcontent">
              <h5>Services</h5>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="form-group mb-0">
              <input type="text" className="form-control" placeholder="0-100" />
              <div className="filter-checkbox mt-2">
                <ul>
                  <li>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span>
                        <i />
                      </span>
                      <b className="check-content">Unlimited</b>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-12">
            <div className="active-switch text-end">
              <label className="switch">
                <input type="checkbox"   checked={true} />
                <span className="sliders round" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="location-set">
        <div className="row ">
          <div className="col-lg-6 col-12">
            <div className="location-setcontent">
              <h5>Appointments</h5>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="form-group mb-0">
              <input type="text" className="form-control" placeholder="0-100" />
              <div className="filter-checkbox mt-2">
                <ul>
                  <li>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span>
                        <i />
                      </span>
                      <b className="check-content">Unlimited</b>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-12">
            <div className="active-switch text-end">
              <label className="switch">
                <input type="checkbox"   checked={true} />
                <span className="sliders round" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="location-set">
        <div className="row ">
          <div className="col-lg-6 col-12">
            <div className="location-setcontent">
              <h5>Staffs</h5>
              <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="form-group mb-0">
              <input type="text" className="form-control" placeholder="0-100" />
              <div className="filter-checkbox mt-2">
                <ul>
                  <li>
                    <label className="checkboxs">
                      <input type="checkbox" />
                      <span>
                        <i />
                      </span>
                      <b className="check-content">Unlimited</b>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-12">
            <div className="active-switch text-end">
              <label className="switch">
                <input type="checkbox"   checked={true} />
                <span className="sliders round" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="btn-path">
          <Link to="#" className="btn btn-cancel me-3">
            Cancel
          </Link>
          <Link type="submit" className="btn btn-primary " to={routes.membership}>Save Changes</Link>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  );
};

export default MembershipAddon;
