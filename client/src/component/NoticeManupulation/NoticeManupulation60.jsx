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
    },[props.Publish])

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
           
           <table className="table-60">
           <thead>
                <tr>
                    <th>Notice Name</th>
                    <th>Action(Delete)</th>
                </tr>
                </thead>

                <tbody>
                {file.map((fileName, index) => (
                    <tr key={index}>
                        <td>
                            {fileName}
                            
                        </td>
                        <td>
                        <button className="dashboard-btn btn-warning" onClick={()=>handaleDelete(fileName)}><MdDelete/></button>
                        </td>
                    </tr>
                ))}

                </tbody>

            </table>
           
            <ul>
             
            </ul>
        </div>
    )
}
export default NoticeManupulation60