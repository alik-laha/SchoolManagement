// src/components/Header.js
import React from "react";
import logo from './logo_ahm.jpg'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-[#FA7D19] text-white  px-16">
      <div className="flex-1">
      <img src={logo} alt='logo image' height ={90} width={90}/> 
            <div style={{display: "grid"}}>
            <span className='text-white px-16 text-3xl' >AL HILAL MISSION</span>
            <span className='text-white px-16 text-2xl' >An Ideal Educational Cultural & Social Welfare Organization</span>
            </div>
       {/*<a href="#" className="btn btn-ghost normal-case text-1xl">CodeBun</a>*/}
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 font-bold ">
          <li >
            <a>About</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
