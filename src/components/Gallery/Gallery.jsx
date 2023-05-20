/* eslint-disable no-unused-vars */
import React from "react";

const Gallery = () => {
  return (
    <div className="container px-10 py-10 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-16 capitalize lg:text-3xl ">
        Our Toys Gallery
      </h1>
      <div>
        
        <div className="grid grid-cols-1 gap-6  lg:grid-cols-5 md:grid-cols-2">
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/DgtzvwL/car1.jpg"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/175HwRd/track-1-removebg-preview.jpg"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/5F1fdXj/car-2.jpg"
          />
           <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/fXV3Fkr/heli2.jpg"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/4jPjbDG/car4.jpg"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-5 md:grid-cols-2">
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/6WDZ1yp/heli3.jpg"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/3BJPmB6/truck-2-removebg-preview.jpg"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/52j68kb/heli-4.jpg"
          />
           <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/zFNF5Zs/truck4.jpg"
          />
          <img
            className="object-cover w-full  rounded-xl"
            src="https://i.ibb.co/2sgMKC7/heli1.jpg"
          />
        </div>

      </div>
    </div>
  );
};

export default Gallery;
