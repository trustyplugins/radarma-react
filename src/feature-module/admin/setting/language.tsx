import React, { useEffect, useState } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { languageService } from '../../../core/data/service/admin/language';
import LanguageModal from '../common/modals/language-modal';
import SettingsSidebar from '../common/settingssidebar';
import { Link } from 'react-router-dom';

const Language = () => {
  const [language, setLanguage] = useState([]);
  const languageImage = (rowData: any) => {
    const [language] = rowData.language.split('\n');
    return (
      <div className="language-set">
        <ImageWithBasePath src={rowData.img1} alt="img" />
        <span>{language}</span>
      </div>
    );
  };
  const rtlToggleSwitch = () => {
    return (
      <div className="active-switch">
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="sliders round" />
        </label>
      </div>
    );
  };
  const actionButton = () => {
    return (
      <div className="action-language">
        <ul>
          <li>
            <Link className="btn btn-grey" to="#">
              <ImageWithBasePath
                src="assets/img/icons/lanuage.svg"
                className="me-2"
                alt="img"
              />
              Web
            </Link>
          </li>
          <li>
            <Link className="btn btn-grey" to="#">
              <ImageWithBasePath
                src="assets/img/icons/lanuage.svg"
                className="me-2"
                alt="img"
              />
              App
            </Link>
          </li>
          <li>
            <Link className="btn btn-grey" to="#">
              <ImageWithBasePath
                src="assets/img/icons/lanuage.svg"
                className="me-2"
                alt="img"
              />
              Admin
            </Link>
          </li>
          <li>
            <Link to="#" className="delete-table">
              <i className="far fa-edit " />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="delete-table"
              data-bs-toggle="modal"
              data-bs-target="#delete-item"
            >
              <i className="far fa-trash-alt " />
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const importButton = () => {
    return (
      <div className="action-language">
        <ul>
          <li>
            <Link className="btn btn-primary" to="#">
              <ImageWithBasePath
                src="assets/img/icons/lanuage1.svg"
                className="me-2"
                alt="img"
              />
              Web
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary" to="#">
              <ImageWithBasePath
                src="assets/img/icons/lanuage1.svg"
                className="me-2"
                alt="img"
              />
              App
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  useEffect(() => {
    languageService.getLanguageMedium().then((data: any) => setLanguage(data));
  }, []);
  return (
    <>
      <div className="page-wrapper ">
        <div className="content w-100 ps-0 pt-0">
          <SettingsSidebar />
          <div className="row">
            <div className="content-table">
              <div className="content-page-header content-page-headersplit">
                <h5>Languages</h5>
                <div className="page-head-btn">
                  <Link className="btn btn-primary me-2" to="#">
                    <Icon.DownloadCloud className="react-feather-custom me-2" />
                    Web Export
                  </Link>
                  <Link className="btn btn-primaryline" to="#">
                    <Icon.DownloadCloud className="react-feather-custom me-2" />
                    App Export
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <div className="table-resposnive table-bottom">
                  <table className="table datatable">
                    <DataTable
                      paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                      currentPageReportTemplate="{first} to {last} of {totalRecords}"
                      value={language}
                      paginator
                      rows={10}
                      rowsPerPageOptions={[5, 10, 25, 50]}
                      tableStyle={{ minWidth: '50rem' }}
                    >
                      <Column sortable field="#" header="#"></Column>
                      <Column
                        sortable
                        field="language"
                        header="Language"
                        body={languageImage}
                      ></Column>
                      <Column sortable field="code" header="Code"></Column>
                      <Column
                        sortable
                        field="rtlToggle"
                        header="RTL"
                        body={rtlToggleSwitch}
                      ></Column>
                      <Column
                        sortable
                        field="code"
                        header="Default Language"
                        body={rtlToggleSwitch}
                      ></Column>
                      <Column
                        sortable
                        field="code"
                        header="Status"
                        body={rtlToggleSwitch}
                      ></Column>
                      <Column
                        sortable
                        field="code"
                        header="Action"
                        body={actionButton}
                      ></Column>
                      <Column
                        sortable
                        field="code"
                        header="Import"
                        body={importButton}
                      ></Column>
                    </DataTable>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LanguageModal />
    </>
  );
};

export default Language;
