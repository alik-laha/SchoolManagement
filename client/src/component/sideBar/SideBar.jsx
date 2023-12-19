import "./sidebar.css";
import { useState, useEffect } from "react";

const SideBar = (props) => {
  const [userVisi, SetUserVisi] = useState("none");
  const [noticeVisi, setNoticeVisi] = useState("none");
  const [stockVisi, setStockVisi] = useState("none");

  const [employVisi, setEmployVisi] = useState("none");

  const [admin, setAdmin] = useState("none");
  const [cashAdmin, setCashAdmin] = useState("");
  const [stockAdmin, setStockAdmin] = useState("");


  const [dropArrowuser,setdropArrowuser]=useState("+");
  const [dropArrowNotc,setdropArrowNotc]=useState("+");
  const [dropArrowstock,setdropArrowstock]=useState("+");

  const user = sessionStorage.getItem("user");

  useEffect(() => {
    if (user === "ADMIN") 
      {setAdmin("block");}
       else if (user === !"ADMIN") 
       {setAdmin("none");}
       else if (user === "STOCK ADMIN") 
       {setCashAdmin("none");}
       else if (user === "CASH ADMIN") 
       {setStockAdmin("none");}
                  }, [user]);


    {/* User*/}
  const userVisiblity = () => {
    if (userVisi === "none") 
    { SetUserVisi("block");
      setNoticeVisi("none");
      setStockVisi("none");} 
    else {SetUserVisi("none");}

    if (dropArrowuser=="+")
    {setdropArrowuser("-");
      setdropArrowstock("+")
      setdropArrowNotc("+");}
    else{setdropArrowuser("+");
        }};  
    
    {/* NoticeBoard*/}
  const noticeVisibility = () => {
    if (noticeVisi === "none") 
    { setNoticeVisi("block");
      SetUserVisi("none");
      setStockVisi("none");} 
    else {setNoticeVisi("none");}

    if (dropArrowNotc=="+")
    { setdropArrowNotc("-");
      setdropArrowstock("+");
      setdropArrowuser("+")}
    else{setdropArrowNotc("+");}};

    {/* Stock*/}
  const stockVisiblity = () => {
    if (stockVisi === "none") {
      setStockVisi("block");
      SetUserVisi("none");
      setNoticeVisi("none");}
      else {setStockVisi("none");}

    if (dropArrowstock=="+")
    { setdropArrowstock("-");
      setdropArrowuser("+");
      setdropArrowNotc("+")}
    else{setdropArrowstock("+");}};

  return(
      <>
      <div className={props.class}>
      <div className="sidebar-main-header">
        {/* User */}
        <span onClick={userVisiblity} className="user" style={{ display: admin}}>&#x3e;&nbsp;&nbsp;&nbsp;User<p>{dropArrowuser}</p></span>
        <div style={{ display: userVisi }}>
          <div className="Items" onClick={props.onSearch}>&#x3e;&nbsp;&nbsp;Search Users</div>
          <div className="Items" onClick={props.oncreate}>&#x3e;&nbsp;&nbsp;Create Users</div>
        </div>

        {/* Notice */}

        <span onClick={noticeVisibility} className="user" style={{ display: admin}}>&#x3e;&nbsp;&nbsp;&nbsp;NoticeBoard<p>{dropArrowNotc}</p></span>
        <div style={{ display: noticeVisi }}>
          <div className="Items" style={{ borderBottom: "none" }} onClick={props.onpublish}>&#x3e;&nbsp;&nbsp;Upload Notice</div>
          <div className="Items" onClick={props.oncreate}>&#x3e;&nbsp;&nbsp;View/Delete Notice</div>
          
        </div>

        {/* stock */}
        <span onClick={stockVisiblity} className="user" style={{ display: admin}}>&#x3e;&nbsp;&nbsp;&nbsp;Stock<p>{dropArrowstock}</p></span>
        <div className="user" style={{ display: stockVisi }}>
          <div className="Items" style={{ display: cashAdmin }}>Create Vendor</div>
          <div className="Items">Item type</div>
          <div className="Items" style={{ display: stockAdmin }}>Stock Entry</div>
          <div className="Items" style={{ display: cashAdmin }}>Cash entry</div>
          <div className="Items" style={{ borderBottom: "none", display: admin }}>Check Pending Amount</div>
        </div>
    </div>
    </div>

      </>

  );


};
export default SideBar;