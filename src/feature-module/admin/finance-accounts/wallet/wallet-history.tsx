import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import {
  WalletHistoryItems,
  WalletHistoryrowData,
} from '../../../../core/models/interface';

const WalletHistory = () => {
  const routes = all_routes;
  const data = useSelector((state: WalletHistoryItems) => state.wallet_history);
  const statusButton = (rowData: WalletHistoryrowData) => {
    const [status] = rowData.status.split('\n');
    return <h6 className="badge-active">{status}</h6>;
  };

  return (
    <>
      <div className="change-activity">
        <div className="change-passwordback">
          <Link to={routes.wallet}>
            <i className="fe fe-arrow-left me-2" />
            Back to Dashboard{' '}
          </Link>
        </div>
        <div className="change-activity-head">
          <h6>Wallet History</h6>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-resposnive table-bottom">
              <table className="table">
                <thead></thead>
                <tbody>
                  <DataTable
                    value={data}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column sortable field="id" header="ID"></Column>

                    <Column sortable field="type" header="Type"></Column>
                    <Column sortable field="amount" header="Amount"></Column>
                    <Column sortable field="date" header="Date"></Column>
                    <Column
                      sortable
                      field="paymenttype"
                      header="PaymentType"
                    ></Column>
                    <Column
                      sortable
                      field="status"
                      header="Status"
                      body={statusButton}
                    ></Column>
                  </DataTable>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletHistory;
