import {useEffect, useState} from "react";
import axios from "axios";

const ViewSubject = (props) => {
    const [view,setView] = useState("none")
       const [data,setData] = useState([])


    useEffect(() => {
        if(props.view==="block" && props.data.length >0 && props.view40==="block"){
            console.log(props.view,props.data,props.view40)
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view,props.data,props.view40])

    useEffect(() => {
        setData(props.data)
    },[props.data])

    const handleDelete = (id) => {
        axios.post("/api/v1/faculty/deletesubject",{id},{headers:{"Authorization":localStorage.getItem("token")}}).then((res) => {
            alert("Subject Deleted")
            setView("none")
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleCancel = () => {
        setData([])
        if(view=='block'){
            setView('none')
        }

    }
    return (
        <div className="dashbrd-40-colm" style={{display: view}}>
           <button style={{float:'right'}}className="dashboard-btn dashboard-btn-scss excel-btn" onClick={handleCancel}>Clear Result</button>
            <table className="table-60">
                <thead>
                <tr>
                    <th>Sl. No.</th>
                    <th>Subject Name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,idx) => {
                        return (
                            <tr key={item.id}>
                                <td>{idx+1}</td>
                                <td>{item.subject}</td>
                                <td>
                                    <button className="dashboard-btn dashboard-btn-scss btn-warning"
                                            onClick={() => handleDelete(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            {data.length===0 ? <div className="no-data" style={{textAlign:'center',width:'100%'}}>No Data Exists</div> : null}
        </div>
    )
}
export default ViewSubject;