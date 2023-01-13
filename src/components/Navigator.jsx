import React from "react";
import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import {Link} from 'react-scroll'
const Navigator = () => {
    const Navigators = [
        {
            id:1,
            link:"home",
            icon : <FaHome
          size={20}
          className="cursor-pointer hover:text-white duration-300"/>
        },
        {
            id:2,
            link:"services",
            icon: <MdHomeRepairService size={20}
          className="cursor-pointer hover:text-white duration-300"/>
        },
        {
            id:3,
            link:"about",
            icon:
            <FaInfo size={20}
          className="cursor-pointer hover:text-white duration-300"/>
        },
        {
            id:4,
            link:"contact",
            icon: <FiPhoneCall size={20}
          className="cursor-pointer hover:text-white duration-300"/>
        }
    ]
  return (
    <div className=" fixed w-full  bottom-[5%] flex justify-center mx-auto rounded-full">
      <div className="bg-cyan-500 flex gap-16 px-8 py-4 rounded-full">
        {
            Navigators.map((nav)=>{
                const {id, link, icon} = nav
                return(
                    <div key={id}>
                        <Link smooth duration={500} to={link}>{icon}</Link>
                    </div>
                )
            })
        }
        
        
      </div>
    </div>
  );
};

export default Navigator;
