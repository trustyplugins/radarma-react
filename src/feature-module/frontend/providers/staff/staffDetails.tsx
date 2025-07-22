import React from 'react'
import StaffDetailModal from './staffDetailModal'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes'

const StaffDetails = () => {
  const routes = all_routes
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid pb-0">
      <h5 className="mb-4">Staff Details</h5>
      <div className="d-flex justify-content-between align-items-center bg-light-300 p-3 rounded flex-wrap row-gap-3 mb-4">
        <div className="d-flex align-items-center">
          <span className="avatar avatar-lg me-2">
            <ImageWithBasePath
              src="assets/img/profiles/avatar-36.jpg"
              className="rounded-circle"
              alt="user"
            />
          </span>
          <div>
            <div className="d-flex align-items-center">
              <h6 className="fs-14 me-2">Harvey Smith</h6>
              <span className="badge badge-success-100 d-flex align-items-center">
                <i className="ti ti-point-filled" />
                Active
              </span>
            </div>
            <span className="fs-12">Created on 14/02/2025</span>
          </div>
        </div>
        <div>
          <h6 className="fs-12 fw-medium">Phone</h6>
          <span className="fs-12">+1 245 646 5464</span>
        </div>
        <div>
          <h6 className="fs-12 fw-medium">Email</h6>
          <span className="fs-12">harvey@example.com</span>
        </div>
        <div>
          <h6 className="fs-12 fw-medium">Address</h6>
          <span className="fs-12">
            4412 Libby Street, Los Angeles, CA 90045
          </span>
        </div>
        <div>
          <h6 className="fs-12 fw-medium">No of Services</h6>
          <span className="fs-12">4</span>
        </div>
        <div>
          <h6 className="fs-12 fw-medium">No of Bookings</h6>
          <span className="fs-12">60</span>
        </div>
      </div>
      <h6 className="mb-4">Availability</h6>
      <div className="row ">
        <div className="col-xxl-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap row-gap-2">
                <Link
                  to={routes.providerDetails}
                  className="avatar avatar-xl flex-shrink-0 me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/providers/provider-15.jpg"
                    className="rounded"
                    alt="Img"
                  />
                </Link>
                <div className="flex-fill">
                  <div className="d-flex justify-content-between">
                    <h6 className="fs-16 fw-medium">
                      <Link to={routes.providerDetails}>Computer Repair</Link>
                    </h6>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-availability"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link to="#" className="">
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <span className="fs-12 d-block mb-2">
                    Days of Availability
                  </span>
                  <div className="day-span d-flex gap-2">
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Mon
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Tue
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Wed
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Thr
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Fri
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sat
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap row-gap-2">
                <Link
                  to={routes.providerDetails}
                  className="avatar avatar-xl flex-shrink-0 me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/providers/provider-17.jpg"
                    className="rounded"
                    alt="Img"
                  />
                </Link>
                <div className="flex-fill">
                  <div className="d-flex justify-content-between ">
                    <h6 className="fs-16 fw-medium">
                      <Link to={routes.providerDetails}>Steam Car Wash</Link>
                    </h6>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-availability"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link to="#" className="">
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <span className="fs-12 d-block mb-2">
                    Days of Availability
                  </span>
                  <div className="day-span d-flex gap-2">
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Mon
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Tue
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Wed
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Thr
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Fri
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sat
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap row-gap-2">
                <Link
                  to={routes.providerDetails}
                  className="avatar avatar-xl flex-shrink-0 me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/providers/provider-19.jpg"
                    className="rounded"
                    alt="Img"
                  />
                </Link>
                <div className="flex-fill">
                  <div className="d-flex justify-content-between">
                    <h6 className="fs-16 fw-medium">
                      <Link to={routes.providerDetails}>House Cleaning</Link>
                    </h6>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-availability"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link to="#" className="">
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <span className="fs-12 d-block mb-2">
                    Days of Availability
                  </span>
                  <div className="day-span d-flex gap-2">
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Mon
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Tue
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Wed
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Thr
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Fri
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sat
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap row-gap-2">
                <Link
                  to={routes.providerDetails}
                  className="avatar avatar-xl flex-shrink-0 me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/providers/provider-14.jpg"
                    className="rounded"
                    alt="Img"
                  />
                </Link>
                <div className="flex-fill">
                  <div className="d-flex justify-content-between">
                    <h6 className="fs-16 fw-medium">
                      <Link to={routes.providerDetails}>Building Construction</Link>
                    </h6>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-availability"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link to="#" className="">
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <span className="fs-12 d-block mb-2">
                    Days of Availability
                  </span>
                  <div className="day-span d-flex gap-2">
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Mon
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Tue
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Wed
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Thr
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Fri
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sat
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap row-gap-2">
                <Link
                  to={routes.providerDetails}
                  className="avatar avatar-xl flex-shrink-0 me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/providers/provider-16.jpg"
                    className="rounded"
                    alt="Img"
                  />
                </Link>
                <div className="flex-fill">
                  <div className="d-flex justify-content-between ">
                    <h6 className="fs-16 fw-medium">
                      <Link to={routes.providerDetails}>Interior Designing</Link>
                    </h6>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-availability"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link to="#" className="">
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <span className="fs-12 d-block mb-2">
                    Days of Availability
                  </span>
                  <div className="day-span d-flex gap-2">
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Mon
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Tue
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Wed
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Thr
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Fri
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sat
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap row-gap-2">
                <Link
                  to={routes.providerDetails}
                  className="avatar avatar-xl flex-shrink-0 me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/providers/provider-23.jpg"
                    className="rounded"
                    alt="Img"
                  />
                </Link>
                <div className="flex-fill">
                  <div className="d-flex justify-content-between ">
                    <h6 className="fs-16 fw-medium">
                      <Link to={routes.providerDetails}>Plumbing Services</Link>
                    </h6>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-availability"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link to="#" className="">
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <span className="fs-12 d-block mb-2">
                    Days of Availability
                  </span>
                  <div className="day-span d-flex gap-2">
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Mon
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Tue
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Wed
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Thr
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Fri
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sat
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card shadow-none rounded">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap row-gap-2">
                <Link
                  to={routes.staffDetails}
                  className="avatar avatar-xl flex-shrink-0 me-2"
                >
                  <ImageWithBasePath
                    src="assets/img/providers/provider-18.jpg"
                    className="rounded"
                    alt="Img"
                  />
                </Link>
                <div className="flex-fill">
                  <div className="d-flex justify-content-between">
                    <h6 className="fs-16 fw-medium">
                      <Link to={routes.providerDetails}>Electricals</Link>
                    </h6>
                    <div className="user-icon d-inline-flex">
                      <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-availability"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link to="#" className="">
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                  </div>
                  <span className="fs-12 d-block mb-2">
                    Days of Availability
                  </span>
                  <div className="day-span d-flex gap-2">
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Mon
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Tue
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Wed
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Thr
                    </span>
                    <span className="badge badge-info-transparent d-flex justify-content-center">
                      Fri
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sat
                    </span>
                    <span className="badge badge-light d-flex justify-content-center">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <StaffDetailModal/>
  {/* /Page Wrapper */}
</>

  )
}

export default StaffDetails