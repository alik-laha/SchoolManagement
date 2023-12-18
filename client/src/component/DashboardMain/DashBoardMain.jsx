import CreateUser from "../CreateUser/CreateUser";
import { useState } from "react";
import UserSearch from "../SearchBars/UserSearch";
import View from "../View/SearchView";
import Getall from "../View/AllView";
import StudentInputNotice from "../NoticeInput/StudentNotice.jsx";
import '../Dashboard/Dashboard.css'
const CreateItem = (props) => {
  const [data, setdata] = useState([]);
  const getdata = (data) => {
    setdata(data);
  };
  return (
    <>
      <div style={{ backgroundColor: "yellow", width: props.right,transition:'0.5s'}}>
        <div style={{ height: "40%", backgroundColor: "gray" }}>
          <CreateUser showCreate={props.createUser} />
          <StudentInputNotice Publish={props.Publish}/>
          <UserSearch result={getdata} Search={props.Search} />
        </div>
        <div style={{ height: "60%", backgroundColor: "white" }}>
          {data !== undefined && data.length > 0 ? (
            <View data={data} />
          ) : (
            <Getall />
          )}

        </div>
      </div>
    </>
  );
};
export default CreateItem;
