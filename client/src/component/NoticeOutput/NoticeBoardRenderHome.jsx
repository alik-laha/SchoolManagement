import {useState,useEffect} from "react";
import ntc_img from '../NoticeOutput/notice_img.gif'
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
                            <img src={ntc_img}></img>
                        <button onClick={()=>handleDownload(fileName)}>
                            {
                                fileName.slice(0,-15)
                            }
                            
                        </button>
                        <hr size="0.5" color='red'></hr>
                    </li>

                ))}</ul>
                 </marquee>

        </div>
    )
}
export default NoticeOutput