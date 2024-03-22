import React from "react";
import "./infombar.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import Headname from "../logobar/Headname";

const Infombar = () => {
  return (
    <>
      <div className="infoparent">
        {/* logo div begin */}
            <Headname/>
        {/* logo div end */}
        
        <div className="number">
          <p>
            <i class="fa-solid fa-phone"></i>
          </p>
          <BsTelephoneFill/>
          <p>+234(0)8032279851 <br /> Call customer care</p>
        </div>
        <div className="email">
        <HiOutlineMailOpen/>
          <p>
           
          </p>
          <p>Write us <br /> spoc.nigeria@arravo.co</p>
        </div>
        <div className="location">
        <IoLocationSharp/>
          <p>33 Oyinkan Abayomi Drive,<br /> Ikoyi, Lagos, Nigeria.</p>
        </div>
        <div className="search">
          <p><i class="fa-solid fa-magnifying-glass"></i></p>
        </div>
      </div>
      
    </>
  );
};

export default Infombar;
