import React from "react";
import FooterBg from "../../assets/more/13.jpg";

import Contact from "../Contact/Contact";
const Footer = () => {
  return (
    <div
      className="bg-center pt-16 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <Contact></Contact>
      <div className="bg-[#221212] py-6">
        <p className="text-center text-white text-xl font-bold">Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
