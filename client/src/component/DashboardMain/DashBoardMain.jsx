import CreateUser from "../CreateUser/CreateUser";
import { useState } from "react";
import UserSearch from "../SearchBars/UserSearch";
import View from "../View/SearchView";
import Getall from "../View/AllView";
import StudentInputNotice from "../NoticeInput/StudentNotice.jsx";
import '../Dashboard/Dashboard.css'
import NoticeManupulation from "../NoticeManupulation/NoticeManupulation.jsx";
const CreateItem = (props) => {
  const [data, setdata] = useState([]);
  const getdata = (data) => {
    setdata(data);
  };
  return (
    <>
      <div style={{ width: props.right}} className="dashboard-main-right">
        <div className="dasdhboard-main-40">
          <UserSearch result={getdata} Search={props.Search} />
          <CreateUser showCreate={props.createUser} />
          <StudentInputNotice Publish={props.Publish}/>
          
        </div>
       


        <div className="dashboard-main-60">
          {data !== undefined && data.length > 0 ? (
            <View data={data} View={props.View} />
          ) : (
            <Getall View={props.View} />
          )}
          <NoticeManupulation Publish={props.Publish}/>
        </div>
      </div>
    </>
  );
};
export default CreateItem;
