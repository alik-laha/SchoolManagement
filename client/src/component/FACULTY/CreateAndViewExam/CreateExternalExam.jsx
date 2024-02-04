import {useState} from "react";
import axios from "axios";


const CreateExternalExam=(props)=>{
    const [name,setName]=useState("")
    const [totalMarks,settotalMarks]=useState(0)
    const [examType,setExamtype]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            name,
            totalMarks,
            examType
        }
        axios.post("http://localhost:7000/api/v1/faculty/createexam",data).then(()=>{
            alert("External Exam Added")
            setName("")
            settotalMarks(0)
            handleView()
        }).catch((err)=>{
            console.log(err)
            if(err.response.data.err.errno===1062){
                alert("Subject Name "+ name+" Already Exists")
            }
        })
    }
    const handleView=()=>{
        axios.post("http://localhost:7000/api/v1/faculty/getallexternalexam")
            .then((res)=>{
                console.log(res.data.data)
                props.setExternalExam(res.data.data)
                props.setExternalView("block")
            })
            .catch((err)=>{
                console.log(err)
            })
        axios.post("http://localhost:7000/api/v1/faculty/getallinternalexam")
            .then((res)=>{
                console.log(res.data.data)
                props.setInternalExam(res.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return (
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Exam Name</label>
                    <input type="text" placeholder="Enter Subject Name" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label>Total number</label>
                    <input type="number" placeholder="Enter Subject Name" value={totalMarks}
                           onChange={(e) => settotalMarks(e.target.value)} required/>
                </div>
                <div>
                    <label>Examination Type</label>
                    <select onChange={(e) => setExamtype(e.target.value)} required value={examType}>
                        <option value="">Examination Type</option>
                        <option value="External">
                            External Examination
                        </option>
                        <option value="Internal">
                            Internal Examination
                        </option>
                    </select>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss"
                              type="submit">Submit</button></span>
            </form>
            <div>
                <button style={{backgroundColor: 'lightseagreen'}} className="dashboard-btn dashboard-btn-scss"
                        onClick={handleView}>
                    View / Delete Subject
                </button>
            </div>
        </div>
    )
}
export default CreateExternalExam
