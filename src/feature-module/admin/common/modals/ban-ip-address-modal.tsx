import React from 'react'
import * as Icon from 'react-feather';

const Banipaddressmodal = () => {
  return (
    <>
      {/* Add IP Address */}
  <div className="modal fade" id="add-ip">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Ban IP Address</h5>
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
              <label className="form-label">IP Address</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-4">
              <label className="form-label">Reason for Ban</label>
              <textarea className="form-control" rows={3} defaultValue={""} />
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add IP Address */}
  {/* Edit IP Address */}
  <div className="modal fade" id="edit-ip">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Ban IP Address</h5>
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
              <label className="form-label">IP Address</label>
              <input
                type="text"
                className="form-control"
                defaultValue="210.10.444"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Reason for Ban</label>
              <textarea
                className="form-control"
                rows={3}
                defaultValue={"Lorem ipsum dolor sit amet"}
              />
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
  {/* /Edit IP Address */}
  {/* Delete */}
  <div className="modal fade" id="delete-ip">
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
            <Icon.Trash2/>
            <div className="mt-4">
              <h4>Delete Ban IP Address?</h4>
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
  {/* /Delete */}
    </>
  )
}

export default Banipaddressmodal
