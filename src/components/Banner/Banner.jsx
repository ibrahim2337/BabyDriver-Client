/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
 <div className="container px-10 py-10  mx-auto mt-20 lg:mt-28">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                Best place to choose <br></br> your{" "}
                <span className="text-yellow-300 ">Toys</span>
              </h1>

              <p className="mt-3 text-gray-600 mb-5 ">
              Endless fun and excitement with our toy collection, featuring innovative designs and interactive play experiences. Experience joy and creativity as you embark on imaginative adventures with our diverse range of toys.
              </p>

              <Link to="/all-toys" className="px-6 py-2 text-sm font-semibold rounded-md text-white bg-gradient-to-r from-gray-600 to-gray-400">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://i.ibb.co/D9RCm7p/bannar-removebg-preview.png"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
