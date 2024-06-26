
import Login from "./component/login/Login";
import AboutUs from "./component/AboutUS/AboutUS.jsx";
import ContactUs from "./component/ContactUs/ContactUS.jsx";
import Gallery from "./component/Galllery/Gallery.jsx";

import VisionMision from "./component/NavLinkComponents/VisionMission.jsx"
import Programs from "./component/NavLinkComponents/Programs.jsx"
import History from "./component/NavLinkComponents/History.jsx"
import Facilities from "./component/NavLinkComponents/Facilities.jsx"

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import PrivateComponent from "./component/private/private";

import Home from "./component/Home/Home.jsx";
import Header from "./component/Home/Header.jsx";
import Footer from "./component/Home/Footer.jsx";
import NavDropdown from "./component/Home/NavDropdown.jsx";
import DownloadForms from "./component/NavLinkComponents/DownloadForms.jsx";
import MarkStudentView from "./component/MarkStudentView/MarkStudentView.jsx";
import Schedule from "./component/NavLinkComponents/Schedule.jsx";
import Payment from "./component/NavLinkComponents/Payment.jsx";

function App() {
  const InstituteInfo={name:"Institute",history:"/Introduction",
  programs:"/Programs",vm:"/Vision&Mission",facilities:"/editorial",founder:"Founder's Desk",
  visionmision:"Vision & Mission",progrm:"Programs",facility:"Editorial"}

  const studentinfo={name:"Institute",dailylink:"/daily-schedule",
  markslink:"/marks-view",vm:"/Vision&Mission",facilities:"/Facilities",daily:"Daily Schedule",
  marks:"Result",progrm:"Programs",facility:"Facilities"}

  const otherinfo={name:"Institute",dwnldlink:"/download",
 dwnld:"Download",
 }
  
  
  let countdownStartTime = localStorage.getItem('countdownStartTime');
    let elapsedTime = 0;
    const durationInMillis =5*60* 60 * 1000; // 5 hours
    if (countdownStartTime) {
        const currentTime = new Date().getTime();
        elapsedTime = currentTime - parseInt(countdownStartTime);
    }
    let remainingTime = durationInMillis - elapsedTime;
    setTimeout(function() {
        localStorage.removeItem("user");
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        localStorage.removeItem('countdownStartTime')
        window.location.reload();
    }, remainingTime);
    ``
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}

        <Route
          path="/"
          element={
              <div>
              <Header/>
              {/* <span style={{display: 'flex',backgroundColor:'#061574'}}>  */}
              <span className='nav-main-header'
              > 
              
                <NavDropdown value={InstituteInfo} student={studentinfo} other={otherinfo}/>
                
                
                </span>
                <div className="min-h-[60vh]">
               
                  <Home/>
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
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/gallery" element={<Gallery/>} />
        
        <Route path="/Introduction" element={<History/>} />
        <Route path="/Vision&Mission" element={<VisionMision/>} />
        <Route path="/Programs" element={<Programs/>} />
        <Route path="/editorial" element={<Facilities/>} />

        
        <Route path="/marks-view" element={<MarkStudentView />} />
        <Route path="/daily-schedule" element={<Schedule />} />

        <Route path="/download" element={<DownloadForms/>} />

        <Route path="/payment" element={<Payment />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
