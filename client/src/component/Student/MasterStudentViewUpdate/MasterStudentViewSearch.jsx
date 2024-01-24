import {useState} from "react";
import axios from "axios";
const MasterStudentViewSearch = (props) => {
    const [regNo,setRegNo]=useState("");
    const [admissionYear,setAdmissionYear]=useState("");
    const [applyClass,setApplyClass]=useState("")
    const HandleEdit=(e)=> {
        e.preventDefault();
        const data={
            regNo,
            admissionYear,
            applyClass
        }
        axios.post("http://localhost:7000/api/v1/student/getmasterstudent",data)
            .then((res)=>{
                props.setMasterStudentData(res.data.result)
            })
            props.onclick("block");
    }
    return(
        <div className="dashbrd-40-colm" style={{display:props.view}}>
            <form onSubmit={HandleEdit}>
                <div>
                    <label>Search By Registration ID</label>
                    <input
                        type="text"
                        placeholder="Registration ID"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                    />
                </div>


                <div>
                    <label>Search By Admisson Year</label>
                    <input
                        type="number"
                        placeholder="Admisson Year"
                        value={admissionYear}
                        onChange={(e) => setAdmissionYear(e.target.value)}
                    />
                </div>

                <div>
                    <label>Search by Applied Class </label>
                    <input
                        type="number"
                        placeholder="Applied Class"
                        value={applyClass}
                        onChange={(e)=>setApplyClass(e.target.value)}
                    />
                </div>


                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>

            </form>
        </div>
    )
}
export default MasterStudentViewSearch;