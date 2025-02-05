import React from "react";

import { BsFillCupFill } from "react-icons/bs";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import Popularity from "../Popularity/Popularity";
const About = () => {
  return (
    <div className="w-[80%] mx-auto -translate-y-32 ">
      <div className="grid grid-cols-3  ">
        {[
          "https://monfee-store-demo.myshopify.com/cdn/shop/articles/Blog9_1024x1024.jpg?v=1592032255",
          "https://monfee-store-demo.myshopify.com/cdn/shop/articles/Blog3_1024x1024.jpg?v=1592032221",
          "https://monfee-store-demo.myshopify.com/cdn/shop/articles/Blog2_1024x1024.jpg?v=1592032190",
        ].map((src, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-100 bg-opacity-50  transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                View More
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Main About Section */}
      <div className="">
        <div className="text-center pt-20">
          <h2 className="font-bold text-4xl">
            Our <span className="text-[#E3B577]">COffee</span>{" "}
          </h2>
          <div className="bg-[#E3B577] w-16 mt-2 h-[2px] mx-auto"></div>
          <p className="text-center w-[50%] mx-auto pt-6 text-xl">
            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
            vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.
            Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-20">
          <div className="text-center mt-10">
            <div className="text-4xl text-center text-[#b89d64] flex justify-center pb-3">
              <BsFillCupFill></BsFillCupFill>
            </div>
            <h2 className="text-2xl font-bold">100% Natural Coffee</h2>
            <p>
              Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
              tellus eget magna aliquet ultricies.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-center text-[#b89d64] flex justify-center pb-3">
              <PiAirplaneTiltFill></PiAirplaneTiltFill>
            </div>
            <h2 className="text-2xl font-bold">100% Natural Coffee</h2>
            <p>
              Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
              tellus eget magna aliquet ultricies.
            </p>
          </div>
          <div className="text-center mt-10">
            <div className="text-4xl text-center text-[#b89d64] flex justify-center pb-3">
              <FaCheckCircle></FaCheckCircle>
            </div>
            <h2 className="text-2xl font-bold">100% Natural Coffee</h2>
            <p>
              Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
              tellus eget magna aliquet ultricies.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Popularity></Popularity>
      </div>
    </div>
  );
};

export default About;
