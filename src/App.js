import TopNav from "./components/TopNav";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Cart from "./components/cart/Cart";
import ProductDetailsPage from "./components/products/ProductDetailsPage";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import ShopPage from "./components/shop/ShopPage";
import axios from "axios";
import { toast } from "react-toastify";
function App() {
  let [cartItems, SetCartItems] = useState([]);
  let [aboutUsPage, setAboutUsPage] = useState(1);
  let [isLoading, setLoading] = useState(false);
  let [productsDetails, setProductDetails] = useState([]);

  let addToCart = (items) => {
    let newItem = cartItems.find((previousItem) => {
      return previousItem._id === items._id;
    });
    // here undefined means if it already exist.
    if (newItem !== undefined) {
      newItem.quantity += 1;
      toast.success(`you have ${newItem.quantity} ${items.name} in Cart !`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      SetCartItems([...cartItems]); // if it exist then print as it is.
    } else {
      toast.success(`${items.name} added To Cart !`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      SetCartItems([...cartItems, items]);
    }
  };
  let getProductDetails = async () => {
    let URL = "https://caffe-latte-api.vercel.app/api/get-products";
    try {
      let response = await axios.get(URL);
      let { Products, status } = response.data;
      if (status) {
        setProductDetails([...Products]);
        setLoading(true);
      } else {
        alert("unable to fetch item");
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
      <TopNav cartItems={cartItems} setAboutUsPage={setAboutUsPage} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage productsDetails={productsDetails} isLoading={isLoading} />
          }
        />
        <Route
          path="/about-us"
          element={
            <AboutUs
              setAboutUsPage={setAboutUsPage}
              aboutUsPage={aboutUsPage}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} SetCartItems={SetCartItems} />}
        />
        <Route
          path="/product-details/:id"
          element={<ProductDetailsPage addToCart={addToCart} />}
        />
        <Route
          path="/Shop"
          element={
            <ShopPage
              addToCart={addToCart}
              isLoading={isLoading}
              setLoading={setLoading}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
