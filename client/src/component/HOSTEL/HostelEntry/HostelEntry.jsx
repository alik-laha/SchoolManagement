import {useEffect, useState} from "react";
import axios from "axios";
const HostelEntry = () => {
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
                {
                    studentData.map((student) => {
                        return(
                            <div key={student.student_id}>
                                {console.log(student)}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HostelEntry;