import React from "react";
import BannerBg from "../../assets/more/3.png";
import '../../index.css'
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className=""
      
    >
      <div className="w-11/12 mx-auto flex justify-center items-center min-h-screen">
        <div className="text-center">
        <h2 className="text-6xl font-bold text-[#E3B577]">Would you like a Cup of Delicious Coffee?</h2>
        <p className="py-3 md:w-[60%] mx-auto text-white text-xl">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <Link to="/CustomCoffee" ><button className="btn bg-[#E3B577] text-xl font-semibold border-none">Custom Coffee</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
