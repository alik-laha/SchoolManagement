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
            <h1>Download Files</h1>
            <ul>
                {file.map((fileName, index) => (
                    <li key={index}>
                        <a href={`./student/${fileName}`} download>
                            {fileName}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default NoticeOutput