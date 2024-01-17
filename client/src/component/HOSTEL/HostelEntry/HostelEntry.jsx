import {useEffect, useState} from "react";
import axios from "axios";
const HostelEntry = () => {
    const [allView, setAllView] = useState("contents");
    const [entryView, setEntryView] = useState("none");
    const [id, setId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [bedNo, setBedNo] = useState("");
    const [entryDate, setEntryDate] = useState(new Date().toISOString().slice(0, 10));
    const [studentData, setStudentData] = useState([])
    const [roomData, setRoomData] = useState([])

    useEffect(() => {
       axios.get("http://localhost:7000/api/v1/student/getallstudent")
              .then((res) => {
                  setStudentData(res.data.result)
              })
                .catch((err) => {
                    console.log(err)
                })
    }, []);
    const handaleClick = (data) => {
        if(data.status===1){
            //fetch the room no and bed no from master hostel table
        }
        setAllView("none");
        setEntryView("contents");
        setId(data.student_id);
        setStudentName(data.student_Name);
        setRegNo(data.registration_no);
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
    }, []);
    return(
        <>
                <div>
                    <table style={{display:allView}}>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Student Name</th>
                            <th>Regidtration No</th>
                            <th>Entry status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        {
                            studentData.map((data)=> {
                                return(
                                <tbody key={data.student_id}>
                                <tr>
                                    <td>{data.student_id}</td>
                                    <td>{data.student_Name}</td>
                                    <td>{data.registration_no}</td>
                                    <td></td>
                                    <td>
                                        <button onClick={()=>handaleClick(data)}>Entry</button>
                                    </td>

                                </tr>
                                </tbody>
                                )

                            })
                        }

                    </table>
                    <table style={{display:entryView}}>
                        <thead>
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
                        <tbody>
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
                                <button>Update</button>
                                <button>Delete</button>
                                <button onClick={handaleCancel}>Cancel</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        </>
    )
}

export default HostelEntry;