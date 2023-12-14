import CreateUser from "../CreateUser/CreateUser";
import CreateRole from "../Role/CreateRole";
const CreateItem = () => {
  return (
    <>
      <div style={{ backgroundColor: "yellow", width: "80%" }}>
        <div style={{ height: "40%", backgroundColor: "gray" }}>
          <CreateUser />
          <CreateRole />
        </div>
        <div style={{ height: "60%", backgroundColor: "white" }}></div>
      </div>
    </>
  );
};
export default CreateItem;
