"use client"
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Icon */}
      <div
        className={`fixed bg-gray-700 top-1/2  text-white px-3 py-2 rounded-md z-50 ${
          showMenu ? "left-72" : "left-4"
        }`}
        onClick={toggleMenu}
      >
        <FaAngleRight />
      </div>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-transform ease-in-out duration-300 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div
          className={`h-full bg-[#1F2544] w-64 p-4 transform transition-transform ease-in-out duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="pb-3 flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-white">
              Shop <span className="text-orange-600">Ito</span>
            </h2>
          </div>
          <ul className="flex flex-col w-[100%]"></ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
