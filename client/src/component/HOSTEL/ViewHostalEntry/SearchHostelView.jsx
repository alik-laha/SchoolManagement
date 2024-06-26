import {useState} from "react";
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
                roomNo,
                
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
                            Search By Current Academic Year.
                        </label>
                        <input type="text" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} placeholder="Current Year"/>
                    </div>
                    <div>
                        <label>
                            Search By Class.
                        </label>
                        <select onChange={(e) => setClass(parseInt(e.target.value))} value={Class}>
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
                    

                    
                    
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}

export default searchHostelView;