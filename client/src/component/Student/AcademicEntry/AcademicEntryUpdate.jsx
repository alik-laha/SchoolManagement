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
        setAcademicAll(props.SearchebyData)
    },[props.SearchebyData])

    function convertToRoman(num) {
        const lookup = ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
        let roman = ''
        let i
        
        for ( i in lookup ) {
         if(num==i){
            roman=lookup[i]
            break
         }
           
        }
        return roman;
      }

    useEffect(()=> {
        if (props.academicallview === "block" && props.view === "block" && props.SearchebyData.length > 0) {
            setView("block")
        }
        else {
            setView("none")
        }
    },[props.academicallview,props.view,props.SearchebyData])

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

    const fetchnewData=()=>{
        const data={
            Class:props.Class,
            regNo:props.regNo,
            year:props.year
        }
        axios.post("/api/v1/student/getallstudent",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                setAcademicAll(res.data.result)
            })
            .catch((error)=>{
                console.log(error)
            } )
    }
    const HandleSubmit=(index)=>{
        if(index===editedIndex) {
            axios.post("/api/v1/student/academecentry", {section, rollNo,regNo},{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    alert("Student Academic Details Updated Successfully")
                    setEditedIndex(null)
                    fetchnewData();
                })
                .catch((err) => {
                    alert(err.response.data.msg)
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
                               <td>{convertToRoman(data.class)}</td>
                               <td>{editedIndex!==index ? (
                                   data.section
                               ): (
                                   <select onChange={(e) => setSection(e.target.value)} required
                                           value={section}>
                                       <option value="">Section</option>
                                       <option value="A">
                                           A
                                       </option>
                                       <option value="B">
                                           B
                                       </option>
                                       <option value="C">
                                           C
                                       </option>
                                       <option value="D">
                                           D
                                       </option>
                                       <option value="E">
                                           E
                                       </option>
                                       <option value="F">
                                           F
                                       </option>
                                       v
                                       <option value="Art-A">
                                           Art-A
                                       </option>

                                       <option value="Art-B">
                                           Art-B
                                       </option>
                                       <option value="Art-C">
                                           Art-C
                                       </option>
                                       <option value="Com-A">
                                           Com-A
                                       </option>
                                       <option value="Com-B">
                                           Com-B
                                       </option>
                                       <option value="Com-C">
                                           Com-C
                                       </option>
                                       <option value="Sci-A">
                                           Sci-A
                                       </option>
                                       <option value="Sci-B">
                                             Sci-B
                                       </option>
                                       <option value="Sci-C">
                                             Sci-C
                                       </option>

                                   </select>
                               )
                               }</td>
                               <td>{editedIndex !== index ? (
                                   data.roll_no
                               ) : (
                                   <input
                                       type="number"
                                       onChange={(e) => setRollNo(e.target.value)}
                                       value={rollNo}
                                   />
                               )
                               }</td>

                               <td>
                                   {editedIndex === index ? (
                                       <>
                                           <div style={{display: 'flex'}}>
                                               <button className="dashboard-btn dashboard-btn-scss"
                                                       onClick={HandaleCancel}> Cancel
                                               </button>
                                               <button style={{marginLeft: '5px'}}
                                                       className="dashboard-btn dashboard-btn-scss"
                                                       onClick={() => HandleSubmit(index)}> Submit
                                               </button>
                                           </div>
                                       </>
                                   ) : (
                                       <button className="dashboard-btn btn-warning"
                                               onClick={() => HandleEdit(index, data)}>Edit</button>
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