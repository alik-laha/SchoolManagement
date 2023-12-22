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
        <div>
            <span>Download Files</span>
            
            
            <marquee direction="up" scrolldelay="1" scrollamount="1"  >
            <ul>
                {file.map((fileName, index) => (
                    
                         <li key={index}>
                        <a href={`./student/${fileName}`} download style={{color:'#990000'}}>
                            {fileName}
                            <br/>
                            <hr size="1" color='#c7c7c7'></hr>
                            <br/>
                        </a>
                    </li>
                   
                       
                    
                    
                ))}</ul>
                 </marquee>
            
        </div>
    )
}
export default NoticeOutput