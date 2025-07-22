import React from 'react';
import * as Icon from 'react-feather';

import { useState } from 'react';
import { DataTable } from 'primereact/datatable';

import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import ProviderOfferModal from '../../common/modals/provideroffer-modal';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
import CustomDropdown from '../../common/dropdown/commonSelect';
import { offerOption, percentageOption, serviceOption } from '../../../../core/data/json/dropDownData';

const ProviderOffer = () => {
  const routes = all_routes
  const data = useSelector((state: any) => state.provider_offer);
  const category = [{ name: 'A -&gt; Z' }, { name: 'Most Helpful' }];
  const [selectedLanguage, setselectedLanguage] = useState();
  const actionBodyTemplate = () => {
    return (
      <td>
        <div className="table-actions">
          <Link
            className="action-set"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-coupon"
          >
            <Icon.Edit size={15} />
          </Link>
          <Link className="action-set confirm-text" to="#">
            <Icon.Trash2 size={15} />
          </Link>
        </div>
      </td>
    );
  };
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
            <h4>Offers</h4>
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
                className="tags active d-flex justify-content-center align-items-center border rounded me-2"
                id="filter_search"
                onClick={()=>setShowFilter(!showFilter)}
              >
                <i className="ti ti-sort-descending" />
              </Link>
              <Link
                to="#"
                className="btn btn-dark d-flex justify-content-center align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add-offer"
              >
                <i className="ti ti-circle-plus me-2" />
                Add Offer
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
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xl">
                <div className="mb-3">
                <CustomDropdown
                options={percentageOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
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
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Offer</th>
                    <th>Offer Price</th>
                    <th>Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={routes.serviceDetails1}
                          className="avatar avatar-lg me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/providers/provider-15.jpg"
                            className="rounded"
                            alt="user"
                          />
                        </Link>
                        <h6 className="fs-14">
                          <Link to={routes.serviceDetails1}>Computer Repair</Link>
                        </h6>
                      </div>
                    </td>
                    <td>$80</td>
                    <td>25%</td>
                    <td>$20</td>
                    <td>28 Sep 2024</td>
                    <td>30 Sep 2024</td>
                    <td>
                      <div className="user-icon d-inline-flex">
                        <Link
                          to="#"
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-offer"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#del-offer"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={routes.serviceDetails1}
                          className="avatar avatar-lg me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/providers/provider-17.jpg"
                            className="rounded"
                            alt="user"
                          />
                        </Link>
                        <h6 className="fs-14">
                          <Link to={routes.serviceDetails1}>Steam Car Wash</Link>
                        </h6>
                      </div>
                    </td>
                    <td>$30</td>
                    <td>25%</td>
                    <td>$20</td>
                    <td>18 Oct 2024</td>
                    <td>22 Oct 2024</td>
                    <td>
                      <div className="user-icon d-inline-flex">
                        <Link
                          to="#"
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-offer"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#del-offer"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={routes.serviceDetails1}
                          className="avatar avatar-lg me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/providers/provider-19.jpg"
                            className="rounded"
                            alt="user"
                          />
                        </Link>
                        <h6 className="fs-14">
                          <Link to={routes.serviceDetails1}>House Cleaning </Link>
                        </h6>
                      </div>
                    </td>
                    <td>$40</td>
                    <td>25%</td>
                    <td>$20</td>
                    <td>20 Oct 2024</td>
                    <td>28 Oct 2024</td>
                    <td>
                      <div className="user-icon d-inline-flex">
                        <Link
                          to="#"
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-offer"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#del-offer"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={routes.serviceDetails1}
                          className="avatar avatar-lg me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/providers/provider-14.jpg"
                            className="rounded"
                            alt="user"
                          />
                        </Link>
                        <h6 className="fs-14">
                          <Link to={routes.serviceDetails1}>Building Construction</Link>
                        </h6>
                      </div>
                    </td>
                    <td>$90</td>
                    <td>25%</td>
                    <td>$20</td>
                    <td>03 Nov 2024</td>
                    <td>07 Nov 2024</td>
                    <td>
                      <div className="user-icon d-inline-flex">
                        <Link
                          to="#"
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-offer"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#del-offer"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={routes.serviceDetails1}
                          className="avatar avatar-lg me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/providers/provider-16.jpg"
                            className="rounded"
                            alt="user"
                          />
                        </Link>
                        <h6 className="fs-14">
                          <Link to={routes.serviceDetails1}>Interior Designing</Link>
                        </h6>
                      </div>
                    </td>
                    <td>$60</td>
                    <td>25%</td>
                    <td>$20</td>
                    <td>12 Nov 2024</td>
                    <td>15 Nov 2024</td>
                    <td>
                      <div className="user-icon d-inline-flex">
                        <Link
                          to="#"
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-offer"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#del-offer"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={routes.serviceDetails1}
                          className="avatar avatar-lg me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/providers/provider-23.jpg"
                            className="rounded"
                            alt="user"
                          />
                        </Link>
                        <h6 className="fs-14">
                          <Link to={routes.serviceDetails1}>Plumbing Services</Link>
                        </h6>
                      </div>
                    </td>
                    <td>$50</td>
                    <td>25%</td>
                    <td>$20</td>
                    <td>15 Nov 2024</td>
                    <td>18 Dec 2024</td>
                    <td>
                      <div className="user-icon d-inline-flex">
                        <Link
                          to="#"
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-offer"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#del-offer"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to={routes.serviceDetails1}
                          className="avatar avatar-lg me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/providers/provider-13.jpg"
                            className="rounded"
                            alt="user"
                          />
                        </Link>
                        <h6 className="fs-14">
                          <Link to={routes.serviceDetails1}>Car Repair Services</Link>
                        </h6>
                      </div>
                    </td>
                    <td>$60</td>
                    <td>25%</td>
                    <td>$20</td>
                    <td>13 Oct 2024</td>
                    <td>14 Oct 2024</td>
                    <td>
                      <div className="user-icon d-inline-flex">
                        <Link
                          to="#"
                          className="me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-offer"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className=""
                          data-bs-toggle="modal"
                          data-bs-target="#del-offer"
                        >
                          <i className="ti ti-trash" />
                        </Link>
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
    {/* Add Offers */}
    <div
      className="modal fade wallet-modal"
      id="add-offer"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-between  border-0">
            <h5>Add Offer</h5>
            <Link
              to="#"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti ti-circle-x-filled fs-20" />
            </Link>
          </div>
          <form >
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Offer Type</label>
                    <CustomDropdown
                options={offerOption}
                className="select d-flex"
                placeholder="Select"
            />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Offer Price</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Start Date</label>
                  <div className="react-calender input-icon position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                    <CommonDatePicker/>
                  </div>
                </div>
                <div className="col-md-6">
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
          </form>
          <div className="modal-footer">
            <button type="button" className="btn bg-gray" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* /Add Offers */}
    {/* Edit Offers */}
    <div
      className="modal fade wallet-modal"
      id="edit-offer"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-between  border-0">
            <h5>Edit Offer</h5>
            <Link to="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="ti ti-circle-x-filled fs-20" />
            </Link>
          </div>
          <form >
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Offer Type</label>
                    <CustomDropdown
                options={offerOption}
                defaultValue={offerOption[0].value}
                className="select d-flex"
                placeholder="Select"
            />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Offer Price</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="$20"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Start Date</label>
                  <div className="react-calender input-icon position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                    <CommonDatePicker/>
                  </div>
                </div>
                <div className="col-md-6">
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
          </form>
          <div className="modal-footer">
            <button type="button" className="btn bg-gray" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit Offers */}
    {/* Delete offer */}
    <div className="modal fade custom-modal" id="del-offer">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
            <h5 className="modal-title">Delete Offer</h5>
            <Link to="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="ti ti-circle-x-filled fs-20" />
            </Link>
          </div>
          <div className="modal-body">
            <div className="write-review">
              <form >
                <p>Are you sure want to delete this offer?</p>
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
    {/* /Delete offer */}
  </>
  );
};
export default ProviderOffer;
