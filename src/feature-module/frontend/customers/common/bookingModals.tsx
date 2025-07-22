import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactStarsRating from "react-awesome-stars-rating";
import React, { useState } from 'react'
import { TimePicker } from "antd";
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";

const BookingModals = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [rating1, setRating1] = useState(0);
    const handleRatingChange1 = (newRating: any) => {
        setRating1(newRating);
      };
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };
  return (
    <>
  {/* Reschedule Appointment */}
  <div className="modal fade custom-modal" id="reschedule">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Reschedule Appointment</h5>
          <a
            href="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </a>
        </div>
        <div className="modal-body">
          <form >
            <div className="mb-3">
              <label className="form-label">Appointment Date</label>
              <div className="form-icon react-calender">
                
                <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}               
                placeholderText='DD/MM/YYYY'
                className="form-control datetimepicker w-100"
              />
                <span className="cus-icon">
                  <i className="feather icon-calendar" />
                </span>
              </div>
            </div>
            <div className="mb-0">
              <label className="form-label">Appointment Time</label>
              <div className="form-icon">
                
                <TimePicker
                    className="form-control timepicker"
                    use12Hours 
                    placeholder="DD/MM/YYYY"
                    format="h:mm A"
                />
                <span className="cus-icon">
                  <i className="feather icon-clock" />
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="acc-submit">
            <a
              href="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
            <button className="btn btn-dark" type="button" data-bs-dismiss="modal">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Reschedule Appointment */}
  {/* Cancel Appointment */}
  <div className="modal fade custom-modal" id="cancel_appointment">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Cancel Appointment</h5>
          <a
            href="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </a>
        </div>
        <form>
          <div className="modal-body">
            <p>
              Are you sure you want to cancel{" "}
              <span className="text-dark"> John Doe</span> appointment on
              <span className="text-dark"> Oct 28, 2022</span> at time{" "}
              <span className="text-dark"> 10AM - 12PM</span>
            </p>
          </div>
          <div className="modal-footer">
            <div className="acc-submit">
              <a
                href="#"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
              >
                Dismiss
              </a>
              <button className="btn btn-dark" type="button" data-bs-dismiss="modal">
                Yes, Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Cancel Appointment */}
  {/* Add Review */}
  <div className="modal fade custom-modal" id="add-review">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Write A Review</h5>
          <a
            href="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </a>
        </div>
        <form >
          <div className="modal-body">
            <div className="write-review">
              <div className="review-add d-flex align-items-center mb-3">
                <div className="rev-img me-2">
                  <ImageWithBasePath src="assets/img/services/service-19.jpg" alt="image" />
                </div>
                <div>
                  <h6 className="fs-16 fw-medium mb-1">Computer Services</h6>
                  <p className="fs-12">Newyork, USA</p>
                </div>
              </div>
              <div className="form-info d-flex align-items-center justify-content-between mb-3">
                <p className="fw-medium text-dark mb-0">Rate The Service</p>
                <div className="rating-select mb-0">
                <ReactStarsRating
                    value={rating1}
                    onChange={handleRatingChange1}
                  />
                </div>
              </div>
              <div className="mb-0">
                <label className="col-form-label">Write your Review</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Please write your review"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
            <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Review */}
</>

  )
}

export default BookingModals