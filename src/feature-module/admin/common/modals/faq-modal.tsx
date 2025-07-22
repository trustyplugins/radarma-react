import React, { useState } from 'react'
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';

const FaqModal = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const value = [{ name: 'Services' }];

    return (
        <>
            {/* Add FAQ */}
            <div className="modal fade" id="add-faq">
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
                                <Icon.X className="react-feather-custom me-2" />
                            </button>
                        </div>
                        <div className="modal-body pt-0">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value}
                                        optionLabel="name"
                                        placeholder="Services"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Answer</label>
                                    <textarea className="form-control" defaultValue={""} />
                                </div>
                                <div className="form-groupheads d-flex d-flex justify-content-between mb-4">
                                    <h2>Status</h2>
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
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
            {/* /Add FAQ */}
            {/* Edit FAQ */}
            <div className="modal fade" id="edit-faq">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit FAQ</h5>
                            <button
                                type="button"
                                className="btn-close close-modal"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <Icon.X className="react-feather-custom me-2" />
                            </button>
                        </div>
                        <div className="modal-body pt-0">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="How Can I Book Service?"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value}
                                        optionLabel="name"
                                        placeholder="Services"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Answer</label>
                                    <textarea className="form-control" defaultValue={""} />
                                </div>
                                <div className="form-groupheads d-flex d-flex justify-content-between mb-4">
                                    <h2>Status</h2>
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
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
            {/* /Edit FAQ */}
        </>
    )
}

export default FaqModal
