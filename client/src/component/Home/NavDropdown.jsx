import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "./NavDropDown.css";


function NavDropdown(props) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };

  return (
    <div className="NavDropdown">
      <header className="App-header">
        <div
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="navdropbutton">Institute</button>
          {/* <DropdownMenu /> */}
          {isDropdownVisible && <DropdownMenu props={props.value} />}
         
        </div>
        <div
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <button className="navdropbutton">Students</button>
          {/* <DropdownMenu /> */}
          {isDropdownVisible2 && <DropdownMenu props={props.student} />}
         
        </div>
      </header>
    </div>
  );
}

export default NavDropdown;
