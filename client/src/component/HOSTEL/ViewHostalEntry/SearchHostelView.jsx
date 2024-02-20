import {useEffect, useState} from "react";
import axios from "axios";
const searchHostelView= (props) => {
    const [Class,setClass]=useState("")
    const [academicYear,setAcademicYear]=useState("")
    const [roomNo,setRoomNo]=useState("")

    const handaleSubmit=(e)=>{
        e.preventDefault()
            const data={
                Class,
                academicYear,
                roomNo
            }
        axios.post("/api/v1/hostel/gethostelentry",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                props.setHostelEntryData(res.data.result)
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
                    <label>Search by Room No. </label>
                        <select onChange={(e)=>setRoomNo(e.target.value)}>
                            <option value="">All Room</option>
                            {
                                props.data.map((data,idx)=>{
                                    return(
                                        <option key={idx} value={data.room_no}>{data.room_no}</option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <div>
                        <label>
                            Search By Class.
                        </label>
                        <input type="text" value={Class} onChange={(e) => setClass(e.target.value)} placeholder="Class"/>
                    </div>

                    <div>
                        <label>
                            Search By Current Academic Year.
                        </label>
                        <input type="text" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} placeholder="Current Year"/>
                    </div>
                    
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}

export default searchHostelView;