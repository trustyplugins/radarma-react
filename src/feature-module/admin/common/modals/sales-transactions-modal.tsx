import React from 'react';
import * as Icon from 'react-feather';

const Salestransactionsmodal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="delete-item"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Sales Transactions
              </h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom"></Icon.X>
              </button>
            </div>
            <form>
              <div className="modal-body py-0">
                <div className="del-modal">
                  <p>Are you sure want to Delete?</p>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn btn-secondary"
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
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Salestransactionsmodal;
