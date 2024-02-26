import {useState} from "react";
import axios from "axios";


const CreateExternalExam=(props)=>{
    const [name,setName]=useState("")
    const [totalMarks,settotalMarks]=useState(0)
    const [examType,setExamtype]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(totalMarks<=0){
            alert('Total Marks cannot be Less than or Equal to 0')
            return
        }
        const data={
            name,
            totalMarks,
            examType
        }
        axios.post("/api/v1/faculty/createexam",data,{headers:{"Authorization":localStorage.getItem("token")}}).then(()=>{
            alert("New Exam Type Category has been Created")
            setName("")
            settotalMarks(0)
            handleView()
        }).catch((err)=>{
            console.log(err)
            if(err.response.data.err.errno===1062){
                alert("Exam Name "+ name+" Already Exists")
            }
        })
    }
    
    const handleView=()=>{
        axios.get("/api/v1/faculty/getallexternalexam",{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                console.log(res.data.data)
                props.setExternalExam(res.data.data)
                props.setExternalView("block")
            })
            .catch((err)=>{
                console.log(err)
            })
        axios.get("/api/v1/faculty/getallinternalexam",{headers:{"Authorization":localStorage.getItem("token")}})
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
            
            <form onSubmit={handleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
            <p style={{fontSize:'17px'}}>Create Examination </p>
            <dl class="dl-horizontal">
                    <dt><label>Exam Name</label></dt>
                    <dd> <input type="text" placeholder="Exam Name" value={name}
                           onChange={(e) => setName(e.target.value)} required/> </dd>
                    <dt><label>Total Exam Marks</label></dt>
                    <dd> <input type="number" placeholder="Total Marks" value={totalMarks}
                           onChange={(e) => settotalMarks(e.target.value)} required/> </dd>
                           <dt><label>Examination Type</label></dt>
                    <dd> <select onChange={(e) => setExamtype(e.target.value)} required value={examType}>
                        <option value="">Examination Type</option>
                        <option value="External">
                            External Examination
                        </option>
                        <option value="Internal">
                            Internal Examination
                        </option>
                    </select> </dd>
                
             </dl>   
                
            
                <span><button className="dashboard-btn dashboard-btn-scss"
                              type="submit">Submit</button></span>
            </form>
            <div>
                <button style={{backgroundColor: 'lightseagreen',marginTop:'20px'}} className="dashboard-btn dashboard-btn-scss"
                        onClick={handleView}>
                    View / Delete Exam
                </button>
            </div>
        </div>
    )
}
export default CreateExternalExam
