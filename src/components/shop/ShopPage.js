import React, { useEffect } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import ShopLoader from "./ShopLoader";

export default function ShopPage({ productsDetails, addToCart, isLoading }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoading ? (
        <section className="  pt-5">
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
                            {isLoading ? (
                              <img
                                src={`/images/${item.path}`}
                                alt=""
                                className="card-img-top shop-page-images cursor-pointer"
                              />
                            ) : (
                              <div className="">
                                <Skeleton height={250} />
                              </div>
                            )}
                          </abbr>
                        </Link>
                        <div className="p-4 bg-light card-details">
                          {isLoading ? (
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
                          ) : (
                            <div className="pb-2">
                              <Skeleton height={30} width={200} />
                            </div>
                          )}

                          {isLoading ? (
                            <div className="catchPhrase">
                              <Scrollbars>
                                <p className="small text-muted mb-0 cathPhrase">
                                  {item.catchPhrase}
                                </p>
                              </Scrollbars>
                            </div>
                          ) : (
                            <Skeleton count={4} width={250} />
                          )}
                          {isLoading ? (
                            <div className="d-flex align-items-center justify-content-between  px-3 py-2 mt-4">
                              <div>
                                <h4>₹{item.price}</h4>
                              </div>
                              <p className="small mb-0">
                                <button
                                  className=" Special-button-2 px-4 py-1 font-weight-bold"
                                  onClick={() => addToCart(item)}
                                >
                                  Add To Cart
                                </button>
                              </p>
                            </div>
                          ) : (
                            <div className="mt-2">
                              <Skeleton height={30} />
                            </div>
                          )}
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
