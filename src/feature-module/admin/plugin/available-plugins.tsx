import React from 'react'
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';

const AvailablePlugins = () => {
  const routes = all_routes;
  return (

    <div className="page-wrapper page-settings">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>Plugins Manager</h5>
          <div className="list-btn">
            <ul>
              <li>
                <Link className="btn btn-primary" to="#"><i className="fa fa-plus me-2" />Add Plugin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-sets mb-4">
              <div className="tab-contents-sets">
                <ul>
                  <li>
                    <Link to={routes.pluginManager}>Installed Plugins</Link>
                  </li>
                  <li>
                    <Link to={routes.availablePlugins}className="active">Available Plugins</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="service-widget service-fav">
              <div className="service-img">
                <Link to="#">
                  <ImageWithBasePath className="img-fluid serv-img" alt="Service Image" src="assets/admin/img/services/service-14.jpg" />
                </Link>
              </div>
              <div className="service-content">
                <div className="serv-info">
                  <div className="serv-users">
                    <h6>Paytm<span>Version 1.0.0</span></h6>
                  </div>
                </div>
                <div className="serv-update">
                  <h6>$49.00</h6>
                  <ul>
                    <li>
                      <Link to="#" className="preview-plugin"><Icon.Eye className='react-feather-custom'/> Preview</Link>
                    </li>
                    <li>
                      <Link to="#" className="delete-plugin"><Icon.ShoppingCart className='react-feather-custom me-1'/>Purchase</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="service-widget service-fav">
              <div className="service-img">
                <Link to="#">
                  <ImageWithBasePath className="img-fluid serv-img" alt="Service Image" src="assets/admin/img/services/service-15.jpg" />
                </Link>
              </div>
              <div className="service-content">
                <div className="serv-info">
                  <div className="serv-users">
                    <h6>Google Analytics<span>Version 1.0.0</span></h6>
                  </div>
                </div>
                <div className="serv-update">
                  <h6>$49.00</h6>
                  <ul>
                    <li>
                      <Link to="#" className="preview-plugin"><Icon.Eye className='react-feather-custom'/> Preview</Link>
                    </li>
                    <li>
                      <Link to="#" className="delete-plugin"><Icon.ShoppingCart className='react-feather-custom me-1'/>Purchase</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="service-widget service-fav">
              <div className="service-img">
                <Link to="#">
                  <ImageWithBasePath className="img-fluid serv-img" alt="Service Image" src="assets/admin/img/services/service-16.jpg" />
                </Link>
              </div>
              <div className="service-content">
                <div className="serv-info">
                  <div className="serv-users">
                    <h6>Caldera Forms<span>Version 1.0.0</span></h6>
                  </div>
                </div>
                <div className="serv-update">
                  <h6>$49.00</h6>
                  <ul>
                    <li>
                      <Link to="#" className="preview-plugin"><Icon.Eye className='react-feather-custom'/> Preview</Link>
                    </li>
                    <li>
                      <Link to="#" className="delete-plugin"><Icon.ShoppingCart className='react-feather-custom me-1'/>Purchase</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailablePlugins