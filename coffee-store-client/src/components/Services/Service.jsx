import React from "react";
import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import ServiceImage from "../../assets/more/service-img.png";
const Service = () => {
  return (
    <div className="py-16 pb-32">
      <div className="w-[80%] mx-auto lg:flex lg:gap-20 lg:justify-between">
        <div className="w-full">
          <div className="w-full">
            <h2 className="text-4xl font-bold">
              Our <span className="text-[#E3B577]">Services</span>{" "}
            </h2>
            <div className="w-10 h-1 bg-[#E3B577]"></div>
            <p className="md:w-[70%] text-xl py-8">
              Coffee is a beloved beverage made from roasted coffee beans,
              offering a rich aroma, bold flavor, and energizing caffeine. It's
              enjoyed in countless variations like espresso, cappuccino, and
              latte, making it a staple for relaxation.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <img src={icon1} alt="" />
                <div className="">
                  <h2 className="text-2xl font-bold">100% Natural Coffee</h2>
                  <p>
                  Donec pulvinar tellus eget magna aliquet ultricies. Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img src={icon2} alt="" />
                <div className="">
                  <h2 className="text-2xl font-bold">High Quality Product</h2>
                  <p>
                  Donec pulvinar tellus eget magna aliquet ultricies. Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img src={icon3} alt="" />
                <div className="">
                  <h2 className="text-2xl font-bold">Free Delivery</h2>
                  <p>
                  Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end justify-start w-full">
          <img src={ServiceImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
