import {useEffect, useState} from "react";
import axios from "axios";
import CommonHeader from '../CommonHeader';
import Footer from '../Home/Footer';

const MarkStudentView=()=>{
    const [searchView,setSearchView]=useState("block")
    const [dataView,setDataView]=useState("none")
    const [Class,setClass]=useState(0)
    const[regNo,setRegNo]=useState("")
    const[year,setYear]=useState(null)
    const [examName,setExamName]=useState("")
    const[examData,setExamData]=useState([])
    const [data,setData]=useState([])
    const [maxMarks,setMaxMarks]=useState([])

    useEffect(() => {
        axios.get(`/api/v1/faculty/getallexam`).then((res)=>{
            setExamData(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, []);

    const gradecalculate = (data) => {
        if(data>=90){
            return 'AA'

        }
        else if(data >=80 && data<90)
        {
            return "A+"
        }
        else if(data >=60 && data<80)
        {
            return "A"
        }
        else if(data >=45 && data<60)
        {
            return "B+"
        }
        else if(data >=35 && data<45)
        {
            return "B"
        }
        else if(data >=25 && data<35)
        {
            return "C"
        }
        else if(data<25)
        {
            return "D"
        }

    }

    const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
        Class,
        examName,
        regNo,
        year
    }

    axios.post("/api/v1/faculty/getallmarks",data).then(
        (res)=>{
            if(res.data.data.length) {
                setData(res.data.data)
                setMaxMarks(res.data.result1)
                setSearchView("none")
                setDataView("block")
            }
            else {
                alert("Fill the From Correctly")
            }
        }
    )
}
let sum_v1 =0,sum_tot_v1=0
    return (
        <>
        <CommonHeader/>
        <div style={{display:searchView }} className="dashbrd-40-colm resultview">
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
                    <input type="text" placeholder="Registration No" value={regNo}
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

            <div className="student-marks-table" style={{display: dataView}}>
                <div><span>Name :</span> <span>{data.length ? data[0].student_Name : " "}</span></div>
                <div><span>Registration No :</span> <span>{data.length ? data[0].regNo : " "}</span></div>
                <div><span>Class :</span> <span>{data.length ? data[0].class : " "}</span></div>
                <div><span>Section :</span> <span>{data.length ? data[0].section : " "}</span></div>
                <div><span>Exam Name :</span> <span>{data.length ? data[0].exam_name : " "}</span></div>


                <table>
                    <thead>
                    <tr>

                        <th>Subject</th>
                        <th>Highest Mark</th>
                        <th>Marks</th>
                        <th>Percentage</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, index) => (
                        sum_v1 = sum_v1 + row.marks, sum_tot_v1 = sum_tot_v1 + row.int_exam_marks,
                            <tr key={index}>
                                <td>{row.subject}</td>
                                {
                                    maxMarks.map((max, idx) => (
                                        max.subject === row.subject ?
                                            <td style={{color: 'red'}} key={idx}>{max.max_mark}</td> : null
                                    ))
                                }
                                <td>{row.marks}</td>

                                <td>{((row.marks / row.int_exam_marks) * 100).toString().slice(0, 3).concat("%")}</td>
                                <td style={{width: '20%'}}>{gradecalculate(((row.marks / row.int_exam_marks) * 100))}</td>

                            </tr>
                    ))}
                    <tr>
                        <td style={{backgroundColor: '#f39c12', color: 'white', border: '1px solid black'}}><b>Total
                            Marks:</b></td>
                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_tot_v1}</b>
                        </td>
                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_v1}</b></td>

                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                            <b>{((sum_v1 / sum_tot_v1) * 100).toString().slice(0, 2).concat("%")}</b></td>
                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                            <b>{gradecalculate(((sum_v1 / sum_tot_v1) * 100))}</b></td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <Footer/>
        </>
    )
}

export default MarkStudentView
