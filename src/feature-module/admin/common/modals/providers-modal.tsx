import React from 'react'
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';

const ProvidersModal = () => {
    return (
        <div>
          {/* Add Provider */}
          <div className="modal fade" id="add-provider">
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Provider</h5>
                  <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
                  <Icon.X />
                  </button>
                </div>
                <div className="modal-body pt-0">
                  <form>
                    <div className="profile-upload mb-3">
                      <div className="profile-upload-img">
                        <ImageWithBasePath src="assets/admin/img/customer/user-01.jpg" alt="img" id="blah" />
                      </div>
                      <div className="profile-upload-content">
                        <div className="profile-upload-btn">
                          <div className="profile-upload-file">
                            <input type="file" id="imgInp" />
                            <Link to="#" className="btn btn-upload">Upload</Link>
                          </div>
                          <Link to="#" className="btn btn-remove">Remove</Link>
                        </div>
                        <div className="profile-upload-para">
                          <p>* Recommends a minimum size of 320 x 320 pixels. Allowed files .png and .jpg.</p>
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
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                      <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Provider */}
          {/* Edit Provider */}
          <div className="modal fade" id="edit-provider">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Provider</h5>
                  <button type="button" className="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close">
                  <Icon.X />
                  </button>
                </div>
                <div className="modal-body pt-0">
                  <form>
                    <div className="profile-upload mb-3">
                      <div className="profile-upload-img">
                        <ImageWithBasePath src="assets/admin/img/customer/user-01.jpg" alt="img" id="blah" />
                      </div>
                      <div className="profile-upload-content">
                        <div className="profile-upload-btn">
                          <div className="profile-upload-file">
                            <input type="file" id="imgInp" />
                            <Link to="#" className="btn btn-upload">Upload</Link>
                          </div>
                          <Link to="#" className="btn btn-remove">Remove</Link>
                        </div>
                        <div className="profile-upload-para">
                          <p>* Recommends a minimum size of 320 x 320 pixels. Allowed files .png and .jpg.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" defaultValue="John Doe" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" defaultValue="johndoe" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="text" className="form-control" defaultValue="johndoe@example.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control" defaultValue="302-372-7812" />
                    </div>
                    <div className="form-groupheads d-flex d-flex justify-content-between mb-4">
                      <h2>Status</h2>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Edit Provider */}
          {/* Delete Provider */}
          <div className="modal fade" id="delete-provider">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body pt-0">
                  <div className="text-center">
                  <Icon.Trash2 className='text-danger fs-1' />
                    <div className="mt-4">
                      <h4>Delete Provider?</h4>
                      <p className="text-muted mb-0">Are you sure want to delete this?</p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 justify-content-center mt-4">
                    <button type="button" className="btn w-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn w-sm btn-danger">Yes, Delete It!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Delete Provider */}
        </div>
      );
}

export default ProvidersModal