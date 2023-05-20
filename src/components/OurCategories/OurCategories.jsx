import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurCategories = () => {
  const [activeCategories, setActiveCategories] = useState("Truck");
  const [categories, setCategories] = useState([]);
  const [categoryWiseToy, setCategoryWiseToy] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategory = (category) => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryWiseToy(data));
  };

  useEffect(() => {
    if (!pageLoaded) {
      handleCategory("Truck");
      setPageLoaded(true);
    }
  }, [pageLoaded]);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-10 mt-5">
        Explore our products
      </h3>
      <div className="  flex justify-center gap-8">
        {categories.map((category, index) => (
          <p
            onClick={() => {
              handleCategory(category.toy_category),
                setActiveCategories(category.toy_category);
            }}
            className={`text-lg font-medium hover:cursor-pointer border px-5 py-2 rounded-md bg-yellow-200 hover:bg-yellow-300`}
            key={index}
          >
            {category.toy_category}
          </p>
        ))}
      </div>
      <h2 className="container px-10 py-2 mx-auto mt-5 text-center text-2xl font-semibold ">
        {activeCategories}
      </h2>
      <div className="mt-5 container mx-auto  px-10 grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 ">
        {categoryWiseToy.map((toy, index) => (
          <div key={index} className="max-w-xs p-6 rounded-md shadow-md border">
            <img
              src={toy.toy_img}
              alt=""
              className="w-full h-auto rounded-t-md bg-gray-500"
            />
            <div className="mt-6 mb-2 h-40">
              <h2 className="text-xl font-semibold tracking-wide">
                {toy.toy_name}
              </h2>
              <p className="text-gray-900">Price: {toy.toy_price}</p>
              <p className="text-gray-900">Rating: {toy.toy_rating}</p>
            </div>
            <Link to={`toy-details/${toy._id}`}>
              <button className="text-md px-3 py-1 font-medium text-cyan-50 border-md rounded-md  bg-gradient-to-r from-gray-600 to-gray-400 ">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCategories;
