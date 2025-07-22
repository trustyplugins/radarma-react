import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Edittaxmodalpopup = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/deleted-services');
  };
  return (
    <>
      <div
        className="modal fade add-service-modal"
        id="successmodal"
        tabIndex={-1}
        aria-labelledby="successmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <span>
                <i className="fa-regular fa-circle-check" />
              </span>
              <h3>Success</h3>
              <p>Service has been edited succeessfully</p>
              <div className="popup-btn">
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClick}
                >
                  Go to Dashboard <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edittaxmodalpopup;
