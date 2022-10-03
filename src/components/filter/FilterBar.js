import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterCat from "./FilterCat";
import FilterPriceRange from "./FilterPriceRange";

export default function FilterBar({ filterProducts, filter }) {
  let [text, setText] = useState("");
  let [filterToggle, setFilterToggle] = useState(true);
  let [apply, setApply] = useState();
  let [veg, setVegState] = useState("");
  let [NonVeg, setNonVegState] = useState("");

  let setVeg = () => {
    setVegState("veg");
    setNonVegState("");
  };

  let setNonVeg = () => {
    setNonVegState("non-veg");
    setVegState("");
  };
  if (veg === "veg") {
    filter["hallmarks"] = veg;
  }
  if (NonVeg === "non-veg") {
    filter["hallmarks"] = NonVeg;
  }

  let getText = (event) => {
    setText(event.target.value);
  };
  let filterData = (event, option) => {
    let { value } = event.target;
    setApply(value, option);
    // console.log(value, option);
  };
  let Apply = (apply) => {
    console.log(apply);
  };

  return (
    <>
      <section className="bg-dark p-2">
        <div className="container">
          <div className="row d-lg-flex justify-content-lg-between d-flex flex-lg-row flex-column justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="form">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search anything..."
                  value={text}
                  onChange={(event) => getText(event)}
                />
                <div>
                  {text && (
                    <ul className="position-absolute col-12 list-unstyled">
                      {filterProducts
                        .filter((product) =>
                          product.name
                            .toLowerCase()
                            .includes(text.toLowerCase())
                        )
                        .map((product, index) => {
                          return (
                            <Link to={`/product-details/${product._id}`}>
                              {text === product.name ? null : (
                                <li
                                  className="bg-light border py-2 px-2 ps-4 d-flex align-items-center justify-content-between fs-5"
                                  onClick={() => setText(product.name)}
                                  key={index}
                                >
                                  <div className="">{product.name}</div>
                                  <div>
                                    <img
                                      src={`/images/${product.path}`}
                                      className="li-img"
                                      alt=""
                                    />
                                  </div>
                                </li>
                              )}
                            </Link>
                          );
                        })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            {/* ===== filter ===== */}
            <div className="col-lg-6 col-12 mt-lg-0 mt-2 d-flex align-items-center flex-wrap">
              <button
                className="btn btn-outline-light px-3 mt-2 mx-2 fs-5 "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="fa fa-tasks" aria-hidden="true"></i> Filters
              </button>
              <form action="">
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg mt-5">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title text-dark fs-3"
                          id="exampleModalLabel"
                        >
                          Filters
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      {/* ===== Filter toggle ======== */}

                      <section className="d-flex shop-filter-modal">
                        <div className="col-4 border">
                          <div className="border-bottom">
                            <h5
                              className={
                                filterToggle === true
                                  ? "text-dark p-2 py-5 border-start border-4 border-danger mb-0"
                                  : "text-dark p-2 py-5 border mt-0 mb-0"
                              }
                              onClick={() => setFilterToggle(true)}
                            >
                              Category
                            </h5>
                          </div>
                          <div className="border-bottom">
                            <h5
                              className={
                                filterToggle === false
                                  ? "text-dark p-2 py-5 border-start border-4 border-danger mb-0"
                                  : "text-dark p-2 py-5 border mt-0 mb-0"
                              }
                              onClick={() => setFilterToggle(false)}
                            >
                              Price Range
                            </h5>
                          </div>
                        </div>

                        {/* ===== filter content ===== */}

                        <div className="col-8 text-dark">
                          {filterToggle === true ? (
                            <FilterCat filterData={filterData} />
                          ) : (
                            <FilterPriceRange filterData={filterData} />
                          )}
                        </div>
                      </section>
                      <div className="modal-footer">
                        <input
                          type="reset"
                          value="Clear"
                          className="bg-transparent text-muted border-0 btn"
                        />
                        <button
                          type="button"
                          className="btn btn-danger px-5"
                          onClick={() => Apply(apply)}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* ==== FIlter map === */}
              <div>
                {veg === "" ? (
                  <button
                    className="btn btn-light fw-bold px-3 mt-2 mx-2 d-flex"
                    onClick={() => setVeg()}
                  >
                    <div className="mx-2">Veg</div>
                    <div>
                      <img
                        src="/images/assets/veg.png"
                        alt=""
                        className="veg-non-veg-logo "
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    className="btn btn-success fw-bold px-3 mt-2 mx-2 d-flex"
                    onClick={() => setVegState("")}
                  >
                    <div className="mx-2">Veg</div>
                    <div>
                      <i className="fa fa-multiply" aria-hidden="true"></i>
                    </div>
                  </button>
                )}
              </div>
              <div>
                {NonVeg === "" ? (
                  <button
                    className="btn btn-light fw-bold px-3 mt-2 mx-2 d-flex"
                    onClick={() => setNonVeg()}
                  >
                    <div className="mx-2">Non-Veg</div>
                    <div>
                      <img
                        src="/images/assets/non-veg.png"
                        alt=""
                        className="veg-non-veg-logo "
                      />
                    </div>
                  </button>
                ) : (
                  <button
                    className="btn btn-danger fw-bold px-3 mt-2 mx-2 d-flex"
                    onClick={() => setNonVegState("")}
                  >
                    <div className="mx-2">Non-Veg</div>
                    <div>
                      <i className="fa fa-multiply" aria-hidden="true"></i>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
