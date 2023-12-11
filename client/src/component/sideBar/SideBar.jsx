import "./sidebar.css";
import { useState } from "react";

const SideBar = () => {
  const [stockVisi, setStockVisi] = useState("none");
  const [userVisi, SetUserVisi] = useState("none");

  const stockVisiblity = () => {
    if (stockVisi === "none") {
      setStockVisi("block");
      SetUserVisi("none");
    } else {
      setStockVisi("none");
    }
  };
  const userVisiblity = () => {
    if (userVisi === "none") {
      SetUserVisi("block");
    } else {
      SetUserVisi("none");
    }
  };

  return (
    <div className="side">
      <span onClick={userVisiblity}>User</span>
      <div id="stock" style={{ display: userVisi }}>
        <ul>
          <li>Vendor</li>
          <li>Item type</li>
          <li>Stock Entry</li>
          <li>Check Pending Amount</li>
        </ul>
      </div>
      {/* user */}
      <select className="user">
        <option>Dashboard users</option>
        <option>Create users</option>
        <option>View users</option>
      </select>
      {/* employ */}
      <select className="user">
        <option>Employ(Staff)</option>
        <option>Create Employ</option>
        <option>View Employ</option>
      </select>

      {/* student */}
      <select className="user">
        <option>Student details</option>
      </select>

      {/* stock */}
      <span onClick={stockVisiblity}>Stock</span>
      <div id="stock" style={{ display: stockVisi }}>
        <ul>
          <li>Vendor</li>
          <li>Item type</li>
          <li>Stock Entry</li>
          <li>Check Pending Amount</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
