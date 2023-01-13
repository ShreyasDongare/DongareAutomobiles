import React from 'react'
import { BsGearFill } from "react-icons/bs";
import car from "/images/car.png";
import wheel from "/images/wheel.png";

const Header = () => {
  return (
    <header className="w-full   bg-black px-4">
      <div className="max-w-screen-xl flex justify-between mx-auto">
        <div className="flex items-center relative">
          <img src={car} alt="" className="h-14" />
          <img
            src={wheel}
            alt=""
            className="h-6 absolute top-[34px] left-[12px] animate-spin"
          />
          <img
            src={wheel}
            alt=""
            className="h-6 absolute top-[34px] left-[94px] animate-spin"
          />
        </div>
        <h1 className=" cursor-pointer uppercase py-4 font-poppins text-2xl italic flex items-center text-white">
          D<BsGearFill size={22} className="hover:rotate-90 duration-300" />
          ngare Automobiles
        </h1>
      </div>
    </header>
  );
}

export default Header
