import {useEffect, useState} from "react";
import axios from "axios";
import { Document, Page, Text, View,PDFDownloadLink,StyleSheet,Image } from '@react-pdf/renderer';
import logo from '../../Home/logo_ahm.jpg'

const HostelEntry = (props) => {
    const [allView, setAllView] = useState("contents");
    const [entryView, setEntryView] = useState("none");
    const [studentName, setStudentName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [bedNo, setBedNo] = useState("");
    const [Class, setClass] = useState(0);
    const [entryStatus, setEntryStatus] = useState(0);
    const [academicYear, setacademic] = useState("");
    const [entrydate, setEntryDate] = useState(new Date().toISOString().slice(0, 10));
    const [view, setView] = useState("none");
    const [viewStock,setViewStock]=useState([])
    const [editIndex,setEditIndex]=useState(null)
    const [pdfstate,setpdfstate]=useState(false)
    const [pdfdata,setPDFdata]=useState([])

    useEffect(() => {
      if (props.view==="block" && props.data.length>0) {
          setView("block")
      }
      else{
          setView("none")
      }
    }, [props.view,props.data]);

    useEffect(()=>{
        setViewStock(props.data)
    },[props.data])


    const clearTable = () => {
        setViewStock([]);
      };

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
            width: "40%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            fontSize:'12',
            marginLeft:'10px'
          },
          qty: {
            width: "60%",
            fontSize:'12',
            marginRight:'10px'   
           
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
            width: "40%",
            textAlign: "center",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            backgroundColor: "azure",
            fontSize:'10px',
            fontWeight: "extrabold",
            color:'#00519C'
            
          },
          rowqty: {
            width: "60%",
            backgroundColor: "white",
            textAlign: "center",
            fontSize:'10px'
          },
          headerContainer: {
            marginTop: 10,
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
            marginTop: 15,
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
            marginTop:'355px',
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
      const MyDocument = ({ data }) => (
       
        
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/* <View style={styles.mainHeader}>
                        
                        
                    </View> */}
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
                    <View style={styles.formDetails}><Text> Hostel Receipt for Academic Year {data[0].current_academic_year} </Text></View> 
                    
                    <View style={styles.headerContainer}>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Registration Number:</Text>
                            <Text>{data[0].registration_no}</Text>
                        </View>
                        
                        
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Student's Year of Admission:</Text>
                            <Text>{data[0].admission_year}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Class:</Text>
                            <Text>{data[0].class}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Section:</Text>
                            <Text>{data[0].section}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Roll No:</Text>
                            <Text>{data[0].roll_no}</Text>
                        </View>
                        
                    </View>
                    <View style={styles.tableContainer}>
                    <View style={styles.container}>
                            <Text style={styles.description}>Title</Text>
                            <Text style={styles.qty}>Description</Text>

                        </View>
                        {/* Invoice Table Rows */}
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Name</Text>
                            <Text style={styles.rowqty}>{data[0].student_Name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Room No.</Text>
                            <Text style={styles.rowqty}>{data[0].room_no}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Bed No.</Text>
                            <Text style={styles.rowqty}>{data[0].bed_no}</Text>
                        </View>
                        
                        




                    </View>
                    <View style={styles.footer}>
                        
                        <Text style={styles.rightfooter}>AL-Hilal Official Signature</Text>
                    </View>


                </View>

            </Page>
        </Document>

      );
    

    const HandleSubmit=()=>{
        console.log(regNo)
        axios.post(`/api/v1/hostel/getAllCombinedHostelStudent`,{Class:props.Class,regNo:props.regNo,year:props.year},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
            setViewStock(res.data.result)
        })

    }
    const handaleUpdate = (e) => {
        e.preventDefault()
        if (entryStatus === 0) {
            axios.post("/api/v1/hostel/createhostelentry", {
                Class,
                academicYear,
                roomNo,
                bedNo,
                studentName,
                regNo,
                entrydate
            },{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    alert(res.data.msg+' for Student Reg. Id : '+ regNo);
                    setEditIndex(null)
                    setAllView("contents");
                    setStudentName("");
                    HandleSubmit()
                    setRegNo("");
                    setRoomNo("");
                    setBedNo("");
                    setClass(0);
                    setacademic("");
                    setEntryDate(new Date().toISOString().slice(0, 10));
                })
                .catch((err) => {
                    alert(err.response.data.msg);
                })
        }
        else {
            axios.post("/api/v1/hostel/updatehostelentry",{regNo,roomNo,bedNo,entrydate},{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    alert(res.data.msg+' for Student Reg. Id : '+ regNo);
                    setAllView("contents");
                    setEditIndex(null)
                    HandleSubmit()
                    setStudentName("");
                    setRegNo("");
                    setRoomNo("");
                    setBedNo("");
                    setClass(0);
                    setacademic("");
                    setEntryDate(new Date().toISOString().slice(0, 10));
                })
                .catch((err) => {
                    console.log(err)
                    alert(err.response.data.msg);
                })
        }
    }

    // const handleDelete = (regNo,roomNo) => {
    //     axios.post('/api/v1/hostel/deletehostelentry', {regNo,roomNo})
    //         .then((res) => {
    //             alert(res.data.msg+' for Student Reg. Id : '+ regNo);
    //             setAllView("contents");
    //             setEntryView("none");
    //             setStudentName("");
    //             setRegNo("");
    //             setRoomNo("");
    //             setBedNo("");
    //             setClass(0);
    //             setacademic("");
    //             setEntryDate(new Date().toISOString().slice(0, 10));
    //             if(view==="block"){
    //                 setView("none");
    //             }
    //         })
    //         .catch((err) => {
    //             alert(err.response.msg);
    //         })
    //
    // }
    const handaleClick = (data,index) => {
        const dataArray=[data]
        setPDFdata(dataArray)
        setEditIndex(index)
        setEntryView("contents");
        setStudentName(data.student_Name);
        setRegNo(data.registration_no);
        setClass(data.class);
        setacademic(data.current_academic_year);
        setpdfstate(true)
        console.log(data)

        if(data.hostelentry===1){
            // const rgi=data.registration_no
            setEntryStatus(1)
            // axios.post('/api/v1/hostel/gethostelentry',{regNo:rgi}).then(res=>{
            //     setRoomNo(res.data.result[0].room_no)
            //     setBedNo(res.data.result[0].bed_no)
            //     setEntryDate(res.data.result[0].entry_date.slice(0,10))
            // })
                setRoomNo(data.room_no)
                setBedNo(data.bed_no)
                setEntryDate(data.entry_date.slice(0,10))

        }else{
            setEntryStatus(0)
        }


    }
    const handaleCancel = () => {
        setEditIndex(null)
        setpdfstate(false)
        setPDFdata([])
        setAllView("contents");
        setEntryView("none");
        setStudentName("");
        setRegNo("");
        setRoomNo("");
        setBedNo("");
        setClass(0);
        setacademic("");
        setEntryStatus(0);
        setEntryDate(new Date().toISOString().slice(0, 10));
    }

    return(
        
                <div style={{display:view}} >
                    <table className="table-60" >
                        <thead style={{display:allView}}>
                        <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                        <tr>
                            <th>Entry Id</th>
                            <th>Hostel Entry</th>
                            <th>Class</th>
                            <th>Student Name</th>
                            <th>Academic Year</th>
                            <th>Section</th>
                            <th>Roll</th>
                            <th>Registration No</th>
                            <th>Room No.</th>
                            <th>Bed No.</th> 
                            <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody style={{display:allView}}>
                        {
                            viewStock.map((data,idx)=> {
                                return(

                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td><input type='checkbox'
                                                   checked={data.hostelentry === 1 ? true : false}></input></td>
                                                   <td>{data.class}</td>
                                                   
                                        <td>{data.student_Name}</td>
                                        <td>{data.current_academic_year}</td>
                                        <td>{data.section}</td>
                                        <td>{data.roll_no}</td>
                                        <td>{data.registration_no}</td>
                                        <td>{idx!==editIndex ? data.room_no :(
                                            <div>
                                                                <select onChange={(e) => setRoomNo(e.target.value)} value={roomNo}>
                                                                    <option>All</option>
                                                                    {props.room.map((data, index) => (
                                                                        <option value={data.room_no} key={index}>
                                                                            {data.room_no}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                        )}</td>
                                        <td>{idx!==editIndex ? data.bed_no : (
                                            <input type='text' placeholder="Bed No" value={bedNo}
                                                           onChange={(e) => setBedNo(e.target.value)}/>
                                        )}</td>
                                        
                                        <td>{idx!==editIndex ?
                                            ( <button className='dashboard-btn btn-warning'
                                                    onClick={() => handaleClick(data,idx)}>Hostel Entry
                                            </button>):(<>
                                                <button className="dashboard-btn btn-warning" onClick={handaleUpdate}>Update</button>
                                                    {/* <button className="dashboard-btn btn-warning" onClick={()=>handleDelete(regNo,roomNo)}>Delete</button> */}
                                                    <button  className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>
                                                    { pdfstate && <button className='dashboard-btn fix-width-pdf pdf-btn' style={{background:'lightsalmon',color:'white',marginBottom:'8px',float:'right'}}>
                                    <PDFDownloadLink document={<MyDocument data={pdfdata}/>} fileName={"Hostel_Admission_Report_"+regNo+".pdf"} >
                                        {({ blob, url, loading, error }) => (loading ? 'Loading..' : 'Download')}
                                    </PDFDownloadLink></button>}
                                                </>
                                            )}
                                        </td>
                                        <></>

                                    </tr>

                                )

                            })
                        }


                        </tbody>
                    {/*    <thead style={{display:entryView}} id='hidden-table-60'>*/}
                    {/*    <tr>*/}
                    {/*        <th>Student Name</th>*/}
                    {/*        <th>Class</th>*/}
                    {/*        <th>Registration No</th>*/}
                    {/*        <th>Academic Year</th>*/}
                    {/*        <th>Room No</th>*/}
                    {/*        <th>Bed No</th>*/}
                    {/*        <th>Hostel Entry Date</th>*/}
                    {/*        <th>Actions</th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody style={{display:entryView}}>*/}
                    {/*    <tr>*/}
                    {/*        <td>{studentName}</td>*/}
                    {/*        <td>{Class}</td>*/}
                    {/*        <td>{regNo}</td>*/}
                    {/*        <td>{academicYear}</td>*/}
                    {/*        <td>*/}
                    {/*            <div>*/}
                    {/*                <select onChange={(e) => setRoomNo(e.target.value)} value={roomNo}>*/}
                    {/*                    <option>All</option>*/}
                    {/*                    {props.room.map((data, index) => (*/}
                    {/*                        <option value={data.room_no} key={index}>*/}
                    {/*                            {data.room_no}*/}
                    {/*                        </option>*/}
                    {/*                    ))}*/}
                    {/*                </select>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td><input type='text' placeholder="Bed No" value={bedNo}*/}
                    {/*                   onChange={(e) => setBedNo(e.target.value)}/></td>*/}
                    {/*        */}
                    {/*        <td><input type='date' placeholder="Entry Date" value={entrydate}*/}
                    {/*                   onChange={(e) => setEntryDate(e.target.value)} readOnly/></td>*/}
                    {/*        <td>*/}
                    {/*            <button className="dashboard-btn btn-warning" onClick={handaleUpdate}>Update</button>*/}
                    {/*            /!* <button className="dashboard-btn btn-warning" onClick={()=>handleDelete(regNo,roomNo)}>Delete</button> *!/*/}
                    {/*            <button  className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    </table>
                    {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}
                </div>
            
       
    )
}

export default HostelEntry;