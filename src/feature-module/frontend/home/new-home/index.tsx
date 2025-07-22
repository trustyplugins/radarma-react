import React from 'react'
import QuoteModal from '../../common/modals/quote-modal'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import BecomeProvider from '../../common/modals/provider-modal'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../core/data/routes/all_routes'
import FeatureSection from './feature-section'
import PopularSection from './popular-section'
import WorkSection from './workSection'
import PreferredSection from './preferredSection'
import ProviderSection from './provider-section'
import RateServiceSection from './rateServiceSection'
import CustomerSection from './customerSection'
import BlogAndJoinus from './blogAndJoinus'
import BussinessWithUs from './bussinessWithUs'
import ServiceCities from './serviceCities'
import HomeHeader from '../header/home-header'
import NewFooter from '../footer/newFooter'
import AuthModals from './authModals'

const NewHome = () => {
  const routes = all_routes
  return (
    <>
    <HomeHeader type={1}/>
    <>
  {/* Hero Section */}
  <section className="hero-section" id="home">
    <div className="hero-content position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <h1 className="mb-2">
                Connect with Nearby Top-rated{" "}
                <span className="typed" data-type-text="Carpenters" >Professionals</span>
              </h1>
              <p className="mb-3 sub-title">
                We can connect you to the right Service, first time and every
                time.
              </p>
              <div className="banner-form bg-white border mb-3">
                <form action="#">
                  <div className="d-md-flex align-items-center">
                    <div className="input-group mb-2">
                      <span className="input-group-text px-1">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for Service"
                      />
                    </div>
                    <div className="input-group mb-2">
                      <span className="input-group-text px-1">
                        <i className="ti ti-map-pin" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Location"
                      />
                    </div>
                    <div className="mb-2">
                      
                      <Link  to={routes.search} className="btn btn-linear-primary d-inline-flex align-items-center w-100">
												<i className="feather icon-search me-2"></i>
												Search
											</Link>
                    </div>
                  </div>
                </form>
                <ImageWithBasePath
                  src="assets/img/bg/bg-06.svg"
                  alt="img"
                  className="shape-06 round-animate"
                />
              </div>
              <div className="d-flex align-items-center flex-wrap">
                <h6 className="mb-2 me-2 fw-medium">Popular Searches</h6>
                <Link
                  to={routes.search}
                  className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                >
                  Plumber
                </Link>
                <Link
                  to={routes.search}
                  className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                >
                  Interior
                </Link>
                <Link
                  to={routes.search}
                  className="badge badge-dark-transparent fs-14 fw-normal mb-2 me-2"
                >
                  Nail Technicians
                </Link>
              </div>
              <div className="d-flex align-items-center flex-wrap banner-info">
                <div className="d-flex align-items-center me-4 mt-4">
                  <ImageWithBasePath src="assets/img/icons/success-01.svg" alt="icon" />
                  <div className="ms-2">
                    <h6>215,292 +</h6>
                    <p>Verified Providers</p>
                  </div>
                </div>
                <div className="d-flex align-items-center me-4 mt-4">
                  <ImageWithBasePath src="assets/img/icons/success-02.svg" alt="icon" />
                  <div className="ms-2">
                    <h6>90,000+</h6>
                    <p>Services Completed</p>
                  </div>
                </div>
                <div className="d-flex align-items-center me-4 mt-4">
                  <ImageWithBasePath src="assets/img/icons/success-03.svg" alt="icon" />
                  <div className="ms-2">
                    <h6>2,390,968 </h6>
                    <p>Reviews Globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner-img wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <ImageWithBasePath
              src="assets/img/banner.png"
              alt="img"
              className="img-fluid animation-float"
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="d-inline-flex bg-white p-2 rounded align-items-center shape-01 floating-x">
          <span className="avatar avatar-md bg-warning rounded-circle me-2">
            <i className="ti ti-star-filled" />
          </span>
          <span>
            4.9 / 5<small className="d-block">(255 reviews)</small>
          </span>
          <i className="border-edge" />
        </div>
        <div className="d-inline-flex bg-white p-2 rounded align-items-center shape-02 floating-x">
          <span className="me-2">
            <ImageWithBasePath src="assets/img/icons/tick-banner.svg" alt="" />
          </span>
          <p className="fs-12 text-dark mb-0">300 Booking Completed</p>
          <i className="border-edge" />
        </div>
        <ImageWithBasePath src="assets/img/bg/bg-03.svg" alt="img" className="shape-03" />
        <ImageWithBasePath src="assets/img/bg/bg-04.svg" alt="img" className="shape-04" />
        <ImageWithBasePath src="assets/img/bg/bg-05.svg" alt="img" className="shape-05" />
      </div>
    </div>
  </section>
  {/* /Hero Section */}
  {/* Category Section */}
  <section className="section category-section">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 text-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="section-header text-center">
            <h2 className="mb-1">
              Explore our{" "}
              <span className="text-linear-primary">Categories</span>
            </h2>
            <p className="sub-title">
              Service categories help organize and structure the offerings on a
              marketplace, making it easier for users to find what they need.
            </p>
          </div>
        </div>
      </div>
      <div className="row g-4 row-cols-xxl-6 row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-01.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Construction</h6>
            <p className="fs-14 mb-0">9874 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-02.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Removals</h6>
            <p className="fs-14 mb-0">787 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-13.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Cleaning</h6>
            <p className="fs-14 mb-0">2357 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-04.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Computer Service</h6>
            <p className="fs-14 mb-0">1260 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-05.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Electrical</h6>
            <p className="fs-14 mb-0">4546 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-06.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Man &amp; Van</h6>
            <p className="fs-14 mb-0">2546 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-07.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Deliveries</h6>
            <p className="fs-14 mb-0">4547 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-08.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Mobile Barber</h6>
            <p className="fs-14 mb-0">4787 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
            <span className="badge bg-success">New</span>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-09.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Interior</h6>
            <p className="fs-14 mb-0">1457 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-10.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Plumbing</h6>
            <p className="fs-14 mb-0">4157 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-11.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Nail Technicians</h6>
            <p className="fs-14 mb-0">5477 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col d-flex">
          <div
            className="category-item text-center flex-fill wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="mx-auto mb-3">
              <ImageWithBasePath
                src="assets/img/icons/category-12.svg"
                className="img-fluid"
                alt="img"
              />
            </div>
            <h6 className="fs-14 mb-1">Hair Dressers</h6>
            <p className="fs-14 mb-0">7457 Listings</p>
            <Link
              to={routes.categories}
              className="link-primary text-decoration-underline fs-14"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="text-center view-all wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <Link to={routes.categories} className="btn btn-dark">
              View All
              <i className="ti ti-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Category Section */}
  <FeatureSection/>
  <PopularSection/>
  <WorkSection/>
  <PreferredSection/>
  <ProviderSection/>
  <RateServiceSection/>
  <CustomerSection/>
  <BlogAndJoinus/>
  <BussinessWithUs/>
  <ServiceCities/>
  <NewFooter/>
</>
<AuthModals/>
<QuoteModal/>
<BecomeProvider/>
    </>
  )
}

export default NewHome