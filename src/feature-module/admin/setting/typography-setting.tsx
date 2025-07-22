import React, { useState } from 'react'
import SettingsSidebar from '../common/settingssidebar'
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';

const TypographySetting = () => {

    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'Circular Std' }, { name: 'ASC' }];
    return (
        <>
                <div className="page-wrapper page-settings">
                    <div className="content-sidelink">
                        <div className="content-sidelinkheading">
                            <h6>Settings</h6>
                        </div>
                        <SettingsSidebar />
                    </div>
                    <div className="content w-100 ">
                        <div className="content-page-header">
                            <h5>Typography Settings</h5>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card typo-setting">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-groupheads">
                                                    <h2>Website Font</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Font Name</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                            <div className="btn-typograp">
                                                <Link to="#" className="btn btn-primary">
                                                    Update
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card typo-setting">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-groupheads">
                                                    <h2>Heading Fonts</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Body</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Heading 1</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Heading 2</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Heading 3</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Heading 4</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Heading 5</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Heading 6</label>
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Circular Std"
                                                    className="select w-100"
                                                />
                                            </div>
                                        </div>
                                        <div className="btn-typograp">
                                            <Link to="#" className="btn btn-primary">
                                                Update
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>


    )
}

export default TypographySetting
