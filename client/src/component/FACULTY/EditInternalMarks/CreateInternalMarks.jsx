import {useEffect, useState} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const CreateInternalMarks=(props)=>{
const [view,setView]=useState("none")
const [data,setData]=useState([])
const [Index,setIndex]=useState(null)
const [marks,setMarks]=useState(0)
const currDate = new Date().toLocaleDateString();
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
         alert("Obtained Marks Should be less than or Equal to Total Marks")
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
        setData([])
        
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
            
            
            <table className="table-60">
                <thead style={{display:'contents'}}>
                <tr style={{display:'table-caption'}}>
                <button style={{position:'relative',marginTop:'-40px',float:'left'}} 
                className="dashboard-btn dashboard-btn-scss excel-btn" onClick={handleClear}>Clear Result</button>
                

                <ReactHTMLTableToExcel
                                id="marks"
                                className="dashboard-btn excel-btn user-profile-export"
                                table="student-marks-all"
                                filename={"Student_All_Marks_Report_" + currDate}
                                sheet="tablexls"
                                buttonText="Excel Export"
                            />
                </tr>
                <tr>
                    <th>Sl. No.</th>
                    <th>Registration No</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Section</th>
                   
                    <th>Roll No</th>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Total Exam Mark</th>
                    <th>Present</th>
                    <th>Obtained Mark</th>
                    <th style={{width:'21%'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((data,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.registration_no}</td>
                        <td>{data.student_Name}</td>
                        <td>{convertToRoman(data.class)}</td>
                        <td>{data.section}</td>
                       
                        <td>{data.roll_no}</td>
                        <td>{props.Exam}</td>
                        <td>{data.subject}</td>
                        <td>{props.Marks}</td>
                        <td><input type='checkbox' checked={data.present === 1 ? true : false}></input></td>
                        <td>{index!==Index ? (data.marks):(<input type="number" value={marks} onChange={(e)=>setMarks(e.target.value)}/>)}</td>
                        <td>{index!==Index ?(<button  onClick={()=>handleEdit(data,index)} className="dashboard-btn btn-warning">Edit</button>):
                            (<div><button style={{background:'#3c8dbc',borderColor:'#3c8dbc'}} disabled={data.present === 0 ? true : false} onClick={()=>handleUpdate(data)} className="dashboard-btn btn-warning fix-width">Save</button> 
                            <button style={{background:'#3c8dbc',borderColor:'#3c8dbc'}} onClick={handleCancel} className="dashboard-btn btn-warning fix-width">Cancel</button> 
                            <button style={{background:'#3c8dbc',borderColor:'#3c8dbc'}} onClick={()=>handleDelete(data)} className="dashboard-btn btn-warning fix-width">Delete</button></div>)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <table  style={{display:'none'}} id='student-marks-all'>
                <thead style={{display:'contents'}}>
               
                <tr>
                    <th>Sl. No.</th>
                    <th>Registration No</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Section</th>
                   
                    <th>Roll No</th>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Total Exam Mark</th>
                    <th>Present</th>
                    <th>Obtained Mark</th>
                  
                </tr>
                </thead>
                <tbody>
                {data.map((data,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.registration_no}</td>
                        <td>{data.student_Name}</td>
                        <td>{convertToRoman(data.class)}</td>
                        <td>{data.section}</td>
                       
                        <td>{data.roll_no}</td>
                        <td>{props.Exam}</td>
                        <td>{data.subject}</td>
                        <td>{props.Marks}</td>
                        <td><input type='checkbox' checked={data.present === 1 ? true : false}></input></td>
                        <td>{data.marks}</td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
            {data.length===0 ? <div className="no-data" style={{textAlign:'center',width:'100%'}}>No Data Exists</div> : null}
        </div>
    )
}
export default CreateInternalMarks