import CreateUser from "../CreateUser/CreateUser";
import { useState,useEffect } from "react";
import UserSearch from "../SearchBars/UserSearch";
import View from "../View/SearchView";
import Getall from "../View/AllView";
import StudentInputNotice from "../NoticeInput/StudentNotice.jsx";
import '../Dashboard/Dashboard.css'
import NoticeManupulation from "../NoticeManupulation/NoticeManupulation.jsx";
import ViewAll from "../View/ViewAll.jsx";
const CreateItem = (props) => {
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
          DashBoard AL-HILAL-Mission
          <UserSearch result={getdata} Search={props.Search} setSearch={setSearch} />
          <CreateUser showCreate={props.createUser} />
          <StudentInputNotice Publish={props.Publish} setSearch={setSearch} />
        </div>
        <div id = 'dashboard-main-60' className="dashboard-main-60">
          {/*{data !== undefined && data.length > 0 ? (*/}
          {/*  <View data={data} View={view} />*/}
          {/*) : (*/}
          {/*  < Getall View={view} />*/}
          {/*)}*/}
          <ViewAll data={data} View={view}/>
          <NoticeManupulation Publish={props.Notice}/>
        </div>
      </div>
    </>
  );
};
export default CreateItem;
