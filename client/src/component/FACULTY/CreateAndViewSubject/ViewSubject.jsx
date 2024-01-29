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
        axios.post("http://localhost:7000/api/v1/faculty/deletesubject",{id}).then((res) => {
            alert("Subject Deleted")
            setView("none")
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleCancel = () => {
        setData([])
    }
    return (
        <div className="dashbrd-40-colm" style={{display: view}}>
            <button className="dashboard-btn dashboard-btn-scss"
                    onClick={handleCancel}>Clear result
            </button>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Subject Name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.subject}</td>
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
export default ViewSubject;