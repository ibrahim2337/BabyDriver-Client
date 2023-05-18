/* eslint-disable no-unused-vars */
import React from "react";

const Gallery = () => {
  return (
    <div className="container px-10 py-10 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-16 capitalize lg:text-3xl ">
        Our Car Toys Gallery
      </h1>
      <div>
        
        <div className="grid grid-cols-1 gap-6  lg:grid-cols-5 md:grid-cols-2">
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
           <img
            className="object-cover w-full  rounded-xl"
            src="https://source.unsplash.com/random/300x300/?2"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://source.unsplash.com/random/300x300/?3"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-5 md:grid-cols-2">
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
