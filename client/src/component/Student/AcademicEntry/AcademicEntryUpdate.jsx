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

    const clearTable = () => {
        setAcademicAll([]);
        setEditedIndex(null)
      };

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
                    alert("Student Details Updated Successfully")
                    console.log(res)
                    setEditedIndex(null)
                    setView('none')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    return(
       <div style={{display:view}}>
           <table className="table-60">
               <thead>
               <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
               <tr>
                   <th>Sl. No.</th>
                   <th>Student Name</th>
                   <th>Stream</th>
                   <th>Registration No</th>
                   <th>Current Year of Study</th>
                   
                   {/* <th>Year of Admission</th> */}
                   <th>Class</th>
                   <th>Section</th>
                   <th>Roll No</th>
                   
                    <th>Action</th>
               </tr>
               </thead>
               <tbody>
               {
                   academicAll.map((data,index) => {
                       return (
                           <tr key={index}>
                               <td>{index+1}</td>
                               <td>{data.student_Name}</td>
                               <td>{data.stream}</td>
                               <td>{data.registration_no}</td>
                               <td>{data.current_academic_year}</td>
                               
                               {/* <td>{data.admission_year}</td> */}
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
                               
                               <td>
                                   {editedIndex === index ? (
                                       <>
                                           <div style={{display:'flex'}}><button className="dashboard-btn dashboard-btn-scss" onClick={HandaleCancel}> Cancel </button>
                                           <button style={{marginLeft:'5px'}} className="dashboard-btn dashboard-btn-scss" onClick={()=>HandleSubmit(index)}> Submit </button></div>
                                       </>
                                   ) : (
                                       <button className="dashboard-btn btn-warning" onClick={() => HandleEdit(index,data)}>Edit</button>
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