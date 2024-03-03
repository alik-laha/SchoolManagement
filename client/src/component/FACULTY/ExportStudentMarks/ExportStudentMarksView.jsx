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
        const DATA={
            Class:data.class,
            examName:ExamName,
            year:data.current_academic_year,
            regNo:data.registration_no
        }
        axios.post(`/api/v1/faculty/getallmarks`,DATA)
            .then((res)=>{
                console.log(res)
                setTableView("none")
                setResult("block")
            }).catch((err)=>{
            console.log(err)
        })

    }
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
                                <select onChange={(e)=>ExamName(e.target.value)} value={ExamName}>
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
            <div style={{display:result}}>
                <button style={{float: 'right'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={HandleClick}>Cancel</button>
                Alik laha
            </div>

        </div>


      )

}
export default ExportStudentMarksView;