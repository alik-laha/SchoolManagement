import "./sidebar.css";
import { useState, useEffect } from "react";

const SideBar = (props) => {
  const [stockVisi, setStockVisi] = useState("none");
  const [userVisi, SetUserVisi] = useState("none");
  const [employVisi, setEmployVisi] = useState("none");
  const [admin, setAdmin] = useState("none");
  const [cashAdmin, setCashAdmin] = useState("");
  const [stockAdmin, setStockAdmin] = useState("");
  const user = sessionStorage.getItem("user");
  useEffect(() => {
    if (user === "ADMIN") {
      setAdmin("block");
    } else if (user === !"ADMIN") {
      setAdmin("none");
    } else if (user === "STOCK ADMIN") {
      setCashAdmin("none");
    } else if (user === "CASH ADMIN") {
      setStockAdmin("none");
    }
  }, [user]);
  const stockVisiblity = () => {
    if (stockVisi === "none") {
      setStockVisi("");
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
    <div className={props.class}>
      <div className="sidebar-main-header">{/* user */}
      <span onClick={userVisiblity} className="user" style={{ display: admin }}>
        User
      </span>
      <div className="user" style={{ display: userVisi }}>
        <div className="Items" onClick={props.onSearch}>Search users</div>
        <div className="Items" onClick={props.oncreate}>Create users</div>
        <div className="Items" style={{ borderBottom: "none" }} onClick={props.onpublish}>
          Publish Notice
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
        <div className="Items" style={{ display: cashAdmin }}>
          Create Vendor
        </div>
        <div className="Items">Item type</div>
        <div className="Items" style={{ display: stockAdmin }}>
          Stock Entry
        </div>
        <div className="Items" style={{ display: cashAdmin }}>
          Cash entry
        </div>
        <div className="Items" style={{ borderBottom: "none", display: admin }}>
          Check Pending Amount
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default SideBar;
