import React from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';

const SettingsSidebar = () => {
  const routes = all_routes;
  return (
    <>
      <div className="content-sidelink float-start">
        <div className="content-sidelinkheading">
          <h6>Settings</h6>
        </div>
        <div className="content-sidelinkmenu">
          <ul>
            <li>
              <h5>General Settings</h5>
            </li>
            <li>
              <Link to={routes.localization}>Localization </Link>
            </li>
            <li>
              <Link to={routes.accountSettings}>Account Settings </Link>
            </li>
            <li>
              <Link to={routes.security}>Security</Link>
            </li>
            <li>
              <Link to={routes.socialProfile}>Social Profiles </Link>
            </li>
            <li>
              <Link to={routes.adminNotification}>Notifications</Link>
            </li>
            <li>
              <Link to={routes.connectedApps}>
                Connected Apps
              </Link>
            </li>
            <li>
              <Link to={routes.appointmentSettings}>Appointment Settings</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Website Settings</h5>
            </li>
            <li>
              <Link to={routes.siteInformation}>Site Information</Link>
            </li>
            <li>
              <Link to={routes.seoSettings}>Seo Settings</Link>
            </li>
            <li>
              <Link to={routes.preferenceSettings}>Preference Settings</Link>
            </li>
            <li>
              <Link to={routes.appearance}>Appearance </Link>
            </li>
            <li>
              <h4>Frontend Settings</h4>
            </li>
            <li className="submenu-sidelink">
              <Link to={routes.headerSettings}>Header Settings</Link>
            </li>
            <li className="submenu-sidelink">
              <Link to={routes.footerSettings}>Footer Settings</Link>
            </li>
            <li>
              <Link to={routes.authenticationSettings}>
                Authentication Settings
              </Link>
            </li>
            <li>
              <Link to={routes.socialAuthentication}>
                Social Authentication
              </Link>
            </li>
            <li>
              <Link to={routes.language}>Language </Link>
            </li>
            <li>
              <Link to={routes.typographytSettings}>Typography Settings</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>System Settings</h5>
            </li>
            <li>
              <Link to={routes.emailSettings}>Email Settings </Link>
            </li>
            <li>
              <Link to={routes.smsSettings}>SMS Settings</Link>
            </li>
            <li>
              <Link to={routes.gdpr}>GDPR Settings </Link>
            </li>
            <li>
              <Link to={routes.calendarSetting}>Calendar Settings</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Financial Settings</h5>
            </li>
            <li>
              <Link to={routes.paymentGateway}>Payment Gateways</Link>
            </li>
            <li>
              <Link to={routes.paymentSettings}>Payment Settings</Link>
            </li>
            <li>
              <Link to={routes.taxRates}>Tax Rates</Link>
            </li>
            <li>
              <Link to={routes.currencySettings}>Currencies</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>
                <Link to={routes.serviceSettings}>Service Settings</Link>
              </h5>
            </li>
          </ul>
          <ul>
            <li>
              <h5>
                <Link to={routes.providerSettings}>Provider Settings</Link>
              </h5>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Other Settings</h5>
            </li>
            <li>
              <Link to={routes.storageSetting}>Storage Settings</Link>
            </li>
            <li>
              <Link to={routes.banIpAddress}>Ban IP Address</Link>
            </li>
            <li>
              <Link to={routes.cronJob}>Cronjob</Link>
            </li>
            <li>
              <h4>Backup</h4>
            </li>
            <li className="submenu-sidelink">
              <Link to={routes.systemBackup}>System Backup</Link>
            </li>
            <li className="submenu-sidelink">
              <Link to={routes.databasebackup}>Database Backup</Link>
            </li>
            <li>
              <Link to={routes.systemInformation}>System Information</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SettingsSidebar;
