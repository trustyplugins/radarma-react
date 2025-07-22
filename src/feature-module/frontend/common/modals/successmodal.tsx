import React from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';


const SuccessModal = () => {
  const routes = all_routes;

  return (
    <>
      {/* Modal Succss */}

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
              <p>Service has been created succeessfully</p>
              <div className="popup-btn">
                <Link to={routes.providerService} className="btn btn-primary">
                  Go to Dashboard <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Succss */}
    </>
  );
};

export default SuccessModal;
