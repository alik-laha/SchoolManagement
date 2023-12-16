import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = (prop) => {
  return (
    <div className="dropdown-menu">
      {prop.props.name}
      <ul>
        <li>
          <NavLink to={"/" + prop.props.value.history}>History</NavLink>
        </li>

        <li>
          <NavLink to={prop.props.value.vm}>Vision & Mission</NavLink>
        </li>
        <li>
          <NavLink to={prop.props.value.programs}>Programs </NavLink>
        </li>
        <li>
          <NavLink to={prop.props.value.facilities}>Facilities</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
