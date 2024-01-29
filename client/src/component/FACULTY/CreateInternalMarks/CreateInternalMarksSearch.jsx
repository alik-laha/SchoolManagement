import {useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [regNo,setRegNo]=useState("")
const [Class,setClass]=useState("")
const [year,setYear]=useState("")

const handaleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:7000/api/v1/student/getallstudent`,{Class,regNo,year}).then((res)=>{
        // props.setStudentData(res.data.result)
        console.log(res.data.result)
    })
}
    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handaleSubmit}>
                <div>
                    <label>Rgestration No</label>
                    <input type="text" placeholder="Enter Rgestration Number" value={regNo}
                           onChange={(e) => setRegNo(e.target.value)}/>
                </div>
                <div>
                    <label>Class</label>
                    <input type="number" placeholder="Enter Class" value={Class}
                           onChange={(e) => setClass(e.target.value)}/>
                </div>
                <div>
                    <label>Current year of Study</label>
                    <input type="text" placeholder="Enter Section" value={year}
                           onChange={(e) => setYear(e.target.value)}/>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default CreateInternalMarks