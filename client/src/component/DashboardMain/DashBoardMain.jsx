import CreateUser from "../CreateUser/CreateUser";
import CreateRole from "../Role/CreateRole";
import UserSearch from "../SearchBars/UserSearch";
const CreateItem = () => {
  return (
    <>
      <div style={{ backgroundColor: "yellow", width: "80%" }}>
        <div style={{ height: "40%", backgroundColor: "gray" }}>
          <CreateUser />
          <CreateRole />
        </div>
        <div style={{ height: "60%", backgroundColor: "white" }}>
          <UserSearch />
        </div>
      </div>
    </>
  );
};
export default CreateItem;
