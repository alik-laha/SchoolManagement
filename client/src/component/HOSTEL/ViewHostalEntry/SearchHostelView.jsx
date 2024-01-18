import {useState} from "react";
import axios from "axios";
const searchHostelView= (props) => {
    const [Class,setClass]=useState("")
    const [academicYear,setAcademicYear]=useState("")

    const handaleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7000/api/v1/hostel/gethostelentry',{Class,academicYear}).then((res)=>{
            console.log(res.data.result)
            props.setHostelEntryData(res.data.result)
        })
    }
    return(
        <>
            <div style={{display:props.view}}>
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
                        <input type="text" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}/>
                    </div>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </>
    )
}

export default searchHostelView;