import React from "react";
const CoffeeCard = () => {
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
    </div>
  );
};

export default CoffeeCard;
