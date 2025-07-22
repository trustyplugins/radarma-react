import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
import CustomDropdown from '../../common/dropdown/commonSelect';
import { customerOption, serviceOption, statusOption2, transactionOption } from '../../../../core/data/json/dropDownData';

const ProviderTransaction = () => {
    const [showFilter, setShowFilter] = useState(false);
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
        <h4>Transaction</h4>
        <div className="d-flex align-items-center flex-wrap row-gap-3">
          <p className="text-dark me-2 mb-0">Sort</p>
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
                Newly Added
              </Link>
              <Link to="#" className="dropdown-item">
                Oldest
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
                Export
              </Link>
              <Link to="#" className="dropdown-item">
                Import
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
            className="tags d-flex justify-content-center align-items-center border rounded"
            id="filter_search"
            onClick={()=>setShowFilter(!showFilter)}
          >
            <i className="ti ti-sort-descending" />
          </Link>
        </div>
      </div>
      <div id="filter_inputs" style={{display: showFilter ? 'block':'none'}}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
              <div className="sel-cal react-calender Calendar-icon">
                <span>
                  <i className="ti ti-calendar-month" />
                </span>
                <CommonDatePicker/>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={transactionOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={customerOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
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
        <div className="provide-table manage-table">
          <div className="table-responsive">
            <table className="table  datatable">
              <thead className="thead-light">
                <tr>
                  <th>Transaction ID</th>
                  <th>Customer Name</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Payment Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#transaction-detail"
                    >
                      TXID24081032
                    </Link>
                  </td>
                  <td>Lori Broaddus</td>
                  <td>
                    <h6 className="fs-14 fw-normal">Computer Repair</h6>
                  </td>
                  <td>07 Oct 2024 11:22:51</td>
                  <td>Paypal</td>
                  <td>$300</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Completed
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#transaction-detail"
                    >
                      TXID24081054
                    </Link>
                  </td>
                  <td>Anthony Lewis</td>
                  <td>
                    <h6 className="fs-14 fw-normal">Car Repair Services</h6>
                  </td>
                  <td>15 Oct 2024 11:22:51</td>
                  <td>Credit Card</td>
                  <td>$500</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-skyblue d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Pending
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#transaction-detail"
                    >
                      TXID24081062
                    </Link>
                  </td>
                  <td>Harvey Smith</td>
                  <td>
                    <h6 className="fs-14 fw-normal">Steam Car Wash</h6>
                  </td>
                  <td>24 Oct 2024 11:22:51</td>
                  <td>Paypal</td>
                  <td>$400</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Failed
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#transaction-detail"
                    >
                      TXID24081056
                    </Link>
                  </td>
                  <td>Linda Ray</td>
                  <td>
                    <h6 className="fs-14 fw-normal">House Cleaning</h6>
                  </td>
                  <td>04 Nov 2024 11:22:51</td>
                  <td>COD</td>
                  <td>$430</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Completed
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#transaction-detail"
                    >
                      TXID24081040
                    </Link>
                  </td>
                  <td>Elliot Murray</td>
                  <td>
                    <h6 className="fs-14 fw-normal">Building Construction</h6>
                  </td>
                  <td>13 Nov 2024 11:22:51</td>
                  <td>Paypal</td>
                  <td>$600</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-skyblue d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Pending
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#transaction-detail"
                    >
                      TXID24081028
                    </Link>
                  </td>
                  <td>Connie Waters</td>
                  <td>
                    <h6 className="fs-14 fw-normal">Interior Designing</h6>
                  </td>
                  <td>20 Nov 2024 11:22:51</td>
                  <td>Credit Card</td>
                  <td>$550</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Completed
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#transaction-detail"
                    >
                      TXID24081075
                    </Link>
                  </td>
                  <td>Lori Broaddus</td>
                  <td>
                    <h6 className="fs-14 fw-normal">Commercial Painting</h6>
                  </td>
                  <td>08 Dec 2024 11:22:51</td>
                  <td>Paypal</td>
                  <td>$380</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Failed
                      </span>
                    </div>
                  </td>
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
  {/*Transaction Detail */}
  <div
    className="modal fade  rounded"
    id="transaction-detail"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between  border-0">
          <h5>Transaction Details</h5>
          <span className="badge badge-primary-transparent">TXID24081032</span>
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
            <div className="col-md-6">
              <div className="mb-3">
                <span className="fs-12">Client Name</span>
                <h6 className="fs-14">Lori Broaddus</h6>
              </div>
              <div className="mb-3">
                <span className="fs-12">Transaction Date</span>
                <h6 className="fs-14">07 Oct 2024 11:22:51</h6>
              </div>
              <div>
                <span className="fs-12">Amount</span>
                <h6 className="fs-14">$300</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <span className="fs-12">Service</span>
                <h6 className="fs-14">Computer Repair</h6>
              </div>
              <div className="mb-3">
                <span className="fs-12">Payment Method</span>
                <h6 className="fs-14">Paypal</h6>
              </div>
              <div>
                <span className="fs-12">Status</span>
                <div className="d-flex align-items-center">
                  <span className="badge badge-success-100 d-flex align-items-center">
                    <i className="ti ti-point-filled" />
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Transaction detail */}
</>

  )
}

export default ProviderTransaction