import SideBar from "../sideBar/SideBar";
import DashBoardMain from "../DashboardMain/DashBoardMain";
import "./Dashboard.css";
import Footer from "../Home/Footer";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const HandaleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <div style={{ height: "40px", backgroundColor: "blue" ,display:"flex"}}>
        <button onClick={HandaleLogout}>Logout</button>
          <h4><CgProfile /></h4>
          <h6 style={{marginLeft:"40px"}}>welcome {sessionStorage.getItem("name")}</h6>
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
