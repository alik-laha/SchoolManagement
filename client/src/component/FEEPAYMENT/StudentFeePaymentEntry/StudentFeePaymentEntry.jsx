import {useEffect, useState} from "react";
import axios from "axios";
import { Document, Page, Text, View,PDFDownloadLink,StyleSheet,Image } from '@react-pdf/renderer';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import logo from '../../Home/logo_ahm.jpg'


const StudentFeePaymentEntry = (props) => {
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [FeeType,setFeeType]=useState("")
    const [tableView,setTableView]=useState("block")
    const [monthlyView,setMonthlyView]=useState("none")
    const [NewadmissionView,setNewadmissionView]=useState("none")
    const [readmissionView,setReadmissionView]=useState("none")
    const [regNo,setRegNo]=useState("")
    const [Class,setClass]=useState(0)
    const [year,setYear]=useState(0)

    const [AdmissonFee,setAdmissonFee]=useState(0)
    const [hostelCharge,setHostelCharge]=useState(0)
    const [TutionFee,setTutionFee]=useState(0)
    const [CautionMoney,setCautionMoney]=useState(0)
    const [ExaminationFee,setExaminationFee]=useState(0)
    const [GamesSportsExicursion,setGamesSportsExicursion]=useState(0)
    const [ElectricCharge,setElectricCharge]=useState(0)
    const [LibraryFees,setLibraryFees]=useState(0)
    const [ComputerFees,setComputerFees]=useState(0)
    const [DevelopmentFees,setDevelopmentFees]=useState(0)
    const [Miscellaneous,setMiscellaneous]=useState(0)
    const [LaundryCharge,setLaundryCharge]=useState(0)
    const [MedicalCharge,setMedicalCharge]=useState(0)
    const [Uniform,setUniform]=useState(0)
    const [SessionCharge,setSessionCharge]=useState(0)
    const [BedFee,setBedFee]=useState(0)
    const [Total,setTotal]=useState(0)

    const [EditAdmissonFee,setEditAdmissonFee]=useState(0)
    const [EdithostelCharge,setEditHostelCharge]=useState(0)
    const [EditTutionFee,setEditTutionFee]=useState(0)
    const [EditCautionMoney,setEditCautionMoney]=useState(0)
    const [EditExaminationFee,setEditExaminationFee]=useState(0)
    const [EditGamesSportsExicursion,setEditGamesSportsExicursion]=useState(0)
    const [EditElectricCharge,setEditElectricCharge]=useState(0)
    const [EditLibraryFees,setEditLibraryFees]=useState(0)
    const [EditComputerFees,setEditComputerFees]=useState(0)
    const [EditDevelopmentFees,setEditDevelopmentFees]=useState(0)
    const [EditMiscellaneous,setEditMiscellaneous]=useState(0)
    const [EditLaundryCharge,setEditLaundryCharge]=useState(0)
    const [EditMedicalCharge,setEditMedicalCharge]=useState(0)
    const [EditUniform,setEditUniform]=useState(0)
    const [EditSessionCharge,setEditSessionCharge]=useState(0)
    const [EditBedFee,setEditBedFee]=useState(0)
    const [EditTotal,setEditTotal]=useState(0)
    const [EditDate,setEditDate]=useState(new Date().toISOString().slice(0, 10))
    const[fine,setFine]=useState(0)
    const[fine_paid,setFine_paid]=useState(0)
    const[waiver,setWaiver]=useState(0)

    const [disableedit,setdisabledit]=useState(false)
    const [month,setMonth]=useState("")
    const [status,setStatus]=useState(0)
    const [pdfdata,setPDFdata]=useState([])
    const [pdfstate,setpdfstate]=useState(false)

    const [billDate,setBillDate]=useState(new Date().toISOString().slice(0, 10))
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
            fontSize:'11',
            marginLeft:'10px'
          },
          qty: {
            width: "20%",
            fontSize:'11',
            borderRightWidth: 1,
            marginRight:'10px'   
           
          },
          qty1: {
            width: "20%",
            fontSize:'11',
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
            color:'#00519C',
            marginLeft:'10px'
            
          },
          rowdescription1: {
            width: "40%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            fontSize:'11',
            marginLeft:'10px'
            
          },
          rowqty: {
            width: "20%",
            // backgroundColor: "white",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1,
            marginRight:'10px',
            backgroundColor: "azure",
            
          },
          rowqty1: {
            width: "20%",
            backgroundColor: "white",
            textAlign: "center",
            fontSize:'9px',
            marginRight:'10px' 
            
          },
          rowqty2: {
            width: "20%",
            // backgroundColor: "white",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1,
            marginRight:'10px',
            backgroundColor: "ivory",
            color:'red'
            
          },
          rowqty3: {
            width: "20%",
            backgroundColor: "#00c7a3",
            textAlign: "center",
            fontSize:'9px',
            borderRightWidth: 1,
            marginRight:'10px',
            
            color:'white'
            
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
            marginTop:'90px',
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

      const MyDocumentFee = ({ data }) => (

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

                        <View style={styles.formDetails}><Text>  Payment Receipt of {data[0].fee_type} Fee for Academic Year {data[0].year} </Text></View> 
                      
                        <View style={styles.headerContainer}>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Student Name:</Text>
                            <Text>{data[0].student_Name}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Registration Number:</Text>
                            <Text>{data[0].registration_no}</Text>
                        </View>
                        
                        
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Year of {data[0].fee_type}:</Text>
                            <Text>{data[0].year}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Class:</Text>
                            <Text>{convertToRoman(data[0].class)}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Section:</Text>
                            <Text>{data[0].section}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Roll No:</Text>
                            <Text>{data[0].roll_no}</Text>
                        </View>
                        <View style={styles.Mainbillto}>
                            <Text style={styles.billTo}>Date of Receipt:</Text>
                            <Text>{currDate}</Text>
                        </View>
                        
                         </View>
                         <View style={styles.tableContainer}>
                    <View style={styles.container}>
                            <Text style={styles.description}>Fee Sub Category</Text>
                            <Text style={styles.qty}>To Be Paid </Text>
                            <Text style={styles.qty}>Actual Paid </Text>
                            <Text style={styles.qty1}>Due Amount</Text>

                        </View>
                        {/* Invoice Table Rows */}
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Admission Fee</Text>
                            <Text style={styles.rowqty2}>{AdmissonFee}</Text>
                            <Text style={styles.rowqty}>{EditAdmissonFee}</Text>
                            <Text style={styles.rowqty1}>{AdmissonFee-EditAdmissonFee}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Hostel Charge</Text>
                            <Text style={styles.rowqty2}>{hostelCharge}</Text>
                            <Text style={styles.rowqty}>{EdithostelCharge}</Text>
                            <Text style={styles.rowqty1}>{hostelCharge-EdithostelCharge}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Tuition Fee</Text>
                            <Text style={styles.rowqty2}>{TutionFee}</Text>
                            <Text style={styles.rowqty}>{EditTutionFee}</Text>
                            <Text style={styles.rowqty1}>{TutionFee-EditTutionFee}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Caution Money</Text>
                            <Text style={styles.rowqty2}>{CautionMoney}</Text>
                            <Text style={styles.rowqty}>{EditCautionMoney}</Text>
                            <Text style={styles.rowqty1}>{CautionMoney-EditCautionMoney}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Examination Fee</Text>
                            <Text style={styles.rowqty2}>{ExaminationFee}</Text>
                            <Text style={styles.rowqty}>{EditExaminationFee}</Text>
                            <Text style={styles.rowqty1}>{ExaminationFee-EditExaminationFee}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Games & Sports</Text>
                            <Text style={styles.rowqty2}>{GamesSportsExicursion}</Text>
                            <Text style={styles.rowqty}>{EditGamesSportsExicursion}</Text>
                            <Text style={styles.rowqty1}>{GamesSportsExicursion-EditGamesSportsExicursion}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Electric Charge</Text>
                            <Text style={styles.rowqty2}>{ElectricCharge}</Text>
                            <Text style={styles.rowqty}>{EditElectricCharge}</Text>
                            <Text style={styles.rowqty1}>{ElectricCharge-EditElectricCharge}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Library Fees</Text>
                            <Text style={styles.rowqty2}>{LibraryFees}</Text>
                            <Text style={styles.rowqty}>{EditLibraryFees}</Text>
                            <Text style={styles.rowqty1}>{LibraryFees-EditLibraryFees}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Computer Fees</Text>
                            <Text style={styles.rowqty2}>{ComputerFees}</Text>
                            <Text style={styles.rowqty}>{EditComputerFees}</Text>
                            <Text style={styles.rowqty1}>{ComputerFees-EditComputerFees}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Development Fees</Text>
                            <Text style={styles.rowqty2}>{DevelopmentFees}</Text>
                            <Text style={styles.rowqty}>{EditDevelopmentFees}</Text>
                            <Text style={styles.rowqty1}>{DevelopmentFees-EditDevelopmentFees}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Miscelleneous Fees</Text>
                            <Text style={styles.rowqty2}>{Miscellaneous}</Text>
                            <Text style={styles.rowqty}>{EditMiscellaneous}</Text>
                            <Text style={styles.rowqty1}>{Miscellaneous-EditMiscellaneous}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Laundry Charge</Text>
                            <Text style={styles.rowqty2}>{LaundryCharge}</Text>
                            <Text style={styles.rowqty}>{EditLaundryCharge}</Text>
                            <Text style={styles.rowqty1}>{LaundryCharge-EditLaundryCharge}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Medical Charge</Text>
                            <Text style={styles.rowqty2}>{MedicalCharge}</Text>
                            <Text style={styles.rowqty}>{EditMedicalCharge}</Text>
                            <Text style={styles.rowqty1}>{MedicalCharge-EditMedicalCharge}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Uniform</Text>
                            <Text style={styles.rowqty2}>{Uniform}</Text>
                            <Text style={styles.rowqty}>{EditUniform}</Text>
                            <Text style={styles.rowqty1}>{Uniform-EditUniform}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Session Charge</Text>
                            <Text style={styles.rowqty2}>{SessionCharge}</Text>
                            <Text style={styles.rowqty}>{EditSessionCharge}</Text>
                            <Text style={styles.rowqty1}>{SessionCharge-EditSessionCharge}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Bed Charge</Text>
                            <Text style={styles.rowqty2}>{BedFee}</Text>
                            <Text style={styles.rowqty}>{EditBedFee}</Text>
                            <Text style={styles.rowqty1}>{BedFee-EditBedFee}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Fine(If Any)</Text>
                            <Text style={styles.rowqty2}>{fine}</Text>
                            <Text style={styles.rowqty}>{fine_paid}</Text>
                            <Text style={styles.rowqty1}>{fine-fine_paid}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Waiver </Text>
                            <Text style={styles.rowqty2}>-{waiver}</Text>
                            <Text style={styles.rowqty}>X</Text>
                            <Text style={styles.rowqty1}>X</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowdescription}>Summary Total </Text>
                            <Text style={styles.rowqty2}>{Total+fine}</Text>
                            <Text style={styles.rowqty}>{EditTotal+fine_paid}</Text>
                            <Text style={styles.rowqty1}>{(Total+fine)-(EditTotal+fine_paid+waiver)}</Text>
                        </View>
                        


                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.leftfooter}>Candidate and Guardian Signature</Text>
                        <Text style={styles.rightfooter}>AL-Hilal Official Signature</Text>
                    </View>
                      
                      
                      
                      </View>
                  </Page>
        </Document>

      );
    useEffect(() => {

        if(props.view==="block" && props.data.length>0){
            setView("block")
            setTableView("block")
            setMonthlyView("none")
            setNewadmissionView("none")
            setReadmissionView("none")

            setAdmissonFee(0)
            setHostelCharge(0)
            setTutionFee(0)
            setCautionMoney(0)
            setExaminationFee(0)
            setGamesSportsExicursion(0)
            setElectricCharge(0)
            setLibraryFees(0)
            setComputerFees(0)
            setDevelopmentFees(0)
            setMiscellaneous(0)
            setLaundryCharge(0)
            setMedicalCharge(0)
            setUniform(0)
            setSessionCharge(0)
            setBedFee(0)
            setTotal(0)
            setRegNo("")
            setClass(0)
            setYear(0)

            setEditAdmissonFee(0)
            setEditHostelCharge(0)
            setEditTutionFee(0)
            setEditCautionMoney(0)
            setEditExaminationFee(0)
            setEditGamesSportsExicursion(0)
            setEditElectricCharge(0)
            setEditLibraryFees(0)
            setEditComputerFees(0)
            setEditDevelopmentFees(0)
            setEditMiscellaneous(0)
            setEditLaundryCharge(0)
            setEditMedicalCharge(0)
            setEditUniform(0)
            setEditSessionCharge(0)
            setEditBedFee(0)
            setEditTotal(0)
            setEditDate(new Date().toISOString().slice(0, 10))
            //setdisabledit(false)
            setStatus(0)
            setBillDate(new Date().toISOString().slice(0, 10))
            setFine(0)
            setFine_paid(0)
            setWaiver(0)
        }
        
        else{
        
         //setData([])
         setView("none")
        }
       
    }, [props.view,props.data]);

    useEffect(() => {
        if(props.data.length>0){
            setFeeType(props.data[0].fee_type)
            setData(props.data)
        }
        else{
            setData([])
            //setView("block")
        }
    },[props.data])


    const handleClick=async(data)=>{

        const dataArray=[data]
        setPDFdata(dataArray)
        setpdfstate(true)
        if(FeeType==="Monthly"){
            setMonthlyView("block")
        }
        else if(FeeType==="New-Admisson"){
            setNewadmissionView("block")

        }
        else if(FeeType==="Re-Admisson"){
            setReadmissionView("block")
        }
        setTableView("none")

        setRegNo(data.registration_no)
        setClass(data.class)
        setYear(data.year)
        console.log(data)
        setBillDate(new Date().toISOString().slice(0, 10))
        setAdmissonFee(data.admission_fee)
        setHostelCharge(data.hostel_fee)
        setTutionFee(data.tution_fee)
        setCautionMoney(data.caution_fee)
        setExaminationFee(data.examination_fee)
        setGamesSportsExicursion(data.sports_fee)
        setElectricCharge(data.electric_fee)
        setLibraryFees(data.library_fee)
        setComputerFees(data.computer_fee)
        setDevelopmentFees(data.development_fee)
        setMiscellaneous(data.miscellaneous_fee)
        setLaundryCharge(data.laundry_fee)
        setMedicalCharge(data.madical_fee)
        setUniform(data.uniform_fee)
        setSessionCharge(data.session_fee)
        setBedFee(data.bed_fee)
        setTotal(data.total_fee)
       if(data.status===1) {
           const Data = {
               regNo: data.registration_no,
               Class: data.class,
               year: data.year
           }
           let cData
           let DATA
           if (FeeType === "New-Admisson") {
               await axios.post("/api/v1/fee/getnewadmissionfeeentryforupdate", Data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                   DATA = res.data.result[0]
                   setEditAdmissonFee(DATA.admission_fee)
                   setEditBedFee(DATA.bed_fee)
                   setEditTutionFee(DATA.tution_fee)
                   setEditCautionMoney(DATA.caution_fee)
                   setEditComputerFees(DATA.computer_fee)
                   setEditDevelopmentFees(DATA.development_fee)
                   setEditElectricCharge(DATA.electric_fee)
                   setEditExaminationFee(DATA.examination_fee)
                   setEditHostelCharge(DATA.hostel_fee)
                   setEditLaundryCharge(DATA.laundry_fee)
                   setEditLibraryFees(DATA.library_fee)
                   setEditMedicalCharge(DATA.madical_fee)
                   setEditMiscellaneous(DATA.miscellaneous_fee)
                   setEditSessionCharge(DATA.session_fee)
                   setEditGamesSportsExicursion(DATA.sports_fee)
                   setEditUniform(DATA.uniform_fee)
                   setStatus(DATA.status)
                   setEditDate(DATA.entry_date.slice(0, 10))
                   setBillDate(DATA.bill_date.slice(0, 10))
                   cData = DATA.entry_date.toString()
                   setFine(DATA.fine)
                   setFine_paid(DATA.fine_paid)
                   setWaiver(DATA.waiver)
               }).catch((err) => {
                   console.log(err)
               })
           } else if (FeeType === "Re-Admisson") {
               await axios.post("/api/v1/fee/getreadmissionfeeentryforupdate", Data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                   DATA = res.data.result[0]
                   setEditAdmissonFee(DATA.admission_fee)
                   setEditBedFee(DATA.bed_fee)
                   setEditTutionFee(DATA.tution_fee)
                   setEditCautionMoney(DATA.caution_fee)
                   setEditComputerFees(DATA.computer_fee)
                   setEditDevelopmentFees(DATA.development_fee)
                   setEditElectricCharge(DATA.electric_fee)
                   setEditExaminationFee(DATA.examination_fee)
                   setEditHostelCharge(DATA.hostel_fee)
                   setEditLaundryCharge(DATA.laundry_fee)
                   setEditLibraryFees(DATA.library_fee)
                   setEditMedicalCharge(DATA.madical_fee)
                   setEditMiscellaneous(DATA.miscellaneous_fee)
                   setEditSessionCharge(DATA.session_fee)
                   setEditGamesSportsExicursion(DATA.sports_fee)
                   setEditUniform(DATA.uniform_fee)
                   setStatus(DATA.status)
                   setEditDate(DATA.entry_date.slice(0, 10))
                   setBillDate(DATA.bill_date.slice(0, 10))
                   cData = DATA.entry_date.toString()
                   setFine(DATA.fine)
                   setFine_paid(DATA.fine_paid)
                   setWaiver(DATA.waiver)
               }).catch((err) => {
                   console.log(err)
               })
           }

           let currentDate = new Date().toISOString();
           let currentYear = currentDate.slice(0, 4);
           let currentMonth = currentDate.slice(5, 7);
           let currentDay = currentDate.slice(8, 10);
           let dbYear = cData.slice(0, 4);
           let dbMonth = cData.slice(5, 7);
           let dbDay = cData.slice(8, 10);

           if (dbYear < currentYear) {
               // The database date is in a previous year, so it is older
               setdisabledit(true);
           } else if (dbYear === currentYear) {
               // The database date is in the same year, so compare the months
               if (dbMonth < currentMonth) {
                   // The database date is in a previous month, so it is older
                   setdisabledit(true)
               } else if (dbMonth === currentMonth) {
                   // The database date is in the same month, so compare the days
                   if (dbDay < currentDay) {
                       // The database date is more than one day before the current date, so it is older
                       setdisabledit(true)
                   } else {
                       // The database date is not older than one day
                       setdisabledit(false);

                   }
               } else {
                   // The database date is in a future month, so it is not older
                   setdisabledit(false);
               }
           } else {
               // The database date is in a future year, so it is not older
               setdisabledit(false);
           }
       }

    }

    const handleCancel=()=>{
        setpdfstate(false)
        setPDFdata([])
        setMonthlyView("none")
        setNewadmissionView("none")
        setReadmissionView("none")
        setTableView("block")

        setAdmissonFee(0)
        setHostelCharge(0)
        setTutionFee(0)
        setCautionMoney(0)
        setExaminationFee(0)
        setGamesSportsExicursion(0)
        setElectricCharge(0)
        setLibraryFees(0)
        setComputerFees(0)
        setDevelopmentFees(0)
        setMiscellaneous(0)
        setLaundryCharge(0)
        setMedicalCharge(0)
        setUniform(0)
        setSessionCharge(0)
        setBedFee(0)
        setTotal(0)
        setRegNo("")
        setClass(0)
        setYear(0)

        setEditAdmissonFee(0)
        setEditHostelCharge(0)
        setEditTutionFee(0)
        setEditCautionMoney(0)
        setEditExaminationFee(0)
        setEditGamesSportsExicursion(0)
        setEditElectricCharge(0)
        setEditLibraryFees(0)
        setEditComputerFees(0)
        setEditDevelopmentFees(0)
        setEditMiscellaneous(0)
        setEditLaundryCharge(0)
        setEditMedicalCharge(0)
        setEditUniform(0)
        setEditSessionCharge(0)
        setEditBedFee(0)
        setEditTotal(0)
        setEditDate(new Date().toISOString().slice(0, 10))
        setdisabledit(false)
        setStatus(0)
        setBillDate(new Date().toISOString().slice(0, 10))
        setFine(0)
        setFine_paid(0)
        setWaiver(0)
    }

    useEffect(() => {
        calculateTotal()
    },[EditAdmissonFee,EdithostelCharge,EditTutionFee,EditCautionMoney,EditExaminationFee,EditGamesSportsExicursion,EditElectricCharge,EditLibraryFees,EditComputerFees,EditDevelopmentFees,EditMiscellaneous,EditLaundryCharge,EditMedicalCharge,EditUniform,EditSessionCharge,EditBedFee])

    const calculateTotal = () => {
        setEditTotal(
        Number(EditAdmissonFee) +
        Number(EdithostelCharge) +
        Number(EditTutionFee) +
        Number(EditCautionMoney) +
        Number(EditExaminationFee) +
        Number(EditGamesSportsExicursion) +
        Number(EditElectricCharge) +
        Number(EditLibraryFees) +
        Number(EditComputerFees) +
        Number(EditDevelopmentFees) +
        Number(EditMiscellaneous) +
        Number(EditLaundryCharge) +
        Number(EditMedicalCharge) +
        Number(EditUniform) +
        Number(EditSessionCharge) +
        Number(EditBedFee)
        )
    }

    const HandleMonthlyPaymentSubmit=(e)=>{
        e.preventDefault()
        console.log(EditTotal,EdithostelCharge,EditTutionFee,month)
    }

    const HandleNewAdmissionFee=(e)=>{
        console.log('clicked')
        e.preventDefault()
        if(Number(Total+fine-waiver)-Number(EditTotal+fine_paid)<0){
            alert("Please Adjust Waiver Amount According To Total Fees Paid so That final Due Amount doesn't Becomes Negative")
            return
        }
        if(!status) {
            const data = {
                regNo: regNo,
                Class: Class,
                year: year,
                AdmissionFee: EditAdmissonFee,
                hostelCharge: EdithostelCharge,
                TutionFee: EditTutionFee,
                CautionMoney: EditCautionMoney,
                ExaminationFee: EditExaminationFee,
                GamesSportsExicursion: EditGamesSportsExicursion,
                ElectricCharge: EditElectricCharge,
                LibraryFees: EditLibraryFees,
                ComputerFees: EditComputerFees,
                DevelopmentFees: EditDevelopmentFees,
                Miscellaneous: EditMiscellaneous,
                LaundryCharge: EditLaundryCharge,
                MedicalCharge: EditMedicalCharge,
                Uniform: EditUniform,
                SessionCharge: EditSessionCharge,
                BedFee: EditBedFee,
                Total: EditTotal,
                PaymentDate: EditDate,
                BillDate:billDate,
                waiver:waiver
            }
            axios.post("/api/v1/fee/newadmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                alert("Payment Entry For New-Admission is Successful For" + regNo)
               setNewadmissionView("none")
                setTableView("none")

                setAdmissonFee(0)
                setHostelCharge(0)
                setTutionFee(0)
                setCautionMoney(0)
                setExaminationFee(0)
                setGamesSportsExicursion(0)
                setElectricCharge(0)
                setLibraryFees(0)
                setComputerFees(0)
                setDevelopmentFees(0)
                setMiscellaneous(0)
                setLaundryCharge(0)
                setMedicalCharge(0)
                setUniform(0)
                setSessionCharge(0)
                setBedFee(0)
                setTotal(0)
                setRegNo("")
                setClass(0)
                setYear(0)

                setEditAdmissonFee(0)
                setEditHostelCharge(0)
                setEditTutionFee(0)
                setEditCautionMoney(0)
                setEditExaminationFee(0)
                setEditGamesSportsExicursion(0)
                setEditElectricCharge(0)
                setEditLibraryFees(0)
                setEditComputerFees(0)
                setEditDevelopmentFees(0)
                setEditMiscellaneous(0)
                setEditLaundryCharge(0)
                setEditMedicalCharge(0)
                setEditUniform(0)
                setEditSessionCharge(0)
                setEditBedFee(0)
                setEditTotal(0)
                setEditDate(new Date().toISOString().slice(0, 10))
                setdisabledit(false)
                setStatus(0)
            }).catch((err) => {
                console.log(err)
            })
        }else{
            const data = {
                regNo: regNo,
                Class: Class,
                year: year,
                AdmissionFee: EditAdmissonFee,
                hostelCharge: EdithostelCharge,
                TutionFee: EditTutionFee,
                CautionMoney: EditCautionMoney,
                ExaminationFee: EditExaminationFee,
                GamesSportsExicursion: EditGamesSportsExicursion,
                ElectricCharge: EditElectricCharge,
                LibraryFees: EditLibraryFees,
                ComputerFees: EditComputerFees,
                DevelopmentFees: EditDevelopmentFees,
                Miscellaneous: EditMiscellaneous,
                LaundryCharge: EditLaundryCharge,
                MedicalCharge: EditMedicalCharge,
                Uniform: EditUniform,
                SessionCharge: EditSessionCharge,
                BedFee: EditBedFee,
                Total: EditTotal,
                PaymentDate: EditDate,
                BillDate:billDate,
                waiver:waiver
            }
            axios.post("/api/v1/fee/updatenewadmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
              console.log(res.data)
                alert("Payment Entry For New-Admission is Updated For " + regNo)
                setNewadmissionView("none")
                setTableView("none")

                setAdmissonFee(0)
                setHostelCharge(0)
                setTutionFee(0)
                setCautionMoney(0)
                setExaminationFee(0)
                setGamesSportsExicursion(0)
                setElectricCharge(0)
                setLibraryFees(0)
                setComputerFees(0)
                setDevelopmentFees(0)
                setMiscellaneous(0)
                setLaundryCharge(0)
                setMedicalCharge(0)
                setUniform(0)
                setSessionCharge(0)
                setBedFee(0)
                setTotal(0)
                setRegNo("")
                setClass(0)
                setYear(0)

                setEditAdmissonFee(0)
                setEditHostelCharge(0)
                setEditTutionFee(0)
                setEditCautionMoney(0)
                setEditExaminationFee(0)
                setEditGamesSportsExicursion(0)
                setEditElectricCharge(0)
                setEditLibraryFees(0)
                setEditComputerFees(0)
                setEditDevelopmentFees(0)
                setEditMiscellaneous(0)
                setEditLaundryCharge(0)
                setEditMedicalCharge(0)
                setEditUniform(0)
                setEditSessionCharge(0)
                setEditBedFee(0)
                setEditTotal(0)
                setEditDate(new Date().toISOString().slice(0, 10))
                setdisabledit(false)
                setStatus(0)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    const clearTable = () => {
        
        setData([])
        };

    const HandleReAdmissionFee=(e)=>{
        e.preventDefault()
        if(Number(Total+fine-waiver)-Number(EditTotal+fine_paid)<0){
            alert("Please Adjust Waiver Amount According To Total Fees Paid so That final Due Amount doesn't Becomes Negative")
            return
        }
        if(!status) {
            console.log(EditTotal, EdithostelCharge, EditTutionFee, EditAdmissonFee, EditCautionMoney, EditExaminationFee, EditGamesSportsExicursion, EditElectricCharge, EditLibraryFees, EditComputerFees, EditDevelopmentFees, EditMiscellaneous, EditLaundryCharge, EditMedicalCharge, EditUniform, EditSessionCharge, EditBedFee)
            const data = {
                regNo: regNo,
                Class: Class,
                year: year,
                AdmissionFee: EditAdmissonFee,
                hostelCharge: EdithostelCharge,
                TutionFee: EditTutionFee,
                CautionMoney: EditCautionMoney,
                ExaminationFee: EditExaminationFee,
                GamesSportsExicursion: EditGamesSportsExicursion,
                ElectricCharge: EditElectricCharge,
                LibraryFees: EditLibraryFees,
                ComputerFees: EditComputerFees,
                DevelopmentFees: EditDevelopmentFees,
                Miscellaneous: EditMiscellaneous,
                LaundryCharge: EditLaundryCharge,
                MedicalCharge: EditMedicalCharge,
                Uniform: EditUniform,
                SessionCharge: EditSessionCharge,
                BedFee: EditBedFee,
                Total: EditTotal,
                PaymentDate: EditDate,
                BillDate:billDate,
                waiver:waiver
            }
            axios.post("/api/v1/fee/readmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                console.log(res.data)
                alert("Payment Entry For Re-Admission is Successful For "+regNo)
                setReadmissionView("none")
                setTableView("none")

                setAdmissonFee(0)
                setHostelCharge(0)
                setTutionFee(0)
                setCautionMoney(0)
                setExaminationFee(0)
                setGamesSportsExicursion(0)
                setElectricCharge(0)
                setLibraryFees(0)
                setComputerFees(0)
                setDevelopmentFees(0)
                setMiscellaneous(0)
                setLaundryCharge(0)
                setMedicalCharge(0)
                setUniform(0)
                setSessionCharge(0)
                setBedFee(0)
                setTotal(0)
                setRegNo("")
                setClass(0)
                setYear(0)

                setEditAdmissonFee(0)
                setEditHostelCharge(0)
                setEditTutionFee(0)
                setEditCautionMoney(0)
                setEditExaminationFee(0)
                setEditGamesSportsExicursion(0)
                setEditElectricCharge(0)
                setEditLibraryFees(0)
                setEditComputerFees(0)
                setEditDevelopmentFees(0)
                setEditMiscellaneous(0)
                setEditLaundryCharge(0)
                setEditMedicalCharge(0)
                setEditUniform(0)
                setEditSessionCharge(0)
                setEditBedFee(0)
                setEditTotal(0)
                setEditDate(new Date().toISOString().slice(0, 10))
                setdisabledit(false)
                setStatus(0)
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            const data = {
                regNo: regNo,
                Class: Class,
                year: year,
                AdmissionFee: EditAdmissonFee,
                hostelCharge: EdithostelCharge,
                TutionFee: EditTutionFee,
                CautionMoney: EditCautionMoney,
                ExaminationFee: EditExaminationFee,
                GamesSportsExicursion: EditGamesSportsExicursion,
                ElectricCharge: EditElectricCharge,
                LibraryFees: EditLibraryFees,
                ComputerFees: EditComputerFees,
                DevelopmentFees: EditDevelopmentFees,
                Miscellaneous: EditMiscellaneous,
                LaundryCharge: EditLaundryCharge,
                MedicalCharge: EditMedicalCharge,
                Uniform: EditUniform,
                SessionCharge: EditSessionCharge,
                BedFee: EditBedFee,
                Total: EditTotal,
                PaymentDate: EditDate,
                BillDate:billDate,
                waiver:waiver
            }
            axios.post("/api/v1/fee/updatereadmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                console.log(res.data)
                alert("Payment Entry For New-Admission is Updated " +regNo)
                setReadmissionView("none")
                setTableView("none")

                setAdmissonFee(0)
                setHostelCharge(0)
                setTutionFee(0)
                setCautionMoney(0)
                setExaminationFee(0)
                setGamesSportsExicursion(0)
                setElectricCharge(0)
                setLibraryFees(0)
                setComputerFees(0)
                setDevelopmentFees(0)
                setMiscellaneous(0)
                setLaundryCharge(0)
                setMedicalCharge(0)
                setUniform(0)
                setSessionCharge(0)
                setBedFee(0)
                setTotal(0)
                setRegNo("")
                setClass(0)
                setYear(0)

                setEditAdmissonFee(0)
                setEditHostelCharge(0)
                setEditTutionFee(0)
                setEditCautionMoney(0)
                setEditExaminationFee(0)
                setEditGamesSportsExicursion(0)
                setEditElectricCharge(0)
                setEditLibraryFees(0)
                setEditComputerFees(0)
                setEditDevelopmentFees(0)
                setEditMiscellaneous(0)
                setEditLaundryCharge(0)
                setEditMedicalCharge(0)
                setEditUniform(0)
                setEditSessionCharge(0)
                setEditBedFee(0)
                setEditTotal(0)
                setEditDate(new Date().toISOString().slice(0, 10))
                setdisabledit(false)
                setStatus(0)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return(
        <div style={{display:view}}>
            <div style={{display:tableView}}>
            <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn btn-warning excel-btn"
                table="student_fee_payment"
                filename={"Student_Fee_Payment_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
            <table className="table-60" >
                <thead>
                <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
               
                <tr>
                    <th>Sl. No.</th>
                    <th>Name</th>
                    <th>Reg No</th>
                    <th>Entry Status</th>
                    <th>Academic Year</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Roll No</th>
                    
                    
                    <th>Initial Fee As per Structure</th>
                    
                    <th>Waiver Imposed</th>
                    <th>Final Fee (Initial+Fine-Waiver) </th>
                    
                    
                    <th>Total Paid </th>
                    <th>Final Due</th>
                    
                
                    

                    
                   <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td style={{width:'3px'}}>{index+1}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.registration_no}</td>
                                <td>{ <input type='checkbox'
                                    checked={item.status  === 1 ? true : false}></input>}</td>
                                <td>{item.year}</td>
                                <td>{convertToRoman(item.class)}</td>
                                <td>{item.section}</td>
                                <td>{item.roll_no}</td>
                                
                                
                                <td style={{width:'20%'}}>{item.total_fee}</td>
                                <td style={{width:'20%'}}>{item.waiver}</td>
                                
                                <td style={{width:'20%'}}>{item.total_fee+item.fine-item.waiver}</td>
                                
                                <td style={{width:'20%'}}>{item.student_total_fee+item.fine_paid}</td>
                                <td style={{width:'30%',color:'red'}}>{(item.total_fee+item.fine)-(item.student_total_fee+item.fine_paid+item.waiver)}</td>
                               
                               
                                <td><button onClick={()=>handleClick(item)} className="dashboard-btn dashboard-btn-scss" >Entry</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            {data.length === 0 ? <div className="no-data">No Data Exists</div> : null}
            </div>

            {/* Monthly Fee Payment*/}
            <div style={{display: monthlyView}} className="dashbrd-40-colm special-25-div">
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <form onSubmit={HandleMonthlyPaymentSubmit}>
                    <dl>
                    <dt>
                        <label>Hostel Charge: </label>
                        <label>{hostelCharge}</label> </dt>
                      <dd>  <input type="number" value={EdithostelCharge}
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should not Exceed than ${hostelCharge}`)}/></dd>


                    <dt>
                        <label>Tution Charge: </label>
                        <label>{TutionFee}: </label></dt>
                       <dd><input type="number" value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should not Exceed than ${TutionFee}`)}/></dd>


                        <div>
                        <label>Month</label>
                        <select value={month} onChange={(e) => setMonth(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sept">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                    </div>

                    <div>
                        <label>Total Fee: </label>
                        <label>{Total}: </label>
                        <input type="number" value={EditTotal}
                               readOnly={true}/>
                    </div>
                    </dl>
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>

                </form>
            </div>

            {/* New Admission Fee Payment*/}
            <div style={{display: NewadmissionView}} className="dashbrd-40-colm special-25-div">
            <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">Cancel
                </button>
                { pdfstate && <button className='dashboard-btn fix-width-pdf pdf-btn' style={{background:'lightsalmon',color:'white',marginBottom:'8px',float:'right'}}>
                                    <PDFDownloadLink document={<MyDocumentFee data={pdfdata}/>}
                                     fileName={"Student_New_Admission_Fee_Payment_Receipt_"+regNo+".pdf"} >
                                        {({ blob, url, loading, error }) => (loading ? 'Loading..' : 'Download')}
                                    </PDFDownloadLink></button>}
                <form className='fee-entry-new-adm' onSubmit={HandleNewAdmissionFee} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey',marginTop:'10px'}}>
                <p className="customize-centre" style={{fontSize:'16px'}}>Student Fee Details</p>
                    <dl>
                    <dt className='no-after'><label style={{color:'black',fontSize:'15px',textAlign:'center',width:'50%'}}></label></dt>   
                    <dd>
                    <label style={{fontSize:'15px',textAlign:'center',width:'50%'}}>To Be Paid</label>
                    <label style={{fontSize:'15px',textAlign:'center',width:'50%'}}>Actually Paid </label>
                        </dd> 
                    <dt>
                        <label>Admission Fee</label>
                        </dt>
                     <dd> 
                     
                     <input type="number" value={AdmissonFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input style={{marginLeft:'10px',textAlign:'center',width:'50%'} } type="number" value={EditAdmissonFee}
                              onChange={(e) => e.target.value <= AdmissonFee ? setEditAdmissonFee(e.target.value) : alert(`It should not Exceed than ${AdmissonFee}`)}/></dd>


                        <dt>
                        <label>Hostel Charge</label>
                         </dt>
                       <dd> 
                       <input type="number" value={hostelCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                              <input type="number" value={EdithostelCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should not Exceed than ${hostelCharge}`)}/></dd>


                    <dt>
                        <label>Tuition Charge </label>
                        </dt>
                     <dd> 
                     <input type="number" value={TutionFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input type="number" style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                        value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should not Exceed than ${TutionFee}`)}/> </dd>
                           <dt>
                        <label>Session Charge </label>
                        </dt>
                    <dd>
                    <input type="number" value={SessionCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditSessionCharge}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= SessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should not Exceed than ${SessionCharge}`)}/></dd>

                    <dt>
                        <label>Caution Money </label>
                         </dt>
                     <dd>
                     <input type="number" value={CautionMoney} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input type="number" value={EditCautionMoney} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= CautionMoney ? setEditCautionMoney(e.target.value) : alert(`It should not Exceed than ${CautionMoney}`)}/></dd>


                    <dt>
                        <label>Examination Fee </label>
                        </dt>
                       <dd> 
                       <input type="number" value={ExaminationFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input type="number" value={EditExaminationFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ExaminationFee ? setEditExaminationFee(e.target.value) : alert(`It should not Exceed than ${ExaminationFee}`)}/></dd>


                    <dt>
                        <label>Games & Sports Fee</label>
                        </dt>
                     <dd>
                     <input type="number" value={GamesSportsExicursion} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                         <input type="number" value={EditGamesSportsExicursion} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= GamesSportsExicursion ? setEditGamesSportsExicursion(e.target.value) : alert(`It should not Exceed than ${GamesSportsExicursion}`)}/></dd>


                    <dt>
                        <label>Electric Charge </label>
                        </dt>
                     <dd> <input type="number" value={ElectricCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditElectricCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ElectricCharge ? setEditElectricCharge(e.target.value) : alert(`It should not Exceed than ${ElectricCharge}`)}/></dd>


                    <dt>
                        <label>Library Fees </label>
                        </dt>
                     <dd>
                     <input type="number" value={LibraryFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditLibraryFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LibraryFees ? setEditLibraryFees(e.target.value) : alert(`It should not Exceed than ${LibraryFees}`)}/></dd>


                        <dt>
                        <label>Computer Fee</label>
                        </dt>
                    <dd>
                    <input type="number" value={ComputerFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditComputerFees}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ComputerFees ? setEditComputerFees(e.target.value) : alert(`It should not Exceed than ${ComputerFees}`)}/></dd>


                    <dt>
                        <label>Development Fee </label>
                        </dt>
                    <dd>
                        
                    <input type="number" value={DevelopmentFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                              <input type="number" value={EditDevelopmentFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= DevelopmentFees ? setEditDevelopmentFees(e.target.value) : alert(`It should not Exceed than ${DevelopmentFees}`)}/></dd>


                   


                    <dt>
                        <label>Laundry Charge </label>
                       </dt>
                    <dd>
                    <input type="number" value={LaundryCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditLaundryCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should not Exceed than ${LaundryCharge}`)}/></dd>


                        <dt>
                        <label>Medical Charge </label>
                        </dt>
                      <dd>  
                      <input type="number" value={MedicalCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditMedicalCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= MedicalCharge ? setEditMedicalCharge(e.target.value) : alert(`It should not Exceed than ${MedicalCharge}`)}/></dd>


                    <dt>
                        <label>Uniform Fee</label>
                        </dt>
                      <dd> 
                      <input type="number" value={Uniform} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditUniform} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Uniform ? setEditUniform(e.target.value) : alert(`It should not Exceed than ${Uniform}`)}/></dd>


             


                        <dt>
                        <label>Bed Fee </label>
                       </dt>
                       <dd> 
                       <input type="number" value={BedFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditBedFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= BedFee ? setEditBedFee(e.target.value) : alert(`It should not Exceed than ${BedFee}`)}/></dd>
                       
                       <dt>
                        <label>Miscellaneous </label>
                        </dt>
                     <dd>
                     <input type="number" value={Miscellaneous} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                         <input type="number" value={EditMiscellaneous} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Miscellaneous ? setEditMiscellaneous(e.target.value) : alert(`It should not Exceed than ${Miscellaneous}`)}/></dd>
                    
                    
                    <dt style={{marginTop:'5%'}}>
                        <label>Initial Fee Structure</label>
                        </dt>
                      <dd> 
                      <input type="number" value={Total} readOnly
                              style={{backgroundColor:'azure',textAlign:'center',width:'50%',fontWeight:'bolder',marginTop:'15%'} }/> 
                         <input type="number" value={EditTotal} style={{backgroundColor:'azure',marginLeft:'10px',textAlign:'center',width:'50%',fontWeight:'bolder',marginTop:'15%'} }
                               readOnly={true}/></dd>


            <dt>
                        <label>Fine Imposed</label>
                        </dt>
                      <dd> 
                      <input type="number" value={fine} readOnly
                              style={{backgroundColor:'azure',textAlign:'center',width:'50%',color:'red',fontWeight:'500'} }/> 
                         <input type="number" value={fine_paid} style={{backgroundColor:'azure',marginLeft:'10px',textAlign:'center',width:'50%',color:'red',fontWeight:'500'} }
                               readOnly={true}/></dd>         
                              

                       

                        <dt>
                        <label>Final Fee Structure with Fine</label>
                        </dt>
                      <dd> 
                      <input type="number" value={Total+fine} readOnly
                              style={{backgroundColor:'azure',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                         <input type="number" value={EditTotal+fine_paid} style={{backgroundColor:'azure',marginLeft:'10px',textAlign:'center',width:'50%',fontWeight:'bolder'} }
                               readOnly={true}/></dd>

                        <dt >
                        <label >Due Without Waiver</label>
                        </dt>   
                        <dd> 
                      <input type="number" value={(Total+fine)-(EditTotal+fine_paid)} 
                              style={{backgroundColor:'azure',textAlign:'center',width:'100%',color:'black',fontWeight:'bolder'} }/> 
                        </dd> 
                  
                    
                   

                        <dt style={{marginTop:'5%'}}>
                        <label>Waiver </label>
                        </dt>   
                        <dd> 
                      <input type="number" value={waiver} onChange={(e) => e.target.value <= ((Total+fine)-(EditTotal+fine_paid)) ? setWaiver(e.target.value) : alert(`It should not Exceed than ${(Total+fine)-(EditTotal+fine_paid)}`)}
                              style={{backgroundColor:'lightsalmon',textAlign:'center',width:'100%',color:'white',fontWeight:'bolder',marginTop:'14%'} }/> 
                        </dd>        
                              
                        <dt>
                        <label>Final Due Amount </label>
                        </dt>   
                        <dd> 
                      <input type="number" value={(Total+fine-waiver)-(EditTotal+fine_paid)} 
                              style={{backgroundColor:'ivory',textAlign:'center',width:'100%',color:'red',fontWeight:'bolder'} }/> 
                        </dd>          

                    <dt>
                        <label>Payment Date</label></dt>
                    <dd> <input type="date" value={billDate} onChange={(e) => setBillDate(e.target.value)}/></dd>

                    <dt>
                        <label>Date of Payment Entry</label></dt>
                      <dd>  <input type="date" value={EditDate} onChange={(e) => setEditDate(e.target.value)} readOnly/></dd>

                    </dl>
                    <span><button className="dashboard-btn dashboard-btn-scss"
                                  disabled={disableedit}>Submit</button></span>
                </form>
            </div>

            {/* Readmission Fee Payment*/}
            <div style={{display: readmissionView}} className="dashbrd-40-colm special-25-div">
                 <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">Cancel
                </button>
                { pdfstate && <button className='dashboard-btn fix-width-pdf pdf-btn' style={{background:'lightsalmon',color:'white',marginBottom:'8px',float:'right'}}>
                                    <PDFDownloadLink document={<MyDocumentFee data={pdfdata}/>} fileName={"Student_Re_Admission_Fee_Payment_Receipt_"+regNo+".pdf"} >
                                        {({ blob, url, loading, error }) => (loading ? 'Loading..' : 'Download')}
                                    </PDFDownloadLink></button>}
                <form onSubmit={HandleReAdmissionFee} className='fee-entry-new-adm' style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey',marginTop:'10px'}}>
                    
                <p className="customize-centre" style={{fontSize:'16px'}}>Student Fee Details</p>
                <dl>
                    <dt className='no-after'><label style={{color:'black',fontSize:'15px',textAlign:'center',width:'50%'}}></label></dt>   
                    <dd>
                    <label style={{fontSize:'15px',textAlign:'center',width:'50%'}}>To Be Paid</label>
                    <label style={{fontSize:'15px',textAlign:'center',width:'50%'}}>Actually Paid </label>
                        </dd> 
                    <dt>
                        <label>Admission Fee</label>
                        </dt>
                     <dd> 
                     
                     <input type="number" value={AdmissonFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input style={{marginLeft:'10px',textAlign:'center',width:'50%'} } type="number" value={EditAdmissonFee}
                              onChange={(e) => e.target.value <= AdmissonFee ? setEditAdmissonFee(e.target.value) : alert(`It should not Exceed than ${AdmissonFee}`)}/></dd>


                        <dt>
                        <label>Hostel Charge</label>
                         </dt>
                       <dd> 
                       <input type="number" value={hostelCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                              <input type="number" value={EdithostelCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should not Exceed than ${hostelCharge}`)}/></dd>


                    <dt>
                        <label>Tuition Charge </label>
                        </dt>
                     <dd> 
                     <input type="number" value={TutionFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input type="number" style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                        value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should not Exceed than ${TutionFee}`)}/> </dd>
                           <dt>
                        <label>Session Charge </label>
                        </dt>
                    <dd>
                    <input type="number" value={SessionCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditSessionCharge}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= SessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should not Exceed than ${SessionCharge}`)}/></dd>

                    <dt>
                        <label>Caution Money </label>
                         </dt>
                     <dd>
                     <input type="number" value={CautionMoney} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input type="number" value={EditCautionMoney} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= CautionMoney ? setEditCautionMoney(e.target.value) : alert(`It should not Exceed than ${CautionMoney}`)}/></dd>


                    <dt>
                        <label>Examination Fee </label>
                        </dt>
                       <dd> 
                       <input type="number" value={ExaminationFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                        <input type="number" value={EditExaminationFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ExaminationFee ? setEditExaminationFee(e.target.value) : alert(`It should not Exceed than ${ExaminationFee}`)}/></dd>


                    <dt>
                        <label>Games & Sports</label>
                        </dt>
                     <dd>
                     <input type="number" value={GamesSportsExicursion} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/>
                         <input type="number" value={EditGamesSportsExicursion} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= GamesSportsExicursion ? setEditGamesSportsExicursion(e.target.value) : alert(`It should not Exceed than ${GamesSportsExicursion}`)}/></dd>


                    <dt>
                        <label>Electric Charge </label>
                        </dt>
                     <dd> <input type="number" value={ElectricCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditElectricCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ElectricCharge ? setEditElectricCharge(e.target.value) : alert(`It should not Exceed than ${ElectricCharge}`)}/></dd>


                    <dt>
                        <label>Library Fee </label>
                        </dt>
                     <dd>
                     <input type="number" value={LibraryFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditLibraryFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LibraryFees ? setEditLibraryFees(e.target.value) : alert(`It should not Exceed than ${LibraryFees}`)}/></dd>


                        <dt>
                        <label>Computer Fee</label>
                        </dt>
                    <dd>
                    <input type="number" value={ComputerFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditComputerFees}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ComputerFees ? setEditComputerFees(e.target.value) : alert(`It should not Exceed than ${ComputerFees}`)}/></dd>


                    <dt>
                        <label>Development Fee </label>
                        </dt>
                    <dd>
                        
                    <input type="number" value={DevelopmentFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                              <input type="number" value={EditDevelopmentFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= DevelopmentFees ? setEditDevelopmentFees(e.target.value) : alert(`It should not Exceed than ${DevelopmentFees}`)}/></dd>


                   


                    <dt>
                        <label>Laundry Charge </label>
                       </dt>
                    <dd>
                    <input type="number" value={LaundryCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditLaundryCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should not Exceed than ${LaundryCharge}`)}/></dd>


                        <dt>
                        <label>Medical Charge </label>
                        </dt>
                      <dd>  
                      <input type="number" value={MedicalCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditMedicalCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= MedicalCharge ? setEditMedicalCharge(e.target.value) : alert(`It should not Exceed than ${MedicalCharge}`)}/></dd>


                    <dt>
                        <label>Uniform Fee</label>
                        </dt>
                      <dd> 
                      <input type="number" value={Uniform} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditUniform} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Uniform ? setEditUniform(e.target.value) : alert(`It should not Exceed than ${Uniform}`)}/></dd>


             


                        <dt>
                        <label>Bed Fee </label>
                       </dt>
                       <dd> 
                       <input type="number" value={BedFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                        <input type="number" value={EditBedFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= BedFee ? setEditBedFee(e.target.value) : alert(`It should not Exceed than ${BedFee}`)}/></dd>
                       
                       <dt>
                        <label>Miscellaneous </label>
                        </dt>
                     <dd>
                     <input type="number" value={Miscellaneous} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                         <input type="number" value={EditMiscellaneous} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Miscellaneous ? setEditMiscellaneous(e.target.value) : alert(`It should not Exceed than ${Miscellaneous}`)}/></dd>
                    
                    
                    <dt style={{marginTop:'5%'}}>
                        <label>Initial Fee Structure</label>
                        </dt>
                      <dd> 
                      <input type="number" value={Total} readOnly
                              style={{backgroundColor:'azure',textAlign:'center',width:'50%',fontWeight:'bolder',marginTop:'15%'} }/> 
                         <input type="number" value={EditTotal} style={{backgroundColor:'azure',marginLeft:'10px',textAlign:'center',width:'50%',fontWeight:'bolder',marginTop:'15%'} }
                               readOnly={true}/></dd>


            <dt>
                        <label>Fine Imposed</label>
                        </dt>
                      <dd> 
                      <input type="number" value={fine} readOnly
                              style={{backgroundColor:'azure',textAlign:'center',width:'50%',color:'red',fontWeight:'500'} }/> 
                         <input type="number" value={fine_paid} style={{backgroundColor:'azure',marginLeft:'10px',textAlign:'center',width:'50%',color:'red',fontWeight:'500'} }
                               readOnly={true}/></dd>         
                              

                       

                        <dt>
                        <label> Fee Structure With Fine</label>
                        </dt>
                      <dd> 
                      <input type="number" value={Total+fine} readOnly
                              style={{backgroundColor:'azure',textAlign:'center',width:'50%',fontWeight:'bolder'} }/> 
                         <input type="number" value={EditTotal+fine_paid} style={{backgroundColor:'azure',marginLeft:'10px',textAlign:'center',width:'50%',fontWeight:'bolder'} }
                               readOnly={true}/></dd>

                        <dt >
                        <label >Due Without Waiver</label>
                        </dt>   
                        <dd> 
                      <input type="number" value={(Total+fine)-(EditTotal+fine_paid)} 
                              style={{backgroundColor:'azure',textAlign:'center',width:'100%',color:'black',fontWeight:'bolder'} }/> 
                        </dd> 
                  
                    
                   

                        <dt style={{marginTop:'5%'}}>
                        <label>Waiver </label>
                        </dt>   
                        <dd> 
                      <input type="number" value={waiver} onChange={(e) => e.target.value <= ((Total+fine)-(EditTotal+fine_paid)) ? setWaiver(e.target.value) : alert(`It should not Exceed than ${(Total+fine)-(EditTotal+fine_paid)}`)}
                              style={{backgroundColor:'lightsalmon',textAlign:'center',width:'100%',color:'white',fontWeight:'bolder',marginTop:'14%'} }/> 
                        </dd>        
                              
                        <dt>
                        <label>Final Due Amount </label>
                        </dt>   
                        <dd> 
                      <input type="number" value={(Total+fine-waiver)-(EditTotal+fine_paid)} 
                              style={{backgroundColor:'ivory',textAlign:'center',width:'100%',color:'red',fontWeight:'bolder'} }/> 
                        </dd>          

                    <dt>
                        <label>Payment Date</label></dt>
                    <dd> <input type="date" value={billDate} onChange={(e) => setBillDate(e.target.value)}/></dd>

                    <dt>
                        <label>Date of Payment Entry</label></dt>
                      <dd>  <input type="date" value={EditDate} onChange={(e) => setEditDate(e.target.value)} readOnly/></dd>

                    </dl>

                <span><button className="dashboard-btn dashboard-btn-scss" disabled={disableedit}>Submit</button></span>
            </form>
        </div>
    <table className="table-60" id="student_fee_payment" style={{display: 'none'}}>
        <thead>
        <tr>
            <th>Sl. No.</th>
            <th>Name</th>
            <th>Reg No</th>
            <th>Entry Status</th>
            <th>Academic Year</th>
            <th>Class</th>
                    <th>Section</th>
                    <th>Roll No</th>
                    <th>Fee Type</th>
                    
                    <th>Initial Fee</th>
                    <th>Fine Imposed</th>
                    <th>Waiver Imposed</th>
                    <th>Final Fee (Initial Fee+ Fine Imposed- Waiver Imposed)</th>
                    <th>Initial Fee Paid</th>
                    <th>Fines Paid</th>
                    <th>Total Fees Paid (Initial Fee Paid+Fines Paid)</th>
                    
                    <th>Due Amount (Final Fee - Total Fees Paid)</th>
                
                    
                </tr>
</thead>
<tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.registration_no}</td>
                                <td>{ <input type='checkbox'
                                    checked={item.status  === 1 ? true : false}></input>}</td>
                                <td>{item.year}</td>
                                <td>{convertToRoman(item.class)}</td>
                                <td>{item.section}</td>
                                <td>{item.roll_no}</td>
                                <td>{item.fee_type}</td>

                                <td>{item.total_fee}</td>
                                <td>{item.fine}</td>
                                <td>{item.waiver}</td>
                                <td>{item.total_fee+item.fine-item.waiver}</td>

                                <td>{item.student_total_fee}</td>
                                <td>{item.fine_paid}</td>
                                <td>{item.student_total_fee+item.fine_paid}</td>
                                
                                <td>{(item.total_fee+item.fine)-(item.student_total_fee+item.fine_paid+item.waiver)}</td>
                              </tr> 
                               
                              
                        )
                    })
                }
                </tbody>




                </table>
        </div>
    )
}
export default StudentFeePaymentEntry;