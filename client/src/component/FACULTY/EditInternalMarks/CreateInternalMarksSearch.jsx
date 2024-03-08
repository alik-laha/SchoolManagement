import {useEffect, useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [Class,setClass]=useState("")
const [year,setYear]=useState("")
const [updatedExamName,setUpdatedExamName]=useState("")
const [updatedSubject,setUpdatedSubject]=useState("")
const [allExam,setAllExam]=useState([])
const [allSubject,setAllSubject]=useState([])
const [target,SetTarget]=useState(0)
const [section,setSection]=useState("")


const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`/api/v1/faculty/getallmarksforedit`,{Class,academicYear:year,subject:updatedSubject,examName:updatedExamName,section},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
        props.setInternalMarks(res.data.data,updatedExamName,updatedSubject,target)
        console.log(res)
        props.setInternalMarksView("block")
    }).catch((err)=>{
        console.log(err)
    })
}

    useEffect(() => {
        if(props.view==="block"){
            FetchExam()
            FetchSubject()
        }
    }, [props.view]);

    const FetchExam=()=>{
        axios.get(`/api/v1/faculty/getallexam`,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            setAllExam(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const FetchSubject=()=>{
        axios.get(`/api/v1/faculty/getallsubject`,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            setAllSubject(res.data.data)

        })
    }
    const setExamnameFunction2=(e)=>{
        const idx= e.target.value;
        allExam.find((data,index)=>{
            if(data.internal_exam_name===idx){
                SetTarget(data.int_exam_marks)
                console.log(data.int_exam_marks)
            }
        })
        setUpdatedExamName(e.target.value)

    }

    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Current Academic Year</label>
                    <input type="text" placeholder="Current Year" value={year}
                           onChange={(e) => setYear(e.target.value)} required/>
                </div>
                <div>
                    <label>Class</label>
                    <select onChange={(e) => setClass(parseInt(e.target.value))} value={Class} required>
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
                
                
                <div>
                <label>Exam Name</label>
                <select onChange={setExamnameFunction2} value={updatedExamName} required>
                    <option value="">Exam Name</option>
                    {allExam.map((data, index) => (
                        <option value={data.internal_exam_name} key={index}>
                            {data.internal_exam_name}
                        </option>
                    ))}
                </select>
                </div>
                <div>
                <label>Subject Name</label>
                    <select onChange={(e) => setUpdatedSubject(e.target.value)} value={updatedSubject}>
                        <option value="">Subject</option>
                        {allSubject.map((data, index) => (
                            <option value={data.subject} key={index}>
                                {data.subject}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ width: '100%' }}>

                    <p style={{ fontSize: '15px' }}>(All fields except Subject Name are Mandatory)</p>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default CreateInternalMarks