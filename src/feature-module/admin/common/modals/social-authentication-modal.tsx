
import React from 'react'
import * as Icon from 'react-feather';

const SocialAuthenticationModal = () => {
  return (
    <>
      <>
  {/* Facebook Auth */}
  <div className="modal fade" id="facebook-auth">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Facebook API Crediential</h5>
          <button
            type="button"
            className="btn-close close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <Icon.X size={15}/>
          </button>
        </div>
        <div className="modal-body pt-0">
          <form>
            <div className="mb-3">
              <label className="form-label">API Client ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter API Client ID"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">API Client Secret Key </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter API Client Secret Key"
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
  {/* /Facebook Auth */}
  {/* Google Auth */}
  <div className="modal fade" id="google-auth">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Google API Crediential</h5>
          <button
            type="button"
            className="btn-close close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <Icon.X size={15}/>
          </button>
        </div>
        <div className="modal-body pt-0">
          <form>
            <div className="mb-3">
              <label className="form-label">API Client ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter API Client ID"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">API Client Secret Key </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter API Client Secret Key"
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
  {/* /Google Auth */}
</>

    </>
  )
}

export default SocialAuthenticationModal
