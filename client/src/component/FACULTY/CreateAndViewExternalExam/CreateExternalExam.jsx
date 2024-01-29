import {useState} from "react";
import axios from "axios";


const CreateExternalExam=(props)=>{
    const [name,setName]=useState("")
    const [totalMarks,settotalMarks]=useState(0)
    const handleSubmit=(e)=>{

    }
    const handleView=()=>{

    }
    return (
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Subject Name</label>
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
