import CreateUser from "../CreateUser/CreateUser";
import { useState } from "react";
import CreateRole from "../Role/CreateRole";
import UserSearch from "../SearchBars/UserSearch";
import View from "../View/SearchView";
import Getall from "../View/AllView";
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
          <CreateRole />
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
