import {useEffect, useState} from "react";
import axios from "axios";

const ExportStudentMarksSearch = (props) => {
    const [Class, setClass] = useState(null);
    const [examName, setExamName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [examData,setExamData]=useState([])

    const FetchExamData=()=>{
        axios.get(`http://localhost:7000/api/v1/faculty/getallexam`).then((res)=>{
            console.log(res.data.data[3].internal_exam_name)
            setExamData(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:7000/api/v1/faculty/getallmarks`, {Class, regNo,examName}).then((res) => {
            // props.setStudentMarks(res.data.result)
            // props.setStudentMarksView("block")
            console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        if(props.view==="block"){
            FetchExamData()
        }
    }, [props.view]);
    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Rgestration No</label>
                    <input type="text" placeholder="Enter Rgestration Number" value={regNo}
                           onChange={(e) => setRegNo(e.target.value)}/>
                </div>
                <div>
                    <label>Class</label>
                    <input type="number" placeholder="Enter Class" value={Class}
                           onChange={(e) => setClass(e.target.value)} required={true}/>
                </div>
                <div>
                    <select onChange={(e)=>setExamName(e.target.value)} value={examName}>
                        <option>Exam Name</option>
                        {examData.map((data, index) => (
                            <option value={data.internal_exam_name} key={index}>
                                {data.internal_exam_name}
                            </option>
                        ))}
                    </select>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default ExportStudentMarksSearch;