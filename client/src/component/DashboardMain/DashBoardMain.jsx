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
  const [ViewVendor,setViewVendor]=useState("none")
  const [itemView,setitemView]=useState("none")

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
    setView('none');
});


  return (
    <>
      <div style={{ width: props.right}} className="dashboard-main-right">
        <div className="dasdhboard-main-40">
          
          <UserSearchquery40 result={getdata} Search={props.Search}  setSearch={setSearch} allRoles={getAllRoles}  />
          <CreateUser showCreate={props.createUser} AllRoles={allRoles} />
          <StudentInputNotice Publish={props.Publish} setSearch={setSearch} />
          <CreateVendor createView={props.VendorCreateDisplay} onViewVendor={viewallvendor}/>
          <CreateItem itemCreateView={props.ItemCreateDisplay} handleItemView={Viewallitemtype}/>
          <StockItemEntry stockEntryView={props.EntryStock}/>
        </div>
        <div id = 'dashboard-main-60' className="dashboard-main-60">
          <ViewAll data={data} View={view} AllRoles={allRoles} />
          <NoticeManupulation60 Publish={props.Notice}/>
          <ViewAllVendor createView={props.VendorCreateDisplay} View={ViewVendor}  />
          <ViewAllItem itemCreateView={props.ItemCreateDisplay} View={itemView}/>
        </div>
      </div>
    </>
  );
};
export default DashBoardMain
