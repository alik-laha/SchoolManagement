import {useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [regNo,setRegNo]=useState("")
const [Class,setClass]=useState("")
const [year,setYear]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:7000/api/v1/student/getallstudent`,{Class,regNo,year}).then((res)=>{
        props.setInternalMarks(res.data.result)
        props.setInternalMarksView("block")
    }).catch((err)=>{
        console.log(err)
    })
}
    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Registration No</label>
                    <input type="text" placeholder="Reg No." value={regNo}
                           onChange={(e) => setRegNo(e.target.value)}/>
                </div>
                <div>
                    <label>Current Class</label>
                    <input type="number" placeholder="Class" value={Class}
                           onChange={(e) => setClass(e.target.value)}/>
                </div>
                <div>
                    <label>Current Academic Year</label>
                    <input type="text" placeholder="Current Year" value={year}
                           onChange={(e) => setYear(e.target.value)}/>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default CreateInternalMarks