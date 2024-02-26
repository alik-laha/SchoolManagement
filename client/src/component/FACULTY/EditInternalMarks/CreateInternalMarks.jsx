import {useEffect, useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [view,setView]=useState("none")
const [data,setData]=useState([])
const [Index,setIndex]=useState(null)
const [marks,setMarks]=useState(0)

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
    useEffect(() => {
        if(props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

    useEffect(()=>{
        setData(props.data)

    },[props.data])

    const handleEdit=(data,idx)=>{
     console.log(data,idx)
        setIndex(idx)
        setMarks(data.marks)
    }

const handleUpdate=(data)=>{
        console.log(data)
     if(marks>props.Marks){
         alert("Obtained Marks Should be less than Total Marks")
         setIndex(null)
         return
     }
     else{
         axios.post("/api/v1/faculty/updatemarks",{subject:props.Subject,examName:props.Exam,marks,reg:data.registration_no,year:data.current_academic_year,Class:data.class},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
             alert("Marks Updated Successfully")
                setIndex(null)
             setView("none")
         }).catch((err)=>{
             console.log(err)
         })
     }
}

const handleClear = () => {
    if(view=='block'){
        setView('none')
    }
    

}
const handleCancel=()=>{
        setIndex(null)
        setMarks(0)
}
const handleDelete=(data)=>{
    axios.post("/api/v1/faculty/deletemarks",{subject:props.Subject,exam:props.Exam,regNo:data.registration_no,Class:data.class,year:data.current_academic_year},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
        alert("Marks Deleted Successfully")
        setView("none")
        setIndex(null)
    }).catch((err)=>{
        console.log(err)
    })
}
    return(
        <div style={{display:view,marginTop:'35px'}}>
            <button style={{float:'right'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={handleClear}>Clear Result</button>
            <table className="table-60">
                <thead>
                <tr>
                    <th>Sl. No.</th>
                    <th>Class</th>
                    <th>Registration No</th>
                    <th>Student Name</th>
                    <th>Roll No</th>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Total Exam Mark</th>
                    <th>Obtained Mark</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((data,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{convertToRoman(data.class)}</td>
                        <td>{data.registration_no}</td>
                        <td>{data.student_Name}</td>
                        <td>{data.roll_no}</td>
                        <td>{props.Exam}</td>
                        <td>{data.subject}</td>
                        <td>{props.Marks}</td>
                        <td>{index!==Index ? (data.marks):(<input type="number" value={marks} onChange={(e)=>setMarks(e.target.value)}/>)}</td>
                        <td>{index!==Index ?(<button onClick={()=>handleEdit(data,index)} className="dashboard-btn btn-warning">Edit</button>):
                            (<div><button onClick={()=>handleUpdate(data)} className="dashboard-btn dashboard-btn-scss">Save</button> <button onClick={handleCancel} >Cancel</button> <button onClick={()=>handleDelete(data)} className="dashboard-btn btn-warning">Delete</button></div>)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {data.length===0 ? <div className="no-data" style={{textAlign:'center',width:'100%'}}>No Data Exists</div> : null}
        </div>
    )
}
export default CreateInternalMarks