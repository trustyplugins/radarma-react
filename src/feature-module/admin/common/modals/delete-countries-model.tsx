import React from 'react'
import * as Icon from 'react-feather';

const DeleteCountriesModal = () => {
    return (
        <div>
            <div className="modal fade" id="delete-country">
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
                            <Icon.Trash2 size={45} color='#f05050 ' className="text-danger fs-1" />
                                <div className="mt-4">
                                    <h4>Delete Country?</h4>
                                    <p className="text-muted mb-0">Are you sure want to delete this?</p>
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
                                <button type="button" className="btn w-sm btn-danger">
                                    Yes, Delete It!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeleteCountriesModal