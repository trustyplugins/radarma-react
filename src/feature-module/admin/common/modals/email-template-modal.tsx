import React from 'react'
import * as Icon from 'react-feather';
import DefaultEditor from "react-simple-wysiwyg";

const EmailTemplateModal = () => {

    const [html, setHtml] = React.useState("my <b>HTML</b>");

  function onChange(e: any) {
    setHtml(e.target.value);
  } 
    return (
        <div>
            <>
                {/* Edit Email Template */}
                <div className="modal fade" id="edit-email-template">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Email Template</h5>
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
                                        <label className="form-label">Email Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Registration Confirmation"
                                            disabled={true}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label"> Template Content</label>
                                        <DefaultEditor value={html} onChange={onChange} />

                                       
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
                {/* /Edit Email Template */}
                <>
  {/* Delete SMS Template */}
  <div className="modal fade" id="delete-sms-template">
    <div className="modal-dialog modal-dialog-centered">
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
              <h4>Delete Template?</h4>
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
  {/* /Delete SMS Template */}
</>

            </>

        </div>
    )
}

export default EmailTemplateModal 
