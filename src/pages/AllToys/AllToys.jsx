import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { useState } from "react";

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch();
    }
  };

  const performSearch = () => {
    const filteredToys = data.filter((toy) =>
      toy.toy_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredToys(filteredToys);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const allToys = useFetch("http://localhost:5000/toys");
  const { data, isLoading } = allToys;

  return (
    <div className="mt-28">
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        </div>
      ) : (
        <>
          <div className="mt-28 px-10 container mx-auto">
            <input
              type="text"
              placeholder="Search toys by name..."
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-sm text-sm focus:outline-none"
            />
          </div>

          <div className="mt-5 container mx-auto px-10 grid grid-cols-4 gap-5">
            {(filteredToys.length > 0 ? filteredToys : data).map((toy, index) => (
              <div key={index} className="max-w-xs p-6 rounded-md shadow-md border">
                <img
                  src={toy.toy_img}
                  alt=""
                  className="w-full h-auto rounded-t-md bg-gray-500"
                />
                <div className="mt-6 mb-2 h-32">
                  <h2 className="text-md font-semibold tracking-wide">
                    {toy.toy_name}
                  </h2>
                  <p className="text-gray-900">Price: {toy.toy_price}</p>
                  <p className="text-gray-900">Rating: {toy.toy_rating}</p>
                </div>
                <Link to={`toy-details/${toy._id}`}>
                  <button className="text-md px-3 py-1 font-medium text-cyan-50 border-md rounded-md bg-gradient-to-r from-gray-600 to-gray-400">
                    See Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllToys;
