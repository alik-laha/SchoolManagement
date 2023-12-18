import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";

import icon from '../Galllery/GalleryImage/operater_icon.png';
import {useState } from "react";


const Dashboard = () => {
  const HandaleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };
 const [dashbvisi,setdashBVisi]=useState('none');
 const [nvbrvisi,setNavbarVisi]=useState('navbar-before');
 const [createUser,setCreateUser]=useState("none")
 const [dashbrdtextwidth,setdashbrdtextwidth]=useState('13%');
 const [rightDashbrd,setrightDashbrd]=useState('85%')
 const [publish,setPublish]=useState('none')
 const [search,setSearch]=useState("none")
 const logoutVisiblity = () => {
  
  if (dashbvisi === "none") {
    setdashBVisi("block");
  } else {
    setdashBVisi("none");
  }

}

const NavbarVisibility = () => {
  if(nvbrvisi=== 'navbar-before'){
    setNavbarVisi('navbar-after');
  }
  else{
    setNavbarVisi('navbar-before');
  }

  if(dashbrdtextwidth==='13%')
  {
    setdashbrdtextwidth('0%');
  }
  else{
    setdashbrdtextwidth('13%');
  }

  if(rightDashbrd==='85%')
  {
    setrightDashbrd('100%');
  }
  else{
    setrightDashbrd('85%');
  }

}
const handaleSearch=()=>{
if(search==='none'){
    setCreateUser("none")
    setPublish('none')
    setSearch('block')
}
else{
    setSearch('none')
}
}
const handaleCreateUser=()=>{
     if(createUser==="none"){
         setCreateUser("block")
         setSearch('none')
         setPublish('none')
     }
     else{
         setCreateUser("none")
     }
}
const handalePublish=()=>{
     if(publish==='none'){
         setCreateUser('none')
         setPublish('block')
         setSearch('none')
     }
     else{
         setPublish('none')
     }
}
  return (
    <>
    <div className="dashboard-root">
    <div className='dashoboard-main-header'>
        <span className="logo-lg dashboard-text" style={{width:dashbrdtextwidth}}>{sessionStorage.getItem("user")}</span>
        <span  style={{fontSize:'20px',cursor:'pointer'}} className="logo-lg dashboard-open" onClick={NavbarVisibility}>☰</span>
        <span className='operator-hide' onClick={logoutVisiblity}><p className="logo-lg">{sessionStorage.getItem("name").toUpperCase()}</p><img src={icon}></img></span>
        <span  className='navbar-custom-menu'>
          <ul className="dropdown-menu" style={{ display: dashbvisi}}>
            <li className="user-header">
              <span style={{textAlign:'-webkit-center'}}><img src={icon} alt='Operator Icon' className="img-header"></img></span>
              <p className="text-logout">Welcome {sessionStorage.getItem("name")}</p>
                <p className="text-logout">{sessionStorage.getItem("user")}</p>
            </li>
            
            <li className="user-footer"> 
              <button className='dashboard-btn dashboard-btn-default' onClick={HandaleLogout}>Logout</button>
            </li>
          </ul>
        </span>

        
      </div>
      <div className="dashboard-main-panel">
        <SideBar class={nvbrvisi} oncreate={handaleCreateUser} onpublish={handalePublish} onSearch={handaleSearch}/>
        <DashBoardMain right={rightDashbrd} createUser={createUser} Publish={publish} Search={search}/>
      </div>
    </div>
     
      
    </>
  );
};
export default Dashboard;
