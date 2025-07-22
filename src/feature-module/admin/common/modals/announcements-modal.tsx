import React from 'react';
import * as Icon from 'react-feather';


const AnnouncementsModal = () => {
  return (
    <>
      <div className="modal fade" id="add-announcement">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Announcement</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={''}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Send To</label>
                  <ul className="custom-radiosbtn">
                    <li>
                      <label className="radiossets">
                        Select All
                        <input
                          type="radio"
                          checked={true}
                          name="announcementSend"
                        />
                        <span className="checkmark-radio" />
                      </label>
                    </li>
                    <li>
                      <label className="radiossets">
                        User
                        <input type="radio" name="announcementSend" />
                        <span className="checkmark-radio" />
                      </label>
                    </li>
                    <li>
                      <label className="radiossets">
                        Provider
                        <input type="radio" name="announcementSend" />
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
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="edit-announcement">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Announcement</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Offer"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={'Special offers for service booking'}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Send To</label>
                  <ul className="custom-radiosbtn">
                    <li>
                      <label className="radiossets">
                        Select All
                        <input type="radio" name="announcementSend" />
                        <span className="checkmark-radio" />
                      </label>
                    </li>
                    <li>
                      <label className="radiossets">
                        User
                        <input
                          type="radio"
                          checked={true}
                          name="announcementSend"
                        />
                        <span className="checkmark-radio" />
                      </label>
                    </li>
                    <li>
                      <label className="radiossets">
                        Provider
                        <input type="radio" name="announcementSend" />
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
      <div className="modal fade" id="delete-announcement">
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
                <Icon.Trash2 size={40} className="text-danger fs-1" />
                <div className="mt-4">
                  <h4>Delete Announcement?</h4>
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
    </>
  );
};

export default AnnouncementsModal;
