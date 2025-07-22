import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { customerOption, serviceOption, staffOption } from '../../../../core/data/json/dropDownData';
import CustomDropdown from '../../common/dropdown/commonSelect';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
interface EventDetails {
  title: string;
}
const ProviderBookDetails = () => {
  const routes = all_routes;
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    title: "",
  });
  const calendarRef = useRef(null);
  const handleEventClick = (info: any) => {
    setEventDetails({
      title: info.event.title,
    });
    setShowEventDetailsModal(true);
  };
  const handleEventDetailsClose = () => setShowEventDetailsModal(false);
  const events = [
    {
      title: '12:30am Laptop serv...',
      color: '#EAEBEE',
        textColor: '#242B3A',
        start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
    },
    {
      title: '10:00am House Clean..',
      color: '#EAEBEE',
        textColor: '#242B3A',
      start: new Date(Date.now() + 338000000).toISOString().slice(0, 10)
    },
    {
      title: '11:00am Washing ...',
      color: '#EAEBEE',
        textColor: '#242B3A',
      start: new Date(Date.now() - 338000000).toISOString().slice(0, 10)
    },
    {
      title: '02:00pm Toughened...',
      color: '#EAEBEE',
        textColor: '#242B3A',
      start: new Date(Date.now() + 68000000).toISOString().slice(0, 10)
    }
  ]

  return (
    <div>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
          <h4>Booking</h4>
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <p className="text-dark me-2 mb-0">Sort</p>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Newly Added
              </Link>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item active">
                  Newly Added
                </Link>
                <Link to="#" className="dropdown-item">
                  Oldest
                </Link>
              </div>
            </div>
            <Link
              to="#"
              className="tags active d-flex justify-content-center align-items-center border rounded me-2"
            >
              <i className="ti ti-calendar-month" />
            </Link>
            <Link
              to={routes.providerBooking}
              className="tags d-flex justify-content-center align-items-center border rounded me-2"
            >
              <i className="ti ti-list" />
            </Link>
            <Link
              to="#"
              className="btn btn-dark d-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#add_booking"
            >
              <i className="ti ti-circle-plus me-2" />
              Add Bookings
            </Link>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
        <div id="calendar-book" >
                  <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                      ]}
                      initialView="dayGridMonth"
                      events={events}
                      headerToolbar={{
                        left: 'title, prev,today next',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                      }}
                      
                      eventClick={handleEventClick}
                      ref={calendarRef}
                    />
                  </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-3">
        <div className="value d-flex align-items-center">
          <span>Show</span>
          <select>
            <option>7</option>
          </select>
          <span>entries</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-2 text-gray-9">1 - 07 of 10</span>
          <nav aria-label="Page navigation">
            <ul className="paginations d-flex justify-content-center align-items-center">
              <li className="page-item me-2">
                <Link
                  className="page-link-1 active d-flex justify-content-center align-items-center "
                  to="#"
                >
                  1
                </Link>
              </li>
              <li className="page-item me-2">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center "
                  to="#"
                >
                  2
                </Link>
              </li>
              <li className="page-item ">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center "
                  to="#"
                >
                  3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

       {/* Booking Details */}
  <div className={`toggle-sidebar ${showEventDetailsModal && 'sidebar-popup'}`}>
    <div className="sidebar-layout">
      <div className="sidebar-header pb-3 mb-3">
        <h5>Booking Details</h5>
        <Link to="#" onClick={handleEventDetailsClose} className="sidebar-close">
          <i className="ti ti-x" />
        </Link>
      </div>
      <div className="sidebar-body">
        <div className="book-confirm bk-wrap">
          <div className="d-flex justify-content-between">
            <h6>
              {eventDetails.title}
              <span className="badge badge-soft-success">Confirmed</span>
            </h6>
            <Link to="#" className="edit-book">
              <i className="feather icon-edit" />
            </Link>
          </div>
          <ul>
            <li>
              <span className="bk-date">
                <i className="feather icon-calendar" /> Date &amp; Time
              </span>{" "}
              : Oct 28, 2023 - 10AM to 12 AM
            </li>
            <li>
              <span className="bk-date">
                <i className="feather icon-map-pin" /> Location
              </span>{" "}
              : New York
            </li>
            <li>
              <span className="bk-date">
                <i className="feather icon-user" /> User Name
              </span>{" "}
              : John Smith
            </li>
          </ul>
          <div className="d-flex align-items-center mb-3">
            <Link
              to="#"
              className="btn btn-dark btn-sm me-2"
              data-bs-toggle="modal"
              data-bs-target="#reschedule"
            >
              <i className="feather icon-user me-1" /> Reschedule
            </Link>
            <Link
              to="#"
              className="btn btn-light btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#cancel_appointment"
            >
              <i className="feather icon-x-circle me-1" /> Cancel
            </Link>
          </div>
        </div>
        <div className="book-customer bk-wrap pt-3">
          <h5>Provider Details</h5>
          <div className="d-flex align-items-center flex-wrap justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-md me-2">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="rounded-circle"
                  alt="User"
                />
              </span>
              <div>
                <h6 className="fs-14 fw-medium">John Doe</h6>
                <p className="mb-0">Montana, USA</p>
              </div>
            </div>
            <div>
              <Link to={routes.customerChat} className="btn btn-dark btn-sm">
                <i className="ti ti-message me-1" />
                Chat
              </Link>
            </div>
          </div>
        </div>
        <div className="bk-wrap py-3">
          <h5>Appointment Message</h5>
          <p className="mb-0">Thanks for your interest in our services</p>
        </div>
        <div className="bk-wrap bk-service py-3">
          <div>
            <h5>House Cleaning Services</h5>
            <p className="mb-0">quick and quality service</p>
          </div>
          <p className="bk-price">$100.00</p>
        </div>
        <div className="bk-wrap bk-history pt-3">
          <h4>Booking History</h4>
          <ul>
            <li>
              <span>
                <i className="feather icon-calendar" />
              </span>
              <div className="book-crete">
                <h6>Booking created</h6>
                <p>Oct 28 2023 1:28 PM</p>
              </div>
            </li>
            <li>
              <span>
                <i className="feather icon-user" />
              </span>
              <div className="book-crete">
                <h6>Assigned to John Smith</h6>
                <p>Oct 28 2023 1:28 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* /Booking Details */}
  {/* Reschedule Appointment */}
  <div className="modal fade custom-modal" id="reschedule">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Reschedule Appointment</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <form >
            <div className="mb-3">
              <label className="form-label">Appointment Date</label>
              <div className="form-icon react-calender">
              <CommonDatePicker/>
                <span className="cus-icon">
                  <i className="feather icon-calendar" />
                </span>
              </div>
            </div>
            <div className="mb-0">
              <label className="form-label">Appointment Time</label>
              <div className="form-icon">
                <input
                  type="text"
                  className="form-control timepicker"
                  placeholder="DD/MM/YYYY"
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
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
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
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <form >
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
              <Link
                to="#"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
              >
                Dismiss
              </Link>
              <button data-bs-dismiss="modal" className="btn btn-dark" type="button">
                Yes, Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <>
  {/* Add Booking */}
  <div className="modal fade custom-modal" id="add_booking">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Booking</h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Staff</label>
                  <CustomDropdown
                options={staffOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Service</label>
                  <CustomDropdown
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Customer</label>
                  <CustomDropdown
                options={customerOption}
                className="select d-flex"
                placeholder="Select"
            />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <div className="sel-cal react-calender Calendar-icon">
                    <span>
                      <i className="ti ti-calendar-month" />
                    </span>
                    <CommonDatePicker/>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <div className="sel-cal Calendar-icon">
                        <span>
                          <i className="ti ti-clock" />
                        </span>
                        <input
                          className="form-control timepicker"
                          type="text"
                          placeholder="dd-mm-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <div className="sel-cal Calendar-icon">
                        <span>
                          <i className="ti ti-clock" />
                        </span>
                        <input
                          className="form-control timepicker"
                          type="text"
                          placeholder="dd-mm-yyyy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-0">
                  <label className="form-label">Booking Message</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Booking */}
</>

  {/* /Cancel Appointment */}
<div className={`sidebar-overlay ${showEventDetailsModal && 'opened'}`} onClick={handleEventDetailsClose}></div>
    </div>
  );
};

export default ProviderBookDetails;
