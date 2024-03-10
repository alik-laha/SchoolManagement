import {useEffect, useState} from "react";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";



const ExportStudentMarksView= (props) => {

    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [ExamData,setExamData]=useState([])
    const [result,setResult]=useState("none")
    const [tableView,setTableView]=useState("contents")
    const [ExamName,setExamName]=useState("")
    const [resultData,setResultData]=useState([])
    const[result2,setResult2]=useState("none")
    const [result2Data,setResult2Data]=useState([])

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
        if(view==="block"){
            FetchExamData()
        }
    }, [view]);
    const FetchExamData=()=>{
        axios.get(`/api/v1/faculty/getallexam`,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            console.log(res.data.data)
            setExamData(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })

    }
    useEffect(()=>{
        setData(props.data)
        console.log(props)

    },[props.data])


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
    const handleView=(data)=>{
        console.log(data)
        if(ExamName===""){
           const DATA2={
                Class:data.class,
                year:data.current_academic_year,
                regNo:data.registration_no
              }
                axios.post(`/api/v1/faculty/getallmarks`,DATA2)
                 .then((res)=>{
                      setResult2Data(res.data.data)
                        setTableView("none")
                        setResult2("block")
                 }).catch((err)=>{
                 console.log(err)
                })
           }
        else {
            const DATA = {
                Class: data.class,
                examName: ExamName,
                year: data.current_academic_year,
                regNo: data.registration_no
            }
            axios.post(`/api/v1/faculty/getallmarks`, DATA)
                .then((res) => {
                    setResultData(res.data.data)
                    console.log(res)
                    setTableView("none")
                    setResult("block")
                }).catch((err) => {
                console.log(err)
            })
        }

    }
    let sum_v1=0;
    let sum_tot_v1=0;


    let sum_v2=0;
    let sum_tot_v2=0;

    const HandleClick=()=>{
        setTableView("contents")
        setResult("none")
        setResult2("none")
    }
    const handleClear = () => {
        if(view=='block'){
            setData([])
            
        }
        
    
    }
    const gradecalculate = (data) => {
        if(data>=90){
            return 'AA'
            
        }
        else if(data >=80 && data<90)
        {
            return "A+"
        }
        else if(data >=60 && data<80)
        {
            return "A"
        }
        else if(data >=45 && data<60)
        {
            return "B+"
        }
        else if(data >=35 && data<45)
        {
            return "B"
        }
        else if(data >=25 && data<35)
        {
            return "C"
        }
        else if(data<25)
        {
            return "D"
        }
    
    }


      return(
          <div style={{display: view}}>
              <div style={{display: tableView}}>
              <button style={{float:'right'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={handleClear}>Clear Result</button>
                  <table className="table-60">
                      <thead>
                      <tr>
                          <th>
                              Sl. No.
                          </th>
                          <th>
                              Name
                          </th>
                          <th>
                              RegNo
                          </th>
                          <th>
                              Year
                          </th>
                          <th>
                              Class
                          </th>
                          <th>
                              Section
                          </th>
                          <th>
                              Roll No.
                          </th>

                          <th>
                              Examination Type
                          </th>

                          <th>
                              Action
                          </th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          data.map((data, index) => (
                              <tr key={index}>
                                  <td>
                                      {index + 1}
                                  </td>
                                  <td>
                                      {data.student_Name}
                                  </td>
                                  <td>
                                      {data.registration_no}
                                  </td>
                                  <td>
                                      {data.current_academic_year}
                                  </td>
                                  <td>
                                      {convertToRoman(data.class)}
                                  </td>
                                  <td>
                                      {data.section}
                                  </td>
                                  <td>
                                      {data.roll_no}
                                  </td>

                                  <td>
                                      <select onChange={(e) => setExamName(e.target.value)} value={ExamName} required>
                                          <option value="">Select Exam</option>
                                          {
                                              ExamData.map((exam, index) => (
                                                  <option key={index}
                                                          value={exam.internal_exam_name}>{exam.internal_exam_name}</option>
                                              ))
                                          }
                                      </select>
                                  </td>

                                  <td>
                                      <button style={{background: '#3c8dbc', borderColor: '#3c8dbc'}}
                                              onClick={() => handleView(data)}
                                              className="dashboard-btn btn-warning fix-width">View
                                      </button>
                                  </td>
                              </tr>
                          ))
                      }
                      </tbody>
                  </table>
                  {data.length===0 ? <div className="no-data" style={{textAlign:'center',width:'100%'}}>No Data Exists</div> : null}
              </div>
              <div style={{display: result}}>
                  <button style={{float: 'right'}} className="dashboard-btn dashboard-btn-scss excel-btn"
                          onClick={HandleClick}>Cancel
                  </button>
                  <table className="table-60" id="table_one">
                      <thead>
                      <tr>
                          <th>Sl No.</th>

                          <th>Exam Name</th>
                          <th>Subject</th>
                          
                          <th>Full Marks</th>
                          <th>Obtained Marks</th>
                          <th>Percentage</th>
                          <th>Grade</th>


                      </tr>
                      </thead>
                      <tbody>
                      {resultData.map((item, idx) => (
                          sum_v1 = sum_v1 + item.marks, sum_tot_v1 = sum_tot_v1 + item.int_exam_marks,
                              <tr key={item.id}>
                                  <td>{idx + 1}</td>

                                  <td>{item.exam_name}</td>
                                  <td>{item.subject}</td>
                                 


                                  <td>{item.int_exam_marks}</td>
                                  <td>{item.marks}</td>
                                  <td>{((item.marks / item.int_exam_marks) * 100).toString().slice(0, 3).concat("%")}</td>
                                  <td>{gradecalculate(((item.marks / item.int_exam_marks) * 100))}</td>
                              </tr>

                      ))}
                      <tr>
                          <td style={{border: 'none'}}></td>


                          <td></td>
                          <td style={{backgroundColor: '#f39c12', color: 'white', border: '1px solid black'}}><b>Total
                              Marks:</b></td>
                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_v1}</b></td>

                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_tot_v1}</b>
                          </td>
                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                              <b>{((sum_v1 / sum_tot_v1) * 100).toString().slice(0, 2).concat("%")}</b></td>
                      </tr>
                      </tbody>


                  </table>
              </div>
              <div style={{display: result2}}>
                  <button style={{float: 'right'}} className="dashboard-btn dashboard-btn-scss excel-btn"
                          onClick={HandleClick}>Cancel
                  </button>
                  <table className="table-60" id="table_two">
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
                          <th>Percentage</th>


                      </tr>
                      </thead>
                      <tbody>
                      {result2Data.map((item, idx) => (
                          sum_v2 = sum_v2 + Number(item.obtained_marks), sum_tot_v2 = sum_tot_v2 + Number(item.total_marks),
                              <tr key={item.id}>
                                  <td>{idx + 1}</td>
                                  <td>{item.student_Name}</td>
                                  <td>{item.regNo}</td>
                                  <td>{item.class}</td>
                                  <td>{item.section}</td>
                                  <td>{item.roll_no}</td>
                                  <td>{item.exam_name}</td>

                                  <td>{item.obtained_marks}</td>


                                  <td>{item.total_marks}</td>
                                  <td>{((item.obtained_marks / item.total_marks) * 100).toString().slice(0, 2).concat("%")}</td>

                              </tr>

                      ))}
                      <tr>
                          <td style={{border: 'none'}}></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td style={{backgroundColor: '#f39c12', color: 'white', border: '1px solid black'}}><b>Total
                              Marks:</b></td>
                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_v2}</b></td>

                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_tot_v2}</b>
                          </td>
                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                              <b>{((sum_v2 / sum_tot_v2) * 100).toString().slice(0, 2).concat("%")}</b></td>
                      </tr>
                      </tbody>
                  </table>

              </div>
          </div>


      )

}
export default ExportStudentMarksView;