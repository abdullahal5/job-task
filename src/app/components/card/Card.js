import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { MdOutlineInsertComment } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";

const Card = () => {
  return (
    <div>
      <div className="w-[550px] h-56 border bg-white px-3 py-1 rounded-lg shadow-xl">
        <div className="flex items-start">
          <div className="w-[12%]">
            <Image
              src="https://i.ibb.co/QQzhdBx/images.jpg"
              width={60}
              className="rounded-full"
              height={50}
              alt="image"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold pl-3">Jhon Doe</h1>
                <span className="text-white text-sm bg-blue-800 rounded-full py-1 px-3">
                  Section 2
                </span>
              </div>
              <span className="text-blue-800 text-sm font-semibold">
                2 min ago
              </span>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apus;s st
                dummy text industry. Lorem Ipsum has been the industry&apus;
                
              </p>
            </div>
            <div className="py-4 flex items-center justify-around">
              <span className="flex items-center gap-2">
                <FaRegHeart fontSize={"1.5rem"} />
                14k
              </span>
              <span className="flex items-center gap-2">
                <LuEye fontSize={"1.5rem"} />
                2k
              </span>
              <span className="flex items-center gap-2">
                <MdOutlineInsertComment fontSize={"1.5rem"} />
                6k
              </span>
              <span className="flex items-center gap-2">
                <IoShareSocial fontSize={"1.5rem"} />
                9k
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
