import React from "react";
import { NavLink } from "react-router-dom";

const DropdownOther = (prop) => {
  console.log(prop)
  return (
    
    <div className="dropdown-menu">

      
      <ul>
        <li>
          <NavLink to={prop.props.dwnldlink}>{prop.props.dwnld}</NavLink>
        </li>

       {/*  <li>
          <NavLink to={prop.props.markslink}>{prop.props.marks}</NavLink>
        </li>
        <li>
          <NavLink to={prop.props.programs}>{prop.props.progrm} </NavLink>
        </li>
        <li>
          <NavLink to={prop.props.facilities}>{prop.props.facility}</NavLink>
        </li> */}
       
      </ul>
    </div>
  );
};

export default DropdownOther;
