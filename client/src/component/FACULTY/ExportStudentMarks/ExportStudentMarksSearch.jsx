import {useEffect, useState} from "react";
import axios from "axios";

const ExportStudentMarksSearch = (props) => {
    const [Class, setClass] = useState(null);
    const [examName, setExamName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [examData,setExamData]=useState([])

    const FetchExamData=()=>{
        axios.get(`http://localhost:7000/api/v1/faculty/getallexam`).then((res)=>{
            setExamData(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })

    }

    
    // const setExamnameFunction2=(e)=>{
    //     const idx= e.target.value;
    //     allExam.find((data,index)=>{
    //         if(data.internal_exam_name===idx){
    //             settarget2(data.int_exam_marks)
    //             console.log(data.int_exam_marks)
    //         }
    //     })
    //     setUpdatedExamName(e.target.value)

    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Class && regNo && examName)
        {
            props.setSearchcombination('cl_reg_ex')
        }
        else if(Class && regNo && !examName)
        {
            props.setSearchcombination('cl_reg')
        }
        else if(Class && !regNo && examName)
        {
            props.setSearchcombination('cl_ex')
        }
        else if(Class && !regNo && !examName)
        {
            props.setSearchcombination('cl')
        }

        axios.post(`http://localhost:7000/api/v1/faculty/getallmarks`, {Class, regNo,examName}).then((res) => {
            props.setStudentMarks(res.data.data)
            props.setStudentMarksView("block")
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
                    <label>Registration No.</label>
                    <input type="text" placeholder="Reg No." value={regNo}
                           onChange={(e) => setRegNo(e.target.value)}/>
                </div>
                <div>
                    <label>Current Class* (Mandatory)</label>
                    <input type="number" placeholder="Class" value={Class}
                           onChange={(e) => setClass(e.target.value)} required={true}/>
                </div>
                <div>
                    <label>Exam Name </label>
                    <select onChange={(e)=>setExamName(e.target.value)} value={examName}>
                        <option value="">Exam Name</option>
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