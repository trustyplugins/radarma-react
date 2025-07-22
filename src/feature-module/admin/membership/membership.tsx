import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../core/data/routes/all_routes';

const Membership = () => {
  const routes = all_routes;
  return (
    <>
    <div className="page-wrapper page-settings">
    <div className="content">
      <div className="content-page-header content-page-headersplit">
        <h5>Membership Plans</h5>
        <div className="list-btn">
          <ul>
            <li>
              <Link className="btn btn-primary" to={routes.addMembership}>
                <i className="fa fa-plus me-2" />
                Add Membership
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="price-toggle">
            <div className="status-toggle d-inline-flex align-items-center">
              Monthly
              <input type="checkbox" id="status_1" className="check" />
              <label htmlFor="status_1" className="checktoggle">
                checkbox
              </label>
              Yearly
            </div>
          </div>
        </div>
        {/* Price List */}
        <div className="col-md-4 d-flex">
          <div className="price-card flex-fill">
            <div className="price-head">
              <div className="price-level">
                <h6>Basic</h6>
                <span className="badge-active">Action</span>
              </div>
              <h1>
                $50 <span>/ month</span>
              </h1>
            </div>
            <div className="price-body">
              <ul>
                <li className="active">10 Services</li>
                <li className="active">10 Stafff</li>
                <li className="active">100 Appointments</li>
                <li className="inactive">Gallery</li>
                <li className="inactive">Addition Services</li>
              </ul>
              <div className="text-center">
                <Link to="to" className="btn btn-choose">
                  Choose
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Price List */}
        {/* Price List */}
        <div className="col-md-4 d-flex">
          <div className="price-card flex-fill">
            <div className="price-head">
              <div className="price-level">
                <h6>Business</h6>
              </div>
              <h1>
                $200 <span>/ month</span>
              </h1>
            </div>
            <div className="price-body">
              <ul>
                <li className="active">20 Services</li>
                <li className="active">20 Stafff</li>
                <li className="active">Unlimited Appointments</li>
                <li className="inactive">Gallery</li>
                <li className="inactive">Addition Services</li>
              </ul>
              <div className="text-center">
                <Link to="to" className="btn btn-choose">
                  Choose
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Price List */}
        {/* Price List */}
        <div className="col-md-4 d-flex">
          <div className="price-card flex-fill">
            <div className="price-head">
              <div className="price-level">
                <h6>Enterprise</h6>
              </div>
              <h1>
                $450 <span>/ month</span>
              </h1>
            </div>
            <div className="price-body">
              <ul>
                <li className="active">Unlimited Services</li>
                <li className="active">Unlimited Stafff</li>
                <li className="active">Unlimited Appointments</li>
                <li className="active">Gallery</li>
                <li className="active">Addition Services</li>
              </ul>
              <div className="text-center">
                <Link to="to" className="btn btn-choose">
                  Choose
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Price List */}
      </div>
    </div>
  </div>
  
    </>
  )
}

export default Membership
