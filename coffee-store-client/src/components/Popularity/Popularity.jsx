import React, { useState } from "react";
import parallax from "../../assets/more/parallax.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Popularity = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div
      className="bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${parallax})` }}
    >
      <div className="bg-[#13100d4b] py-20">
        <div className="w-11/12 mx-auto">
          <div className="">
            <h2 className="font-bold text-center text-4xl text-white">
              <span className="text-[#E3B577]">Why people</span> choose
              mr.Coffee
            </h2>
            <div className="w-14 h-1 my-2 mx-auto bg-[#E3B577]"></div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="md:flex md:w-[80%] mx-auto py-20 gap-8 justify-between">
              {/* Counter 1 */}
              <div className="text-center">
                <div className="text-[#E3B577] text-6xl font-bold">
                  {counterOn && <CountUp end={49} duration={10} />}
                </div>
                <h2 className="text-center text-white py-3 text-4xl">
                  Coffee Markets
                </h2>
                <p className="text-center text-[#E3B577]">
                  Sed sagittis sodales lobortis. Curabitur in eleifend turpis,
                  id vehicula odio.
                </p>
              </div>
              {/* Counter 2 */}
              <div className="text-center">
                <div className="text-[#E3B577] text-6xl font-bold">
                  {counterOn && <CountUp end={93} duration={10} />}
                </div>
                <h2 className="text-center text-white py-3 text-4xl">
                  Varieties of coffee
                </h2>
                <p className="text-center text-[#E3B577]">
                  Sagittis sodales lobortis. Curabitur in eleifend turpis, id
                  vehicula odio.
                </p>
              </div>
              {/* Counter 3 */}
              <div className="text-center">
                <div className="text-[#E3B577] text-6xl font-bold">
                  {counterOn && <CountUp end={32} duration={10} />}
                </div>
                <h2 className="text-center text-white py-3 text-4xl">
                  Varieties of tea
                </h2>
                <p className="text-center text-[#E3B577]">
                  Sed sagittis sodales lobortis. Curabitur in eleifend turpis,
                  id vehicula odio.
                </p>
              </div>
              {/* Counter 4 */}
              <div className="text-center">
                <div className="text-[#E3B577] text-6xl font-bold">
                  {counterOn && <CountUp end={89} duration={10} />}
                </div>
                <h2 className="text-center text-white py-3 text-4xl">
                  Types of sweets
                </h2>
                <p className="text-center text-[#E3B577]">
                  Sagittis sodales lobortis. Curabitur in eleifend turpis, id
                  vehicula odio.
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Popularity;
