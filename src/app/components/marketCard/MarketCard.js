import Image from "next/image";

const MarketCard = () => {
    return (
      <div className="w-80 h-96 bg-white rounded-lg shadow-xl">
        <Image
          src="https://i.ibb.co/xGfVT2T/photo-1470071459604-3b5ec3a7fe05.jpg"
          className="w-full h-52 rounded-t-lg"
          width={200}
          height={200}
          alt="Image"
        />
        <div className="mx-5">
          <h1 className="font-semibold text-2xl py-3">The Coldest Sunset</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apus;s standard dummy text
          </p>
        </div>
      </div>
    );
};

export default MarketCard;