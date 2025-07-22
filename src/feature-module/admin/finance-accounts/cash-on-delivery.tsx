import { DataTable } from 'primereact/datatable'
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import * as Icon from 'react-feather';
import { CashOnDeliveryInterface } from '../../../core/models/interface';

const CashOnDelivery = () => {

    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

    const data = useSelector((state: any) => state.cashOnDelivery);

    const renderStatusColumn = (rowData:CashOnDeliveryInterface) => {
        const statusClassName = rowData.status === "Paid" ? "badge-active" : "badge-delete";
      
        return (
          <span className={statusClassName}>
            {rowData.status}
          </span>
        );
      };

    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Cash On Delivery</h5>
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
                                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="id" header="#" ></Column>
                                    <Column sortable field="service" header="Service" ></Column>
                                    <Column sortable field="providerName" header="ProviderName"></Column>
                                    <Column sortable field="userName" header="UserName"></Column>
                                    <Column sortable field="amount" header="Amount"></Column>
                                    <Column sortable field="status" header="Status" body={renderStatusColumn}></Column>
                                    <Column sortable field="date" header="Date"></Column>
                                    <Column sortable field="serviceStatus" header="ServiceStatus"></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CashOnDelivery
