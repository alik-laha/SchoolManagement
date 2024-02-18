import {useEffect, useState} from "react";

const StudentFeePaymentEntry = (props) => {
    const [view,setView]=useState("none")
    const [data,setData]=useState([])

    useEffect(() => {
        if(props.view==="block" && props.data.length>0){
            setView("block")
        }
        else{
         setView("none")
        }
    }, [props.view,props.data]);

    useEffect(() => {
        console.log(props.data)
        setData(props.data)
    },[props.data])

    const handleClick=()=>{

    }

    return(
        <div style={{display:view}}>
            <table className="table-60">
                <thead>
                <tr>
                    <th>Class</th>
                    <th>Name</th>
                    <th>Reg No</th>
                    <th>Year</th>
                   <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.class}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.registration_no}</td>
                                <td>{item.current_academic_year}</td>
                                <td><button onClick={handleClick} className="dashboard-btn dashboard-btn-scss">Select</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default StudentFeePaymentEntry;