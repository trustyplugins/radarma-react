import React from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const CatogriesModal = () => {
    return (
        <>

            {/* Add Category */}
            <div className="modal fade" id="add-category">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Category</h5>
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
                                    <label className="form-label">Category Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label me-1">Category Slug</label>
                                    <small className="form-text text-muted">(Ex:test-slug)</small>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category Image</label>
                                    <div className="form-uploads">
                                        <div className="form-uploads-path">
                                            <ImageWithBasePath src="assets/img/icons/upload.svg" alt="img" />
                                            <div className="file-browse">
                                                <h6>Drag &amp; drop image or </h6>
                                                <div className="file-browse-path">
                                                    <input type="file" />
                                                    <Link to="#"> Browse</Link>
                                                </div>
                                            </div>
                                            <h5>Supported formates: JPEG, PNG</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Is Featured?</label>
                                    <ul className="custom-radiosbtn">
                                        <li>
                                            <label className="radiossets">
                                                Yes
                                                <input type="radio" name="radio" />
                                                <span className="checkmark-radio" />
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radiossets">
                                                No
                                                <input type="radio" name="radio" />
                                                <span className="checkmark-radio" />
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-end">
                                    <Link to ="#"
                                        type="button"
                                        className="btn btn-secondary me-2"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link to="#" type="submit" className="btn btn-primary">
                                        Save
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Category */}


            {/* Edit Category */}
            <div className="modal fade" id="edit-category">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Category</h5>
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
                                    <label className="form-label">Category Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Car Wash"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label me-1">Category Slug</label>
                                    <small className="form-text text-muted">(Ex:test-slug)</small>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="car-wash"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category Image</label>
                                    <div className="form-uploads">
                                        <div className="form-uploads-path">
                                            <ImageWithBasePath src="assets/img/icons/upload.svg" alt="img" />
                                            <div className="file-browse">
                                                <h6>Drag &amp; drop image or </h6>
                                                <div className="file-browse-path">
                                                    <input type="file" />
                                                    <Link to="#"> Browse</Link>
                                                </div>
                                            </div>
                                            <h5>Supported formates: JPEG, PNG</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Is Featured?</label>
                                    <ul className="custom-radiosbtn">
                                        <li>
                                            <label className="radiossets">
                                                Yes
                                                <input type="radio" name="radio" />
                                                <span className="checkmark-radio" />
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radiossets">
                                                No
                                                <input type="radio" name="radio" />
                                                <span className="checkmark-radio" />
                                            </label>
                                        </li>
                                    </ul>
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
            {/* /Edit Category */}
        </>
    )
}

export default CatogriesModal
