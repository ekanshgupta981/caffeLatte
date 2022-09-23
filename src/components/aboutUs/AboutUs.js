import React from "react";
import { useEffect } from "react";

export default function AboutUs({ aboutUsPage, setAboutUsPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="aboutUs-sec blur-2">
        <div className="blur">
          <div className="d-flex justify-content-center">
            <div className="col-lg-9 col-11 about-us-card">
              <div className="d-flex mt-5 ms-2 border-bottom border-light col-8 pb-2">
                <h5
                  className={
                    aboutUsPage === 1
                      ? "text-danger mx-3 cursor-pointer"
                      : "text-light mx-3 cursor-pointer"
                  }
                  onClick={() => setAboutUsPage(1)}
                >
                  Who we are?
                </h5>
                <h5
                  className={
                    aboutUsPage === 2
                      ? "text-danger mx-3 cursor-pointer"
                      : "text-light mx-3 cursor-pointer"
                  }
                  onClick={() => setAboutUsPage(2)}
                >
                  Our Partners
                </h5>
                <h5
                  className={
                    aboutUsPage === 3
                      ? "text-danger mx-3 cursor-pointer"
                      : "text-light mx-3 cursor-pointer"
                  }
                  onClick={() => setAboutUsPage(3)}
                >
                  Contact Info
                </h5>
                <h5
                  className="text-light mx-3 cursor-pointer"
                  onClick={() => setAboutUsPage(4)}
                >
                  Follow Us
                </h5>
              </div>
              <div className="about-us-content overflow-hidden">
                {/* === Who We Are === */}
                {aboutUsPage === 1 ? (
                  <h2 className="text-light col-7 mt-3 ms-3">
                    Our incredibly rate come from humble beginning in brazil
                    where decades of political turmoil once forced local farmers
                    to start growing khat, a narcotic native to the Arabian
                    peninsula. Since That Day we are selling coffee and now we
                    have over 1000 branch all over the world..
                  </h2>
                ) : (
                  []
                )}
                {aboutUsPage === 2 ? (
                  <div className="d-flex justify-content-center flex-column align-items-center col-7">
                    <span className="border-bottom border-light col-5 d-flex justify-content-center">
                      <h4 className="text-light mt-4 ">Our Partners</h4>
                    </span>
                    <img
                      src="/images/assets/pngegg.png"
                      alt=""
                      className="partners-image mt-4"
                    />
                  </div>
                ) : (
                  []
                )}
                {aboutUsPage === 3 ? (
                  <div className="d-flex justify-content-center flex-column ms-5 mt-5 col-7">
                    <div className="">
                      <div className="text-light">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>
                          <i className="fas fa-home me-3 text-secondary"></i>{" "}
                          India, Delhi
                        </p>
                        <p>
                          <i className="fas fa-envelope me-3 text-secondary"></i>
                          caffeLatte@gmail.com
                        </p>
                        <p>
                          <i className="fas fa-phone me-3 text-secondary"></i> +
                          91 9845632104
                        </p>
                        <p>
                          <i className="fas fa-print me-3 text-secondary"></i> +
                          91 8547598212
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  []
                )}
              </div>
              <div className="text-light about-us-cafe-logo">
                <h4 className="font-style-pop display-4">CaffeLatte</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
