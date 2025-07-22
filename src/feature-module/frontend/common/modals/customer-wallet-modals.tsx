import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom';

const CustomerWalletModal = () => {
  return (
    <div
        className="modal fade wallet-modal"
        id="add-wallet"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between  border-0">
              <h5>Add Wallet</h5>
              <Link
                to="#"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-circle-x-filled fs-20" />
              </Link>
            </div>
            <div className="modal-body pb-0">
              <form>
                <div className="mb-0">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input type="text" className="form-control" id="amount" />
                </div>
              </form>
              <div className="row">
                <div className="col-md-4">
                  <div className="bank-selection">
                    <input
                      type="radio"
                      defaultValue="attach_link"
                      id="rolelink"
                      name="attachment"
                      defaultChecked
                    />
                    <label htmlFor="rolelink">
                      <ImageWithBasePath src="assets/img/icons/paypal.svg" alt="Paypal" />
                      <span className="role-check">
                        <i className="fa-solid fa-circle-check" />
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bank-selection">
                    <input
                      type="radio"
                      defaultValue="attach_link"
                      id="rolelink1"
                      name="attachment"
                    />
                    <label htmlFor="rolelink1">
                      <ImageWithBasePath src="assets/img/icons/stripe.svg" alt="Stripe" />
                      <span className="role-check">
                        <i className="fa-solid fa-circle-check" />
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bank-selection">
                    <input
                      type="radio"
                      defaultValue="attach_link"
                      id="rolelink2"
                      name="attachment"
                    />
                    <label htmlFor="rolelink2">
                      <ImageWithBasePath
                        src="assets/img/icons/bank-transfer.svg"
                        alt="image"
                      />
                      <span className="role-check">
                        <i className="fa-solid fa-circle-check" />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-gray"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-dark"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CustomerWalletModal