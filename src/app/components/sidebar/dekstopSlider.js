"use client";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { FaCommentDollar } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";


const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="lg:block md:block hidden">
      <div
        className={`fixed bg-gray-700 top-1/2 text-white py-10 rounded-md z-50 hover:bg-gray-500 ${
          isOpen ? "left-[300px]" : "left-3"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </div>
      {isOpen && (
        <div
          className={`overflow-y-hidden h-screen left-0 w-80 transition-transform duration-300 bg-[#1F2544] flex-shrink-0 ${
            isOpen ? "w-72" : "w-0"
          }`}
        >
          <div className="text-white w-full">
            <div className="font-semibold flex items-center justify-between px-4 py-4">
              <span className="flex items-center gap-4 text-3xl">
                <FaUserCircle fontSize={"2rem"} className="inline" /> Hello,
                user
              </span>
              <IoNotifications fontSize={"2rem"} />
            </div>
            <hr className="border border-gray-400 mb-4" />
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">
                <MdOutlineMessage className="inline mr-2" fontSize={"1.5rem"} />
                Disscussion Form
              </p>
            </Link>
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">
                <FaCommentDollar className="inline mr-2" fontSize={"1.5rem"} />
                Market Stories
              </p>
            </Link>
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">Sentiment</p>
            </Link>
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">Market</p>
            </Link>
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">Sector</p>
            </Link>
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">Watchlist</p>
            </Link>
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">Events</p>
            </Link>
            <Link className="w-full text-white text-lg" href="/">
              <p className="hover:bg-gray-900 py-3 px-4">News/Interview</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar2;
