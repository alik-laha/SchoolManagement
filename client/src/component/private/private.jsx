import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const auth = sessionStorage.getItem("user");
  const token = localStorage.getItem("token");
  return auth && token ? <Outlet /> : <Navigate to="/log-in" />;
};
export default PrivateComponent;
