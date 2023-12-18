import CreateUser from "../CreateUser/CreateUser";
import { useState } from "react";
import UserSearch from "../SearchBars/UserSearch";
import View from "../View/SearchView";
import Getall from "../View/AllView";
import StudentInputNotice from "../NoticeInput/StudentNotice.jsx";
const CreateItem = () => {
  const [data, setdata] = useState([]);
  const getdata = (data) => {
    setdata(data);
  };
  return (
    <>
      <div style={{ backgroundColor: "yellow", width: "80%" }}>
        <div style={{ height: "40%", backgroundColor: "gray" }}>
          <CreateUser />
          <StudentInputNotice/>
          <UserSearch result={getdata} />
        </div>
        <div style={{ height: "60%", backgroundColor: "white" }}>
          {data != undefined && data.length > 0 ? (
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
