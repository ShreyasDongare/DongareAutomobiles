import React from 'react'
import { BsGearFill } from "react-icons/bs";
import hero from "/images/heroImage.jpg";

const Home = () => {
  return (
    <section
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-slate-900 to-slate-700"
    >
      <div className="max-w-screen-xl h-full mx-auto  text-white px-4 flex flex-col md:flex-row justify-center items-center gap-4 ">
        <div>
          <h1 className="text-6xl flex items-baseline">
            D<BsGearFill size={34} className="text-rose-600 animate-spin" />
            ngare
          </h1>
          <h1 className="text-6xl flex items-center">Automobiles</h1>
          <h3 className=" my-4 text-2xl ">
            Premium Automotive Repairs & Services in Sangli, Maharashtra.
          </h3>
          <p className="my-2">
            Are you looking for a trusted place for auto repair and service? Do
            you want to save your
            <span className="text-rose-600"> time and money</span> and find a
            place that provides full service for your automobile?
          </p>
          <p className="my-2">
            <span className="text-rose-600">Dongare Automobiles</span> has been
            in the business since 1965, providing customers with high-quality
            automotive repairs, installations, and maintenance services, along
            with a top-notch customer experience.
          </p>
          <button  className="bg-cyan-600 px-4 py-2 rounded duration-300 hover:bg-cyan-800">
            Contact Now
          </button>
        </div>
        <div>
          <img
            src={hero}
            alt="hero"
            className="rounded-tl-3xl rounded-br-3xl shadow-lg shadow-black md:w-[1500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home
