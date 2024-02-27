import {useEffect, useState} from "react";
import axios from "axios";

const CreateMarks=(props)=>{
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [target,setTarget]=useState(0)
    const [subject,setSubject]=useState("")
    const [examName,setExamName]=useState("")
    const [marks,setMarks]=useState([])

    useEffect(() => {
        console.log(props)
        if(props.view40==="block" && props.data.length>0){
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view40,props.data]);

    useEffect(() => {
       setData(props.data)
         setSubject(props.subject)
            setExamName(props.exam)
            setTarget(props.total)
    }, [props.data,props.subject,props.examName,props.target]);

    const handaleChange=(e,index)=>{
        const newMarks=[...marks]
      newMarks[index]=e.target.value<=target ? parseInt(e.target.value):alert("Marks should be less than or equal to total marks")
        setMarks(newMarks)
    }


    const handleSubmit=async ()=>{
        if(!subject || !examName){
            alert("Please select subject and exam")
            return
        }
        data.map((data,index)=>{
            axios.post(`/api/v1/faculty/createmarks`,{regNo:data.registration_no,Class:data.class,subject,examName,marks:marks[index],Year:data.current_academic_year},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
                console.log("Done")
            }).catch((err)=>{
                console.log(err)
            })
        })
       await alert("Marks Entered Successfully")
    }

    return(
        <div style={{display:view}}>
            <table className="table-60">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Registration No</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Subject</th>
                    <th>Exam Name</th>
                    <th>Total Marks</th>
                    <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.registration_no}</td>
                            <td>{data.student_Name}</td>
                            <td>{data.class}</td>
                            <td>{data.section}</td>
                            <td>{subject}</td>
                            <td>{examName}</td>
                            <td>{target}</td>
                            <td>
                                <input type="number" placeholder="Marks" value={marks[index]} onChange={(e)=>handaleChange(e,index)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="dashboard-btn dashboard-btn-scss" onClick={handleSubmit}>Entry Marks</button>
        </div>
    )
}
export default CreateMarks;