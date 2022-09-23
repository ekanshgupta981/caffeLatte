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

        <div className="nav-content font-style-poppins">
          <button
            onClick={() => goToHomePage()}
            className={
              params === "https://caffelatte-1.netlify.app/"
                ? "text-danger"
                : ""
            }
          >
            <i className="fa fa-home" aria-hidden="true"></i>
            <span className="nav-text"> Home</span>
          </button>
          <button
            onClick={() => AboutUsPage()}
            className={
              params === "https://caffelatte-1.netlify.app/about-us"
                ? "text-danger"
                : ""
            }
          >
            <i className="fa fa-info" aria-hidden="true"></i>
            <span className="nav-text">About us</span>
          </button>

          {UserLogin === null ? (
            <button
              className="border-0  login-button"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              <i className="fa fa-bell" aria-hidden="true"></i>
              <span>Login</span>
            </button>
          ) : (
            <button
              className=" ms-2 Logout-icon login-button"
              onClick={userLogout}
            >
              <span>{UserLogin.name}</span>

              <i className="ms-2 fa fa-sign-out " aria-hidden="true"></i>
            </button>
          )}

          <button
            onClick={() => goToCart()}
            className={
              params === "https://caffelatte-1.netlify.app/cart"
                ? "text-danger"
                : ""
            }
          >
            <i
              className="fa fa-shopping-cart position-relative"
              aria-hidden="true"
            ></i>
            {cartItems.length === 0 ? null : (
              <span className="position-absolute badges badge small translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            )}
            <span className="nav-text">Cart</span>
          </button>
          <button onClick={() => goToContact()}>
            <i className="fa fa-commenting-o" aria-hidden="true"></i>
            <span className="nav-text">Contact us</span>
          </button>
          <div
            className={
              params === "https://caffelatte-1.netlify.app/shop"
                ? "order-button text-warning "
                : "order-button "
            }
            onClick={() => goToShop()}
          >
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <span className="nav-text">Shop</span>
          </div>
        </div>
      </section>
      <GoogleOAuthProvider clientId="307797896388-8a4oddursmtqp4ppb4toniprofuhhcgc.apps.googleusercontent.com">
        <Login success={onSuccess} error={onError} />
      </GoogleOAuthProvider>
    </>
  );
}
