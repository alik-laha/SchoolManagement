// src/components/Header.js
import React from "react";
import logo from './Home/logo_ahm.jpg'
import { NavLink } from "react-router-dom";
const CommonHeader = () => {
  return (
    <div className="navbar alhilal-header_color-css text-white  px-12 ">
      <div className="flex-1">
      <img src={logo} alt='logo image' height ={90} width={90}/> 
            <div style={{display: "grid"}}>
            <span className='px-12 text-2xl' >AL HILAL MISSION</span>
            <span className='px-12 text-1xl' >An Ideal Educational Cultural & Social Welfare Organization</span>
            </div>
       {/*<a href="#" className="btn btn-ghost normal-case text-1xl">CodeBun</a>*/}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 font-bold ">
          <li >
          <NavLink to="/">Back to Home</NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};
export default CommonHeader;
