import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";


const AcademicEntryView= (props) => {
    const [view,setView]=useState("none")
    const [academicAll,setAcademicAll]=useState([])


    const clearTable = () => {
        setAcademicAll([]);
      };
    

    useEffect(()=>{

        axios.post("http://localhost:7000/api/v1/student/getallstudent",props.SearchebyData)
          .then((res)=>{
            setAcademicAll(res.data.result)
          })
            .catch((error)=>{
                console.log(error)
            } )
      },[props.SearchebyData])


      useEffect(()=> {
        console.log(props.academicallview,props.view)
        if (props.academicallview === "block" && props.view === "block") {
            setView("block")
        }
        else {
            setView("none")
        }
    },[props.academicallview,props.view])


    return(
        <>
        
            <div style={{display:view}}>
            <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                <ReactHTMLTableToExcel
                    id="hostel"
                    className="dashboard-btn btn-warning excel-btn"
                    table="academic-entry-view"
                    filename="hostel-excel-report"
                    sheet="tablexls"
                    buttonText="Excel Import"
                />
                <table className="table-60" id="academic-entry-view">
                    <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Registration No</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Roll No</th>
                        <th>Year of Admission</th>
                        <th>Hostel Entry</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        academicAll.map((data)=> {
                            return(
                                <tr key={data.student_id}>
                                    <td>{data.student_id}</td>
                                    <td>{data.student_Name}</td>
                                    <td>{data.registration_no}</td>
                                    <td>{data.class}</td>
                                    <td>{data.section}</td>
                                    <td>{data.roll_no}</td>
                                    <td>{data.admission_year}</td>
                                    <td>{data.hostelentry === 1 ? 'Yes' : 'No'}</td>


                                    
                                   
                                </tr>
                            )

                        })
                    }
                    </tbody>
                </table>

            </div>
            {academicAll.length===0 ? <div className="no-data">No Data Exists</div> : null}
            {/*{props.data.length===0 ? <div className="no-data">No Data Found</div> : null}*/}
        </>
    )
}
export default AcademicEntryView;
