"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaCommentDollar } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`fixed bg-gray-700 top-1/2 text-white py-10 rounded-md z-50 hover:bg-gray-500 ${
          showMenu ? "left-[52%]" : "left-3"
        }`}
        onClick={toggleMenu}
      >
        {showMenu ? <FaAngleLeft /> : <FaAngleRight />}
      </div>

      <div
        className={`fixed overflow-auto inset-0 bg-gray-900 bg-opacity-50 transition-transform ease-in-out duration-300 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div
          className={` bg-[#1F2544] w-1/2 p-4 transform transition-transform ease-in-out duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="text-white w-full">
            <div className="font-semibold flex items-center justify-between px-4 py-4">
              <span className="flex items-center gap-4 text-xl">
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
      </div>
    </>
  );
};

export default Sidebar;
