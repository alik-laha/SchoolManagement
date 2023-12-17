import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";
import Footer from "../Home/Footer";
import icon from '../Galllery/GalleryImage/operater_icon.png';
import {useState } from "react";


const Dashboard = () => {
  const HandaleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };
 const [dashbvisi,setdashBVisi]=useState('none');
 const logoutVisiblity = () => {
  if (dashbvisi === "none") {
    setdashBVisi("block");
  } else {
    setdashBVisi("none");
  }
}
  return (
    <>
      <div className='dashoboard-main-header'>
        <span className="logo-lg">DASHBOARD</span>
        <span className='operator-hide' onClick={logoutVisiblity}><p className="logo-lg">AL-HILAL</p><img src={icon}></img></span>
        <span  className='navbar-custom-menu'>
          <ul className="dropdown-menu" style={{ display: dashbvisi}}>
            <li className="user-header">
              <span style={{textAlign:'-webkit-center'}}><img src={icon} alt='Operator Icon' className="img-header"></img></span>
              <p className="text-logout">Welcome {sessionStorage.getItem("name")}</p>
            </li>
            
            <li className="user-footer">
              <span style={{float:'right'}}>
              <button className='dashboard-btn dashboard-btn-default' onClick={HandaleLogout}>Logout</button>
              </span>
            </li>
          </ul>
          
        </span>

        
      </div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <DashBoardMain />
      </div>
      <Footer/>
    </>
  );
};
export default Dashboard;
