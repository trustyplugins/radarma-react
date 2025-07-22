/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import * as Icon from 'react-feather';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ContactMessageview = () => {
    const data = useSelector((state: any) => state.contactMessageView);

    const imageRender = (rowData : any) => (
        <div className="table-profileimage">
            <ImageWithBasePath className="me-2" src={rowData.img} alt={rowData.image} style={{ width: '50px', height: 'auto' }} />
            <span className="ml-2">{rowData.name}</span>
        </div>
    );

    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Contact Messages </h5>
                    </div>
                    <ul className="con-list">
                        <li>
                            <span className="con-img">
                                <ImageWithBasePath src="assets/img/customer/user-04.jpg" alt="User" />
                            </span>
                            <div className="con-info">
                                <h6>Name</h6>
                                <p>John Smith</p>
                            </div>
                        </li>
                        <li>
                            <span className="con-icon">
                                <Icon.MessageSquare className="fe fe-message-square react-feather-custom me-2" />

                            </span>
                            <div className="con-info">
                                <h6>Email</h6>
                                <p>john@example.com</p>
                            </div>
                        </li>
                        <li>
                            <span className="con-icon">
                                <Icon.Phone className="react-feather-custom me-2"></Icon.Phone>
                            </span>
                            <div className="con-info">
                                <h6>Phone</h6>
                                <p>+1 347-679-8275</p>
                            </div>
                        </li>
                        <li>
                            <span className="con-icon">
                                <Icon.MessageCircle className="react-feather-custom me-2"></Icon.MessageCircle>

                            </span>
                            <div className="con-info">
                                <h6>Message</h6>
                                <p>Need this script</p>
                            </div>
                        </li>
                        <li>
                            <span className="con-icon">
                                <Icon.Calendar className="react-feather-custom me-2"></Icon.Calendar>
                                <i className="fe fe-calendar" />
                            </span>
                            <div className="con-info">
                                <h6>Date</h6>
                                <p>28 Sep 2023</p>
                            </div>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="btn btn-primary btn-reply"
                                data-bs-toggle="modal"
                                data-bs-target="#add-reply"
                            >
                                Reply
                            </Link>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="table-resposnive">
                                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="name" header="Name" body={imageRender} ></Column>
                                    <Column sortable field="email" header="Email"></Column>
                                    <Column sortable field="phone" header="Phone"></Column>
                                    <Column sortable field="date" header="Date"></Column>
                                    <Column sortable field="message" header="Message"></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="add-reply">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Reply Contact Message</h5>
                            <button
                                type="button"
                                className="btn-close close-modal"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                                <Icon.X className="react-feather-custom"></Icon.X>
                            </button>
                        </div>
                        <div className="modal-body pt-0">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Content</label>
                                    <div id="editor" />
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
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactMessageview
