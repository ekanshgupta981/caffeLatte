import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductsSlide from "./ProductSlide";

export default function HomePage({ productsDetails }) {
  let navigate = useNavigate();
  let AboutUsPage = () => {
    navigate("/about-us");
  };
  let goToShop = () => {
    navigate("/shop");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="col-12 overflow-hidden">
        <section className="sec-section">
          <header>
            <h1 className="font-style-san-serif">
              Start your Day with fresh coffee
            </h1>
            <div
              className="font-style-poppins order-button-2"
              onClick={goToShop}
            >
              Shop now
            </div>
          </header>
        </section>
        <section className="d-flex w-100 justify-content-center"></section>
        <section>
          <section className="custom-tray d-flex justify-content-center align-content-center h-100">
            <img src="/images/assets/tray.png" alt="" className="tray col-10" />
          </section>
          <section className="product-tray d-flex justify-content-center w-100">
            <ProductsSlide productsDetails={productsDetails} />
          </section>
          <div className="Second-bg">
            <div className="blur">
              <section className="d-flex justify-content-evenly product-section">
                <div className="hp-sec-bg-icons-section">
                  <div className="homepage-second-bg-icons mb-2 d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="../images/assets/coffee logo.png"
                      alt=""
                      className="coffee-logo"
                    />
                  </div>
                  <h5 className="text-light">AWESOME AROMA</h5>
                </div>
                <div className="hp-sec-bg-icons-section">
                  <div className="homepage-second-bg-icons mb-2 d-flex flex-column justify-content-center align-items-center">
                    <i
                      class="fa fa-certificate fa-2x text-light "
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h5 className="text-light">HIGH QUALITY</h5>
                </div>
                <div className="hp-sec-bg-icons-section">
                  <div className="homepage-second-bg-icons mb-2 d-flex flex-column justify-content-center align-items-center">
                    <i
                      class="fa fa-envira fa-2x text-light "
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h5 className="text-light">PURE GRADES</h5>
                </div>
                <div className="hp-sec-bg-icons-section">
                  <div className="homepage-second-bg-icons mb-2 d-flex flex-column justify-content-center align-items-center">
                    <i
                      class="fa fa-free-code-camp fa-2x text-light "
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h5 className="text-light">PROPER ROASTING</h5>
                </div>
              </section>

              {/* /////////////// */}

              <div className="d-flex justify-content-evenly col-12 mt-5 ">
                <div className="ms-lg-5 ">
                  <img
                    src="../images/assets/toa-heftiba-c1xazESBD9M-unsplash.jpg"
                    alt="loading"
                    className="story-image img-fluid"
                  />
                </div>
                <div className="text-light">
                  <h1 className="display-4 story-title fw-bold ms-lg-5 text-shadow">
                    Best Coffee House In Your Home Town
                  </h1>
                  <h4 className=" ms-lg-5 story-title-description col-lg-10 stroke">
                    Our incredibly rate come from humble beginning in brazil
                    where decades of political turmoil once forced local farmers
                    to start growing khat, a narcotic native to the Arabian
                    peninsula.
                  </h4>

                  <button
                    className=" ms-lg-5 px-3 p-1 mt-3 Special-button"
                    onClick={AboutUsPage}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
