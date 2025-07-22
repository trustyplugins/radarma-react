import React from 'react';
import CustomerWalletModal from '../../common/modals/customer-wallet-modals';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';

const CustomerWallet = () => {
  return (
    <>
      <BreadCrumb title="Wallet" item1="Customer" item2="Wallet" />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 ">
                <CustomerSideBar />
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h4>Wallet</h4>
                  <div>
                    <Link
                      to="#"
                      className="btn btn-dark btn-sm d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#add-wallet"
                    >
                      <i className="ti ti-square-rounded-plus me-1" />
                      Add Wallet
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg col-md-3">
                    <div className="card p-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="wallet-icon bg-gray rounded-circle d-flex align-items-center justify-content-center">
                            <i className="ti ti-wallet" />
                          </span>
                        </div>
                        <div>
                          <span className="fs-13 text-gray text-truncate">
                            Wallet Balance
                          </span>
                          <h6 className="fs-18">$351.4</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md-3 ">
                    <div className="card p-3 ">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="wallet-icon bg-gray rounded-circle d-flex align-items-center justify-content-center">
                            <i className="ti ti-wallet" />
                          </span>
                        </div>
                        <div>
                          <span className="fs-13 text-gray">Total Credit</span>
                          <h6 className="fs-18">$590.40</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md-3 ">
                    <div className="card p-3 ">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="wallet-icon bg-gray rounded-circle d-flex align-items-center justify-content-center">
                            <i className="ti ti-wallet" />
                          </span>
                        </div>
                        <div>
                          <span className="fs-13 text-gray">Total Debit</span>
                          <h6 className="fs-18">$2,288.04</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md-3 ">
                    <div className="card p-3">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="wallet-icon bg-gray rounded-circle d-flex align-items-center justify-content-center">
                            <i className="ti ti-wallet" />
                          </span>
                        </div>
                        <div>
                          <span className="fs-13 text-gray mb-0">Taxes</span>
                          <h6 className="fs-18">$351.4</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg col-md-3 ">
                    <div className="card p-3 ">
                      <div className="d-flex align-items-center">
                        <div className="me-3">
                          <span className="wallet-icon bg-gray rounded-circle d-flex align-items-center justify-content-center">
                            <i className="ti ti-wallet" />
                          </span>
                        </div>
                        <div>
                          <span className="fs-13 text-gray mb-0">Savings</span>
                          <h5 className="fs-18">$200.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h6>Wallet Transactions</h6>
                </div>
                <div className="row">
                  <div className="col-12 ">
                    <div className="table-resposnive">
                      <table className="table mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Payment Type</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p className="fs-14">Wallet Topup</p>
                            </td>
                            <td>
                              <span className="text-success">+$80</span>
                            </td>
                            <td>
                              <p className="text-gray fs-14">
                                07 Oct 2022 11:22:51{' '}
                              </p>
                            </td>
                            <td>
                              <p className="fs-14">Paypal</p>
                            </td>
                            <td>
                              <span className="badge badge-success-100">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">Purchase</p>
                            </td>
                            <td>
                              <span className="text-danger">-$20</span>
                            </td>
                            <td>
                              <p className="text-gray fs-14">
                                06 Oct 2022 11:22:51{' '}
                              </p>
                            </td>
                            <td>
                              <p className="fs-14">Paypal</p>
                            </td>
                            <td>
                              <span className="badge badge-success-100">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">Refund</p>
                            </td>
                            <td>
                              <span className="text-success">+$40</span>
                            </td>
                            <td>
                              <p className="text-gray fs-14">
                                06 Oct 2022 11:22:51{' '}
                              </p>
                            </td>
                            <td>
                              <p className="fs-14">Paypal</p>
                            </td>
                            <td>
                              <span className="badge badge-success-100">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">Wallet Topup</p>
                            </td>
                            <td>
                              <span className="text-success">+$100</span>
                            </td>
                            <td>
                              <p className="text-gray fs-14">
                                28 Sep 2022 11:22:51{' '}
                              </p>
                            </td>
                            <td>
                              <p className="fs-14">Paypal</p>
                            </td>
                            <td>
                              <span className="badge badge-success-100">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">Purchase</p>
                            </td>
                            <td>
                              <span className="text-danger">-$50</span>
                            </td>
                            <td>
                              <p className="text-gray fs-14">
                                07 Oct 2022 11:22:51{' '}
                              </p>
                            </td>
                            <td>
                              <p className="fs-14">Paypal</p>
                            </td>
                            <td>
                              <span className="badge badge-success-100">
                                Completed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">Refund</p>
                            </td>
                            <td>
                              <span className="text-danger">+$60</span>
                            </td>
                            <td>
                              <p className="text-gray fs-14">
                                07 Oct 2022 11:22:51{' '}
                              </p>
                            </td>
                            <td>
                              <p className="fs-14">Paypal</p>
                            </td>
                            <td>
                              <span className="badge badge-success-100">
                                Completed
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <p>Show</p>
                    <div className="dropdown mx-2">
                      <Link
                        to="#"
                        className="dropdown-toggle bg-light-600 "
                        data-bs-toggle="dropdown"
                      >
                        07
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                          >
                            1
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p>entries</p>
                  </div>
                  <nav aria-label="Page navigation">
                    <ul className="paginations d-flex justify-content-center align-items-center">
                      <li className="me-3">1 - 07 of 10</li>
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
                          className="page-link-1 d-flex justify-content-center align-items-center "
                          to="#"
                        >
                          2
                        </Link>
                      </li>
                      <li className="page-item ">
                        <Link
                          className="page-link-1 d-flex justify-content-center align-items-center "
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
      </div>
      {/* /Page Wrapper */}
      <CustomerWalletModal/>
      
    </>
  );
};

export default CustomerWallet;
