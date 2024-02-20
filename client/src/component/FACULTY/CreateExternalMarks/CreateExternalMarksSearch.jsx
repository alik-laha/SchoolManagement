import {useEffect, useState} from "react";
import axios from "axios";

const CreateMarks=(props)=>{
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
        axios.post(`/api/v1/faculty/marksentry`,{Class,year,subject:updatedSubject,examName:updatedExamName,section},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            props.setExternalMarks(res.data.data,updatedExamName,updatedSubject,target)
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
        axios.post(`/api/v1/faculty/getallsubject`,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
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
                    <label>Current Class</label>
                    <input type="number" placeholder="Class" value={Class}
                           onChange={(e) => setClass(e.target.value)}/>
                </div>
                <div>
                    <label>Section</label>
                    <input type="text" placeholder="Section" value={section} onChange={(e) => setSection(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Current Academic Year</label>
                    <input type="text" placeholder="Current Year" value={year}
                           onChange={(e) => setYear(e.target.value)}/>
                </div>
                <div>
                    <select onChange={setExamnameFunction2} value={updatedExamName}>
                        <option>Exam Name</option>
                        {allExam.map((data, index) => (
                            <option value={data.internal_exam_name} key={index}>
                                {data.internal_exam_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <select onChange={(e) => setUpdatedSubject(e.target.value)} value={updatedSubject}>
                        <option>Subject</option>
                        {allSubject.map((data, index) => (
                            <option value={data.subject} key={index}>
                                {data.subject}
                            </option>
                        ))}
                    </select>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default CreateMarks