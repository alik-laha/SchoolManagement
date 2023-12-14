import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "./NavDropDown.css"

function NavDropdown(prop) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <div className="NavDropdown">
      <header className="App-header">
        <div
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="navdropbutton">{prop.value}</button>
          {/* <DropdownMenu /> */}
          {isDropdownVisible && <DropdownMenu />}
        </div>
      </header>
    </div>
  );
}

export default NavDropdown;