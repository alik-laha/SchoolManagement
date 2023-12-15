import React from "react";
import { NavLink } from "react-router-dom";


const DropdownMenu = (prop) => {
  return (
    <div className="dropdown-menu">{prop.props.name}

      <ul>
      <li><NavLink to ={'/'+prop.props.history}>History</NavLink></li>
        
        <li><NavLink to ="{prop.props.vm}">Vision & Mission</NavLink></li>
        <li><NavLink to ='{prop.props.programs}'>Programs </NavLink></li>
        <li><NavLink to ='{prop.props.facilities}'>Facilities</NavLink></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;