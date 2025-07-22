import React from 'react'
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const ProviderBookingModal = () => {
  return (
    <div className="modal fade custom-modal" id="add-review">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile p-0">
        <div className="modal-header border-bottom-0 text-strat justify-content-between mb-0 p-4">
          <h5 className="modal-title">Write A Review</h5>
          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <Icon.X className="react-feather-custom" />
          </button>
        </div>
        <div className="modal-body pt-0">
          <form>
            <div className="write-review">
              <div className="review-add">
                <div className="rev-img">
                  <ImageWithBasePath
                    src="assets/img/services/service-19.jpg"
                    alt="image" className={''}                        />
                </div>
                <div className="rev-info">
                  <h6>Computer Services</h6>
                  <p>Newyork, USA</p>
                </div>
              </div>
              <div className="form-group form-info">
                <label className="col-form-label">Rate The Service</label>
                <div className="rating rating-select mb-0">
                  <Link to="#">
                    <i className="fas fa-star" />
                  </Link>
                  <Link to="#">
                    <i className="fas fa-star" />
                  </Link>
                  <Link to="#">
                    <i className="fas fa-star" />
                  </Link>
                  <Link to="#">
                    <i className="fas fa-star" />
                  </Link>
                  <Link to="#">
                    <i className="fas fa-star" />
                  </Link>
                </div>
              </div>
              <div className="form-group form-info">
                <label className="col-form-label">
                  Write your Review
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Please write your review"
                  defaultValue={''}
                />
              </div>
              <div className="modal-submit text-end">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProviderBookingModal