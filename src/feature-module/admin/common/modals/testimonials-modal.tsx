import React from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const TestimonialsModal = () => {
    return (
        <>
            <>
                {/* Add Testimonial */}
                <div className="modal fade" id="add-testimonial">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Testimonial</h5>
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
                                            <ImageWithBasePath src="assets/admin/img/customer/user-01.jpg" alt="img" />
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
                                        <label className="form-label">Job Title</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Ratings</label>
                                        <div className="rating">
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star " />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Content</label>
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
                                        <Link to="#"  className="btn btn-primary">
                                            Save
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Add Testimonial */}
                {/* Edit Testimonial */}
                <div className="modal fade" id="edit-testimonial">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Testimonial</h5>
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
                                            <ImageWithBasePath src="assets/admin/img/customer/user-01.jpg" alt="img" />
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
                                            defaultValue="John Smith"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Job Title</label>
                                        <input type="text" className="form-control" defaultValue="CEO" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Ratings</label>
                                        <div className="rating">
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star filled" />
                                            <i className="fas fa-star " />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Content</label>
                                        <textarea
                                            className="form-control"
                                            defaultValue={"Good Experience for technologies"}
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
                                        <Link to="#"  className="btn btn-primary">
                                            Save
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Edit Testimonial */}
            </>

        </>
    )
}

export default TestimonialsModal
