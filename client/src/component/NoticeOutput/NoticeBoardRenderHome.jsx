import {useState,useEffect} from "react";
import ntc_img from '../NoticeOutput/notice_img.gif'
//Brrech day is defined in day
const breech_day=30


function NewImage({ filedate }) {
    console.log(filedate)
    //date validation start
    let dontshowimg=true
    let currentDate = new Date().toISOString();
    let currentYear = currentDate.slice(0,4);
    let currentMonth = currentDate.slice(5,7);
    let currentDay = currentDate.slice(8,10);
    let dbYear = filedate.slice(6);
    let dbMonth = filedate.slice(3, 5);
    let dbDay = filedate.slice(0, 2);

    if (dbYear < currentYear) 
    {
        dontshowimg=true;
    } 
    else if (dbYear === currentYear) 
    {
        
        if (dbMonth < currentMonth) 
        {
            dontshowimg=true;
        } 
        else if (dbMonth === currentMonth) 
        {
          
            if (dbDay < currentDay-breech_day ) {
                
                dontshowimg=true;
            } 
            else {
                
                dontshowimg=false;
             }
        } 
        else 
        {
            dontshowimg=false;
        }
    } 
    else 
    {
        dontshowimg=false;
    }

    if (!dontshowimg) {
      return <img className="new-img-notice" src={ntc_img}></img>;
    }
    return ;
  }


const NoticeOutput=()=>{
    const [file,setFile]=useState([])
    useEffect(()=>{
        fetch("/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    },[])
    const handleDownload = (filename) => {
        const link = document.createElement("a");
        link.href = `/api/v1/download?filename=${filename}`;
        link.download = filename;
        link.click();
    };

    return(
        <div>
             <span className="noticeboard-main-header">Institute Notice Board</span>
            <div className="noticeboard-main ahm_marq">
          
         


          {/* <marquee loop='1000' onMouseOver={(e) => { e.target.stop() }} onMouseOut={(e) => { e.target.start() }} behaviour='scroll' height ='95%' direction="up" scrolldelay="1" scrollamount="2" > */}
       <div  >

       <ul className="ahm_marquee_content" aria-hidden="true"> 
              {file.map((fileName, index) => (

                       <li onMouseOver={(e) => { e.target.stop() }} onMouseOut={(e) => { e.target.start() }} key={index} style={{cursor:"pointer"}} >
                        <span className="notice-li"><NewImage filedate={fileName.slice(-10)}/> 
                        <p> <a onClick={()=>handleDownload(fileName)} >
                          {       
                              fileName.slice(0,-15)
                          }</a></p>
                       </span>      
                       
                          
                          
                      
                  </li>
                  

              ))}
              </ul>
       </div>
       
               {/* </marquee> */}

      </div>
        </div>
        
    )
}
export default NoticeOutput