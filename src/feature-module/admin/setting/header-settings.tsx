import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsSidebar from '../common/settingssidebar';
interface HeaderData {
  content: string;
  link: string;
}
const HeaderSettings = () => {
  const [headerMenu, setHeaderMenu] = useState<HeaderData[]>([
    {
      content: 'Home',
      link: 'https://truelysell-testing.dreamguystech.com/home',
    },
    {
      content: 'About',
      link: 'https://truelysell-testing.dreamguystech.com/about',
    },
    {
      content: 'Categories',
      link: 'https://truelysell-testing.dreamguystech.com/categories',
    },
    {
      content: 'Blog',
      link: 'https://truelysell-testing.dreamguystech.com/blog',
    },
    {
      content: 'Contact Us',
      link: 'https://truelysell-testing.dreamguystech.com/contactus',
    },
    {
      content: 'Pages',
      link: 'https://truelysell-testing.dreamguystech.com/pages',
    },
  ]);

  const [headerMenuArray, setHeaderMenuArray] = useState<HeaderData[]>([]);

  const deleteItem = (index: number) => {
    const updatedHeaderMenu = [...headerMenu];
    updatedHeaderMenu.splice(index, 1);
    setHeaderMenu(updatedHeaderMenu);
  };

  const addNewItem = () => {
    setHeaderMenuArray([...headerMenuArray, { content: '', link: '' }]);
  };

  const deleteUrl = (index: number) => {
    const updatedHeaderMenuArray = [...headerMenuArray];
    updatedHeaderMenuArray.splice(index, 1);
    setHeaderMenuArray(updatedHeaderMenuArray);
  };

  return (
    <div className="page-wrapper page-settings">
      <SettingsSidebar />
      <div className="content w-100">
        <div className="content-page-header">
          <h5>Header Setting</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="form-groupheads">
                  <h2>Nav Menus</h2>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="nav-menus">
                      <h4>Language</h4>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="nav-menus">
                      <h4>Currency</h4>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="nav-menus">
                      <h4>Stikcy header</h4>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="form-groupheads d-flex d-flex justify-content-between">
                  <h2>Header Menu</h2>
                  <div className="active-switch">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="sliders round" />
                    </label>
                  </div>
                </div>
                <div className="row add-headers">
                  {headerMenu.map((data, i) => (
                    <div className="col-12" key={i}>
                      <div className="form-group-set">
                        <div className="row align-items-center">
                          <div className="col-lg-3 col-sm-6">
                            <h4 className="mb-0">{data.content}</h4>
                          </div>
                          <div className="col-lg-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              value={data.link}
                            />
                          </div>
                          <div className="col-lg-1 col-sm-12">
                            <Link
                              to="#"
                              className="delete-links"
                              onClick={() => deleteItem(i)}
                            >
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-12">
                    {headerMenuArray.map((data, i) => (
                      <div className="form-group-set" key={i}>
                        <div className="row align-items-center">
                          <div className="col-lg-3 col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter title"
                            />
                          </div>
                          <div className="col-lg-8 col-sm-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter url"
                            />
                          </div>
                          <div className="col-lg-1 col-sm-12">
                            <Link
                              to="#"
                              className="delete-links"
                              onClick={() => deleteUrl(i)}
                            >
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Link
                      to="#"
                      className="addnewheader link-sets"
                      onClick={addNewItem}
                    >
                      <i
                        className="fa fa-plus-circle me-2"
                        aria-hidden="true"
                      ></i>
                      Add New
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="btn-path">
                <Link to="#" className="btn btn-cancel me-3">
                  Reset
                </Link>
                <Link to="#" className="btn btn-primary">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSettings;
