import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';

const routes = all_routes;

const ProviderAddon = () => {
  const [selectedSub, setselectedSub] = useState(null);
  const [selectedAppoinment, setselectedApp] = useState(null);
 
  const [selectedUsers2, setselectedUsers2] = useState(null);
  const category = [
    { name: '10 Services' },
    { name: '8 Services' },
    { name: '6 Services' },
  ];
  const Appoinment = [
    { name: '10 Appointments' },
    { name: '8 Appointments' },
    { name: '6 Appointments' },
  ];
  const User = [
    { name: '10 Users' },
    { name: '8 Users' },
    { name: '6 Users' },
  ];

  return (
    <>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="widget-title">
                  <h4>Subscription</h4>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <ul className="subs-list">
                  <li>
                    <Link to={routes.providerSubscription}>
                      Plan &amp; Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.providerAddon} className="active">
                      Addons
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Subscription */}
            <div className="row provider-price">
              <div className="col-md-12">
                <div className="choose-title">
                  <h6 className="me-0">Addons</h6>
                </div>
              </div>
              <div className="col-md-12">
                {/* Addon List */}
                <div className="addon-box">
                  <div className="addon-name">
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="rememberme"
                        className="rememberme"
                      />
                      <span className="checkmark" />
                    </label>
                    <div>
                      <h6>Services</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                  </div>
                  <div className="addon-info">
                    <ul>
                      <li>
                        <Dropdown
                          value={selectedSub}
                          onChange={(e) => setselectedSub(e.value)}
                          options={category}
                          optionLabel="name"
                          placeholder="10 Services"
                          className="select w-100"
                        />
                      </li>
                      <li>
                        <h6>$20.00</h6>
                      </li>
                      <li>
                        <Link
                          to={routes.addSubscription}
                          className="btn btn-primary"
                        >
                          Buy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="addon-box">
                  <div className="addon-name">
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="rememberme"
                        className="rememberme"
                      />
                      <span className="checkmark" />
                    </label>
                    <div>
                      <h6>Appointments</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                  </div>
                  <div className="addon-info">
                    <ul>
                      <li>
                        <Dropdown
                          value={selectedAppoinment}
                          onChange={(e) => setselectedApp(e.value)}
                          options={Appoinment}
                          optionLabel="name"
                          placeholder="10 Appointments"
                          className="select w-100"
                        />
                      </li>
                      <li>
                        <h6>$20.00</h6>
                      </li>
                      <li>
                        <Link
                          to={routes.addSubscription}
                          className="btn btn-primary"
                        >
                          Buy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="addon-box">
                  <div className="addon-name">
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="rememberme"
                        className="rememberme"
                      />
                      <span className="checkmark" />
                    </label>
                    <div>
                      <h6>Staffs</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                  </div>
                  <div className="addon-info">
                    <ul>
                      <li>
                        <Dropdown
                          value={selectedUsers2}
                          onChange={(e) => setselectedUsers2(e.value)}
                          options={User}
                          optionLabel="name"
                          placeholder="10 Users"
                          className="select w-100"
                        />
                      </li>
                      <li>
                        <h6>$20.00</h6>
                      </li>
                      <li>
                        <Link
                          to={routes.addSubscription}
                          className="btn btn-primary"
                        >
                          Buy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Addon List */}
              </div>
            </div>
            {/* /Subscription */}
          </div>
        </div>
    </>
  );
};

export default ProviderAddon;
