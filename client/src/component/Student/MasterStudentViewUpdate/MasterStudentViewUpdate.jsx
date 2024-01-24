import {useEffect, useState} from "react";

const MasterStudentViewUpdate = (props) => {
    const [view,setView]=useState();
    const [masterStudent,setMasterStudent]=useState([]);
    useEffect(() => {
       if(props.view && props.View40 === "block") {
                setView("block");
            }
            else {
                setView("none");
            }
    }, [props.view,props.View40]);
    useEffect(() => {
       setMasterStudent(props.data);

    }, [props.data]);
    const clearData = () => {
        setMasterStudent([]);
    }
    return(
        <div style={{display: view}}>
            <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearData}> Clear</button>
            <table className="table-60" >
                <thead>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Applied Class</th>
                    <th>Year of Admission</th>
                    <th>Registration No</th>
                    <th>Admisson Date</th>
                    <th>action</th>

                </tr>
                </thead>
                <tbody>
                {
                    masterStudent.map((item,index)=> {
                        return(
                            <tr key={index}>
                                <td>{item.serial_no}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.applied_class}</td>
                                <td>{item.admisson_year}</td>
                                <td>{item.registration_no}</td>
                                <td>{item.admisson_date.slice(0,10)}</td>
                                <td><button>Edit</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            {masterStudent.length === 0 ? <h1>No Data Found</h1> : null}
        </div>
    )
}
export default MasterStudentViewUpdate;