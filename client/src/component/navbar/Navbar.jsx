import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Container">
      <div>Logo</div>
      <h2 className="Name">AL-HILAL MISSON</h2>

      <NavLink className="dash" to="/dashboard">
        Dashboard
      </NavLink>
    </div>
  );
};
export default Navbar;
