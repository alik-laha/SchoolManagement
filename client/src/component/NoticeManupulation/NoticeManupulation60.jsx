import {useState,useEffect} from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const NoticeManupulation60=(props)=>{
    const [file,setFile]=useState([])
    const [refresh,setRefresh]=useState(false)
    const clearTable = () => {
        
        setFile([]);
      };
    useEffect(()=>{
        fetch("http://localhost:7000/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    },[props.Publish,refresh])

    const handaleDelete=(fileName)=>{
        console.log(fileName)
        axios.post("http://localhost:7000/api/v1/deletenotice",{fileName:fileName})
            .then((data) => {
                alert("File has been Deleted")
            })
            .catch((error) => console.log('Error deleting files:', error));
        setRefresh(true)
    }
    return(
        <div style={{display:props.Publish,marginTop:'-200px'}}>
          <button style={{position:'relative',marginTop:'-40px'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>  
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
            {file.length===0 ? <div className="no-data">No Data Exists</div> : null}
            <ul>
             
            </ul>
        </div>
    )
}
export default NoticeManupulation60