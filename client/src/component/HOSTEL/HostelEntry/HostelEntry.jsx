import {useEffect, useState} from "react";
import axios from "axios";
const HostelEntry = () => {
    const [id, setId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [bedNo, setBedNo] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const [studentData, setStudentData] = useState([])

    useEffect(() => {
       axios.get("http://localhost:7000/api/v1/student/getallstudent")
              .then((res) => {
                  setStudentData(res.data.result)
              })
                .catch((err) => {
                    console.log(err)
                })
    }, []);
    return(
        <>
                <div>
                    <table>
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
                                        <button>Entry</button>
                                    </td>
                                    {console.log(data)}

                                </tr>
                                </tbody>
                                )

                            })
                        }

                    </table>
                </div>
        </>
    )
}

export default HostelEntry;