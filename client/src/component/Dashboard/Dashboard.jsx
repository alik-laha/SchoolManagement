import SideBar from "../sideBar/SideBar";
import CreateItem from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div style={{ height: "40px", backgroundColor: "blue" }}>Head</div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <CreateItem />
      </div>
      <div style={{ height: "40px", backgroundColor: "blue" }}>Foot</div>
    </>
  );
};
export default Dashboard;
