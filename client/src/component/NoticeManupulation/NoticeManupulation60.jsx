import {useState,useEffect} from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const NoticeManupulation60=(props)=>{
    const [file,setFile]=useState([])
   
    const [noticevisi,setnoticevisi]=useState('none')
    const clearTable = () => {    
        setFile([]);
      };

    useEffect(()=>{
        if(props.Publish === "block")
        {
            setnoticevisi('block')
        }
        else{
            setnoticevisi('none')
        }
        
    },[props.Publish])

    const fetchFiles=()=>{
        fetch("/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    }

    useEffect(()=>{
        fetch("/api/v1/allfiles")
            .then((response) => response.json())
            .then((data) => setFile(data.files))
            .catch((error) => console.error('Error fetching files:', error));
    },[props.Publish])

    const handaleDelete=(fileName)=>{
        console.log(fileName)
        axios.post("/api/v1/deletenotice",{fileName:fileName})
            .then(() => {
                alert("Notice has been Deleted")
                // setnoticevisi('none')
               // {clearTable()}
               fetchFiles();
            })
            .catch((error) => console.log('Error deleting files:', error));
            

    }
    return(
        <div style={{display:noticevisi}} className="noticeboard-visi">
          <button  className="dashboard-btn dashboard-btn-scss excel-btn noticeboard-visi-cancel-button" onClick={clearTable}>Clear Result</button>  
           <table className="table-60">
           <thead>
                <tr>
                <th style={{width:'10%'}}>Sl. No.</th>
                    <th style={{width:'80%'}}>Notice Name</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {file.map((fileName, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td style={{textAlign:'left'}}>
                            {fileName}
                            
                        </td>
                        <td>
                        <button className="dashboard-btn btn-warning" onClick={()=>handaleDelete(fileName)}><MdDelete/></button>
                        </td>
                    </tr>
                ))}

                </tbody>

            </table>
            {file.length===0 ? <div className="no-data"></div> : null}
            <ul>
             
            </ul>
        </div>
    )
}
export default NoticeManupulation60