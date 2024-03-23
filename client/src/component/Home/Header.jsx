// src/components/Header.js
import React from "react";
import logo from './logo_ahm.jpg'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar alhilal-header_color-css text-white  px-12">
      <div className="flex-1">
      <img src={logo} alt='logo image' height ={90} width={90} className="responsive-header-image"/> 
            <div style={{display: "grid"}}>
            <span className=' px-12 text-2xl responsive-header-1' >AL HILAL MISSION <span style={{fontSize:'17px'}}>  (KADAMBAGACHI) </span></span>
            <span className=' px-12 text-1xl' >An Ideal Educational Cultural & Social Welfare Organization</span>
            {/*<span className=' px-12 text-2xl' >WBBSE and WBCHSE Syllabi are being followed</span>*/}
            <span className=' px-12 text-1xl' >ESTD. 1999</span>
            </div>
       {/*<a href="#" className="btn btn-ghost normal-case text-1xl">CodeBun</a>*/}
      </div>
      <div className="flex-none">
        
        <ul className="menu menu-horizontal p-0 font-bold ">
          <li >
          <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
          <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
          <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          <li className="dashboard-btn-home">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
