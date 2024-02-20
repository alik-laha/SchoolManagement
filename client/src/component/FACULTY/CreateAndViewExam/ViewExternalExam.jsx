import {useEffect, useState} from "react";
import axios from "axios";


const ViewExternalExam=(props)=>{

    const [view,setView] = useState("none")
    const [data,setData] = useState([])
    const [data1,setData1] = useState([])
    const handleCancel=()=>{
        setData([])
        setData1([])
    }
    const handleDelete=(id)=>{
        axios.post("/api/v1/faculty/deleteexternalexam",{id},{headers:{"Authorization":localStorage.getItem("token")}})
            .then(()=>{
                alert("External exam has been Deleted")
                setView("none")
            })
    }
    const handleDelete1=(id)=>{
        axios.post("/api/v1/faculty/deleteinternalexam",{id},{headers:{"Authorization":localStorage.getItem("token")}})
            .then(()=>{
                alert("Internal Exam has been Deleted")
                setView("none")
            })
    }
    useEffect(() => {
        if(props.view==="block" && props.view40==="block" && (props.data1.length>0 ||props.data.length >0)){
            console.log(props.view,props.data,props.view40,props.data1,"alik laha")
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view,props.data,props.view40,props.data1])

    let count_data=0

    useEffect(() => {
        setData(props.data)
        setData1(props.data1)
    },[props.data,props.data1])
    return (
        <div className="dashbrd-40-colm" style={{display: view}}>
           <button style={{float:'left'}}className="dashboard-btn dashboard-btn-scss excel-btn" onClick={handleCancel}>Clear Result</button>
            <table className="table-60">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Exam Type</th>
                    <th>Exam Name</th>
                    <th>Total Marks of Exam</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => {
                        count_data=count_data+1
                        return (
                            <tr key={item.id}>
                                <td>{count_data}</td>
                                <td>External</td>
                                <td>{item.external_exam_name}</td>
                                <td>{item.ext_exam_marks}</td>
                                <td>
                                    <button className="dashboard-btn dashboard-btn-scss btn-warning"
                                            onClick={() => handleDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                {
                    data1.map((item) => {
                        count_data=count_data+1
                        return (
                            <tr key={item.id}>
                                 <td>{count_data}</td>
                                <td>Internal</td>
                                <td>{item.internal_exam_name}</td>
                                <td>{item.int_exam_marks}</td>
                                <td>
                                    <button className="dashboard-btn dashboard-btn-scss btn-warning"
                                            onClick={() => handleDelete1(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            {data.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default ViewExternalExam