import {useState} from "react";
import axios from "axios";
const AcademicEntrySearch= (props) => {
    const [Class,setClass]=useState("")
    const [regNo,setregNo]=useState("")
    const [year,setyear]=useState("")
    
    const handaleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7000/api/v1/student/getallstudent',{Class,regNo,year}).then((res)=>{
            console.log(res.data.result)
            props.setAcademicEntryData(res.data.result)
        })
            .catch((err)=>{
                console.log(err);
            })
    }
  
    return(
        <>
            <div className="dashbrd-40-colm" style={{display:props.view}}>
                <form onSubmit={handaleSubmit}>
                    <div>
                        <label>
                            Search By Class.
                        </label>
                        <input type="text" value={Class} onChange={(e) => setClass(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            Search By Academic Year.
                        </label>
                        <input type="text" value={year} onChange={(e) => setyear(e.target.value)}/>
                    </div>
                    <div>
                        <label>
                            Search By Registration No.
                        </label>
                        <input type="text" value={regNo} onChange={(e) => setregNo(e.target.value)}/>
                    </div>
                   
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}

export default AcademicEntrySearch;