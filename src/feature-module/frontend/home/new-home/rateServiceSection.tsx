import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes'

const RateServiceSection = () => {
  const routes = all_routes
  return (
    <section className="section rated-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">
        <div className="section-header text-center mb-4">
          <h2 className="mb-1">
            Browse{" "}
            <span className="text-linear-primary">High Rated Services</span>
          </h2>
          <p className="sub-title">
            Each listing is designed to be clear and concise, providing
            customers
          </p>
        </div>
      </div>
    </div>
    <ul className="nav nav-tabs nav-tabs-solid justify-content-center mb-4">
      <li className="nav-item mb-3">
        <Link className="nav-link" to="#rate-removals" data-bs-toggle="tab">
          Removals
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="nav-link" to="#rate-furniture" data-bs-toggle="tab">
          Furniture Assembly
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link
          className="nav-link active"
          to="#rate-electrical"
          data-bs-toggle="tab"
        >
          Electrical Services
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="nav-link" to="#rate-construction" data-bs-toggle="tab">
          Construction
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="nav-link" to="#rate-man" data-bs-toggle="tab">
          Man &amp; Van
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="nav-link" to="#rate-plumbing" data-bs-toggle="tab">
          Plumbing
        </Link>
      </li>
      <li className="nav-item mb-3">
        <Link className="nav-link" to="#rate-more" data-bs-toggle="tab">
          More Services
        </Link>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane fade" id="rate-removals">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-05.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Laser Tattoo Removal</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-06.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Surgical Excision</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-07.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Saline Tattoo Removal</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-08.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Tattoo Removal Creams</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="rate-furniture">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-09.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Home Furniture Assembly</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-10.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Office Furniture Assembly</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-11.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Fitness Equipment Assembly</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-12.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Shelving &amp; Storage Assembly</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="tab-pane fade show active" id="rate-electrical">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-01.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Wiring and rewiring</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-02.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Ceiling fan installation</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-03.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Faulty wiring repair</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-04.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Light fixture repair</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="rate-construction">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-13.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Residential Construction</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-14.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Roofing Services</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-15.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Commercial Construction</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-16.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Site Preparation</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="rate-man">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-17.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Local Moves</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-18.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Furniture Delivery</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-19.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">House Clearance</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-20.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Urgent Deliveries</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="rate-plumbing">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-21.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Water Filtration</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-22.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Emergency Plumbing Repairs</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-23.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Drain Cleaning</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-24.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Pipe Installation &amp; Repair</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="rate-more">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-11.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Fitness Equipment Assembly</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-03.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Faulty wiring repair</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-15.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">Commercial Construction</h6>
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <Link to={routes.serviceDetails1} className="rated-wrap">
              <ImageWithBasePath
                src="assets/img/services/rated-service-19.jpg"
                alt="img"
                className="img-fluid"
              />
              <h6 className="text-white">House Clearance</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center view-all wow fadeInUp" data-wow-delay="0.2s">
      <Link to={routes.serviceGrid} className="btn btn-dark">
        View All
        <i className="ti ti-arrow-right ms-2" />
      </Link>
    </div>
  </div>
</section>

  )
}

export default RateServiceSection