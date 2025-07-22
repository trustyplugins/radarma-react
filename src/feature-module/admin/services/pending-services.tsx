/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import DeletePendingServiceModal from '../common/modals/delete-pending-service-modal';


const PendingServices = () => {

    const data = useSelector((state: any) => state.pendingService);

    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

    const actionButton = () => {
        return (
            <div className="table-actions d-flex">
                <Link className="table-edit" to="/edit-service" data-bs-toggle="modal" data-bs-target="#edit-category">
                    <div className="fa-regular fa-pen-to-square">
                    </div>
                    Edit
                </Link>
                <Link className="table-delete me-2" to="#" data-bs-toggle="modal" data-bs-target="#delete-item">
                    <div className="fa-solid fa-trash-can" />Delete


                </Link>
            </div>
        )
    }
    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Pending Services</h5>
                        <div className="list-btn">
                            <ul>
                                <li>
                                    <div className="filter-sorting">
                                        <ul>
                                            <li>
                                                <Link to="#" className="filter-sets">
                                                    <Icon.Filter className="react-feather-custom me-2"></Icon.Filter>
                                                    Filter
                                                </Link>
                                            </li>
                                            <li>
                                                <span>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/sort.svg"
                                                        className="me-2"
                                                        alt="img"
                                                    />
                                                </span>
                                                <div className="review-sort">
                                                    <Dropdown
                                                        value={selectedValue}
                                                        onChange={(e) => setSelectedValue(e.value)}
                                                        options={value}
                                                        optionLabel="name"
                                                        placeholder="A - Z"
                                                        className="select admin-select-breadcrumb"
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link className="btn btn-primary" to="/add-service">
                                        <i className="fa fa-plus me-2" />
                                        Add Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-sets">
                                <div className="tab-contents-sets">
                                    <ul>
                                        <li>
                                            <Link to="/services">All Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/active-services">Active</Link>
                                        </li>
                                        <li>
                                            <Link to="/pending-services" className="active">
                                                Pending
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/inactive-services">Inactive </Link>
                                        </li>
                                        <li>
                                            <Link to="/deleted-services">Deleted </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-contents-count">
                                    <h6>Showing 8-10 of 84 results</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="table-resposnive table-div">
                                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="id" header="#"></Column>
                                    <Column sortable field="services" header="Services" ></Column>
                                    <Column sortable field="category" header="Category"></Column>
                                    <Column sortable field="subCategory" header="SubCategory" ></Column>
                                    <Column sortable field="price" header="Price"></Column>
                                    <Column sortable field="duration" header="Duration"></Column>
                                    <Column sortable field="status" header="status" className='badge-pending'></Column>
                                    <Column sortable field="createdby" header="createdby"></Column>
                                    <Column sortable field="action" header="Action" body={actionButton}></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeletePendingServiceModal />
        </>
    )
}

export default PendingServices
