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
function App() {
  let [cartItems, SetCartItems] = useState([]);
  let [aboutUsPage, setAboutUsPage] = useState(1);
  let [isLoading, setLoading] = useState(false);

  let addToCart = (items) => {
    SetCartItems([...cartItems, items]);
  };
  let [productsDetails, setProductDetails] = useState([]);
  let getProductDetails = async () => {
    let URL = "http://localhost:4000/api/get-products";
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
          element={<HomePage productsDetails={productsDetails} />}
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
              productsDetails={productsDetails}
              addToCart={addToCart}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
