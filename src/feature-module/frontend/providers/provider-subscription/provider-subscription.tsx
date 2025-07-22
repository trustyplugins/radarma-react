import React from 'react'
import * as Icon from 'react-feather';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';

const ProviderSubscription = () => {
  const routes = all_routes;
    return (
        <div>
          <div className="page-wrapper">
            <div className="content container-fluid">
              <div className="row">	
                <div className="col-md-6">	
                  <div className="widget-title">
                    <h4>Subscription</h4>
                  </div>
                </div>
                <div className="col-md-6 text-md-end">	
                  <ul className="subs-list">
                    <li>
                      <Link to={routes.providerSubscription} className="active">Plan &amp; Pricing</Link>
                    </li>
                    <li>
                      <Link to={routes.providerAddon}>Addons</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Subscription */}
              <div className="row provider-price">
                <div className="col-md-12">
                  <div className="choose-title text-center">
                    <h6>Choose Plan</h6>
                    <div className="status-toggle status-tog d-inline-flex align-items-center">
                      Yearly
                      <input type="checkbox" id="status_1" className="check" defaultChecked />
                      <label htmlFor="status_1" className="checktoggle">checkbox</label>
                      Monthly
                    </div>
                  </div>
                </div>
                {/* Price List */}
                <div className="col-md-4 d-flex">
                  <div className="price-card flex-fill">
                    <div className="price-head">
                      <div className="price-level">
                        <h6>Basic</h6>
                      </div>
                      <h1>$50 <span>/ month</span></h1>
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
                        <Link to="#" className="btn btn-choose">Choose Plan <Icon.ArrowRightCircle className='react-feather-custom' /></Link>
                      </div>							
                    </div>							
                  </div>							
                </div>
                {/* /Price List */}
                {/* Price List */}
                <div className="col-md-4 d-flex">
                  <div className="price-card active flex-fill">
                    <div className="price-head">
                      <div className="price-level">
                        <h6>Business</h6>
                        <span className="badge-success">Active</span>
                      </div>
                      <h1>$200 <span>/ month</span></h1>
                    </div>	
                    <div className="price-body">
                      <ul>
                        <li className="active">20 Services</li>
                        <li className="active">20 Stafff</li>
                        <li className="active">Unlimited Appointments</li>
                        <li className="active">Gallery</li>
                        <li className="inactive">Addition Services</li>
                      </ul>
                      <div className="text-center">
                        <Link to="#" className="btn btn-choose">Choose Plan <Icon.ArrowRightCircle className='react-feather-custom' /></Link>
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
                      <h1>$450 <span>/ month</span></h1>
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
                        <Link to="#" className="btn btn-choose">Choose Plan <Icon.ArrowRightCircle className='react-feather-custom' /></Link>
                      </div>							
                    </div>							
                  </div>							
                </div>
                {/* /Price List */}
              </div>
              {/* /Subscription */}
            </div>
          </div>
        </div>
      );
}

export default ProviderSubscription