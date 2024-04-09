import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = (prop) => {
  
  return (
    
    <div className="dropdown-menu">

      
      <ul>
      <li>
          <NavLink to={prop.props.facilities}>{prop.props.facility}</NavLink>
        </li>
        <li>
          <NavLink to={prop.props.history}>{prop.props.founder}</NavLink>
        </li>

        <li>
          <NavLink to={prop.props.vm}>{prop.props.visionmision}</NavLink>
        </li>
        <li>
          <NavLink to={prop.props.programs}>{prop.props.progrm} </NavLink>
        </li>
        
       
      </ul>
    </div>
  );
};

export default DropdownMenu;
