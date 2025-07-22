import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import SettingsSidebar from '../common/settingssidebar';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import TaxRatesModal from '../common/modals/tax-rates-modal';

const TaxRates = () => {
  const data = useSelector((state: any) => state.taxRates);

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = () => {
    return (
      <div className="d-flex align-items-center">
        <div className="active-switch" defaultChecked={true}>
          <label className="switch">
            <input type="checkbox" />
            <span className="sliders round"></span>
          </label>
        </div>
        <div className="table-actions d-flex ms-2">
          <Link
            className="table-edit"
            to="/edit-service"
            data-bs-toggle="modal"
            data-bs-target="#edit-tax"
          >
            <div className="fa-regular fa-pen-to-square"></div>
            Edit
          </Link>
          <Link className="table-delete ms-2" to="#">
            <div className="fa-solid fa-trash-can"></div>
            Delete
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content-sidelink">
          <div className="content-sidelinkheading">
            <h6>Settings</h6>
          </div>
          <SettingsSidebar />
          <div className="row">
            <div className="content-table tax-table-rate">
              <div className="content-page-header content-page-headersplit">
                <h5>All Taxes</h5>
                <div className="list-btn">
                  <ul>
                    <li className="tax-module">
                      <div className="active-switch me-1">
                        <label className="switch">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="sliders round" />
                        </label>
                      </div>
                      <span>Tax Module</span>
                    </li>
                    <li>
                      <div className="filter-sorting">
                        <ul>
                          <li>
                            <Link to="#" className="filter-sets">
                              <ImageWithBasePath
                                src="assets/admin/img/icons/filter1.svg"
                                className="me-2"
                                alt="img"
                              />
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
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add-tax"
                      >
                        <i className="fa fa-plus me-2" />
                        Create Tax
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="table-resposnive table-bottom">
                  <DataTable
                    value={data}
                    showGridlines
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column sortable field="id" header="#"></Column>
                    <Column sortable field="taxName" header="TaxName"></Column>
                    <Column
                      sortable
                      field="taxPercentage"
                      header="TaxPercentage"
                    ></Column>
                    <Column
                      sortable
                      field="action"
                      header="Action"
                      body={actionButton}
                    ></Column>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TaxRatesModal />
    </>
  );
};

export default TaxRates;
