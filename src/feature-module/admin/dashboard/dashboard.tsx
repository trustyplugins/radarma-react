import React, { useEffect, useState, useRef } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import ReactApexChart from 'react-apexcharts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';
import supabase from '../../../supabaseClient';
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import {
  AdminDashboardInterface,
  AdminDashboardOne,
  AdminDashboardTwo,
} from '../../../core/models/interface';
import { AdminDashboardThree } from '../../../core/data/json/admin-dashboard3';

const Dashboard = () => {
  const routes = all_routes;
  const [listings, setListings] = useState<{ id: number; lat: number; lng: number; title?: string }[]>([]);
  const [recentListings, setRecentListings] = useState<any[]>([]);
  // const { isLoaded } = useJsApiLoader({
  //   id: "global-google-maps-loader",
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  //   libraries: ["places"],
  // });
  const mapRef = useRef<google.maps.Map | null>(null);
  const [stats, setStats] = useState({
    users: 0,
    listings: 0,
    mainCategories: 0,
    subCategories: 0,
  });
  useEffect(() => {
    const fetchListings = async () => {
      const { data, error } = await supabase
        .from("listings")
        .select("*");

      if (!error && data) {
        setListings(data.filter((l) => l.lat && l.lng)); // only with coords
      } else {
        console.error("Error fetching listings for map:", error);
      }
    };

    fetchListings();
  }, []);
  // ✅ Fetch only 5 most recent listings
  useEffect(() => {
    const fetchRecent = async () => {
      const { data, error } = await supabase
        .from("listings")
        .select("id, title, created_at, user_id") // adjust fields you need
        .order("created_at", { ascending: false })
        .limit(5);

      if (!error && data) {
        setRecentListings(data);
      } else {
        console.error("Error fetching recent listings:", error);
      }
    };
    fetchRecent();
  }, []);
  // ⬇️ Auto fit bounds when listings change
  useEffect(() => {
    if (mapRef.current && listings.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      listings.forEach((l) => {
        bounds.extend({ lat: Number(l.lat), lng: Number(l.lng) });
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [listings]);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // total users
        const { count: userCount } = await supabase
          .from("rd_users")
          .select("*", { count: "exact", head: true });


        const { count: mainCategoriesCount } = await supabase
          .from("main_categories")
          .select("*", { count: "exact", head: true });


        // total listings
        const { count: listingCount } = await supabase
          .from("listings")
          .select("*", { count: "exact", head: true });


        const { count: subCategoriesCount } = await supabase
          .from("sub_categories")
          .select("*", { count: "exact", head: true });

        setStats({
          users: userCount || 0,
          mainCategories: mainCategoriesCount || 0,
          listings: listingCount || 0,
          subCategories: subCategoriesCount || 0,
        });
      } catch (err) {
        console.error("Error fetching stats", err);
      }
    };

    fetchStats();
  }, []);

  const serviceImage3 = (rowData: AdminDashboardInterface) => {
    const [service] = rowData.service.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath
          src={rowData.serviceImg}
          className="me-2"
          alt="img"
        />
        <span>{service}</span>
      </Link>
    );
  };
  const userImage = (rowData: AdminDashboardInterface) => {
    const [user] = rowData.user.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath src={rowData.userImg} className="me-2" alt="img" />
        <span>{user}</span>
      </Link>
    );
  };
  const providerImage = (rowData: AdminDashboardInterface) => {
    const [provider] = rowData.provider.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath
          src={rowData.providerImg}
          className="me-2"
          alt="img"
        />
        <span>{provider}</span>
      </Link>
    );
  };


  const data3 = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    (state: AdminDashboardThree) => state.admin_dashboard_3,
  );
  //console.log(listings);
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/user.svg"
                          alt="img"
                        />
                      </span>
                      <h6>User</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link to="/users" className="dropdown-item">
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link to="/users" className="dropdown-item">
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={30}>
                          {stats.users}
                        </span>
                      </div>
                      <h5> Total</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph1.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user home-provider">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/user-circle.svg"
                          alt="img"
                        />
                      </span>
                      <h6>Listings</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link
                            to='/services/all-services'
                            className="dropdown-item"
                          >
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link to='/services/all-services' className="dropdown-item">
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={25}>
                          {stats.listings}
                        </span>
                      </div>
                      <h5> Total</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph2.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user home-service">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/service.svg"
                          alt="img"
                        />
                      </span>
                      <h6>Categories</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link
                            to='/categories/main-categories'
                            className="dropdown-item"
                          >
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link
                            to='/categories/main-categories'
                            className="dropdown-item"
                          >
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={18}>
                          {stats.mainCategories}
                        </span>
                      </div>
                      <h5> Total</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph3.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user home-subscription">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/money.svg"
                          alt="img"
                        />
                      </span>
                      <h6>Sub Categories</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link
                            to='/categories/sub-categories'
                            className="dropdown-item"
                          >
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories/sub-categories" className="dropdown-item">
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={650}>
                          {stats.subCategories}
                        </span>
                      </div>
                      <h5> Total</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph4.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-6 col-sm-6 col-12 d-flex  widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user">
                    <h2>Revenue</h2>
                    <div className="home-select">
                      <div className="dropdown">
                        <button
                          className="btn btn-action btn-sm dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Monthly
                        </button>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              Weekly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Monthly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Yearly
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <Link
                          className="delete-table bg-white"
                          to="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </Link>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              View
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chartgraph">
                    <ReactApexChart
                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                      options={Revenue}
                      series={Revenue.series}
                      type="area"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12 d-flex  widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user">
                    <h2>Booking Summary</h2>
                    <div className="home-select">
                      <div className="dropdown">
                        <button
                          className="btn btn-action btn-sm dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Monthly
                        </button>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              Weekly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Monthly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Yearly
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <Link
                          className="delete-table bg-white"
                          to="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </Link>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              View
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chartgraph">
                    
                    <ReactApexChart                    
                      options={chartData}
                      series={chartData.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-lg-6 col-sm-12 d-flex widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Top Services</h2>
                    <Link to={routes.allServices} className="btn btn-viewall">
                      View All
                      <ImageWithBasePath
                        src="assets/admin/img/icons/arrow-right.svg"
                        className="ms-2"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="table-responsive datatable-nofooter">
                    <table className="table datatable">
                      <DataTable
                        paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        value={data1}
                      >
                        <Column sortable field="#" header="#"></Column>
                        <Column
                          sortable
                          field="service"
                          header="Service"
                          body={serviceImage1}
                        ></Column>
                        <Column
                          sortable
                          field="category"
                          header="Category"
                        ></Column>
                        <Column
                          sortable
                          field="amount"
                          header="Amount"
                        ></Column>
                      </DataTable>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Top Providers</h2>
                    <Link to={routes.provider} className="btn btn-viewall">
                      View All
                      <ImageWithBasePath
                        src="assets/admin/img/icons/arrow-right.svg"
                        className="ms-2"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="table-responsive datatable-nofooter">
                    <table className="table datatable ">
                      <DataTable
                        paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        value={data2}
                      >
                        <Column sortable field="#" header="#"></Column>
                        <Column
                          sortable
                          field="providerName"
                          header="Provider Name"
                          body={serviceImage2}
                        ></Column>
                        <Column sortable field="email" header="Email"></Column>
                        <Column sortable field="phone" header="Phone"></Column>
                      </DataTable>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-lg-12 col-sm-12 d-flex widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Top Countries</h2>

                  </div>
                  <div className="chartgraph">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div id="world_map" />
                        <div style={{ height: '400px', width: '100%' }}>
                         
                          <div style={{ height: "400px", width: "100%" }}>
                            {isLoaded ? (
                              <GoogleMap
                                mapContainerStyle={{ width: "100%", height: "100%", borderRadius: 8 }}
                                center={{ lat: 22.9734, lng: 78.6569 }} // fallback India
                                zoom={5}
                                onLoad={(map) => (mapRef.current = map)}
                                options={{ streetViewControl: false, fullscreenControl: false }}
                              >
                                {listings.map((l) => (
                                  <MarkerF
                                    key={l.id}
                                    position={{ lat: Number(l.lat), lng: Number(l.lng) }}
                                    title={l.title}
                                  />
                                ))}
                              </GoogleMap>
                            ) : (
                              <div>Loading Map…</div>
                            )}
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div> */}
        <div className="row">
          <div className="col-lg-12 widget-path">
            <div className="card mb-0">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Recent Listings</h2>
                    <Link to="/services/all-services" className="btn btn-viewall">
                      View All
                      <ImageWithBasePath
                        src="assets/admin/img/icons/arrow-right.svg"
                        className="ms-2"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="table-responsive datatable-nofooter">
                    <table className="table datatable">
                      <DataTable
                        paginator={false}
                        value={recentListings}
                        emptyMessage="No listings found"
                      >
                        <Column field="title" header="Title" />

                        {/* Date column */}
                        <Column
                          header="Date"
                          body={(row) =>
                            new Date(row.created_at).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          }
                        />

                        {/* Time column */}
                        <Column
                          header="Time"
                          body={(row) =>
                            new Date(row.created_at).toLocaleTimeString("en-IN", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          }
                        />



                      </DataTable>


                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;