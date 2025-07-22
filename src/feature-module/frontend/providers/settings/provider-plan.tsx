import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const ProviderPlan = () => {
  const [active, setactive] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const value = [{ name: 'Services' },{ name: 'Plumbing' }, { name: 'Computer Repairs' }];
  const value2 = [{ name: 'Jacob Kline' }, { name: 'William Smith' }];
  const handleDateChange = (date: any) => {
    setSelectedDate2(date);
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const renderMonthContent = (
    monthIndex: number,
    shortMonthText: string,
    fullMonthText: string
  ) => {
    return (
      <div>
        {/* Custom rendering of the month content */}
        {fullMonthText}
      </div>
    );
  };
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>Plan &amp; Billings</h5>
          <div className="d-flex align-items-center">
            <Link
              to="#"
              className="btn btn-dark d-flex align-items-center"
            >
              Plans
            </Link>
          </div>
        </div>
      </div>
      {/* Plan & Billings */}
      <div className="row">
        <div className="col-lg-6 d-flex flex-column">
          {/* Current Plan */}
          <h6 className="subhead-title">Current Plan</h6>
          <div className="card flex-fill">
            <div className="card-body">
              <div className="plan-info row">
                <div className="col-md-9">
                  <div className="plan-term">
                    <h6 className="mb-1">Business</h6>
                    <p className="mb-2">
                      Our most popular plan for small teams.
                    </p>
                    <p className="fs-12 text-dark">
                      <i className="feather icon-calendar fs-12" /> Renew Date:{" "}
                      <span className="fs-12 text-gray">Jan 22, 2023</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="plan-price">
                    <h4>$200</h4>
                    <p>per user/month</p>
                  </div>
                </div>
              </div>
              <div className="plan-btns">
                <Link to="#" className="btn btn-light  me-2">
                  Cancel Subscription
                </Link>
                <Link to="#" className="btn btn-dark ">
                  Upgrade
                </Link>
              </div>
            </div>
          </div>
          {/* /Current Plan */}
        </div>
        <div className="col-lg-6 d-flex flex-column">
          {/* Current Plan */}
          <h6 className="subhead-title">Payment</h6>
          <div className="card flex-fill">
            <div className="card-body">
              <div className="plan-info row">
                <div className="col-md-9">
                  <div className="plan-term">
                    <h6 className="mb-1">Last Payment</h6>
                    <p className="fs-12 text-dark">
                      <i className="feather icon-calendar fs-12 me-1" />
                      <span className="fs-12 text-gray">
                        January 22, 2022
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="plan-price d-flex justify-content-end">
                    <span className="badge badge-soft-success d-inline-flex align-items-center">
                      Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="plan-btns row">
                <div className="col-md-7">
                  <div className="plan-term">
                    <h6 className="mb-1">Next Payment</h6>
                    <p className="fs-12 text-dark">
                      <i className="feather icon-calendar fs-12 me-1" />
                      <span className="fs-12 text-gray">
                        January 22, 2023
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="d-flex justify-content-end">
                    <Link to="#" className="btn btn-dark ">
                      Manage Payment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Current Plan */}
        </div>
        <div className="col-md-12">
          <h6 className="user-title">Payment Method</h6>
          <div className="row">
            {/* Credit Card */}
            <div className="col-md-6 col-xl-4 d-flex flex-column">
              <div onClick={() => setactive(!active)}  className={`card card-payments  flex-fill ${
                          active ? 'active' : ''
                        }`}>
                <div className="card-body">
                  <div className=" row align-items-center">
                    <div className="col-md-6">
                      <h6>Credit Card</h6>
                      <div className="card-num">
                        <div className="visa-img">
                          <ImageWithBasePath src="assets/img/icons/visa.svg" alt="image" />
                        </div>
                        <h6>
                          **** **** **** <span>9525</span>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-remove d-flex justify-content-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-light"
                        >
                          Remove Card <i className="feather icon-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Credit Card */}
            {/* Debit Card */}
            <div className="col-md-6 col-xl-4 d-flex flex-column">
              <div onClick={() => setactive(!active)} className={`card card-payments  flex-fill ${
                          !active ? 'active' : ''
                        }`}>
                <div className="card-body">
                  <div className=" row align-items-center">
                    <div className="col-md-6">
                      <h6>Debit Card</h6>
                      <div className="card-num">
                        <div className="visa-img">
                          <ImageWithBasePath
                            src="assets/img/icons/mastercard.svg"
                            alt="image"
                          />
                        </div>
                        <h6>
                          **** **** **** <span>6842</span>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-remove d-flex justify-content-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-light"
                        >
                          Remove Card <i className="feather icon-trash-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Debit Card */}
            {/* Add Card */}
            <div className="col-md-6 col-xl-4 d-flex flex-column">
              <div className="card-payment-add flex-fill">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#add-payment"
                >
                  <span className="rounded-circle">
                    <i className="feather icon-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* /Add Card */}
          </div>
          {/* Billing History */}
          <div className="page-header">
            <div className="row flex-fill">
              <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                <h5>Billing History</h5>
                <div className="d-flex align-items-center">
                  <span className="text-dark me-2">Sort</span>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-light-300 "
                      data-bs-toggle="dropdown"
                    >
                      Newly Added
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        to="#"
                        className="dropdown-item active"
                      >
                        Recently Added
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-light-300 "
                      data-bs-toggle="dropdown"
                    >
                      Export
                    </Link>
                    <div className="dropdown-menu">
                      <Link
                        to="#"
                        className="dropdown-item active"
                      >
                        Pdf
                      </Link>
                      <Link
                        to="#"
                        className="dropdown-item active"
                      >
                        Excel
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="tags d-flex justify-content-center align-items-center  rounded me-2"
                  >
                    <i className="ti ti-printer" />
                  </Link>
                  <Link
                    to="#"
                    className="tags d-flex justify-content-center align-items-center border rounded me-2 "
                    id="filter_search"
                    onClick={()=>setShowFilter(!showFilter)}
                  >
                    <i className="ti ti-adjustments" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="filter_inputs" style={{display: showFilter ? 'block':'none'}}>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="mb-3">
                  <div className="sel-cal react-calender Calendar-icon">
                    <span>
                      <i className="ti ti-calendar-month" />
                    </span>
                    <DatePicker
                selected={selectedDate2}
                onChange={handleDateChange}               
                placeholderText='DD/MM/YYYY'
                className="form-control datetimepicker w-100"
              />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="mb-3">
                <Dropdown
                          value={selectedValue}
                          onChange={(e) => setSelectedValue(e.value)}
                          options={value}
                          optionLabel="name"
                          placeholder="Select"
                          className="select service-select"
                        />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="mb-3">
                <Dropdown
                          value={selectedValue}
                          onChange={(e) => setSelectedValue(e.value)}
                          options={value2}
                          optionLabel="name"
                          placeholder="Select"
                          className="select service-select"
                        />
                </div>
              </div>
            </div>
          </div>
          <div className="provide-table">
            <div className="table-responsive">
              <table className="table  datatable mb-0">
                <thead className="thead-light">
                  <tr>
                    <th>Payout Date</th>
                    <th>Plan Name</th>
                    <th>Amount</th>
                    <th>Invoice</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray">28 Sep 2024</td>
                    <td className="text-body">Basic, Monthly</td>
                    <td className="text-gray fw-500">$50.00</td>
                    <td className="text-gray">Invoice 08 sep, 2023</td>
                    <td>
                      <span className="badge badge-soft-success">Paid</span>
                    </td>
                    <td className="d-flex">
                      <Link to="#">
                        <span className="p-1 bg-light-300 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray">28 Oct 2024</td>
                    <td className="text-body">Standard, Monthly</td>
                    <td className="text-gray fw-500">$200.00</td>
                    <td className="text-gray">Invoice 08 Oct, 2022</td>
                    <td>
                      <span className="badge badge-soft-success">Paid</span>
                    </td>
                    <td className="d-flex">
                      <Link to="#">
                        <span className="p-1 bg-light-300 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-gray">28 Nov 2024</td>
                    <td className="text-body">Enterprice, Year</td>
                    <td className="text-gray fw-500">$200.00</td>
                    <td className="text-gray">Invoice 08 Nov, 2022</td>
                    <td>
                      <span className="badge badge-soft-success">Paid</span>
                    </td>
                    <td className="d-flex">
                      <Link to="#">
                        <span className="p-1 bg-light-300 rounded-circle d-flex align-items-center justify-content-center">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div id="tablelength" />
            </div>
            <div className="col-md-7">
              <div className="table-ingopage">
                <div id="tableinfo" />
                <div id="tablepagination" />
              </div>
            </div>
          </div>
          {/* /Billing History */}
        </div>
      </div>
      {/* /Plan & Billings */}
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Add Payment */}
  <div className="modal fade custom-modal" id="add-payment">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Payment Method</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <form>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Expiration date</label>
                      <div className=" input-icon react-calender position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                        <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date) => setSelectedDate(date)}  // Update state when a date is selected
                        renderMonthContent={renderMonthContent}           // Custom month content
                        showMonthYearPicker                               // Month and Year picker
                        dateFormat="MM-yyyy"                              // Date format
                        className="form-control monthpicker w-100"        // Custom class
                      />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Security code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="modal-footer">
          <button type="button" className="btn bg-gray" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
            Add Card
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Payment */}
</>

  );
};

export default ProviderPlan;
