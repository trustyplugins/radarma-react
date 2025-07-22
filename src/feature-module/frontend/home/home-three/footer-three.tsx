import React from 'react';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';

const FooterThree = () => {
  const routes = all_routes;
  return (
    <>
      <footer className="footer footer-four">
        {/* Footer Top */}
        <div className="footer-top footer-top-four aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to={routes.homeOne}>
                      <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-content footer-content-three">
                    <p>
                    Online platform where you can discover and book services from a variety of salons and beauty professionals. From haircuts and styling to massages and manicures, we offer a convenient way to find the perfect service for your needs.
                    </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu footer-menu-three">
                  <h2 className="footer-title footer-title-three">Discover</h2>
                  <ul>
                    <li>
                      <Link to="#">Chicago</Link>
                    </li>
                    <li>
                      <Link to="#">Los Angeles</Link>
                    </li>
                    <li>
                      <Link to="#">Miami</Link>
                    </li>
                    <li>
                      <Link to="#">New York</Link>
                    </li>
                    <li>
                      <Link to="#">Los Vegas</Link>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu footer-menu-three">
                  <h2 className="footer-title footer-title-three">Category</h2>
                  <ul>
                    <li>
                      <Link to="#">Hair style </Link>
                    </li>
                    <li>
                      <Link to="#">Trimming</Link>
                    </li>
                    <li>
                      <Link to="#">Hair makeup</Link>
                    </li>
                    <li>
                      <Link to="#">Beard Trimming</Link>
                    </li>
                    <li>
                      <Link to="#">Box Haircuts</Link>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu footer-menu-three">
                  <h2 className="footer-title footer-title-three">
                    Quick Links
                  </h2>
                  <ul>
                    <li>
                      <Link to={routes.aboutUs}>About Us </Link>
                    </li>
                    <li>
                      <Link to={routes.termsCondition}>Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Support Center</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">User’s Guide</Link>
                    </li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu footer-menu-three">
                  <h2 className="footer-title footer-subtitle-three">
                  Contact Info
                  </h2>
                </div>
                <div className="footer-widget footer-menu footer-menu-three">
                  <h2 className="footer-title footer-subtitle-three fs-14">
                    Need live support?
                  </h2>
                  <p className="fs-16">truelysell@example.com</p>
                </div>
                <div className="footer-widget footer-menu footer-menu-three">
                  <h2 className="footer-title footer-subtitle-three fs-14">
                    Toll Free Customer Care
                  </h2>
                  <p className="fs-16">+91 26447 99875</p>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottoms">
				<div className="container">
					<div className="copyright">
						<div className="row align-items-center gy-3">
							<div className="col-lg-4 col-md-6 d-flex">
								<div className="copyright-text copyright-color">
									<p className="mb-0 fs-16">
										&copy; 2024 Truelysell. All Rights Reserved.
									</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6  d-flex justify-content-lg-center">
								<div className="copyright-menu">
									<ul className="policy-menu">
										<li>
											<Link to="#">Side Map</Link>
										</li>
										<li>
											<Link to={routes.privacyPolicy}>Privacy policy</Link>
										</li>
										<li>
											<Link to={routes.privacyPolicy}>Cookie Policy</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-6  d-flex justify-content-lg-center">
								<div className="copyright-menu">
									<ul className="policy-menu">
										<li>
											<Link to="#"><i className="ti ti-brand-facebook-filled"></i></Link>
										</li>
										<li>
											<Link to="#"><i className="ti ti-brand-twitter-filled"></i></Link>
										</li>
										<li>
											<Link to="#"><i className="ti ti-brand-instagram"></i></Link>
										</li>
										<li>
											<Link to="#"><i className="ti ti-brand-google-filled"></i></Link>
										</li>
										<li>
											<Link to="#"><i className="ti ti-brand-youtube-filled"></i></Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        {/* /Footer Bottom */}
      </footer>
    </>
  );
};

export default FooterThree;
