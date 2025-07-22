import React, { useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import FaqModal from '../common/modals/faq-modal';
import DeleteFaqModal from '../common/modals/delete-faq-modal';
import { FaqItem } from '../../../core/models/interface';

const Faq = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const data = useSelector((state: FaqItem) => state.faq);

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link
          className="delete-table me-2"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#edit-faq"
        >
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <Link
          className="delete-table border-none"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-faq"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </Link>
      </div>
    );
  };

  return (
    <div className="page-wrapper page-settings">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>FAQ’s</h5>
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
                  data-bs-target="#add-faq"
                >
                  <i className="fa fa-plus me-2" />
                  Add FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="table-resposnive">
              <DataTable
                value={data}
                showGridlines
                tableStyle={{ minWidth: '50rem' }}
              >
                <Column sortable field="id" header="#"></Column>
                <Column sortable field="title" header="Title"></Column>
                <Column sortable field="category" header="Category"></Column>
                <Column sortable field="details" header="Details"></Column>
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
      <FaqModal />
      <DeleteFaqModal />
    </div>
  );
};

export default Faq;
