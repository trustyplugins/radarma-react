import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import HomeHeader from '../header/home-header';

const HeaderFive = () => {

  const [selectedSub, setselectedSub] = useState(null);
  const [selectedAppoinment, setselectedApp] = useState(null);
  const category = [
    { name: 'Job Title' },
    { name: 'Tornoto' },
    { name: 'Texas' },
  ];
  const Appoinment = [
    { name: 'Choose Location' },
    { name: 'Tornoto' },
    { name: 'Texas' },
  ];

  return (
    <>
      <section className="hero-section-five">
      <HomeHeader type={6}/>
        <div className="container">
          <div className="home-banner home-banner-three">
            <div className="row align-items-center w-100">
              <div className="col-lg-6 col-md-12 mx-auto">
                <div className="section-search section-section-five">
                  <h1>
                    The Largest Professional <span>Car</span> Wash
                  </h1>
                  <h4>Search From 150 Awesome Verified Ads!</h4>
                  <p>
                    We value your time and therefore washing your car at our car
                    wash will take no more than 15 minutes.
                  </p>
                  <div className="search-box search-box-five">
                    <form className="search-box-form">
                      <div className="search-input">
                        <div className="search-group-icon search-group-icon-5">
                          <Icon.MapPin />
                        </div>
                        <div className="form-group mb-0">
                          <label>What</label>
                          <div>
                            <Dropdown
                              value={selectedSub}
                              onChange={(e) => setselectedSub(e.value)}
                              options={category}
                              optionLabel="name"
                              placeholder="Job Title"
                              className="select w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="search-group-icon search-group-icon-5">
                          <Icon.Search />
                        </div>
                        <div className="form-group mb-0">
                          <label>Where</label>
                          <div>
                            <Dropdown
                              value={selectedAppoinment}
                              onChange={(e) => setselectedApp(e.value)}
                              options={Appoinment}
                              optionLabel="name"
                              placeholder="Choose Location"
                              className="select w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="floating-img">
                  <ImageWithBasePath
                    src="./assets/img/audi.png"
                    alt="audi"
                    className="img-fluid rotate-img"
                  />
                </div>
                <div className="car-five-arrow-img">
                  <ImageWithBasePath
                    src="./assets/img/car-five-arrow.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderFive;
