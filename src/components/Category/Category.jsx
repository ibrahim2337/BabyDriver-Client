/* eslint-disable no-unused-vars */
import React from "react";

const Category = () => {
  return (
    <div className="container px-10 py-10 mx-auto ">
      <div className="container grid grid-cols-1 gap-6 gap-x-20 mx-auto sm:grid-cols-2 xl:grid-cols-3">
        <div className="text-center p-4 space-x-4 rounded-lg md:space-x-6    bg-gradient-to-r from-gray-600 to-gray-400 ">
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-white">
              200
            </p>
            <p className="capitalize font-semibold text-white">Products</p>
          </div>
        </div>

        <div className="text-center p-4 space-x-4 rounded-lg md:space-x-6   bg-gradient-to-r from-gray-600 to-gray-400 ">
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-white">
              85%
            </p>
            <p className="capitalize font-semibold text-white">Product Sell</p>
          </div>
        </div>

        <div className="text-center p-4 space-x-4 rounded-lg md:space-x-6   bg-gradient-to-r from-gray-600 to-gray-400  ">
          <div className="flex flex-col justify-center align-middle ">
            <p className="text-3xl font-semibold leading-none text-white">
              4.4
            </p>
            <p className="capitalize font-semibold text-white">
              Customer Review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
