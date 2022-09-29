import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FilterBar({ productsDetails }) {
  let [text, setText] = useState("");
  let getText = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <section className="bg-dark p-2">
        <div className="container">
          <div className="row height d-flex justify-content-lg-start justify-content-center align-items-center">
            <div className="col-md-6">
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
                      {productsDetails
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
                                  key={index}
                                  onClick={() => setText(product.name)}
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
          </div>
        </div>
      </section>
    </>
  );
}
