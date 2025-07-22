import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const BlogDetails = () => {
  const routes = all_routes;
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
    <BreadCrumb title='Blog Details' item1='Home' item2='Blog Details'/>
      <>
      <div className="page-wrapper">
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 blog-details">
          <div className="blog-head">
            <div className="blog-category">
              <ul>
                <li>
                  <span className="badge badge-light text-dark">
                    Construction
                  </span>
                </li>
                <li>
                  <i className="feather icon-calendar me-1" />
                  28 Sep 2023
                </li>
                <li>
                  <div className="post-author">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="Post Author"
                      />
                      <span>Admin</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <h4 className="mb-3">
              Tips for Selecting a Computer Service Provider
            </h4>
          </div>
          {/* Blog Post */}
          <div className="card blog-list shadow-none">
            <div className="card-body">
              <div className="blog-image">
                <Link to={routes.blogDetails}>
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/blog-details.jpg"
                    alt="Post Image"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <p>
                  Explore practical tips to help you pick the best computer
                  service provider, ensuring smooth and efficient operations for
                  your company. Start by assessing the provider&apos;s expertise and
                  specializations to ensure they have the necessary skills and
                  certifications for for your specific needs, whether it&apos;s
                  hardware repairs, software support, or network management.
                  Check references and read customer reviews to gauge the
                  provider’s reliability and quality of service, as this can
                  offer valuable insights into their performance and customer
                  satisfaction.
                </p>
                <p>
                  Evaluate their response times and support availability to
                  ensure they offer prompt assistance and have options for
                  emergency or after-hours support if required. Compare
                  different service plans and costs to find one that fits your
                  budget while covering the necessary services, aiming for
                  transparent pricing and flexibility. Finally, verify the
                  provider’s certifications and credentials to ensure they meet
                  industry standards and demonstrate a commitment to
                  high-quality service.
                </p>
                <p className="test-info fw-medium">
                  {" "}
                  By keeping these additional factors in mind, you can further
                  ensure that you choose a computer service provider that not
                  only meets your immediate needs but also supports your
                  long-term IT strategy and business goals. Good provider should
                  be able to adapt to evolving technology and business
                  requirements.
                </p>
              </div>
            </div>
          </div>
          {/* /Blog Post */}
          <div className="social-widget blog-review">
            <h4>Tags</h4>
            <div className="ad-widget">
              <ul>
                <li>
                  <Link to="#">Construction</Link>
                </li>
                <li>
                  <Link to="#">Car Wash</Link>
                </li>
                <li>
                  <Link to="#">Appliance</Link>
                </li>
                <li>
                  <Link to="#">Interior</Link>
                </li>
                <li>
                  <Link to="#">Carpentry</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Reviews */}
          <div className="service-wrap blog-review">
            <h4>Comments</h4>
            <ul>
              <li>
                <div className="review-box">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </span>
                          <div className="review-name">
                            <h6 className="fs-16 fw-medium mb-1">
                              Charles Lozano
                            </h6>
                            <p className="fs-14">a week ago</p>
                          </div>
                        </div>
                        <Link to="#" className="reply-box">
                          <i className="fas fa-reply me-2" /> Reply
                        </Link>
                      </div>
                      <p>
                        This blog is incredibly insightful! I’ve been on the
                        lookout for a dependable IT support provider, and the
                        tips provided here are exactly what I needed. The
                        emphasis on assessing expertise and specializations
                        really helps me focus on what’s most important for my
                        specific needs. Checking references and reviews will be
                        my next step to ensure that I’m choosing a provider with
                        a solid track record.
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="comments-reply">
                  <li>
                    <div className="review-box mb-4">
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-03.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </span>
                          <div className="review-name">
                            <h6 className="fs-16 fw-medium mb-1">
                              Robert Koch
                            </h6>
                            <p className="fs-14">a week ago</p>
                          </div>
                        </div>
                        <Link to="#" className="reply-box">
                          <i className="fas fa-reply me-2" /> Reply
                        </Link>
                      </div>
                      <p>
                        Thank you for your feedback! I&apos;m glad you found the
                        section on checking customer reviews and references
                        particularly valuable. Understanding a provider’s past
                        performance is indeed crucial for ensuring reliable
                        support. It helps in making a more informed decision and
                        choosing a provider who can meet your needs effectively.
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="review-box">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-04.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </span>
                          <div className="review-name">
                            <h6 className="fs-16 fw-medium mb-1">
                              Gregory Gonzalez
                            </h6>
                            <p className="fs-14">a week ago</p>
                          </div>
                        </div>
                        <Link to="#" className="reply-box">
                          <i className="fas fa-reply me-2" /> Reply
                        </Link>
                      </div>
                      <p>
                        I really appreciate the detailed advice on evaluating
                        response times and support availability. It’s so crucial
                        to have a provider who can offer prompt assistance and
                        emergency support, especially when dealing with critical
                        IT issues. The points about comparing service plans and
                        costs are also very helpful
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="review-box">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-md flex-shrink-0 me-2">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-05.jpg"
                              className="img-fluid rounded-circle"
                              alt="img"
                            />
                          </span>
                          <div className="review-name">
                            <h6 className="fs-16 fw-medium mb-1">
                              Odell Nevin
                            </h6>
                            <p className="fs-14">a week ago</p>
                          </div>
                        </div>
                        <Link to="#" className="reply-box">
                          <i className="fas fa-reply me-2" /> Reply
                        </Link>
                      </div>
                      <p>
                        This blog provides a comprehensive guide to selecting
                        the right computer service provider. The section on
                        checking customer reviews and references really
                        resonated with me; understanding a provider’s past
                        performance can make all the difference in ensuring
                        reliable support.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* /Reviews */}
          {/* Comments */}
          <div className="new-comment">
            <h4>Write a Comment</h4>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      rows={6}
                      className="form-control"
                      placeholder="Enter Your Comment Here...."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div>
                  <button className="btn btn-dark" type="submit">
                    Post Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* /Comments */}
        </div>
        {/* Blog Sidebar */}
        <div className="col-lg-4 col-md-12 blog-sidebar theiaStickySidebar">
        <StickyBox>
          {/* Search */}
          <div className="card search-widget">
            <div className="card-body">
              <h5 className="side-title">Search</h5>
              <form className="search-form">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /Search */}
          {/* Categories */}
          <div className="card about-widget">
            <div className="card-body">
              <h5 className="side-title">About Me</h5>
              <ImageWithBasePath src="assets/img/avatar-big.jpg" alt="User" />
              <p>
                Robert Koch is an accomplished IT professional and writer with
                extensive experience in the field of computer services and
                technology solutions.
              </p>
              <Link to="#" className="btn btn-dark">
                About Author
              </Link>
            </div>
          </div>
          {/* /Categories */}
          {/* Categories */}
          <div className="card category-widget">
            <div className="card-body">
              <h4 className="side-title">Categories</h4>
              <ul className="categories">
                <li className="d-flex align-items-center justify-content-between p-2 bg-white">
                  <Link to={routes.categories}>Car Wash</Link>(2)
                </li>
                <li className="d-flex align-items-center justify-content-between p-2 bg-white">
                  <Link to={routes.categories}>Plumbing</Link>(5)
                </li>
                <li className="d-flex align-items-center justify-content-between p-2 bg-white">
                  <Link to={routes.categories}>Carpenter</Link>(4)
                </li>
                <li className="d-flex align-items-center justify-content-between p-2 bg-white">
                  <Link to={routes.categories}>Computer Service</Link>(6)
                </li>
                <li className="d-flex align-items-center justify-content-between p-2 bg-white">
                  <Link to={routes.categories}>Cleaning</Link>(8)
                </li>
              </ul>
            </div>
          </div>
          {/* /Categories */}
          {/* Latest Posts */}
          <div className="card post-widget">
            <div className="card-body">
              <h4 className="side-title">Latest News</h4>
              <ul className="latest-posts">
                <li>
                  <div className="post-thumb">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-01.jpg"
                        alt="Blog Image"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <p>06 Nov 2024</p>
                    <h4>
                      <Link to={routes.blogDetails}>
                        Choosing the Right Service Provider: Key Factors to
                        Consider
                      </Link>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-02.jpg"
                        alt="Thumb Image"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <p>06 Nov 2023</p>
                    <h4>
                      <Link to={routes.blogDetails}>
                        Choosing the Right Car Wash Service: What to Look For
                      </Link>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-03.jpg"
                        alt="Thumb image"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <p>06 Nov 2023</p>
                    <h4>
                      <Link to={routes.blogDetails}>
                        Plumbing Upgrades That Can Improve Your Home’s
                        Efficiency
                      </Link>
                    </h4>
                  </div>
                </li>
                <li>
                  <div className="post-thumb">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-04.jpg"
                        alt="Thumb Image"
                      />
                    </Link>
                  </div>
                  <div className="post-info">
                    <p>06 Nov 2023</p>
                    <h4>
                      <Link to={routes.blogDetails}>
                        Common Carpentry Mistakes and How to Avoid Them
                      </Link>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* /Latest Posts */}
          {/* Tags */}
          <div className="card tags-widget">
            <div className="card-body">
              <h4 className="side-title">Tags</h4>
              <ul className="d-flex align-items-center flex-wrap">
                <li className="me-2 mb-2">
                  <Link
                    to="#"
                    className="bg-dark p-1 d-block fs-12 rounded"
                  >
                    Consulting
                  </Link>
                </li>
                <li className="me-2 mb-2">
                  <Link
                    to="#"
                    className="bg-dark p-1 d-block fs-12 rounded"
                  >
                    Design
                  </Link>
                </li>
                <li className="me-2 mb-2">
                  <Link
                    to="#"
                    className="bg-dark p-1 d-block fs-12 rounded"
                  >
                    Shopping
                  </Link>
                </li>
                <li className="me-2 mb-2">
                  <Link
                    to="#"
                    className="bg-dark p-1 d-block fs-12 rounded"
                  >
                    Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="bg-dark p-1 d-block fs-12 rounded"
                  >
                    Interior Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* /Tags */}
          </StickyBox>
        </div>
        {/* /Blog Sidebar */}
      </div>
    </div>
  </div>
</div>

      </>
    </>
  );
};

export default BlogDetails;
