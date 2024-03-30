import {useEffect, useState} from "react";
import axios from "axios";

const MarkStudentView=()=>{
    const [searchView,setSearchView]=useState("block")
    const [dataView,setDataView]=useState("none")
    const [Class,setClass]=useState(0)
    const[regNo,setRegNo]=useState("")
    const[year,setYear]=useState(null)
    const [examName,setExamName]=useState("")
    const[examData,setExamData]=useState([])

    useEffect(() => {
        axios.get(`/api/v1/faculty/getallexam`).then((res)=>{
            console.log(res.data.data)
            setExamData(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, []);
const handleSubmit=()=>{

}
    return (
        <>
        <div style={{display:searchView }} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Current Academic Year
                    </label>
                    <input type="number" placeholder="Academic Year" value={year}
                           onChange={(e) => setYear(e.target.value)} required={true}/>
                </div>
                <div>
                    <label> Class</label>


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
                    <label>
                        Registration No
                    </label>
                    <input type="number" placeholder="Registration No" value={regNo}
                           onChange={(e) => setRegNo(e.target.value)} required={true}/>
                </div>
                <div>
                <select onChange={(e) => setExamName(e.target.value)} value={examName} required>
                    <option value="">Select Exam</option>
                    {
                        examData.map((exam, index) => (
                            <option key={index}
                                    value={exam.internal_exam_name}>{exam.internal_exam_name}</option>
                        ))
                    }
                </select>
                </div>

                <div style={{width: '100%'}}>

                    <p style={{fontSize: '15px'}}>(All fields are Mandatory)</p>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
            <div style={{display: dataView}}>
                Search Data
            </div>
        </>
    )
}

export default MarkStudentView