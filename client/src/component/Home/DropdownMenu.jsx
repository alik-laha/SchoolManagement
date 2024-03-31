import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = (prop) => {
  return (
    <div className="dropdown-menu">
      {prop.props.name}
      <ul>
        <li>
          <NavLink to={prop.props.value.history}>{prop.props.value.founder}</NavLink>
        </li>

        <li>
          <NavLink to={prop.props.value.vm}>{prop.props.value.visionmision}</NavLink>
        </li>
        <li>
          <NavLink to={prop.props.value.programs}>{prop.props.value.progrm} </NavLink>
        </li>
        <li>
          <NavLink to={prop.props.value.facilities}>{prop.props.value.facility}</NavLink>
        </li>
       
      </ul>
    </div>
  );
};

export default DropdownMenu;
