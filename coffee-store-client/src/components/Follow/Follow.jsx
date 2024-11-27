import cup1 from "../../assets/cups/Rectangle 9.png";
import cup2 from "../../assets/cups/Rectangle 10.png";
import cup3 from "../../assets/cups/Rectangle 11.png";
import cup4 from "../../assets/cups/Rectangle 12.png";
import cup5 from "../../assets/cups/Rectangle 13.png";
import cup6 from "../../assets/cups/Rectangle 14.png";
import cup7 from "../../assets/cups/Rectangle 15.png";
import cup8 from "../../assets/cups/Rectangle 16.png";

const Follow = () => {
  return (
    <div className="w-11/12 mx-auto pb-32">
      <div className="text-center py-10">
        <h2>Follow Us Now</h2>
        <h2 className="font-bold text-4xl py-3">Follow On Instagram</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-cols-1">
        <img className="w-full" src={cup1} alt="cup" />
        <img className="w-full" src={cup2} alt="cup" />
        <img className="w-full" src={cup3} alt="cup" />
        <img className="w-full" src={cup4} alt="cup" />
        <img className="w-full" src={cup5} alt="cup" />
        <img className="w-full" src={cup6} alt="cup" />
        <img className="w-full" src={cup7} alt="cup" />
        <img className="w-full" src={cup8} alt="cup" />
      </div>
    </div>
  );
};

export default Follow;
