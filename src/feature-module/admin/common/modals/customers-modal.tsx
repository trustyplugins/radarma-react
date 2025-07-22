import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const CustomersModal = () => {
  return (
    <>
      <>
        {/* Add Customer */}
        <div className="modal fade" id="add-customer">
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Customer</h5>
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
                        src="assets/img/customer/user-01.jpg"
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
                          * Recommends a minimum size of 320 x 320 pixels.
                          Allowed files .png and .jpg.
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
        {/* /Add Customer */}
        {/* Edit Customer */}
        <div className="modal fade" id="edit-customer">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Customer</h5>
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
                        src="assets/img/customer/user-01.jpg"
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
                          * Recommends a minimum size of 320 x 320 pixels.
                          Allowed files .png and .jpg.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="johndoe"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="johndoe@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="302-372-7812"
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
        {/* /Edit Customer */}
      </>
    </>
  );
};

export default CustomersModal;
