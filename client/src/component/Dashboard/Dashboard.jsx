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
    const [notice,setNotice]=useState('none')


    const [vendorDisplay,setVendorDisplay]=useState("none")
    const[itemCreate,setItemCreate]=useState('none')
    const [stockEntry,setStockEntry]=useState('none')
    const [stockView,setStockView]=useState('none')
    const [secondstockEntry,setSecondstockEntry]=useState('none')
    const [secondStockView,setSecondStockView]=useState('none')
    const [modifySearchView,setmodifySearchView]=useState('none')


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
    setVendorDisplay('none')
    setSearch('block')
    setView('flex')
    setItemCreate('none')
    setNotice('none')
    setStockEntry('none')
    setStockView('none')
    setSecondstockEntry('none')
    setSecondStockView("none")
    setmodifySearchView('none')
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
         setVendorDisplay('none')
         setSearch('none')
         setPublish('none')
         setView('none')
         setItemCreate('none')
            setNotice('none')
         setStockEntry('none')
         setStockView('none')
         setSecondstockEntry('none')
         setSecondStockView("none")
         setmodifySearchView('none')
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
         setVendorDisplay('none')
         setPublish('block')
         setSearch('none')
        setView('none')
         setItemCreate('none')
         setNotice('none')
         setStockEntry('none')
         setStockView('none')
         setSecondstockEntry('none')
         setSecondStockView("none")
         setmodifySearchView('none')
     }
     else{
         setPublish('none')
     }
}

const HandleVendorCreate=()=>{
     if(vendorDisplay==='none'){
         setVendorDisplay('block')
         setCreateUser('none')
         setPublish('none')
         setSearch('none')
         setView('none')
         setItemCreate('none')
         setNotice('none')
         setStockEntry('none')
         setStockView('none')
         setSecondstockEntry('none')
         setSecondStockView("none")
         setmodifySearchView('none')
     }
        else{
            setVendorDisplay('none')
        }

}
const handaleNotice=()=>{
     if(notice==='none'){
         setCreateUser('none')
         setVendorDisplay('none')
         setPublish('none')
         setSearch('none')
         setView('none')
         setItemCreate('none')
         setNotice('block')
         setStockEntry('none')
         setStockView('none')
         setSecondstockEntry('none')
         setSecondStockView("none")
         setmodifySearchView('none')
     }
        else{
            setNotice('none')
        }
}
const handleItemCreate=()=>{
        if(itemCreate==='none'){
            setItemCreate('block')
            setCreateUser('none')
            setVendorDisplay('none')
            setPublish('none')
            setSearch('none')
            setView('none')
            setNotice('none')
            setStockEntry('none')
            setStockView('none')
            setSecondstockEntry('none')
            setSecondStockView("none")
            setmodifySearchView('none')
        }
            else{
                setItemCreate('none')
            }
}
const handleStockEntry=()=>{
        if(stockEntry==='none'){
            setStockEntry('block')
            setItemCreate('none')
            setCreateUser('none')
            setVendorDisplay('none')
            setPublish('none')
            setSearch('none')
            setView('none')
            setNotice('none')
            setStockView('none')
            setSecondstockEntry('none')
            setSecondStockView("none")
            setmodifySearchView('none')
        }
            else{
                setStockEntry('none')
            }
}
const handleStockView=()=>{
        if(stockView==='none'){
            setStockView('block')
            setStockEntry('none')
            setItemCreate('none')
            setCreateUser('none')
            setVendorDisplay('none')
            setPublish('none')
            setSearch('none')
            setNotice('none')
            setSecondstockEntry('none')
            setSecondStockView("none")
            setmodifySearchView('none')
        }
            else{
                setStockView('none')
            }
          }

            

const handleSecondStockEntrySearch=()=>{
              if(secondstockEntry==='none'){
                  setSecondstockEntry('block')
                  setStockEntry('none')
                  setItemCreate('none')
                  setCreateUser('none')
                  setVendorDisplay('none')
                  setPublish('none')
                  setSearch('none')
                  setNotice('none')
                  setStockView('none')
                  setSecondStockView("none")
                  setmodifySearchView('none')
              }
                  else{
                      setSecondstockEntry('none')
                  }


                }


const handleSecondStockView=()=>{
                  if(secondStockView==='none'){
                      setSecondStockView('block')
                      setStockEntry('none')
                      setItemCreate('none')
                      setCreateUser('none')
                      setVendorDisplay('none')
                      setPublish('none')
                      setSearch('none')
                      setNotice('none')
                      setStockView('none')
                      setSecondstockEntry("none")
                      setmodifySearchView('none')
                  }
                      else{
                          setSecondStockView('none')
                      }
    
    
                    }       
                    
                    const handleModifySeacrch=()=>{
                      if(modifySearchView==='none'){
                        setmodifySearchView('block')
                          setStockEntry('none')
                          setItemCreate('none')
                          setCreateUser('none')
                          setVendorDisplay('none')
                          setPublish('none')
                          setSearch('none')
                          setNotice('none')
                          setStockView('none')
                          setSecondstockEntry("none")
                      }
                          else{
                            setmodifySearchView('none')
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
        <SideBar class={nvbrvisi} onSearch={handaleSearch} oncreate={handaleCreateUser}
                 onpublish={handalePublish} onNoticeManupulation={handaleNotice}
                 onVendorCreate={HandleVendorCreate} onItemCreate={handleItemCreate}
                 onStockEntry={handleStockEntry}
                 onStockView={handleStockView} onSecondStockEntry={handleSecondStockEntrySearch} onSecondStockView={handleSecondStockView}
                 onModifySeachEntry={handleModifySeacrch}/>


        <DashBoardMain right={rightDashbrd} Search={search} createUser={createUser}
                       Publish={publish} View={view}
                       Notice={notice} VendorCreateDisplay={vendorDisplay}
                       ItemCreateDisplay={itemCreate} EntryStock={stockEntry}
                       StockView={stockView} SecondstockEntrySearch={secondstockEntry} SecondStockView={secondStockView} 
                       modifyStock={modifySearchView}/>
      </div>
    </div>
     
      
    </>
  );
};


export default Dashboard;
