import CreateUser from "../CreateUser/CreateUser";
import { useState,useEffect } from "react";
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
import SecondaryStockEntryAllView from '../STOCK/SecondaryStockEntryAllView/SecondaryStockEntryAllView.jsx'


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
  const [ViewStock,setViewStock]=useState("none")
  const [secondStockEntryViewShow,setsecondStockEntryViewShow]=useState('none')



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
  setView("flex")
}

},[search,props.Search])

  const getAllRoles = (data) => {
    setAllRoles(data);
  };

  window.addEventListener("unhandledrejection", function() {
    if(view=='flex'){
      setView('none');
    }
    
});
  if(props.Search==="none" && view==="flex"){
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

  
  const stockViewShow=(data)=>{
    setViewStock(data);
  }

const secondaryStockEntryViewShow=(data)=> {
  setsecondStockEntryViewShow(data);

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
          <SecondaryStockEntryAllView SecondStockView={props.SecondStockView}/>

        </div>
        <div id = 'dashboard-main-60' className="dashboard-main-60">
          <ViewAllUser data={data} View={view} AllRoles={allRoles} />
          <NoticeManupulation60 Publish={props.Notice}/>
          <ViewAllVendor createView={props.VendorCreateDisplay} View={ViewVendor}  />
          <ViewAllItem itemCreateView={props.ItemCreateDisplay} View={itemView}/>
          <StockView StockView={props.StockView} view={ViewStock} SearchebyData={StockData}/>
          <SecondaryStockEntryView secondarystocksearch={props.SecondstockEntrySearch} view={secondStockEntryViewShow} SearchebyData={secondarysearchstockdata}/>

        </div>
      </div>
    </>
  );
};
export default DashBoardMain
