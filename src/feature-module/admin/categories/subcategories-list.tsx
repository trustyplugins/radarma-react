import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';

import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubCatogriesModal from '../common/modals/subcategories-modal';
import DeleteSubCategoriesModal from '../common/modals/delete-subcategories-modal';

const SubCategoriesList = () => {
  const data = useSelector((state: any) => state.sub_categories);
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <button
          className="delete-table border-none me-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#edit-category"
        >
          <Icon.Edit className="react-feather-custom" />
        </button>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-category"
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
          <div className="content-page-header content-page-headersplit mb-0">
            <h5>Sub Categories</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <div className="filter-sorting">
                    <ul>
                      <li>
                        <Link to="#" className="filter-sets">
                          <Icon.Filter size={15} />
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
                    data-bs-target="#add-category"
                  >
                    <i className="fa fa-plus me-2" />
                    Add Sub Category
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive table-div">
                <table className="table datatable">
                  <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    value={data}
                    showGridlines
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column sortable field="id" header="ID"></Column>
                    <Column
                      sortable
                      field="subCategory"
                      header="SubCategory"
                    ></Column>
                    <Column
                      sortable
                      field="subCategory"
                      header="SubCategorySlug"
                    ></Column>
                    <Column
                      sortable
                      field="category"
                      header="Category"
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
      <SubCatogriesModal />
      <DeleteSubCategoriesModal/>
    </>
  );
};

export default SubCategoriesList;
