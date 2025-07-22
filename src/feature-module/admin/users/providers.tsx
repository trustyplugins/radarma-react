import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import { useSelector } from 'react-redux';
import ProvidersModal from '../common/modals/providers-modal';

const Providers = () => {
  const providerImage = (rowData: {
    providerName: string;
    img: string;
    providerEmail:
      | string
      | number
      | boolean
      | React.ReactElement<
          number | string | React.JSXElementConstructor<string>
        >
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
  }) => {
    const [providerName] = rowData.providerName.split('\n');
    return (
      <>
        <Link to="#" className="table-profileimage">
          <ImageWithBasePath src={rowData.img} className="me-2" alt="img" />
        </Link>
        <Link to="#" className="table-name">
          <span>{providerName}</span>
          <p>{rowData.providerEmail}</p>
        </Link>
      </>
    );
  };
  const providerStatus = (rowData: { status: { split: any } }) => {
    const [status] = rowData.status.split('\n');
    return <h6 className="badge-active">{status}</h6>;
  };
  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <button
          className="delete-table border-none me-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#edit-provider"
        >
          <Icon.Edit className="react-feather-custom" />
        </button>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-provider"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </button>
      </div>
    );
  };
  const data = useSelector((state: any) => state.providers);
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Providers</h5>
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
                <li>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-provider"
                  >
                    <i className="fa fa-plus me-2" />
                    Add Provider
                  </button>
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
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    value={data}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column sortable field="#" header="#"></Column>
                    <Column
                      className="table-namesplit"
                      sortable
                      field="providerName"
                      header="Provider Name"
                      body={providerImage}
                    ></Column>
                    <Column sortable field="mobile" header="Mobile"></Column>
                    <Column sortable field="regDate" header="Reg Date"></Column>
                    <Column
                      sortable
                      field="lastActivity"
                      header="Last Activity"
                    ></Column>
                    <Column
                      body={providerStatus}
                      sortable
                      field="status"
                      header="Status"
                    ></Column>
                    <Column
                      body={actionButton}
                      sortable
                      field="action"
                      header="Action"
                    ></Column>
                  </DataTable>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProvidersModal />
    </>
  );
};

export default Providers;
