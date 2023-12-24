import CreateUser from "../CreateUser/CreateUser";
import { useState,useEffect } from "react";
import UserSearchquery40 from "../SearchBars/UserSearchquery40.jsx";
import StudentInputNotice from "../NoticeInput/NoticeBoardUpload40.jsx";
import '../Dashboard/Dashboard.css'
import NoticeManupulation60 from "../NoticeManupulation/NoticeManupulation60.jsx";
import ViewAll from "../View/UserSearchResponse60.jsx";
import CreateVendor from "../STOCK/CreateVendor/CreateVendor.jsx";
import CreateItem from "../STOCK/CreateItemType/CreateItem.jsx";
import StockItemEntry from "../STOCK/StockEntry/StockItemEntry.jsx";
import ViewAllVendor from "../STOCK/ViewAllVendor/ViewAllVendor.jsx";
import ViewAllItem from "../STOCK/ViewAllItem/ViewAllItem.jsx";
const DashBoardMain = (props) => {
  const [data, setdata] = useState([]);
  const [search,setSearch]=useState("none")
  const[view,setView]=useState('none')
  const [allRoles, setAllRoles] = useState([]);

  const getdata = (data) => {
    setdata(data);
  };
useEffect(()=>{
if(props.Search==="block" && search==="flex"){
  setView("flex")
}
else{
  setView("none")
}
},[search,props.Search])

  const getAllRoles = (data) => {
    setAllRoles(data);
  }
  return (
    <>
      <div style={{ width: props.right}} className="dashboard-main-right">
        <div className="dasdhboard-main-40">
          
          <UserSearchquery40 result={getdata} Search={props.Search}  setSearch={setSearch} allRoles={getAllRoles} />
          <CreateUser showCreate={props.createUser} AllRoles={allRoles} />
          <StudentInputNotice Publish={props.Publish} setSearch={setSearch} />
          <CreateVendor createView={props.VendorCreateDisplay}/>
          <CreateItem itemCreateView={props.ItemCreateDisplay}/>
          <StockItemEntry stockEntryView={props.EntryStock}/>
        </div>
        <div id = 'dashboard-main-60' className="dashboard-main-60">
          <ViewAll data={data} View={view} AllRoles={allRoles} />
          <NoticeManupulation60 Publish={props.Notice}/>
          <ViewAllVendor />
          <ViewAllItem/>
        </div>
      </div>
    </>
  );
};
export default DashBoardMain
