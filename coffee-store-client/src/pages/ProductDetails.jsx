import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ProductDetails = () => {
  const [singleCoffee, setSingleCoffee] = useState({});
  const [cartQuantity, setCartQuantity] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/coffeeStore/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleCoffee(data));
  }, [id]);

  const { photo, name, category, chief, test, price, supplier, details } = singleCoffee || {};

  const handleIncrease = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const handleDecrease = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(http://just-theme.com/mrcoffee/images/page-head-bg.jpg)`,
        }}
      >
        <Navbar />
      </div>

      <div className="w-[65%] mx-auto flex justify-between items-center my-10">
        <div className="w-[40%]">
          <img src={photo} className="w-full" alt={name} />
        </div>
        <div className="w-[60%] flex flex-col items-start space-y-4">
          <h2 className="font-bold text-3xl">{name}</h2>
          <h2 className="font-bold text-xl">{category}</h2>
          <p>{details}</p>
          <p><span className="font-semibold">Chef:</span> {chief}</p>
          <p><span className="font-semibold">Taste:</span> {test}</p>
          <p><span className="font-semibold">Supplier:</span> {supplier}</p>
          <p className="text-lg font-semibold text-red-600">Price: ${price}</p>

          {/* Add to Cart Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleDecrease}
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
              disabled={cartQuantity === 0}
            >
              -
            </button>
            <span className="text-lg font-bold">{cartQuantity}</span>
            <button
              onClick={handleIncrease}
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
            >
              +
            </button>
            <button
              className="px-5 py-2 bg-[#E3B577] text-white font-semibold rounded-md hover:bg-[#ca8b38]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
