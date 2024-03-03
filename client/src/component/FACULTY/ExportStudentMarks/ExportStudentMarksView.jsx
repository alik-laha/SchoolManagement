import {useEffect, useState} from "react";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";



const ExportStudentMarksView= (props) => {

    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [ExamData,setExamData]=useState([])
    const [result,setResult]=useState("none")
    const [tableView,setTableView]=useState("contents")
    const [ExamName,setExamName]=useState("")
    const [resultData,setResultData]=useState([])

    useEffect(() => {
        if(view==="block"){
            FetchExamData()
        }
    }, [view]);
    const FetchExamData=()=>{
        axios.get(`/api/v1/faculty/getallexam`,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            console.log(res.data.data)
            setExamData(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })

    }
    useEffect(()=>{
        setData(props.data)
        console.log(props)

    },[props.data])


    // props.data.length>0
    useEffect(() => {
        if( props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

    // const clearTable = () => {
    //     if(hideView==='none')
    //     setData([]);
    //   };
    const handleView=(data)=>{
        console.log(data)
        if(ExamName===""){
            alert("Please Select Exam")
            return
        }
        else {
            const DATA = {
                Class: data.class,
                examName: ExamName,
                year: data.current_academic_year,
                regNo: data.registration_no
            }
            axios.post(`/api/v1/faculty/getallmarks`, DATA)
                .then((res) => {
                    setResultData(res.data.data)
                    console.log(res)
                    setTableView("none")
                    setResult("block")
                }).catch((err) => {
                console.log(err)
            })
        }

    }
    let sum_v1=0;
    let sum_tot_v1=0;


    const HandleClick=()=>{
        setTableView("contents")
        setResult("none")
    }

      return(
        <div style={{display: view}}>
            <div style={{display:tableView}}>
            <table className="table-60" >
                <thead>
                <tr>
                    <th>
                        Sl.no
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Class
                    </th>
                    <th>
                        Section
                    </th>
                    <th>
                        RegNo
                    </th>
                    <th>
                        Examination Type
                    </th>
                    <th>
                        Year
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((data,index)=>(
                        <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {data.student_Name}
                            </td>
                            <td>
                                {data.class}
                            </td>
                            <td>
                                {data.section}
                            </td>
                            <td>
                                {data.registration_no}
                            </td>
                            <td>
                                <select onChange={(e)=>setExamName(e.target.value)} value={ExamName} required>
                                    <option value="">Select Exam</option>
                                {
                                   ExamData.map((exam,index)=>(
                                        <option key={index} value={exam.internal_exam_name}>{exam.internal_exam_name}</option>
                                      ))
                                }
                                </select>
                            </td>
                            <td>
                                {data.current_academic_year}
                            </td>
                            <td>
                                <button style={{background: '#3c8dbc', borderColor: '#3c8dbc'}}
                                        onClick={() => handleView(data)}
                                        className="dashboard-btn btn-warning fix-width">View
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
            <div style={{display: result}}>
                <button style={{float: 'right'}} className="dashboard-btn dashboard-btn-scss excel-btn"
                        onClick={HandleClick}>Cancel
                </button>
                <table className="table-60" id="table_one">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Student Name</th>
                        <th>Registration No.</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Roll No.</th>
                        <th>Exam Name</th>
                        <th>Subject</th>
                        <th>Obtained Marks</th>
                        <th>Full Marks</th>
                        <th>Percentage</th>


                    </tr>
                    </thead>
                    <tbody>
                    {resultData.map((item, idx) => (
                        sum_v1 = sum_v1 + item.marks, sum_tot_v1 = sum_tot_v1 + item.int_exam_marks,
                            <tr key={item.id}>
                                <td>{idx + 1}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.regNo}</td>
                                <td>{item.class}</td>
                                <td>{item.section}</td>
                                <td>{item.roll_no}</td>
                                <td>{item.exam_name}</td>
                                <td>{item.subject}</td>
                                <td>{item.marks}</td>


                                <td>{item.int_exam_marks}</td>
                                <td>{((item.marks / item.int_exam_marks) * 100).toString().slice(0, 3).concat("%")}</td>

                            </tr>

                    ))}
                    <tr>
                        <td style={{border: 'none'}}></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{backgroundColor: '#f39c12', color: 'white', border: '1px solid black'}}><b>Total
                            Marks:</b></td>
                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_v1}</b></td>

                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_tot_v1}</b></td>
                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                            <b>{((sum_v1 / sum_tot_v1) * 100).toString().slice(0, 2).concat("%")}</b></td>
                    </tr>
                    </tbody>


                </table>
            </div>

        </div>


      )

}
export default ExportStudentMarksView;