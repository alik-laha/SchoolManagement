import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const auth = sessionStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/log-in" />;
};
export default PrivateComponent;
