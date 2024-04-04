import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenuStudent = (prop) => {
  console.log(prop)
  return (
    
    <div className="dropdown-menu">

      
      <ul>
        <li>
          <NavLink to={prop.props.dailylink}>{prop.props.daily}</NavLink>
        </li>

        <li>
          <NavLink to={prop.props.vm}>{prop.props.visionmision}</NavLink>
        </li>
        <li>
          <NavLink to={prop.props.programs}>{prop.props.progrm} </NavLink>
        </li>
        <li>
          <NavLink to={prop.props.facilities}>{prop.props.facility}</NavLink>
        </li>
       
      </ul>
    </div>
  );
};

export default DropdownMenuStudent;
