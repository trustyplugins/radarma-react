import React from 'react'
import * as Icon from 'react-feather';

const StorageSettingsModal = () => {
  return (
    <>
      <>
  {/* AWS Config */}
  <div className="modal fade" id="aws-config">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">AWS Configuration</h5>
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
              <label className="form-label">AWS Access Key</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">AWS Secret Key</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Bucket Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Region</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-4">
              <label className="form-label">AWS Base URL</label>
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
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /AWS Config */}
</>

    </>
  )
}

export default StorageSettingsModal
