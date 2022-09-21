import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Login from "./login/Login";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

export default function TopNav({ cartItems, setAboutUsPage }) {
  let [UserLogin, setUserLogin] = useState(null);
  let userLogout = () => {
    Swal.fire({
      title: "Are you sure to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Auth_Token_Caffelatee");
        window.location.reload();
      }
    });
  };
  let onSuccess = (response) => {
    let token = response.credential;
    localStorage.setItem("Auth_Token_Caffelatee", token);

    Swal.fire({
      icon: "success",
      title: "Login Successful",
    }).then(() => {
      window.location.reload();
    });
  };
  let onError = () => {
    alert("something went wrong try again");
  };

  useEffect(() => {
    let token = localStorage.getItem("Auth_Token_Caffelatee");
    if (token) {
      var decoded = jwt_decode(token);
      setUserLogin(decoded);
    } else {
      setUserLogin(null);
    }
  }, []);

  // ========== //

  let navigate = useNavigate();
  let goToHomePage = () => {
    navigate("/");
  };
  let AboutUsPage = () => {
    navigate("/about-us");
  };
  let goToCart = () => {
    navigate("/cart");
  };
  let goToShop = () => {
    navigate("/shop");
  };
  let goToContact = () => {
    navigate("/about-us");
    setAboutUsPage(3);
  };
  let params = window.location.href;

  return (
    <>
      <section className="top-nav bg-light border border-bottom">
        <div className="font-style-pop logo" onClick={() => goToHomePage()}>
          Caffelatte
        </div>

        <input type="checkbox" name="" id="click" />
        <label htmlFor="click" className="menu-bar">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </label>
        <div className="nav-content font-style-poppins">
          <button
            onClick={() => goToHomePage()}
            className={params === "http://localhost:3000/" ? "text-danger" : ""}
          >
            <i className="fa fa-home" aria-hidden="true"></i> Home
          </button>
          <button
            onClick={() => AboutUsPage()}
            className={
              params === "http://localhost:3000/about-us" ? "text-danger" : ""
            }
          >
            <i className="fa fa-info" aria-hidden="true"></i> About us
          </button>

          {UserLogin === null ? (
            <button
              className="border-0"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              <i className="fa fa-bell" aria-hidden="true"></i> Login
            </button>
          ) : (
            <div>
              <button
                className="btn btn-light ms-2 Logout-icon"
                onClick={userLogout}
              >
                Logout
                <i className="ms-2 fa fa-sign-out " aria-hidden="true"></i>
              </button>
            </div>
          )}

          <button
            onClick={() => goToCart()}
            className={
              params === "http://localhost:3000/cart" ? "text-danger" : ""
            }
          >
            <i
              className="fa fa-shopping-cart position-relative"
              aria-hidden="true"
            ></i>
            {cartItems.length === 0 ? null : (
              <span className="position-absolute badge small translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            )}
            Cart
          </button>
          <button onClick={() => goToContact()}>
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
            Contact us
          </button>
          <div
            className={
              params === "http://localhost:3000/shop"
                ? "order-button text-warning"
                : "order-button"
            }
            onClick={() => goToShop()}
          >
            <i className="fa fa-shopping-bag" aria-hidden="true"></i> Shop
          </div>
        </div>
      </section>
      <GoogleOAuthProvider clientId="307797896388-8a4oddursmtqp4ppb4toniprofuhhcgc.apps.googleusercontent.com">
        <Login success={onSuccess} error={onError} />
      </GoogleOAuthProvider>
    </>
  );
}
