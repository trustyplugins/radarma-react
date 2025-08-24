import React, { useState, useEffect } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { all_routes } from '../../../core/data/routes/all_routes';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useParams } from "react-router-dom";
import supabase from '../../../supabaseClient';


const ViewService = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);
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
  useEffect(() => {
    const fetchService = async () => {
      if (!id) return;

      try {
        // 1. Get listing details
        const { data: listing, error: listingErr } = await supabase
          .from("listings")
          .select("*")
          .eq("id", id)
          .single();

        if (listingErr) throw listingErr;
        if (!listing) return;

        // 2. Fetch city
        let city = null;
        if (listing.city_id) {
          const { data } = await supabase
            .from("cities")
            .select("id, category")
            .eq("id", listing.city_id)
            .single();
          city = data;
        }

        // 3. Fetch sectors
        let sectors: any[] = [];
        if (listing.sector_ids?.length) {
          const { data } = await supabase
            .from("sectors")
            .select("id, category")
            .in("id", listing.sector_ids);
          sectors = data || [];
        }

        // 4. Fetch main categories
        let mainCategories: any[] = [];
        if (listing.main_category_ids?.length) {
          const { data } = await supabase
            .from("main_categories")
            .select("id, category")
            .in("id", listing.main_category_ids);
          mainCategories = data || [];
        }

        // 5. Fetch sub categories
        let subCategories: any[] = [];
        if (listing.sub_category_ids?.length) {
          const { data } = await supabase
            .from("sub_categories")
            .select("id, category")
            .in("id", listing.sub_category_ids);
          subCategories = data || [];
        }

        // 6. Fetch tags
        let tags: any[] = [];
        if (listing.tag_ids?.length) {
          const { data } = await supabase
            .from("tags")
            .select("id, category")
            .in("id", listing.tag_ids);
          tags = data || [];
        }

        // 7. Fetch sub tags
        let subTags: any[] = [];
        if (listing.sub_tag_ids?.length) {
          const { data } = await supabase
            .from("sub_tags")
            .select("id, category")
            .in("id", listing.sub_tag_ids);
          subTags = data || [];
        }

        // 8. Fetch provider info
        let provider = null;
        if (listing.user_id) {
          const { data } = await supabase
            .from("rd_users")
            .select("name, email, role")
            .eq("user_id", listing.user_id)
            .single();
          provider = data;
        }

        // Combine into one object
        setService({
          ...listing,
          city,
          sectors,
          mainCategories,
          subCategories,
          tags,
          subTags,
          provider,
        });
      } catch (err) {
        console.error("Error fetching service:", err);
      }
    };

    fetchService();
  }, [id]);

  console.log(service);
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-xl-8">
              <div className="serv-profile">
                <h2 style={{ textTransform: 'capitalize' }}>{service?.title}</h2>
                <ul>

                  <li><span className="badge">{service?.city?.category}</span></li>

                  {service?.sectors?.map((tag: any, idx: number) => (
                    <li key={idx}><span className="badge">{tag.category}</span></li>
                  ))}
                  {service?.
                    mainCategories?.map((tag: any, idx: number) => (
                      <li key={idx}><span className="badge">{tag.category}</span></li>
                    ))}
                  {service?.
                    subCategories?.map((tag: any, idx: number) => (
                      <li key={idx}><span className="badge">{tag.category}</span></li>
                    ))}
                  {service?.
                    tags?.map((tag: any, idx: number) => (
                      <li key={idx}><span className="badge">{tag.category}</span></li>
                    ))}
                  {service?.
                    subTags?.map((tag: any, idx: number) => (
                      <li key={idx}><span className="badge">{tag.category}</span></li>
                    ))}
                </ul>

              </div>

              <div className="service-images big-gallery">
                {service?.gallery_urls?.length > 0 && (
                  <>
                    <img src={service.gallery_urls[0]} className="img-fluid" alt="Service" />
                    <Link to="#" className="btn btn-show" onClick={() => setOpen(true)}>
                      <i className="feather-image me-2" /> Show all photos
                    </Link>
                    <Lightbox
                      open={open}
                      close={() => setOpen(false)}
                      slides={service.gallery_urls.map((url: string) => ({ src: url }))}
                    />
                  </>
                )}
              </div>
              <div className="map-grid">
                {service?.lat && service?.lng && (
                  <iframe
                    src={`https://www.google.com/maps?q=${service.lat},${service.lng}&hl=es;z=14&output=embed`}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="contact-map"
                  />
                )}
              </div>
              <div className="service-wrap">
                <h5>Listing Description</h5>
                <p>{service?.description}</p>
              </div>

            </div>
            <div className="col-xl-4">
              <div className="card card-provide">
                <div className="card-body">
                  <div className="provide-widget">
                    <div className="service-amount">
                      <h5 style={{ textTransform: 'capitalize' }}>{service?.provider?.name}</h5>
                      {/* <p className="serv-review"><i className="fa-solid fa-star"></i> <span>4.9 </span>(255 reviews)</p> */}
                      <p className="serv-review" style={{ paddingTop: '5px' }}> {service?.provider?.email} </p>
                    </div>
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
                    <h5>Video Link</h5>
                    <ul>
                      <li>{service?.video_url}</li>
                    </ul>
                  </div>
                  <div className="package-widget pack-service">
                    <h5>Additional Service</h5>
                    <ul>
                      {service?.
                        additional?.map((tag: any, idx: number) => (
                          <li key={idx}>
                            <div className="add-serving">
                              <div className="add-serv-item">
                                <div className="add-serv-info">
                                  <h6>{tag.additionalService}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="add-serv-amt">
                              <h6>{tag.price}</h6>
                            </div>

                          </li>
                        ))}

                    </ul>
                  </div>
                  <div className="card card-available">
                    <div className="card-body">
                      <div className="available-widget">
                        <div className="available-info">
                          <h5>Availability</h5>
                          <ul>
                            <li>
                              Sunday <span>{service?.availability?.perDay.sunday[0]?.to} -{service?.availability?.perDay.sunday[0]?.from}</span>{' '}
                            </li>
                            <li>
                              Monday <span>{service?.availability?.perDay.monday[0]?.to} -{service?.availability?.perDay.monday[0]?.from}</span>{' '}
                            </li>
                            <li>
                              Tuesday <span>{service?.availability?.perDay.tuesday[0]?.to} -{service?.availability?.perDay.tuesday[0]?.from}</span>{' '}
                            </li>
                            <li>
                              Wednesday <span>{service?.availability?.perDay.wednesday[0]?.to} -{service?.availability?.perDay.wednesday[0]?.from}</span>{' '}
                            </li>
                            <li>
                              Thursday <span>{service?.availability?.perDay.thursday[0]?.to} -{service?.availability?.perDay.thursday[0]?.from}</span>{' '}
                            </li>
                            <li>
                              Friday <span>{service?.availability?.perDay.friday[0]?.to} -{service?.availability?.perDay.friday[0]?.from}</span>{' '}
                            </li>
                            <li>
                              Saturday <span>{service?.availability?.perDay.saturday[0]?.to} -{service?.availability?.perDay.saturday[0]?.from}</span>{' '}
                            </li>
                            <li>
                              Sunday <span>{service?.availability?.perDay.sunday[0]?.to} -{service?.availability?.perDay.sunday[0]?.from}</span>{' '}
                            </li>
                            {/* <li>
                              Sunday <span className="text-danger">Closed</span>{' '}
                            </li> */}


                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-available">
                    <div className="card-body">
                      <div className="available-widget">
                        <div className="available-info">
                          <h5>Meta Seo </h5>
                          <ul>
                            <li>Title <span>{service?.meta_title}</span></li>
                            <li>Slug <span>{service?.slug}</span></li>
                            <li>Description <span>{service?.meta_description}</span></li>
                            <li>Keywords
                              {service?.
                                meta_keywords?.map((tag: any, idx: number) => (
                                  <span key={idx} className="badge">{tag}</span>
                                ))}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
