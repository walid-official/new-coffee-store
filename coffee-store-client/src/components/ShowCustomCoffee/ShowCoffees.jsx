import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import coffeeStoreImg from '../../assets/more/24.jpg'


const ShowCoffees = ({ coffeeStore }) => {
    const [coffees,setCoffees] = useState(coffeeStore);

    const handleDeleteCoffee = (id) => {
        fetch(`http://localhost:5000/coffeeStore/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = coffees.filter(coffee => coffee._id !== id)
            setCoffees(remaining)
        })
    }


  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Our Popular Products</h2>
        <NavLink to="/CustomCoffee" className="">
          <button className="btn mt-3 mb-10">Add Coffee</button>
        </NavLink>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee, index) => (
          <div key={index} className="card card-side text-white shadow-xl bg-center bg-cover" style={{backgroundImage: `url(${coffeeStoreImg})`}}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCoffees;
