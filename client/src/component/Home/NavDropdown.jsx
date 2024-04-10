import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuStudent from "./DropdownMenuStudent";
import DropdownOther from "./DropdownOther";
import "./NavDropDown.css";


function NavDropdown(props) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setDropdownVisible3] = useState(false);

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
  const handleMouseEnter3 = () => {
    setDropdownVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setDropdownVisible3(false);
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
          {isDropdownVisible2 && <DropdownMenuStudent props={props.student} />}
         
        </div>


        <div
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <button className="navdropbutton">Others</button>
          {/* <DropdownMenu /> */}
          {isDropdownVisible3 && <DropdownOther props={props.other} />}
         
        </div>
      </header>
    </div>
  );
}

export default NavDropdown;
