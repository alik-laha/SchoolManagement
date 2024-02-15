import {useState} from "react";
import axios from "axios";
const MasterStudentViewSearch = (props) => {
    const [regNo,setRegNo]=useState("");
    const [admissionYear,setAdmissionYear]=useState("");
    const [applyClass,setApplyClass]=useState("")
    const [inactivated,setInactivated]=useState(0);
    const HandleEdit=(e)=> {
        e.preventDefault();
        const data={
            regNo,
            admissionYear,
            applyClass,
            active:inactivated
        }
        axios.post("http://localhost:7000/api/v1/student/getstudentbyactive",data)
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
                    <select onChange={(e) => setApplyClass(parseInt(e.target.value))} value={applyClass}>
                        <option value="">Class</option>
                        <option value="1">
                        I
                        </option>
                        <option value="2">
                            II
                        </option>
                        <option value="3">
                            III
                        </option>
                        <option value="4">
                            IV
                        </option>
                        <option value="5">
                            V
                        </option>
                        <option value="6">
                            VI
                        </option>
                        v
                        <option value="7">
                            VII
                        </option>
                        
                        <option value="8">
                            VIII
                        </option>
                        <option value="9">
                            IX
                        </option>
                        <option value="10">
                            X
                        </option>
                        <option value="11">
                            XI
                        </option>
                        <option value="12">
                            XII
                        </option>
                        
                    </select> 
                </div>
                <div>
                    <label>
                        Student inactivated
                    </label>
                    <input type="checkbox" onChange={(e)=>e.target.checked===false ? setInactivated(0):setInactivated(1)} />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>

            </form>
        </div>
    )
}
export default MasterStudentViewSearch;