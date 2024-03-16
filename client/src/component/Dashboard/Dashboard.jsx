import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";
import icon from '../Galllery/GalleryImage/operater_icon.png';
import {useState } from "react";

const Dashboard = () => {
  const HandaleLogout = () => {
      localStorage.removeItem("user");
    localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem('countdownStartTime')
    window.location.reload();

  };


 const [dashbvisi,setdashBVisi]=useState('none');
 const [nvbrvisi,setNavbarVisi]=useState('navbar-before');
 
 const [dashbrdtextwidth,setdashbrdtextwidth]=useState('dashboard-text-width-before');
 const [rightDashbrd,setrightDashbrd]=useState('dashboard-main-right-width-before');

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
const [CreateFaculty,setCreateFaculty]=useState('none')
const [viewFaculty,setViewFaculty]=useState('none')
const [CreateSubject,setCreateSubject]=useState('none')
const [CreateExam,setCreateExam]=useState("none")
const [CreateInternalMarks,setCreateInternalMarks]=useState("none")
const [CreateExternalMarks,setCreateExternalMarks]=useState("none")
const [promote,setpromote]=useState("none")
const [ExportStudentMarks,setExportStudentMarks]=useState("none")
const [itemNamesCreate,setItemNameCreate]=useState("none")
const [stockUsageEntry,setStockUsageEntry]=useState("none")
const [stockUsageView,setStockUsageView]=useState("none")
const [createFeeStructure,setCreateFeeStructure]=useState("none")
const [ViewFeeStructure,setViewFeeStructure]=useState("none")
const[EntryFeePayment,setEntryFeePayment]=useState("none")
const [viewFeePayment,setViewFeePayment]=useState("none")
const [stockUsageEdit,setStockUsageEdit]=useState("none")
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

  if(dashbrdtextwidth==='dashboard-text-width-before')
  {
    setdashbrdtextwidth('dashboard-text-width-after');
  }
  else{
    setdashbrdtextwidth('dashboard-text-width-before');
  }

  if(rightDashbrd==='dashboard-main-right-width-before')
  {
    setrightDashbrd('dashboard-main-right-width-after');
  }
  else{
    setrightDashbrd('dashboard-main-right-width-before');
  }

}

const handleCreateSubject=()=>{
    if(CreateSubject==='none'){
        setCreateSubject('block')
        setCreateFaculty('none')
        setmasterstudentview('none')
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
        setViewFaculty('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setcheckpending('none')
        setItemNameCreate("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else{
        setCreateSubject('none')
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
    setCreateFaculty('none')
    setViewFaculty('none')
    setCreateExam("none")
    setCreateSubject('none')
    setCreateInternalMarks("none")
    setpromote("none")
    setCreateExternalMarks("none")
    setExportStudentMarks("none")
    setStockUsageEntry("none")
    setStockUsageView("none")
    setCreateFeeStructure("none")
    setViewFeeStructure("none")
    setItemNameCreate("none")
    setEntryFeePayment("none")
    setViewFeePayment("none")
    setStockUsageEdit("none")
}
else{
    setSearch('none')
    setCreateUser('none')
    setView('none')
}
}
const handaleCreateUser=()=>{
     if(createUser==="none"){
         setCreateUser("grid")
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
         setCreateFaculty('none')
         setCreateSubject('none')
         setViewFaculty('none')
         setCreateExam("none")
         setCreateInternalMarks("none")
         setpromote("none")
         setCreateExternalMarks("none")
         setExportStudentMarks("none")
         setStockUsageEntry("none")
         setCreateFeeStructure("none")
         setStockUsageView("none")
         setItemNameCreate("none")
         setEntryFeePayment("none")
         setViewFeeStructure("none")
         setStockUsageEdit("none")
         setViewFeePayment("none")
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
         setCreateSubject('none')
         setmasterstudentview('none')
         setacademicEntryUpdate('none')
         setCreateFaculty('none')
         setViewFaculty('none')
         setCreateExam("none")
         setCreateInternalMarks("none")
         setpromote("none")
         setCreateExternalMarks("none")
         setExportStudentMarks("none")
         setStockUsageEntry("none")
         setStockUsageView("none")
         setCreateFeeStructure("none")
         setViewFeeStructure("none")
         setItemNameCreate("none")
         setEntryFeePayment("none")
         setViewFeePayment("none")
         setStockUsageEdit("none")
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
         setCreateSubject('none')
         sethostelentrycreate('none')
         setacademicview('none')
         setstudententry('none')
         setmasterstudentview('none')
         setacademicEntryUpdate('none')
         setCreateFaculty('none')
         setViewFaculty('none')
         setCreateExam("none")
         setCreateInternalMarks("none")
         setpromote("none")
         setExportStudentMarks("none")
         setCreateExternalMarks("none")
         setItemNameCreate("none")
         setStockUsageEntry("none")
         setStockUsageView("none")
         setCreateFeeStructure("none")
         setViewFeeStructure("none")
         setEntryFeePayment("none")
         setViewFeePayment("none")
         setStockUsageEdit("none")
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
         setCreateSubject('none')
         setcheckpending('none')
         sethostelentrycreate('none')
         setacademicview('none')
         setstudententry('none')
         setmasterstudentview('none')
         setCreateFaculty('none')
         setacademicEntryUpdate('none')
         setViewFaculty('none')
         setCreateExam("none")
         setCreateInternalMarks("none")
         setpromote("none")
         setCreateExternalMarks("none")
         setExportStudentMarks("none")
         setItemNameCreate("none")
         setStockUsageEntry("none")
         setCreateFeeStructure("none")
         setStockUsageView("none")
         setViewFeeStructure("none")
         setEntryFeePayment("none")
         setStockUsageEdit("none")
         setViewFeePayment("none")
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
            setCreateFaculty('none')
            setViewFaculty('none')
            setCreateSubject('none')
            setCreateExam("none")
            setCreateInternalMarks("none")
            setpromote("none")
            setCreateExternalMarks("none")
            setExportStudentMarks("none")
            setItemNameCreate("none")
            setStockUsageEntry("none")
            setStockUsageView("none")
            setCreateFeeStructure("none")
            setViewFeeStructure("none")
            setEntryFeePayment("none")
            setViewFeePayment("none")
            setStockUsageEdit("none")
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
            setCreateFaculty('none')
            setViewFaculty('none')
            setCreateSubject('none')
            setCreateExam("none")
            setCreateInternalMarks("none")
            setpromote("none")
            setCreateExternalMarks("none")
            setExportStudentMarks("none")
            setItemNameCreate("none")
            setStockUsageEntry("none")
            setStockUsageView("none")
            setViewFeeStructure("none")
            setEntryFeePayment("none")
            setCreateFeeStructure("none")
            setViewFeePayment("none")
            setStockUsageEdit("none")
        }
            else{
                setStockEntry('none')
            }
}
  const handleBedViewStatus = () => {
    if (bedview === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setStockUsageEntry("none")
        setCreateFeeStructure("none")
        setStockUsageView("none")
        setItemNameCreate("none")
        setViewFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setbedview('none')
    }
  }
  const handleStockView = () => {
    if (stockView === 'none') {
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
        setCreateFaculty('none')
        setCreateSubject('none')
        setViewFaculty('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setItemNameCreate("none")
        setCreateFeeStructure("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setStockUsageEdit("none")
        setViewFeePayment("none")
    }
    else {
      setStockView('none')
    }
  }

  const AcademicEntryUpdate = () => {
    if (academicEntryUpdate === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setItemNameCreate("none")
        setCreateFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setacademicEntryUpdate('none')
    }
  }

  const handleSecondStockEntrySearch = () => {
    if (secondstockEntry === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateExam("none")
        setCreateSubject('none')
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setCreateFeeStructure("none")
        setItemNameCreate("none")
        setStockUsageEntry("none")
        setViewFeeStructure("none")
        setEntryFeePayment("none")
        setStockUsageView("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setSecondstockEntry('none')
    }


  }

  const handlehostelEntryCreate = () => {
    if (hostelentrycreate === 'none') {
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
      setSecondstockEntry('none')
      setmodifySearchView('none')
      sethostelview('none')
      setbedview('none')
      setbedentry('none')
      setcheckpending('none')
      setacademicview('none')
      setstudententry('none')
      setmasterstudentview('none')
      setacademicEntryUpdate('none')
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setItemNameCreate("none")
        setEntryFeePayment("none")
        setStockUsageEntry("none")
        setCreateFeeStructure("none")
        setStockUsageView("none")
        setViewFeeStructure("none")
        setStockUsageEdit("none")
        setViewFeePayment("none")
    }
    else {
      sethostelentrycreate('none')
    }
  }
  const handleSecondStockView = () => {
    if (secondStockView === 'none') {
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
        setCreateFaculty('none')
      setacademicEntryUpdate('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setExportStudentMarks("none")
        setCreateExternalMarks("none")
        setItemNameCreate("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setSecondStockView('none')
    }


  }

  const handleModifySearch = () => {
    if (modifySearchView === 'none') {
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
        setCreateFaculty('none')
        setCreateSubject('none')
        setViewFaculty('none')
        setCreateInternalMarks("none")
        setCreateExam("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setItemNameCreate("none")
        setStockUsageEntry("none")
        setCreateFeeStructure("none")
        setViewFeeStructure("none")
        setStockUsageView("none")
        setEntryFeePayment("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setmodifySearchView('none')
    }


  }

  const handlebedentry = () => {
    if (bedentry === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setViewFeeStructure("none")
        setCreateFeeStructure("none")
        setItemNameCreate("none")
        setEntryFeePayment("none")
        setStockUsageEdit("none")
        setViewFeePayment("none")
    }
    else {
      setbedentry('none')
    }


  }

  const handlehostelview = () => {
    if (hostelentryview === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setItemNameCreate("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      sethostelview('none')
    }


  }

  const handleCheckPending = () => {
    if (checkpending === 'none') {
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
        setCreateFaculty('none')
        setItemNameCreate("none")
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setViewFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setcheckpending('none')
    }


  }

  const handleacademicview = () => {
    if (academicview === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setcheckpending('none')
        setItemNameCreate("none")
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setViewFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setacademicview('none')
    }


  }
  const handleaStudentEntry = () => {
    if (studententry === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setItemNameCreate("none")
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setcheckpending('none')
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setstudententry('none')
    }
  }
  const handleMasterStudentView = () => {
    if (masterstudentview === 'none') {
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
        setCreateFaculty('none')
        setViewFaculty('none')
        setCreateSubject('none')
        setCreateExam("none")
        setCreateInternalMarks("none")
        setpromote("none")
        setItemNameCreate("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setcheckpending('none')
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
      setmasterstudentview('none')
    }
  }
const handleCreateFaculty=()=>{
   if(CreateFaculty==='none'){
        setCreateFaculty('block')
        setmasterstudentview('none')
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
       setViewFaculty('none')
       setCreateExam("none")
       setCreateSubject('none')
       setCreateInternalMarks("none")
       setpromote("none")
       setItemNameCreate("none")
       setCreateExternalMarks("none")
       setExportStudentMarks("none")
       setcheckpending('none')
       setStockUsageEntry("none")
       setCreateFeeStructure("none")
       setViewFeeStructure("none")
       setEntryFeePayment("none")
       setStockUsageView("none")
       setStockUsageEdit("none")
       setViewFeePayment("none")
   }
    else{
        setCreateFaculty('none')
   }
}
const handleViewFaculty=()=>{
    if(viewFaculty==='none'){
          setViewFaculty('block')
          setCreateFaculty('none')
          setmasterstudentview('none')
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
        setCreateSubject('none')
        setCreateInternalMarks("none")
        setCreateExam("none")
        setItemNameCreate("none")
        setpromote("none")
        setCreateExternalMarks("none")
        setExportStudentMarks("none")
        setcheckpending('none')
        setStockUsageEntry("none")
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
     else{
          setViewFaculty('none')
    }
}
const handleCreateExam =()=>{
     if(CreateExam==="none"){
         setCreateExam("block")
         setCreateFaculty('none')
         setmasterstudentview('none')
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
         setCreateSubject('none')
         setViewFaculty('none')
         setCreateInternalMarks("none")
         setpromote("none")
         setCreateExternalMarks("none")
         setExportStudentMarks("none")
         setcheckpending('none')
         setItemNameCreate("none")
         setStockUsageEntry("none")
         setCreateFeeStructure("none")
         setStockUsageView("none")
         setEntryFeePayment("none")
         setViewFeeStructure("none")
         setStockUsageEdit("none")
         setViewFeePayment("none")
     }
     else{
         setCreateExam("none")
     }
}
const handleCreateInternalMarksEntry =()=>{
     if (CreateInternalMarks==="none"){
            setCreateInternalMarks("block")
            setCreateExam("none")
            setCreateFaculty('none')
            setmasterstudentview('none')
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
            setCreateSubject('none')
         setItemNameCreate("none")
            setViewFaculty('none')
            setpromote("none")
         setCreateExternalMarks("none")
         setExportStudentMarks("none")
         setcheckpending('none')
         setStockUsageEntry("none")
         setStockUsageView("none")
         setCreateFeeStructure("none")
         setViewFeeStructure("none")
         setStockUsageEdit("none")
         setEntryFeePayment("none")
         setViewFeePayment("none")
     }
     else {
            setCreateInternalMarks("none")
     }
}

const handlePromote =()=>{
  if (promote==="none"){
         setpromote("block")
         setCreateExam("none")
         setCreateFaculty('none')
         setmasterstudentview('none')
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
         setCreateSubject('none')
         setViewFaculty('none')
      setItemNameCreate("none")
      setCreateExternalMarks("none")
      setExportStudentMarks("none")
      setcheckpending('none')
      setStockUsageEntry("none")
      setStockUsageView("none")
      setViewFeeStructure("none")
      setCreateFeeStructure("none")
      setEntryFeePayment("none")
      setStockUsageEdit("none")
      setViewFeePayment("none")
  }
  else {
         setpromote("none")
  }
}

const handleCreateExternalMarks =()=>{
     if (CreateExternalMarks==="none"){
            setCreateExternalMarks("block")
            setCreateInternalMarks("none")
            setCreateExam("none")
            setCreateFaculty('none')
            setmasterstudentview('none')
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
            setCreateSubject('none')
            setViewFaculty('none')
            setpromote("none")
         setExportStudentMarks("none")
         setcheckpending('none')
         setItemNameCreate("none")
         setStockUsageEntry("none")
         setStockUsageView("none")
         setCreateFeeStructure("none")
         setViewFeeStructure("none")
         setEntryFeePayment("none")
         setStockUsageEdit("none")
         setViewFeePayment("none")
     }
        else {
                setCreateExternalMarks("none")
        }
}

const handleExportStudentMarks =()=>{
     if(ExportStudentMarks==="none"){
            setExportStudentMarks("block")
            setCreateExternalMarks("none")
            setCreateInternalMarks("none")
            setCreateExam("none")
            setCreateFaculty('none')
            setmasterstudentview('none')
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
            setCreateSubject('none')
            setViewFaculty('none')
            setpromote("none")
            setcheckpending('none')
         setItemNameCreate("none")
         setStockUsageEntry("none")
         setCreateFeeStructure("none")
         setStockUsageView("none")
         setViewFeeStructure("none")
         setEntryFeePayment("none")
         setStockUsageEdit("none")
         setViewFeePayment("none")
     }else {
            setExportStudentMarks("none")
     }
}

const handleItemNameCreate=()=>{
    if(itemNamesCreate==="none") {
        setItemNameCreate("block")
        setExportStudentMarks("none")
        setCreateExternalMarks("none")
        setCreateInternalMarks("none")
        setCreateExam("none")
        setCreateFaculty('none')
        setmasterstudentview('none')
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
        setCreateSubject('none')
        setViewFaculty('none')
        setpromote("none")
        setcheckpending('none')
        setStockUsageEntry("none")
        setCreateFeeStructure("none")
        setViewFeeStructure("none")
        setStockUsageView("none")
        setEntryFeePayment("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
        setItemNameCreate("none")
    }
}
const handleStockUsageEntry=()=>{
    if(stockUsageEntry==="none"){
        setStockUsageEntry("block")
        setItemNameCreate("none")
        setExportStudentMarks("none")
        setCreateExternalMarks("none")
        setCreateInternalMarks("none")
        setCreateExam("none")
        setCreateFaculty('none')
        setmasterstudentview('none')
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
        setCreateSubject('none')
        setViewFaculty('none')
        setpromote("none")
        setcheckpending('none')
        setStockUsageView("none")
        setCreateFeeStructure("none")
        setViewFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
        setStockUsageEntry("none")

    }
}
const handleStockUsageView=()=>{
    if(stockUsageView==="none"){
        setStockUsageView("block")
        setStockUsageEntry("none")
        setItemNameCreate("none")
        setExportStudentMarks("none")
        setCreateExternalMarks("none")
        setCreateInternalMarks("none")
        setCreateExam("none")
        setCreateFaculty('none')
        setmasterstudentview('none')
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
        setCreateSubject('none')
        setViewFaculty('none')
        setpromote("none")
        setCreateFeeStructure("none")
        setcheckpending('none')
        setViewFeeStructure("none")
        setEntryFeePayment("none")
        setViewFeePayment("none")
        setStockUsageEdit("none")
    }
    else {
        setStockUsageView("none")
    }
}

const handleCreateFeeStructure=()=>{
     if(createFeeStructure==="none") {
         setCreateFeeStructure("block")
         setStockUsageView("none")
         setStockUsageEntry("none")
         setItemNameCreate("none")
         setExportStudentMarks("none")
         setCreateExternalMarks("none")
         setCreateInternalMarks("none")
         setCreateExam("none")
         setCreateFaculty('none')
         setmasterstudentview('none')
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
         setCreateSubject('none')
         setViewFaculty('none')
         setpromote("none")
         setViewFeeStructure("none")
         setcheckpending('none')
         setEntryFeePayment("none")
         setViewFeePayment("none")
         setStockUsageEdit("none")
     }
        else {
            setCreateFeeStructure("none")
     }
}
const handleFeeStructureView=()=>{
     if (ViewFeeStructure==="none"){
            setViewFeeStructure("block")
            setCreateFeeStructure("none")
            setStockUsageView("none")
            setStockUsageEntry("none")
            setItemNameCreate("none")
            setExportStudentMarks("none")
            setCreateExternalMarks("none")
            setCreateInternalMarks("none")
            setCreateExam("none")
            setCreateFaculty('none')
            setmasterstudentview('none')
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
            setCreateSubject('none')
            setViewFaculty('none')
            setpromote("none")
            setcheckpending('none')
         setEntryFeePayment("none")
         setViewFeePayment("none")
         setStockUsageEdit("none")

     }
     else{
            setViewFeeStructure("none")
     }
}
const handleEntryFeePayment=()=>{
     if(EntryFeePayment==="none"){
            setEntryFeePayment("block")
            setViewFeeStructure("none")
            setCreateFeeStructure("none")
            setStockUsageView("none")
            setStockUsageEntry("none")
            setItemNameCreate("none")
            setExportStudentMarks("none")
            setCreateExternalMarks("none")
            setCreateInternalMarks("none")
            setCreateExam("none")
            setCreateFaculty('none')
            setmasterstudentview('none')
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
            setCreateSubject('none')
            setViewFaculty('none')
            setpromote("none")
         setViewFeePayment("none")
            setcheckpending('none')
         setStockUsageEdit("none")
     }
     else{
            setEntryFeePayment("none")
     }
}

const handleViewfeePayment=()=>{
        if(viewFeePayment==="none"){
                setViewFeePayment("block")
                setEntryFeePayment("none")
                setViewFeeStructure("none")
                setCreateFeeStructure("none")
                setStockUsageView("none")
                setStockUsageEntry("none")
                setItemNameCreate("none")
                setExportStudentMarks("none")
                setCreateExternalMarks("none")
                setCreateInternalMarks("none")
                setCreateExam("none")
                setCreateFaculty('none')
                setmasterstudentview('none')
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
                setCreateSubject('none')
                setViewFaculty('none')
                setpromote("none")
                setcheckpending('none')
            setStockUsageEdit("none")
        }
        else{
                setViewFeePayment("none")
        }
}
const handleStockUsageEdit=()=>{
    if(stockUsageEdit==="none"){
        setStockUsageEdit("block")
        setViewFeePayment("none")
        setEntryFeePayment("none")
        setViewFeeStructure("none")
        setCreateFeeStructure("none")
        setStockUsageView("none")
        setStockUsageEntry("none")
        setItemNameCreate("none")
        setExportStudentMarks("none")
        setCreateExternalMarks("none")
        setCreateInternalMarks("none")
        setCreateExam("none")
        setCreateFaculty('none')
        setmasterstudentview('none')
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
        setCreateSubject('none')
        setViewFaculty('none')
        setpromote("none")
        setcheckpending('none')
    }
    else{
        setStockUsageEdit("none")
    }
}

  return (
    <>
    <div className="dashboard-root">
    <div className='dashoboard-main-header'>
        <span className={"logo-lg dashboard-text"+ " "+dashbrdtextwidth } >{localStorage.getItem("user")}</span>
        <span  style={{fontSize:'20px',cursor:'pointer'}} className="logo-lg dashboard-open" onClick={NavbarVisibility}>☰</span>
        <span className='operator-hide' onClick={logoutVisiblity}><p className="logo-lg">{localStorage.getItem("name").toUpperCase()}</p><img src={icon}></img></span>
        <span  className='navbar-custom-menu'>
          <ul className="dropdown-menu" style={{ display: dashbvisi}}>
            <li className="user-header">
              <span style={{textAlign:'-webkit-center'}}><img src={icon} alt='Operator Icon' className="img-header"></img></span>
              <p className="text-logout">Welcome {localStorage.getItem("name")}</p>
                <p className="text-logout">{localStorage.getItem("user")}</p>
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
                 onAcademicEntryUpdate={AcademicEntryUpdate} onCreateFaculty={handleCreateFaculty} onViewFaculty={handleViewFaculty}
                 onCreateSubject={handleCreateSubject} onCreateExam={handleCreateExam} onCreateInternalMarksEntry={handleCreateInternalMarksEntry} 
                 onPromote={handlePromote} onCreateExternalMarksEntry={handleCreateExternalMarks} onExportStudentMarks={handleExportStudentMarks}
                 onItemNameCreate={handleItemNameCreate} onStockUsageEntry={handleStockUsageEntry} onStockUsageView={handleStockUsageView}
                 onCreateFeeStructure={handleCreateFeeStructure} onViewFeeStructure={handleFeeStructureView} onEntryFeePayment={handleEntryFeePayment}
                 onViewFeePayment={handleViewfeePayment} onStockUsageEdit={handleStockUsageEdit}
        />


        <DashBoardMain right={rightDashbrd} Search={search} createUser={createUser}
                       Publish={publish} View={view}
                       Notice={notice} VendorCreateDisplay={vendorDisplay}
                       ItemCreateDisplay={itemCreate} EntryStock={stockEntry}
                       StockView={stockView} SecondstockEntrySearch={secondstockEntry} SecondStockView={secondStockView} 
                       modifyStock={modifySearchView} createbed={bedentry} viewbed={bedview} checkpending={checkpending}
                       HostelEntryCreate={hostelentrycreate} HostelentryView={hostelentryview} Academicview={academicview}
                       StudentEntry={studententry} MasterStudentView={masterstudentview} AcademicEntryUpdate={academicEntryUpdate}
                       CreateFaculty={CreateFaculty} ViewFaculty={viewFaculty} CreateSubject={CreateSubject} CreateExam={CreateExam}
                          CreateInternalMarks={CreateInternalMarks} PromoteView={promote} CreateExternalMarks={CreateExternalMarks}
                       ExportStudentMarks={ExportStudentMarks} CretaeItemName={itemNamesCreate} StockUsageEntry={stockUsageEntry} StockUsageView={stockUsageView}
                       CreateFeeStructure={createFeeStructure} ViewFeeStructure={ViewFeeStructure} EntryFeePayment={EntryFeePayment}
                          ViewFeePayment={viewFeePayment} StockUsageEdit={stockUsageEdit}

        />

      </div>
    </div>
     
      
    </>
  );
};


export default Dashboard;
