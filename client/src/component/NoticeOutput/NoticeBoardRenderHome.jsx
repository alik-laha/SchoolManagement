import {useState,useEffect} from "react";
const NoticeOutput=()=>{
    const [file,setFile]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:7000/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    },[])
    const handleDownload = (fileName) => {
        const url = window.URL.createObjectURL(`/SchoolManagement/Middleware/student/${fileName}`)
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        link.click();
    };

    return(
        <div className="noticeboard-main">
            
            <span className="noticeboard-main-header">Institute Notice Board</span>


            <marquee behaviour='scroll' height ='90%' direction="up" scrolldelay="1" scrollamount="2" >
            <ul className="cssmarquee">
                {file.map((fileName, index) => (

                         <li key={index}>  
                        <a onClick={()=>handleDownload(fileName)}>
                            {fileName}
                        </a>
                        <hr size="1" color='#ff0000'></hr>
                    </li>

                ))}</ul>
                 </marquee>

        </div>
    )
}
export default NoticeOutput