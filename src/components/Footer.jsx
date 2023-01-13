import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="h-[75vh] w-full bg-black px-4 text-white">
      <hr className="" />
      <div className="max-w-screen-xl mx-auto">
        <div className="my-2">
          <h3 className="text-2xl flex items-center">
            <GoLocation /> Address :
          </h3>
          <h4 className="text-xl">Dongare Automobiles</h4>
          <p>319/6, Opposite of Amrai Officer Club, Mahaveer Nagar, </p>
          <p>Vakharbhag, Sangli</p>
        </div>
        <div className="my-2">
          <h3 className="text-2xl flex items-center">
            {" "}
            <TbPhoneCall />
            Contact No :
          </h3>
          <p className="flex items-center gap-5">
            <a href="tel:9637212336" className="">
              +91 9637212336
            </a>
            <a href="http://wa.me/+919637212336" target="_blank">
              <ImWhatsapp className="text-green-500" size={25} />
            </a>
          </p>
          <p>
            <a href="tel:7020805528" className="">
              +91 7020805528
            </a>
          </p>
        </div>
        <div className="my-2">
          <h3 className="text-2xl">Service Hours :</h3>
          <div className="flex justify-between border-b py-2 border-dotted">
            <p>Sunday: </p>
            <span className="text-rose-500">Sunday</span>
          </div>
          <div className="flex justify-between border-b py-2 border-dotted">
            <p>Monday:</p>
            <span className="text-green-400">09:00AM to 6:30PM</span>
          </div>
          <div className="flex justify-between border-b py-2 border-dotted">
            <p>Tuesday: </p>
            <span className="text-green-400">09:00AM to 6:30PM</span>
          </div>
          <div className="flex justify-between border-b py-2 border-dotted">
            <p>Wednesday: </p>
            <span className="text-green-400">09:00AM to 6:30PM</span>
          </div>
          <div className="flex justify-between border-b py-2 border-dotted">
            <p>Thursday: </p>
            <span className="text-green-400">09:00AM to 6:30PM</span>
          </div>
          <div className="flex justify-between border-b py-2 border-dotted">
            <p>Friday: </p>
            <span className="text-green-400">09:00AM to 6:30PM</span>
          </div>
          <div className="flex justify-between border-b py-2 border-dotted">
            <p>Saturday: </p>
            <span className="text-green-400">09:00AM to 6:30PM</span>
          </div>
        </div>
        <div className="flex justify-center md:my-4">
          <p className="text-sm">
            Copyright ©{new Date().getFullYear()} Dongare Automobiles. All
            Rights Reserved. Website designed by Shreyas Dongare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
