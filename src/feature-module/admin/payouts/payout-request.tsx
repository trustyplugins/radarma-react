/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from 'primereact/datatable'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import PayoutRequestModal from '../common/modals/payout-request-modal';

interface RowData {
  id: string;
  img: string;
  name: string;
  payoutMethod: string;
  amount: string;
  status: string;
  createdAt: string;
  action: string;
}

const PayoutRequests = () => {

  const data = useSelector((state: any) => state.payoutRequest );

  
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const renderNameAndImage = (rowData : any) => {
    return (
      <div className="table-profileimage">
        <ImageWithBasePath  className='me-2'src={rowData.img} alt="img" style={{ width: '50px', height: 'auto' }} />
        <div className="ml-2">
          <span>{rowData.name}</span>
        </div>
      </div>
    );
  };
  
  const renderActionColumn = (rowData: RowData) => {
    const actions = rowData.action.split('\n');
  
    if (actions.length > 1) {
      return (
        <div>
          <select className="form-select">
            {actions.map((action, index) => (
              <option key={index} value={action}>
                {action}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return <div>{actions[0]}</div>;
    }
  }
  const statusButton = (rowData: any) => {
    const [status] = rowData.status.split('\n');
    return <h6 className="badge-pending">{status}</h6>;
  };
  
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Payout Requests</h5>
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
                            src="assets/admin/img/icons/sort.svg"
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
                    data-bs-target="#add-payout"
                  >
                    <i className="fa fa-plus me-2" />
                    Add Payout
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
                  <Column sortable field="name" header="Name" body={renderNameAndImage}></Column>
                  <Column sortable field="payoutMethod" header="PayoutMethod"></Column>
                  <Column sortable field="amount" header="Amount"></Column>
                  <Column sortable field="status" header="Status" body={statusButton}></Column>
                  <Column sortable field="createdAt" header="CreatedAt"></Column>
                  <Column sortable field="action" header="Action" body={renderActionColumn} ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
        <PayoutRequestModal/>
      </div>

    </>
  )
}

export default PayoutRequests
