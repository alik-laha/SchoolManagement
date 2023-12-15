import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";
import Footer from "../Home/Footer";

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
      <Footer/>
    </>
  );
};
export default Dashboard;
