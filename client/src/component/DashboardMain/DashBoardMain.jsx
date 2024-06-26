import CreateUser from "../CreateUser/CreateUser";
import { useState,useEffect } from "react";
import axios from "axios";
import UserSearchquery40 from "../SearchBars/UserSearchquery40.jsx";
import StudentInputNotice from "../NoticeInput/NoticeBoardUpload40.jsx";
import '../Dashboard/Dashboard.css'
import NoticeManupulation60 from "../NoticeManupulation/NoticeManupulation60.jsx";
import ViewAllUser from "../View/UserSearchResponse60.jsx";
import CreateVendor from "../STOCK/CreateVendor/CreateVendor.jsx";
import CreateItem from "../STOCK/CreateItemType/CreateItem.jsx";
import StockItemEntry from "../STOCK/StockEntry/StockItemEntry.jsx";
import ViewAllVendor from "../STOCK/ViewAllVendor/ViewAllVendor.jsx";
import ViewAllItem from "../STOCK/ViewAllItem/ViewAllItem.jsx";
import StockView from "../STOCK/StockView/StockView.jsx";
import StockSearch from "../STOCK/StockSearch/StockSearch.jsx";
import SecondaryStockEntrySearch from '../STOCK/SecondaryStockEntrySearch/SecondaryStockEntrySearch.jsx'
import SecondaryStockEntryView from '../STOCK/SecondaryStockEntryView/SecondaryStockEntryView.jsx'
import SecondaryStockEntryAllSearch from '../STOCK/SecondaryStockEntryAll/SecondaryStockEntryAllSearch.jsx'
import ModifyStockEntrySearch from '../STOCK/ModifyStockEntrySearch/ModifyStockEntrySearch.jsx'
import ModifyStockEntryView from '../STOCK/modifyStockView/modifyStockEntryView.jsx'
import CreateBed40 from "../HOSTEL/createBed/CreateBed40.jsx";
import ViewBedStatus60 from "../HOSTEL/ViewBed/ViewBedStatus60.jsx";
import SearchBed from "../HOSTEL/ViewBed/searchBed.jsx";
import HostelEntry from "../HOSTEL/HostelEntry/HostelEntry.jsx";
import SecondaryStockEntryAllView from '../STOCK/SecondaryStockEntryAll/SecondaryStockEntryAllView.jsx';
import SearchHostelEntry from "../HOSTEL/HostelEntry/SearchHostelEntry.jsx";
import HostelView from "../HOSTEL/ViewHostalEntry/HostelView.jsx";
import SearchHostelView from "../HOSTEL/ViewHostalEntry/SearchHostelView.jsx";
import CheckPendingSearch from "../STOCK/CheckPendingAmount/CheckPendingSearch.jsx";
import AcademicEntrySearch from '../Student/AcademicEntryView/AcademicEntrySearch.jsx';
import AcademicEntryView from '../Student/AcademicEntryView/AcademicEntryView.jsx'
import MasterStudentEntry from "../Student/MasterStudentEntry/MasterStudentEntry.jsx";
import CheckPendingView from '../STOCK/CheckPendingAmount/CheckPendingView.jsx'
import MasterStudentViewSearch from "../Student/MasterStudentViewUpdate/MasterStudentViewSearch.jsx";
import MasterStudentViewUpdate from "../Student/MasterStudentViewUpdate/MasterStudentViewUpdate.jsx";
import AcademicEntryUpdateSearch from "../Student/AcademicEntry/AcademicEntryUpdateSearch.jsx";
import AcademicEntryUpdate from "../Student/AcademicEntry/AcademicEntryUpdate.jsx";
import CreateFaculty from "../FACULTY/CreateFaculty/CreateFaculty.jsx";
import ViewAndUpdateFacultysearch from "../FACULTY/ViewAndUpdateFaculty/ViewAndUpdateFacultySearch.jsx"
import ViewAndUpdateFaculty from "../FACULTY/ViewAndUpdateFaculty/ViewAndUpdateFaculty.jsx";
import CreateSubject from "../FACULTY/CreateAndViewSubject/CreateSubject.jsx";
import ViewSubject from "../FACULTY/CreateAndViewSubject/ViewSubject.jsx";
import CreateExternalExam from "../FACULTY/CreateAndViewExam/CreateExternalExam.jsx";
import ViewExternalExam from "../FACULTY/CreateAndViewExam/ViewExternalExam.jsx";
import CreateInternalMarks from "../FACULTY/EditInternalMarks/CreateInternalMarks.jsx";
import CreateInternalMarksSearch from "../FACULTY/EditInternalMarks/CreateInternalMarksSearch.jsx";
import PromoteNextClassSearch from "../PromoteNextClass/PromoteNextClassSearch.jsx";
import PromoteNextClassView from '../PromoteNextClass/PromoteNextClassView.jsx'
import CreateMarksSearch from "../FACULTY/CreateExternalMarks/CreateExternalMarksSearch.jsx";
import ExportStudentMarksSearch from "../FACULTY/ExportStudentMarks/ExportStudentMarksSearch.jsx";
import ExportStudentMarksView from '../FACULTY/ExportStudentMarks/ExportStudentMarksView.jsx'
import CreateItemName from "../STOCK/CreateItemNameVIew-Create/CreateItemName.jsx";
import ItemNameView from "../STOCK/CreateItemNameVIew-Create/ItemNameView.jsx";
import EntryStockUsage from "../STOCKUSAGE/EntryStockusage.jsx";
import StockUsageSearch from "../STOCKUSAGE/StockUsageView/StockUsageSearch.jsx";
import CreateMarks from "../FACULTY/CreateExternalMarks/CreateExternalView.jsx";
import CreateFeeSturcture from "../FEEPAYMENT/CreateFeePayment/CreateFeeSturcture.jsx";
import ViewFeeStructureSearch from "../FEEPAYMENT/ViewFeeStructure/ViewFeeStructureSearch.jsx";
import ViewFeeStructure from "../FEEPAYMENT/ViewFeeStructure/ViewFeeStructure.jsx";
import StudentFeePaymentEntrySearch from "../FEEPAYMENT/StudentFeePaymentEntry/StudentFeePaymentEntrySearch.jsx";
import ViewFeePaymentSearch from "../FEEPAYMENT/ViewStudentFeepayment/ViewFeePaymentSearch.jsx";
import StudentFeePaymentEntry from "../FEEPAYMENT/StudentFeePaymentEntry/StudentFeePaymentEntry.jsx";
import ViewFeePayment from "../FEEPAYMENT/ViewStudentFeepayment/ViewFeePayment.jsx";
import StockUsageView from "../STOCKUSAGE/StockUsageView/StockUsageView.jsx";
import StockUsageEditSearch from "../STOCKUSAGE/StockUsageEdit/StockUsageEditSearch.jsx";
// import StockUsageEdit from "../STOCKUSAGE/StockUsageEdit/StockUSageEdit.jsx";
import StockUsageEdit from "../STOCKUSAGE/StockUsageEdit/StockUSageEdit.jsx";
import stockUSageEdit from "../STOCKUSAGE/StockUsageEdit/StockUSageEdit.jsx";

const DashBoardMain = (props) => {
  const [data, setdata] = useState([]);
  const [search,setSearch]=useState("none")
  const [view,setView]=useState('none')
  const [allRoles, setAllRoles] = useState([]);
  const [ViewVendor,setViewVendor]=useState("none")
  const [itemView,setitemView]=useState("none")
  const [pmyStockData,setpmyStockData]=useState([]);
  const [scndStockData,setscndStockData]=useState([]);
  const [secondarysearchstockdata,setsecondarysearchstockdata]=useState([]);
  const [modifyviewstockdata,setmodifyviewstockdata]=useState([]);
  const [pendingviewstockdata,setpendingviewstockdata]=useState([]);
  const [ViewStock,setViewStock]=useState("none")
  const [viewallStock,setviewallStock]=useState("none")
  const [secondStockEntryViewShow,setsecondStockEntryViewShow]=useState('none')
  const [modifyStockEntryViewShow,setmodifyStockEntryViewShow]=useState('none')
  const [pendingViewAllShow,setpendingViewAllShow]=useState('none')
  const [bedData, setBedData] = useState([]);
  const [hostelStudentData, setHostelStudentData] = useState([]);
  const [hostelenrtydata,sethostelenrtydata]=useState([])
  const [academicentrydata,setacademicEntryData]=useState([])
  const [viewallacademicEntryShow,setviewallacademicEntryShow]=useState("none")
  const [hostelexportshow,sethostelexportshow]=useState("none")
  const [allusershow,setallusershow]=useState("none")
  const [masterStudentViewShow,setmasterStudentViewShow]=useState("none")

  const [promotetonextClass,setpromotetonextClass]=useState("none")
  const [promoteViewData,setPromoteViewData]=useState([])
  
  const [MasterStudentSearchDatas,setMasterStudentSearchData]=useState([])
  const [VendorDatas,setVendorData]=useState([])
  const [itemData,setItemData]=useState([])
  const [academicEntryUpdateData, setacademicEntryUpdateData] = useState([]);
  const [academicEntryUpdateShow, setacademicEntryUpdateShow] = useState("none");
  const [facultyData, setFacultyData] = useState([]);
  const [roomData, setRoomData] = useState([])
  const [subjectData, setSubjectData] = useState([]);
  const [subjectView, setSubjectView] = useState("none");
  const [externalExamData,setExternalExamData]=useState([])
  const [externalExamView,setExternalExamView]=useState("")
  const [internalExamData,setInternalExamData]=useState([])
  const [internalMarksData,setInternalMarksData]=useState([])
  const [internalMarksView,setInternalMarksView]=useState("")
  const [externalMarksData,setExternalMarksData]=useState([])
    const [externalMarksView,setExternalMarksView]=useState("")
    const [marksData,setMarksData]=useState([])
    const [marksView,setMarksView]=useState("")
  const [Class,setClass]=useState(0)
    const [academicYear,setAcademicYear]=useState(0)
    const [marksFlag,setMarksFlag]=useState('')
    const [itemNameData,setItemNameData]=useState([])
    const [editExamName,setEditExamName]=useState("")
    const [editSubjectName,setEditSubjectName]=useState("")
    const [editMarks,setEditMarks]=useState(0)
    const [entexam,setEntexam]=useState('')
    const [entSubject,setEntSubject]=useState('')
    const [enttarget,setEnttarget]=useState(0)
    const [acClass,setAcClass]=useState(0)
    const [acYear,setAcYear]=useState(0)
    const [acRegNo,setAcRegNo]=useState('')

    const [viewStructData,setViewStructData]=useState([])
    const [ViewStructView,setViewStructView]=useState("none")
    const [hostelClass,setHostelClass]=useState(0)
    const [hostelYear,setHostelYear]=useState(0)
    const [hostelRegNo,setHostelregNo]=useState("")
    const [FeePaymentData,setFeePaymentData]=useState([])
    const [FeePaymentUpdateData,setFeePaymentUpdateData]=useState([])
    const [FeeType,setFeeType]=useState("")
    const [StockUsageData,setStockUsageData]=useState([])
    const [StockUsageEditData,setStockUsageEditData]=useState([])
    const [StockUsageEditView,setStockUsageEditView]=useState("none")

  {/* User Start */}

  //get all roles
  const getAllRoles = (data) => {
    setAllRoles(data);
  };
  //view user button show
  const usershow = (data) => {
    setallusershow(data);
  }
  //get user data
  const getdata = (data) => {
    setdata(data);
  };
  {/* User End */}





  {/* Stock Start */}
  //div-40-call
  const viewallVendor = (data) => {
    if (ViewVendor === "none") {
      setViewVendor("block");
    }
    else {
      setViewVendor("none");
    }
  }
  const Viewallitemtype = (data) => {
    if (itemView === "none") {
      setitemView("block");
    }
    else {
      setitemView("none");
    }
  }

  const handleprimaryStockData = (data) => {
    setpmyStockData(data);
  }
  const handleseconadryStockData = (data) => {
    setscndStockData(data);
  }

  const handleSecondaryViewStockData = (data) => {
    setsecondarysearchstockdata(data);
  }
  const handlemodifysearchStockData = (data) => {
    setmodifyviewstockdata(data);
  }
  const handlePendingViewStockData = (data) => {
    setpendingviewstockdata(data);
  }
  //Search-button-functionality
  const stockViewShow = (data) => {
    setViewStock(data);
  }
  const secondaryStockEntryViewShow = (data) => {
    setsecondStockEntryViewShow(data);
  }
  const stockallshow = (data) => {
    setviewallStock(data);
  }
  const modifyStockEntryShow = (data) => {
    setmodifyStockEntryViewShow(data);
  }
  const pendingViewShow = (data) => {
    setpendingViewAllShow(data);
  }
  const VendorData = (data) => {
    setVendorData(data);
  }
{/* Stock End */}






{/* Hostel Start */}

const HostelStudentData=(data,cl,re,ye)=>{
  setHostelStudentData(data);
  setHostelClass(cl)
    setHostelYear(ye)
    setHostelregNo(re)
}
const handalesearchBed=(room)=>{
  axios.post("/api/v1/hostel/searchBed",{room},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
    setBedData(res.data.result)
    console.log(res.data.result)
  })
}
const handlehostelEntryData=(data)=>{
sethostelenrtydata(data)
}
//hostel-export-all-show
const hostelExportAllShow=(data)=>{
  sethostelexportshow(data);
}

{/* Hostel End */}





useEffect(()=>{
if(props.Search==="block" && search==="flex"){
  setView("block")
}

},[search,props.Search])

 

  window.addEventListener("unhandledrejection", function() {
    if(view=='block'){
      setView('none');
    }
    
});
  if(props.Search==="none" && view==="block"){
    setView("none")
  }

const handleSubjectData=(data)=>{
    setSubjectData(data);
}
const handleSubjectView=(data)=>{
    setSubjectView(data);
}

//academic-all-button-show

const academicEntryUpdate=(data)=>{
    setacademicEntryUpdateShow(data)

}
  const academicEntryUpdateView=(data,d1,d2,d3)=>{
      setacademicEntryUpdateData(data);
        setAcClass(d1)
        setAcYear(d3)
        setAcRegNo(d2)
  }
const academicAllShow=(data)=>{
  setviewallacademicEntryShow(data);
}


const PromoteNextClassShow=(data)=>{
  setpromotetonextClass(data);
}


const handleacademicEntryData=(data)=>{
  setacademicEntryData(data)
}

  const MasterStudentViewall=(data)=>{
      setmasterStudentViewShow(data)
  }
  const MasterStudentSearchData=(data)=>{
      setMasterStudentSearchData(data)
  }
  const ItemData=(data)=>{
      setItemData(data)
  }
const getAllRoom=(data)=>{
      setRoomData(data)
}
  const facultySearchedData=(data)=>{
        setFacultyData(data)
  }
  const ExternalExamData=(data)=>{
    setExternalExamData(data)
  }
  const ExternalExamView =(data)=>{
    setExternalExamView(data)
  }
const InternalExamData=(data)=>{
    setInternalExamData(data)

}
const InternalMarksData=(data,data1,data2,data3)=>{
      setInternalMarksData(data)
    setEditExamName(data1)
    setEditSubjectName(data2)
    setEditMarks(data3)
}
const InternalMarksView=(data)=>{
    setInternalMarksView(data)
}

const PromoteNextClassSearchData=(data,d1,d2)=>{
  setPromoteViewData(data)
    setClass(d1)
    setAcademicYear(d2)
}
   const ExternalMarksData=(data,d1,d2,d3)=>{
    setExternalMarksData(data)
      setEntexam(d1)
        setEntSubject(d2)
        setEnttarget(d3)
   }
   const MarksData=(data)=>{
    setMarksData(data)
   }
   const MarksView=(data)=>{
    setMarksView(data)
   }

    const ExternalMarksView=(data)=>{
     setExternalMarksView(data)
    }

  const handaleMarksFlag=(data)=>{
    setMarksFlag(data)
  }
  const handleItemname=(data)=>{
      setItemNameData(data)
  }
  const handleViewFeeStructData=(data,d1)=>{
      setViewStructData(data)
      setViewStructView(d1)
  }

  const handleFeePaymentData=(data)=> {
        setFeePaymentData(data)
  }
  const handleFeePaymentUpdateData =(data,d1)=>{
        setFeePaymentUpdateData(data)
        setFeeType(d1)
    }
  const handleStockUsage=(data)=>{
    setStockUsageData(data)
  }
  const handleStockUsageEdit=(data,d1)=>{
    setStockUsageEditData(data)
          setStockUsageEditView(d1)
  }
  console.log(props.StockUsageEdit)
  return (
    <>
      <div className={"dashboard-main-right" +" " +props.right}>
        <div className="dasdhboard-main-40">

        {/* User Start*/}
            {/* Create User */}
            <CreateUser showCreate={props.createUser} AllRoles={allRoles} />
            {/* Search User */}
            <UserSearchquery40 result={getdata} Search={props.Search}  setSearch={setSearch} allRoles={getAllRoles}  buttonClick={usershow}/>
        {/* User End*/}

        {/* NoticeBoard Start*/}
            {/* Create Notice */}
            <StudentInputNotice Publish={props.Publish} setSearch={setSearch}/>
        {/* NoticeBoard End*/}

        {/* Stock Start*/}
            {/*  Create Item Name*/}
            <CreateItemName view={props.CretaeItemName} Item={itemData} ItemNameData={handleItemname}/>
            {/* Create Vendor */} 
            <CreateVendor createView={props.VendorCreateDisplay} onclick={viewallVendor} setVendorData={VendorData}/>
            {/* Create Item */} 
            <CreateItem itemCreateView={props.ItemCreateDisplay} handleItemView={Viewallitemtype} setItemData={ItemData}/>
            {/* Primary Stock Entry */} 
            <StockItemEntry stockEntryView={props.EntryStock} setAllVendorName={VendorDatas} setAllItemType={itemData}/>
            {/* Export Primary Stock Search */} 
            <StockSearch StockView={props.StockView} Vendor={VendorDatas} Item={itemData} setStockData={handleprimaryStockData} buttonClick={stockViewShow}/>
            {/* Secondary Stock Entry Search */} 
            <SecondaryStockEntrySearch SecondstockEntrySearch={props.SecondstockEntrySearch} setStockData={handleSecondaryViewStockData} buttonClick={secondaryStockEntryViewShow}/>
            {/* Export Secondary Stock Search */} 
            <SecondaryStockEntryAllSearch  Vendor={VendorDatas} Item={itemData} setStockData={handleseconadryStockData} SecondStockView={props.SecondStockView} buttonClick={stockallshow}/> 
            {/* Modify Stock Entry Search */} 
            <ModifyStockEntrySearch ModifyStockSearch={props.modifyStock} setStockData={handlemodifysearchStockData} buttonClick={modifyStockEntryShow}/>
             {/* Check Pending Search */}
            <CheckPendingSearch view={props.checkpending} Vendor={VendorDatas} Item={itemData} setPendingStockData={handlePendingViewStockData} buttonClick={pendingViewShow}/>
        {/* Stock End*/}
        {/*stock usage*/}
            <EntryStockUsage view={props.StockUsageEntry} Item={itemData}/>
            <StockUsageSearch view={props.StockUsageView} StockUsage={handleStockUsage} />
            <StockUsageEditSearch view={props.StockUsageEdit} StockUsageEditData={handleStockUsageEdit}/>

        {/* Hostel Start*/}  
            {/* Create Room */}  
            <CreateBed40 createbed={props.createbed} allRoomData={getAllRoom} />
            {/* Search Room */} 
            <SearchBed setSearch={handalesearchBed} viewBed={props.viewbed} data={roomData} />
            {/* Search Hostel Entry */}
            <SearchHostelEntry setStudentData={HostelStudentData} view={props.HostelEntryCreate}/>
            {/* Export Hostel Entry Search*/}
            <SearchHostelView view={props.HostelentryView} setHostelEntryData={handlehostelEntryData} buttonClick={hostelExportAllShow} data={roomData} /> 
        {/* Hostel End*/}

        {/* Student Start*/} 
          {/* Master Student Entry*/}
          <MasterStudentEntry view={props.StudentEntry}/>
          {/* Master Student Search*/}
          <MasterStudentViewSearch view={props.MasterStudentView} onclick={MasterStudentViewall} setMasterStudentData={MasterStudentSearchData}/>
          {/* Academic Student Search*/}
          <AcademicEntryUpdateSearch setAcademicEntryData={academicEntryUpdateView} buttonClick={academicEntryUpdate} view={props.AcademicEntryUpdate}/>
          {/* Export Student Search*/}
          <AcademicEntrySearch view={props.Academicview} setAcademicEntryData={handleacademicEntryData} buttonClick={academicAllShow}/>
          {/* Promote Next Class Search*/}
          <PromoteNextClassSearch view={props.PromoteView} setPromoteData={PromoteNextClassSearchData} buttonClick={PromoteNextClassShow} />
        {/* Student End*/} 

         {/* Marks Start */} 
            {/* Faculty Entry*/}
            <CreateFaculty view={props.CreateFaculty}/>
            {/* Faculty Serach*/}
            <ViewAndUpdateFacultysearch view={props.ViewFaculty} facultyData={facultySearchedData}/>
            {/* Create Subject*/}
            <CreateSubject view={props.CreateSubject} setSubject={handleSubjectData} setSubjectView={handleSubjectView}/>
            {/* Create Exam Name */}
            <CreateExternalExam view={props.CreateExam} setExternalExam={ExternalExamData} setExternalView={ExternalExamView} setInternalExam={InternalExamData}/>
            {/* Internal Exam Search*/}
            <CreateInternalMarksSearch view={props.CreateInternalMarks} setInternalMarks={InternalMarksData} setInternalMarksView={InternalMarksView}/>
            {/* External Exam Search*/}
            <CreateMarksSearch view={props.CreateExternalMarks} setExternalMarks={ExternalMarksData} setExternalMarksView={ExternalMarksView}/>
            {/* Export Exam Search*/}
            <ExportStudentMarksSearch view={props.ExportStudentMarks} setStudentMarks={MarksData} setStudentMarksView={MarksView} setSearchcombination={handaleMarksFlag}/>
          {/* Marks End */}

            {/*fee payment Start*/}
            <CreateFeeSturcture view={props.CreateFeeStructure}/>
            <ViewFeeStructureSearch view={props.ViewFeeStructure} viewFeeStructure={handleViewFeeStructData}/>
            <StudentFeePaymentEntrySearch view={props.EntryFeePayment} setFeePaymentData={handleFeePaymentData}/>
            <ViewFeePaymentSearch view={props.ViewFeePayment} setFeePaymentUpdateData={handleFeePaymentUpdateData}/>
        </div>


        <div id = 'dashboard-main-60' className="dashboard-main-60">
          {/* User Start*/} 
              {/* View User*/}     
              <ViewAllUser data={data} UserView={view} View={allusershow} AllRoles={allRoles} />
          {/* User End*/}  

          {/* Noticeboard Start*/}
              {/* View Notice*/}     
              <NoticeManupulation60 Publish={props.Notice}/>
          {/* Noticeboard End*/}

          {/* Stock Start*/}
            <ItemNameView view={props.CretaeItemName} Item={itemNameData} ItemNameData={handleItemname}/>
              {/* View Vendor */}     
              <ViewAllVendor createView={props.VendorCreateDisplay} View={ViewVendor} Vendor={VendorDatas} setVendorData={VendorData}  />
              {/* View Item */}
              <ViewAllItem itemCreateView={props.ItemCreateDisplay} View={itemView} Item={itemData} setItemData={ItemData}/>
              {/* Export Primary Stock */}
              <StockView StockView={props.StockView} view={ViewStock} SearchebyData={pmyStockData}/>
              {/* View Secondary Stock */}
              <SecondaryStockEntryView secondarystocksearch={props.SecondstockEntrySearch} view={secondStockEntryViewShow} SearchebyData={secondarysearchstockdata}/>
              {/* Export Secondary Stock */}
              <SecondaryStockEntryAllView StockView={props.SecondStockView} view={viewallStock} SearchebyData={scndStockData}/>
              {/* View Modify Stock */}
              <ModifyStockEntryView  Vendor={VendorDatas} Item={itemData} modifyStockView={props.modifyStock} view={modifyStockEntryViewShow} SearchebyData={modifyviewstockdata}/>
              {/* View Pending Balance */}
              <CheckPendingView StockView={props.checkpending} view={pendingViewAllShow} SearchebyData={pendingviewstockdata}/>

            <StockUsageView view={props.StockUsageView} data={StockUsageData} />
           <StockUsageEdit data={StockUsageEditData} view40={props.StockUsageEdit} view={StockUsageEditView}  />
          {/* Vendor End*/}    

          {/* Hostel Start*/}
              {/* View Bed Status */}   
              <ViewBedStatus60 viewbed={props.viewbed} BedData={bedData} allRoomData={getAllRoom} />
              {/* View Hostel Entry */}  
              <HostelEntry data={hostelStudentData} view={props.HostelEntryCreate} room={roomData} Class={hostelClass} year={hostelYear} regNo={hostelRegNo} />
              {/* View Export Hostel Entry */}
              <HostelView hostelexportview={props.HostelentryView} view={hostelexportshow} SearchebyData={hostelenrtydata} />
          {/* Hostel End*/}

         {/* Student Start*/} 
            <MasterStudentViewUpdate data={MasterStudentSearchDatas} view={masterStudentViewShow} View40={props.MasterStudentView} />
            <AcademicEntryUpdate SearchebyData={academicEntryUpdateData} view={academicEntryUpdateShow} academicallview={props.AcademicEntryUpdate} Class={acClass} regNo={acRegNo} year={acYear} />
            <AcademicEntryView academicallview={props.Academicview} view={viewallacademicEntryShow} SearchebyData={academicentrydata}/>
            <PromoteNextClassView PromoteView={props.PromoteView} view={promotetonextClass} SearchebyData={promoteViewData} Class={Class} AcademicYear={academicYear} />
         {/* Student End*/} 

          {/* Marks Start*/} 
            <ViewAndUpdateFaculty data={facultyData} view={props.ViewFaculty}/>
            <ViewSubject data={subjectData} view={subjectView} view40={props.CreateSubject}/>
            <ViewExternalExam view={externalExamView} view40={props.CreateExam} data={externalExamData} data1={internalExamData} />
            {/* Marks Edit */}
            <CreateInternalMarks view40={props.CreateInternalMarks} view={internalMarksView} data={internalMarksData} Exam={editExamName} Subject={editSubjectName} Marks={editMarks}/>
            {/* Marks Entry */}
            <CreateMarks view40={props.CreateExternalMarks} view={externalMarksView} data={externalMarksData} exam={entexam} subject={entSubject} total={enttarget} />
            <ExportStudentMarksView view40={props.ExportStudentMarks} view={marksView} data={marksData} type={marksFlag}/>
          {/* Marks End*/}


            <ViewFeeStructure data={viewStructData} view40={props.ViewFeeStructure} view={ViewStructView} />
            <StudentFeePaymentEntry data={FeePaymentData} view={props.EntryFeePayment} />
            <ViewFeePayment view={props.ViewFeePayment} data={FeePaymentUpdateData} feeType={FeeType}/>
        </div>
      </div>
    </>
  );
};
export default DashBoardMain
