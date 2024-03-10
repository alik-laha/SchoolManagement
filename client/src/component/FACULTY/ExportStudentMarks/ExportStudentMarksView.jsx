import {useEffect, useState} from "react";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";
import logo from '../../Home/logo_ahm.jpg'
import { Document, Page, Text, View,PDFDownloadLink,StyleSheet,Image } from '@react-pdf/renderer';




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
    const [pdfdata,setPDFdata]=useState([])
const [pdfstate,setpdfstate]=useState(false)
const [maxMark,setMaxMark]=useState([])


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

    const borderColor = "#3778C2";
      const styles = StyleSheet.create({
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,
          },
        page: {
          
          fontFamily: "Helvetica",
          fontSize: 11,
          paddingTop: 10,
          paddingLeft: 50,
          paddingRight: 50,
          lineHeight: 1.5,
          flexDirection: "column"
        },
        logo: {
          width: 60,
          height: 60,
          marginTop:20,
          marginRight:20
          
        },
        mainHeader: {
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center"
        },

        tableContainer: {
            // backgroundColor: '#E4E4E4',
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 15,
            borderWidth: 1,
            borderColor: "#3778C2"
          },
          container: {
            flexDirection: "row",
            borderBottomColor: "#00519C",
            backgroundColor: "#00519C",
            color: "#fff",
            borderBottomWidth: 1,
            alignItems: "center",
            height: 20,
            textAlign: "center",
            fontStyle: "bold",
            flexGrow: 1
          },
          description: {
            width: "5%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            fontSize:'11',
            
            borderLeftColor: borderColor,
            borderLeftWidth: 1,
          },
          qty: {
            width: "19%",
            fontSize:'11',
            borderRightWidth: 1,
             
           
          },
          qty1: {
            width: "19%",
            fontSize:'11',
            borderRightColor: borderColor,
            borderRightWidth: 1,
          },
          row: {
            display:'flex',
            flexDirection: "row",
            borderBottomColor: "#3778C2",
            borderBottomWidth: 1,
            alignItems: "center",
            height: 20,
            
          },
          rowdescription: {
            width: "5%",
            textAlign: "center",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            backgroundColor: "azure",
            fontSize:'9px',
            fontWeight: "extrabold"
            
            
            
          },
        
          rowqty: {
            width: "19%",
            // backgroundColor: "white",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1,
            
            backgroundColor: "azure"
            
          },
          rowqty1: {
            width: "19%",
            backgroundColor: "white",
            textAlign: "center",
            fontSize:'9px',
            
            
          },
          
         
          headerContainer: {
            marginTop: 20,
            justifyContent: "flex-start",
            width: "50%"
          },
          billTo: {
            marginRight: 10,
            fontWeight:'extrabold'
          },
          Mainbillto: {
            display: "flex",
            flexDirection: "row",
            marginTop: 2,
            paddingBottom: 1,
            fontSize:'10px'
          },
          instituteheader:{
            textAlign:'center',
            flexDirection:'row'
            
          },
          institutedesc:{
            
            flexDirection:'column',
            marginLeft:'10px'
            
          },
          institutename:{
            textAlign:'center',
            fontSize:'18',
            fontWeight:'bold',
            color:'#00519C',
            marginTop: 20,
            
          },
          instituteother:{
            textAlign:'center',
            fontSize:'10',
            fontWeight:'bold',
            color:'rgb(6, 21, 116)',
            
            
          },
          formDetails:{
            marginLeft:20,
            width:'100%',
            marginTop: 20,
            textAlign:'center',
            fontSize:'12',
            color:'red',
            fontWeight:'bold',
            
            fontStyle:'cursive'
          },
          blankrow:{
            width:'100%',
            backgroundColor:'antiquewhite',
            color:'#00519C',
            textAlign:'center',
            fontWeight:'bold',
            fontSize:'10px'
          },
          footer:{
            marginTop:'150px',
            display:'flex',
            flexDirection:'row',
            textAlign:'center'
          },
          rightfooter:{
            width:'50%',
            marginLeft:'50px',
            float:'right'
          },
          leftfooter:{
            width:'50%',
            float:'left'
          }
          
      });



      const MyDocumentMarks = ({ data }) => (

        <Document>
                  <Page size="A4" style={styles.page}>
                      <View style={styles.section}>
                          <View style={styles.instituteheader}>

                              <Image
                                  style={styles.logo}
                                  src={logo}
                              />
                              <View style={styles.institutedesc}>
                                  <Text style={styles.institutename}> Al-HILAL-MISSION</Text>{"\n"}
                                  <Text style={styles.instituteother}> (An Educational, Cultural, & Social Welfare Organization) </Text>{"\n"}

                                  <Text style={styles.instituteother}> Kadambagachi, Duttapukur (Barasat), Kol-700125 </Text>{"\n"}

                              </View>

                          </View>
                          <View style={styles.formDetails}><Text>Mark Sheet of {data[0][0][0].exam_name} Exam for Academic Year {data[0][0][0].Year}</Text></View> 
                          
                          <View style={styles.headerContainer}>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Student Name:</Text>
                            <Text>{data[0][0][0].student_Name}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Registration Number:</Text>
                            <Text>{data[0][0][0].regNo}</Text>
                        </View>
                        
                        
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Academic Year:</Text>
                            <Text>{data[0][0][0].Year}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Class:</Text>
                            <Text>{convertToRoman(data[0][0][0].class)}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Section:</Text>
                            <Text>{data[0][0][0].section}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Roll No:</Text>
                            <Text>{data[0][0][0].roll_no}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Date of Generation:</Text>
                            <Text>{currDate}</Text>
                        </View>
                        
                         </View>

                      <View style={styles.tableContainer}>

                          <View style={styles.container}>
                              <Text style={styles.description}>Sl</Text>
                              <Text style={styles.qty}>Subject</Text>
                              <Text style={styles.qty}>Full Marks</Text>
                              <Text style={styles.qty}>Obtained</Text>
                              <Text style={styles.qty}>Percentage</Text>
                              <Text style={styles.qty1}>Grade</Text>

                          </View>
                      </View>
                       
                         {data[0][0].map((item,index)=>{
                            data[1]=data[1]+item.int_exam_marks
                            data[2]=data[2]+item.marks
                            return( 
                            <View key={item.id} style={styles.row}>
                                <Text style={styles.rowdescription}>{index+1}</Text>
                                <Text style={styles.rowqty}>{item.subject}</Text>
                                <Text style={styles.rowqty}>{item.int_exam_marks}</Text>
                                <Text style={styles.rowqty}>{item.marks}</Text>
                                <Text style={styles.rowqty}>{((item.marks / item.int_exam_marks) * 100).toString().slice(0, 3).concat("%")}</Text>
                                <Text style={styles.rowqty1}>{gradecalculate(((item.marks / item.int_exam_marks) * 100))}</Text>
                            </View>
                            )   
                               
                         
                           
                            })}
                            <View style={styles.row}>
                                <Text style={styles.rowdescription}></Text>
                                <Text style={styles.rowqty}>Total</Text>
                                <Text style={styles.rowqty}>{data[1]}</Text>
                                <Text style={styles.rowqty}>{data[2]}</Text>
                                <Text style={styles.rowqty}>{((data[2]/ data[1]) * 100).toString().slice(0, 3).concat("%")}</Text>
                                <Text style={styles.rowqty1}>{gradecalculate(((data[2] / data[1]) * 100))}</Text>
                            </View>
                         
                        
                    <View style={styles.footer}>
                        <Text style={styles.leftfooter}>Class Teacher Signature</Text>
                        <Text style={styles.rightfooter}>AL-Hilal Secretary Signature</Text>
                    </View>
                      
                      
                      
                      </View>
                  </Page>
        </Document>


     
      );
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
                    setMaxMark(res.data.result1)
                    // console.log(res.data.data)
                    console.log(res)
                    setTableView("none")
                    setResult("block")
                    const dataArray=[res.data.data]
                    setPDFdata(dataArray)
                setpdfstate(true)
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
                  { pdfstate && <button className='dashboard-btn fix-width-pdf pdf-btn' style={{background:'lightsalmon',color:'white',marginBottom:'8px',float:'right'}}>
                                    <PDFDownloadLink document={<MyDocumentMarks data={[pdfdata,sum_v1,sum_tot_v1]}/>} fileName={"Student_Marks_Report.pdf"} >
                                        {({ blob, url, loading, error }) => (loading ? 'Loading..' : 'Download')}
                                    </PDFDownloadLink></button>}
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
                          <th>highest</th>

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
                                  <td style={{width:'20%'}}>{gradecalculate(((item.marks / item.int_exam_marks) * 100))}</td>
                                  {
                                      maxMark.map((max,idx)=>(
                                          max.subject===item.subject ? <td key={idx}>{max.max_mark}</td> : null
                                      ))
                                  }
                              </tr>

                      ))}
                      <tr>
                          <td style={{border: 'none'}}></td>


                          <td></td>
                          <td style={{backgroundColor: '#f39c12', color: 'white', border: '1px solid black'}}><b>Total
                              Marks:</b></td>
                              <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_tot_v1}</b>
                          </td>
                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_v1}</b></td>

                          
                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                              <b>{((sum_v1 / sum_tot_v1) * 100).toString().slice(0, 2).concat("%")}</b></td>
                        <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}>
                              <b>{gradecalculate(((sum_v1 / sum_tot_v1) * 100))}</b></td>
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