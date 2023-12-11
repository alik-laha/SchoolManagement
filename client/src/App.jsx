import Navbar from "./component/navbar/Navbar";
import Login from "./component/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import PrivateComponent from "./component/private/private";
import StockEntry from "./component/StockCreate/StockEntry/StockEntry";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <StockEntry />
            </>
          }
        />
        <Route element={<PrivateComponent />}>
          {/* dashboard page */}

          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
        </Route>
        {/* login */}

        <Route path="/log-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
