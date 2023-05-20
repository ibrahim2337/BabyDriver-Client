import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const data = useLoaderData();
  const {
    toy_name,
    toy_img,
    toy_price,
    toy_rating,
    toy_quantity,
    toy_description,
  } = data;
  return (
    <div>
      <div>
        <div className="container flex flex-col justify-center items-center mx-auto e mt-10 lg:flex-row">
          <div className="flex items-center  justify-center p-4 md:p-8 lg:p-12">
            <img
              src={toy_img}
              alt=""
              className="w-full h-auto rounded-t-md bg-gray-500"
            />
          </div>

          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h2 className="text-3xl font-semibold leading-none">{toy_name}</h2>

            <p className="mt-3  text-sm">
              <b>Description : </b>
              {toy_description}
            </p>
            <p className="mt-2 mb-1  text-sm">
              <b>Price : </b>

              {toy_price}
            </p>

            <p className="mt-1 mb-1  text-sm">
              <b>Quantity : </b>
              {toy_quantity}
            </p>
            <p className="mt-1 mb-1  text-sm">
              <b>Rating: </b>
              {toy_rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
