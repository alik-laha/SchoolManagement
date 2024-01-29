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
        axios.post("http://localhost:7000/api/v1/faculty/deleteexternalexam",{id})
            .then(()=>{
                alert("data has been deleted")
                setView("none")
            })
    }
    useEffect(() => {
        if(props.view==="block" && props.data.length >0 && props.view40==="block"&&props.data1.length>0){
            console.log(props.view,props.data,props.view40)
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view,props.data,props.view40,props.data1])

    useEffect(() => {
        setData(props.data)
        setData1(props.data1)
    },[props.data,props.data1])
    return (
        <div className="dashbrd-40-colm" style={{display: view}}>
            <button className="dashboard-btn dashboard-btn-scss"
                    onClick={handleCancel}>Clear result
            </button>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Exam Type</th>
                    <th>External Exam Name</th>
                    <th>Examination Marks</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>External</td>
                                <td>{item.external_exam_name}</td>
                                <td>{item.ext_exam_marks}</td>
                                <td>
                                    <button className="dashboard-btn dashboard-btn-scss"
                                            onClick={() => handleDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                {
                    data1.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>Internal</td>
                                <td>{item.internal_exam_name}</td>
                                <td>{item.int_exam_marks}</td>
                                <td>
                                    <button className="dashboard-btn dashboard-btn-scss"
                                            onClick={() => handleDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default ViewExternalExam