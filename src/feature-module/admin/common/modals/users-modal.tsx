import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const UsersModal = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'Admin' }, { name: 'Super Admin' }];
    return (
        <>
            {/* Add User */}
            <div className="modal fade" id="add-user">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add User</h5>
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
                                <div className="profile-upload mb-3">
                                    <div className="profile-upload-img">
                                        <ImageWithBasePath
                                            src="assets/admin/img/customer/user-01.jpg"
                                            alt="img"
                                            id="blah"
                                        />
                                    </div>
                                    <div className="profile-upload-content">
                                        <div className="profile-upload-btn">
                                            <div className="profile-upload-file">
                                                <input type="file" id="imgInp" />
                                                <Link to="#" className="btn btn-upload">
                                                    Upload
                                                </Link>
                                            </div>
                                            <Link to="#" className="btn btn-remove">
                                                Remove
                                            </Link>
                                        </div>
                                        <div className="profile-upload-para">
                                            <p>
                                                * Recommends a minimum size of 320 x 320 pixels. Allowed
                                                files .png and .jpg.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Current Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="form-control pass-input" />
                                        <span className="fas toggle-password fa-eye-slash" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">New Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="form-control pass-inputs" />
                                        <span className="fas toggle-passwords fa-eye-slash" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value}
                                        optionLabel="name"
                                        placeholder="A - Z"
                                        className="select w-100"
                                    />
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
            {/* /Add User */}
            {/* Edit User */}
            <div className="modal fade" id="edit-user">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit User</h5>
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
                                <div className="profile-upload mb-3">
                                    <div className="profile-upload-img">
                                        <ImageWithBasePath
                                            src="assets/admin/img/customer/user-01.jpg"
                                            alt="img"
                                            id="blah"
                                        />
                                    </div>
                                    <div className="profile-upload-content">
                                        <div className="profile-upload-btn">
                                            <div className="profile-upload-file">
                                                <input type="file" id="imgInp" />
                                                <Link to="#" className="btn btn-upload">
                                                    Upload
                                                </Link>
                                            </div>
                                            <Link to="#" className="btn btn-remove">
                                                Remove
                                            </Link>
                                        </div>
                                        <div className="profile-upload-para">
                                            <p>
                                                * Recommends a minimum size of 320 x 320 pixels. Allowed
                                                files .png and .jpg.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Admin"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="admin"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="admin@example.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="518-837-9258"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Current Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="form-control pass-input" />
                                        <span className="fas toggle-password fa-eye-slash" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">New Password</label>
                                    <div className="pass-group">
                                        <input type="password" className="form-control pass-inputs" />
                                        <span className="fas toggle-passwords fa-eye-slash" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Role</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value}
                                        optionLabel="name"
                                        placeholder="A - Z"
                                        className="select w-100"
                                    />
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
            {/* /Edit User */}
        </>
    )
}

export default UsersModal
