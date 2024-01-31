import {useState} from "react";
import axios from "axios";

const AcademicEntrySearch= (props) => {
    const [Class,setClass]=useState("")
    const [regNo,setregNo]=useState("")
    const [year,setyear]=useState("")
    

    const handaleSubmit=(e)=> {
        e.preventDefault();
        const data={
            Class,
            regNo,
            year
        }
        axios.post("http://localhost:7000/api/v1/student/getallstudent",data)
            .then((res)=>{
                props.setAcademicEntryData(res.data.result)
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
                            Search By Class
                        </label>
                        <input type="text" placeholder='Class' value={Class} onChange={(e) => setClass(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            Search By Current Academic Year
                        </label>
                        <input placeholder='Current Academic Year' type="text" value={year} onChange={(e) => setyear(e.target.value)}/>
                    </div>
                    <div>
                        <label>
                            Search By Registration No.
                        </label>
                        <input type="text" placeholder='Registration No.' value={regNo} onChange={(e) => setregNo(e.target.value)}/>
                    </div>
                   
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}

export default AcademicEntrySearch;