import React from 'react';
import * as Icon from 'react-feather';

const AddRole = () => {
  // HTML
  return (
    <>
      <div
        className="modal fade"
        id="add-role"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Role
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
                      <label>
                        Role Name <span className="manitory">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Role Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="reset"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRole;
