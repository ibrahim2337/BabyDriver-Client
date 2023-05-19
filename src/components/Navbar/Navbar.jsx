/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    { name: "Home", link: "/home" },
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blogs" },
  ];
  return (
    <div className=" shadow-md w-full fixed top-0  z-10">
      <div className="flex items-center justify-between bg-gray-300 py-6 md:px-10 px-7 ">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">BabyDriver</h1>
        </Link>
        <div className="flex items-center">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {isOpen ? (
              <CgClose className="text-primary" />
            ) : (
              <VscThreeBars className="text-primary" />
            )}
          </div>
        </div>

        <ul
          className={`w-full text-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0  md:w-auto transition-all duration-500 ease-in ${
            isOpen ? "top-20 " : "top-[-490px]"
          } ${
            isOpen &&
            "h-screen bg-white flex items-center justify-center mt-[-5rem]"
          }`}
        >
          <div className="md:flex md:items-center space-y-7 md:space-y-0 md:space-x-5 ">
            {menus.map((menu) => (
              <li key={menu.name} className="text-xl md:my-0 my-7">
                <Link
                  to={menu.link}
                  onClick={() => setIsOpen(false)}
                  className="text-dark hover:text-primary font-medium duration-500"
                >
                  {menu.name}
                </Link>
              </li>
            ))}

            <div className="hidden mx-10 md:block">

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Search"
                />
              </div>

            </div>

            <div className="mt-20 md:mt-0">
              <Link
                to="/login"
                className=" text-xl px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-gray-600 to-gray-400 "
              >
                login
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
