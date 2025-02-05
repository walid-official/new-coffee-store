import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import coffeeStoreImg from "../../assets/more/24.jpg";

const ShowCoffees = ({ coffeeStore }) => {
  const [coffees, setCoffees] = useState(coffeeStore);

  const handleDeleteCoffee = (id) => {
    fetch(`http://localhost:5000/coffeeStore/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = coffees.filter((coffee) => coffee._id !== id);
        setCoffees(remaining);
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Our Popular Products</h2>
        <NavLink to="/CustomCoffee" className="">
          <button className="btn mt-3 mb-10">Add Coffee</button>
        </NavLink>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="relative  shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-100 hover:shadow-2xl"
          >
            <figure className="flex justify-center">
              <img
                src={coffee.photo}
                alt="coffee"
                className=""
              />
            </figure>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {coffee.name}
              </h2>
              <p className="text-gray-600 mt-2">{coffee.details}</p>
              <div className="flex justify-center space-x-3 mt-4">
                <button className="px-4 py-2 bg-[#E3B577] cursor-pointer text-white font-medium rounded-lg hover:bg-[#E3B577] transition">
                  Buy Now
                </button>
                <NavLink className="px-4 py-2 cursor-pointer border-2 border-[#E3B577] text-[#E3B577] font-medium rounded-lg hover:bg-[#E3B577] hover:text-white transition">
                  View Details
                </NavLink>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCoffees;

{
  /* <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div key={index} className="card card-side text-white shadow-xl bg-center bg-cover" style={{backgroundImage: `url(${coffeeStoreImg})`}}>
            <figure>
              <img
                src={coffee.photo}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {coffee.name}</h2>
              <p>Chef: {coffee.chef}</p>
              <p>Supplier: {coffee.supplier}</p>
              <p>test: {coffee.test}</p>
              <p>Category: {coffee.category}</p>
              <p>Description: {coffee.details}</p>
              <div className="card-actions justify-start">
              <button className="btn">Add To Cart</button>
                <div className=" flex justify-end">
                  <NavLink to={`/CoffeeInfo/${coffee._id}`}>
                    <button className="btn">Update Item</button>
                  </NavLink>
                </div>
                <div className=" flex justify-end">
                    <button onClick={() => handleDeleteCoffee(coffee._id)} className="btn">Delete Item</button>
                </div>
              </div>
            </div>
          </div> */
}
