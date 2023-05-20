import toast from "react-hot-toast";

const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;

    const toyData = {
      toy_name: title,
      toy_img: img,
      toy_category: category,
      toy_price: price,
      toy_rating: rating,
      toy_quantity: quantity,
      toy_description: description,
    };

    fetch("http://localhost:5000/create-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Toy Added Successfully");
          form.reset()
        }
      });
  };

  return (
    <div className="py-10 mt-20 px-2 ">
      <form onSubmit={handleAddToy}>
        <div className="bg-transparent min-h-screen md:px-20 pt-6 ">
          <div className="border bg-transparent rounded-md bg-slate-100 lg:px-6 py-12 px-3 max-w-2xl mx-auto ">
            <h1 className="text-center text-3xl font-medium mb-4">ADD A TOY</h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-lg ">
                  Toy Name:
                </label>
                <input
                  type="text"
                  placeholder="Remote control car"
                  name="title"
                  id="title"
                  className="w-full bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg ">
                  Toy Photo URL
                </label>
                <input
                  id="img"
                  name="img"
                  placeholder="Toy photo (400px * 225px)"
                  className="w-full bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                  required
                ></input>
              </div>
              <div className="flex justify-between">
                <div className="w-5/12">
                  <label htmlFor="name" className="text-lg ">
                    Rating:
                  </label>
                  <input
                    type="text"
                    placeholder="(1-5)"
                    name="rating"
                    className="w-full bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                    required
                  />
                </div>
                <div className="w-5/12">
                  <label htmlFor="email" className="text-lg ">
                    Price:
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    name="price"
                    className="w-full bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-5/12">
                  <label htmlFor="name" className="text-lg ">
                    Category:
                  </label>
                  <input
                    type="text"
                    placeholder="Toy category"
                    name="category"
                    className="w-full bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                    required
                  />

                  
                </div>
                <div className="w-5/12">
                  <label htmlFor="email" className="text-lg ">
                    Available Quantity:
                  </label>
                  <input
                    type="number"
                    placeholder="35"
                    name="quantity"
                    className="w-full bg-transparent outline-none py-1 px-2 text-md border  rounded-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block mb-2 text-lg ">
                  Full Description:
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="5"
                  name="description"
                  placeholder="Write full description about this toy..."
                  className="w-full p-4 bg-transparent border rounded-sm focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-xl px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-gray-600 to-gray-400 "
              >
                Add Toy
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
