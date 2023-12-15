import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";

const Dashboard = () => {
  const HandaleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <div style={{ height: "40px", backgroundColor: "blue" }}>
        <button onClick={HandaleLogout}>Logout</button>
      </div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <DashBoardMain />
      </div>
      <div style={{ height: "40px", backgroundColor: "blue" }}>Foot</div>
    </>
  );
};
export default Dashboard;
