/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from 'primereact/datatable'
import React from 'react'
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import SettingsSidebar from '../common/settingssidebar';
import { useSelector } from 'react-redux';

const SystemBackup = () => {

    const data = useSelector((state: any) => state.systemBackUp);

    const actionButton = () => {
        return (
            <div className="table-actions d-flex">

                <Link className="delete-table me-2" to="#">
                    <Icon.Download className='react-feather-custom' />
                </Link>
                <Link className="delete-table border-none" to="#">
                    <Icon.Trash2 className='react-feather-custom' />
                </Link>
            </div>
        )
    }

        ;
    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content-sidelink float-start">
                    <div className="content-sidelinkheading">
                        <h6>Settings</h6>
                    </div>
                    <SettingsSidebar />

                </div>
                <div className="row">
                    <div className="content-table">
                        <div className="content-page-header content-page-headersplit">
                            <h5>System Backup</h5>
                            <div className="page-head-btn">
                                <button className="btn btn-primary" type="button">
                                    Generate Backup
                                </button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="table-resposnive">
                                <DataTable value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="fileName" header="FileName" ></Column>
                                    <Column sortable field="date" header="Date"></Column>
                                    <Column sortable field="action" header="Action" body={actionButton}></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SystemBackup
