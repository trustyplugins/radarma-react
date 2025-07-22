import React, { useState } from 'react';
import ServiceInformation from './serviceInformation';
import Availability from './availability';
import Location from './location';
import Gallery from './gallery';
import EditSeo from './seo';

const AddService = () => {
  const [TabChange, setTabChange] = useState(true);
  const [TabChange1, setTabChange1] = useState(false);
  const [TabChange2, setTabChange2] = useState(false);
  const [TabChange3, setTabChange3] = useState(false);
  const [TabChange4, setTabChange4] = useState(false);
  const [PageChange, setPageChange] = useState('information');

  const availabilityTab = () => {
    setPageChange('booking');
    setTabChange1(true);
    setTabChange(false);
    setTabChange2(false);
    setTabChange3(false);
    setTabChange4(false);
  };
  const serviceTab = () => {
    setPageChange('information');
    setTabChange1(false);
    setTabChange2(false);
    setTabChange3(false);
    setTabChange4(false);
    setTabChange(true);
  };
  const locationTab = () => {
    setPageChange('location');
    setTabChange2(true);
    setTabChange1(false);
    setTabChange(false);
    setTabChange3(false);
    setTabChange4(false);
  };

  const galleryTab = () => {
    setPageChange('gallery');
    setTabChange3(true);
    setTabChange2(false);
    setTabChange1(false);
    setTabChange4(false);
    setTabChange(false);
  };

  const seoTab = () => {
    setPageChange('seo');
    setTabChange4(true);
    setTabChange3(false);
    setTabChange2(false);
    setTabChange1(false);
    setTabChange(false);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="progressbar-card">
                <ul id="progress-head">
                  <li className="active">
                    Add Services - Service Information
                  </li>
                  <li>Add Services - Availablity</li>
                  <li>Add Services - Location</li>
                  <li>Add Services - Gallery</li>
                  <li>Add Services - SEO</li>
                </ul>
                <ul id="progressbar">
                  <li className={TabChange ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-check-circle" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Information</h6>
                    </div>
                  </li>
                  <li className={TabChange1 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-clock" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Availability</h6>
                    </div>
                  </li>
                  <li className={TabChange2 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-map" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Location</h6>
                    </div>
                  </li>
                  <li className={TabChange3 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-images" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Gallery</h6>
                    </div>
                  </li>
                  <li className={TabChange4 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-chart-bar" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>SEO</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 m-auto">
              {PageChange === 'information' ? (
                <ServiceInformation nextTab={availabilityTab} />
              ) : PageChange == 'booking' ? (
                <Availability prevTab={serviceTab} nextTab={locationTab} />
              ) : PageChange == 'location' ? (
                <Location prevTab={availabilityTab} nextTab={galleryTab} />
              ) : PageChange == 'gallery' ? (
                <Gallery prevTab={locationTab} nextTab={seoTab} />
              ) : (
                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <EditSeo prevTab={galleryTab}  />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
