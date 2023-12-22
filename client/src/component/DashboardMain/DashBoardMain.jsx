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
const DashBoardMain = (props) => {
  const [data, setdata] = useState([]);
  const [search,setSearch]=useState("none")
  const[view,setView]=useState('none')
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

  return (
    <>
      <div style={{ width: props.right}} className="dashboard-main-right">
        <div className="dasdhboard-main-40">
          
          <UserSearchquery40 result={getdata} Search={props.Search}  setSearch={setSearch} />
          <CreateUser showCreate={props.createUser} />
          <StudentInputNotice Publish={props.Publish} setSearch={setSearch} />
          <CreateVendor createView={props.VendorCreateDisplay}/>
          <CreateItem itemCreateView={props.ItemCreateDisplay}/>
          <StockItemEntry stockEntryView={props.EntryStock}/>
        </div>
        <div id = 'dashboard-main-60' className="dashboard-main-60">
          <ViewAll data={data} View={view} />
          <NoticeManupulation60 Publish={props.Notice}/>
        </div>
      </div>
    </>
  );
};
export default DashBoardMain
