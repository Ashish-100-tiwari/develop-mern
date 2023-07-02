import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader"
import React, { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import ProductDetails from "./component/Product/ProductDetails.js"

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    
  }, []);

  return ( 
    <Router>
      <Header/>
      <Routes>
      <Route extact path="/" Component={Home} />
      <Route extact path="/product/:id" Component={ProductDetails} />
      <Route extact path="/products" Component={Products} />
      <Route path="/products/:keyword" Component={Products} />
      <Route extact path="/search" Component={Search} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
