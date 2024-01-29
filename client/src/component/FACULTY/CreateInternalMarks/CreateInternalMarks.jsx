import {useEffect, useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [view,setView]=useState("none")
const [data,setData]=useState([])
const [allView,setAllView]=useState("contents")
const [hideView,setHideView]=useState("none")
const [allSubject,setAllSubject]=useState([])
const [allExam,setAllExam]=useState([])

const [Class,setClass]=useState(0)
const [regNo,setRegNo]=useState("")
const [subject,setSubject]=useState("")
const [examName,setExamName]=useState("")
const [marks,setMarks]=useState(0)
const [name,setName]=useState("")
const [rollNo,setRollNo]=useState(0)

    useEffect(() => {
        if(props.data.length>0 && props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

const FetchExam=()=>{
   axios.post(`http://localhost:7000/api/v1/faculty/getallinternalexam`).then((res)=>{
       setAllExam(res.data.data)
   }).catch((err)=>{
       console.log(err)
   })
}

    const FetchSubject=()=>{
        axios.post(`http://localhost:7000/api/v1/faculty/getallsubject`).then((res)=>{
          setAllSubject(res.data.data)

        })
    }

    useEffect(() => {
        if(props.view40==="block"){
            FetchExam()
            FetchSubject()
        }
    }, [props.view40]);

    useEffect(()=>{
        setData(props.data)

    },[props.data])

    const handleClick=(data)=>{
        setClass(data.class)
        setRegNo(data.registration_no)
        setAllView("none")
        setHideView("contents")
        setName(data.student_Name)
        setRollNo(data.roll_no)
    }
    const handleCancel=()=>{
        setAllView("contents")
        setHideView("none")
        setClass(0)
        setRegNo("")
        setSubject("")
        setExamName("")
        setMarks(0)
        setName("")
        setRollNo(0)
    }

    const HandleSave=()=>{
        if(marks>totalMarks){
            alert("Marks should be less than total marks")
            setMarks(0)
            return
        }
        else {
            axios.post("http://localhost:7000/api/v1/faculty/createmarks",{Class,regNo,subject,examName,marks}).then((res)=>{
                alert(res.data.message)
                setMarks(0)
                setSubject("")
            })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
    let totalMarks=0
    return(
        <div style={{display: view}}>
            <table className="table-60">
                <thead style={{display: allView}}>
                <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Registration No</th>
                    <th>Admisson Year</th>

                    <th>Actions</th>
                </tr>
                </thead>

                <tbody style={{display: allView}}>
                {
                    data.map((data, idx) => {
                        return (

                            <tr key={idx}>
                                <td>{data.student_id}</td>
                                <td>{data.student_Name}</td>
                                <td>{data.class}</td>
                                <td>{data.registration_no}</td>
                                <td>{data.admission_year}</td>

                                <td>
                                    <button className='dashboard-btn btn-warning'
                                            onClick={() => handleClick(data)}>Marks Entry
                                    </button>
                                </td>

                            </tr>

                        )

                    })
                }


                </tbody>
                <thead style={{display:hideView}}>
                <button onClick={handleCancel}>cancel</button>
                <tr>
                    <th>Name</th>
                    <th>Rgistration No</th>
                    <th>Class</th>
                    <th>Roll Number</th>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody style={{display:hideView}}>
                <tr>
                    <td>{name}</td>
                    <td>{regNo}</td>
                    <td>{Class}</td>
                    <td>{rollNo}</td>
                    <td>
                        <div>
                            <select onChange={(e) => setExamName(e.target.value)} value={examName}>
                                <option>Exam Name</option>
                                {allExam.map((data, index) => (
                                    totalMarks=data.int_exam_marks,
                                    <option value={data.internal_exam_name} key={index}>
                                        {data.internal_exam_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </td>
                    <td>
                        <div>
                            <select onChange={(e) => setSubject(e.target.value)} value={subject}>
                                <option>Subject</option>
                                {allSubject.map((data, index) => (
                                    <option value={data.subject} key={index}>
                                        {data.subject}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </td>
                    <td><input type="text" value={marks} onChange={(e) => setMarks(e.target.value)}/></td>
                    <td>
                        <button className="dashboard-btn dashboard-btn-scss" onClick={HandleSave}>Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CreateInternalMarks