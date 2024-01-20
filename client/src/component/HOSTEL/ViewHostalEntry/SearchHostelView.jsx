import {useEffect, useState} from "react";
import axios from "axios";
const searchHostelView= (props) => {
    const [Class,setClass]=useState("")
    const [academicYear,setAcademicYear]=useState("")
    const [roomNo,setRoomNo]=useState("")
    const [roomData,setRoomData]=useState([])

    const handaleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7000/api/v1/hostel/gethostelentry',{Class,academicYear,roomNo}).then((res)=>{
            console.log(res.data.result)
            props.setHostelEntryData(res.data.result)
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:7000/api/v1/hostel/getroomno")
            .then((res) => {
                setRoomData(res.data.result)
            })
            .catch((err) => {
                console.log(err);
            })
    },[props.view])
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
                        <input type="text" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}/>
                    </div>
                    <div>
                        Search by room no
                        <select onChange={(e)=>setRoomNo(e.target.value)}>
                            <option value="">Select Room No</option>
                            {
                                roomData.map((data,idx)=>{
                                    return(
                                        <option key={idx} value={data.room_no}>{data.room_no}</option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}

export default searchHostelView;