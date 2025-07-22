import React from 'react';

const DeletedServicesModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="delete-item"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <button
                type="button"
                className="delete-popup"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-regular fa-rectangle-xmark" />
              </button>
              <div className="del-modal">
                <h5>Do you realy want to delete this service?</h5>
                <p>Plumbing Service</p>
              </div>
              <div className="delete-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="reset"
                  className="btn modal-delete"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletedServicesModal;
