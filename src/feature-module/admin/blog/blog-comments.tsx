import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';


import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import Blogcommentmodal from '../common/modals/blog-comment-modal';
import DeleteCommandModal from '../common/modals/delete-comment-modal';

const BlogComments = () => {
  const value = [{ name: 'A - Z' }, { name: 'Most Helpful' }];
  const [selectedValue, setSelectedValue] = useState(null);
  
  const data = useSelector((state: any) => state.blog_comments);
  const actionButton = () => {
    return (
        <div className="table-actions d-flex">
          <button className="delete-table border-none" type="button" data-bs-toggle="modal" data-bs-target="#delete-comment">
          <Icon.Trash2 className="react-feather-custom"/>
          </button>
        </div>
      );
  };
 
  return (
    <>
      {/* Hello world */}
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit mb-0">
            <h5>Comments List</h5>
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
              <div className="table-resposnive table-div">
                <table className="table datatable">
                  <thead>
                    {/* <tr>
                      <th>#</th>
                      <th>User Name</th>
                      <th>Phone</th>
                      <th>Content</th>
                      <th>Create at</th>
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
                        field="userName"
                        header="userName"
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
                              <Link to="#">{rowData.userName}</Link>
                            </h2>
                          </td>
                        )}
                      ></Column>
                      <Column
                        sortable
                        field="phone"
                        header="Phone"
                      ></Column>
                      
                      <Column sortable field="content" header="Content"></Column>
                      <Column sortable field="createdat" header="Createdat"></Column>
                      <Column sortable field="action" header="Action" body={actionButton}></Column>
                      
                      
                    </DataTable>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogcommentmodal/>
      <DeleteCommandModal/>
    </>
  );
};

export default BlogComments;
