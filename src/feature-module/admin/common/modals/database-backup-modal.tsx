import React from 'react';
import * as Icon from 'react-feather';

const DatabasebackupModal = () => {
  return (
    <>
      {/*change email-modal */}
      <div
        className="modal fade"
        id="add-tax"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Database Backup
              </h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom" />
              </button>
            </div>
            <form>
              <div className="modal-body py-0">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>File name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter file name"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Date"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="reset"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Delete */}
      <div className="modal fade" id="delete-item">
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
                  <h4>Delete Database Backup?</h4>
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

      {/* /Delete */}
    </>
  );
};

export default DatabasebackupModal;
