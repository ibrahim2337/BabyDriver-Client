/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import OurCategories from "./components/OurCategories/OurCategories";
import ToyDetails from "./pages/ToyDetails/ToyDetails";
import AllToys from "./pages/AllToys/AllToys";
import AddToy from "./pages/AddToy/AddToy";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/add-toy",
        element: <AddToy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/toy-details/:id",
        element: <ToyDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/single-toys/${params.id}`);
        },
      },
      {
        path: "all-toys/toy-details/:id",
        element: <ToyDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/single-toys/${params.id}`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </div>
);
