/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { VerficationRequestInterface } from '../../../core/models/interface';

const VerficationRequest = () => {
  const data = useSelector(
    (state: any) => state.verficationRequest,
  );
  const statusDropDownTemplate = (rowData: VerficationRequestInterface) => {
    const statusOptions = [
      'Select Status',
      'Pending',
      'Completed',
      'In Progress',
      'Cancelled',
    ];
    return (
      <select defaultValue={rowData.status} className="form-select">
        {statusOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings verify-request">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>VerificationN Requests</h5>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <DataTable
                  paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={data}
                  showGridlines
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="ID"></Column>
                  <Column sortable field="userName" header="UserName"></Column>
                  <Column
                    sortable
                    field="documentType"
                    header="DocumentType"
                  ></Column>
                  <Column
                    sortable
                    field="documentName"
                    header="DocumentName"
                  ></Column>
                  <Column
                    sortable
                    header="Download"
                    body={() => (
                      <div className="table-download">
                        <i className="fa-solid fa-download"></i>
                      </div>
                    )}
                  ></Column>
                  <Column
                    sortable
                    field="rejectReason"
                    header="RejectReason"
                  ></Column>
                  <Column
                    field="status"
                    header="Status"
                    body={(rowData) => {
                      if (rowData.status === 'Rejected') {
                        return (
                          <div className="btn btn-rejected">
                            {rowData.status}
                          </div>
                        );
                      } else if (rowData.status === 'Verified') {
                        return (
                          <div className="btn btn-verified">
                            {rowData.status}
                          </div>
                        );
                      } else {
                        return statusDropDownTemplate(rowData);
                      }
                    }}
                  />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerficationRequest;
