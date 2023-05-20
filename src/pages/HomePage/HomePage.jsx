/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Category from "../../components/Category/Category";
import OurCategories from "../../components/OurCategories/OurCategories";


const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <OurCategories />
      <Gallery />
      
    </div>
  );
};

export default HomePage;
