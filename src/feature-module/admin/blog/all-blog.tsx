import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../core/data/routes/all_routes';

const AllBlog = () => {
  const routes = all_routes;
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>All Blog</h5>
          <div className="list-btn">
            <ul>
              <li>
                <div className="filter-sorting">
                  <ul>
                    <li>
                      <Link to="#" className="filter-sets">
                        <Icon.Filter className="react-feather-custom me-2" />
                        Filter
                      </Link>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/sort.svg"
                          className="me-2"
                          alt="img"
                        />
                      </span>
                      <div className="review-sort">
                        <Dropdown
                          value={selectedValue}
                          onChange={(e:any) => setSelectedValue(e.value)}
                          options={value}
                          optionLabel="name"
                          placeholder="A - Z"
                          className="select admin-select-breadcrumb"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="btn btn-primary" to={routes.addBlog}>
                  <i className="fa fa-plus me-2" />
                  Add Blog{' '}
                </Link>
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
                    <Link to={routes.allBlog} className="active">
                      Active Blog
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.pendingBlog} className='active'>Pending Blog</Link>
                  </li>
                  <li>
                    <Link to={routes.inActiveBlog}>Inactive Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="tab-contents-count">
                <h6>Showing 8-10 of 84 results</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-04.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Car Wash</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.9
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-06.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>Robert</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    28 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-01.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Construction</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.5
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-01.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>John</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    28 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-03.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Electrical</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.0
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-07.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>James</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    28 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-05.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Cleaning</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.0
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-01.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>Phill</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    12 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-07.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Interior</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.0
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-05.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>Pricilla</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    23 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-11.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Carpentry</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 5.0
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-03.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>Sharon</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    14 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-06.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Computer</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.5
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-05.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>John Doe</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    04 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-04.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Car Wash</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.9
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-06.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>Robert</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    28 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="blog grid-blog">
              <div className="blog-image">
                <Link to={routes.viewService}>
                  <ImageWithBasePath
                    className="img-fluid serv-img"
                    alt="Service Image"
                    src="assets/admin/img/services/service-01.jpg"
                  />
                </Link>
                <div className="fav-item">
                  <div className="item-info">
                    <Link to={routes.categories}>
                      <span>Construction</span>
                    </Link>
                  </div>
                  <span className="serv-rating">
                    <i className="fa-solid fa-star" /> 4.5
                  </span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-widget-image">
                  <Link to="#" className="table-profileimage">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/user-01.jpg"
                      className="me-2"
                      alt="img"
                    />
                    <span>John</span>
                  </Link>
                  <h6>
                    <ImageWithBasePath src="assets/admin/img/icons/calendar.svg" alt="img" />
                    28 Sep 2023
                  </h6>
                </div>
                <h3 className="title">
                  <Link to={routes.viewService}>
                    How To Find The Right Painting Service For Your Home?
                  </Link>
                </h3>
                <p>
                  Sed perspiciatis unde omnis natus error laudantium, totam rem
                  aperiam...
                </p>
                <div className="blog-info">
                  <div className="action-search">
                    <Link to={routes.editblog} className="serv-edit">
                      <Icon.Edit className="react-feather-custom" /> Edit
                    </Link>
                    <Link to="#">
                      <Icon.Trash2 className="react-feather-custom" /> Delete
                    </Link>
                  </div>
                  <span>
                    <Icon.AlertCircle className="react-feather-custom" />{' '}
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
