import {useEffect, useState} from "react";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";



const ExportStudentMarksView= (props) => {

    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [ExamData,setExamData]=useState([])

    useEffect(() => {
        if(props.view==="block"){
            FetchExamData()
        }
    }, [view]);
    const FetchExamData=()=>{
        axios.get(`/api/v1/faculty/getallexam`,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            console.log(res)
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
    }


      return(
        <div style={{display: view}}>

            <table className="table-60">
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


      )

}
export default ExportStudentMarksView;