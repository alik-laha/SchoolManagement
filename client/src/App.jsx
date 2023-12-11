import Navbar from "./component/navbar/Navbar";
import Login from "./component/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      {/* home page */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
            </>
          }
        />
        {/* dashboard page */}
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>

      {/* login */}
      <Routes>
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
