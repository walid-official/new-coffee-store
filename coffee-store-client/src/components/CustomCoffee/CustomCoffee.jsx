import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const CustomCoffee = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCustomCoffee = (data) => {
    console.log(data);

    fetch("http://localhost:5000/coffeeStore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        swal({
          title: "Success!",
          text: "Coffee added successfully!",
          icon: "success",
          button: "OK",
        });
        reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] w-[80%] mx-auto py-20 p-10">
      <div className="text-center">
        <h2 className="text-[#374151] text-3xl font-bold">Add New Coffee</h2>
        <p className="text-[#1B1A1AB3] w-[70%] mx-auto py-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleCustomCoffee)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Enter Coffee Name" },
            { label: "Chef", name: "chef", type: "text", placeholder: "Enter Coffee Chef" },
            { label: "Supplier", name: "supplier", type: "text", placeholder: "Enter Coffee Supplier" },
            { label: "Taste", name: "taste", type: "text", placeholder: "Enter Coffee Taste" },
            { label: "Category", name: "category", type: "text", placeholder: "Enter Coffee Category" },
            { label: "Details", name: "details", type: "text", placeholder: "Enter Coffee Details" },
            { label: "Photo URL", name: "photo", type: "text", placeholder: "Enter Photo URL" },
            { label: "Price", name: "price", type: "number", placeholder: "Enter Price" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="font-bold text-xl block my-2">{label}</label>
              <input
                {...register(name, { required: `${label} is required` })}
                className="w-full rounded py-3 px-6 border"
                type={type}
                placeholder={placeholder}
              />
              {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
            </div>
          ))}
        </div>

        <div className="mt-5">
          <button className="btn bg-[#E3B577] hover:bg-[#ca8b38] hover:text-white py-3 px-8 my-3 w-full text-xl font-semibold">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomCoffee;
