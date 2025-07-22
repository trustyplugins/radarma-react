/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState } from 'react'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import CustomersModal from '../common/modals/customers-modal';
import DeleteCustomersModal from '../common/modals/delete-customers-modal';

const Customers = () => {


    const data = useSelector((state: any) => state.customerData);

   
    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

    const actionButton = () => {
        return (
            <div className="table-actions d-flex">
                <Link className="delete-table me-2" to="#" data-bs-toggle="modal" data-bs-target="#edit-customer">
                    <Icon.Edit className='react-feather-custom' />
                </Link>
                <Link className="delete-table border-none" to="#" data-bs-toggle="modal" data-bs-target="#delete-customer">
                    <Icon.Trash2 className='react-feather-custom' />
                </Link>
            </div>
        )
    }

    const renderCustomerNameColumn = (rowData : any) => {
        const [name, email] = rowData.customerName.split('\n');
        return (
          <div className="table-profileimage">
            <ImageWithBasePath  className='me-2'src={rowData.img} alt="img" style={{ width: '50px', height: 'auto' }} />
            <div className="ml-2">
              <span>{name}</span>
              <br />
              <span>{email}</span>
            </div>
          </div>
        );
      };
   
    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Customers</h5>
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
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-customer"
                                    >
                                        <i className="fa fa-plus me-2" />
                                        Add Customer
                                    </button>
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
                                    <Column sortable field="id" header="#"></Column>
                                    <Column sortable field="customerName" header="Customer Name" body={renderCustomerNameColumn}></Column>
                                    <Column sortable field="mobile" header="Mobile"></Column>
                                    <Column sortable field="regDate" header="Reg Date"></Column>
                                    <Column sortable  field="lastActivity" header='Last Activity' ></Column>
                                 <Column sortable field="status" header="Status" body={(rowData) => (
                                        <span className={rowData.status === 'Active' ? 'badge-active' : ''}>
                                            {rowData.status}
                                        </span>
                                    )}></Column>
                                    <Column sortable field="action" header="Action" body={actionButton} ></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         <CustomersModal/>
         <DeleteCustomersModal/>
        </>
    )
}

export default Customers
