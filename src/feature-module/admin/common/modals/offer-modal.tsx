import React from 'react'
import * as Icon from 'react-feather';

const OfferModal = () => {
  return (
    <>
      <>
  {/* Edit Offer */}
  <div className="modal fade" id="#edit-offer">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Offer</h5>
          <button
            type="button"
            className="btn-close close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <Icon.X/>
          </button>
        </div>
        <div className="modal-body pt-0">
          <form>
            <div className="mb-3">
              <label className="form-label">Service</label>
              <select className="form-control select">
                <option>Computer Repair</option>
                <option>House Cleaning</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <select className="form-control select">
                <option>John Smith</option>
                <option>Johnny</option>
              </select>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="$80"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Offer</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="25%  "
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Offer Price</label>
                  <input
                    type="text"
                    defaultValue="20%"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-4">
                  <label className="form-label">Valid Date</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <button
                type="button"
                className="btn btn-secondary me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Offer */}
  {/* Delete Offer */}
  <div className="modal fade" id="delete-offer">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body pt-0">
          <div className="text-center">
          <Icon.Trash2 size={45} color='#f05050 ' className="text-danger fs-1" />
            <div className="mt-4">
              <h4>Delete Offer?</h4>
              <p className="text-muted mb-0">
                Are you sure want to delete this?
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4">
            <button
              type="button"
              className="btn w-sm btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn w-sm btn-danger">
              Yes, Delete It!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Offer */}
</>

    </>
  )
}

export default OfferModal
