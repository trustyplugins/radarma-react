import React from 'react'
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ProviderAuthHeader2 from './common/header2';
import { all_routes } from '../../../../core/data/routes/all_routes';

const ProviderSignupSubscription = () => {
  const routes = all_routes;
    return (
        <div>
          <ProviderAuthHeader2 />
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-8 mx-auto">
                  <div className="login-wrap">
                    <div className="login-header text-center">
                      <h3>Provider Signup</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="price-subscribe">
                    <div className="row">
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
                              <li className="active">One listing submission</li>
                              <li className="active">30 days expiration</li>
                              <li className="active">Special Support</li>
                            </ul>
                            <div className="text-center">
                              <Link to="#" className="btn btn-choose">Choose<Icon.ArrowRightCircle className='react-feather-custom' /></Link>
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
                              <h6>Professional</h6>
                            </div>
                            <h1>$89 <span>/ month</span></h1>
                          </div>	
                          <div className="price-body">
                            <ul>
                              <li className="active">One listing submission</li>
                              <li className="active">60 days expiration</li>
                              <li className="active">Special Support</li>
                            </ul>
                            <div className="text-center">
                              <Link to="#" className="btn btn-choose">Choose <Icon.ArrowRightCircle className='react-feather-custom' /></Link>
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
                              <h6>Startup</h6>
                            </div>
                            <h1>$120 <span>/ month</span></h1>
                          </div>	
                          <div className="price-body">
                            <ul>
                              <li className="active">One listing submission</li>
                              <li className="active">180 days expiration</li>
                              <li className="active">Special Support</li>
                            </ul>
                            <div className="text-center">
                              <Link to="#" className="btn btn-choose">Choose <Icon.ArrowRightCircle className='react-feather-custom' /></Link>
                            </div>							
                          </div>							
                        </div>							
                      </div>
                      {/* /Price List */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mx-auto">
                      <div className="price-btn">
                        <Link to={routes.providerSignupPayment} className="btn btn-primary w-100">Next</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ProviderSignupSubscription