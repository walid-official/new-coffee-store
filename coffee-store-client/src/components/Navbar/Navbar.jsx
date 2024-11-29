import React from "react";
import iconNav from "../../assets/more/logo1.png";
import bgNav from "../../assets/more/15.jpg";
import { NavLink } from "react-router-dom";
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
      <NavLink to="">
        <li className="text-xl">Testimonials</li>
      </NavLink>
      <NavLink to="">
        <li className="text-xl">Contacts</li>
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className="backdrop-blur-sm bg-[#13100d4b] ">
        <div className="w-11/12 mx-auto items-center justify-center py-2 flex gap-2">
          <img className="w-20" src={iconNav} alt="" />
        </div>
        <div className="w-11/12 mx-auto">
          <div className="navbar">
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
                >
                  {Links}
                </ul>
              </div>
              <a className="btn text-white btn-ghost text-xl sm:text-2xl">Espresso Emporium</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white space-x-8">{Links}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
