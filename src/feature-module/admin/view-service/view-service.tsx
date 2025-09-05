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
import { Flex } from 'antd';


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
            .in("id", listing.city_id);
          city = data || [];
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


        // 9. Fetch additional services tag info
        let additionalWithNames: any[] = [];
        if (listing.additional?.length) {
          const additionalIds = listing.additional.map((a: any) => a.additionalService).filter(Boolean);
          const subServiceIds = listing.additional.map((a: any) => a.subService).filter(Boolean);

          const [additionalTags, subTags] = await Promise.all([
            additionalIds.length
              ? supabase.from("tags").select("id, category").in("id", additionalIds)
              : Promise.resolve({ data: [] }),
            subServiceIds.length
              ? supabase.from("sub_tags").select("id, category").in("id", subServiceIds)
              : Promise.resolve({ data: [] }),
          ]);

          additionalWithNames = listing.additional.map((a: any) => {
            const addTag = additionalTags.data?.find(t => t.id === a.additionalService);
            const subTag = subTags.data?.find(t => t.id === a.subService);
            return {
              ...a,
              additionalServiceName: addTag ? addTag.category : a.additionalService,
              subServiceName: subTag ? subTag.category : a.subService,
            };
          });
        }
        // Group services by additionalService
        const groupedServices = additionalWithNames.reduce((acc: any, item: any) => {
          // ✅ Skip rows without a valid additionalService
          if (!item.additionalService || !item.additionalServiceName) {
            return acc;
          }

          if (!acc[item.additionalService]) {
            acc[item.additionalService] = {
              name: item.additionalServiceName,
              services: [],
            };
          }
          acc[item.additionalService].services.push(item);
          return acc;
        }, {});


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
          additional: additionalWithNames,
          groupedServices,
        });
      } catch (err) {
        console.error("Error fetching service:", err);
      }
    };

    fetchService();
  }, [id]);
  const weekDays: string[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  console.log(service);
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-xl-8">
              <div className="serv-profile">
                <h2 style={{ textTransform: 'capitalize' }}>{service?.title} </h2>
                <span style={{ fontSize: '14px', color: '#777', paddingBottom: '10px', display: 'block' }}>
                  Since {service?.since}
                </span>
                <ul>
                  {service?.city?.map((tag: any, idx: number) => (
                    <li key={idx}><span className="badge">{tag.category}</span></li>
                  ))}
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
                  {/* 🟢 Services Section */}
                  {/* 🟢 Services Section */}
                  <div className="package-widget pack-service">
                    <h5>Services</h5>
                    {service?.groupedServices &&
                      Object.values(service.groupedServices).map((group: any, idx) => (
                        <div key={idx} style={{ marginBottom: "15px" }}>
                          {/* Header for Additional Service */}
                          <h6 style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                            {group.name}
                          </h6>
                          <ul>
                            {group.services.map((srv: any, i: number) => (
                              <li
                                key={i}
                                className="d-flex justify-content-between align-items-center"
                              >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <span style={{ textTransform: "capitalize" }}>
                                    {srv.subServiceName}
                                  </span>
                                  {srv.speciality && (
                                    <span className="badge bg-success ms-2">Speciality</span>
                                  )}
                                </div>
                                <div>
                                  <h6 style={{ margin: 0 }}>₹{srv.price}</h6>
                                  {srv.duration && (
                                    <small className="text-muted"> / {srv.duration}</small>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>


                  {/* 🟢 Extra Details */}
                  <div className="package-widget pack-service">
                    <h5>Extra Details</h5>
                    <ul>
                      {service?.extra_details && Object.entries(service.extra_details).map(([key, values]: [string, any], idx) => (
                        <li key={idx} style={{ flexWrap: "wrap" }}>
                          <div className="add-serving" style={{ width: '100%' }}>
                            <div className="add-serv-item">
                              <div className="add-serv-info">
                                {/* Capitalize key for label */}
                                <h6 style={{ textTransform: "capitalize" }}>
                                  {key.replace(/_/g, " ")}
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="add-serv-amt" style={{ width: '100%' }}>
                            {/* Render all values as badges */}
                            {Array.isArray(values) && values.length > 0 ? (
                              values.map((val, i) => (
                                <span key={i} className="badge" style={{ marginRight: "4px", marginBottom: '4px', backgroundColor: '#27c24c', color: '#fff', padding: '5px', fontSize: '13px' }}>
                                  {val.replace(/-/g, " ")}
                                </span>
                              ))
                            ) : (
                              <span className="text-muted">N/A</span>
                            )}
                          </div>
                        </li>
                      ))}
                      <li style={{ flexWrap: "wrap" }}>
                        <div className="add-serving" style={{ width: '100%' }}>
                          <div className="add-serv-item">
                            <div className="add-serv-info">
                              {/* Capitalize key for label */}
                              <h6 style={{ textTransform: "capitalize" }}>
                                Brand
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="add-serv-amt" style={{ width: '100%' }}>
                          <span className="badge" style={{ marginRight: "4px", marginBottom: '4px', backgroundColor: '#27c24c', color: '#fff', padding: '5px', fontSize: '13px' }}>
                            {service?.brand_name}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="card card-available">
                    <div className="card-body">
                      <div className="available-widget">
                        <div className="available-info">
                          <h5>Availability</h5>
                          <ul>
                            {weekDays.map((day) => {
                              const schedule = service?.availability?.perDay?.[day];
                              if (!schedule) return null;

                              return (
                                <li key={day}>
                                  <strong style={{ textTransform: "capitalize" }}>{day}</strong>{" "}
                                  {schedule.closed ? (
                                    <span className="text-danger">Closed</span>
                                  ) : schedule.slots?.length > 0 ? (
                                    <span>
                                      {schedule.slots.map((slot: any, idx: number) => (
                                        <span key={idx} style={{ marginRight: "8px" }}>
                                          {slot.from} - {slot.to}
                                          {slot.slots && ` (${slot.slots})`}
                                        </span>
                                      ))}
                                    </span>
                                  ) : (
                                    <span className="text-muted">No slots</span>
                                  )}
                                </li>
                              );
                            })}
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
                            <li>Title <br/><span style={{float:'left'}}>{service?.meta_title}</span></li>
                            <li>Slug <br/><span style={{float:'left'}}>{service?.slug}</span></li>
                            <li>Description <br/><span style={{float:'left'}}>{service?.meta_description}</span></li>
                            <li>Keywords<br/>
                              {service?.
                                meta_keywords?.map((tag: any, idx: number) => (
                                  <span key={idx} className="badge" style={{float:'left'}}>{tag}</span>
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
