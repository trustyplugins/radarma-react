import React from 'react'
import { Link } from 'react-router-dom'
import CustomDropdown from '../../common/dropdown/commonSelect'
import { cityOption, countryOption, serviceOption, stateOption, statusOption } from '../../../../core/data/json/dropDownData'

const StaffModal = () => {

  return (
    <>
        {/* Add Staff*/}
  <div className="modal fade custom-modal" id="add-staff">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Staff </h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body pb-0">
          <form >
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <div className="d-flex profile-upload align-items-center">
                    <span className="d-flex justify-content-center align-items-center p-4 bg-light rounded me-2">
                      <i className="ti ti-photo" />
                    </span>
                    <div>
                      <h6 className="fs-16">Profile</h6>
                      <span className="fs-14">
                        Image size does not exceed 5MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="number" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <CustomDropdown
                options={countryOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">State</label>
                  <CustomDropdown
                options={stateOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <CustomDropdown
                options={cityOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Zip Code</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Services</label>
                  <CustomDropdown
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CustomDropdown
                options={statusOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
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
            <button className="btn btn-dark" type="button" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Staff */}
  {/* Edit Staff*/}
  <div className="modal fade custom-modal" id="edit-staff">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Edit Staff </h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body pb-0">
          <form >
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <div className="d-flex profile-upload align-items-center">
                    <span className="d-flex justify-content-center align-items-center p-4 bg-light rounded me-2">
                      <i className="ti ti-photo" />
                    </span>
                    <div>
                      <h6 className="fs-16">Profile</h6>
                      <span className="fs-14">
                        Image size does not exceed 5MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control pass-input"
                    defaultValue="Jeff Fitch"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control pass-input"
                    defaultValue="jeff@example.com"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="number"
                    className="form-control pass-input"
                    defaultValue={1748116543}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <CustomDropdown
                    options={countryOption}
                    defaultValue={countryOption[0].value}
                    className="select d-flex"
                    placeholder="Select "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">State</label>
                  <CustomDropdown
                    options={stateOption}
                    defaultValue={stateOption[0].value}
                    className="select d-flex"
                    placeholder="Select "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <CustomDropdown
                    options={cityOption}
                    defaultValue={cityOption[0].value}
                    className="select d-flex"
                    placeholder="Select "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Zip Code</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Services</label>
                  <CustomDropdown
                    options={serviceOption}
                    defaultValue={serviceOption[0].value}
                    className="select d-flex"
                    placeholder="Select "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CustomDropdown
                    options={statusOption}
                    defaultValue={statusOption[0].value}
                    className="select d-flex"
                    placeholder="Select "
                  />
                </div>
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
            <button className="btn btn-dark" type="button" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Staff */}
  {/* Delete Staff */}
  <div className="modal fade custom-modal" id="del-staff">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete Staff</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form >
              <p>Are you sure want to delete this Staff?</p>
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
  )
}

export default StaffModal