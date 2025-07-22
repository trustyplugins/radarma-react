import React from 'react'
import * as Icon from 'react-feather';

const CountriesModal = () => {
    return (
        <>

            {/* Add Country */}
            <div className="modal fade" id="add-country">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Country</h5>
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
                                    <label className="form-label">Country Code</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Country ID</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Country Name</label>
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
                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Country */}


            {/* Edit Country */}
            <div className="modal fade" id="edit-country">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Country</h5>
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
                                    <label className="form-label">Country Code</label>
                                    <input type="text" className="form-control" defaultValue="US" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Country ID</label>
                                    <input type="text" className="form-control" defaultValue={684} />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Country Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="United States"
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
            {/* /Edit Country */}
        </>
    )
}

export default CountriesModal
