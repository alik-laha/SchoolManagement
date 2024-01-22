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
import AcademicEntrySearch from '../Student/AcademicEntry/AcademicEntrySearch.jsx';
import AcademicEntryView from '../Student/AcademicEntry/AcademicEntryView.jsx'
import MasterStudentEntry from "../Student/MasterStudentEntry/MasterStudentEntry.jsx";


const DashBoardMain = (props) => {
  const [data, setdata] = useState([]);
  const [search,setSearch]=useState("none")
  const[view,setView]=useState('none')
  const [allRoles, setAllRoles] = useState([]);
  const [ViewVendor,setViewVendor]=useState("none")
  const [itemView,setitemView]=useState("none")
  const [allVendorName, setAllVendorName] = useState([]);
  const [allItemType, setAllItemType] = useState([]);
  const [StockData,setStockData]=useState([]);
  const [secondarysearchstockdata,setsecondarysearchstockdata]=useState([]);
  const [modifyviewstockdata,setmodifyviewstockdata]=useState([]);
  const [ViewStock,setViewStock]=useState("none")
  const [secondStockEntryViewShow,setsecondStockEntryViewShow]=useState('none')
  const [modifyStockEntryViewShow,setmodifyStockEntryViewShow]=useState('none')
  const [bedData, setBedData] = useState([]);
  const [hostelStudentData, setHostelStudentData] = useState([]);
  
  const [viewallStock,setviewallStock]=useState("none")
  const [hostelenrtydata,sethostelenrtydata]=useState([])


  const [academicentrydata,setacademicEntryData]=useState([])
  const [viewallacademicEntryShow,setviewallacademicEntryShow]=useState("none")
  const [hostelexportshow,sethostelexportshow]=useState("none")

  const getdata = (data) => {
    setdata(data);
  };
  const viewallvendor = () => {
    if(ViewVendor==="none") {
      setViewVendor("block")
    }
    else{
        setViewVendor("none")
    }
  }
 const Viewallitemtype=()=>{
    if(itemView==="none"){
      setitemView("block")
    }
    else{
      setitemView("none")
    }
 }

useEffect(()=>{
if(props.Search==="block" && search==="flex"){
  setView("block")
}

},[search,props.Search])

  const getAllRoles = (data) => {
    setAllRoles(data);
  };

  window.addEventListener("unhandledrejection", function() {
    if(view=='block'){
      setView('none');
    }
    
});
  if(props.Search==="none" && view==="block"){
    setView("none")
  }



const handleVendor=(data)=>{
      setAllVendorName(data);
}
const handleItemType=(data)=>{
    setAllItemType(data);
}
const handleStockData=(data)=>{
    setStockData(data);
}
const handleSecondaryViewStockData=(data)=>{
    setsecondarysearchstockdata(data);
}
const handlemodifysearchStockData=(data)=>{
    setmodifyviewstockdata(data);
}



  
  const stockViewShow=(data)=>{
    setViewStock(data);
  }
//secondary-stock-button-show
const secondaryStockEntryViewShow=(data)=> {
  setsecondStockEntryViewShow(data);

}

const stockallshow=(data)=>{
  setviewallStock(data);
}
//academic-all-button-show
const academicAllShow=(data)=>{
  setviewallacademicEntryShow(data);
}
//hostel-export-all-show
const hostelExportAllShow=(data)=>{
  sethostelexportshow(data);
}


const modifyStockEntryShow=(data)=> {
  setmodifyStockEntryViewShow(data);

}
  const HostelStudentData=(data)=>{
    setHostelStudentData(data);
  }
  const handalesearchBed=(room)=>{
    axios.post("http://localhost:7000/api/v1/hostel/searchBed",{room}).then((res)=>{
      setBedData(res.data.result)
      console.log(res.data.result)
    })
  }
const handlehostelEntryData=(data)=>{
  sethostelenrtydata(data)
}

const handleacademicEntryData=(data)=>{
  setacademicEntryData(data)
}



  return (
    <>
      <div style={{ width: props.right}} className="dashboard-main-right">
        <div className="dasdhboard-main-40">
          
          <UserSearchquery40 result={getdata} Search={props.Search}  setSearch={setSearch} allRoles={getAllRoles}  />
          <CreateUser showCreate={props.createUser} AllRoles={allRoles} />
          <StudentInputNotice Publish={props.Publish} setSearch={setSearch}/>
          <CreateVendor createView={props.VendorCreateDisplay} onViewVendor={viewallvendor}/>
          <CreateItem itemCreateView={props.ItemCreateDisplay} handleItemView={Viewallitemtype}/>
          <StockItemEntry stockEntryView={props.EntryStock} setAllVendorName={handleVendor} setAllItemType={handleItemType}/>
          <StockSearch StockView={props.StockView} Vendor={allVendorName} Item={allItemType} setStockData={handleStockData} buttonClick={stockViewShow}/>
          <SecondaryStockEntrySearch SecondstockEntrySearch={props.SecondstockEntrySearch} setStockData={handleSecondaryViewStockData} buttonClick={secondaryStockEntryViewShow}/>
          <ModifyStockEntrySearch ModifyStockSearch={props.modifyStock} setStockData={handlemodifysearchStockData} buttonClick={modifyStockEntryShow}/>
          <CreateBed40 createbed={props.createbed}/>
          <SearchBed setSearch={handalesearchBed} viewBed={props.viewbed} />
          <SecondaryStockEntryAllSearch  Vendor={allVendorName} Item={allItemType} setStockData={handleStockData} SecondStockView={props.SecondStockView} buttonClick={stockallshow}/> 
          <SearchHostelEntry setStudentData={HostelStudentData} view={props.HostelEntryCreate}/>
          <SearchHostelView view={props.HostelentryView} setHostelEntryData={handlehostelEntryData} buttonClick={hostelExportAllShow} />
          <CheckPendingSearch view={props.checkpending} Vendor={allVendorName} Item={allItemType}  />
          <AcademicEntrySearch view={props.Academicview} setAcademicEntryData={handleacademicEntryData} buttonClick={academicAllShow}/>
          <MasterStudentEntry view={props.StudentEntry}/>

        </div>
        <div id = 'dashboard-main-60' className="dashboard-main-60">
          <ViewAllUser data={data} View={view} AllRoles={allRoles} />
          <NoticeManupulation60 Publish={props.Notice}/>
          <ViewAllVendor createView={props.VendorCreateDisplay} View={ViewVendor} Vendor={allVendorName}  />
          <ViewAllItem itemCreateView={props.ItemCreateDisplay} View={itemView} Item={allItemType}/>
          <StockView StockView={props.StockView} view={ViewStock} SearchebyData={StockData}/>
          <SecondaryStockEntryView secondarystocksearch={props.SecondstockEntrySearch} view={secondStockEntryViewShow} SearchebyData={secondarysearchstockdata}/>
          <ModifyStockEntryView  Vendor={allVendorName} Item={allItemType} modifyStockView={props.modifyStock} view={modifyStockEntryViewShow} SearchebyData={modifyviewstockdata}/>
          <ViewBedStatus60 viewbed={props.viewbed} BedData={bedData}/>
          <SecondaryStockEntryAllView StockView={props.SecondStockView} view={viewallStock} SearchebyData={StockData}/>
          <HostelEntry data={hostelStudentData} view={props.HostelEntryCreate} />
          <HostelView hostelexportview={props.HostelentryView} view={hostelexportshow} SearchebyData={hostelenrtydata} />
          <AcademicEntryView academicallview={props.Academicview} view={viewallacademicEntryShow} SearchebyData={academicentrydata}/>

        </div>
      </div>
    </>
  );
};
export default DashBoardMain
