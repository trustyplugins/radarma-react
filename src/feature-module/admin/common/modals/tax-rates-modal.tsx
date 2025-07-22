import React from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const TaxRatesModal= () => {
    return (
        <>

            <div
                className="modal fade"
                id="add-tax"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Create Tax
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
                            <div className="modal-body py-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Tax Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Tax Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Tax Percentage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="0.00%"
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
                                    Cancel
                                </button>
                                <Link to="#" className="btn btn-primary">
                                    Update
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="edit-tax"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabeltwo">
                                    Edit Tax Rate
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
                            <div className="modal-body py-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Tax Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Name"
                                                defaultValue="Casual Customs"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Tax Percentage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Tax Rate"
                                                defaultValue={2}
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
                                    Cancel
                                </button>
                                <Link to="#" className="btn btn-primary">
                                    Update
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxRatesModal
