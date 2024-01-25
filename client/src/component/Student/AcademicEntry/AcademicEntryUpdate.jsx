import {useEffect, useState} from "react";
import axios from "axios";

const AcademicEntryUpdate = (props) => {
    const[rollNo,setRollNo]=useState(null);
    const [section,setSection]=useState("")
    const [academicAll,setAcademicAll]=useState([])
    const [view,setView]=useState("none")
    const [editedIndex, setEditedIndex] = useState(null);
    const [regNo,setRegNo]=useState("")

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

    const HandleEdit=(index,data)=>{
        setEditedIndex(index);
        setSection(data.section)
        setRollNo(data.roll_no)
        setRegNo(data.registration_no)

    }
    const HandaleCancel=()=>{
        setEditedIndex(null);
        setSection("")
        setRollNo(0)
        setRegNo("")
    }
    const HandleSubmit=(index)=>{
        if(index===editedIndex) {
            axios.post("http://localhost:7000/api/v1/student/academecentry", {section, rollNo,regNo})
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
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
                    <th>Action</th>
               </tr>
               </thead>
               <tbody>
               {
                   academicAll.map((data,index) => {
                       return (
                           <tr key={data.student_id}>
                               <td>{data.student_id}</td>
                               <td>{data.student_Name}</td>
                               <td>{data.registration_no}</td>
                               <td>{data.class}</td>
                               <td>{editedIndex!==index ? (
                                   data.section
                               ):(
                                   <input
                                       type="text"
                                       onChange={(e)=>setSection(e.target.value)}
                                       value={section}
                                   />
                               )
                               }</td>
                               <td>{editedIndex!==index ? (
                                   data.roll_no
                               ):(
                                   <input
                                   type="number"
                                   onChange={(e)=>setRollNo(e.target.value)}
                                   value={rollNo}
                                   />
                               )
                               }</td>
                               <td>{data.admission_year}</td>
                               <td>
                                   {editedIndex === index ? (
                                       <>
                                           <button onClick={HandaleCancel}>Cancel</button>
                                           <button onClick={()=>HandleSubmit(index)}>Submit</button>
                                       </>
                                   ) : (
                                       <button onClick={() => HandleEdit(index,data)}>Edit</button>
                                   )}
                               </td>

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