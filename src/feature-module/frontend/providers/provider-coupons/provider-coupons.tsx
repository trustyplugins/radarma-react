import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProviderCouponsModal from '../../common/modals/provider-coupons-modal';
import { useSelector } from 'react-redux';
import { Coupons } from '../../../../core/models/interface';
import { companyOption, numberOption, offerOption, serviceOption, staffOption, statusOption2 } from '../../../../core/data/json/dropDownData';
import CustomDropdown from '../../common/dropdown/commonSelect';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';

const ProviderCoupons = () => {
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const data = useSelector((state: any) => state.provider_coupons);

  const value1 = [
    { name: 'A - Z' },
    { name: 'Z - A' },
    { name: 'Most Helpful' },
  ];

  const statusRenderer = (rowData: Coupons) => {
    if (rowData.status === 'Inaction') {
      return <span className="badge-danger">{rowData.status}</span>;
    } else if (rowData.status === 'Action') {
      return <span className="badge-success">{rowData.status}</span>;
    } else {
      return rowData.status;
    }
  };
  const actionButton = () => {
    return (
      <div className="table-actions">
        <Link
          className="action-set"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#edit-coupon"
        >
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <Link className="action-set confirm-text" to="#">
          <Icon.Trash2 className="react-feather-custom" />
        </Link>
      </div>
    );
  };

  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <h5>Coupons</h5>
        <div className="d-flex align-items-center">
          <span className="fs-14 me-2">Sort</span>
          <div className="dropdown me-2">
            <Link
              to="#"
              className="dropdown-toggle bg-light-300 "
              data-bs-toggle="dropdown"
            >
              Newly Added
            </Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item active">
                Recently Added
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
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
            id="filter_search"
            onClick={()=>setShowFilter(!showFilter)}
          >
            <i className="ti ti-sort-descending" />
          </Link>
          <Link
            to="#"
            className="btn btn-dark d-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#add-coupons"
          >
            <i className="ti ti-circle-plus me-2" />
            Add Coupon
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
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={staffOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xl">
            <div className="mb-3">
            <CustomDropdown
                options={numberOption}
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
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12">
          {/* Coupons List */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Type</th>
                  <th>Discount </th>
                  <th>Limit</th>
                  <th>Used</th>
                  <th>Valid Date</th>
                  <th>Service Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>New Year</td>
                  <td>NEW2024</td>
                  <td>Percentage</td>
                  <td>5%</td>
                  <td>100</td>
                  <td>1</td>
                  <td>
                    <p className="fs-14 mb-0">Jan 01, 2023 - Jan 04, 2023</p>
                    Once per customer days
                  </td>
                  <td>Interior Designing</td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Active
                    </span>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-coupons"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-coupons"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Black Friday</td>
                  <td>GIFTGUIDE</td>
                  <td>Percentage</td>
                  <td>5%</td>
                  <td>100</td>
                  <td>1</td>
                  <td>
                    <p className="fs-14 mb-0">20 Sep 2023 - 22 Sep 2023</p>Once
                    per customer days
                  </td>
                  <td>Car Repair</td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Inactive
                    </span>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-coupons"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-coupons"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Christmas</td>
                  <td>Winter2024</td>
                  <td>Fixed</td>
                  <td>$2.00</td>
                  <td>100</td>
                  <td>1</td>
                  <td>
                    <p className="fs-14 mb-0">Dec 24, 2023 - Dec 26, 2023</p>
                    Once per customer days
                  </td>
                  <td>House Cleaning</td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Active
                    </span>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-coupons"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-coupons"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Valentines</td>
                  <td>Valentine24</td>
                  <td>Percentage</td>
                  <td>5%</td>
                  <td>100</td>
                  <td>1</td>
                  <td>
                    <p className="fs-14 mb-0">Feb 13, 2023 -Feb 15, 202</p>Once
                    per customer days
                  </td>
                  <td>Computer Services</td>
                  <td>
                    <span className="badge badge-soft-danger d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Inactive
                    </span>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-coupons"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-coupons"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Halloween</td>
                  <td>SPOOKY15</td>
                  <td>Percentage</td>
                  <td>5%</td>
                  <td>100</td>
                  <td>1</td>
                  <td>
                    <p className="fs-14 mb-0">Nov 11, 2023 - Nov 12, 2023</p>
                    Once per customer days
                  </td>
                  <td>Car Wash</td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Active
                    </span>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-coupons"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-coupons"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Welcome Bonus</td>
                  <td>Welcome24</td>
                  <td>Percentage</td>
                  <td>5%</td>
                  <td>100</td>
                  <td>1</td>
                  <td>
                    <p className="fs-14 mb-0">Nov 15, 2023 - Nov 17, 2023</p>
                    Once per customer days
                  </td>
                  <td>Plumbing</td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Active
                    </span>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-coupons"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-coupons"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Thankful Deal</td>
                  <td>Thank24</td>
                  <td>Percentage</td>
                  <td>5%</td>
                  <td>100</td>
                  <td>1</td>
                  <td>
                    <p className="fs-14 mb-0">Nov 20, 2023 - Nov 30, 2023</p>
                    Once per customer days
                  </td>
                  <td>Commercial Painting </td>
                  <td>
                    <span className="badge badge-soft-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Active
                    </span>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-coupons"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-coupons"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /Coupons List */}
        </div>
        <div className="d-flex justify-content-between align-items-center">
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
  {/* /Page Wrapper */}
  {/* Add coupons */}
  <div className="modal fade custom-modal" id="add-coupons">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between  border-0">
          <h5>Add Coupon</h5>
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
                <div className="mb-3">
                  <label className="form-label">Services</label>
                  <CustomDropdown
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Coupon Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Code</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Coupon Type</label>
                      <CustomDropdown
                        options={offerOption}
                        className="select d-flex"
                        placeholder="Select"
                    />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Discount</label>
                      <div className=" input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-square-rounded-percentage" />
                        </span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Date</label>
                      <div className="react-calender input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                        <CommonDatePicker/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">End Date</label>
                      <div className="react-calender input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                        <CommonDatePicker/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <CustomDropdown
                        options={companyOption}
                        className="select d-flex"
                        placeholder="Select"
                    />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="form-check form-switch d-flex align-items-center">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          role="switch"
                          id="switch-sm"
                          defaultChecked
                        />
                        <h6 className="fs-14">Once per Customer</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex  flex-column">
                      <label className="form-label">End Date</label>
                      <div className="d-flex">
                        <div className="form-check me-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Active
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Inactive
                          </label>
                        </div>
                      </div>
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
          <button type="button" className="btn btn-dark">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* /Add coupons */}
  {/*Edit coupons */}
  <div className="modal fade custom-modal" id="edit-coupons">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between  border-0">
          <h5>Edit Coupon</h5>
          <Link to="#" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Services</label>
                  <CustomDropdown
                        options={serviceOption}
                        defaultValue={serviceOption[0].value}
                        className="select d-flex"
                        placeholder="Select"
                    />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Coupon Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Black Friday"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Code</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="GIFTGUIDE"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Coupon Type</label>
                      <CustomDropdown
                        options={offerOption}
                        defaultValue={offerOption[0].value}
                        className="select d-flex"
                        placeholder="Select"
                    />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Discount</label>
                      <div className=" input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-square-rounded-percentage" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="5%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Date</label>
                      <div className="react-calender input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                        <CommonDatePicker/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">End Date</label>
                      <div className="react-calender input-icon position-relative">
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                        <CommonDatePicker/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <CustomDropdown
                        options={companyOption}
                        defaultValue={companyOption[0].value}
                        className="select d-flex"
                        placeholder="Select"
                    />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="form-check form-switch d-flex align-items-center">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          role="switch"
                          id="switch-sm"
                          defaultChecked
                        />
                        <h6 className="fs-14">Once per Customer</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex  flex-column">
                      <label className="form-label">End Date</label>
                      <div className="d-flex">
                        <div className="form-check me-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Active
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault4"
                          >
                            Inactive
                          </label>
                        </div>
                      </div>
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
          <button type="button" className="btn btn-dark">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit coupons */}
  {/* Delete Staff */}
  <div className="modal fade custom-modal" id="del-coupons">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete coupons</h5>
          <Link to="#" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form>
              <p>Are you sure want to delete this coupons?</p>
              <div className="modal-submit text-end">
                <Link
                  to="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Staff */}
</>

  );
};

export default ProviderCoupons;
