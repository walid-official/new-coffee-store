import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomCoffee from "../components/CustomCoffee/CustomCoffee";
import Footer from "../components/Footer/Footer";
import FormBg from "../assets/more/11.png";
import navFormBg from "../assets/more/24.jpg"


const FormLayout = () => {
  return (
    <div>
      <div className="bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${navFormBg})` }}>
        <Navbar></Navbar>
      </div>
      <div
        className="min-h-60 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${FormBg})` }}
      >
        <CustomCoffee></CustomCoffee>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FormLayout;
