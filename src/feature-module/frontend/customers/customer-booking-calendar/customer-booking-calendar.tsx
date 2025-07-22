import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
interface EventDetails {
  title: string;
}
const CustomerBookingCalendar = () => {
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
    <>
     <BreadCrumb title="Bookings" item1="Customer" item2="Bookings" />

      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 ">
                <CustomerSideBar />
              </div>
              <div className="col-xl-9 col-lg-8">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
                    <h4>Bookings</h4>
                    <div className="d-flex align-items-center">
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
                        className="tags d-flex justify-content-center align-items-center border rounded me-2"
                      >
                        <i className="ti ti-calendar-month" />
                      </Link>
                      <Link
                        to="#"
                        className="tags d-flex justify-content-center align-items-center border rounded"
                      >
                        <i className="ti ti-filter" />
                      </Link>
                    </div>
                  </div>
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
          </div>
        </div>
      </div>
      <>
  {/* Booking Details */}
  <div className={`toggle-sidebar ${showEventDetailsModal && 'sidebar-popup'}`}>
    <div className="sidebar-layout">
      <div className="sidebar-header pb-3 mb-3">
        <h5>Booking Details</h5>
        <a href="#" onClick={handleEventDetailsClose} className="sidebar-close">
          <i className="ti ti-x" />
        </a>
      </div>
      <div className="sidebar-body">
        <div className="book-confirm bk-wrap">
          <div className="d-flex justify-content-between">
            <h6>
              {eventDetails.title}
              <span className="badge badge-soft-success">Confirmed</span>
            </h6>
            <a href="#" className="edit-book">
              <i className="feather-edit" />
            </a>
          </div>
          <ul>
            <li>
              <span className="bk-date">
                <i className="feather-calendar" /> Date &amp; Time
              </span>{" "}
              : Oct 28, 2023 - 10AM to 12 AM
            </li>
            <li>
              <span className="bk-date">
                <i className="feather-map-pin" /> Location
              </span>{" "}
              : New York
            </li>
            <li>
              <span className="bk-date">
                <i className="feather-user" /> User Name
              </span>{" "}
              : John Smith
            </li>
          </ul>
          <div className="d-flex align-items-center mb-3">
            <a
              href="#"
              className="btn btn-dark btn-sm me-2"
              data-bs-toggle="modal"
              data-bs-target="#reschedule"
            >
              <i className="feather-user me-1" /> Reschedule
            </a>
            <a
              href="#"
              className="btn btn-light btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#cancel_appointment"
            >
              <i className="feather-x-circle me-1" /> Cancel
            </a>
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
              <a href={routes.customerChat} className="btn btn-dark btn-sm">
                <i className="ti ti-message me-1" />
                Chat
              </a>
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
                <i className="feather-calendar" />
              </span>
              <div className="book-crete">
                <h6>Booking created</h6>
                <p>Oct 28 2023 1:28 PM</p>
              </div>
            </li>
            <li>
              <span>
                <i className="feather-user" />
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
              <CommonDatePicker/>
                <span className="cus-icon">
                  <i className="feather-calendar" />
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
                  <i className="feather-clock" />
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
              <a
                href="#"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
              >
                Dismiss
              </a>
              <button data-bs-dismiss="modal" className="btn btn-dark" type="button">
                Yes, Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Cancel Appointment */}
</>
<div className={`sidebar-overlay ${showEventDetailsModal && 'opened'}`} onClick={handleEventDetailsClose}></div>
    </>
  );
};

export default CustomerBookingCalendar;
