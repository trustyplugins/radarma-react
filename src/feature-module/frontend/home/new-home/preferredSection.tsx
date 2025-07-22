import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { homeWork } from '../../../../core/data/json/home-work';

const PreferredSection = () => {
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
    <section className="section service-section white-section pt-0 pb-0">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.2s">
        <div className="section-header text-center">
          <h2 className="mb-1">
            Most <span className="text-linear-primary">Preferred Services</span>
          </h2>
          <p className="sub-title">
            Each listing is designed to be clear and concise, providing
            customers
          </p>
        </div>
      </div>
    </div>
    
    <Slider {...imgslideroption} className="service-slider  owl-carousel nav-center">
      {homeWork.map((res:any,index:number)=>{
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
          <div className="d-flex align-items-center justify-content-between mb-2">
            <Link
              to={routes.serviceDetails1}
              className="d-flex align-items-center mb-2 service-pro-info"
            >
              <span className="avatar avatar-sm me-2">
                <ImageWithBasePath
                  src={`assets/img/profiles/${res.Avatar}`}
                  alt="img"
                  className="img-fluid rounded-circle"
                />
              </span>
              <p className="fs-14">{res.Name}</p>
            </Link>
            <small className="mb-2">{res.Price}</small>
          </div>
          <h6 className="mb-2">
            <Link to="#">{res.Title}</Link>
          </h6>
          <div className="d-flex align-items-center justify-content-between">
            <p className="fs-14 mb-0">
              <i className="ti ti-star-filled text-warning me-1" />
              {res.Reviews}
            </p>
            <span className="badge badge-dark-transparent fw-medium p-2">
              {res.Bookings}
            </span>
          </div>
        </div>
        </div>
        )
    })}
    </Slider>
  </div>
</section>

  )
}

export default PreferredSection