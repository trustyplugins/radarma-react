import React from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const PaymentGateWayModal = () => {
    return (
        <>
            {/* Paypal */}
            <div className="modal fade" id="paypal-config">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Paypal Configuration</h5>
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
                                <div className="mb-3">
                                    <label className="form-label">Api Client ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Id"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Api Client Secret</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Api Client Secret"
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
                                    <Link to="#" className="btn btn-primary">
                                        Save Changes
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Paypal */}
        </>
    )
}

export default PaymentGateWayModal
