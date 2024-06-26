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
const [regNo,setRegNo]=useState('')


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
        axios.get(`/api/v1/faculty/getallexam`).then((res)=>{
            console.log(res.data.data)
            setExamData(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })

    }

    const borderColor = "#3778C2";
      const styles = StyleSheet.create({
        section: {
            margin: 5,
            padding: 5,
            flexGrow: 1,
          },
        page: {

          fontFamily: "Helvetica",
          fontSize: 11,
          paddingTop: 10,
          paddingLeft: 40,
          paddingRight: 40,
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
            width: "6%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            fontSize:'11',

            borderLeftColor: borderColor,
            borderLeftWidth: 1,
          },
          qty: {
            width: "16%",
            fontSize:'11',
            borderRightWidth: 1,


          },
          qty1: {
            width: "16%",
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
            width: "6%",
            textAlign: "center",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            backgroundColor: "azure",
            fontSize:'9px',
            fontWeight: "extrabold",




          },

          rowqty: {
            width: "16%",
            // backgroundColor: "white",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1,

            backgroundColor: "azure"

          },rowqtytot: {
            width: "22%",
            backgroundColor: "ivory",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1,
            borderLeftWidth: 1,



          },
          rowqtynew: {
            width: "16%",
            backgroundColor: "ivory",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1,



          },
          rowqty1: {
            width: "16%",
            backgroundColor: "white",
            textAlign: "center",
            fontSize:'9px',


          },
          rowqtynew1: {
            width: "16%",
            backgroundColor: "ivory",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1

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
            marginTop:'50px',
            display:'flex',
            flexDirection:'row',
            textAlign:'center'
          },
          rightfooter:{
            borderTop:'1px solid black',
            width:'25%',
            marginLeft:'5px',
            marginRight:'5px',
            paddingTop:'5px',
            float:'right'
          },
          leftfooter:{
            borderTop:'1px solid black',marginLeft:'5px',
            marginRight:'5px',
            width:'25%',
            paddingTop:'5px',
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
                          <View style={styles.formDetails}><Text>Progress Report of {data[0][0][0].exam_name} Exam for Academic Year {data[0][0][0].Year}</Text></View>

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
                              <Text style={styles.qty}>Status</Text>
                              <Text style={styles.qty}>Obtained</Text>
                              <Text style={styles.qty}>Heighest</Text>
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
                               
                               
                                <Text style={styles.rowqty}>{item.present==1?'Present':'Absent'}</Text>
                                <Text style={styles.rowqty}>{item.marks}</Text>
                                {
                                      data[3].map((max,idx)=>(
                                          max.subject===item.subject ? <Text style={styles.rowqty} key={idx}>{max.max_mark}</Text> : null
                                      ))
                                  }

                                <Text style={styles.rowqty}>{((item.marks / item.int_exam_marks) * 100).toString().slice(0, 3).concat("%")}</Text>
                                <Text style={styles.rowqty1}>{gradecalculate(((item.marks / item.int_exam_marks) * 100))}</Text>
                            </View>
                            )



                            })}
                             <View style={styles.row}>
                            <Text style={styles.blankrow}></Text>

                        </View>
                            <View style={styles.row}>

                                <Text style={styles.rowqtytot}>Total</Text>
                                <Text style={styles.rowqtynew}>{data[1]}</Text>
                                <Text style={styles.rowqtynew}>X</Text>
                                <Text style={styles.rowqtynew}>{data[2]}</Text>
                                <Text style={styles.rowqtynew}>X</Text>
                                <Text style={styles.rowqtynew}>{((data[2]/ data[1]) * 100).toString().slice(0, 3).concat("%")}</Text>
                                <Text style={styles.rowqtynew1}>{gradecalculate(((data[2] / data[1]) * 100))}</Text>
                            </View>

                    <View style={styles.footer}>
                        <Text style={styles.leftfooter}>Class Teacher's Signature</Text>

                        <Text style={styles.leftfooter}>Teacher-In-Charge's Signature</Text>
                        <Text style={styles.rightfooter}>Guardian's Signature</Text>

                        <Text style={styles.rightfooter}>AHM Secretary's Signature</Text>
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
        setRegNo(data.registration_no)
        if(ExamName===""){
           const DATA2={
                Class:data.class,
                year:data.current_academic_year,
                regNo:data.registration_no
              }
                axios.post(`/api/v1/faculty/getallmarks`,DATA2)
                 .then((res)=>{
                     if(res.data.data.length>=0) {
                         setResult2Data(res.data.data)
                         setTableView("none")
                         setResult2("block")
                     }

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
                    if(res.data.data.length) {
                        setResultData(res.data.data)
                        setMaxMark(res.data.result1)
                        // console.log(res.data.data)
                        console.log(res)
                        setTableView("none")
                        setResult("block")
                        const dataArray = [res.data.data]
                        setPDFdata(dataArray)
                        setpdfstate(true)
                    }
                    else{
                        alert("No Marks Found in this Exam")
                    }
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
              <div >

                  <table className="table-60">
                      <thead style={{display: tableView}}>
                        <tr style={{display:'table-caption'}}>
                            <button style={{float:'right'}} className="dashboard-btn dashboard-btn-scss excel-btn"
                            onClick={handleClear}>Clear Result</button>
                        </tr>

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
                              Exam Name
                          </th>

                          <th>
                              Action
                          </th>
                      </tr>
                      </thead>
                      <tbody style={{display: tableView}}>
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
                                          
                                          {
                                              ExamData.map((exam, index) => (
                                                  <option key={index}
                                                          value={exam.internal_exam_name}>{exam.internal_exam_name}</option>
                                              ))
                                          }
                                          <option value="">Grand Total</option>
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
                  {/* <button style={{float: 'right'}} className="dashboard-btn dashboard-btn-scss excel-btn"
                          onClick={HandleClick}>Cancel
                  </button> */}
                  
                  <table className="table-60" id="table_one">
                      <thead style={{ display: 'contents' }}>
                      <tr style={{ display: 'table-caption' }}>

                      <button style={{position:'relative',marginTop:'-40px',float:'left'}} 
                            className="dashboard-btn dashboard-btn-scss excel-btn" 
                            onClick={HandleClick}>Cancel</button>
                            { pdfstate && <button className='dashboard-btn excel-btn user-profile-export' style={{background:'lightsalmon',color:'white',marginBottom:'8px',float:'right'}}>
                                    <PDFDownloadLink document={<MyDocumentMarks data={[pdfdata,sum_v1,sum_tot_v1,maxMark]}/>}
                                    fileName={"Progress_Report_"+ExamName+"_"+regNo+".pdf"} >
                                        {({ blob, url, loading, error }) => (loading ? 'Download PDF' : 'Download PDF')}
                                    </PDFDownloadLink></button>}

                        </tr>
                      <tr>
                          <th>Sl No.</th>

                          <th>Exam Name</th>
                          <th>Subject</th>
                          <th>Present</th>
                          <th>Full Marks</th>
                          
                          <th>Obtained Marks</th>
                          <th>Highest Marks</th>
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
                                  <td><input type='checkbox' checked={item.present === 1 ? true : false}></input></td>
                                  <td>{item.int_exam_marks}</td>
                                  
                                  <td>{item.marks}</td>
                                  {
                                      maxMark.map((max,idx)=>(
                                          max.subject===item.subject ? <td style={{color:'red'}} key={idx}>{max.max_mark}</td> : null
                                      ))
                                  }
                                  <td>{((item.marks / item.int_exam_marks) * 100).toString().slice(0, 3).concat("%")}</td>
                                  <td style={{width:'20%'}}>{gradecalculate(((item.marks / item.int_exam_marks) * 100))}</td>

                              </tr>

                      ))}
                      <tr>
                          <td style={{border: 'none'}}></td>


                          <td></td>
                          <td></td>
                          <td style={{backgroundColor: '#f39c12', color: 'white', border: '1px solid black'}}><b>Total
                              Marks:</b></td>
                              <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_tot_v1}</b>
                          </td>
                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}><b>{sum_v1}</b></td>

                          <td style={{backgroundColor: 'ghostwhite', border: '1px solid black'}}></td>
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
