/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Category from "../../components/Category/Category";
import ProductsPage from "../ProductsPage/ProductsPage";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductsPage />
      <Category />
      <Gallery />
    </div>
  );
};

export default HomePage;
