import React from 'react'
import * as Icon from 'react-feather';

const PaymentSettingModal = () => {
    return (

        <>
            {/* Add Account */}
            <div className="modal fade" id="add-account">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Account</h5>
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
                                    <label className="form-label">Bank Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Account Holder Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Account Number</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Routing Number</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">IBAN</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-groupheads d-flex d-flex justify-content-between mb-4">
                                    <h2>Status</h2>
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={false} />
                                            <span className="sliders round" />
                                        </label>
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
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Account */}
            {/* Edit Account */}
            <div className="modal fade" id="edit-account">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Account</h5>
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
                                    <label className="form-label">Bank Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Minster Bank"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Account Holder Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="John Doe"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Account Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={420509843380}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Routing Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={125200044}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">IBAN</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="US52907093244885792186160135"
                                    />
                                </div>
                                <div className="form-groupheads d-flex d-flex justify-content-between mb-4">
                                    <h2>Status</h2>
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={false} />
                                            <span className="sliders round" />
                                        </label>
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
            {/* /Edit IP Address */}
        </>
    )
}

export default  PaymentSettingModal 
