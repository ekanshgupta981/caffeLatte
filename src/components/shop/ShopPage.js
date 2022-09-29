import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ShopLoader from "./ShopLoader";
import FilterBar from "./FilterBar";

export default function ShopPage({ productsDetails, addToCart, isLoading }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FilterBar productsDetails={productsDetails} />
      {isLoading ? (
        <section className="pt-5">
          <div className="container-fluid">
            <div className="px-lg-5">
              <div className="row">
                {/* ====> food Items <======== */}

                {productsDetails.map((item, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4 col-md-6 mb-4"
                      key={index}
                    >
                      <div className="bg-white rounded shadow-sm border">
                        <Link to={`/product-details/${item._id}`}>
                          <abbr title="Click To See Product Details">
                            <img
                              src={`/images/${item.path}`}
                              alt=""
                              className="card-img-top shop-page-images cursor-pointer"
                            />
                          </abbr>
                        </Link>
                        <div className="p-4 bg-light card-details">
                          <div className="d-flex">
                            <h6 className="me-3 overflow-hidden">
                              <a className="text-dark">{item.name}</a>
                            </h6>
                            {item.hallmark === "veg" ? (
                              <abbr title="100% veg">
                                <img
                                  src="../images/assets/veg.png"
                                  alt=""
                                  className="veg-non-veg-logo mb-3"
                                />
                              </abbr>
                            ) : (
                              <abbr title="Non-veg">
                                <img
                                  src="../images/assets/non-veg.png"
                                  alt=""
                                  className="veg-non-veg-logo mb-3"
                                />
                              </abbr>
                            )}
                          </div>

                          <div className="catchPhrase">
                            <Scrollbars>
                              <p className="small text-muted mb-0 cathPhrase">
                                {item.catchPhrase}
                              </p>
                            </Scrollbars>
                          </div>

                          <div className="d-flex align-items-center justify-content-between  px-3 py-2 mt-4">
                            <div>
                              <h4>₹{item.price}</h4>
                            </div>
                            <p className="small mb-0">
                              <button
                                className=" Special-button-2 px-4 py-1 font-weight-bold"
                                onClick={() => addToCart(item)}
                              >
                                <ToastContainer
                                  position="top-center"
                                  autoClose={3000}
                                  hideProgressBar
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                />
                                Add To Cart
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <ShopLoader />
      )}
    </>
  );
}
