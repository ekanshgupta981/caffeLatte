import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ShopLoader from "./ShopLoader";
import FilterBar from "../filter/FilterBar";
import axios from "axios";

export default function ShopPage({ setLoading, addToCart, isLoading }) {
  let [filterProducts, setFilterProducts] = useState([]);
  let filter = {};
  console.log(filter);
  let getFilterProductDetails = async () => {
    let URL = "https://caffelatte-api.herokuapp.com/api/filter";
    try {
      let response = await axios.post(URL, filter);
      let { result, status } = response.data;
      if (status) {
        setFilterProducts([...result]);
        setLoading(true);
      } else {
        alert("unable to get filter item");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterProductDetails();
  }, [filter]);
  useEffect(() => {
    setLoading(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FilterBar filterProducts={filterProducts} filter={filter} />
      {isLoading ? (
        <section className="pt-5">
          <div className="container-fluid">
            <div className="px-lg-5">
              <div className="row">
                {/* ====> food Items <======== */}

                {filterProducts.map((item, index) => {
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
                                Add To Cart
                              </button>
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
