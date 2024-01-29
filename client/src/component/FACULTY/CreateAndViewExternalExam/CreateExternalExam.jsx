import {useState} from "react";
import axios from "axios";


const CreateExternalExam=(props)=>{
    const [name,setName]=useState("")
    const [totalMarks,settotalMarks]=useState(0)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            name,
            totalMarks
        }
        axios.post("http://localhost:7000/api/v1/faculty/createexternalexam",data).then(()=>{
            alert("External Exam Added")
            setName("")
            settotalMarks(0)
        }).catch((err)=>{
            console.log(err)
            if(err.response.data.err.errno===1062){
                alert("Subject Name "+ name+" Already Exists")
            }
        })
    }
    const handleView=()=>{

    }
    return (
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Exam Name</label>
                    <input type="text" placeholder="Enter Subject Name" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Total number</label>
                    <input type="number" placeholder="Enter Subject Name" value={totalMarks}
                           onChange={(e) => settotalMarks(e.target.value)}/>
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
