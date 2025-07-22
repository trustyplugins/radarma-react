/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from 'primereact/datatable'
import React from 'react'
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import SettingsSidebar from '../common/settingssidebar';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import CurrenciesModal from '../common/modals/currencies-modal';
import { all_routes } from '../../../core/data/routes/all_routes';
import DeleteCurrenciesModal from '../common/modals/delete-currencies-modal';
const routes = all_routes;

const Currencies = () => {

  const data = useSelector((state: any) => state.currencies);

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link className="delete-table me-2" to="#" data-bs-toggle="modal" data-bs-target="#edit-currency">
          <Icon.Edit className='react-feather-custom' />
        </Link>
        <Link className="delete-table" to="#" data-bs-toggle="modal" data-bs-target="#delete-currency">
          <Icon.Trash2 className='react-feather-custom' />
        </Link>
      </div>
    )
  }

  
  return (
    <>
      <div className="page-wrapper page-settings">
        <SettingsSidebar />
        <div className="content w-100 ps-0 pt-0">
          <div className="row">
            <div className="content-table">
              <div className="content-page-header content-page-headersplit">
                <h5>Currency</h5>
                <div className="page-head-btn">
                  <Link className="btn btn-linegrey" to={routes.currencySettings}>
                    <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                  </Link>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-currency"
                  >
                    <i className="fa fa-plus me-2" />
                    Add Currency
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="table-resposnive table-bottom">
                  <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                    <Column sortable field="currencyName" header="CurrencyName" ></Column>
                    <Column sortable field="code" header="Code" ></Column>
                    <Column sortable field="symbol" header="Symbol"></Column>
                    <Column sortable field="exchangeRate" header="ExchangeRate"></Column>
                    <Column sortable field="actions" header="Actions" className='success-labels' ></Column>
                    <Column sortable field="action" header="Action" body={actionButton}></Column>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CurrenciesModal />
      <DeleteCurrenciesModal/>
    </>
  )
}

export default Currencies
