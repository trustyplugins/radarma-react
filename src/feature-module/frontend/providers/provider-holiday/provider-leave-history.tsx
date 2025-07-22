import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
import { staffOption, statusOption2 } from '../../../../core/data/json/dropDownData';
import CustomDropdown from '../../common/dropdown/commonSelect';

const ProviderLeaveHistory = () => {
    const [showFilter, setShowFilter] = useState(false);
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-3 mb-4">
        <h5>Holiday &amp; Leave</h5>
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
          <Link to="#" className="btn btn-dark active  me-2">
            <i className="feather-file-text" /> Leave History
          </Link>
          <Link
            to="#"
            className="btn act-btn  me-2"
            data-bs-toggle="modal"
            data-bs-target="#add-holiday"
          >
            <i className="feather-plus" /> Add Holiday
          </Link>
          <Link
            to="#"
            className="btn act-btn  add-set"
            data-bs-toggle="modal"
            data-bs-target="#add-leave"
          >
            <i className="feather-plus" /> Add Leave
          </Link>
        </div>
      </div>
      <div id="filter_inputs" style={{display: showFilter ? 'block':'none'}}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xl">
            <div className="mb-3">
              <div className="sel-cal Calendar-icon">
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
                options={staffOption}
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
        <div className="provide-table manage-table">
          <div className="table-responsive">
            <table className="table  datatable">
              <thead className="thead-light">
                <tr>
                  <th>Leave Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Approved By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6 className="fs-14 fw-normal">
                      May 03, 2024 - May 04, 2024
                    </h6>
                    <span className="fs-12">2days</span>
                  </td>
                  <td>Out for personal reasons.</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Approved
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-normal">
                          <Link to="#">Jeffrey Akridge,</Link>
                        </h6>
                        <span className="fs-12">Admin</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-leave"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#del-leave"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="fs-14 fw-normal">
                      Jun 10, 2024 - Jun 12, 2024
                    </h6>
                    <span className="fs-12">3 days</span>
                  </td>
                  <td>Health Issues.</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Approved
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-normal">
                          <Link to="#">Jeffrey Akridge,</Link>
                        </h6>
                        <span className="fs-12">Admin</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-leave"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#del-leave"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="fs-14 fw-normal">
                      Jun 18, 2024 - Jun 18, 2024
                    </h6>
                    <span className="fs-12">1 days</span>
                  </td>
                  <td>Out for medical appointments.</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Approved
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-normal">
                          <Link to="#">Jeffrey Akridge,</Link>
                        </h6>
                        <span className="fs-12">Admin</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-leave"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#del-leave"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="fs-14 fw-normal">
                      Jul 08, 2024 - Jul 10, 2024
                    </h6>
                    <span className="fs-12">3 days</span>
                  </td>
                  <td>Away due to a family event.</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Approved
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-normal">
                          <Link to="#">Jeffrey Akridge,</Link>
                        </h6>
                        <span className="fs-12">Admin</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-leave"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#del-leave"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="fs-14 fw-normal">
                      Jul 20, 2024 - Jul 20, 2024
                    </h6>
                    <span className="fs-12">1 days</span>
                  </td>
                  <td>Absent due to weather conditions.</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Approved
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-normal">
                          <Link to="#">Jeffrey Akridge,</Link>
                        </h6>
                        <span className="fs-12">Admin</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-leave"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#del-leave"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="fs-14 fw-normal">
                      Aug 13, 2024 - Aug 14, 2024
                    </h6>
                    <span className="fs-12">2 days</span>
                  </td>
                  <td>Personal Illness.</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Approved
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-normal">
                          <Link to="#">Jeffrey Akridge,</Link>
                        </h6>
                        <span className="fs-12">Admin</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-leave"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#del-leave"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="fs-14 fw-normal">
                      Aug 22, 2024 - Aug 24, 2024
                    </h6>
                    <span className="fs-12">3 days</span>
                  </td>
                  <td>Out for vacation.</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Approved
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </span>
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-normal">
                          <Link to="#">Jeffrey Akridge,</Link>
                        </h6>
                        <span className="fs-12">Admin</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-leave"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className=""
                        data-bs-toggle="modal"
                        data-bs-target="#del-leave"
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
  {/* Add Holiday */}
  <div className="modal fade custom-modal" id="add-holiday">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Holiday</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body pt-0">
          <form action="#">
            <div className="wallet-add">
              <div className="form-group">
                <label className="col-form-label">Holiday Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Holiday Name"
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">From</label>
                <div className=" react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">To</label>
                <div className=" react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">Description</label>
                <textarea className="form-control" rows={4} defaultValue={""} />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-end align-items-center">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Holiday */}
  {/* Add Leave */}
  <div className="modal fade custom-modal" id="add-leave">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Leave </h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body pt-0">
          <form action="#">
            <div className="wallet-add">
              <div className="form-group">
                <label className="col-form-label">From</label>
                <div className=" react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">To</label>
                <div className=" react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">Reason</label>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-end align-items-center">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Leave */}
  {/* Edit Leave */}
  <div className="modal fade custom-modal" id="edit-leave">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Edit Leave </h5>
          <Link to="#" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body pt-0">
          <form action="#">
            <div className="wallet-add">
              <div className="form-group">
                <label className="col-form-label">From</label>
                <div className=" react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">To</label>
                <div className=" react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">Reason</label>
                <textarea
                  className="form-control"
                  rows={3}
                  cols={12}
                  defaultValue={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius odio similique labore ad magni obcaecati facere beatae at.\n                                    "
                  }
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-end align-items-center">
            <Link to="#" className="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </Link>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Leave */}
  {/* Delete Leave */}
  <div className="modal fade custom-modal" id="del-leave">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete leave</h5>
          <Link to="#" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form>
              <p>Are you sure want to delete this leave?</p>
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
  {/* /Delete Leave */}
</>

  )
}

export default ProviderLeaveHistory