import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';


const Chat = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row chat-window">
                        {/* Chat User List */}
                        <div className="col-lg-5 col-xl-3 chat-cont-left d-flex">
                            <div className="card mb-sm-3 mb-md-0 contacts_card flex-fill">
                                <div className="chat-header">
                                    <div>
                                        <h6>Chats</h6>
                                        <p>Start New Conversation</p>
                                    </div>
                                    <Link to="#" className="chat-compose">
                                        <Icon.Plus className="react-feather-custom me-2"></Icon.Plus>
                                    </Link>
                                </div>
                                <div className="chat-search">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="search_btn">
                                                <Icon.Search className="react-feather-custom me-2"></Icon.Search>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search messages or users"
                                            className="form-control search-chat"
                                        />
                                    </div>
                                </div>
                                <ul className="chat-list">
                                    <li>
                                        <Link to="#" className="active">
                                            <i className="fe fe-message-square" /> Chat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fe fe-phone-call" /> Call
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="fe fe-users" /> Contacts
                                        </Link>
                                    </li>
                                </ul>
                                <div className="card-body contacts_body chat-users-list chat-scroll">
                                    <div className="chat-header inner-chat-header pt-0">
                                        <div>
                                            <h6>Favourite</h6>
                                        </div>
                                        <Link to="#" className="chat-compose">
                                            <Icon.Plus className="react-feather-custom me-2"></Icon.Plus>
                                        </Link>
                                    </div>
                                    <Link to="#" className="media d-flex active">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar avatar-online">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">John Steven</div>
                                                <div className="user-last-chat">Lorem ipsum dolor</div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">10:12 AM</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="media d-flex read-chat">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar avatar-online">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-03.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">John Smith</div>
                                                <div className="user-last-chat">
                                                    <i className="fe fe-image" /> Image
                                                </div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">10:19 AM</div>
                                                <div className="badge badge-primary badge-pill">2</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="media d-flex">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-04.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">Audrey</div>
                                                <div className="user-last-chat">
                                                    <i className="fe fe-video" /> Video
                                                </div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">7:30 PM</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="media read-chat d-flex">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar avatar-away">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-06.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">David</div>
                                                <div className="user-last-chat">
                                                    <i className="fe fe-file-text" /> Document
                                                </div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">6:59 PM</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="media read-chat d-flex">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar avatar-online">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-05.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">Ashley</div>
                                                <div className="user-last-chat">typing...</div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">11:21 AM</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="chat-header inner-chat-header">
                                        <div>
                                            <h6>Direct Messages</h6>
                                        </div>
                                        <Link to="#" className="chat-compose">
                                            <Icon.Plus className="react-feather-custom me-2"></Icon.Plus>
                                        </Link>
                                    </div>
                                    <Link to="#" className="media d-flex">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-09.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">James</div>
                                                <div className="user-last-chat">Lorem ipsum dolor</div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">10:12 AM</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="media d-flex read-chat">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar avatar-online">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-08.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">Sheila</div>
                                                <div className="user-last-chat">
                                                    <i className="fe fe-image" /> Image
                                                </div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">10:19 AM</div>
                                                <div className="badge badge-primary badge-pill">2</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="media d-flex">
                                        <div className="media-img-wrap flex-shrink-0">
                                            <div className="avatar">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-10.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                        </div>
                                        <div className="media-body flex-grow-1">
                                            <div>
                                                <div className="user-name">Eric</div>
                                                <div className="user-last-chat">
                                                    <i className="fe fe-video" /> Video
                                                </div>
                                            </div>
                                            <div>
                                                <div className="last-chat-time">7:30 PM</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Chat User List */}
                        {/* Chat Content */}
                        <div className="col-lg-7 col-xl-6 chat-cont-right d-flex">
                            {/* Chat History */}
                            <div className="card mb-0">
                                <div className="card-header msg_head">
                                    <div className="d-flex bd-highlight">
                                        <Link
                                            id="back_user_list"
                                            to="#"
                                            className="back-user-list"
                                        >
                                            <i className="fas fa-chevron-left" />
                                        </Link>
                                        <div className="img_cont">
                                            <ImageWithBasePath
                                                className="rounded-circle user_img"
                                                src="assets/img/profiles/avatar-02.jpg"
                                                alt="User"
                                            />
                                        </div>
                                        <div className="user_info">
                                            <span>John Steven</span>
                                            <p className="mb-0 active">Online</p>
                                        </div>
                                    </div>
                                    <div className="chat-options">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                <Icon.Volume2 className="react-feather-custom me-2"></Icon.Volume2>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <Icon.Search className="react-feather-custom me-2"></Icon.Search>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <Icon.Video className="react-feather-custom me-2"></Icon.Video>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <Icon.User className="react-feather-custom me-2" id="task_chat"></Icon.User>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="with-bg">
                                                <Icon.MoreHorizontal className="react-feather-custom me-2"></Icon.MoreHorizontal>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body msg_card_body chat-scroll pt-0">
                                    <ul className="list-unstyled">
                                        <li className="chat-date mt-0">
                                            <span>Yesterday</span>
                                        </li>
                                        <li className="media received d-flex">
                                            <div className="avatar flex-shrink-0">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <div className="msg-box">
                                                    <div>
                                                        <ul className="chat-msg-info">
                                                            <li>John Steven</li>
                                                            <li>
                                                                <span className="chat-time">8:55 PM</span>
                                                                <div className="drop-item">
                                                                    <Link
                                                                        to="#"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="fe fe-more-horizontal" />
                                                                    </Link>
                                                                    <div className="dropdown-menu">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="fe fe-trash-2" /> Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                            incididunt ut labore et dolore magna aliqua.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media sent d-flex">
                                            <div className="avatar flex-shrink-0">
                                                <ImageWithBasePath
                                                    src="assets/img/provider/provider-01.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <div className="msg-box">
                                                    <div>
                                                        <ul className="chat-msg-info">
                                                            <li>John Smith</li>
                                                            <li>
                                                                <div className="drop-item">
                                                                    <Link
                                                                        to="#"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="fe fe-more-horizontal" />
                                                                    </Link>
                                                                    <div className="dropdown-menu">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="fe fe-trash-2" /> Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <span className="chat-time">8:55 PM</span>
                                                            </li>
                                                        </ul>
                                                        <p>
                                                            Sed ut perspiciatis unde omnis iste natus error
                                                            accusantium doloremque laudantium
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media received d-flex">
                                            <div className="avatar flex-shrink-0">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <div className="msg-box">
                                                    <div>
                                                        <ul className="chat-msg-info">
                                                            <li>John Steven</li>
                                                            <li>
                                                                <span className="chat-time">8:55 PM</span>
                                                                <div className="drop-item">
                                                                    <Link
                                                                        to="#"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="fe fe-more-horizontal" />
                                                                    </Link>
                                                                    <div className="dropdown-menu">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="fe fe-trash-2" /> Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div className="chat-msg-attachments">
                                                            <div className="chat-attachment">
                                                                <ImageWithBasePath
                                                                    src="assets/img/services/service-03.jpg"
                                                                    alt="Attachment"
                                                                />
                                                                <Link to="" className="chat-attach-download">
                                                                    <i className="fas fa-download" />
                                                                </Link>
                                                            </div>
                                                            <div className="chat-attachment">
                                                                <ImageWithBasePath
                                                                    src="assets/img/services/service-04.jpg"
                                                                    alt="Attachment"
                                                                />
                                                                <Link to="" className="chat-attach-download">
                                                                    <i className="fas fa-download" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media sent d-flex">
                                            <div className="avatar flex-shrink-0">
                                                <ImageWithBasePath
                                                    src="assets/img/provider/provider-01.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <div className="msg-box">
                                                    <div>
                                                        <ul className="chat-msg-info">
                                                            <li>John Smith</li>
                                                            <li>
                                                                <div className="drop-item">
                                                                    <Link
                                                                        to="#"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="fe fe-more-horizontal" />
                                                                    </Link>
                                                                    <div className="dropdown-menu">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="fe fe-trash-2" /> Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <span className="chat-time">8:55 PM</span>
                                                            </li>
                                                        </ul>
                                                        <div className="chat-file-attachments">
                                                            <div className="chat-file-attach">
                                                                <div className="chat-file-icon">
                                                                    <i className="fe fe-file-text" />
                                                                </div>
                                                                <div className="chat-file-info">
                                                                    <h6>admin_v1.0.zip</h6>
                                                                    <p>25mb Seprate file</p>
                                                                </div>
                                                            </div>
                                                            <Link to="" className="chat-file-download">
                                                                <i className="fe fe-download" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="media received d-flex">
                                            <div className="avatar flex-shrink-0">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <div className="msg-box">
                                                    <div>
                                                        <ul className="chat-msg-info">
                                                            <li>John Steven</li>
                                                            <li>
                                                                <span className="chat-time">8:55 PM</span>
                                                                <div className="drop-item">
                                                                    <Link
                                                                        to="#"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="fe fe-more-horizontal" />
                                                                    </Link>
                                                                    <div className="dropdown-menu">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="fe fe-trash-2" /> Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <p>You wait for notice.</p>
                                                        <p>Consectetuorem ipsum dolor sit?</p>
                                                        <p>Ok?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="chat-date">
                                            <span>Today</span>
                                        </li>
                                        <li className="media sent d-flex">
                                            <div className="avatar flex-shrink-0">
                                                <ImageWithBasePath
                                                    src="assets/img/provider/provider-01.jpg"
                                                    alt="User Image"
                                                    className="avatar-img rounded-circle"
                                                />
                                            </div>
                                            <div className="media-body flex-grow-1">
                                                <div className="msg-box">
                                                    <div>
                                                        <ul className="chat-msg-info">
                                                            <li>John Smith</li>
                                                            <li>
                                                                <div className="drop-item">
                                                                    <Link
                                                                        to="#"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="fe fe-more-horizontal" />
                                                                    </Link>
                                                                    <div className="dropdown-menu">
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                        >
                                                                            <i className="fe fe-trash-2" /> Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <span className="chat-time">8:55 PM</span>
                                                            </li>
                                                        </ul>
                                                        <div className="msg-highlight">
                                                            <Link to="#">
                                                                Sed ut perspiciatis unde omnis iste natus error
                                                                accusantium doloremque laudantium
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <div className="input-group">
                                        <div className="btn-file btn">
                                            <i className="fa fa-plus fs-14" />
                                            <input type="file" />
                                        </div>
                                        <input
                                            className="form-control type_msg mh-auto empty_check"
                                            placeholder="Write your message..."
                                        />
                                        <div className="send-action">
                                            <Link to="#">
                                                <i className="fa fa-smile" />
                                            </Link>
                                            <Link to="#">
                                            <Icon.Mic className="react-feather-custom me-2"></Icon.Mic>
                                            </Link>
                                            <button className="btn btn-primary btn_send">
                                                <i className="fa fa-paper-plane" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Chat Content */}
                        {/* Chat Profile */}
                        <div className="col-xl-3 chat-cont-profile d-flex" id="task_window">
                            <div className="card mb-sm-3 mb-md-0 flex-fill">
                                <div className="card-header">
                                    <div className="profile-wrap">
                                        <div className="chat-profile">
                                            <div className="chat-profile-img">
                                                <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                            </div>
                                            <div className="chat-profile-info">
                                                <h6>John Doe</h6>
                                                <p>Newyork</p>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                <Icon.Mail className="react-feather-custom me-2"></Icon.Mail>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <Icon.Phone className="react-feather-custom me-2"></Icon.Phone>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <Icon.MapPin className="react-feather-custom me-2"></Icon.MapPin>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                <Icon.MoreHorizontal className="react-feather-custom me-2"></Icon.MoreHorizontal>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chat-pro-list">
                                        <ul>
                                            <li>
                                                <span className="role-title">
                                                    <i className="fa fa-briefcase" />
                                                    Company
                                                </span>
                                                <span className="role-info">Company Name</span>
                                            </li>
                                            <li>
                                                <span className="role-title">
                                                    <i className="fa fa-user" />
                                                    Role
                                                </span>
                                                <span className="role-info">Co-founder</span>
                                            </li>
                                            <li>
                                                <span className="role-title">
                                                    <i className="fa fa-phone" />
                                                    Phone
                                                </span>
                                                <span className="role-info">+1 123 456 7890</span>
                                            </li>
                                            <li>
                                                <span className="role-title">
                                                    <i className="fa fa-envelope" />
                                                    Email
                                                </span>
                                                <span className="role-info">info@johnsteven.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-media">
                                        <div className="chat-media-title">
                                            <h6>Shared Media</h6>
                                            <span>(3475 items)</span>
                                        </div>
                                        <div className="media-list">
                                            <ul className="nav">
                                                <li>
                                                    <Link
                                                        to="#"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#chat-photo"
                                                        className="active"
                                                    >
                                                        Photos
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#chat-file"
                                                    >
                                                        File
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#chat-vdo"
                                                    >
                                                        Video
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#chat-link"
                                                    >
                                                        Link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content pt-0">
                                            <div className="tab-pane active" id="chat-photo">
                                                <div className="photo-list">
                                                    <ul>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/services/service-03.jpg"
                                                                alt="img"
                                                            />
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/services/service-04.jpg"
                                                                alt="img"
                                                            />
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/services/service-05.jpg"
                                                                alt="img"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="chat-vdo">
                                                <div className="photo-list">
                                                    <ul>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/services/service-01.jpg"
                                                                alt="img"
                                                            />
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/services/service-04.jpg"
                                                                alt="img"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="chat-file">
                                                <div className="photo-file">
                                                    <ul>
                                                        <li>
                                                            <i className="fe fe-file-text me-2" /> admin_v1.0.zip
                                                        </li>
                                                        <li>
                                                            <i className="fe fe-file-text me-2" /> test.pdf
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="chat-link">
                                                <div className="photo-link">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fe fe-link-2 me-2" /> Sed ut
                                                                perspiciatis
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fe fe-link-2 me-2" /> https:example.com
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-notification">
                                            <ul>
                                                <li>
                                                    <p>
                                                        <i className="fa fa-bell" /> Notifications
                                                    </p>
                                                    <div className="status-toggle d-flex justify-content-sm-end align-items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="status_1"
                                                            className="check"
                                                        />
                                                        <label htmlFor="status_1" className="checktoggle">
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>
                                                        <i className="fa fa-star" /> Add To Favourites
                                                    </p>
                                                    <div className="status-toggle d-flex justify-content-sm-end align-items-center">
                                                        <input
                                                            type="checkbox"
                                                            id="status_2"
                                                            className="check"
                                                        />
                                                        <label htmlFor="status_2" className="checktoggle">
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>
                                                        <i className="fa fa-volume-mute" /> Mute
                                                    </p>
                                                    <div className="status-toggle d-flex justify-content-sm-end align-items-center">
                                                        <input type="checkbox" id="status_3" className="check" />
                                                        <label htmlFor="status_3" className="checktoggle">
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="clear-list">
                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fe fe-trash-2" />
                                                        Clear Chat
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fe fe-external-link" />
                                                        Export Chat
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fe fe-alert-circle" />
                                                        Report Contact
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Chat Content */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Chat
