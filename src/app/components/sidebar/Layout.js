"use client";
import React, { useState } from "react";
import Sidebar2 from "./dekstopSlider";
import Card from "../card/Card";
import MarketCard from "../marketCard/MarketCard";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex max-h-screen flex-row justify-center">
      <div className="overflow-y-hidden h-[100vh]">
        <Sidebar2 />
      </div>
      <div className="bg-gray-300 flex-1 border overflow-y-scroll h-sceeen lg:p-4 md:p-4 p-0">
        <div className="lg:block md:block hidden">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-around lg:gap-0 md:gap-5">
            <div className="mx-auto">
              <h1 className="text-3xl mx-auto text-center bg-gray-400 p-4 rounded-xl font-semibold text-red-700">
                Discussion Form
              </h1>
              <div className="mt-5 space-y-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <div className="mx-auto">
              <h1 className="text-3xl mx-auto text-center bg-gray-400 p-4 rounded-xl font-semibold text-red-700">
                Market Stories
              </h1>
              <div className="mt-5 space-y-5">
                <MarketCard />
                <MarketCard />
                <MarketCard />
                <MarketCard />
                <MarketCard />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden block">
          <div>
            <div>
              <Sidebar />
            </div>
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => changeTab(1)}
                className={`${
                  activeTab === 1
                    ? "border-rose-500 text-white bg-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } flex-1 inline-flex items-center justify-center py-4 border-b-2 font-medium text-sm focus:outline-none bg-[#1F2544]`}
              >
                Discussion Form
              </button>
              <button
                onClick={() => changeTab(2)}
                className={`${
                  activeTab === 2
                    ? "border-rose-500 text-white bg-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } flex-1 inline-flex items-center py-4 justify-center border-b-2 font-medium text-sm focus:outline-none bg-[#1F2544]`}
              >
                Market Stories
              </button>
            </div>
            <div className="mt-4">
              {activeTab === 1 && (
                <div className="p-5 space-y-5 mx-auto">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              )}
              {activeTab === 2 && (
                <div className="flex items-center justify-center">
                  <div className="p-5 space-y-5">
                    <MarketCard />
                    <MarketCard />
                    <MarketCard />
                    <MarketCard />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
