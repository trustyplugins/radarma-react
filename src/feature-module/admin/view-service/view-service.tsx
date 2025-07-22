import React, { useState } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { all_routes } from '../../../core/data/routes/all_routes';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const ViewService = () => {
  const routes = all_routes;

  const [open, setOpen] = React.useState(false);

  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));

  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-xl-8">
              <div className="serv-profile">
                <h2>Car Repair Services</h2>
                <ul>
                  <li>
                    <span className="badge">Car Wash</span>
                  </li>
                </ul>
              </div>
              <div className="service-images big-gallery">
                      <ImageWithBasePath
                        src="assets/img/services/service-ban-01.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <Link
                        to="assets/img/services/service-ban-01.jpg"
                        data-fancybox="gallery"
                        className="btn btn-show"
                        onClick={() => setOpen(true)}
                      >
                        <i className="feather-image me-2" />
                        Show all photos
                      </Link>
                      <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[
                          { src: '/assets/img/services/service-ban-01.jpg' },
                          { src: '/assets/img/services/service-ban-02.jpg' },
                          { src: '/assets/img/services/service-ban-03.jpg' },
                        ]}
                      />
                    </div>
              <div className="service-wrap">
                <h5>Service Details</h5>
                <p>
                  Car wash is a facility used to clean the exterior and, in some
                  cases, the interior of motor vehicles. Car washes can be
                  self-serve, fully automated, or full-service with attendants
                  who wash the vehicle.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="service-wrap provide-service">
                <h5>Service Provider</h5>
                <div className="row">
                  <div className="col-md-4">
                    <div className="provide-box">
                      <ImageWithBasePath
                        src="assets/admin/img/profiles/avatar-02.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="provide-box">
                      <span>
                        <Icon.User className="react-feather-custom me-2" />
                      </span>
                      <div className="provide-info">
                        <h6>Member Since</h6>
                        <p>Apr 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="provide-box">
                      <span>
                        <Icon.MapPin className="react-feather-custom me-2" />
                      </span>
                      <div className="provide-info">
                        <h6>Address</h6>
                        <p>Hanover, Maryland</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="provide-box">
                      <span>
                        <Icon.Mail className="react-feather-custom me-2" />
                      </span>
                      <div className="provide-info">
                        <h6>Email</h6>
                        <p>thomash@eg.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="provide-box">
                      <span>
                        <Icon.Phone className="react-feather-custom me-2" />
                      </span>
                      <div className="provide-info">
                        <h6>Phone</h6>
                        <p>+1 888 888 8888</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="social-icon provide-social">
                      <ul>
                        <li>
                          <Link to="#" target="_blank">
                            <Icon.Instagram className="react-feather-custom me-2" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <Icon.Twitter className="react-feather-custom me-2" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <Icon.Instagram className="react-feather-custom me-2" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <Icon.Linkedin className="react-feather-custom me-2" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Gallery</h5>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <div className="owl-nav mynav3" />
                  </div>
                </div>
                <Slider {...settings} className="service-slider">
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-01.jpg"
                      />

                      <div key={1} onClick={() => handleItemClick(1)}>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[1] ? 'selected' : ''
                          }`}
                        ></Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="avatar"
                              alt="User"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content">
                      <p>
                        {' '}
                        <Icon.MapPin className="standard-feather" />
                      </p>
                      <div className="serv-info">
                        <h6>
                          $25.00<span className="old-price">$35.00</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-02.jpg"
                      />

                      <div key={2} onClick={() => handleItemClick(2)}>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[2] ? 'selected' : ''
                          }`}
                        ></Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              className="avatar"
                              alt="User"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-03.jpg"
                        />
                      </Link>
                      <div key={3} onClick={() => handleItemClick(3)}>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[3] ? 'selected' : ''
                          }`}
                        ></Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-03.jpg"
                              className="avatar"
                              alt="User"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-11.jpg"
                        />
                      </Link>
                      <div key={4} onClick={() => handleItemClick(4)}>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[4] ? 'selected' : ''
                          }`}
                        ></Link>
                      </div>
                      <div className="item-info">
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            className="avatar"
                            alt="User"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card card-provide">
                <div className="card-body">
                  <div className="provide-widget">
                    <div className="serv-proimg">
                      <ImageWithBasePath
                        src="assets/admin/img/profiles/avatar-02.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <span>
                        <i className="fa-solid fa-circle-check" />
                      </span>
                    </div>
                  </div>
                  <div className="package-widget">
                    <h5>Available Service Packages</h5>
                    <ul>
                      <li>Full car wash and clean</li>
                      <li>Auto Electrical</li>
                      <li>Pre Purchase Inspection</li>
                      <li>Pre Purchase Inspection</li>
                    </ul>
                  </div>
                  <div className="package-widget pack-service">
                    <h5>Additional Service</h5>
                    <ul>
                      <li>
                        <div className="add-serving">
                          <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                          </label>
                          <div className="add-serv-item">
                            <div className="add-serv-img">
                              <ImageWithBasePath
                                src="assets/admin/img/services/service-09.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="add-serv-info">
                              <h6>House Cleaning</h6>
                            </div>
                          </div>
                        </div>
                        <div className="add-serv-amt">
                          <h6>$500.75</h6>
                        </div>
                      </li>
                      <li>
                        <div className="add-serving">
                          <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                          </label>
                          <div className="add-serv-item">
                            <div className="add-serv-img">
                              <ImageWithBasePath
                                src="assets/admin/img/services/service-16.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="add-serv-info"></div>
                          </div>
                        </div>
                        <div className="add-serv-amt">
                          <h6>$500.75</h6>
                        </div>
                      </li>
                      <li>
                        <div className="add-serving">
                          <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                          </label>
                          <div className="add-serv-item">
                            <div className="add-serv-img">
                              <ImageWithBasePath
                                src="assets/admin/img/services/service-07.jpg"
                                alt="Service"
                              />
                            </div>
                            <div className="add-serv-info">
                              <h6>Interior Designing</h6>
                            </div>
                          </div>
                        </div>
                        <div className="add-serv-amt">
                          <h6>$500.75</h6>
                        </div>
                      </li>
                      <li>
                        <div className="add-serving">
                          <label className="custom_check">
                            <input type="checkbox" name="rememberme" />
                            <span className="checkmark" />
                          </label>
                          <div className="add-serv-item">
                            <div className="add-serv-img">
                              <ImageWithBasePath
                                src="assets/admin/img/services/service-03.jpg"
                                alt="Service Image"
                              />
                            </div>
                            <div className="add-serv-info">
                              <h6>Wooden Carpentry Work</h6>
                            </div>
                          </div>
                        </div>
                        <div className="add-serv-amt">
                          <h6>$354.45</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="card card-available">
                    <div className="card-body">
                      <div className="available-widget">
                        <div className="available-info">
                          <h5>Service Availability</h5>
                          <ul>
                            <li>
                              Monday <span>9:30 AM - 7:00 PM</span>{' '}
                            </li>
                            <li>
                              Tuesday <span>9:30 AM - 7:00 PM</span>{' '}
                            </li>
                            <li>
                              Wednesday <span>9:30 AM - 7:00 PM</span>{' '}
                            </li>
                            <li>
                              Thursday <span>9:30 AM - 7:00 PM</span>{' '}
                            </li>
                            <li>
                              Friday <span>9:30 AM - 7:00 PM</span>{' '}
                            </li>
                            <li>
                              Saturday <span>9:30 AM - 7:00 PM</span>{' '}
                            </li>
                            <li>
                              Sunday <span className="text-danger">Closed</span>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="map-grid">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="contact-map"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewService;
