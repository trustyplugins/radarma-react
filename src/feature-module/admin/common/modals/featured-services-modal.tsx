import React, { useState } from 'react'
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';

const FeaturedServicesModal = () => {

    const [selectedValue, setSelectedValue] = useState(null);

    const value = [{ name: 'Select Service' }, { name: 'service 2' }];

    return (

        <>
            {/* Add Featured Services */}
            <div
                className="modal fade"
                id="add-features"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Featured Services</h5>
                            <button
                                type="button"
                                className="btn-close close-modal"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <Icon.X className="react-feather-custom me-2" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body py-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Service</label>
                                            <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Select Service"
                                                    className="select w-100"
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-groupheads d-flex d-flex justify-content-between">
                                        <h2>Status</h2>
                                        <div className="active-switch">
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked={true} />
                                                <span className="sliders round" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer pt-0">
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Featured Services */}
            {/* Edit Featured Services */}
            <div
                className="modal fade"
                id="edit-features"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Featured Services</h5>
                            <button
                                type="button"
                                className="btn-close close-modal"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <Icon.X className="react-feather-custom me-2" />

                            </button>
                        </div>
                        <form>
                            <div className="modal-body py-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Service</label>
                                            <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Select Service"
                                                    className="select w-100"
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-groupheads d-flex d-flex justify-content-between">
                                        <h2>Status</h2>
                                        <div className="active-switch">
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked={true} />
                                                <span className="sliders round" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer pt-0">
                                <button type="submit" className="btn btn-primary">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FeaturedServicesModal
