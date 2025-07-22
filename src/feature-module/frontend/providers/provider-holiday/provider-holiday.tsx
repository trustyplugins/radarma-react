import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Calendar } from 'primereact/calendar';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
interface EventDetails {
  title: string;
}
const ProviderHoliday = () => {
  const [date, setDate] = useState(null);
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
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <h5>Holiday &amp; Leave</h5>
        <div className="d-flex align-items-center">
          <Link to={routes.providerLeaveHistory} className="btn btn-light me-2">
            <i className="feather icon-file-text" /> Leave History
          </Link>
          <Link
            to="#"
            className="btn btn-light me-2"
            data-bs-toggle="modal"
            data-bs-target="#add-holiday"
          >
            <i className="feather icon-plus" /> Add Holiday
          </Link>
          <Link
            to="#"
            className="btn btn-dark add-set"
            data-bs-toggle="modal"
            data-bs-target="#add-leave"
          >
            <i className="feather icon-plus" /> Add Leave
          </Link>
        </div>
      </div>
      {/* calendar */}
      <div className="row">
        <div className="col-md-12">
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
      {/* /calendar */}
    </div>
  </div>
  {/* Add Holiday */}
  <div className="modal fade custom-modal" id="add-holiday">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Holiday </h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body pt-0">
          <form action="#">
            <div className="wallet-add">
              <div className="form-group">
                <label className="col-form-label">Holiday Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Holiday Name"
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">From</label>
                <div className="react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather icon-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">To</label>
                <div className="react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather icon-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">Description</label>
                <textarea className="form-control" rows={4} defaultValue={""} />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-end align-items-center">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Holiday */}
  {/* Add Leave */}
  <div className="modal fade custom-modal" id="add-leave">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Add Leave </h5>
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body pt-0">
          <form action="#">
            <div className="wallet-add">
              <div className="form-group">
                <label className="col-form-label">From</label>
                <div className="react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather icon-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">To</label>
                <div className="react-calender form-icon">
                <CommonDatePicker/>
                  <span className="cus-icon">
                    <i className="feather icon-calendar" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-form-label">Reason</label>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-end align-items-center">
            <Link
              to="#"
              className="btn btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Leave */}

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
  <div className={`sidebar-overlay ${showEventDetailsModal && 'opened'}`} onClick={handleEventDetailsClose}></div>
</>

  );
};

export default ProviderHoliday;
