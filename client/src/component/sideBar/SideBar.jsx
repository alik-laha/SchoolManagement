import "./sidebar.css";
import { useState, useEffect } from "react";
import logo from '../Home/logo_ahm.jpg'
import { FaRegUser,FaUserGraduate,FaUserEdit,FaUserPlus,FaFileUpload,FaDatabase,FaRestroom,FaRegBuilding,FaChartBar,FaAddressBook 
  ,FaRegWindowRestore ,FaRegEdit   } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { ImUserTie ,ImListNumbered } from "react-icons/im";
import { TbUserEdit,TbBrandGoogleBigQuery,TbCash    } from "react-icons/tb";
import { FaChalkboard } from "react-icons/fa6";
import { CiViewList,CiEdit,CiShop   } from "react-icons/ci";
import { BsClipboardData ,BsCashCoin  } from "react-icons/bs";
import { MdQueuePlayNext,MdOutlineSmartToy   } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { HiBuildingLibrary } from "react-icons/hi2";
import { AiOutlineStock,AiFillEdit  } from "react-icons/ai";
import { PiExamBold  } from "react-icons/pi";



const SideBar = (props) => {
  const [userVisi, SetUserVisi] = useState("none");
  const [noticeVisi, setNoticeVisi] = useState("none");
  const [stockVisi, setStockVisi] = useState("none");
  const [facultyVisi, setfacultyVisi] = useState("none");
  const [studentsVisi, setstudentsVisi] = useState("none");
  const [hostelVisi, sethostelVisi] = useState("none");
  const [stockUsageVisi, setstockUsageVisi] = useState("none");
 

  const [admin, setAdmin] = useState("none");
  const [cashAdmin, setCashAdmin] = useState("");
  const [stockAdmin, setStockAdmin] = useState("");
  const [cashstockAdmin, setcashStockAdmin] = useState("");
  const [combineadmin, setcombineadmin] = useState('flex');
  const [facultyAdmin, setfacultyAdmin] = useState("");
  const [studentAdmin, setstudentAdmin] = useState("");
  const [hostelAdmin, sethostelAdmin] = useState("");


  const [dropArrowuser,setdropArrowuser]=useState("+");
  const [dropArrowNotc,setdropArrowNotc]=useState("+");
  const [dropArrowstock,setdropArrowstock]=useState("+");
  const [dropArrowfaculty,setdropArrowfaculty]=useState("+");
  const [dropArrowstudents,setdropArrowstudents]=useState("+");
  const [dropArrowhostel,setdropArrowhostel]=useState("+");
  const [dropArrowstockUsage,setdropArrowstockUsage]=useState("+");


  

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user === "ADMIN") 
      {setAdmin("flex");}
    else if (user === !"ADMIN")
       {setAdmin("none");}
    else if (user === "STOCK-ADMIN")
       {
        setcashStockAdmin("flex")
        setcombineadmin('flex')
        setStockAdmin('flex')
        setCashAdmin("none");
        setfacultyAdmin("none");
        sethostelAdmin("none");
        setstudentAdmin("none");
        
      }
    else if (user === "CASH-ADMIN")
       {
        setcashStockAdmin("flex");
        setcombineadmin('flex')
        setCashAdmin('flex')
        setStockAdmin("none");
       setfacultyAdmin("none");
       sethostelAdmin("none");
       setstudentAdmin("none");}

    else if (user === "FACULTY-ADMIN")
   
    {    setfacultyAdmin('flex')
    setcombineadmin('flex')
      setCashAdmin("none");
        
        setStockAdmin("none");
        setcashStockAdmin("none");
        setstudentAdmin("none");
        sethostelAdmin("none");
    }
    else if (user === "STUDENT-ADMIN")
    {   setstudentAdmin('flex')
    setcombineadmin('flex')
        setCashAdmin("none");
        setStockAdmin("none");
        setcashStockAdmin("none");
        setfacultyAdmin("none");
        sethostelAdmin("none");
    }
    else if (user === "HOSTEL-ADMIN")
    {   
      sethostelAdmin('flex')  
      setcombineadmin('flex')
      setCashAdmin("none");
        setStockAdmin("none");
        setcashStockAdmin("none");
        setfacultyAdmin("none");
        setstudentAdmin("none");
    }

       }, [user]);


    {/* User*/}
  const userVisiblity = () => {
    if (userVisi === "none") 
    { SetUserVisi("block");
      setNoticeVisi("none");
      setStockVisi("none");
      setfacultyVisi("none");
      sethostelVisi("none");
      setstudentsVisi("none");
      setstockUsageVisi("none");
     
    } 
    else {SetUserVisi("none");}

    if (dropArrowuser==="+")
    {setdropArrowuser("-");
      setdropArrowstock("+")
      setdropArrowNotc("+");
      setdropArrowfaculty("+")
      setdropArrowhostel("+")
      setdropArrowstudents("+")
      setdropArrowstockUsage("+")
    }
    else{setdropArrowuser("+");
        }};  
    
    {/* NoticeBoard*/}
  const noticeVisibility = () => {
    if (noticeVisi === "none") 
    { setNoticeVisi("block");
      SetUserVisi("none");
      setStockVisi("none");
      setfacultyVisi("none");
      sethostelVisi("none");
      setstudentsVisi("none");
      setstockUsageVisi("none");
    } 
    else {setNoticeVisi("none");}

    if (dropArrowNotc==="+")
    { setdropArrowNotc("-");
      setdropArrowstock("+");
      setdropArrowuser("+")
      setdropArrowfaculty("+")
      setdropArrowhostel("+")
      setdropArrowstudents("+")
      setdropArrowstockUsage("+")
    }
      
    else{setdropArrowNotc("+");}};

    {/* Stock*/}
  const stockVisiblity = () => {
    if (stockVisi === "none") {
      setStockVisi("block");
      SetUserVisi("none");
      setNoticeVisi("none");
      setfacultyVisi("none");
      sethostelVisi("none");
      setstudentsVisi("none");
      setstockUsageVisi("none");
    }
    else {setStockVisi("none");}

    if (dropArrowstock==="+")
    { setdropArrowstock("-");
      setdropArrowuser("+");
      setdropArrowNotc("+")
      setdropArrowfaculty("+")
      setdropArrowhostel("+")
      setdropArrowstudents("+")
      setdropArrowstockUsage("+")
    }
    else{setdropArrowstock("+");}
  };

    {/* Faculty*/}
    const facultyVisiblity = () => {
      if (facultyVisi === "none") {
        setfacultyVisi("block");
        SetUserVisi("none");
        setNoticeVisi("none");
        setStockVisi("none");
        sethostelVisi("none");
        setstudentsVisi("none");
        setstockUsageVisi("none");
      }
      else {setfacultyVisi("none");}
  
      if (dropArrowfaculty==="+")
      { setdropArrowfaculty("-");
        setdropArrowuser("+");
        setdropArrowNotc("+")
        setdropArrowstock("+")
        setdropArrowhostel("+")
        setdropArrowstudents("+")
        setdropArrowstockUsage("+")
      }
      else{setdropArrowfaculty("+");}
    };

    {/* Students*/}
    const studentsVisiblity = () => {
      if (studentsVisi === "none") {
        setstudentsVisi("block");
        SetUserVisi("none");
        setNoticeVisi("none");
        setStockVisi("none");
        sethostelVisi("none");
        setfacultyVisi("none");
        setstockUsageVisi("none");
      }
      else {setstudentsVisi("none");}
  
      if (dropArrowstudents==="+")
      { setdropArrowstudents("-");
        setdropArrowuser("+");
        setdropArrowNotc("+")
        setdropArrowstock("+")
        setdropArrowhostel("+")
        setdropArrowfaculty("+")
        setdropArrowstockUsage("+")
      }
      else{setdropArrowstudents("+");}
    };

    {/* Students*/}
    const hostelVisiblity = () => {
      if (hostelVisi === "none") {
        sethostelVisi("block");
        SetUserVisi("none");
        setNoticeVisi("none");
        setStockVisi("none");
        setstudentsVisi("none");
        setfacultyVisi("none");
        setstockUsageVisi("none");
      }
      else {sethostelVisi("none");}
  
      if (dropArrowhostel==="+")
      { setdropArrowhostel("-");
        setdropArrowuser("+");
        setdropArrowNotc("+")
        setdropArrowstock("+")
        setdropArrowstudents("+")
        setdropArrowfaculty("+")
        setdropArrowstockUsage("+")
      }
      else{setdropArrowhostel("+");}
    };

const stockUsageVisiblity = () => {
    if (stockUsageVisi === "none") {
        setstockUsageVisi("block");
        SetUserVisi("none");
        setNoticeVisi("none");
        setStockVisi("none");
        setstudentsVisi("none");
        setfacultyVisi("none");
        sethostelVisi("none");
        
    }
    else {
      setstockUsageVisi("none")

    }
    if (dropArrowstockUsage==="+")
    { 
      setdropArrowstockUsage("-")
      setdropArrowstock("+");
      
      setdropArrowuser("+");
      setdropArrowNotc("+")
      setdropArrowhostel("+")
      setdropArrowstudents("+")
      setdropArrowfaculty("+")
    }
    else{setdropArrowstockUsage("+");}
}




  return(
      <>
      <div className={props.class}>
      
      
        <div className="sidebar-main-header">
        <span className="dashboard-top-heading user"> <img src={logo} alt='logo image' height ={40} width={40}/><p style={{width:'100%'}}>AL-HILAL-MISSION</p></span>
          {/* User */}
          <span onClick={userVisiblity} className="user"
                style={{display: admin}}><FaRegUser/>
                <p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>User</p><p>{dropArrowuser}</p></span>
          
          <div style={{ display: userVisi }}>
            <div className="Items" onClick={props.oncreate} style={{display:admin}}><FaUserPlus />
              <p style={{ width: '-webkit-fill-available', marginLeft: '10px' }}>Create Dashboard User</p></div>
            <div className="Items" onClick={props.onSearch} style={{display:admin}}><FaUserEdit />
              <p style={{ width: '-webkit-fill-available', marginLeft: '10px' }} >Search/Modify User</p></div>
            <div className="Items" onClick={props.onCreateFaculty} style={{display:admin}}><ImUserTie />
              <p style={{ width: '-webkit-fill-available', marginLeft: '10px' }}>Create Employee</p></div>
            <div className="Items" onClick={props.onViewFaculty} style={{display:admin}}><TbUserEdit />
              <p style={{ width: '-webkit-fill-available', marginLeft: '10px' }}>View/Edit Employee</p></div>
          </div>

          {/* Notice */}

          <span onClick={noticeVisibility} className="user" style={{display: admin}}><FaChalkboard/>
          <p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>NoticeBoard</p><p>{dropArrowNotc}</p></span>
          
          <div style={{display: noticeVisi}}>
            <div className="Items" onClick={props.onpublish} style={{display:admin}}><FaFileUpload />
            <p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Upload Notice</p></div>
            <div className="Items" onClick={props.onNoticeManupulation} style={{display:admin}}><CiViewList />
            <p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>View/Delete Notice</p></div>

          </div>

          {/* Admission */}
          <span onClick={studentsVisiblity} className="user"
                style={{display: studentAdmin}}><FaUserGraduate/><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Admission</p><p>{dropArrowstudents}</p></span>
          <div style={{display: studentsVisi}}>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onMasterStudentEntry}><FaDatabase /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Master Admission Entry</p>
            </div>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onMasterStudentView}><GrDatabase /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>View/Edit Master Entry</p>
            </div>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onAcademicEntryUpdate}><BsClipboardData /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Academic Entry</p>
            </div>
            
            <div className="Items" style={{display: admin}} onClick={props.onPromote}><MdQueuePlayNext /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Promote
              To Next Class</p>
            </div>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onAcademicView}><LuDownload /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Export Academic Entry</p>
            </div>
          </div>


          {/* Hostel */}
          <span onClick={hostelVisiblity} className="user" style={{display: hostelAdmin}}><HiBuildingLibrary /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Hostel</p><p>{dropArrowhostel}</p></span>
          <div style={{display: hostelVisi}}>
            <div className="Items" style={{display: combineadmin}} onClick={props.onCreatebed}><FaRegBuilding /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Room & Bed Entry</p>
            </div>
            <div className="Items" style={{display: combineadmin}} onClick={props.onViewBedStatus}><TbBrandGoogleBigQuery /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Bed Availability Status</p>
            </div>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onHostelEntryCreate}><FaRestroom /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Hostel Entry</p>
            </div>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onHostelEntryView}><LuDownload /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Export Hostel Entry</p>
            </div>
          </div>

          {/* stock */}
          <span onClick={stockVisiblity} className="user"
                style={{display: cashstockAdmin}}><AiOutlineStock /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Stock</p><p>{dropArrowstock}</p></span>
          <div style={{display: stockVisi}}>
            <div className="Items" style={{display: admin}} onClick={props.onVendorCreate}><CiShop/><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Vendor</p>
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onItemCreate}><FaRegWindowRestore/><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Item Type</p>
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onItemNameCreate}><MdOutlineSmartToy/><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Stock Item</p>

            </div>
            <div className="Items" style={{display: stockAdmin}} onClick={props.onStockEntry}> &#x274D;&nbsp;&nbsp;
              Stock Amount Entry 
            </div>
            <div className="Items" style={{display: cashAdmin}}
                 onClick={props.onSecondStockEntry}>  &#x24;&nbsp;&nbsp; Stock Cash Entry
            </div>
            <div className="Items" style={{display: stockAdmin}}
                 onClick={props.onStockUsageEntry}>
              &#x2744;&nbsp;&nbsp; Stock Usage Entry 
            </div>
            <div className="Items" style={{display: cashAdmin}}
                 onClick={props.onCheckPending}>&#x27F3;&nbsp;&nbsp;Check Pending Cash 
            </div>
            <div className="Items" style={{display: stockAdmin}}
                 onClick={props.onStockUsageView}>&#x27F3;&nbsp;&nbsp;Check Pending Usage
            
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onModifySeachEntry}><FaRegEdit/><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Modify Stock Entry </p>
            </div>
            <div className="Items" style={{display:admin}}
                 onClick={props.onStockUsageEdit}><FaRegEdit/><p
                 style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Modify Stock Usage </p>
            </div>

            <div className="Items" style={{display: stockAdmin}} onClick={props.onStockView}> &#x21e9;&nbsp;&nbsp; Export Primary Stock
            </div>


            <div className="Items" style={{display: cashAdmin}}
                 onClick={props.onSecondStockView}> &#x21e9;&nbsp;&nbsp; Export
              Secondary Stock 
            </div>

           

           
            
          </div>
          {/*Stock usage*/}

          {/* Marks */}
          <span onClick={facultyVisiblity} className="user"
                style={{display: facultyAdmin}}><FaChartBar /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Marks</p><p>{dropArrowfaculty}</p></span>
          <div style={{display: facultyVisi}}>
            
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onCreateSubject}><FaAddressBook /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Create Subject</p>
            </div>
            <div className="Items" style={{display: combineadmin}} onClick={props.onCreateExam}><PiExamBold /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Create Exam</p>
            </div>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onCreateExternalMarksEntry}><ImListNumbered /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Marks Entry</p>
            </div>
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onCreateInternalMarksEntry}><CiEdit /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Marks Update/Delete</p>
            </div>
            
            <div className="Items" style={{display: combineadmin}}
                 onClick={props.onExportStudentMarks}><LuDownload /><p style={{width:'-webkit-fill-available',marginLeft:'10px'}}>Export Student Marks</p>
            </div>
          </div>


          

          

          

          <span onClick={stockUsageVisiblity} className="user"
                style={{display: cashAdmin}}><BsCashCoin /><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Fee Payment </p><p>{dropArrowstockUsage}</p></span>
          <div style={{display: stockUsageVisi}}>
            <div className="Items" style={{display: admin}} onClick={props.onCreateFeeStructure}><TbCash /><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Create Fee Structure </p>
              
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onViewFeeStructure}><AiFillEdit /><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>View/Edit Fee Structure </p>
            </div>
            <div className="Items" style={{display: combineadmin}} onClick={props.onEntryFeePayment}><TbCash /><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Fee Payment Entry </p>
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onViewFeePayment}><CiEdit /><p
                style={{width: '-webkit-fill-available', marginLeft: '10px'}}>Modify Fee Payment </p>
            </div>
          </div>

        </div>
      </div>

      </>

  );


};
export default SideBar;