
import CoffeeCard from "../components/coffeeCard/CoffeeCard";
import Service from "../components/Services/Service";
import Popularity from "../components/Popularity/Popularity";
import Follow from "../components/Follow/Follow";

const Home = () => {

  return (
    
      <div className="bg-[#f9efe4]">
        <div className=" mb-20">
          <CoffeeCard></CoffeeCard>
        </div>
        <div className="">
          <Service></Service>
        </div>
        <div className="">
          <Popularity></Popularity>
        </div>
        <div className="">
            <Follow></Follow>
        </div>
      </div>
  );
};

export default Home;
