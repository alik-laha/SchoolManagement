import {useState,useEffect} from "react";

const NoticeOutput=()=>{
    const [file,setFile]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:7000/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    },[])

    return(
        <div className="noticeboard-main">
            
            <span className="noticeboard-main-header">Institute Notice Board</span>
            
            
            <marquee behaviour='scroll' height ='90%' direction="up" scrolldelay="1" scrollamount="2" onmouseover="this.stop();" onMouseout="this.start();" >
            <ul className="cssmarquee">
                {file.map((fileName, index) => (
                    
                         <li key={index}>
                            <hr size="1" color='#ff0000'></hr>
                        <a href={`./student/${fileName}`} download >
                            {fileName}
                           
                           
                        </a>
                    </li>
                    
                ))}</ul>
                 </marquee>
            
        </div>
    )
}
export default NoticeOutput