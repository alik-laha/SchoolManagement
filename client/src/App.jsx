import Navbar from "./component/navbar/Navbar";
import Login from "./component/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import PrivateComponent from "./component/private/private";
import StockEntry from "./component/StockCreate/StockEntry/StockEntry";
import Home from "./component/Home/Home.jsx";
import Header from "./component/Home/Header.jsx";
import Footer from "./component/Home/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}

        <Route
          path="/"
          element={
            
              
              <div>
              
              <Header/>
              <div className="min-h-[60vh]">
              <Home/>
              <Navbar/>
              </div>
              
              <Footer/>
             
              </div>
            
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
