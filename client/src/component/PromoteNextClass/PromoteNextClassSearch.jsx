import {useState} from "react";
import axios from "axios";
const PromoteNextClassSearch= (props) => {
    const [Class,setClass]=useState("")
    const [academicYear,setAcademicYear]=useState("")

    const handaleSubmit=(e)=>{
        e.preventDefault()
            const data={
                Class,
                academicYear,
            }
        axios.post("http://localhost:7000/api/v1/student/getpromotesearch",data)
            .then((res)=>{
                props.setPromoteData(res.data.result)
            })
            .catch((error)=>{
                console.log(error)
            } )
            props.buttonClick("block");

    }

    return(
        <>
            <div className="dashbrd-40-colm" style={{display:props.view}}>
                <form onSubmit={handaleSubmit}>
                    <div>
                        <label>
                            Search By Class.
                        </label>
                        <input type="text" value={Class} onChange={(e) => setClass(e.target.value)} placeholder="Class" required/>
                    </div>

                    <div>
                        <label>
                            Search By Current Academic Year.
                        </label>
                        <input type="text" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} placeholder="Current Year" required/>
                    </div>
             
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}

export default PromoteNextClassSearch;