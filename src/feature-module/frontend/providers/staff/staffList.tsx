import React, { useState } from 'react'
import StaffModal from './staffModal'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes'
import CommonDatePicker from '../../../../core/hooks/commonDatePicker'
import CustomDropdown from '../../common/dropdown/commonSelect'
import { staffIdOption, staffOption, statusOption } from '../../../../core/data/json/dropDownData'

const StaffList = () => {
  const routes = all_routes
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
        <h4>Staffs</h4>
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
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
            id="filter_search"
            onClick={()=>setShowFilter(!showFilter)}
          >
            <i className="ti ti-sort-descending" />
          </Link>
          <Link
            to={routes.staffGrid}
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-layout-grid" />
          </Link>
          <Link
            to={routes.staffList}
            className="tags active d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-list" />
          </Link>
          <Link
            to="#"
            className="btn btn-dark d-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#add-staff"
          >
            <i className="ti ti-circle-plus me-2" />
            Add Staffs
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
                options={staffIdOption}
                className="select d-flex"
                placeholder="Select"
            />
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
                options={statusOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="provide-table manage-table ">
          <div className="table-responsive">
            <table className="table  datatable">
              <thead className="thead-light">
                <tr>
                  <th>Staff ID</th>
                  <th>Staffs Name</th>
                  <th>Created On</th>
                  <th>No of Services</th>
                  <th>Total Bookings</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ST0263</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-medium">
                          <Link to={routes.staffDetails}>Anthony Lewis</Link>
                        </h6>
                        <span className="fs-12">anthony@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>14/01/2024</td>
                  <td>2</td>
                  <td>0</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-staff"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-staff"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST5246</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-35.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-medium">
                          <Link to={routes.staffDetails}>Brian Villalobos</Link>
                        </h6>
                        <span className="fs-12">brian@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>21/01/2024</td>
                  <td>3</td>
                  <td>4 </td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-staff"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-staff"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST7645</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-36.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-medium">
                          <Link to={routes.staffDetails}>Harvey Smith</Link>
                        </h6>
                        <span className="fs-12">harvey@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>20/02/2024</td>
                  <td>2</td>
                  <td>6</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-staff"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-staff"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST1269</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-11.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-medium">
                          <Link to={routes.staffDetails}>Stephan Peralt</Link>
                        </h6>
                        <span className="fs-12">peral@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>15/03/2024</td>
                  <td>6</td>
                  <td>10</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-success-100 d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Active
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-staff"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-staff"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST7436</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-15.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-medium">
                          <Link to={routes.staffDetails}>Doglas Martini</Link>
                        </h6>
                        <span className="fs-12">martniwr@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>12/04/2024</td>
                  <td>2</td>
                  <td>15</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Inactive
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-staff"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-staff"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST3695</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-20.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-medium">
                          <Link to={routes.staffDetails}>Linda Ray</Link>
                        </h6>
                        <span className="fs-12">ray456@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>20/05/2024</td>
                  <td>1</td>
                  <td>12</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Inactive
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-staff"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-staff"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ST5348</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/user/user-01.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 fw-medium">
                          <Link to={routes.staffDetails}>Elliot Murray</Link>
                        </h6>
                        <span className="fs-12">murray@example.com</span>
                      </div>
                    </div>
                  </td>
                  <td>06/07/2024</td>
                  <td>1</td>
                  <td>4</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="badge badge-danger-transparent d-flex align-items-center">
                        <i className="ti ti-point-filled" />
                        Inactive
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-staff"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#del-staff"
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
  <StaffModal/>
</>

  )
}

export default StaffList