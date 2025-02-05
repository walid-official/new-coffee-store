import CoffeeCard from "../components/coffeeCard/CoffeeCard";
import Service from "../components/Services/Service";
import Popularity from "../components/Popularity/Popularity";
import Follow from "../components/Follow/Follow";
import ShowCoffees from "../components/ShowCustomCoffee/ShowCoffees";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffeeStore = useLoaderData();

  console.log(coffeeStore);
  return (
    <div className="bg-[#f9efe4]">
      <div className="">
        <CoffeeCard></CoffeeCard>
      </div>
      <div className="pb-10">
        <Service></Service>
      </div>
      <div className="py-20">
        <ShowCoffees coffeeStore={coffeeStore}></ShowCoffees>
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
