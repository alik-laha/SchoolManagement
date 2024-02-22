import {useEffect, useState} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Document, Page, Text, View,PDFDownloadLink,StyleSheet,Image } from '@react-pdf/renderer';
import logo from '../../Home/logo_ahm.jpg'


const MasterStudentViewUpdate = (props) => {
    const currDate = new Date().toLocaleDateString();
    const [view,setView]=useState('none');
    const [masterStudent,setMasterStudent]=useState([]);
    const [updateView,setUpdateView]=useState("none")

    const [name, setName] = useState('');
    const [adharNo, setAdharNo] = useState('');
    const [sex, setSex] = useState('');
    const [stream, setStream] = useState('');
    const [religion, setReligion] = useState('');
    const [dob, setDob] = useState('');
    const [cast, setCast] = useState('');
    const [physicallyChallenged, setPhysicallyChallenged] = useState(0);
    const [orphanage, setOrphanage] = useState(0);
    const [fatherName, setFatherName] = useState('');
    const [fatherQualification, setFatherQualification] = useState('');
    const [fatherOcupation, setFatherOcupation] = useState('');
    const [fatherMonthlyIncome, setFatherMonthlyIncome] = useState('');
    const [fatherContactNo, setFatherContactNo] = useState(0);
    const [motherName, setMotherName] = useState('');
    const [motherQualification, setMotherQualification] = useState('');
    const [motherOcupation, setMotherOcupation] = useState('');
    const [motherMonthlyIncome, setMotherMonthlyIncome] = useState('');
    const [motherContactNo, setMotherContactNo] = useState('');
    const [guardianName, setGuardianName] = useState('');
    const [relationship, setRelationship] = useState('');
    const [guardianContactNo, setGuardianContactNo] = useState('');
    const [address, setAddress] = useState('');
    const [pinNo, setPinNo] = useState('');
    const [bspId, setBspId] = useState('');
    const [applyClass, setApplyClass] = useState('');
    const [admissionYear, setAdmissionYear] = useState('');
    const [admissonDate, setAdmissonDate] = useState(new Date().toISOString().slice(0, 10));
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [bankAcountNo, setBankAcountNo] = useState('');
    const [brunch, setBrunch] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const[allView,setAllview]=useState("block")
    const[releaseDate,setReleaseDate]=useState("");
    const[rdonly,setRdonly]=useState(false);
    const [readmit,setReadmit]=useState("none");
    // const [popup,setPopup]=useState("none");
    const [regNo,setRegNo]=useState(null);
    const [readmitClass,setReadmitClass]=useState(0);
    const [readmitAcademicYear,setReadmitAcademicYear]=useState(0);
    const [pdfdata,setPDFdata]=useState([])
    const [pdfstate,setpdfstate]=useState(false)

    


    useEffect(()=>{

        const today = new Date();
        const birthDate = new Date(dob);

    const ageYears = differenceInYears(today, birthDate);
    
        setAge(ageYears)
    },[dob])

    useEffect(()=>{
        const admission_date = new Date(admissonDate);
        setAdmissionYear(admission_date.getFullYear())
    },[admissonDate])

    const differenceInYears = (today,birthDate) => {
        
        
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        console.log(age_now);
        return age_now;
      }


    useEffect(() => {
       if(props.view==="block" && props.View40==="block"){
                setView("block");
            }
            else {
                setView("none");
            }
    }, [props.view,props.View40,props.data]);
    useEffect(() => {
       setMasterStudent(props.data);

    }, [props.data]);

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
                    <View style={styles.formDetails}><Text> Admission Receipt for Admission Year {data[0].admisson_year} </Text></View> 
                    
                    <View style={styles.headerContainer}>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Registration Number:</Text>
                            <Text>{data[0].registration_no}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Applied For Class:</Text>
                            <Text>{data[0].applied_class}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Applied For Stream:</Text>
                            <Text>{data[0].stream}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Admission Year:</Text>
                            <Text>{data[0].admisson_year}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Date of Admission:</Text>
                            <Text>{data[0].admisson_date.slice(0,10)}</Text>
                        </View>
                        
                    </View>
                    <View style={styles.tableContainer}>
                        {/* Invoice Table Header */}
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
                            <Text style={styles.rowdescription}>Gender</Text>
                            <Text style={styles.rowqty}>{data[0].sex}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Religion</Text>
                            <Text style={styles.rowqty}>{data[0].religion}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Date of Birth</Text>
                            <Text style={styles.rowqty}>{data[0].dob!== null ? data[0].dob.slice(0,10): ''}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Cast</Text>
                            <Text style={styles.rowqty}>{data[0].cast}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Blood Group</Text>
                            <Text style={styles.rowqty}>{data[0].blood_group}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Address</Text>
                            <Text style={styles.rowqty}>{data[0].address}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Pin No.</Text>
                            <Text style={styles.rowqty}>{data[0].pin_no}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>B.S.P Id</Text>
                            <Text style={styles.rowqty}>{data[0].bsp_id}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Physically Challenged</Text>
                            <Text style={styles.rowqty}>{data[0].physically_challenged == 0 ? "No" : "Yes"}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Orphanage</Text>
                            <Text style={styles.rowqty}>{data[0].orphanage == 0 ? "No" : "Yes"}</Text>
                        </View>
                        {"\n"}
                        <View style={styles.row}>
                            <Text style={styles.blankrow}></Text>
                            
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Guardian Name</Text>
                            <Text style={styles.rowqty}>{data[0].guardian_name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>RelationShip</Text>
                            <Text style={styles.rowqty}>{data[0].relationship}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Gurdian Contact</Text>
                            <Text style={styles.rowqty}>{data[0].guardian_contact}</Text>
                        </View>
                        
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Father Name</Text>
                            <Text style={styles.rowqty}>{data[0].father_name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Father Contact</Text>
                            <Text style={styles.rowqty}>{data[0].father_contact}</Text>
                        </View>
                        
                        

                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Mother Name</Text>
                            <Text style={styles.rowqty}>{data[0].mother_name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Mother Contact</Text>
                            <Text style={styles.rowqty}>{data[0].mother_contact}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.blankrow}></Text>
                            
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Aadhar Number</Text>
                            <Text style={styles.rowqty}>{data[0].adhar_no ?('XXXXXXXX'.concat(data[0].adhar_no.substring(8,12))):('')}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Bank Account Number</Text>
                            <Text style={styles.rowqty}>{data[0].acount_no}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Bank IFSC Number</Text>
                            <Text style={styles.rowqty}>{data[0].ifsc}</Text>
                        </View>
                        




                    </View>s



                </View>

            </Page>
        </Document>

      );
   
      
      

    const dialog = document.getElementById('myDialog-master-update');
    const closeDialogButton = document.getElementById('closeDialog-master-update');
    if(closeDialogButton){
        closeDialogButton.addEventListener('click', () => {
            dialog.close();
            setUpdateView('block')
          });
    }
    const clearTable = () => {
        if(updateView==='none')
        setMasterStudent([]);
      };

    const Handleedit=(item)=>{
        const dataArray=[item]
        setPDFdata(dataArray)
        setAllview("none")
        setUpdateView("block")
        setpdfstate(true)

        if(item.student_Name!=='')
        {
            setName(item.student_Name);
        }
        else{
            setName('');
        }
        if(item.adhar_no!=='')
        {
            setAdharNo(item.adhar_no);
        }
        else{
            setAdharNo('');
        }
        if(item.sex!=='')
        {
            setSex(item.sex);
        }
        else{
            setSex('');
        }
        if(item.stream!=='')
        {
            setStream(item.stream);
        }
        else{
            setStream('');
        }
        if(item.religion!=='')
        {
            setReligion(item.religion);
        }
        else{
            setReligion('');
        }
        if( item.dob!=null  )
        {
            setDob(item.dob.slice(0, 10))
        }
        else{
            setDob('');
        }
        if(item.cast!=='')
        {
            setCast(item.cast);
        }
        else{
            setCast('');
        }
        if(item.physically_challenged!=='' )
        {
            setPhysicallyChallenged(item.physically_challenged);
        }
        else{
            setPhysicallyChallenged(0);
        }
        if(item.orphanage!=='')
        {
            setOrphanage(item.orphanage);
        }
        else{
            setOrphanage(0);
        }
        if(item.father_name!=='')
        {
            setFatherName(item.father_name);
        }
        else{
            setFatherName('');
        }
        if(item.father_qualification!=='')
        {
            setFatherQualification(item.father_qualification);
        }
        else{
            setFatherQualification('');
        }
        if(item.father_ocupation!=='')
        {
            setFatherOcupation(item.father_ocupation);
        }
        else{
            setFatherOcupation('');
        }
        if(item.father_monthlyIncome!=='' )
        {
            setFatherMonthlyIncome(item.father_monthlyIncome);
        }
        else{
            setFatherMonthlyIncome('');
        }
        if(item.father_contact!=='' )
        {
            setFatherContactNo(item.father_contact);
        }
        else{
            setFatherContactNo('');
        }
        if(item.mother_name!=='' )
        {
            setMotherName(item.mother_name);
        }
        else{
            setMotherName('');
        }
        if(item.mother_qualification!=='')
        {
            setMotherQualification(item.mother_qualification);
        }
        else{
            setMotherQualification('');
        }
        if(item.mother_ocupation!=='')
        {
            setMotherOcupation(item.mother_ocupation);
        }
        else{
            setMotherOcupation('');
        }
        if(item.mother_monthlyIncome!=='')
        {
            setMotherMonthlyIncome(item.mother_monthlyIncome);
        }
        else{
            setMotherMonthlyIncome('');
        }
        if(item.mother_contact!=='null')
        {
            setMotherContactNo(item.mother_contact);
        }
        else{
            setMotherContactNo(0);
        }
        if(item.guardian_name!=='null')
        {
            setGuardianName(item.guardian_name);
        }
        else{
            setGuardianName('');
        }
        if(item.relationship!=='')
        {
            setRelationship(item.relationship);
        }
        else{
            setRelationship('');
        }
        if(item.guardian_contact!=='')
        {
            setGuardianContactNo(item.guardian_contact);
        }
        else{
            setGuardianContactNo('');
        }
        if(item.address!=='')
        {
            setAddress(item.address);
        }
        else{
            setAddress('');
        }
        if(item.pin_no!=='')
        {
            setPinNo(item.pin_no);
        }
        else{
            setPinNo('');
        }
        if(item.bsp_id!=='')
        {
            setBspId(item.bsp_id);
        }
        else{
            setBspId('');
        }
        if(item.applied_class!=='')
        {
            setApplyClass(item.applied_class);
        }
        else{
            setApplyClass('');
        }
        if(item.admisson_year!=='')
        {
            setAdmissionYear(item.admisson_year);
        }
        else{
            setAdmissionYear('');
        }
        if(item.admisson_date!=='')
        {
            setAdmissonDate(item.admisson_date.slice(0, 10));
        }
        else{
            setAdmissonDate('');
        }
        if(item.age!=='')
        {
            setAge(item.age);
        }
        else{
            setAge('');
        }
        if(item.acount_no !=="undefined"){
            setBankAcountNo(item.acount_no);
        }
        else{
            setBankAcountNo('')
        }
        setBloodGroup(item.blood_group);
        
        setBrunch(item.branch);
        setIfscCode(item.ifsc);
        setRegNo(item.registration_no);
        if(item.release_date!==null && item.release_date!=='' && item.release_date!==undefined){
            setReleaseDate(item.release_date.slice(0, 10));
            setRdonly(true)
            setReadmit('block')
        }else{
            setReleaseDate('');
            setRdonly(false)
            setReadmit('none')
        }
       
        console.log(item)
    }

    const handleReadmisson=(e)=>{
        e.preventDefault();
       //setPopup("block")
        //setUpdateView("none")
        dialog.showModal();
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log(dob)
        const data = {
            name,
            regNo,
            adharNo,
            sex,
            stream,
            religion,
            dob,
            cast,
            physicallyChallenged,
            orphanage,
            fatherName,
            fatherQualification,
            fatherOcupation,
            fatherMonthlyIncome,
            fatherContactNo,
            motherName,
            motherQualification,
            motherOcupation,
            motherMonthlyIncome,
            motherContactNo,
            guardianName,
            relationship,
            guardianContactNo,
            address,
            pinNo,
            bspId,
            applyClass,
            admissionYear,
            admissonDate,
            age,
            bloodGroup,
            bankAcountNo,
            brunch,
            ifscCode,
            releaseDate
        }
        axios.post("/api/v1/student/updatestudent",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                if(releaseDate){
                    axios.post("/api/v1/hostel/deletehostelentrybyregno",{regNo},{headers:{"Authorization":localStorage.getItem("token")}})
                        .then((res)=>{
                            alert('Student Details Edited Successfully')
                            console.log(res.data);
                            setAllview("block")
                            setUpdateView("none")
                            setView('none')
                            setName('');
                            setAdharNo('');
                            setSex('');
                            setStream('')
                            setReligion('');
                            setDob('');
                            setCast('');
                            setPhysicallyChallenged(0);
                            setOrphanage(0);
                            setFatherName('');
                            setFatherQualification('');
                            setFatherOcupation('');
                            setFatherMonthlyIncome(0);
                            setFatherContactNo(0);
                            setMotherName('');
                            setMotherQualification('');
                            setMotherOcupation('');
                            setMotherMonthlyIncome(0);
                            setMotherContactNo(0);
                            setGuardianName('');
                            setRelationship('');
                            setGuardianContactNo('');
                            setAddress('');
                            setPinNo('');
                            setBspId('');
                            setApplyClass('');
                            setAdmissionYear(new Date().getFullYear());
                            setAdmissonDate(new Date().toISOString().slice(0, 10));
                            setAge('');
                            setBloodGroup('');
                            setBankAcountNo(0);
                            setBrunch('');
                            setIfscCode('');
                            setRegNo('');
                            setReleaseDate("");
                        }).catch((err)=>{
                            
                            console.log(err);
                        })
                }
                else{
                    alert('Student Details Edited Successfully')
                    setAllview("block")
        setUpdateView("none")
                    setView('none')
                }
            })
            .catch((err)=>{
                console.log(err)
                if(err.response.data.err.errno===1062){
                    alert(`Aadhar No. - ${adharNo} already exists`)
                }
                console.log(err);
            })

    }
    const handaleDelete=(regNo,name)=>{
        setAllview("block")
        setUpdateView("none")
        axios.post("/api/v1/student/deletemasterstudent",{regNo},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
        axios.post("/api/v1/student/deletestudent",{regNo},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                axios.post("/api/v1/hostel/deletehostelentrybyregno",{regNo},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
                    // alert('Student : '+ name + ' Deleted Successfully' )
                    console.log(res.data);
                    setView('none')
                    
                })
                alert('Student : '+ name + ' Deleted Successfully' )
                    console.log(res.data);
                    setView('none')
               
            })
            .catch((err)=>{
                console.log(err);
            })
            })
            .catch((err)=>{
                console.log(err);
            })
        setName('');
        setAdharNo('');
        setSex('');
        setStream('')
        setReligion('');
        setDob('');
        setCast('');
        setPhysicallyChallenged(0);
        setOrphanage(0);
        setFatherName('');
        setFatherQualification('');
        setFatherOcupation('');
        setFatherMonthlyIncome(0);
        setFatherContactNo(0);
        setMotherName('');
        setMotherQualification('');
        setMotherOcupation('');
        setMotherMonthlyIncome(0);
        setMotherContactNo(0);
        setGuardianName('');
        setRelationship('');
        setGuardianContactNo('');
        setAddress('');
        setPinNo('');
        setBspId('');
        setApplyClass('');
        setAdmissionYear('');
        setAdmissonDate(new Date().toISOString().slice(0, 10));
        setAge('');
        setBloodGroup('');
        setBankAcountNo(0);
        setBrunch('');
        setIfscCode('');
        setRegNo('');
        setReleaseDate("");
    }
    const handaleCancel=()=>{
        setpdfstate(false)
        setPDFdata([])
    setAllview("block")
        setUpdateView("none")

        setName('');
        setAdharNo('');
        setSex('');
        setStream('')
        setReligion('');
        setDob('');
        setCast('');
        setPhysicallyChallenged(0);
        setOrphanage(0);
        setFatherName('');
        setFatherQualification('');
        setFatherOcupation('');
        setFatherMonthlyIncome(0);
        setFatherContactNo(0);
        setMotherName('');
        setMotherQualification('');
        setMotherOcupation('');
        setMotherMonthlyIncome(0);
        setMotherContactNo(0);
        setGuardianName('');
        setRelationship('');
        setGuardianContactNo('');
        setAddress('');
        setPinNo('');
        setBspId('');
        setApplyClass('');
        setAdmissionYear('');
        setAdmissonDate(new Date().toISOString().slice(0, 10));
        setAge('');
        setBloodGroup('');
        setBankAcountNo(0);
        setBrunch('');
        setIfscCode('');
        setRegNo('');
        setReleaseDate("");
    }

    const handleReadmit=(e)=>{
        e.preventDefault()
        
        const data={
            regNo,
            name,
            Class:readmitClass,
            admisson:admissionYear,
            year:readmitAcademicYear
        }
        axios.post("/api/v1/student/readmitstudent",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                alert('Student Re-Admitted Successfully')
                display.close();
                //setPopup("none")
                setUpdateView("none")
                setAllview("block")
                setView('none')
            })
            .catch((err)=>{
                console.log(err)
            })

    }
    // const handleReadmitCancel=(e)=>{
    //     e.preventDefault()
        
    //     setPopup("none")
    //     setUpdateView("block")
    // }


    return(
        <div style={{display: view}}>
            <div style={{display:allView}}>
            {/* <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button> */}
               <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn btn-warning excel-btn clear-gradient"
                table="master-student-view"
                filename={"Student_Master_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
            <table className="table-60" >
                <thead>
                <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                <tr>
                    <th>Sl. No.</th>
                    
                    <th>Student Name</th>
                    <th>Registration No</th>
                    <th>Active Status</th>
                    <th>Applied Class</th>
                    <th>Year of Admission</th>
                    
                    
                    <th>Admisson Date</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody>
                {
                    masterStudent.map((item, index) => {
                        
                        return (
                           
                            <tr key={index}>
                                <td>{index+1}</td>
                                
                                <td>{item.student_Name}</td>
                                <td>{item.registration_no}</td>
                                <td><input type='checkbox' checked={item.active === 1 ? true : false}></input></td>
                                <td>{convertToRoman(item.applied_class)}</td>
                                <td>{item.admisson_year}</td>
                                
                                
                                <td>{item.admisson_date.slice(0, 10)}</td>
                                <td>
                                    <button className='dashboard-btn btn-warning fix-width' onClick={()=>Handleedit(item)}>Edit</button>
                                    <button onClick={() => {
                                        const confirmBox = window.confirm(
                                            "Do you really want to delete this Student: "+item.student_Name +"?"
                                        );
                                        if (confirmBox === true) {
                                            handaleDelete(item.registration_no,item.student_Name);
                                        }
                                    }}
                                    
                                     className="dashboard-btn btn-warning fix-width">Delete</button>
                                     
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                {masterStudent.length === 0 ? <div className="no-data">No Data Exists</div> : null}
            </div>
            {/* <div style={{display:popup}} className="dashbrd-40-colm special-25-div">
                <form>
                    <div>
                        <label>Admisson Class</label>
                        <input type={"number"} value={readmitClass} onChange={(e) => setReadmitClass(e.target.value)}/>
                    </div>
                    <div>
                        <label>Admisson Year</label>
                        <input type={"number"} value={readmitAcademicYear}
                               onChange={(e) => setReadmitAcademicYear(e.target.value)}/>
                    </div>
                    <span><button className="dashboard-btn btn-warning"
                                  onClick={handleReadmit}>Submit</button></span>
                    <button onClick={handleReadmitCancel}  className="dashboard-btn dashboard-btn-scss"> Cancel</button>
                </form>
            </div> */}


            <div style={{display: updateView}} className="dashbrd-40-colm special-25-div">
            <button style={{marginBottom:'8px'}}
            onClick={handaleCancel} className="dashboard-btn dashboard-btn-scss fix-width">Back</button>
            { pdfstate && <button className='dashboard-btn fix-width' style={{background:'lightsalmon',color:'white',marginBottom:'8px'}}>
                                    <PDFDownloadLink document={<MyDocument data={pdfdata}/>} fileName={"Student_Admission_Report_"+regNo+".pdf"} >
                                        {({ blob, url, loading, error }) => (loading ? 'Loading..' : 'Report')}
                                    </PDFDownloadLink></button>}
           
            <hr></hr>

                <form style={{display:'grid',color:'#3c8dbc',backgroundColor:'azure',boxShadow:'0 0 5px grey'}}>

                    <p style={{fontSize:'17px'}} className="customize-centre">Edit Student Details</p>
                    <p style={{fontSize:'17px'}}>Basic Details</p>
                    <dl class="dl-horizontal">
                    <dt><label>Student Name*</label></dt>
                    <dd> <input
                            className="read-only"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Student Name"
                            required={true}
                            readOnly
                        /></dd>

                        <dt><label>Gender*</label></dt>
                        <dd>  <select onChange={(e) => setSex(e.target.value)} required value={sex}>
                            <option value="">Gender</option>
                            <option value="male">
                                Male
                            </option>
                            <option value="female">
                                Female
                            </option>
                            <option value="other">
                                Other
                            </option>
                        </select></dd>

                        <dt><label>Religion*</label></dt>
                        <dd>  <select onChange={(e) => setReligion(e.target.value)} required value={religion}>
                            <option value="">Religion</option>
                            <option value="islam">
                                Islam
                            </option>
                            <option value="other">
                                Other
                            </option>
                        </select></dd>
                        <dt><label>Date of Birth*</label></dt>
                        <dd>  <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            placeholder="Date of Birth"
                            required={true}
                        /></dd>
                         <dt><label>Age*</label></dt>
                        <dd>  <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Age"
                            required={true} readOnly
                        /></dd>
                         <dt> <label>Cast*</label></dt>
                        <dd>  <select onChange={(e) => setCast(e.target.value)} required value={cast}>
                            <option value="">Cast</option>
                            <option value="gen">
                                General
                            </option>
                            <option value="obcA">
                                OBC-A
                            </option>
                            <option value="obcB">
                                OBC-B
                            </option>
                            <option value="sc">
                                SC
                            </option>
                            <option value="st">
                                ST
                            </option>
                            <option value="other">
                                Other
                            </option>
                        </select></dd>
                         <dt><label>Blood Group</label></dt>
                        <dd>    <input
                            type="text"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                            placeholder="Blood Group"
                        /></dd>
                         
                         <dt><label>Address*</label></dt>
                        <dd>   <textarea style={{height:'80px',rows:"3"}}
                            type="textarea"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            required={true}
                        /></dd>
                         <dt><label>Pin Number*</label></dt>
                        <dd>   <input
                            type="text"
                            value={pinNo}
                            onChange={(e) => setPinNo(e.target.value)}
                            placeholder="Pin Number"
                            required={true}
                        /></dd>
                        <dt><label>B.S.P. ID</label></dt>
                        <dd>   <input
                            type="text"
                            value={bspId}
                            onChange={(e) => setBspId(e.target.value)}
                            placeholder="B.S.P Id"
                        /></dd>
                        <dt><label>Physically Challenged</label></dt>
                        <dd>    <input type='checkbox'
                               onChange={(e) => e.target.checked === true ? setPhysicallyChallenged(1) : setPhysicallyChallenged(0)}
                               checked={physicallyChallenged}/></dd>
                        <dt><label>Orphanage Child</label></dt>
                        <dd>   <input type='checkbox'
                               onChange={(e) => e.target.checked === true ? setOrphanage(1) : setOrphanage(0)}
                               checked={orphanage}/></dd>

                    </dl>
                
                    <p style={{fontSize:'17px'}}>Guardian Details</p>
                    <dl class="dl-horizontal">
                    <dt><label>Guardian Name*</label></dt>
                        <dd>    <input
                            type="text"
                            value={guardianName}
                            onChange={(e) => setGuardianName(e.target.value)}
                            placeholder="Guardian Name"
                            required={true}
                        /></dd>
                        <dt><label>Relationship*</label></dt>
                        <dd>   <input
                            type="text"
                            value={relationship}
                            onChange={(e) => setRelationship(e.target.value)}
                            placeholder="relationship"
                            required={true}
                        /></dd>
                        <dt><label>Guardian Contact No*</label></dt>
                        <dd>    <input
                            type="text"
                            value={guardianContactNo}
                            onChange={(e) => setGuardianContactNo(e.target.value)}
                            placeholder="Guardian Contact No"
                            required={true}
                        /></dd>
                        <dt><label>Father Name</label></dt>
                        <dd>  <input
                            type="text"
                            value={fatherName}
                            onChange={(e) => setFatherName(e.target.value)}
                            placeholder="Father Name"
                        /></dd>
                        <dt><label>Father Qualification</label></dt>
                        <dd>  <input
                            type="text"
                            value={fatherQualification}
                            onChange={(e) => setFatherQualification(e.target.value)}
                            placeholder="Father Qualification"
                        /></dd>
                        <dt><label>Father Ocupation</label></dt>
                        <dd>    <input
                            type="text"
                            value={fatherOcupation}
                            onChange={(e) => setFatherOcupation(e.target.value)}
                            placeholder="Father Ocupation"
                        /></dd>
                        <dt><label>Father Contact No.</label></dt>
                        <dd>   <input
                            type="text"
                            value={fatherContactNo}
                            onChange={(e) => setFatherContactNo(e.target.value)}
                            placeholder="Father contact No"
                        /></dd>
                        <dt><label>Father Monthly Income</label></dt>
                        <dd> <input
                            type="text"
                            value={fatherMonthlyIncome}
                            onChange={(e) => setFatherMonthlyIncome(e.target.value)}
                            placeholder="Father Monthly Income"
                        /></dd>
                      <dt><label>Mother Name</label></dt>
                        <dd><input
                            type="text"
                            value={motherName}
                            onChange={(e) => setMotherName(e.target.value)}
                            placeholder="Mother Name"
                        /></dd>
                        <dt><label>Mother Qualification</label></dt>
                        <dd> <input
                            type="text"
                            value={motherQualification}
                            onChange={(e) => setMotherQualification(e.target.value)}
                            placeholder="Mother Qualification"
                        /></dd>
                        <dt><label>Mother Ocupation</label></dt>
                        <dd>    <input
                            type="text"
                            value={motherOcupation}
                            onChange={(e) => setMotherOcupation(e.target.value)}
                            placeholder="Mother Ocupation"
                        /></dd>
                        <dt><label>Mother Contact No.</label></dt>
                        <dd>    <input
                            type="text"
                            value={motherContactNo}
                            onChange={(e) => setMotherContactNo(e.target.value)}
                            placeholder="Mother contact No"
                        /></dd>
                        <dt><label>Mother Monthly Income</label></dt>
                        <dd> <input
                            type="text"
                            value={motherMonthlyIncome}
                            onChange={(e) => setMotherMonthlyIncome(e.target.value)}
                            placeholder="Mother Monthly Income"
                        /></dd>
                        
                    </dl>
                   

                    <p style={{fontSize:'17px'}}>Other Details</p>
                    <dl>
                        <dt><label>Aadhar Number</label></dt>
                        <dd> <input
                            type="text"
                            value={adharNo}
                            onChange={(e) => setAdharNo(e.target.value)}
                            placeholder="Adhar Number"
                            required={true}
                        /></dd>
                        <dt><label>Bank Account No.</label></dt>
                        <dd> <input
                            type="text"
                            value={bankAcountNo}
                            onChange={(e) => setBankAcountNo(e.target.value)}
                            placeholder="Bank Acount No"
                        /></dd>
                        <dt><label>Branch Name</label></dt>
                        <dd><input
                            type="text"
                            value={brunch}
                            onChange={(e) => setBrunch(e.target.value)}
                            placeholder="Branch"
                        /></dd>
                        
                        <dt><label>IFSC Code</label></dt>
                        <dd>  <input
                            type="text"
                            value={ifscCode}
                            onChange={(e) => setIfscCode(e.target.value)}
                            placeholder="Ifsc code"
                        /></dd>
                        


                        
                        
                        </dl>

                        <p style={{fontSize:'17px'}}>Other Details</p>
                        <dl>
                        <dt><label>Applied for Stream*</label></dt>
                        <dd> <select onChange={(e) => setStream(e.target.value)} required value={stream}>
                        <option value="">Stream</option>
                        <option value="Arts">
                            Arts
                        </option>
                        <option value="Commerce">
                            Commerce
                        </option>
                        <option value="Science">
                            Science
                        </option>
                        <option value="General">
                        General (Upto Secondary)
                        </option>
                    </select></dd>
                        <dt> <label>Applied Class*</label></dt>
                        <dd> <input
                            type="text"
                            className="read-only"
                            value={convertToRoman(applyClass)}
                            onChange={(e) => setApplyClass(e.target.value)}
                            placeholder="Applied Class"
                            required={true}
                            readOnly
                        /></dd>
                         <dt> <label>Admission Year*</label></dt>
                        <dd> <input
                            type="number"
                            className="read-only"
                            value={admissionYear}
                            onChange={(e) => setAdmissionYear(e.target.value)}
                            placeholder="Admission Year"
                            required={true}
                            readOnly
                        /></dd>
                        <dt> <label>Admission Date*</label></dt>
                        <dd>   <input
                            type="date"
                            className="read-only"
                            value={admissonDate}
                            onChange={(e) => setAdmissonDate(e.target.value)}
                            placeholder="Admission Date"
                            required={true}
                            readOnly
                        /></dd>
                        <dt><label>Release Date</label></dt>
                        <dd>    <input
                            type="date"
                            value={releaseDate}
                            onChange={(e) => setReleaseDate(e.target.value)} readOnly={rdonly}
                        /></dd>
                        <dd style={{display:readmit,width:'0px'}}>
                        <button className="dashboard-btn btn-warning" onClick={handleReadmisson}>Re-Admisson</button>
                    </dd>

                        
                        </dl>
                        

                 

                    

                    <span><button className="dashboard-btn dashboard-btn-scss" onClick={handleUpdate}>Submit</button></span>

                </form>
          
            </div>


            <table className="table-60" style={{display: 'none'}} id="master-student-view">
                <thead style={{display: 'contents'}}>

                <tr>
                    <th>Sl. No.</th>
                    <th>Registration No.</th>
                    <th>Applied Class</th>
                    <th>Applied Stream</th>
                    <th>Admission Year</th>
                    <th>Date of Admission</th>
                    
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Religion</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            <th>Cast</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                            <th>Pin No.</th>
                            <th>BSP ID</th>
                            <th>Physically Challenged</th>
                            <th>Orphanage</th>
                            <th>Guradian Name</th>
                            <th>Relationship with Student</th>
                            <th>Guardian Contact No.</th>
                            <th>Father's Name</th>
                            <th>Father's Qualification</th>
                            <th>Father's Occupation</th>
                            <th>Father's Contact No.</th>
                            <th>Father's Monthly Income</th>
                            <th>Mothers's Name</th>
                            <th>Mothers's Qualification</th>
                            <th>Mothers's Occupation</th>
                            <th>Mothers's Contact No.</th>
                            <th>Mothers's Monthly Income</th>
                            <th>Aadhar No.</th>
                            <th>Bank Account No.</th>
                            <th>Branch</th>
                            <th>IFSC</th>
                            
                        </tr>
                    </thead>
                     <tbody style={{display:'contents'}}>
                        {masterStudent.map((item,idx) => (
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{item.registration_no}</td>
                                <td>{convertToRoman(item.applied_class)}</td>
                                <td>{item.stream}</td>
                                <td>{item.admisson_year}</td>
                                <td>{item.admisson_date.slice(0,10)}</td>
                                
                                <td>{item.student_Name}</td>
                                <td>{item.sex}</td>
                                <td>{item.religion}</td>
                                <td>{item.dob===null ? item.dob:item.dob.slice(0,10)}</td>
                                <td>{item.age}</td>
                                <td>{item.cast}</td>
                                <td>{item.blood_group}</td>
                                <td>{item.address}</td>
                                <td>{item.pin_no}</td>
                                <td>{item.bsp_id}</td>
                                <td><input type='checkbox' checked={item.physically_challenged === 1 ? true : false}></input></td>
                                {/* <td>{item.physically_challenged}</td> */}
                                <td><input type='checkbox' checked={item.orphanage === 1 ? true : false}></input></td>
                                {/* <td>{item.orphanage}</td> */}

                                <td >{item.guardian_name}</td>
                                <td >{item.relationship}</td>
                                <td >{item.guardian_contact}</td>
                                <td >{item.father_name}</td>
                                <td >{item.father_qualification}</td>
                                <td >{item.father_ocupation}</td>
                                <td>{item.father_contact}</td>
                                <td>{item.father_monthlyIncome}</td>
                                <td >{item.mother_name}</td>
                                <td >{item.mother_qualification}</td>
                                <td >{item.mother_ocupation}</td>
                                <td>{item.mother_contact}</td>
                                <td>{item.mother_monthlyIncome}</td>

                                <td >{item.adhar_no}</td>
                                <td >{item.acount_no}</td>
                                <td >{item.branch}</td>
                                <td >{item.ifsc}</td>
                            </tr>
                        ))}
                    </tbody> 
                    </table>


            <dialog id="myDialog-master-update" class="dashboard-modal">

                <button id="closeDialog-master-update"  class="dashboard-modal-close-btn ">X </button>

                <form style={{display:'grid',color:'#3c8dbc'}}>
                <p style={{fontSize:'17px',textAlign:'center',color:'red'}}>Re-Admission Details</p>
                <dl class="modal-padding">

                    <dt class="modal-width"><label>Re-admisson Class</label></dt>
                    <dd class="modal-width">
                        <select onChange={(e) => setReadmitClass(parseInt(e.target.value))} required value={readmitClass}>
                        <option value="">Class</option>
                        <option value="1">
                        I
                        </option>
                        <option value="2">
                            II
                        </option>
                        <option value="3">
                            III
                        </option>
                        <option value="4">
                            IV
                        </option>
                        <option value="5">
                            V
                        </option>
                        <option value="6">
                            VI
                        </option>
                        v
                        <option value="7">
                            VII
                        </option>
                        
                        <option value="8">
                            VIII
                        </option>
                        <option value="9">
                            IX
                        </option>
                        <option value="10">
                            X
                        </option>
                        <option value="11">
                            XI
                        </option>
                        <option value="12">
                            XII
                        </option>
                        
                    </select> 
                        {/* <input type={"number"} value={readmitClass} onChange={(e) => setReadmitClass(e.target.value)}/> */}
                        </dd>
                    <dt class="modal-width"><label>Re-admisson Year</label></dt>
                    <dd class="modal-width">  <input type={"number"} value={readmitAcademicYear}
                               onChange={(e) => setReadmitAcademicYear(e.target.value)}/></dd>   
                        
                        </dl>
                   
                    <span style={{display:'table',margin:'0 auto'}}><button className="dashboard-btn btn-warning"
                                  onClick={handleReadmit}>Submit</button></span>
                    {/* <button onClick={handleReadmitCancel}  className="dashboard-btn dashboard-btn-scss"> Cancel</button> */}
                </form>
               
                {/* <!-- Add more elements as needed --> */}
            </dialog>


        </div>

    )
}
export default MasterStudentViewUpdate;