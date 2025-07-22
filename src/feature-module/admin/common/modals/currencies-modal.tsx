import React from 'react'
import * as Icon from 'react-feather';

const CurrenciesModal = () => {

    return (
        <>
            {/* Add Currency */}
            <div className="modal fade" id="add-currency">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Currency</h5>
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
                                    <label className="form-label">Currency Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Currency Symbol</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Currency Code</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Currency Rate</label>
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
            {/* /Add Currency */}
            {/* Edit Currency */}
            <div className="modal fade" id="edit-currency">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Currency</h5>
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
                                    <label className="form-label">Currency Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Pound"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Currency Symbol</label>
                                    <input type="text" className="form-control" defaultValue="£" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Currency Code</label>
                                    <input type="text" className="form-control" defaultValue="GBP" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Currency Rate</label>
                                    <input type="text" className="form-control" defaultValue={90} />
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
            {/* /Edit Currency */}


        </>
    )
}

export default CurrenciesModal
