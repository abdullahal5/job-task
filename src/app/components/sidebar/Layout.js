import Sidebar2 from "../Sidebar2";
import Card from "../card/Card";
import MarketCard from "../marketCard/MarketCard";
import Sidebar from "./Sidebar";

const layout = () => {
  return (
    <div className="flex max-h-screen flex-row justify-center">
      <div className="overflow-y-hidden h-[100vh]">
        <Sidebar2 />
      </div>
      <div className="bg-gray-300 flex-1 p-4 h-[200vh]">
        <Card/>
        <MarketCard/>
      </div>
    </div>
  );
};

export default layout;
