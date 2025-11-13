import React from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import ProductsGrid from "./ProductsGrid";
const HomePage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("http://localhost:3000/api/products")
      setProducts(response.data);
    };
    getHomeData()
  }, []);

  return (
    <>
      <title>Ecommerce website</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
};

export default HomePage;
