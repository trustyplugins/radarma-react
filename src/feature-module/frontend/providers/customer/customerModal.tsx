import React from 'react'
import { Link } from 'react-router-dom'
import CustomDropdown from '../../common/dropdown/commonSelect'
import { cityOption, countryOption, stateOption, statusOption } from '../../../../core/data/json/dropDownData';

const CustomerModal = () => {
  const Options1 = [
    { label: 'Myanmar', value: '1' },
    { label: 'Cyprus', value: '2' },
];
  const Options2 = [
    { label: 'Active', value: '1' },
    { label: 'Inactive', value: '2' },
];
  return (
    <>
     {/* Add Customer */}
  <div className="modal fade custom-modal" id="add-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Customer </h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">First Name</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">Last Name</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Email</label>
                  <input type="email" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Phone Number</label>
                  <input type="number" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Address</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">Country</label>
                  <CustomDropdown
                options={countryOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">State</label>
                  <CustomDropdown
                options={stateOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">City</label>
                  <CustomDropdown
                options={cityOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">Zip Code</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Status</label>
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
            <button data-bs-dismiss="modal" className="btn btn-dark" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Customer */}
  {/* Edit Customer */}
  <div className="modal fade custom-modal" id="edit-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Edit Customer </h5>
          <Link to="#" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form >
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control pass-input"
                    defaultValue="Anthony"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control pass-input"
                    defaultValue=" Lewis"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Email</label>
                  <input
                    type="email"
                    className="form-control pass-input"
                    defaultValue="anthony@example.com"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Phone Number</label>
                  <input
                    type="number"
                    className="form-control pass-input"
                    defaultValue={16349672145}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Address</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">Country</label>
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
                  <label className="col-form-label">State</label>
                  
                  <CustomDropdown
                    options={Options1}
                    defaultValue={Options1[0].value}
                    className="select d-flex"
                    placeholder="Select "
                />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="col-form-label">City</label>
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
                  <label className="col-form-label">Zip Code</label>
                  <input type="text" className="form-control pass-input" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="col-form-label">Status</label>
                  <CustomDropdown
                options={Options2}
                defaultValue={Options2[0].value}
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
            <Link to="#" className="btn btn-light me-2" data-bs-dismiss="modal">
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
  {/* /Edit Customer */}
  {/* Delete Customer */}
  <div className="modal fade custom-modal" id="delete-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete Customer</h5>
          <Link to="#" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form >
              <p>Are you sure want to delete this Customer?</p>
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
  {/* /Delete Customer */}
    </>
  )
}

export default CustomerModal