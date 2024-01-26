import {useState,useEffect} from "react";
import axios from "axios";

const BedSearch= (props) => {
    const [search, setSearch] = useState("");
    const [roomData,setRoomData]=useState([])

    const handaleSubmit = (e) => {
        e.preventDefault();
        props.setSearch(search)
    }

    return(
        <>
            <div className="dashbrd-40-colm" style={{display:props.viewBed}}>
                <form onSubmit={handaleSubmit}>

                <div>
                    <label>Search by Room No. </label>
                        <select onChange={(e)=>setSearch(e.target.value)}>
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
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                    {/* <input type="submit" value="Search" /> */}
                </form>
            </div>
        </>
    )
}
export default BedSearch;