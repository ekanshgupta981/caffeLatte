import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart(props) {
  let { cartItems, SetCartItems } = props;
  let [subtotal, setSubTotal] = useState([]);

  // ======> payment <======= //
  let loadScript = async () => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://checkout.razorpay.com/v1/checkout.js";
    scriptElement.onload = () => {
      return true;
    };
    scriptElement.onerror = () => {
      return false;
    };
    document.body.appendChild(scriptElement);
  };
  let makePayment = async () => {
    let isLoaded = await loadScript();
    if (isLoaded === false) {
      alert("Unable load payment sdk");
      return false;
    }

    let URL = "https://caffelatte-api.herokuapp.com/api/payment";
    let sendData = {
      amount: subtotal,
      email: "ekanshgurmon@gmail.com",
    };

    let { data } = await axios.post(URL, sendData);
    let { order } = data;

    var options = {
      key: "rzp_test_acWoqsX0P1QU3u",
      amount: order.amount,
      currency: "INR",
      name: "Caffelatte",
      description: "This is a food payment",
      image: "../images/assets/apple-icon-120x120.png",
      order_id: order.id,
      handler: async function (response) {
        let URL = "https://caffelatte-api.herokuapp.com/api/callback";
        let sendData = {
          payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        let { data } = await axios.post(URL, sendData);
        if (data.status === true) {
          Swal.fire({
            icon: "success",
            title: "payment Successful",
          }).then(() => {
            window.location.assign("/"); //send home page
          });
        } else {
          alert("payment fails, try again.");
        }
      },
      prefill: {
        name: "Ekansh",
        email: "Ekansh@gmail.com",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  let removeItem = (id) => {
    Swal.fire({
      title: "Are you sure? you want to remove this item",
      text: "You can add again via shop",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let newCartItems = cartItems.filter((cartItems) => {
          return cartItems._id !== id;
        });
        SetCartItems([...newCartItems]);
        Swal.fire("Removed!", "1 items has been removed.", "success");
      }
    });
  };
  let cartReset = () => {
    Swal.fire({
      title: "Are you sure? you want Reset cart",
      text: "You can add again via shop",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Reset!", "Cart Reset.", "success");
        window.location.reload();
      }
    });
  };
  let addQuantity = (index) => {
    let newCartItem = [...cartItems];
    newCartItem[index].quantity += 1;
    SetCartItems(newCartItem);
  };
  let subtract = (index) => {
    let newCartItem = [...cartItems];
    newCartItem[index].quantity -= 1;
    SetCartItems(newCartItem);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let total = cartItems.reduce((pValue, cValue) => {
      return pValue + cValue.price * cValue.quantity;
    }, 0);
    setSubTotal(total);
  }, [cartItems]);
  return (
    <>
      <section className="Cart-section overflow-hidden p-lg-5 p-1">
        <div className="w-100 d-flex justify-content-between">
          <div>
            <h5>Shopping Cart</h5>
            <p className="small text-muted">
              You have {cartItems.length} items in your cart
            </p>
          </div>
          <div>
            {cartItems.length === 0 ? null : (
              <button
                className="btn btn-outline-danger me-3 px-4 fw-bold"
                onClick={() => cartReset()}
              >
                Reset Cart
              </button>
            )}
          </div>
        </div>
        <div className="card card-card shadow">
          <section className="d-lg-flex h-100">
            <div className="col-lg-9 h-100 col-12">
              {cartItems.length === 0 ? (
                <div className="d-flex justify-content-center">
                  <img
                    src="../images/assets/empty-cart.jpg"
                    alt=""
                    className="empty-cart mt-3"
                  />
                </div>
              ) : (
                <Scrollbars>
                  {cartItems.map((cartItems, index) => {
                    return (
                      <div className="p-1 " key={index}>
                        <div className="d-flex align-items-center mt-3 justify-content-between col-lg-11 ms-2">
                          <Link to={`/product-details/${cartItems._id}`}>
                            <abbr title="Click to see product details">
                              <img
                                src={`../images/${cartItems.path}`}
                                className="cart-sec-image img-fluid col-lg-4 col-3 cursor-pointer"
                                alt=""
                              />
                            </abbr>
                          </Link>
                          <div className="col-lg-4 col-3">
                            <h6 className="mb-1 cart-product-name">
                              {cartItems.name}
                            </h6>
                            <p className="small text-muted mb-1 cart-product-amount">
                              100% Organic {cartItems.amount}
                            </p>
                            <h6 className="mt-0 pt-0 cart-product-price">
                              ₹{cartItems.price}
                            </h6>
                          </div>
                          <div className="">
                            {cartItems.quantity === 1 ? (
                              <span className="mx-lg-2 cursor-pointer">
                                <i
                                  className="fa fa-minus"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            ) : (
                              <span
                                className="mx-lg-2 cursor-pointer "
                                onClick={() => subtract(index)}
                              >
                                <i
                                  className="fa fa-minus noselect"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            )}
                            <span className="border px-3 mx-lg-2 noselect">
                              {cartItems.quantity}
                            </span>
                            <span
                              className="mx-lg-2  cursor-pointer noselect"
                              onClick={() => addQuantity(index)}
                            >
                              <i className="fa fa-plus " aria-hidden="true"></i>
                            </span>
                          </div>
                          <div className="">
                            <i
                              className="fa fa-trash-o text-danger cursor-pointer"
                              aria-hidden="true"
                              onClick={() => removeItem(cartItems._id)}
                            ></i>
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </Scrollbars>
              )}
            </div>
            {/*============ cart total ========= */}
            <div className="shadow col-lg-3 col-12 bg-light cart-total-sec p-2">
              {cartItems.length === 0 ? (
                <div className="d-lg-flex flex-lg-column d-none align-items-center justify-content-center">
                  <img
                    src="../images/assets/no-data.jpg"
                    alt=""
                    className="no-data-cart"
                  />
                  <h5>Your Cart is Empty</h5>
                </div>
              ) : (
                <div className="d-lg-flex justify-content-lg-evenly d-none mt-lg-5">
                  <div className="d-flex flex-column align-items-center">
                    <i class="fa fa-shield text-success" aria-hidden="true"></i>
                    <h6 className="mt-1">Secure Payment</h6>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <i class="fa fa-truck text-success" aria-hidden="true"></i>
                    <h6 className="mt-1">Fast Delivery</h6>
                  </div>
                </div>
              )}
              {cartItems.length === 0 ? null : (
                <div className="d-flex flex-column align-items-center justify-content-center purchase-button pb-lg-0 pb-4 border-top border-dark">
                  <div className="mt-4 d-flex mb-3 align-items-center">
                    <h5 className="me-5">SubTotal:</h5>
                    <h5 className="fw-bold">₹{subtotal}</h5>
                  </div>
                  <button
                    className="btn btn-outline-dark fw-bold p-2 col-10"
                    onClick={makePayment}
                  >
                    Proceed To Buy ( {cartItems.length} item )
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
