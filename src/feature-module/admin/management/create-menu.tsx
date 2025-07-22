import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';

const CreateMenu = () => {

    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'Us' }, { name: ' London' }];
    const value1 = [{ name: 'Select Status' },{ name: 'Published' }, { name: ' Unpublished' }];

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 m-auto">
                            <div className="content-page-header">
                                <h5>Create Menu</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Languages</label>
                                        <div className="form-group">
                                            <div className="group-image">
                                                <ImageWithBasePath src="assets/admin/img/flags/us1.png" alt="img" />
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Select State"
                                                    className="select w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Status</label>
                                        <div className="form-group">
                                            <Dropdown
                                                value={selectedValue}
                                                onChange={(e) => setSelectedValue(e.value)}
                                                options={value1}
                                                optionLabel="name"
                                                placeholder="Select State"
                                                className="select w-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="btn-path">
                                        <Link to="#" className="btn btn-cancel me-3">
                                            Cancel
                                        </Link>
                                        <Link to="#" className="btn btn-primary">
                                            Save
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateMenu
