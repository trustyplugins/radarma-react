import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react'
import * as Icon from 'react-feather';

const BlogCategoriesModal = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const language=[{name:'Select Language'},{name:'English'},{name:'German'}]
    const languages=[{name:'Select Language'},{name:'English'},{name:'German'}]
  return (
    <>
      {/* Add Category */}
      <div className="modal fade" id="add-blog-category">
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Blog Category</h5>
                <button
                  type="button"
                  className="btn-close close-modal"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <Icon.X size={15} />
                </button>
              </div>
              <div className="modal-body pt-0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Language</label>
                    <Dropdown
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.value)}
                    options={language}
                    optionLabel="name"
                    placeholder="Select Language"
                    className="select w-100"
                  />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                      Slug{' '}
                      <small className="form-text text-muted">
                        (If you leave it empty, it will be generated
                        automatically.)
                      </small>
                    </label>
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
                      Add Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Category */}
        {/* Edit Category */}
        <div className="modal fade" id="edit-blog-category">
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Blog Category</h5>
                <button
                  type="button"
                  className="btn-close close-modal"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <Icon.X size={15} />
                </button>
              </div>
              <div className="modal-body pt-0">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Language</label>
                    <Dropdown
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.value)}
                    options={languages}
                    optionLabel="name"
                    placeholder="Select Language"
                    className="select w-100"
                  />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Electrical"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                      Slug{' '}
                      <small className="form-text text-muted">
                        (If you leave it empty, it will be generated
                        automatically.)
                      </small>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="electrical"
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
        {/* /Edit Category */}
        {/* Delete Category */}
        <div className="modal fade" id="delete-blog-category">
          <div className="modal-dialog modal-dialog-centered ">
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
                    <h4>Delete Category?</h4>
                    <p className="text-muted mb-0">
                      Are you sure want to delete this?
                    </p>
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
        {/* /Delete */}
    </>
  )
}

export default BlogCategoriesModal
