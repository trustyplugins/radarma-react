import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
const CustomerSection = () => {
  const imgslideroption = {
      dots: false,
      nav: false,
      infinite: true,
      speed: 500,
      swipe:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  return (
<>
  {/* Testimonial Section */}
  <section className="section service-section white-section testimonial-section">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 text-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="section-header text-center">
            <h2 className="mb-1">
              Genuine reviews from{" "}
              <span className="text-linear-primary">Customers</span>
            </h2>
            <p className="sub-title">
              Each listing is designed to be clear and concise, providing
              customers
            </p>
          </div>
        </div>
      </div>
      <Slider {...imgslideroption} className="service-slider owl-carousel nav-center">
        <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning" />
          </div>
          <h5 className="mb-2">Quality of work was excellent</h5>
          <p className="mb-4">
            “ I had a great experience with ABC Electrical on the Services. The
            electrician arrived on time!!!“
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center overflow-hidden">
              <span className="avatar avatar-lg flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-14.jpg"
                  className="img-fluid rounded-circle"
                  alt="img"
                />
              </span>
              <h6 className="text-truncate ms-2">Robert Anderson</h6>
            </div>
            <p> 2 Days Ago</p>
          </div>
        </div>
        <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning" />
          </div>
          <h5 className="mb-2">Green Cleaning</h5>
          <p className="mb-4">
            “ I love that they use eco-friendly products without compromising on
            cleanliness with care.“
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center overflow-hidden">
              <span className="avatar avatar-lg flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-15.jpg"
                  className="img-fluid rounded-circle"
                  alt="img"
                />
              </span>
              <h6 className="text-truncate ms-2">Delois Coffin</h6>
            </div>
            <p> 3 Days Ago</p>
          </div>
        </div>
        <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning" />
          </div>
          <h5 className="mb-2">Luxury Car Cleaning</h5>
          <p className="mb-4">
            “Exceptional care for my luxury vehicle. The team treated my car
            with precision and care.“
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center overflow-hidden">
              <span className="avatar avatar-lg flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-13.jpg"
                  className="img-fluid rounded-circle"
                  alt="img"
                />
              </span>
              <h6 className="text-truncate ms-2">Matthew Hicks</h6>
            </div>
            <p>5 Days Ago</p>
          </div>
        </div>
        <div className="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning me-1" />
            <i className="fa-solid fa-star text-warning" />
          </div>
          <h5 className="mb-2">Quick and reliable</h5>
          <p className="mb-4">
            “They fixed my issue in no time and got everything running smoothly
            again! Good work“
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center overflow-hidden">
              <span className="avatar avatar-lg flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-12.jpg"
                  className="img-fluid rounded-circle"
                  alt="img"
                />
              </span>
              <h6 className="text-truncate ms-2">Daniel Davis</h6>
            </div>
            <p>7 Days Ago</p>
          </div>
        </div>
      </Slider>
      <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
        <h6 className="mb-2">
          Each listing is designed to be clear and concise, providing customers
        </h6>
        <p>
          <span className="text-dark fw-medium">Excellent</span>
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <ImageWithBasePath
            src="assets/img/icons/star-01.svg"
            className="img-fluid"
            alt="img"
          />
          <span className="fs-14">Based on 456 reviews</span>
        </p>
      </div>
    </div>
  </section>
  {/* /Testimonial Section */}
</>


  )
}

export default CustomerSection