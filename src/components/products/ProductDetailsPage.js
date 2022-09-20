import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

export default function ProductDetailsPage({ addToCart }) {
  let params = useParams();
  let initProductDetails = {
    path: "",
    name: "",
    price: 0,
    amount: "",
    product_id: 0,
    quantity: 0,
    ingredient: "",
    hallmark: "",
    nutrition_value: {},
    catchPhrase: "",
    thumb: [],
  };
  let [productsDetails, setProductDetails] = useState({
    ...initProductDetails,
  });
  let [productImage, setProductImage] = useState(1);
  let [UserLogin, setUserLogin] = useState([]);

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
      amount: productsDetails.price,
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
        name:"ekansh",
        email: "ekansh@gmail.com,
        contact: "987654321",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  let getProductDetails = async () => {
    let URL =
      "https://caffelatte-api.herokuapp.com/api/get-product-by-id/" + params.id;
    try {
      let response = await axios.get(URL);
      let data = response.data;
      if (data.status === true) {
        setProductDetails({ ...data.result });
      } else {
        setProductDetails({ ...initProductDetails });
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  useEffect(() => {
   
    getProductDetails();
  }, []);
  return (
    <>
      {
        <section className="d-lg-flex overflow-hidden justify-content-center product-page">
          <div className=" col-lg-5 product-page-image-sec">
            <div className="d-flex justify-content-center product-image">
              {productImage === 1 ? (
                <img
                  src={`../images/${productsDetails.path}`}
                  alt="pic not found"
                  className="product-details-image"
                />
              ) : (
                <img
                  src={`../images/${productImage}`}
                  alt="pic not found"
                  className="product-details-image"
                />
              )}
            </div>
            <div className="d-flex justify-content-center position-sticky thumb-section">
              {/* ========> Thumb Images <============ */}

              {productsDetails.thumb.map((value, index) => {
                return (
                  <img
                    src={`../images/${value}`}
                    alt=""
                    key={index}
                    className={
                      productImage === value
                        ? "thumb mx-4 card cursor-pointer border-dark"
                        : "thumb mx-4 card cursor-pointer"
                    }
                    onClick={() => setProductImage(value)}
                  />
                );
              })}
            </div>
          </div>
          {productsDetails.hallmark === "veg" ? (
            <img
              src="..\images\assets\veg.png"
              className="veg-non-veg-logo mt-2 ms-5"
              alt=""
            />
          ) : (
            <img
              src="..\images\assets\non-veg.png"
              className="veg-non-veg-logo mt-2 ms-5"
              alt=""
            />
          )}
          <div className="col-lg-5">
            <section className="ps-5 mt-2 pt-2">
              <h2>{productsDetails.name}</h2>
              <strong className="mt-2">{productsDetails.price} ₹</strong>
              <p className="mt-2">100% organic {productsDetails.amount}</p>
              <p className="mt-3 col-10">{productsDetails.catchPhrase}</p>
              <div className="d-flex">
                <div className="d-flex flex-column col-11">
                  <button
                    className="btn btn-outline-dark fw-bold mt-4 py-2"
                    onClick={() => addToCart(productsDetails)}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-outline-dark fw-bold mt-4 py-2"
                    onClick={makePayment}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div
                className="d-flex justify-content-between col-11 mt-5 cursor-pointer fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#ingredient"
                aria-expanded="false"
                aria-controls="ingredient"
              >
                <p>Ingredient</p>
                <p>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </p>
              </div>
              <div class="collapse col-11" id="ingredient">
                <div class="card card-body">{productsDetails.ingredient}</div>
              </div>
              <div
                className="d-flex justify-content-between col-11 mt-1 cursor-pointer fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Nutritional"
                aria-expanded="false"
                aria-controls="Nutritional"
              >
                <p>Nutritional Information</p>
                <p>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </p>
              </div>
              <div class="collapse col-11" id="Nutritional">
                <div class="card card-body">
                  <ul className="d-flex justify-content-between flex-wrap w-100">
                    <li className="w-50 fw-bold">
                      fat: {productsDetails.nutrition_value.fat}
                    </li>
                    <li className="w-50 fw-bold">
                      protein: {productsDetails.nutrition_value.protein}
                    </li>
                    <li className="w-50 fw-bold mt-2">
                      energy: {productsDetails.nutrition_value.energy}
                    </li>
                    <li className="w-50 fw-bold mt-2">
                      kcal: {productsDetails.nutrition_value.kcal}
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
      }
    </>
  );
}
