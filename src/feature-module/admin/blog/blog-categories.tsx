import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { blogCategoriesValue } from '../../../core/models/interface';
import BlogCategoriesModal from '../common/modals/blog-categories-modal';

const BlogCategories = () => {
  const value = [{ name: 'A - Z' }, { name: 'Most Helpful' }];
  const [selectedValue, setSelectedValue] = useState(null);
  const actionButton = () => {
    return (
        <div className="table-actions d-flex">
          <button className="delete-table border-none me-2" type="button" data-bs-toggle="modal" data-bs-target="#edit-blog-category">
          <Icon.Edit className="react-feather-custom"/>
          </button>
          <button className="delete-table border-none" type="button" data-bs-toggle="modal" data-bs-target="#delete-blog-category">
          <Icon.Trash2 className="react-feather-custom"/>
          </button>
        </div>
      );
  };
  
  const data = useSelector((state: blogCategoriesValue) => state.blog_data);

  
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit mb-0">
            <h5>Categories</h5>
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
                <li>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-blog-category"
                  >
                    <i className="fa fa-plus me-2" />
                    Add Category
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive table-div">
                <table className="table datatable">
                  <thead>
                    {/* <tr>
                      <th>#</th>
                      <th>Category</th>
                      <th>Language</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr> */}
                  </thead>
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
                        field="category"
                        header="Category"
                        body={(rowData) => (
                          <td>
                            <h2 className="table-avatar table-sml">
                              <Link to="#" className="avatar avatar-m me-2">
                                <ImageWithBasePath
                                  className="avatar-img rounded"
                                  src={rowData.img}
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="#">{rowData.category}</Link>
                            </h2>
                          </td>
                        )}
                      ></Column>
                      <Column
                        sortable
                        field="language"
                        header="Language"
                      ></Column>
                      <Column sortable field="date" header="Date"></Column>
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
      <BlogCategoriesModal/>
    </>
  );
};

export default BlogCategories;
