import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';

const ProviderChat = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="customer-chat">
          <div className="row chat-window">
            {/* Chat User List */}
            <div className="col-lg-4 chat-cont-left d-flex">
              <div className="card mb-3 mb-md-0 flex-fill">
                <div className="chat-header">
                  <div className="mb-3">
                    <h6>Chats</h6>
                  </div>
                  <div className="position-relative mb-0">
                    <input
                      type="text"
                      placeholder="Search For Contacts or Messages"
                      className="form-control"
                    />
                    <div className="search-icon-right">
                      <span className="search_btn">
                        <i className="feather-search" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body chat-users-list chat-scroll pt-0">
                  <div className="chat-header inner-chat-header pt-0">
                    <div>
                      <h6>All Chats</h6>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member active mb-2"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online active flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Anthony Lewis</h6>
                        <p className="fs-14 text-gray">is typing ...</p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">02:40 PM</p>
                        <div className="d-flex align-items-center justify-content-end">
                          <i className="ti ti-pinned me-2" />
                          <span className="badge badge-danger rounded-pill">
                            12
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member mb-2"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-15.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Sarika Jain</h6>
                        <p className="fs-14 text-gray text-truncate">
                          Do you know which
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">06:12 AM</p>
                        <div className="d-flex align-items-center justify-content-end">
                          <i className="ti ti-pinned me-2" />
                          <i className="ti ti-checks text-success" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member mb-2"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-04.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Clyde Smith</h6>
                        <p className="fs-14 text-gray text-truncate">
                          Haha oh man 🔥
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">03:15 AM</p>
                        <div className="d-flex align-items-center justify-content-end">
                          <i className="ti ti-pinned me-2" />
                          <span className="badge badge-danger rounded-pill">
                            55
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member mb-2"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-20.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Estell Gibson</h6>
                        <p className="fs-14 text-danger d-flex align-items-center">
                          <i className="ti ti-video-off me-1" />
                          Missed Video Call
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">03:15 AM</p>
                        <div className="d-flex align-items-center justify-content-end">
                          <i className="ti ti-heart-filled text-warning me-2" />
                          <i className="ti ti-checks text-success" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member mb-2"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-25.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Carla Jenkins</h6>
                        <p className="fs-14 text-success d-flex align-items-center">
                          <i className="ti ti-video me-1" />
                          Incoming Video
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">Sunday</p>
                        <div>
                          <i className="ti ti-checks text-success" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member mb-2"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Federico Wells</h6>
                        <p className="fs-14 text-gray">
                          <i className="ti ti-photo me-1" />
                          Photo
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">Wednesday</p>
                        <div>
                          <span className="badge badge-danger rounded-pill">
                            25
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member mb-2"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-39.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Edward Lietz</h6>
                        <p className="fs-14 text-gray d-flex align-items-center">
                          <i className="ti ti-file me-1" />
                          Document
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">02:40 PM</p>
                        <div>
                          <i className="ti ti-checks text-success" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className="d-flex justify-content-between chat-member"
                  >
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg online flex-shrink-0 me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-40.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="fs-16 fw-medium mb-1">Sharon Ford</h6>
                        <p className="fs-14 text-gray text-truncate">
                          Hi How are you 🔥
                        </p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-end">
                        <p className="mb-1 fs-14 text-gray">02:40 PM</p>
                        <div>
                          <span className="badge badge-danger rounded-pill">
                            25
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Chat User List */}
            {/* Chat Content */}
            <div className="col-lg-8 chat-cont-right chat-window-long">
              {/* Chat History */}
              <div className="card chat-window mb-0 shadow-none">
                <div className="card-header msg_head">
                  <div className="d-flex bd-highlight">
                    <Link
                      id="back_user_list"
                      to="#"
                      className="back-user-list"
                    >
                      <i className="fas fa-chevron-left" />
                    </Link>
                    <div className="avatar avatar-lg online flex-shrink-0 me-2">
                      <ImageWithBasePath
                        className="rounded-circle"
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="User"
                      />
                    </div>
                    <div>
                      <h6 className="fs-16 fw-medium mb-1">Anthony Lewis</h6>
                      <p className="fs-14">Online</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center send-action">
                    <Link to="#">
                      <i className="ti ti-search fs-16" />
                    </Link>
                    <Link to="#" className="me-0">
                      <i className="ti ti-dots-vertical fs-16" />
                    </Link>
                  </div>
                </div>
                <div className="card-body msg_card_body chat-scroll pt-0">
                  <ul className="list-unstyled">
                    <li className="sent-message-group">
                      <ul>
                        <li className="media sent d-flex align-items-end">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div className="d-flex align-items-center justify-content-end mb-1">
                                <span className="d-flex align-items-center fs-14">
                                  <i className="ti ti-checks text-success me-2" />
                                  10:45 am
                                </span>
                                <i className="ti ti-point-filled mx-1 text-light" />
                                <p className="fs-14">You</p>
                              </div>
                              <div className="position-relative">
                                <div className="sent-message">
                                  <p className="fs-14">
                                    Hi there! I&apos;m interested in your services.
                                  </p>
                                </div>
                                <span className="drop-item message-more-option">
                                  <Link
                                    to="#"
                                    className="more-vertical-bar"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <small className="dropdown-menu">
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-copy me-2" />
                                      Copy
                                    </Link>
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-trash-2 me-2" />
                                      Delete
                                    </Link>
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media sent d-flex align-items-end">
                          <div className="avatar avatar-lg flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-04.jpg"
                              alt="User Image"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div className="d-flex align-items-center justify-content-end mb-1">
                                <span className="d-flex align-items-center fs-14">
                                  <i className="ti ti-checks text-success me-2" />
                                  10:45 am
                                </span>
                                <i className="ti ti-point-filled mx-1 text-light" />
                                <p className="fs-14">You</p>
                              </div>
                              <div className="position-relative">
                                <div className="sent-message">
                                  <p className="fs-14">
                                    Can you tell me more about what you offer?,
                                    Can you explain it breifly...
                                  </p>
                                </div>
                                <span className="drop-item message-more-option">
                                  <Link
                                    to="#"
                                    className="more-vertical-bar"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <small className="dropdown-menu">
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-copy me-2" />
                                      Copy
                                    </Link>
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-trash-2 me-2" />
                                      Delete
                                    </Link>
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="media received d-flex align-items-end">
                      <div className="avatar avatar-lg flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div className="d-flex align-items-center mb-1">
                            <p className="fs-14 mb-0">Anthony Lewis</p>
                            <i className="ti ti-point-filled mx-1 text-light" />
                            <span className="d-flex align-items-center fs-14">
                              10:45 am
                              <i className="ti ti-checks text-success ms-2" />
                            </span>
                          </div>
                          <div className="position-relative">
                            <div className="received-message">
                              <p className="fs-14">
                                Hi there! I&apos;m interested in your services.
                              </p>
                            </div>
                            <span className="drop-item message-more-option">
                              <Link
                                to="#"
                                className="more-vertical-bar"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <small className="dropdown-menu">
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  <i className="feather-copy me-2" />
                                  Copy
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  <i className="feather-trash-2 me-2" />
                                  Delete
                                </Link>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="text-center day-badge mb-4">
                      <span className="badge badge-dark rounded-pill mx-auto">
                        Yesterday
                      </span>
                    </li>
                    <li className="media sent d-flex align-items-end">
                      <div className="avatar avatar-lg flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-04.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div className="d-flex align-items-center justify-content-end mb-1">
                            <span className="d-flex align-items-center fs-14">
                              <i className="ti ti-checks text-success me-2" />
                              10:45 am
                            </span>
                            <i className="ti ti-point-filled mx-1 text-light" />
                            <p className="fs-14">You</p>
                          </div>
                          <div className="position-relative">
                            <div className="sent-message">
                              <p className="fs-14">
                                Can you tell me more about what you offer?, Can
                                you explain it breifly...
                              </p>
                            </div>
                            <span className="drop-item message-more-option">
                              <Link
                                to="#"
                                className="more-vertical-bar"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <small className="dropdown-menu">
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  <i className="feather-copy me-2" />
                                  Copy
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  <i className="feather-trash-2 me-2" />
                                  Delete
                                </Link>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="media received d-flex align-items-end">
                      <div className="avatar avatar-lg flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="User Image"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="msg-box">
                          <div className="d-flex align-items-center mb-1">
                            <p className="fs-14 mb-0">Anthony Lewis</p>
                            <i className="ti ti-point-filled mx-1 text-light" />
                            <span className="d-flex align-items-center fs-14">
                              08:00 AM
                              <i className="ti ti-checks text-success ms-2" />
                            </span>
                          </div>
                          <div className="position-relative">
                            <div className="received-message">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-md rounded-circle bg-white text-dark flex-shrink-0 me-2">
                                  <i className="ti ti-files fs-18" />
                                </span>
                                <div>
                                  <p className="mb-0 fs-14">Ecommerce.zip</p>
                                  <span className="fs-14">14.23 KB</span>
                                </div>
                              </div>
                            </div>
                            <span className="drop-item message-more-option">
                              <Link
                                to="#"
                                className="more-vertical-bar"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <small className="dropdown-menu">
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  <i className="feather-copy me-2" />
                                  Copy
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                >
                                  <i className="feather-trash-2 me-2" />
                                  Delete
                                </Link>
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="sent-message-group">
                      <ul>
                        <li className="media sent d-flex align-items-end">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div className="d-flex align-items-center justify-content-end mb-1">
                                <span className="d-flex align-items-center fs-14">
                                  <i className="ti ti-checks text-success me-2" />
                                  09:15 AM
                                </span>
                                <i className="ti ti-point-filled mx-1 text-light" />
                                <p className="fs-14">You</p>
                              </div>
                              <div className="position-relative">
                                <div className="sent-message">
                                  <p className="fs-14">
                                    Hi there! I&apos;m interested in learning more
                                  </p>
                                </div>
                                <span className="drop-item message-more-option">
                                  <Link
                                    to="#"
                                    className="more-vertical-bar"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <small className="dropdown-menu">
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-copy me-2" />
                                      Copy
                                    </Link>
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-trash-2 me-2" />
                                      Delete
                                    </Link>
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media sent d-flex align-items-end">
                          <div className="avatar avatar-lg flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-04.jpg"
                              alt="User Image"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div className="d-flex align-items-center justify-content-end mb-1">
                                <span className="d-flex align-items-center fs-14">
                                  <i className="ti ti-checks text-success me-2" />
                                  09:15 AM
                                </span>
                                <i className="ti ti-point-filled mx-1 text-light" />
                                <p className="fs-14">You</p>
                              </div>
                              <div className="position-relative">
                                <div className="sent-message">
                                  <p className="fs-14">
                                    Send me your Profile Video if Any??
                                  </p>
                                </div>
                                <span className="drop-item message-more-option">
                                  <Link
                                    to="#"
                                    className="more-vertical-bar"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical" />
                                  </Link>
                                  <small className="dropdown-menu">
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-copy me-2" />
                                      Copy
                                    </Link>
                                    <Link
                                      className="dropdown-item"
                                      to="#"
                                    >
                                      <i className="feather-trash-2 me-2" />
                                      Delete
                                    </Link>
                                  </small>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <Link to="#" className="microphone-chat">
                      <i className="ti ti-microphone fs-16" />
                    </Link>
                    <input
                      className="form-control type_msg mh-auto empty_check"
                      placeholder="Type Your Message"
                    />
                    <div className="send-action">
                      <Link to="#">
                        <i className="ti ti-mood-smile fs-16" />
                      </Link>
                      <Link to="#">
                        <i className="ti ti-folder fs-16" />
                      </Link>
                      <Link to="#">
                        <i className="ti ti-dots-vertical fs-16" />
                      </Link>
                      <button className="btn btn-primary btn_send">
                        <i className="ti ti-send fs-16" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chat Content */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  );
};

export default ProviderChat;
