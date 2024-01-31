import {useState} from "react";
import axios from "axios";

const SearchHostelEntry= (props) => {
    const [Class,setClass]=useState("")
    const [regNo,setRegNo]=useState("")
    const [year,setyear]=useState("")

const HandaleSubmit=(e)=>{
    e.preventDefault();
    console.log(regNo)
    axios.post(`http://localhost:7000/api/v1/student/getallstudent`,{Class,regNo,year}).then((res)=>{
        props.setStudentData(res.data.result)
    })

}

    return(
        <>
            <div className="dashbrd-40-colm" style={{display:props.view}}>
                <form onSubmit={HandaleSubmit}>
                    <div>
                        <label>
                            Search By Class.
                        </label>
                        <input placeholder="Class" type="text" value={Class} onChange={(e) => setClass(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            Search By Registration No.
                        </label>
                        <input placeholder="Reg. No." type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)}/>
                    </div>
                    <div>
                        <label>
                            Search By Current Academic Year
                        </label>
                        <input placeholder="Current Acedemic Year" type="text" value={year} onChange={(e) => setyear(e.target.value)}/>
                    </div>

                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}
export default SearchHostelEntry;