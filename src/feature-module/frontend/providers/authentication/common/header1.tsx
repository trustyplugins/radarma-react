import React from 'react'
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../../core/data/routes/all_routes';

const ProviderAuthHeader = () => {
  const routes = all_routes;
    return (

        <header className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <Link to={routes.homeOne} className="navbar-brand logo">
                  <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </Link>
                <Link to={routes.homeOne} className="navbar-brand logo-small">
                  <ImageWithBasePath src="assets/img/logo-small.png" className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item">
                  <Link className="link" to={routes.faq}>FAQ</Link>
                </li>
                <li className="nav-item">
                  <Link className="link" to={routes.login}>Login</Link>
                </li>
                <li className="nav-item dropdown flag-nav">
                  <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">
                    <ImageWithBasePath src="assets/img/flag.png" alt="Flag" /> En
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath src="assets/img/flags/us.png" alt="Flag" height={16} /> En
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath src="assets/img/flags/fr.png" alt="Flag" height={16} /> French
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <ImageWithBasePath src="assets/img/flags/de.png" alt="Flag" height={16} /> German
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
}

export default ProviderAuthHeader