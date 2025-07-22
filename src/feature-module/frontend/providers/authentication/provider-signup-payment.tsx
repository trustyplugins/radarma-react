import React from 'react'
import { Link } from 'react-router-dom';
import ProviderAuthHeader2 from './common/header2';
import { all_routes } from '../../../../core/data/routes/all_routes';

const ProviderSignupPayment = () => {
  const routes = all_routes;
    return (
        <div>
          <ProviderAuthHeader2 />
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-9 mx-auto">
                  <div className="login-header">
                    <h3>Payment</h3>
                  </div>
                </div>
                <div className="col-md-12 col-lg-9 mx-auto">
                  <div className="row">
                    {/* Payment Method */}
                    <div className="col-md-7">
                      <div className="payment-methods">
                        <h6>Payments Methods</h6>
                        <label className="custom_radio">
                          <input type="radio" name="payment" className="payment-card" defaultChecked />
                          <span className="checkmark" />
                          Debit or Credit Card
                        </label>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group form-info">
                              <label className="col-form-label">Name on Card</label>
                              <input className="form-control" type="text" placeholder="John Smith" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group form-info">
                              <label className="col-form-label">Card Number</label>
                              <input className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" type="text" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group form-info">
                              <label className="col-form-label">Expire Month</label>
                              <input className="form-control" placeholder="MM" type="text" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group form-info">
                              <label className="col-form-label">Expire Year</label>
                              <input className="form-control" placeholder="YYYY" type="text" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group form-info">
                              <label className="col-form-label">Expire Year</label>
                              <input className="form-control" placeholder="****" type="text" />
                            </div>
                          </div>
                        </div>	
                        <label className="custom_radio">
                          <input type="radio" name="payment" className="payment-card" />
                          <span className="checkmark" />
                          Paypal
                        </label>
                        <label className="custom_radio">
                          <input type="radio" name="payment" className="payment-card" />
                          <span className="checkmark" />
                          Bank Transfer
                        </label>
                        <h6>Billing Address <span>(Optional)</span></h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group form-info">
                              <label className="col-form-label">Company Name</label>
                              <input className="form-control" type="text" placeholder="Enter company Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group form-info">
                              <label className="col-form-label">Address</label>
                              <input className="form-control" placeholder="Enter Your Address" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group form-info">
                              <label className="col-form-label">City</label>
                              <input className="form-control" placeholder="Enter your city" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group form-info">
                              <label className="col-form-label">Zipcode</label>
                              <input className="form-control" placeholder="Enter Your Zipcode" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group form-info">
                              <label className="col-form-label">Country</label>
                              <input className="form-control" placeholder="Enter your Country" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group form-info">
                              <label className="col-form-label">VAT Number</label>
                              <input className="form-control" placeholder="Enter Your VAT Nymber" type="text" />
                            </div>
                          </div>
                        </div>	
                      </div>							
                    </div>
                    {/* /Payment Method */}
                    {/* Subscription Details */}
                    <div className="col-md-5">
                      <div className="payment-subscribe">
                        <h6>Subscription Details</h6>
                        <div className="subscribe-box">
                          <ul>
                            <li>Plan Name: <span className="me-0">Professional <Link to="#" className="ms-3">Edit</Link></span></li>
                            <li>Plan Amount: <span>$89.00</span></li>
                            <li>Tax: <span>$10.00</span></li>
                            <li>Plan Amount: <span>$99.00</span></li>
                          </ul>
                        </div>	
                        <Link to={routes.providerDashboard} className="btn btn-primary">Proceed to Pay $99.00</Link>
                        <label className="custom_check mb-0">
                          <input type="checkbox" name="rememberme" className="rememberme" defaultChecked />
                          <span className="checkmark" />By confirming you to agree Terms &amp; Privacy you will be charge $99 
                          every month until you cancel your subscription.
                        </label>
                      </div>							
                    </div>
                    {/* /Subscription Details */}
                  </div>						
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ProviderSignupPayment