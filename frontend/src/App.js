import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import WebFont from "webfontloader"
import React, { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      </Routes>
      <ToastContainer/>
      <Footer/>
    </Router>
  );
}

export default App;
