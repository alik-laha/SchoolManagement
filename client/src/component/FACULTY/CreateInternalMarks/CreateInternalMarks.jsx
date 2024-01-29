import {useEffect, useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [view,setView]=useState("none")
const [data,setData]=useState([])
const [allView,setAllView]=useState("contents")
    useEffect(() => {
        if(props.data.length>0 && props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

    useEffect(()=>{
        setData(props.data)
        console.log(props.data)
    },[props.data])

    const handleClick=(data)=>{

    }

    return(
        <div style={{display: view}}>
            <table className="table-60">
                <thead style={{display: allView}}>
                <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Registration No</th>
                    <th>Admisson Year</th>

                    <th>Actions</th>
                </tr>
                </thead>

                <tbody style={{display: allView}}>
                {
                    data.map((data, idx) => {
                        return (

                            <tr key={idx}>
                                <td>{data.student_id}</td>
                                <td>{data.student_Name}</td>
                                <td>{data.class}</td>
                                <td>{data.registration_no}</td>
                                <td>{data.admission_year}</td>

                                <td>
                                    <button className='dashboard-btn btn-warning'
                                            onClick={() => handleClick(data)}>Marks Entry
                                    </button>
                                </td>
                                <></>

                            </tr>

                        )

                    })
                }


                </tbody>
            </table>
        </div>
)
}
export default CreateInternalMarks