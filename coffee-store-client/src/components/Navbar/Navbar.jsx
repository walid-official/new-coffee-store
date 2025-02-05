import React from "react";
import iconNav from "../../assets/more/logo1.png";
import bgNav from "../../assets/more/15.jpg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const Links = (
    <>
      <NavLink to="/">
        <li className="text-xl">Home</li>
      </NavLink>
      <NavLink to="">
        <li className="text-xl">About</li>
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
    <div className="border-b">
      <div className="backdrop-blur-sm bg-[#13100d4b] ">
        <div className="w-11/12 mx-auto items-center justify-center py-2 pt-4 flex gap-2">
          <img className="w-20" src="http://just-theme.com/mrcoffee/images/main-logo.png" alt="" />
        </div>
        <div className="w-11/12 mx-auto">
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
              <a className="btn btn-ghost text-xl text-white sm:text-2xl">Espresso <span className="">Emporium</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white space-x-8">{Links}</ul>
            </div>
            <div className="navbar-end space-x-2">
              <Link to="/submit/Login" className="bg-transparent border-white border text-white px-7 py-2 hover:bg-[#E3B577] hover:border-[#E3B577] duration-500 ">Login</Link>
              <Link to="/submit/Register" className="bg-transparent border-white border text-white px-7 py-2 hover:bg-[#E3B577] hover:border-[#E3B577] duration-500 ">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
