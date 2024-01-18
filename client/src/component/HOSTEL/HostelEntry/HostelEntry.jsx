import {useEffect, useState} from "react";
import axios from "axios";
const HostelEntry = (props) => {
    const [allView, setAllView] = useState("contents");
    const [entryView, setEntryView] = useState("none");
    const [id, setId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [bedNo, setBedNo] = useState("");
    const [entryDate, setEntryDate] = useState(new Date().toISOString().slice(0, 10));
    const [roomData, setRoomData] = useState([])
    const [view, setView] = useState("none");

    useEffect(() => {
      if (props.data.length > 0 && props.view==="block") {
          setView("block")
      }
      else{
          setView("none")
      }
    }, [props.data,props.view]);

    const handaleUpdate = () => {

    }
    const handaleClick = (data) => {
        setAllView("none");
        setEntryView("contents");
        setId(data.student_id);
        setStudentName(data.student_Name);
        setRegNo(data.registration_no);
        if(data.status===1){
            console.log(regNo)
        }

    }
    const handaleCancel = () => {
        setAllView("contents");
        setEntryView("none");
        setId("");
        setStudentName("");
        setRegNo("");
        setRoomNo("");
        setBedNo("");
        setEntryDate(new Date().toISOString().slice(0, 10));
    }
    useEffect(() => {
        axios.get("http://localhost:7000/api/v1/hostel/getroomno")
            .then((res) => {
                setRoomData(res.data.result)
            })
    }, [view]);
    return(
       
                <div style={{display:view}} >
                    <table className="table-60" >
                        <thead style={{display:allView}}>
                        <tr>
                            <th>Id</th>
                            <th>Entry status</th>
                            <th>Student Name</th>
                            <th>Regidtration No</th>
                           
                            <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody style={{display:allView}}>
                        {
                            props.data.map((data,idx)=> {
                                return(
                                
                                <tr key={idx}>
                                    <td>{data.student_id}</td>
                                    <td><input type='checkbox' checked={data.HostelEntry === 1 ? true : false}></input></td>
                                    <td>{data.student_Name}</td>
                                    <td>{data.registration_no}</td>
                                    
                                    <td>
                                        <button className='dashboard-btn btn-warning' onClick={()=>handaleClick(data)}>Hostel Entry</button>
                                    </td>

                                </tr>
                               
                                )

                            })
                        }


                        </tbody>
                        
                   
                        <thead style={{display:entryView}} id='hidden-table-60'>
                        <tr>
                            <th>Id</th>
                            <th>Student Name</th>
                            <th>Regidtration No</th>
                            <th>Room No</th>
                            <th>Bed No</th>
                            <th>Entry Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody style={{display:entryView}}>
                        <tr>
                            <td>{id}</td>
                            <td>{studentName}</td>
                            <td>{regNo}</td>
                            <td>
                                <div>
                                    <select onChange={(e) => setRoomNo(e.target.value)}>
                                        <option value={roomNo}>All</option>
                                        {roomData.map((data, index) => (
                                            <option value={data.room_no} key={index}>
                                                {data.room_no}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </td>
                            <td><input type='text' placeholder="Bed No" value={bedNo}
                                       onChange={(e) => setBedNo(e.target.value)}/></td>
                            <td><input type='date' placeholder="Entry Date" value={entryDate}
                                       onChange={(e) => setEntryDate(e.target.value)}/></td>
                            <td>
                                <button className="dashboard-btn btn-warning" onClick={handaleUpdate}>Update</button>
                                <button className="dashboard-btn btn-warning">Delete</button>
                                <button  className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
       
    )
}

export default HostelEntry;