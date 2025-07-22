import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import SettingsSidebar from '../common/settingssidebar';

const SocialProfile = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);
  const [selectedValue5, setSelectedValue5] = useState(null);

  const [selectedValue6] = useState(null);
  const [selectedValue7, setSelectedValue7] = useState(null);
  const [selectedValue8, setSelectedValue8] = useState(null);
  const value = [{ name: 'Instagram' }, { name: 'facebook' }];
  const value2 = [{ name: 'facebook' }, { name: 'Instagram' }];
  const value3 = [{ name: 'Youtube' }, { name: 'facebook' }];
  const value4 = [{ name: 'Twitter' }, { name: 'facebook' }];
  const value5 = [{ name: 'LinkedIn' }, { name: 'facebook' }];

  const value1 = [
    { name: 'Ex. www.facebook.com' },
    { name: 'Ex. www.instagram.com' },
  ];
  const value6 = [
    { name: 'Ex. www.facebook.com' },
    { name: 'Ex. www.instagram.com' },
  ];
  const value7 = [
    { name: 'Ex. www.facebook.com' },
    { name: 'Ex. www.instagram.com' },
  ];
  const value8 = [
    { name: 'Ex. www.facebook.com' },
    { name: 'Ex. www.instagram.com' },
  ];

  const [addList, setAddList] = useState(['']);
  const handelAdd = () => {
    setAddList([...addList, ' ']);
  };

  const handelRemove = (index: number) => {
    const list = [...addList];
    list.splice(index, 1);
    setAddList(list);
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <SettingsSidebar />
        <div className="content w-100">
          <div className="content-page-header">
            <h5>Social Profiles</h5>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="social-info">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>Name</label>
                      <Dropdown
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.value)}
                        options={value}
                        optionLabel="name"
                        placeholder="Facebook"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>URL</label>

                      <Dropdown
                        value={selectedValue1}
                        onChange={(e) => setSelectedValue1(e.value)}
                        options={value1}
                        optionLabel="name"
                        placeholder="Ex. www.facebook.co"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-12">
                    <label>&nbsp;</label>
                    <div className="form-group">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center social-cont">
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>Name</label>
                      <Dropdown
                        value={selectedValue2}
                        onChange={(e) => setSelectedValue2(e.value)}
                        options={value2}
                        optionLabel="name"
                        placeholder="Instagram"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>URL</label>
                      <Dropdown
                        value={selectedValue6}
                        onChange={(e) => setSelectedValue1(e.value)}
                        options={value6}
                        optionLabel="name"
                        placeholder="Ex. www.instagram.co"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-12">
                    <label>&nbsp;</label>
                    <div className="form-group d-flex align-items-center">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                      <Link to="#" className="del-action ms-2 trash">
                        <Icon.Trash2 size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center social-cont">
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>Name</label>
                      <Dropdown
                        value={selectedValue3}
                        onChange={(e) => setSelectedValue3(e.value)}
                        options={value3}
                        optionLabel="name"
                        placeholder="Youtube"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>URL</label>
                      <Dropdown
                        value={selectedValue7}
                        onChange={(e) => setSelectedValue7(e.value)}
                        options={value7}
                        optionLabel="name"
                        placeholder="Ex. www.Youtube.co"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-12">
                    <label>&nbsp;</label>
                    <div className="form-group d-flex align-items-center">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                      <Link to="#" className="del-action ms-2 trash">
                        <Icon.Trash2 size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center social-cont">
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>Name</label>
                      <Dropdown
                        value={selectedValue4}
                        onChange={(e) => setSelectedValue4(e.value)}
                        options={value4}
                        optionLabel="name"
                        placeholder="Twitter"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12">
                    <div className="form-group">
                      <label>URL</label>
                      <Dropdown
                        value={selectedValue8}
                        onChange={(e) => setSelectedValue8(e.value)}
                        options={value8}
                        optionLabel="name"
                        placeholder="Ex. www.twitter.com"
                        className="select w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-12">
                    <label>&nbsp;</label>
                    <div className="form-group d-flex align-items-center">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                      <Link to="#" className="del-action ms-2 trash">
                        <Icon.Trash2 size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
                {addList.map((index) => (
                  <div
                    className="row align-items-center social-cont"
                    key={index}
                  >
                    <div className="col-lg-5 col-sm-12">
                      <div className="form-group">
                        <label>Name</label>
                        <Dropdown
                          value={selectedValue5}
                          onChange={(e) => setSelectedValue5(e.value)}
                          options={value5}
                          optionLabel="name"
                          placeholder="LinkedIn"
                          className="select w-100"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                      <div className="form-group">
                        <label>URL</label>
                        <Dropdown
                          value={selectedValue1}
                          onChange={(e) => setSelectedValue1(e.value)}
                          options={value1}
                          optionLabel="name"
                          placeholder="Ex. www.Linked.com"
                          className="select w-100"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                      <label>&nbsp;</label>
                      <div className="form-group d-flex align-items-center">
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="sliders round" />
                          </label>
                        </div>
                        <Link
                          to="#"
                          className="del-action ms-2 trash"
                          onClick={(e: any) => handelRemove(e)}
                        >
                          <Icon.Trash2 size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="#" className="link-sets social-add" onClick={handelAdd}>
                <i className="fa fa-plus-circle me-2" aria-hidden="true" />
                Add More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialProfile;
