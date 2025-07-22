import React, { useState } from 'react'
import StaffModal from './staffModal'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes'
import CommonDatePicker from '../../../../core/hooks/commonDatePicker'
import CustomDropdown from '../../common/dropdown/commonSelect'
import { staffIdOption, staffOption, statusOption } from '../../../../core/data/json/dropDownData'

const StaffGrid = () => {
  const routes = all_routes
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
        <h4>Staffs</h4>
        <div className="d-flex align-items-center">
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
            className="tags active d-flex justify-content-center align-items-center border rounded me-2"
          >
            <i className="ti ti-layout-grid" />
          </Link>
          <Link
            to={routes.staffList}
            className="tags d-flex justify-content-center align-items-center border rounded me-2"
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
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 p-2 rounded mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-41.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-2">
                    ST5863
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Jeff Fitch</Link>
                  </h6>
                  <span className="fs-12">Added on : 06 Jan 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">02</h6>
                </div>
                <div className="border-end" />
                <div className="">
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">02</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-17.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-2">
                    ST6478
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Jacob Kline</Link>
                  </h6>
                  <span className="fs-12">Added on : 18 Jan 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">10</h6>
                </div>
                <div className="border-end" />
                <div className="">
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">04</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-12.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST2496
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Donald Gordon</Link>
                  </h6>
                  <span className="fs-12">Added on : 27 Jan 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">03</h6>
                </div>
                <div className="border-end" />
                <div className="">
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">08</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-26.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST0765
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Kara Coble</Link>
                  </h6>
                  <span className="fs-12">Added on : 15 Feb 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">10</h6>
                </div>
                <div className="border-end" />
                <div className="">
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">15</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-35.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST6485
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Jacob Vance</Link>
                  </h6>
                  <span className="fs-12">Added on : 20 Feb 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">07</h6>
                </div>
                <div className="border-end" />
                <div className="">
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">13</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-36.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST3751
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>William Smith</Link>
                  </h6>
                  <span className="fs-12">Added on : 03 Mar 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">10</h6>
                </div>
                <div className="border-end" />
                <div>
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">30</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-16.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST3498
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Taylor Pacheco</Link>
                  </h6>
                  <span className="fs-12">Added on : 10 Mar 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">05</h6>
                </div>
                <div className="border-end" />
                <div>
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">12</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST0263
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Anthony Lewis</Link>
                  </h6>
                  <span className="fs-12">Added on : 24 Mar 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">06</h6>
                </div>
                <div className="border-end" />
                <div>
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">10</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-24.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST3185
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Paul Steele</Link>
                  </h6>
                  <span className="fs-12">Added on : 10 Apr 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">08</h6>
                </div>
                <div className="border-end" />
                <div>
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">14</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-13.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST0798
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Ray Homan</Link>
                  </h6>
                  <span className="fs-12">Added on : 17 Apr 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">06</h6>
                </div>
                <div className="border-end" />
                <div className="">
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">15</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-06.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST4638
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Alfonso Lamotte</Link>
                  </h6>
                  <span className="fs-12">Added on : 05 May 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">12</h6>
                </div>
                <div className="border-end" />
                <div>
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">20</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-lg-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center bg-light-300 rounded p-2 mb-3">
                <Link to={routes.staffDetails} className="avatar avatar-xl me-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="user"
                  />
                </Link>
                <div>
                  <span className="badge badge-info-transparent mb-1">
                    ST8351
                  </span>
                  <h6 className="fs-16 fw-medium">
                    <Link to={routes.staffDetails}>Kim Crosland</Link>
                  </h6>
                  <span className="fs-12">Added on : 19 May 2024</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="fs-14">No of Services</span>
                  <h6 className="fs-16 text-center fw-medium">08</h6>
                </div>
                <div className="border-end" />
                <div className="">
                  <span className="fs-14 ps-1">No of Bookings</span>
                  <h6 className="fs-16 text-center fw-medium">16</h6>
                </div>
              </div>
            </div>
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

export default StaffGrid