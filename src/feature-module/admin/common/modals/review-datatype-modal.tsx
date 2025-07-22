import React from 'react';
import * as Icon from 'react-feather';

const ReviewdatatypeModal = () => {
  return (
    <div>
      {/* Add Review Type */}
      <div className="modal fade" id="add-review-type">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Review Type</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom"></Icon.X>
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-4">
                  <label className="form-label">Reviews Type</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="reset"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Review Type */}
      {/* Edit Review Type */}
      <div className="modal fade" id="edit-review-type">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Review Type</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom"></Icon.X>
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-4">
                  <label className="form-label">Reviews Type</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Excellent"
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
                  <button
                    type="reset"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Review Type */}
      {/* Delete Review Type */}
      <div className="modal fade" id="delete-review-type">
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
                <i className="fe fe-trash-2 text-danger fs-1" />
                <div className="mt-4">
                  <h4>Delete Review Type?</h4>
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
                <button
                  type="reset"
                  className="btn w-sm btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Yes, Delete It!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Review Type */}
    </div>
  );
};

export default ReviewdatatypeModal;
