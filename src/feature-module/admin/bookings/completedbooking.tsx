import { DataTable } from 'primereact/datatable'
import React, {useState}  from 'react'
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { all_routes } from '../../../core/data/routes/all_routes';
import * as Icon from 'react-feather';
import { CompletedBookingInterface } from '../../../core/models/interface';


const routes = all_routes;

const CompletedBooking = () => {
 

  const data = useSelector((state: any) => state.bookingCompleted);

  const [selectedValue, setSelectedValue] = useState(null);

  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
 
  const renderNameAndImage = (rowData: CompletedBookingInterface) => {
    return (
      <div className="table-profileimage">
        <ImageWithBasePath className='me-2' src={rowData.img} alt="img" style={{ width: '50px', height: 'auto' }} />
        <div className="ml-2">
          <span>{rowData.provider}</span>
        </div>
      </div>
    );
  };
  const renderNameAndUserImage = (rowData: CompletedBookingInterface) => {
    return (
      <div className="table-profileimage">
        <ImageWithBasePath className='me-2' src={rowData.userImg} alt="img" style={{ width: '50px', height: 'auto' }} />
        <div className="ml-2">
          <span>{rowData.user}</span>
        </div>
      </div>
    );
  };
  const renderNameAndServiceImage = (rowData: CompletedBookingInterface) => {
    return (
      <div className="table-profileimage">
        <ImageWithBasePath className='me-2' src={rowData.serviceImg} alt="img" style={{ width: '50px', height: 'auto' }} />
        <div className="ml-2">
          <span>{rowData.service}</span>
        </div>
      </div>
    );
  };

  const renderActionColumn = (rowData: CompletedBookingInterface) => {
    const actions = rowData.action.split('\n');

    if (actions.length > 1) {
      return (
        <div className="table-profileimage">
          <select className='form-select'>
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

  const renderStatus = (rowData:CompletedBookingInterface) => {
    const [status] = rowData.status.split('\n');
    return (
      <h6 className="badge-active">{status}</h6>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Booking List</h5>
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
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-sets">
                <div className="tab-contents-sets">
                  <ul>
                    <li>
                      <Link to={routes.booking}>All Booking</Link>
                    </li>
                    <li>
                      <Link to={routes.pendingBooking}>Pending </Link>
                    </li>
                    <li>
                      <Link to={routes.inProgressBooking}>Inprogress </Link>
                    </li>
                    <li>
                      <Link to={routes.completedBooking} className="active">
                        Completed
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.cancelledBooking}>Cancelled</Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-contents-count">
                  <h6>Showing 8-10 of 84 results</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive table-div">
                <table className='table datatable'>
                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data}  >
                  <Column sortable field="id" header="#"></Column>
                  <Column sortable field="date" header="Date" ></Column>
                  <Column sortable field="bookingTime" header="Booking Time"></Column>
                  <Column sortable field="provider" header="Provider" body={renderNameAndImage}></Column>
                  <Column sortable field="user" header="User" body={renderNameAndUserImage}></Column>
                  <Column sortable field="service" header="Service" body={renderNameAndServiceImage}></Column>
                  <Column sortable field="amount" header="Amount" ></Column>
                  <Column sortable field="status" header="Status" body={renderStatus}></Column>
                  <Column sortable field="dateAndTime" header="dateAndTime" >
                  </Column>
                  <Column sortable field="action" header="Action" body={renderActionColumn}></Column>
                </DataTable>
                </table>
               
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CompletedBooking
