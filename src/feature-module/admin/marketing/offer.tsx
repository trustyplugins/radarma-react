import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';

import { useSelector } from 'react-redux';
import EditOfferModal from '../common/modals/editOffer-model';
import DeleteOfferModal from '../common/modals/deleteOffer-modal';
import OfferModal from '../common/modals/offer-modal';

const Offer = () => {
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const [selectedValue, setSelectedValue] = useState(null);

  const data = useSelector((state: any) => state.offer);

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link
          className="delete-table me-2"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#edit-offer"
        >
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <Link
          className="delete-table border-none"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-offer"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Offers</h5>
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
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <table className="table datatable">
                  <tbody>
                    <DataTable
                      paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                      currentPageReportTemplate="{first} to {last} of {totalRecords}"
                      value={data}
                      paginator
                      rows={10}
                      rowsPerPageOptions={[5, 10, 25, 50]}
                      tableStyle={{ minWidth: '50rem' }}
                    >
                      <Column sortable field="id" header="ID"></Column>
                      <Column
                        sortable
                        field="service"
                        header="Service"
                        body={(rowData) => (
                          <td>
                            <h2 className="table-avatar table-sml">
                              <Link to="#" className="avatar avatar-m me-2">
                                <ImageWithBasePath
                                  className="avatar-img rounded"
                                  src={rowData.img1}
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="#">{rowData.service}</Link>
                            </h2>
                          </td>
                        )}
                      ></Column>
                      <Column
                        sortable
                        field="user"
                        header="User Name"
                        body={(rowData) => (
                          <td>
                            <h2 className="table-avatar table-sml">
                              <Link to="#" className="table-profileimage">
                                <ImageWithBasePath
                                  className="me-2"
                                  src={rowData.img2}
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="#">{rowData.service}</Link>
                            </h2>
                          </td>
                        )}
                      ></Column>
                      <Column sortable field="amount" header="Amount"></Column>
                      <Column sortable field="offer" header="Offer"></Column>
                      <Column sortable field="date" header="Date"></Column>
                      <Column
                        sortable
                        field="enddate"
                        header="EndDate"
                      ></Column>
                      <Column
                        sortable
                        field="action"
                        header="Action"
                        body={actionButton}
                      ></Column>
                    </DataTable>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OfferModal />
      <EditOfferModal />
      <DeleteOfferModal />
    </>
  );
};

export default Offer;
