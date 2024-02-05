import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



const ExportStudentMarksView= (props) => {

    const [view,setView]=useState("none")
    const [data,setData]=useState([])

    const [Class,setClass]=useState('none')
    const [ClassRegExam,setClassRegExam]=useState('none')
    const [ClassExam,setClassExam]=useState('none')
    const [ClassReg,setClassReg]=useState('none')
    


    useEffect(()=>{
        setData(props.data)
        console.log(props)

    },[props.data])

    useEffect(()=>{
        console.log(props.type)
      if(props.type==='cl_reg_ex')
      {
        setClass('none')
        setClassExam('none')
        setClassReg('none')
        setClassRegExam('inline-table')
      }
      else if(props.type==='cl_reg')
      {
        setClass('none')
        setClassExam('none')
        setClassReg('inline-table')
        setClassRegExam('none')
      }
      else if(props.type==='cl_ex'){
        setClass('none')
        setClassExam('inline-table')
        setClassReg('none')
        setClassRegExam('none')
      }
      else if(props.type==='cl')
      {
        setClass('block')
        setClassExam('none')
        setClassReg('none')
        setClassRegExam('none')
      }


    },[props.type])


    // props.data.length>0
    useEffect(() => {
        if( props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

    // const clearTable = () => {
    //     if(hideView==='none')
    //     setData([]);
    //   };

    let sum_v1=0;
    let sum_tot_v1=0;

    let sum_v2=0;
    let sum_tot_v2=0;
    

      return(
        <div style={{display: view}}>
            
            <table className="table-60" style={{display:ClassRegExam}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Registration No.</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Roll No.</th>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Obtained Marks</th>
                    <th>Full Marks</th>
                    <th>Percentage </th>
                    
                    
                </tr>
                </thead>
                <tbody>
                {data.map((item,idx) => (
                    sum_v1=sum_v1+item.marks,sum_tot_v1=sum_tot_v1+item.int_exam_marks,
                    <tr key={item.id}>
                        <td>{idx+1}</td>
                        <td>{item.student_Name}</td>
                        <td>{item.regNo}</td>
                        <td>{item.class}</td>
                        <td>{item.section}</td>
                        <td>{item.roll_no}</td>
                        <td>{item.exam_name}</td>
                        <td>{item.subject}</td>
                        <td>{item.marks}</td>
                        

                        <td>{item.int_exam_marks}</td>
                        <td>{((item.marks/item.int_exam_marks)*100).toString().slice(0,2).concat("%")}</td>
                        
                    </tr>
                    
                ))}
                <tr>
                <td style={{border:'none'}}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                    <td style={{backgroundColor:'#f39c12',color:'white',border:'1px solid black'}}><b>Total Marks:</b></td>
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{sum_v1}</b></td>
                    
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{sum_tot_v1}</b></td>
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{((sum_v1/sum_tot_v1)*100).toString().slice(0,2).concat("%")}</b></td>
                </tr>
                </tbody>


            </table>
            <table className="table-60" style={{display:ClassReg}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Registration No.</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Roll No.</th>
                    <th>Exam Name</th>
                    
                    <th>Total Obtained Marks</th>
                    <th>Total Marks</th>
                    <th>Percentage </th>
                    
                    
                </tr>
                </thead>
                <tbody>
                {data.map((item,idx) => (
                    sum_v2=sum_v2+Number(item.obtained_marks),sum_tot_v2=sum_tot_v2+Number(item.total_marks),
                    <tr key={item.id}>
                        <td>{idx+1}</td>
                        <td>{item.student_Name}</td>
                        <td>{item.regNo}</td>
                        <td>{item.class}</td>
                        <td>{item.section}</td>
                        <td>{item.roll_no}</td>
                        <td>{item.exam_name}</td>
                        
                        <td>{item.obtained_marks}</td>
                        

                        <td>{item.total_marks}</td>
                        <td>{((item.obtained_marks/item.total_marks)*100).toString().slice(0,2).concat("%")}</td>
                        
                    </tr>
                    
                ))}
                <tr>
                <td style={{border:'none'}}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                
                    <td style={{backgroundColor:'#f39c12',color:'white',border:'1px solid black'}}><b>Total Marks:</b></td>
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{sum_v2}</b></td>
                    
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{sum_tot_v2}</b></td>
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{((sum_v2/sum_tot_v2)*100).toString().slice(0,2).concat("%")}</b></td>
                </tr>
                </tbody>
            </table>
            <table className="table-60" style={{display:ClassExam}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Registration No.</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Roll No.</th>
                    <th>Exam Name</th>
                    
                    <th>Total Obtained Marks</th>
                    <th>Total Marks</th>
                    <th>Percentage </th>
                    
                    
                </tr>
                </thead>
                <tbody>
                {data.map((item,idx) => (
                    sum_v2=sum_v2+Number(item.obtained_marks),sum_tot_v2=sum_tot_v2+Number(item.total_marks),
                    <tr key={item.id}>
                        <td>{idx+1}</td>
                        <td>{item.student_Name}</td>
                        <td>{item.regNo}</td>
                        <td>{item.class}</td>
                        <td>{item.section}</td>
                        <td>{item.roll_no}</td>
                        <td>{item.exam_name}</td>
                        
                        <td>{item.obtained_mark}</td>
                        

                        <td>{item.total_marks}</td>
                        <td>{((item.obtained_marks/item.total_marks)*100).toString().slice(0,2).concat("%")}</td>
                        
                    </tr>
                    
                ))}
                <tr>
                <td style={{border:'none'}}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                
                    <td style={{backgroundColor:'#f39c12',color:'white',border:'1px solid black'}}><b>Total Marks:</b></td>
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{sum_v2}</b></td>
                    
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{sum_tot_v2}</b></td>
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{((sum_v2/sum_tot_v2)*100).toString().slice(0,2).concat("%")}</b></td>
                </tr>
                </tbody>
            </table>
            <table className="table-60" style={{display:Class}}></table>

        
        
        </div>



      )
    
}
export default ExportStudentMarksView;