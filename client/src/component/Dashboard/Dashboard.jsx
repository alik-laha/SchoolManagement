import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div style={{ height: "40px", backgroundColor: "blue" }}>Head</div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <DashBoardMain />
      </div>
      <div style={{ height: "40px", backgroundColor: "blue" }}>Foot</div>
    </>
  );
};
export default Dashboard;
