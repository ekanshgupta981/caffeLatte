import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="custom-footer">
        <section className="d-flex justify-content-lg-between justify-content-center border-bottom border-1 border-muted p-4 align-items-center ">
          <div className="text-light fs-5 d-lg-flex d-none">
            Get connected with us on Social Network
          </div>

          <div className="d-flex justify-content-around social-media-icons">
            <div>
              <i
                className="fa fa-facebook text-light mx-3 fb"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-twitter text-light mx-3 tweet"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-google text-light mx-3 google"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-instagram text-light mx-3 insta"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-linkedin text-light mx-3 linkdin"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-github text-light mx-3 git"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </section>
        <section>
          <section className="text-light small">
            <div className="container text-center text-md-start mt-2">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <div className="d-flex align-item-center">
                      <div className="mx-2">
                        <img
                          src="../images/assets/coffee logo.png"
                          alt=""
                          className="coffee-logo-2"
                        />
                      </div>
                      <div className="font-style-pop mt-1">Caffelatte</div>
                    </div>
                  </h6>
                  <p>
                    Our incredibly rate come from humble beginning in brazil
                    where decades of political turmoil once forced local farmers
                    to start growing khat, a narcotic native to the Arabian
                    peninsula.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a>MongodB</a>
                  </p>
                  <p>
                    <a>Express Js</a>
                  </p>
                  <p>
                    <a>React</a>
                  </p>
                  <p>
                    <a>Node js</a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a>Pricing</a>
                  </p>
                  <p>
                    <a>Settings</a>
                  </p>
                  <p>
                    <a>Orders</a>
                  </p>
                  <p>
                    <a>Help</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary"></i> India,
                    Delhi
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    caffeLatte@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary"></i> + 91
                    9845632104
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-secondary"></i> + 91
                    8547598212
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="d-flex justify-content-center border-1 border-top border-muted mt">
          <div>
            <h5 className="text-muted pt-2">© 2021 Copyright: Caffelatte</h5>
          </div>
        </section>
      </footer>
    </>
  );
}
