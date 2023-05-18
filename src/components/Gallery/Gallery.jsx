/* eslint-disable no-unused-vars */
import React from "react";

const Gallery = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl ">
        Our Car Toys Gallery
      </h1>
      <div className="container flex flex-col justify-center p-4 mx-auto ">
        <div className="grid grid-cols-1 gap-6 gap-x-20 lg:grid-cols-3 sm:grid-cols-1">
          <img
            className="object-cover w-full  rounded-xl"
            src="https://source.unsplash.com/random/300x300/?1"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://source.unsplash.com/random/300x300/?2"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://source.unsplash.com/random/300x300/?3"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
