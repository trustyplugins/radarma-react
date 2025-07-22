import React from 'react'
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { serviceSlideData } from '../../../../core/data/json/services-slide';
const FeatureSection = () => {
    const routes = all_routes;
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
      const slideslideroption = {
        dots: true,
        nav: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        draggable:true,
        tochMove:true,
        swipe:true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
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
  {/* Service Section */}
  <section className="section service-section">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 text-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="section-header text-center">
            <h2 className="mb-1">
              Our Featured <span className="text-linear-primary">Services</span>
            </h2>
            <p className="sub-title">
              Each listing is designed to be clear and concise, providing
              customers
            </p>
          </div>
        </div>
      </div>
      <Slider {...imgslideroption} className="service-slider  owl-carousel nav-center">
      {serviceSlideData.map((res:any,index:number)=>{
        return(
            <div className="service-item wow fadeInUp" data-wow-delay="0.2s" key={index}>
          <div className="service-img">
            <Slider {...slideslideroption} className="img-slider home-sliders feature-new-slide owl-carousel nav-center">

            {res.Slider.map((img:any,index:number)=>{
                return(
                        <div className="slide-images" key={index}>
                <Link to={routes.serviceDetails1}>
                  <ImageWithBasePath
                    src={`assets/img/services/${img.Image}`}
                    className="img-fluid"
                    alt="img"
                  />
                </Link>
              </div>
                )
            })}
            </Slider>
            {res.TradeIcon ? <div className="trend-icon">
              <span className="bg-success">
                <i className="feather icon-trending-up" />
              </span>
            </div>:<></>}
            
            <div className="fav-item">
              <Link to="#" className="fav-icon">
                <i className="ti ti-heart" />
              </Link>
            </div>
          </div>
          <div className="service-content">
            <h6 className="text-truncate mb-1">
              <Link to={routes.serviceDetails1}>{res.Title}</Link>
            </h6>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fw-medium fs-14 mb-0">{res.Text}</p>
              <span className="d-inline-flex align-items-center fs-14">
                <i className="ti ti-star-filled text-warning me-1" />
                {res.Rating}
              </span>
            </div>
          </div>
        </div>
        )
    })}
    </Slider>
      
      <div className="row">
        <div className="col-md-12">
          <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
            <Link to={routes.search} className="btn btn-dark">
              View All
              <i className="ti ti-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Service Section */}
</>

  )
}

export default FeatureSection