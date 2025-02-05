import React from "react";
import BannerBg from "../../assets/more/3.png";
import '../../index.css'
import Navbar from "../Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
const Banner = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className=""
      
    >
      <div className="w-11/12 mx-auto flex justify-center pt-32 min-h-screen">
      {
        location.pathname === "/about" ? <div className="text-center pt-10">
        <h1 className="text-5xl text-white">About Us -<span className=" italic text-[#E3B577]"  style={{ color: "transparent", WebkitTextStroke: "2px #E3B577" }}> Crafted for Coffee Lovers</span></h1>
      {/* <h2 className="text-6xl font-bold text-[#E3B577] py-3">Would you like a Cup of Delicious Coffee?</h2> */}
      <p className="py-3 md:w-[60%] mx-auto text-white text-xl pb-6">
      we’re passionate about bringing you the finest coffee, sourced with care and brewed to perfection. Every cup is a blend of quality, flavor, and warmth—because great coffee makes every moment better!
      </p>
      <Link to="/CustomCoffee/CustomCoffee" ><button className="btn bg-[#E3B577] text-xl font-semibold border-none">Custom Coffee</button></Link>
      </div> : <div className="text-center">
          <h1 className="text-5xl text-white">Coffee <span className=" italic text-[#E3B577]"  style={{ color: "transparent", WebkitTextStroke: "2px #E3B577" }}>Sphere</span></h1>
        <h2 className="text-6xl font-bold text-[#E3B577] py-3">Would you like a Cup of Delicious Coffee?</h2>
        <p className="py-3 md:w-[60%] mx-auto text-white text-xl pb-6">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <Link to="/CustomCoffee/CustomCoffee" ><button className="btn bg-[#E3B577] text-xl font-semibold border-none">Custom Coffee</button></Link>
        </div>
      }
        
      </div>
    </div>
  );
};

export default Banner;
