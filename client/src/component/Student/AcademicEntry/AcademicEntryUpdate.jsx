import {useEffect, useState} from "react";

const AcademicEntryUpdate = (props) => {
    const[rollNo,setRollNo]=useState(0);
    const [section,setSection]=useState("")
    const [academicAll,setAcademicAll]=useState([])
    const [view,setView]=useState("none")

    useEffect(()=>{
        console.log(props)
        setAcademicAll(props.SearchebyData)
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
       <div style={{display:view}}>
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
                   academicAll.map((data) => {
                       return (
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
           {academicAll.length === 0 ? <div className="no-data">No Data Exists</div> : null}
</div>
)
}

export default AcademicEntryUpdate;