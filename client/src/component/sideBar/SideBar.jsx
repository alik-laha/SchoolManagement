import "./sidebar.css";
import { useState } from "react";

const SideBar = () => {
  const [stockVisi, setStockVisi] = useState("none");
  const [userVisi, SetUserVisi] = useState("none");
  const [employVisi, setEmployVisi] = useState("none");

  const stockVisiblity = () => {
    if (stockVisi === "none") {
      setStockVisi("block");
      SetUserVisi("none");
      setEmployVisi("none");
    } else {
      setStockVisi("none");
    }
  };
  const userVisiblity = () => {
    if (userVisi === "none") {
      SetUserVisi("block");
      setEmployVisi("none");
      setStockVisi("none");
    } else {
      SetUserVisi("none");
    }
  };
  const employVisiblity = () => {
    if (employVisi === "none") {
      setEmployVisi("block");
      SetUserVisi("none");
      setStockVisi("none");
    } else {
      setEmployVisi("none");
    }
  };

  return (
    <div className="side">
      {/* user */}
      <span onClick={userVisiblity} className="user">
        User
      </span>
      <div className="user" style={{ display: userVisi }}>
        <div className="Items">Dashboard users</div>
        <div className="Items">Create users</div>
        <div className="Items" style={{ borderBottom: "none" }}>
          View users
        </div>
      </div>

      {/* employ */}
      {/* <div onClick={employVisiblity} className="user">
        Employ
      </div>
      <div className="user" style={{ display: employVisi }}>
        <div className="Items">Employ(Staff)</div>
        <div className="Items">Create Employ</div>
        <div className="Items">View Employ</div>
      </div> */}

      {/* student */}
      {/* <select className="user">
        <option>Student details</option>
      </select> */}

      {/* stock */}
      <span onClick={stockVisiblity} className="user">
        Stock
      </span>
      <div className="user" style={{ display: stockVisi }}>
        <div className="Items">Vendor</div>
        <div className="Items">Item type</div>
        <div className="Items">Stock Entry</div>
        <div className="Items" style={{ borderBottom: "none" }}>
          Check Pending Amount
        </div>
      </div>
    </div>
  );
};

export default SideBar;
