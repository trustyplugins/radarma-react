/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'
import { couponsData } from '../../../core/data/json/coupons';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import CouponsModal from '../common/modals/coupons-modal';
import { Dropdown } from 'primereact/dropdown';
import DeleteCouponsModal from '../common/modals/delete-coupons-modal';
import { CouponsInterface } from '../../../core/models/interface';

const Coupons = () => {

    const [selectedValue, setSelectedValue] = useState(null);

    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  
    const data = useSelector((state: CouponsInterface) => state.coupons);

    const statusRenderer = (rowData : CouponsInterface) => {
        if (rowData.status === 'Action') {
            return <span className="badge-active">{rowData.status}</span>;
        } else if (rowData.status === 'Inaction') {
            return <span className="badge-inactive">{rowData.status}</span>;
        } else {
            return rowData.status;
        }
    };
    const actionButton = () => {
        return (
            <div className="table-actions d-flex">
                <Link className="delete-table me-2" to="#" data-bs-toggle="modal" data-bs-target="#edit-coupon">
                    <Icon.Edit className='react-feather-custom' />
                </Link>
                <Link className="delete-table" to="#" data-bs-toggle="modal" data-bs-target="#delete-coupon">
                    <Icon.Trash2 className='react-feather-custom' />
                </Link>
            </div>
        )
    }


    
    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Coupons</h5>
                        <div className="list-btn">
                            <ul>
                                <li>
                                    <div className="filter-sorting">
                                        <ul>
                                            <li>
                                                <Link to="#" className="filter-sets">
                                                    <Icon.Filter className="react-feather-custom me-2" />
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
                                <table className="table datatable">
                                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="name" header="Name" ></Column>
                                    <Column sortable field="code" header="Code"></Column>
                                    <Column sortable field="type" header="Type"></Column>
                                    <Column sortable field="discount" header="Discount" ></Column>
                                    <Column sortable field="limit" header="Limit"></Column>
                                    <Column sortable field="used" header="Used"></Column>
                                    <Column sortable field="validDate" header="Valid Date" className='valid-data'></Column>
                                    <Column sortable field="serviceName" header="ServiceName"></Column>
                                    <Column sortable field="status" header="Status" body={statusRenderer}></Column>
                                    <Column sortable field="action" header="Action" body={actionButton}></Column>
                                </DataTable>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CouponsModal />
            <DeleteCouponsModal/>
        </>
    )
}

export default Coupons
