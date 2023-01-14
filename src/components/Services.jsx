import React from "react";
import beltwork from "/images/belt-work.jpg";
import engine from "/images/engine.jpg";
import geartransmission from "/images/gear-transmission.jpg";
import oilChange from "/images/oil-change.jpg";
import silencer from "/images/silencer.jpg";
import Alignment from "/images/Wheel-Alignment.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      image: beltwork,
      title: "belt replacement",
      color: "shadow-red-700",
    },
    {
      id: 2,
      image: engine,
      title: "Engine Repair ",
      color: "shadow-yellow-700",
    },
    {
      id: 3,
      image: geartransmission,
      title: "gear transmission",
      color: "shadow-teal-700",
    },
    {
      id: 4,
      image: oilChange,
      title: "oil Change",
      color: "shadow-green-700",
    },
    {
      id: 5,
      image: silencer,
      title: "silencer Repair",
      color: "shadow-rose-700",
    },
    {
      id: 6,
      image: Alignment,
      title: "Wheel Alignment",
      color: "shadow-cyan-700",
    },
  ];
  return (
    <section
      name="services"
      className="w-full h-screen bg-gradient-to-b from-slate-700 to-black"
    >
      <div className="max-w-screen-xl h-full mx-auto px-4 text-white  flex items-center justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {services.map((service) => {
            const { id, image, title,color } = service;
            return (
              <div
                key={id}
                className={`hover:scale-105 duration-300 flex flex-col cursor-pointer items-center justify-center my-4 mx-2 rounded-lg bg-black shadow-md ${color}`}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-28 md:h-52 object-cover  w-52 md:w-[22rem] rounded-lg  "
                />
                <h5 className="capitalize md:text-xl py-2">{title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
