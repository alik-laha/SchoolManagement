import "./sidebar.css";
import { useState, useEffect } from "react";
import logo from '../Home/logo_ahm.jpg'

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

  const user = sessionStorage.getItem("user");

  useEffect(() => {
    if (user === "ADMIN") 
      {setAdmin("block");}
    else if (user === !"ADMIN")
       {setAdmin("none");}
    else if (user === "STOCK-ADMIN")
       {
        setcashStockAdmin("block")
        setCashAdmin("none");
        setfacultyAdmin("none");
        sethostelAdmin("none");
        setstudentAdmin("none");
      }
    else if (user === "CASH-ADMIN")
       {
        setcashStockAdmin("block");
        setStockAdmin("none");
       setfacultyAdmin("none");
       sethostelAdmin("none");
       setstudentAdmin("none");}

    else if (user === "FACULTY-ADMIN")
    {   setCashAdmin("none");
        setStockAdmin("none");
        setcashStockAdmin("none");
        setstudentAdmin("none");
        sethostelAdmin("none");
    }
    else if (user === "STUDENT-ADMIN")
    {   setCashAdmin("none");
        setStockAdmin("none");
        setcashStockAdmin("none");
        setfacultyAdmin("none");
        sethostelAdmin("none");
    }
    else if (user === "HOSTEL-ADMIN")
    {   setCashAdmin("none");
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
    { setdropArrowstock("+");
      setdropArrowstockUsage("-");
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
      
      <span className="dashboard-top-heading user"> <img src={logo} alt='logo image' height ={40} width={40}/><p>AL-HILAL-MISSION</p></span>
        <div className="sidebar-main-header">
          {/* User */}
          <span onClick={userVisiblity} className="user"
                style={{display: admin}}>&#x3e;&nbsp;&nbsp;&nbsp;User<p>{dropArrowuser}</p></span>
          <div style={{display: userVisi}}>

            <div className="Items" onClick={props.oncreate}>&#x3e;&nbsp;&nbsp;Create Users</div>
            <div className="Items" onClick={props.onSearch}>&#x3e;&nbsp;&nbsp;Search/Modify Users</div>
          </div>

          {/* Notice */}

          <span onClick={noticeVisibility} className="user" style={{display: admin}}>&#x3e;&nbsp;&nbsp;&nbsp;NoticeBoard<p>{dropArrowNotc}</p></span>
          <div style={{display: noticeVisi}}>
            <div className="Items" onClick={props.onpublish}>&#x3e;&nbsp;&nbsp;Upload Notice</div>
            <div className="Items" onClick={props.onNoticeManupulation}>&#x3e;&nbsp;&nbsp;View/Delete Notice</div>

          </div>


          {/* Faculty */}
          <span onClick={facultyVisiblity} className="user"
                style={{display: facultyAdmin}}>&#x3e;&nbsp;&nbsp;&nbsp;Faculty<p>{dropArrowfaculty}</p></span>
          <div style={{display: facultyVisi}}>
            <div className="Items" style={{display: admin}} onClick={props.onCreateFaculty}>&#x3e;&nbsp;&nbsp;Create
              Faculty Profile
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onViewFaculty}>&#x3e;&nbsp;&nbsp;View/Edit
              Faculty Profile
            </div>
            <div className="Items" style={{display: facultyAdmin}}
                 onClick={props.onCreateSubject}>&#x3e;&nbsp;&nbsp;Create Subject
            </div>
            <div className="Items" style={{display: facultyAdmin}} onClick={props.onCreateExam}>&#x3e;&nbsp;&nbsp;Create
              Exam
            </div>
            <div className="Items" style={{display: facultyAdmin}}
                 onClick={props.onCreateInternalMarksEntry}>&#x3e;&nbsp;&nbsp;Marks Update/Delete
            </div>
            <div className="Items" style={{display: facultyAdmin}}
                 onClick={props.onCreateExternalMarksEntry}>&#x3e;&nbsp;&nbsp;Marks Entry
            </div>
            <div className="Items" style={{display: facultyAdmin}}
                 onClick={props.onExportStudentMarks}>&#x3e;&nbsp;&nbsp;Export Student Marks
            </div>
          </div>


          {/* Students */}
          <span onClick={studentsVisiblity} className="user"
                style={{display: studentAdmin}}>&#x3e;&nbsp;&nbsp;&nbsp;Students<p>{dropArrowstudents}</p></span>
          <div style={{display: studentsVisi}}>
            <div className="Items" style={{display: studentAdmin}}
                 onClick={props.onMasterStudentEntry}>&#x3e;&nbsp;&nbsp;Master Admission Entry
            </div>
            <div className="Items" style={{display: studentAdmin}}
                 onClick={props.onMasterStudentView}>&#x3e;&nbsp;&nbsp;View/Edit Master Entry
            </div>
            <div className="Items" style={{display: studentAdmin}}
                 onClick={props.onAcademicEntryUpdate}>&#x3e;&nbsp;&nbsp;Academic Entry
            </div>
            <div className="Items" style={{display: studentAdmin}}
                 onClick={props.onAcademicView}>&#x3e;&nbsp;&nbsp;Export Academic Entry
            </div>
            <div className="Items" style={{display: studentAdmin}} onClick={props.onPromote}>&#x3e;&nbsp;&nbsp;Promote
              To Next Class
            </div>
          </div>

          {/* Hostel */}
          <span onClick={hostelVisiblity} className="user" style={{display: hostelAdmin}}>&#x3e;&nbsp;&nbsp;&nbsp;Hostel<p>{dropArrowhostel}</p></span>
          <div style={{display: hostelVisi}}>
            <div className="Items" style={{display: hostelAdmin}} onClick={props.onCreatebed}>&#x3e;&nbsp;&nbsp;Room &
              Bed Entry
            </div>
            <div className="Items" style={{display: hostelAdmin}} onClick={props.onViewBedStatus}>&#x3e;&nbsp;&nbsp;Bed
              Availability Status
            </div>
            <div className="Items" style={{display: hostelAdmin}}
                 onClick={props.onHostelEntryCreate}>&#x3e;&nbsp;&nbsp;Hostel Entry
            </div>
            <div className="Items" style={{display: hostelAdmin}}
                 onClick={props.onHostelEntryView}>&#x3e;&nbsp;&nbsp;Export Hostel Entry
            </div>
          </div>

          {/* stock */}
          <span onClick={stockVisiblity} className="user"
                style={{display: cashstockAdmin}}>&#x3e;&nbsp;&nbsp;&nbsp;Stock<p>{dropArrowstock}</p></span>
          <div style={{display: stockVisi}}>
            <div className="Items" style={{display: admin}} onClick={props.onVendorCreate}>&#x3e;&nbsp;&nbsp;Vendor
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onItemCreate}>&#x3e;&nbsp;&nbsp;Item type
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onItemNameCreate}>&#x3e;&nbsp;&nbsp;Item
              Name
            </div>
            <div className="Items" style={{display: stockAdmin}} onClick={props.onStockEntry}>&#x3e;&nbsp;&nbsp;Primary
              Stock (Qty.)
            </div>
            <div className="Items" style={{display: stockAdmin}} onClick={props.onStockView}>&#x3e;&nbsp;&nbsp;Export
              Primary Stock
            </div>
            <div className="Items" style={{display: cashAdmin}}
                 onClick={props.onSecondStockEntry}>&#x3e;&nbsp;&nbsp;Secondary Stock (Cash)
            </div>
            <div className="Items" style={{display: cashAdmin}}
                 onClick={props.onSecondStockView}>&#x3e;&nbsp;&nbsp;Export
              Secondary Stock
            </div>
            <div className="Items" style={{display: admin}} onClick={props.onModifySeachEntry}>&#x3e;&nbsp;&nbsp;Modify
              Stock Entry
            </div>
            <div className="Items" style={{display: cashstockAdmin}}
                 onClick={props.onCheckPending}>&#x3e;&nbsp;&nbsp;Check Pending Amount
            </div>
          </div>
          {/*Stock usage*/}
          <span onClick={stockUsageVisiblity} className="user"
                style={{display: cashstockAdmin}}>&#x3e;&nbsp;&nbsp;&nbsp;Stock Usage<p>{dropArrowstockUsage}</p></span>
          <div style={{display: stockUsageVisi}}>
            <div className="Items" style={{display: cashstockAdmin}}
                 onClick={props.onStockUsageEntry}>&#x3e;&nbsp;&nbsp;Stock Usage Entry
            </div>
            <div className="Items" style={{display: cashstockAdmin}}
                 onClick={props.onStockUsageView}>&#x3e;&nbsp;&nbsp;Stock Usage View
            </div>
          </div>

        </div>
      </div>

      </>

  );


};
export default SideBar;