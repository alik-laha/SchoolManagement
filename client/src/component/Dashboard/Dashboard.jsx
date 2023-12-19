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
 
 const [dashbrdtextwidth,setdashbrdtextwidth]=useState('12%');
 const [rightDashbrd,setrightDashbrd]=useState('85%');

 const [createUser,setCreateUser]=useState("none")
 const [publish,setPublish]=useState('none')
 const [search,setSearch]=useState("none")
const [view,setView]=useState('none')
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

  if(dashbrdtextwidth==='12%')
  {
    setdashbrdtextwidth('0%');
  }
  else{
    setdashbrdtextwidth('12%');
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
    setCreateUser('none')
    setView('none')
}
}
const handaleCreateUser=()=>{
     if(createUser==="none"){
         setCreateUser("block")
         setSearch('none')
         setPublish('none')
         setView('none')

     }
     else{
         setCreateUser("none")
         setSearch('none')
         setView('none')
     }
}
const handalePublish=()=>{
     if(publish==='none'){
         setCreateUser('none')
         setPublish('block')
         setSearch('none')
        setView('none')
     }
     else{
         setPublish('none')
     }
}
const handaleView=()=>{
    if(view==='none'){
        setPublish('none')
        setCreateUser('none')
        setView('flex')
    }
    else if(createUser==='block' || search==='block'){
        setView('flex')

    }
    else{
        setView('none')
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
        <SideBar class={nvbrvisi} onSearch={handaleSearch} oncreate={handaleCreateUser}  onview={handaleView} onpublish={handalePublish}/>
        <DashBoardMain right={rightDashbrd} Search={search} createUser={createUser} Publish={publish} View={view}/>
      </div>
    </div>
     
      
    </>
  );
};
export default Dashboard;
