import {useEffect, useState} from "react";
import axios from "axios";
import { Document, Page, Text, View,PDFDownloadLink,StyleSheet,Image } from '@react-pdf/renderer';

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

    const [disableedit,setdisabledit]=useState(true)
    const [month,setMonth]=useState("")
    const [status,setStatus]=useState(0)
    const [pdfdata,setPDFdata]=useState([])
    const [pdfstate,setpdfstate]=useState(false)

    const [billDate,setBillDate]=useState(new Date().toISOString().slice(0, 10))


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
          },
          footer:{
            marginTop:'55px',
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
        console.log(data[0].fee_type),

        <Document>
                  <Page size="A4" style={styles.page}>
                      <View style={styles.section}>
                          <View style={styles.instituteheader}>
                              

                          </View>

                          {/* <View style={styles.formDetails}><Text> {data[0].fee_type} Fee Receipt for Academic Year </Text></View>  */}
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
            setdisabledit(false)
            setStatus(0)
            setBillDate(new Date().toISOString().slice(0, 10))
            setFine(0)
        }
        else{
         setView("none")
        }
    }, [props.view,props.data]);

    useEffect(() => {
        if(props.data.length>0){
            setFeeType(props.data[0].fee_type)
            setData(props.data)
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
                   console.log(DATA)
               }).catch((err) => {
                   console.log(err)
               })
           } else if (FeeType === "Re-Admisson") {
               await axios.post("/api/v1/fee/getreadmissionfeeentryforupdate", Data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                   DATA = res.data.result[0]
                   console.log(DATA)
               }).catch((err) => {
                   console.log(err)
               })
           }

           setEditAdmissonFee(DATA.admission_fee)
           setEditBedFee(DATA.bed_fee)
           setEditTutionFee(DATA.tution_fee)
           setCautionMoney(DATA.caution_fee)
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
           setUniform(DATA.uniform_fee)
           setStatus(DATA.status)
           setEditDate(DATA.entry_date.slice(0, 10))
           setBillDate(DATA.bill_date.slice(0, 10))
           cData = DATA.entry_date.toString()
           setFine(DATA.fine)

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
               console.log(1)
           } else if (dbYear === currentYear) {
               // The database date is in the same year, so compare the months
               if (dbMonth < currentMonth) {
                   // The database date is in a previous month, so it is older
                   setdisabledit(true)
                   console.log(2)
               } else if (dbMonth === currentMonth) {
                   // The database date is in the same month, so compare the days
                   if (dbDay < currentDay) {
                       // The database date is more than one day before the current date, so it is older
                       setdisabledit(true)
                       console.log(3)
                   } else {
                       // The database date is not older than one day
                       setdisabledit(false);
                       console.log(4)

                   }
               } else {
                   // The database date is in a future month, so it is not older
                   setdisabledit(false);
                   console.log(5)
               }
           } else {
               // The database date is in a future year, so it is not older
               setdisabledit(false);
               console.log(6)
           }
           console.log(disableedit)
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
        setdisabledit(true)
        setStatus(0)
        setBillDate(new Date().toISOString().slice(0, 10))
        setFine(0)
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
        e.preventDefault()
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
                BillDate:billDate
            }
            axios.post("/api/v1/fee/newadmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                alert("Fee Entry of New-Admission is Successful")
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
            console.log("update")
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
                BillDate:billDate
            }
            axios.post("/api/v1/fee/updatenewadmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
              console.log(res.data)
                alert("Fee Entry of New-Admission is Updated")
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
                BillDate:billDate
            }
            axios.post("/api/v1/fee/readmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                console.log(res.data)
                alert("Fee Entry of Re-Admission is Successful")
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
                BillDate:billDate
            }
            axios.post("/api/v1/fee/updatereadmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                console.log(res.data)
                alert("Fee Entry of New-Admission is Updated")
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
                    
                    
                    <th>To be Paid</th>
                    <th>Actually Paid</th>
                    <th>Fine</th>
                    
                   <th>Action</th>
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
                                
                                
                                <td>{item.total_fee}</td>
                                <td>{item.student_total_fee}</td>
                                <td>{item.fine}</td>
                               
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
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/></dd>


                    <dt>
                        <label>Tution Charge: </label>
                        <label>{TutionFee}: </label></dt>
                       <dd><input type="number" value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/></dd>


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
                                    <PDFDownloadLink document={<MyDocumentFee data={pdfdata}/>} fileName={"Student_New_Admission_Fee_PaymenT_Report_"+regNo+".pdf"} >
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
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                        <input style={{marginLeft:'10px',textAlign:'center',width:'50%'} } type="number" value={EditAdmissonFee}
                              onChange={(e) => e.target.value <= AdmissonFee ? setEditAdmissonFee(e.target.value) : alert(`It should be lower then ${AdmissonFee}`)}/></dd>


                        <dt>
                        <label>Hostel Charge</label>
                         </dt>
                       <dd> 
                       <input type="number" value={hostelCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                              <input type="number" value={EdithostelCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/></dd>


                    <dt>
                        <label>Tution Charge </label>
                        </dt>
                     <dd> 
                     <input type="number" value={TutionFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                        <input type="number" style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                        value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/> </dd>


                    <dt>
                        <label>Caution Money </label>
                         </dt>
                     <dd>  
                     <input type="number" value={CautionMoney} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                        <input type="number" value={EditCautionMoney} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= CautionMoney ? setEditCautionMoney(e.target.value) : alert(`It should be lower then ${CautionMoney}`)}/></dd>


                    <dt>
                        <label>Examination Fee </label>
                        </dt>
                       <dd> 
                       <input type="number" value={ExaminationFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                        <input type="number" value={EditExaminationFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ExaminationFee ? setEditExaminationFee(e.target.value) : alert(`It should be lower then ${ExaminationFee}`)}/></dd>


                    <dt>
                        <label>Games Sports</label>
                        </dt>
                     <dd>
                     <input type="number" value={GamesSportsExicursion} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                         <input type="number" value={EditGamesSportsExicursion} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= GamesSportsExicursion ? setEditGamesSportsExicursion(e.target.value) : alert(`It should be lower then ${GamesSportsExicursion}`)}/></dd>


                    <dt>
                        <label>Electric Charge </label>
                        </dt>
                     <dd> <input type="number" value={ElectricCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditElectricCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ElectricCharge ? setEditElectricCharge(e.target.value) : alert(`It should be lower then ${ElectricCharge}`)}/></dd>


                    <dt>
                        <label>Library Fees </label>
                        </dt>
                     <dd>
                     <input type="number" value={LibraryFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditLibraryFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LibraryFees ? setEditLibraryFees(e.target.value) : alert(`It should be lower then ${LibraryFees}`)}/></dd>


                        <dt>
                        <label>Computer Fees</label>
                        </dt>
                    <dd>
                    <input type="number" value={ComputerFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditComputerFees}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ComputerFees ? setEditComputerFees(e.target.value) : alert(`It should be lower then ${ComputerFees}`)}/></dd>


                    <dt>
                        <label>Development Fees </label>
                        </dt>
                    <dd>
                        
                    <input type="number" value={DevelopmentFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                              <input type="number" value={EditDevelopmentFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= DevelopmentFees ? setEditDevelopmentFees(e.target.value) : alert(`It should be lower then ${DevelopmentFees}`)}/></dd>


                    <dt>
                        <label>Miscellaneous </label>
                        </dt>
                     <dd>
                     <input type="number" value={Miscellaneous} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                         <input type="number" value={EditMiscellaneous} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Miscellaneous ? setEditMiscellaneous(e.target.value) : alert(`It should be lower then ${Miscellaneous}`)}/></dd>


                    <dt>
                        <label>Laundry Charge </label>
                       </dt>
                    <dd>
                    <input type="number" value={LaundryCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditLaundryCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should be lower then ${LaundryCharge}`)}/></dd>


                        <dt>
                        <label>Medical Charge </label>
                        </dt>
                      <dd>  
                      <input type="number" value={MedicalCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditMedicalCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= MedicalCharge ? setEditMedicalCharge(e.target.value) : alert(`It should be lower then ${MedicalCharge}`)}/></dd>


                    <dt>
                        <label>Uniform </label>
                        </dt>
                      <dd> 
                      <input type="number" value={Uniform} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditUniform} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Uniform ? setEditUniform(e.target.value) : alert(`It should be lower then ${Uniform}`)}/></dd>


                    <dt>
                        <label>Session Charge </label>
                        </dt>
                    <dd>
                    <input type="number" value={SessionCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditSessionCharge}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= SessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should be lower then ${SessionCharge}`)}/></dd>


                        <dt>
                        <label>Bed Fee </label>
                       </dt>
                       <dd> 
                       <input type="number" value={BedFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditBedFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= BedFee ? setEditBedFee(e.target.value) : alert(`It should be lower then ${BedFee}`)}/></dd>
                       

                    <dt>
                        <label>Total Fee </label>
                        </dt>
                      <dd> 
                      <input type="number" value={Total} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                         <input type="number" value={EditTotal} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               readOnly={true}/></dd>
                               <dt>
                            <label>Fine</label>
                        </dt>
                        <dd>

                            <input type="number" readOnly value={fine} style={{ textAlign: 'center', width: '100%' }}
                            /></dd>

                    <dt>
                        <label>Bill Date</label></dt>
                    <dd> <input type="date" value={billDate} onChange={(e) => setBillDate(e.target.value)}/></dd>

                    <dt>
                        <label>Entry Date</label></dt>
                      <dd>  <input type="date" value={EditDate} onChange={(e) => setEditDate(e.target.value)} readOnly/></dd>

                    </dl>
                    <span><button className="dashboard-btn dashboard-btn-scss"
                                  disabled={disableedit}>Submit</button></span>
                </form>
            </div>

            {/* Readmission Fee Payment*/}
            <div style={{display: readmissionView}} className="dashbrd-40-colm special-25-div">
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                { pdfstate && <button className='dashboard-btn fix-width-pdf pdf-btn' style={{background:'lightsalmon',color:'white',marginBottom:'8px',float:'right'}}>
                                    <PDFDownloadLink document={<MyDocumentFee data={pdfdata}/>} fileName={"Student_Re_Admission_Fee_Payment_Report_"+regNo+".pdf"} >
                                        {({ blob, url, loading, error }) => (loading ? 'Loading..' : 'Download')}
                                    </PDFDownloadLink></button>}
                <form onSubmit={HandleReAdmissionFee} className='fee-entry-new-adm' style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
                    
                <p className="customize-centre" style={{fontSize:'16px'}}>Student Fee Details</p>
                    <dl>
                    <dt className='no-after'><label style={{color:'black',fontSize:'15px',textAlign:'center',width:'50%'}}></label></dt>   
                    <dd>
                    <label style={{fontSize:'15px',textAlign:'center',width:'50%'}}>To Be Paid</label>
                    <label style={{fontSize:'15px',textAlign:'center',width:'50%'}}>Actually Paid </label>
                        </dd> 
                        <dt>
                            <label>Admission Fee </label>
                            </dt>
                        <dd>
                            
                        <input type="number" value={AdmissonFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                            <input type="number" value={EditAdmissonFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                                   onChange={(e) => e.target.value <= AdmissonFee ? setEditAdmissonFee(e.target.value) : alert(`It should be lower then ${AdmissonFee}`)}/>
                        </dd>


                        <dt>
                        <label>Hostel Charge</label>
                         </dt>
                       <dd> 
                       <input type="number" value={hostelCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                              <input type="number" value={EdithostelCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/></dd>


                    <dt>
                        <label>Tution Charge </label>
                        </dt>
                     <dd> 
                     <input type="number" value={TutionFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                        <input type="number" style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                        value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/> </dd>


                    <dt>
                        <label>Caution Money </label>
                         </dt>
                     <dd>  
                     <input type="number" value={CautionMoney} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                        <input type="number" value={EditCautionMoney} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= CautionMoney ? setEditCautionMoney(e.target.value) : alert(`It should be lower then ${CautionMoney}`)}/></dd>


                    <dt>
                        <label>Examination Fee </label>
                        </dt>
                       <dd> 
                       <input type="number" value={ExaminationFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                        <input type="number" value={EditExaminationFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ExaminationFee ? setEditExaminationFee(e.target.value) : alert(`It should be lower then ${ExaminationFee}`)}/></dd>


                    <dt>
                        <label>Games Sports</label>
                        </dt>
                     <dd>
                     <input type="number" value={GamesSportsExicursion} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/>
                         <input type="number" value={EditGamesSportsExicursion} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= GamesSportsExicursion ? setEditGamesSportsExicursion(e.target.value) : alert(`It should be lower then ${GamesSportsExicursion}`)}/></dd>


                    <dt>
                        <label>Electric Charge </label>
                        </dt>
                     <dd> <input type="number" value={ElectricCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditElectricCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ElectricCharge ? setEditElectricCharge(e.target.value) : alert(`It should be lower then ${ElectricCharge}`)}/></dd>


                    <dt>
                        <label>Library Fees </label>
                        </dt>
                     <dd>
                     <input type="number" value={LibraryFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditLibraryFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LibraryFees ? setEditLibraryFees(e.target.value) : alert(`It should be lower then ${LibraryFees}`)}/></dd>


                        <dt>
                        <label>Computer Fees</label>
                        </dt>
                    <dd>
                    <input type="number" value={ComputerFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditComputerFees}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= ComputerFees ? setEditComputerFees(e.target.value) : alert(`It should be lower then ${ComputerFees}`)}/></dd>


                    <dt>
                        <label>Development Fees </label>
                        </dt>
                    <dd>
                        
                    <input type="number" value={DevelopmentFees} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                              <input type="number" value={EditDevelopmentFees} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= DevelopmentFees ? setEditDevelopmentFees(e.target.value) : alert(`It should be lower then ${DevelopmentFees}`)}/></dd>


                    <dt>
                        <label>Miscellaneous </label>
                        </dt>
                     <dd>
                     <input type="number" value={Miscellaneous} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                         <input type="number" value={EditMiscellaneous} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Miscellaneous ? setEditMiscellaneous(e.target.value) : alert(`It should be lower then ${Miscellaneous}`)}/></dd>


                    <dt>
                        <label>Laundry Charge </label>
                       </dt>
                    <dd>
                    <input type="number" value={LaundryCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditLaundryCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= LaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should be lower then ${LaundryCharge}`)}/></dd>


                        <dt>
                        <label>Medical Charge </label>
                        </dt>
                      <dd>  
                      <input type="number" value={MedicalCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditMedicalCharge} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= MedicalCharge ? setEditMedicalCharge(e.target.value) : alert(`It should be lower then ${MedicalCharge}`)}/></dd>


                    <dt>
                        <label>Uniform </label>
                        </dt>
                      <dd> 
                      <input type="number" value={Uniform} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditUniform} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= Uniform ? setEditUniform(e.target.value) : alert(`It should be lower then ${Uniform}`)}/></dd>


                    <dt>
                        <label>Session Charge </label>
                        </dt>
                    <dd>
                    <input type="number" value={SessionCharge} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditSessionCharge}  style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= SessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should be lower then ${SessionCharge}`)}/></dd>


                        <dt>
                        <label>Bed Fee </label>
                       </dt>
                       <dd> 
                       <input type="number" value={BedFee} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                        <input type="number" value={EditBedFee} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               onChange={(e) => e.target.value <= BedFee ? setEditBedFee(e.target.value) : alert(`It should be lower then ${BedFee}`)}/></dd>

                    
                    <dt>
                        <label>Total Fee </label>
                        </dt>
                      <dd> 
                      <input type="number" value={Total} readOnly
                              style={{backgroundColor:'ivory',textAlign:'center',width:'50%'} }/> 
                         <input type="number" value={EditTotal} style={{marginLeft:'10px',textAlign:'center',width:'50%'} }
                               readOnly={true}/></dd>
                                   <dt>
                            <label>Fine</label>
                        </dt>
                        <dd>

                            <input type="number" readOnly value={fine} style={{  textAlign: 'center', width: '100%' }}
                            /></dd>

                        <dt>
                            <label>Bill Date</label></dt>
                        <dd><input type="date" value={billDate} onChange={(e) => setBillDate(e.target.value)}/></dd>

                        <dt>
                            <label>Entry Date</label></dt>
                        <dd><input type="date" value={EditDate} onChange={(e) => setEditDate(e.target.value)} readOnly/>
                        </dd>

                    </dl>

                    <span><button className="dashboard-btn dashboard-btn-scss"
                                  disabled={disableedit}>Submit</button></span>
                </form>
            </div>
        </div>
    )
}
export default StudentFeePaymentEntry;