import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { useSelector } from 'react-redux';
import { all_routes } from '../../../core/data/routes/all_routes';
import { SMSTemp } from '../../../core/models/interface';
import EmailTemplateModal from '../common/modals/email-template-modal';

const SmsTemplate = () => {
  const data = useSelector((state: SMSTemp) => state.sms_template);
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const routes = all_routes;

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <button
          className="delete-table border-none me-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#edit-email-template"
        >
          <Icon.Edit className="react-feather-custom" />
        </button>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-sms-template"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>SMS Templates</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <Link className="btn-filters" to={routes.smsSettings}>
                    <Icon.Settings className="react-feather-custom" />
                  </Link>
                </li>
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
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    value={data}
                    showGridlines
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column
                      sortable
                      field="ReferenceID"
                      header="ReferenceID"
                    ></Column>
                    <Column
                      sortable
                      field="smsTitle"
                      header="SmsTitle"
                    ></Column>
                    <Column sortable field="Date" header="Date"></Column>
                    <Column
                      sortable
                      field="Action"
                      header="Action"
                      body={actionButton}
                    ></Column>
                  </DataTable>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmailTemplateModal />
    </>
  );
};

export default SmsTemplate;
