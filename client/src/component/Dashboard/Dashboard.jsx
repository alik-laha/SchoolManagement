import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";

import icon from '../Galllery/GalleryImage/operater_icon.png';
import {useState } from "react";




const Dashboard = () => {
  const HandaleLogout = () => {
    sessionStorage.removeItem("user");

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
 const [itemCreate,setItemCreate]=useState('none')
 const [stockEntry,setStockEntry]=useState('none')
 const [stockView,setStockView]=useState('none')
 const [secondstockEntry,setSecondstockEntry]=useState('none')
 const [secondStockView,setSecondStockView]=useState('none')
 const [modifySearchView,setmodifySearchView]=useState('none')
const [bedview,setbedview]=useState('none')

 const [bedentry,setbedentry]=useState('none')
 const [hostelentryview,sethostelview]=useState('none')
 const [checkpending,setcheckpending]=useState('none')
 const [hostelentrycreate,sethostelentrycreate]=useState('none')
 const [academicview,setacademicview]=useState('none')
const [studententry,setstudententry]=useState('none')
const [masterstudentview,setmasterstudentview]=useState('none')
const [academicEntryUpdate,setacademicEntryUpdate]=useState('none')


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
    setbedentry('none')
    sethostelview('none')
    setbedview('none')
    setcheckpending('none')
    sethostelentrycreate('none')
    setacademicview('none')
    setstudententry('none')
    setmasterstudentview('none')
    setmasterstudentview('none')
    setacademicEntryUpdate('none')

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
         sethostelview('none')
         setbedview('none')
         setbedentry('none')
         setcheckpending('none')
         sethostelentrycreate('none')
         setacademicview('none')
         setstudententry('none')
         setmasterstudentview('none')
         setacademicEntryUpdate('none')
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
         sethostelview('none')
         setbedentry('none')
         setbedview('none')
         setcheckpending('none')
         sethostelentrycreate('none')
         setacademicview('none')
         setstudententry('none')
         setmasterstudentview('none')
         setacademicEntryUpdate('none')
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
         sethostelview('none')
         setbedentry('none')
         setbedview('none')
         setcheckpending('none')
         sethostelentrycreate('none')
         setacademicview('none')
         setstudententry('none')
         setmasterstudentview('none')
         setacademicEntryUpdate('none')
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
         sethostelview('none')
         setbedentry('none')
         setbedview('none')
         setcheckpending('none')
         sethostelentrycreate('none')
         setacademicview('none')
         setstudententry('none')
         setmasterstudentview('none')
         setacademicEntryUpdate('none')
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
            sethostelview('none')
            setbedentry('none')
            setbedview('none')
            setcheckpending('none')
            sethostelentrycreate('none')
            setacademicview('none')
            setstudententry('none')
            setmasterstudentview('none')
            setacademicEntryUpdate('none')
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
            sethostelview('none')
            setbedentry('none')
            setbedview('none')
            setcheckpending('none')
            sethostelentrycreate('none')
            setacademicview('none')
            setmasterstudentview('none')
            setstudententry('none')
            setacademicEntryUpdate('none')
        }
            else{
                setStockEntry('none')
            }
}
const handleBedViewStatus=()=>{
     if (bedview==='none'){
       setbedview('block')
       setStockEntry('none')
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
       sethostelview('none')
         setbedentry('none')
         setcheckpending('none')
         sethostelentrycreate('none')
         setacademicview('none')
         setstudententry('none')
         setacademicEntryUpdate('none')
         setmasterstudentview('none')
     }
        else{
        setbedview('none')
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
            sethostelview('none')
            setbedentry('none')
            setbedview('none')
            setcheckpending('none')
            sethostelentrycreate('none')
            setacademicview('none')
            setstudententry('none')
            setmasterstudentview('none')
            setacademicEntryUpdate('none')
        }
            else{
                setStockView('none')
            }
          }

  const AcademicEntryUpdate=()=>{
     if(academicEntryUpdate==='none'){
         setacademicEntryUpdate('block')
         setStockView('none')
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
         sethostelview('none')
            setbedentry('none')
            setbedview('none')
            setcheckpending('none')
            sethostelentrycreate('none')
            setacademicview('none')
            setstudententry('none')
            setmasterstudentview('none')
     }
        else{
            setacademicEntryUpdate('none')
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
                  sethostelview('none')
                  setbedview('none')
                  sethostelentrycreate('none')
                  setbedentry('none')
                  setcheckpending('none')
                  setacademicview('none')
                  setstudententry('none')
                  setacademicEntryUpdate('none')
                  setmasterstudentview('none')
              }
                  else{
                      setSecondstockEntry('none')
                  }


                }

 const handlehostelEntryCreate=()=> {
    if(hostelentrycreate==='none'){
      sethostelentrycreate('block')
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
      sethostelview('none')
      setbedview('none')
      setbedentry('none')
      setcheckpending('none')
      setacademicview('none')
        setstudententry('none')
        setmasterstudentview('none')
        setacademicEntryUpdate('none')
    }
    else{
        sethostelentrycreate('none')
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
                      sethostelview('none')
                      setbedentry('none')
                      setbedview('none')
                      setcheckpending('none')
                      sethostelentrycreate('none')
                      setacademicview('none')
                      setstudententry('none')
                      setmasterstudentview('none')
                      setacademicEntryUpdate('none')
                  }
                      else{
                          setSecondStockView('none')
                      }
    
    
                    }       
                    
                    const handleModifySearch=()=>{
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
                          setSecondStockView("none")
                          sethostelview('none')
                          setbedentry('none')
                          setbedview('none')
                          setcheckpending('none')
                          sethostelentrycreate('none')
                          setacademicview('none')
                          setstudententry('none')
                          setacademicEntryUpdate('none')
                          setmasterstudentview('none')
                      }
                          else{
                            setmodifySearchView('none')
                          }
        
        
                        } 
                        
                        const handlebedentry=()=>{
                          if(bedentry==='none'){
                            setbedentry('block')
                              setStockEntry('none')
                              setItemCreate('none')
                              setCreateUser('none')
                              setVendorDisplay('none')
                              setPublish('none')
                              setSearch('none')
                              setNotice('none')
                              setStockView('none')
                              setSecondstockEntry("none")
                              sethostelview('none')
                              setbedview('none')
                              setbedview('none')
                              setcheckpending('none')
                              sethostelentrycreate('none')
                              setmodifySearchView('none')
                              setSecondStockView("none")
                              setacademicview('none')
                              setstudententry('none')
                              setmasterstudentview('none')
                              setacademicEntryUpdate('none')
                          }
                              else{
                                setbedentry('none')
                              }
            
            
                            }

                            const handlehostelview=()=>{
                              if(hostelentryview==='none'){
                                sethostelview('block')
                                  setStockEntry('none')
                                  setItemCreate('none')
                                  setCreateUser('none')
                                  setVendorDisplay('none')
                                  setPublish('none')
                                  setSearch('none')
                                  setNotice('none')
                                  setStockView('none')
                                  setSecondstockEntry("none")
                                  setbedview('none')
                                  setbedentry('none')
                                  setcheckpending('none')
                                  sethostelentrycreate('none')
                                  setSecondStockView("none")
                                  setacademicview('none')
                                  setstudententry('none')
                                  setmasterstudentview('none')
                                  setacademicEntryUpdate('none')
                              }
                                  else{
                                    sethostelview('none')
                                  }
                
                
                                } 
                                
                                const handleCheckPending=()=>{
                                  if(checkpending==='none'){
                                    setcheckpending('block')
                                      setStockEntry('none')
                                      setItemCreate('none')
                                      setCreateUser('none')
                                      setVendorDisplay('none')
                                      setPublish('none')
                                      setSearch('none')
                                      setNotice('none')
                                      setStockView('none')
                                      setSecondstockEntry("none")
                                      setbedview('none')
                                      setbedentry('none')
                                      sethostelentrycreate('none')
                                      sethostelview('none')
                                      setmodifySearchView('none')
                                        setSecondStockView("none")
                                        setacademicview('none')
                                      setstudententry('none')
                                      setmasterstudentview('none')
                                      setacademicEntryUpdate('none')
                                  }
                                      else{
                                        setcheckpending('none')
                                      }
                    
                    
                                    } 

                                    const handleacademicview=()=>{
                                      if(academicview==='none'){
                                        setacademicview('block')
                                          setStockEntry('none')
                                          setItemCreate('none')
                                          setCreateUser('none')
                                          setVendorDisplay('none')
                                          setPublish('none')
                                          setSearch('none')
                                          setNotice('none')
                                          setStockView('none')
                                          setSecondstockEntry("none")
                                          setbedview('none')
                                          setbedentry('none')
                                          sethostelentrycreate('none')
                                          sethostelview('none')
                                          setmodifySearchView('none')
                                            setSecondStockView("none")
                                          setstudententry('none')
                                          setmasterstudentview('none')
                                          setacademicEntryUpdate('none')
                                      }
                                          else{
                                            setacademicview('none')
                                          }
                        
                        
                                        } 
                    const handleaStudentEntry=()=>{
                       if(studententry==='none'){
                         setstudententry('block')
                         setacademicview('none')
                           setStockEntry('none')
                           setItemCreate('none')
                           setCreateUser('none')
                           setVendorDisplay('none')
                           setPublish('none')
                           setSearch('none')
                           setNotice('none')
                           setStockView('none')
                           setSecondstockEntry("none")
                           setbedview('none')
                           setbedentry('none')
                           sethostelentrycreate('none')
                           sethostelview('none')
                           setmodifySearchView('none')
                           setSecondStockView("none")
                           setmasterstudentview('none')
                           setacademicEntryUpdate('none')

                       }
                       else{
                            setstudententry('none')
                       }
                    }
      const handleMasterStudentView=()=>{
        if(masterstudentview==='none'){
          setmasterstudentview('block')
          setacademicview('none')
            setStockEntry('none')
            setItemCreate('none')
            setCreateUser('none')
            setVendorDisplay('none')
            setPublish('none')
            setSearch('none')
            setNotice('none')
            setStockView('none')
            setSecondstockEntry("none")
            setbedview('none')
            setbedentry('none')
            sethostelentrycreate('none')
            sethostelview('none')
            setmodifySearchView('none')
            setSecondStockView("none")
            setstudententry('none')
            setacademicEntryUpdate('none')

        }
        else{
             setmasterstudentview('none')
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
                 onModifySeachEntry={handleModifySearch}
                 onCreatebed={handlebedentry} onHostelEntryView={handlehostelview}
                 onViewBedStatus={handleBedViewStatus} onCheckPending={handleCheckPending} onHostelEntryCreate={handlehostelEntryCreate}
                 onAcademicView={handleacademicview}  onMasterStudentEntry={handleaStudentEntry} onMasterStudentView={handleMasterStudentView}
                 onAcademicEntryUpdate={AcademicEntryUpdate}
        />


        <DashBoardMain right={rightDashbrd} Search={search} createUser={createUser}
                       Publish={publish} View={view}
                       Notice={notice} VendorCreateDisplay={vendorDisplay}
                       ItemCreateDisplay={itemCreate} EntryStock={stockEntry}
                       StockView={stockView} SecondstockEntrySearch={secondstockEntry} SecondStockView={secondStockView} 
                       modifyStock={modifySearchView} createbed={bedentry} viewbed={bedview} checkpending={checkpending}
                       HostelEntryCreate={hostelentrycreate} HostelentryView={hostelentryview} Academicview={academicview}
                          StudentEntry={studententry} MasterStudentView={masterstudentview} AcademicEntryUpdate={academicEntryUpdate}
        />

      </div>
    </div>
     
      
    </>
  );
};


export default Dashboard;
