import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { all_routes } from '../../../core/data/routes/all_routes';
import DeleteContactMessagesModal from '../common/modals/delete-contact-messages-modal';
import { ContactMessagesInterface } from '../../../core/models/interface';
const routes = all_routes;


const ContactMessages = () => {

    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

    const data = useSelector((state: any) => state.constantMessages);
    

    const imageRender = (rowData: ContactMessagesInterface) => {
        return (
          <div className="table-profileimage">
            <ImageWithBasePath className="me-2"src={rowData.img} alt={rowData.image} style={{ width: '50px', height: 'auto' }} />
            <span className="ml-2">{rowData.name}</span>
          </div>
        );
      };
      
    const actionButton = () => {
        return (
            <div className="table-actions d-flex">
                <Link className="delete-table me-2 border-none" to={routes.contactMessagesView}>
                    <i className="fe fe-eye" />
                    <Icon.Eye className='react-feather-custom' />
                </Link>
                <button
                    className="delete-table border-none"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-contact-msg"
                >
                    <Icon.Trash2 className='react-feather-custom' />

                </button>
            </div>

        )
    }
    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Contact Messages </h5>
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
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="table-resposnive">
                                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="id" header="#" ></Column>
                                    <Column sortable field="name" header="Name" body={imageRender}></Column>
                                    <Column sortable field="email" header="Email"></Column>
                                    <Column sortable field="phone" header="Phone"></Column>
                                    <Column sortable field="message" header="Message"></Column>
                                    <Column sortable field="date" header="Date"></Column>
                                    <Column sortable field="Action" header="Action" body={actionButton}></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   <DeleteContactMessagesModal/>
        </>
    )
}

export default ContactMessages
