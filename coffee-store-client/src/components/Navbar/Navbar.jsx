import React from "react";
import iconNav from "../../assets/more/logo1.png";
import bgNav from "../../assets/more/15.jpg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {

  const Links = (
    <>
      <NavLink to="/">
        <li className="text-xl">Home</li>
      </NavLink>
      <NavLink to="/about">
        <li className="text-xl">About</li>
      </NavLink>
      <NavLink to="">
        <li className="text-xl">Services</li>
      </NavLink>
      <NavLink to="">
        <li className="text-xl">Products</li>
      </NavLink>
      <NavLink to="/submit/DashBoard">
        <li className="text-xl">DashBoard</li>
      </NavLink>
      <NavLink to="">
        <li className="text-xl">Contacts</li>
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className="backdrop-blur-sm bg-[#13100d4b] ">
        <div className="w-11/12 mx-auto items-center justify-center py-2 pt-4 flex gap-2">
          <img
            className="w-28"
            src="http://just-theme.com/mrcoffee/images/main-logo.png"
            alt=""
          />
        </div>
        <div className="w-[80%] mx-auto">
          <div className="navbar py-3">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost text-white lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow md:text-white"
                >
                  {Links}
                </ul>
              </div>
              <div className="flex gap-5">
                <a
                  href="https://x.com/coffeebreak_YT/highlights"
                  className="text-[#E3B577]" target="_blank"
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  href="https://www.facebook.com/groups/Coffeerocks/"
                  className="text-[#E3B577]" target="_blank"
                >
                  <FaFacebookF></FaFacebookF>
                </a>
                <a
                  href="https://www.instagram.com/thecommunitycoffee/?hl=en"
                  className="text-[#E3B577]" target="_blank"
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white space-x-8">
                {Links}
              </ul>
            </div>
            <div className="navbar-end space-x-6 ">
              <button className="text-[#E3B577] font-bold text-xl relative">
                <MdOutlineShoppingCart></MdOutlineShoppingCart>
                <p className="bg-white w-3 h-3 p-[10px] -top-2 left-3 rounded-full absolute flex justify-center items-center text-black text-[16px]">
                  0
                </p>
              </button>
              <Link
                to="/submit/Login"
                className="bg-transparent border-white border text-white px-7 py-2 hover:bg-[#E3B577] hover:border-[#E3B577] duration-500 "
              >
                Login
              </Link>
              {/* <Link to="/submit/Register" className="bg-transparent border-white border text-white px-7 py-2 hover:bg-[#E3B577] hover:border-[#E3B577] duration-500 ">Register</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
