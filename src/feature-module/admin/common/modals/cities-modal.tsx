import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';

const CitiesModal = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'India' },
    { name: 'United States' }];
    const citiesname = [{ name: 'Swains Island' },
    { name: 'Andorra la Vella' }];
    return (
        <>
            <div className="modal fade" id="add-city">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add City</h5>
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
                                    <label className="form-label">Country</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value}
                                        optionLabel="name"
                                        placeholder="Select Country"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">State</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={citiesname}
                                        optionLabel="name"
                                        placeholder="Select State"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">City</label>
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


            {/* Edit City */}
            <div className="modal fade" id="edit-city">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit City</h5>
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
                                    <label className="form-label">Country</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value}
                                        optionLabel="name"
                                        placeholder="Select Country"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">State</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={citiesname}
                                        optionLabel="name"
                                        placeholder="Select State"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Gandzasar"
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
            {/* /Edit City */}
        </>
    )
}

export default CitiesModal
