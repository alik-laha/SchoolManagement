import {useState,useEffect} from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const NoticeManupulation60=(props)=>{
    const [file,setFile]=useState([])
    useEffect(()=>{
        fetch("http://localhost:7000/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    },[])

    const handaleDelete=(fileName)=>{
        console.log(fileName)
        axios.post("http://localhost:7000/api/v1/deletenotice",{fileName:fileName})
            .then((data) => {
                console.log("done")
            })
            .catch((error) => console.error('Error deleting files:', error));
        window.location.reload()
    }
    return(
        <div style={{display:props.Publish}}>
            <ul>
                {file.map((fileName, index) => (
                    <li key={index}>
                        <div style={{display:"flex"}}>
                            {fileName}
                            <button onClick={()=>handaleDelete(fileName)}><MdDelete /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default NoticeManupulation60