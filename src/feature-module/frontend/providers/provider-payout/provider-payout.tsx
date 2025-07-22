import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { payout } from '../../../../core/data/json/payout';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';
import { payoutDatas } from '../../../../core/models/interface';
import { all_routes } from '../../../../core/data/routes/all_routes';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
import { paymentOption, statusOption2 } from '../../../../core/data/json/dropDownData';
import CustomDropdown from '../../common/dropdown/commonSelect';

const ProviderPayout = () => {
  const routes = all_routes
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([{}]);
  useEffect(() => {
    setData(payout);
  }, []);

  const columns = [
    { field: 'payoutDate', header: 'Payout Date' },
    { field: 'amount', header: 'Amount' },
    { field: 'refunds', header: 'Refunds' },
    { field: 'fees', header: 'Fees' },
    { field: 'total', header: 'Total' },
    { field: 'status', header: 'Status' },
    { field: 'paymentProcessed', header: 'Payment Processed' },
  ];
  const renderBody = (res: payoutDatas) => {
    return (
      <span
        className={` badge ${
          res.status == 'Paid' ? 'badge-success' : 'badge-warning'
        }`}
      >
        {res.status}
      </span>
    );
  };
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
        <h4>Payout</h4>
        <div className="d-flex align-items-center flex-wrap row-gap-3">
          <span className="fs-14 me-2">Sort</span>
          <div className="dropdown me-2">
            <Link
              to="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Newly Added
            </Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item active">
                Ascending
              </Link>
              <Link to="#" className="dropdown-item">
                Descending
              </Link>
            </div>
          </div>
          <div className="dropdown me-2">
            <Link
              to="#"
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Export
            </Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item active">
                Export as PDF
              </Link>
              <Link to="#" className="dropdown-item">
                Export as Excel
              </Link>
            </div>
          </div>
          <Link
            to="#"
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-printer" />
          </Link>
          <Link
            to="#"
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
            id="filter_search"
            onClick={()=>setShowFilter(!showFilter)}
          >
            <i className="ti ti-sort-descending" />
          </Link>
          <Link
            to="#"
            className="btn btn-dark d-flex justify-content-center align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#set-payout"
          >
            <i className="ti ti-settings me-2" />
            Set Payout
          </Link>
        </div>
      </div>
      <div id="filter_inputs" style={{display: showFilter ? 'block':'none'}}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xl">
            <div className="mb-3">
              <div className="sel-cal react-calender Calendar-icon">
                <span>
                  <i className="ti ti-calendar-month" />
                </span>
                <CommonDatePicker/>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={paymentOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={statusOption2}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Payout card */}
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="card w-100">
            <div className="card-body d-flex align-items-center justify-content-between p-3">
              <div className="d-flex align-items-center">
                <span className="app-icon d-flex justify-content-center align-items-center bg-light rounded-circle fs-20 me-2">
                  <i className="ti ti-wallet" />
                </span>
                <div>
                  <span className="fs-14">Available Payout</span>
                  <h5>
                    $ <span className="counter"><CountUp end={180} duration={5} /></span>
                  </h5>
                </div>
              </div>
              <div className="d-flex flex-column">
                <Link
                  to={routes.providerTransaction}
                  className="btn btn-dark btn-sm mb-2"
                >
                  Transactions
                </Link>
                <Link
                  to="#"
                  className="btn btn-light btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#withdraw"
                >
                  Withdraw
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="card w-100">
            <div className="card-body d-flex align-items-center justify-content-between p-3">
              <div className="d-flex align-items-center">
                <span className="app-icon d-flex justify-content-center align-items-center bg-light rounded-circle fs-20 me-2">
                  <i className="ti ti-wallet" />
                </span>
                <div>
                  <span className="fs-14">Last Payout</span>
                  <h5>
                    $ <span className="counter"><CountUp end={230} duration={5} /></span>
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-end">
                <Link
                  to={routes.providerTransaction}
                  className="btn btn-dark btn-sm"
                >
                  Transactions
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 d-flex">
          <div className="card w-100">
            <div className="card-body d-flex align-items-center justify-content-between p-3">
              <div className="d-flex align-items-center">
                <span className="app-icon d-flex justify-content-center align-items-center bg-light rounded-circle fs-20 me-2">
                  <i className="ti ti-wallet" />
                </span>
                <div>
                  <span className="fs-14">Next Payout</span>
                  <h5>
                    $ <span className="counter"><CountUp end={200} duration={5} /></span>
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-end">
                <Link
                  to={routes.providerTransaction}
                  className="btn btn-dark btn-sm"
                >
                  Transactions
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Payout card */}
      </div>
      <div className="row">
        <div className="provide-table manage-table">
          <div className="table-responsive">
            <table className="table  datatable">
              <thead className="thead-light">
                <tr>
                  <th>Payout Date</th>
                  <th>Amount</th>
                  <th>Refunds</th>
                  <th>Fees</th>
                  <th>Total</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Payment Processed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>07 Oct 2024</td>
                  <td>$300</td>
                  <td className="text-danger">-$10.00</td>
                  <td className="text-danger">-$10.00</td>
                  <td>$280</td>
                  <td>paypal</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Paid
                      </span>
                    </div>
                  </td>
                  <td>07 Oct 2024</td>
                </tr>
                <tr>
                  <td>10 Oct 2024</td>
                  <td>$400</td>
                  <td className="text-danger">-$10.00</td>
                  <td className="text-danger">-$10.00</td>
                  <td>$380</td>
                  <td>Stripe</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-skyblue d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Pending
                      </span>
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>20 Oct 2024</td>
                  <td>$200</td>
                  <td className="text-danger">-$10.00</td>
                  <td className="text-danger">-$10.00</td>
                  <td>$180</td>
                  <td>paypal</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Paid
                      </span>
                    </div>
                  </td>
                  <td>20 Oct 2024</td>
                </tr>
                <tr>
                  <td>02 Nov 2024</td>
                  <td>$100</td>
                  <td className="text-danger">-$10.00</td>
                  <td className="text-danger">-$10.00</td>
                  <td>$80</td>
                  <td>paypal</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-skyblue d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Pending
                      </span>
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>15 Nov 2024</td>
                  <td>$300</td>
                  <td className="text-danger">-$10.00</td>
                  <td className="text-danger">-$10.00</td>
                  <td>$280</td>
                  <td>Stripe</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Paid
                      </span>
                    </div>
                  </td>
                  <td>15 Nov 2024</td>
                </tr>
                <tr>
                  <td>22 Nov 2024</td>
                  <td>$350</td>
                  <td className="text-danger">-$10.00</td>
                  <td className="text-danger">-$10.00</td>
                  <td>$330</td>
                  <td>paypal</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Paid
                      </span>
                    </div>
                  </td>
                  <td>22 Nov 2024</td>
                </tr>
                <tr>
                  <td>04 Dec 2024</td>
                  <td>$280</td>
                  <td className="text-danger">-$10.00</td>
                  <td className="text-danger">-$10.00</td>
                  <td>$260</td>
                  <td>paypal</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Paid
                      </span>
                    </div>
                  </td>
                  <td>04 Dec 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-paginate d-flex justify-content-between align-items-center flex-wrap row-gap-3">
          <div className="value d-flex align-items-center">
            <span>Show</span>
            <select>
              <option>7</option>
            </select>
            <span>entries</span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-2 text-gray-9">1 - 07 of 10</span>
            <nav aria-label="Page navigation">
              <ul className="paginations d-flex justify-content-center align-items-center">
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 active d-flex justify-content-center align-items-center "
                    to="#"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center"
                    to="#"
                  >
                    2
                  </Link>
                </li>
                <li className="page-item ">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center"
                    to="#"
                  >
                    3
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Set Payout */}
  <div
    className="modal fade wallet-modal"
    id="set-payout"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between  border-0">
          <h5>Set Your Payouts</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-4">
              <div className="bank-selection">
                <input
                  type="radio"
                  defaultValue="attach_link"
                  id="rolelink"
                  name="attachment"
                  defaultChecked
                />
                <label htmlFor="rolelink">
                  <ImageWithBasePath src="assets/img/icons/paypal.svg" alt="Paypal" />
                  <span className="role-check">
                    <i className="fa-solid fa-circle-check" />
                  </span>
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bank-selection">
                <input
                  type="radio"
                  defaultValue="attach_link"
                  id="rolelink1"
                  name="attachment"
                />
                <label htmlFor="rolelink1">
                  <ImageWithBasePath src="assets/img/icons/stripe.svg" alt="Stripe" />
                  <span className="role-check">
                    <i className="fa-solid fa-circle-check" />
                  </span>
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bank-selection">
                <input
                  type="radio"
                  defaultValue="attach_link"
                  id="rolelink2"
                  name="attachment"
                />
                <label htmlFor="rolelink2">
                  <ImageWithBasePath src="assets/img/icons/bank-transfer.svg" alt="image" />
                  <span className="role-check">
                    <i className="fa-solid fa-circle-check" />
                  </span>
                </label>
              </div>
            </div>
          </div>
          <form>
            <div>
              <label htmlFor="amount" className="form-label">
                Card Number
              </label>
              <input type="text" id="amount" className="form-control" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn bg-gray" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" className="btn btn-dark">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* /Set payout */}
  {/* Set Payout */}
  <div
    className="modal fade wallet-modal"
    id="withdraw"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between  border-0">
          <h5>Withdraw</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="bg-light border p-3 rounded mb-3">
            <div className="row g-3">
              <div className="col-lg-6">
                <div>
                  <p className="mb-1">Available Balance</p>
                  <span className="text-dark">$180</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <p className="mb-1">Payment Method</p>
                  <span className="text-dark">Paypal</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="form-label">Enter Amount</label>
            <input type="text" className="form-control" />
          </div>
          <p className="d-flex align-items-center mt-2">
            <i className="feather icon-info me-2" />
            Minimum withdraw amount is $1.00
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn bg-gray" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" className="btn btn-dark">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* /Set payout */}
</>

  );
};

export default ProviderPayout;
