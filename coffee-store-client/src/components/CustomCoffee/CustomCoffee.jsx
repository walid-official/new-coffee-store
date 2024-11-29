import React from "react";
import swal from 'sweetalert';

const CustomCoffee = () => {

    const handleCustomCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const Coffee = {name,chef,supplier,test,category,details,photo};
        console.log(Coffee);
        fetch('http://localhost:5000/coffeeStore',{
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(Coffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "success",
            dangerMode: true,
          })
          form.reset();
        })
    }

    // https://i.ibb.co.com/zVQP3wk/1.png
    // https://i.ibb.co.com/QpmchtV/2.png
    // https://i.ibb.co.com/C8NH3M2/3.png
    // https://i.ibb.co.com/ZLDb8W6/4.png
    // https://i.ibb.co.com/C15K3j3/5.png
    // https://i.ibb.co.com/rHSz3rP/6.png

  return (
    <div className="bg-[#F4F3F0] w-[80%] mx-auto my-20 p-10">
      <div className="text-center">
        <h2 className="text-[#374151] text-3xl font-bold">Add New Coffee</h2>
        <p className="text-[#1B1A1AB3] w-[70%] mx-auto py-3">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleCustomCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <label className="font-bold text-xl block my-2">Name</label>
            <input className="w-full rounded py-3 px-6" type="text" name="name" placeholder="Enter Coffee Name" id="" />
          </div>
          <div className="">
            <label className="font-bold text-xl block my-2">Chef</label>
            <input className="w-full rounded py-3 px-6" type="text" name="chef" placeholder="Enter Coffee Chef" id="" />
          </div>
          <div className="">
            <label className="font-bold text-xl block my-2">Supplier</label>
            <input className="w-full rounded py-3 px-6" type="text" name="supplier" placeholder="Enter Coffee Supplier" id="" />
          </div>
          <div className="">
            <label className="font-bold text-xl block my-2">Taste</label>
            <input className="w-full rounded py-3 px-6" type="text" name="taste" placeholder="Enter Coffee Taste" id="" />
          </div>
          <div className="">
            <label className="font-bold text-xl block my-2">Category</label>
            <input className="w-full rounded py-3 px-6" type="text" name="category" placeholder="Enter Coffee Category" id="" />
          </div>
          <div className="">
            <label className="font-bold text-xl block my-2">Details</label>
            <input className="w-full rounded py-3 px-6" type="text" name="details" placeholder="Enter Coffee Details" id="" />
          </div>
        </div>
        <div className="">
            <label className="font-bold text-xl block my-2">Photo</label>
            <input className="w-full rounded py-3 px-6" type="text" name="photo" placeholder="Enter Photo URL" id="" />
          </div>
          <div className="">
            <button  className="btn bg-[#E3B577] py-3 px-8 my-3 w-full text-xl font-semibold">Add Coffee</button>
          </div>
      </form>
    </div>
  );
};

export default CustomCoffee;
