import {useState,useEffect} from "react";
import ntc_img from '../NoticeOutput/notice_img.gif'



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
          
            if (dbDay < currentDay ) {
                
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
        fetch("http://localhost:7000/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    },[])
    const handleDownload = (filename) => {
        const link = document.createElement("a");
        link.href = `http://localhost:7000/api/v1/download?filename=${filename}`;
        link.download = filename;
        link.click();
    };

    return(
        <div className="noticeboard-main">
            
            <span className="noticeboard-main-header">Institute Notice Board</span>


            <marquee behaviour='scroll' height ='90%' direction="up" scrolldelay="1" scrollamount="2" >
            <ul className="cssmarquee">
                {file.map((fileName, index) => (

                         <li key={index}>    
                               
                        <div className='li-notice' style={{display:'flex'}}>
                        <NewImage filedate={fileName.slice(-10)}/> 
                        <button onClick={()=>handleDownload(fileName)}>
                            {       
                                fileName.slice(0,-15)
                            }
                            
                        </button>
                        <hr size="0.5" color='red'></hr>
                        </div>
                        
                    </li>

                ))}</ul>
                 </marquee>

        </div>
    )
}
export default NoticeOutput