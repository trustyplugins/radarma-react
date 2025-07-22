import React from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';

const PayoutSettigs = () => {
  const routes = all_routes;
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <form>
            <div className="row">
              <div className="col-lg-7 col-sm-12 m-auto">
                <div className="content-page-header d-flex justify-content-between">
                  <h5>Payout Settings</h5>
                  <div className="active-switch d-flex align-items-center">
                    <h6 className="fs-14">Enable</h6>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={true} />
                      <span className="sliders round" />
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-grouphead pay-req d-flex justify-content-between">
                    <h2>Payout Request Auto Process</h2>
                    <div className="active-switch d-flex align-items-center">
                      <h6>Enable</h6>
                      <label className="switch">
                        <input type="checkbox" defaultChecked={true} />
                        <span className="sliders round" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Payout No of days to process</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Number of days"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Payout No of days to process</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Number of days"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        No of Payouts <span>(Per Month)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter No of Payouts"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Minimum Payout Amount</label>
                      <input
                        type="text"
                        placeholder="Enter Minimum Payout Amount"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Payout Commission</label>
                      <input
                        type="text"
                        placeholder="Enter Payout Commission"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-path">
                      <Link to="#" className="btn btn-cancel me-3">
                        Cancel
                      </Link>
                      <Link
                        to={routes.payoutRequest}
                        className="btn btn-primary "
                      >
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PayoutSettigs;
