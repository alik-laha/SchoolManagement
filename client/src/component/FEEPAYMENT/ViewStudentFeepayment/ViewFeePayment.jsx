import {useEffect, useState} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const ViewFeePayment =(props)=>{
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [tableView,setTableView]=useState("contents")
    const [EditView,setEditView]=useState("none")
    const [feeType,setFeeType]=useState("")
    const [Class,setClass]=useState(0)
    const [year,setYear]=useState(0)
    const [regNo,setRegNo]=useState("")

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

    const [NewAdmissionFee,setNewAdmissionFee]=useState(0)
    const [NewhostelCharge,setNewHostelCharge]=useState(0)
    const [NewTutionFee,setNewTutionFee]=useState(0)
    const [NewCautionMoney,setNewCautionMoney]=useState(0)
    const [NewExaminationFee,setNewExaminationFee]=useState(0)
    const [NewGamesSportsExicursion,setNewGamesSportsExicursion]=useState(0)
    const [NewElectricCharge,setNewElectricCharge]=useState(0)
    const [NewLibraryFees,setNewLibraryFees]=useState(0)
    const [NewComputerFees,setNewComputerFees]=useState(0)
    const [NewDevelopmentFees,setNewDevelopmentFees]=useState(0)
    const [NewMiscellaneous,setNewMiscellaneous]=useState(0)
    const [NewLaundryCharge,setNewLaundryCharge]=useState(0)
    const [NewMedicalCharge,setNewMedicalCharge]=useState(0)
    const [NewUniform,setNewUniform]=useState(0)
    const [NewSessionCharge,setNewSessionCharge]=useState(0)
    const [NewBedFee,setNewBedFee]=useState(0)
    const [NewTotal,setNewTotal]=useState(0)
    const [fine,setFine]=useState(0)
    const [finePaid,setFinePaid]=useState(0)

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
    const [waiver,setWaiver]=useState(0)
    const [PendingAmount,setPendingAmount]=useState(0)

    useEffect(()=>{
        setData(props.data)
        setFeeType(props.feeType)
    },[props.data,props.feeType])

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


    const handleEdit=(data)=>{
        console.log(data)
        setTableView("none")
        setEditView("block")
        setAdmissonFee(data.admission_fee)
        setEditAdmissonFee(data.admission_fee)
        setHostelCharge(data.hostel_fee)
        setEditHostelCharge(data.hostel_fee)
        setTutionFee(data.tution_fee)
        setEditTutionFee(data.tution_fee)
        setCautionMoney(data.caution_fee)
        setEditCautionMoney(data.caution_fee)
        setExaminationFee(data.examination_fee)
        setEditExaminationFee(data.examination_fee)
        setGamesSportsExicursion(data.sports_fee)
        setEditGamesSportsExicursion(data.sports_fee)
        setElectricCharge(data.electric_fee)
        setEditElectricCharge(data.electric_fee)
        setLibraryFees(data.library_fee)
        setEditLibraryFees(data.library_fee)
        setComputerFees(data.computer_fee)
        setEditComputerFees(data.computer_fee)
        setDevelopmentFees(data.development_fee)
        setEditDevelopmentFees(data.development_fee)
        setMiscellaneous(data.miscellaneous_fee)
        setEditMiscellaneous(data.miscellaneous_fee)
        setLaundryCharge(data.laundry_fee)
        setEditLaundryCharge(data.laundry_fee)
        setMedicalCharge(data.madical_fee)
        setEditMedicalCharge(data.madical_fee)
        setUniform(data.uniform_fee)
        setEditUniform(data.uniform_fee)
        setSessionCharge(data.session_fee)
        setEditSessionCharge(data.session_fee)
        setBedFee(data.bed_fee)
        setEditBedFee(data.bed_fee)
        setTotal(data.total_fee)
        setEditTotal(data.total_fee)
        setClass(data.class)
        setYear(data.year)
        setRegNo(data.regNo)
        setFine(data.fine)
        setFinePaid(data.fine_paid)
        setWaiver(data.waiver)
        setPendingAmount(data.status-data.total_fee)
        let data1
            console.log(feeType)
            data1 = {
                feeType: feeType,
                Class: data.class,
                year: data.year
            }
            axios.post('/api/v1/fee/getfeestructure', data1, {headers: {"Authorization": localStorage.getItem("token")}})
                .then((res) => {
                    setNewAdmissionFee(res.data.result[0].admission_fee)
                    setNewHostelCharge(res.data.result[0].hostel_fee)
                    setNewTutionFee(res.data.result[0].tution_fee)
                    setNewCautionMoney(res.data.result[0].caution_fee)
                    setNewExaminationFee(res.data.result[0].examination_fee)
                    setNewGamesSportsExicursion(res.data.result[0].sports_fee)
                    setNewElectricCharge(res.data.result[0].electric_fee)
                    setNewLibraryFees(res.data.result[0].library_fee)
                    setNewComputerFees(res.data.result[0].computer_fee)
                    setNewDevelopmentFees(res.data.result[0].development_fee)
                    setNewMiscellaneous(res.data.result[0].miscellaneous_fee)
                    setNewLaundryCharge(res.data.result[0].laundry_fee)
                    setNewMedicalCharge(res.data.result[0].madical_fee)
                    setNewUniform(res.data.result[0].uniform_fee)
                    setNewSessionCharge(res.data.result[0].session_fee)
                    setNewBedFee(res.data.result[0].bed_fee)
                    setNewTotal(res.data.result[0].total_fee)
                }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        if(props.view==="block" && props.data.length>0){
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view,props.data]);


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



    const handleCancel=()=>{
        setTableView("contents")
        setEditView("none")
        setNewAdmissionFee(0)
        setFinePaid(0)
        setFine(0)
        setWaiver(0)
        setNewHostelCharge(0)
        setNewTutionFee(0)
        setNewCautionMoney(0)
        setNewExaminationFee(0)
        setNewGamesSportsExicursion(0)
        setNewElectricCharge(0)
        setNewLibraryFees(0)
        setNewComputerFees(0)
        setNewDevelopmentFees(0)
        setNewMiscellaneous(0)
        setNewLaundryCharge(0)
        setNewMedicalCharge(0)
        setNewUniform(0)
        setNewSessionCharge(0)
        setNewBedFee(0)
        setNewTotal(0)

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


        setEditAdmissonFee(AdmissonFee)
        setEditHostelCharge(hostelCharge)
        setEditTutionFee(TutionFee)
        setEditCautionMoney(CautionMoney)
        setEditExaminationFee(ExaminationFee)
        setEditGamesSportsExicursion(GamesSportsExicursion)
        setEditElectricCharge(ElectricCharge)
        setEditLibraryFees(LibraryFees)
        setEditComputerFees(ComputerFees)
        setEditDevelopmentFees(DevelopmentFees)
        setEditMiscellaneous(Miscellaneous)
        setEditLaundryCharge(LaundryCharge)
        setEditMedicalCharge(MedicalCharge)
        setEditUniform(Uniform)
        setEditSessionCharge(SessionCharge)
        setEditBedFee(BedFee)
        setEditTotal(Total)
        setEditDate(new Date().toISOString().slice(0, 10))
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(NewTotal - EditTotal-waiver+Number(fine)-Number(finePaid))
       
        if( (NewTotal - EditTotal-waiver+Number(fine)-Number(finePaid))<0){
            alert("Please Adjust Waiver Amount According To Total Fees Paid so That final Due Amount doesn't Becomes Negative")
            return
        }
        let data={
            AdmissionFee:Number(EditAdmissonFee),
            hostelCharge:Number(EdithostelCharge),
            TutionFee:Number(EditTutionFee) ,
            CautionMoney:Number(EditCautionMoney) ,
            ExaminationFee:Number(EditExaminationFee) ,
            GamesSportsExicursion:Number(EditGamesSportsExicursion) ,
            ElectricCharge:Number(EditElectricCharge) ,
            LibraryFees:Number(EditLibraryFees) ,
            ComputerFees:Number(EditComputerFees) ,
            DevelopmentFees:Number(EditDevelopmentFees) ,
            Miscellaneous:Number(EditMiscellaneous),
            LaundryCharge:Number(EditLaundryCharge) ,
            MedicalCharge:Number(EditMedicalCharge) ,
            Uniform:Number(EditUniform) ,
            SessionCharge:Number(EditSessionCharge),
            BedFee:Number(EditBedFee) ,
            Total:Number(EditTotal),
            Class:Class,
            fine:fine===null?0:fine,
            finePaid:finePaid===null?0:finePaid,
            year:year,
            regNo:regNo,
            Date:EditDate,waiver
        }
        if(feeType==="New-Admisson"){

            axios.post("/api/v1/fee/updatenewadmissionfeeentryforupdate",data,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{

                alert("Payment Entry has been Updated For " +regNo)

                setView("none")
                setTableView("contents")
                setEditView("none")
                setNewAdmissionFee(0)
                setNewHostelCharge(0)
                setNewTutionFee(0)
                setNewCautionMoney(0)
                setNewExaminationFee(0)
                setNewGamesSportsExicursion(0)
                setNewElectricCharge(0)
                setNewLibraryFees(0)
                setNewComputerFees(0)
                setNewDevelopmentFees(0)
                setNewMiscellaneous(0)
                setNewLaundryCharge(0)
                setNewMedicalCharge(0)
                setNewUniform(0)
                setNewSessionCharge(0)
                setNewBedFee(0)
                setNewTotal(0)

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

                setEditAdmissonFee(AdmissonFee)
                setEditHostelCharge(hostelCharge)
                setEditTutionFee(TutionFee)
                setEditCautionMoney(CautionMoney)
                setEditExaminationFee(ExaminationFee)
                setEditGamesSportsExicursion(GamesSportsExicursion)
                setEditElectricCharge(ElectricCharge)
                setEditLibraryFees(LibraryFees)
                setEditComputerFees(ComputerFees)
                setEditDevelopmentFees(DevelopmentFees)
                setEditMiscellaneous(Miscellaneous)
                setEditLaundryCharge(LaundryCharge)
                setEditMedicalCharge(MedicalCharge)
                setEditUniform(Uniform)
                setEditSessionCharge(SessionCharge)
                setEditBedFee(BedFee)
                setEditTotal(Total)
                setEditDate(new Date().toISOString().slice(0, 10))
            }).catch((err)=>{
                console.log(err)
            })
        }
        else{
            axios.post("/api/v1/fee/updatereadmissionfeeentryforupdate",data,{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{

                alert("Payment Entry has been Updated For" +regNo)

                setView("none")
                setTableView("contents")
                setEditView("none")


                setNewAdmissionFee(0)
                setNewHostelCharge(0)
                setNewTutionFee(0)
                setNewCautionMoney(0)
                setNewExaminationFee(0)
                setNewGamesSportsExicursion(0)
                setNewElectricCharge(0)
                setNewLibraryFees(0)
                setNewComputerFees(0)
                setNewDevelopmentFees(0)
                setNewMiscellaneous(0)
                setNewLaundryCharge(0)
                setNewMedicalCharge(0)
                setNewUniform(0)
                setNewSessionCharge(0)
                setNewBedFee(0)
                setNewTotal(0)

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

                setEditAdmissonFee(AdmissonFee)
                setEditHostelCharge(hostelCharge)
                setEditTutionFee(TutionFee)
                setEditCautionMoney(CautionMoney)
                setEditExaminationFee(ExaminationFee)
                setEditGamesSportsExicursion(GamesSportsExicursion)
                setEditElectricCharge(ElectricCharge)
                setEditLibraryFees(LibraryFees)
                setEditComputerFees(ComputerFees)
                setEditDevelopmentFees(DevelopmentFees)
                setEditMiscellaneous(Miscellaneous)
                setEditLaundryCharge(LaundryCharge)
                setEditMedicalCharge(MedicalCharge)
                setEditUniform(Uniform)
                setEditSessionCharge(SessionCharge)
                setEditBedFee(BedFee)
                setEditTotal(Total)
                setEditDate(new Date().toISOString().slice(0, 10))
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    const currDate = new Date().toLocaleDateString();
    const clearTable=()=>{
        setData([])
    }

    return(
        <div style={{display:view}}>
            <div style={{display: tableView}}>
                <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result
                </button>
                <table className="table-60" id="Fee-Payment-view">
                    <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>
                            Name
                        </th>
                        <th>
                            Registation No
                        </th>
                        <th>
                            Academic Year
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
                            Due Amount Including Fine & Excluding Waiver
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => {
                        const pendingAmount = item.status - item.total_fee
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {item.student_Name}
                                </td>
                                <td>
                                    {item.regNo}

                                </td>
                                <td>
                                    {item.year}
                                </td>
                                <td>
                                    {convertToRoman(item.class)}
                                </td>
                                <td>
                                    {item.section}
                                </td>
                                <td>
                                    {item.roll_no}
                                </td>
                                <td style={{color: 'red'}}>
                                    {(pendingAmount + item.fine) - (item.fine_paid+item.waiver)}
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(item)}
                                            className="dashboard-btn dashboard-btn-scss">Edit
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {data.length===0 ? <div className="no-data">No Data Exists</div> : null}
            </div>

            <div style={{display: EditView}} className="dashbrd-40-colm special-25-div">
            <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">Back</button>

                <form className='fee-entry-new-adm' onSubmit={handlesubmit} style={{
                    display: 'grid',
                    color: '#3c8dbc',
                    backgroundColor: 'whitesmoke',
                    boxShadow: '0 0 5px grey',
                    marginTop: '10px'
                }}>
                    <p className="customize-centre" style={{fontSize: '16px'}}> Student Fee Details</p>
                    <dl>
                        <dt className='no-after'><label
                            style={{color: 'black', fontSize: '15px', textAlign: 'center', width: '50%'}}></label>
                        </dt>
                        <dd>
                            <label style={{fontSize: '15px', textAlign: 'center', width: '50%'}}>To be Paid</label>
                            <label style={{fontSize: '15px', textAlign: 'center', width: '50%'}}>Actual Paid</label>
                        </dd>
                        <dt>
                            <label>Admission Fee </label>
                        </dt>
                        <dd>

                            <input type="number" value={NewAdmissionFee} readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditAdmissonFee}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= (NewAdmissionFee) ? setEditAdmissonFee(e.target.value) : alert(`It should not Exceed than ${NewAdmissionFee}`)}/>
                        </dd>


                        <dt>
                            <label>Hostel Charge</label>
                        </dt>
                        <dd>
                            <input type="number" value={NewhostelCharge } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EdithostelCharge}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= (NewhostelCharge) ? setEditHostelCharge(e.target.value) : alert(`It should not Exceed than ${NewhostelCharge}`)}/>
                        </dd>


                        <dt>
                            <label>Tuition Charge </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewTutionFee } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   value={EditTutionFee}
                                   onChange={(e) => e.target.value <= (NewTutionFee) ? setEditTutionFee(e.target.value) : alert(`It should not Exceed than ${NewTutionFee}`)}/>
                        </dd>
                        
                        <dt>
                            <label>Session Charge </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewSessionCharge } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditSessionCharge}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewSessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should not Exceed than ${NewSessionCharge }`)}/>
                        </dd>


                        <dt>
                            <label>Caution Money </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewCautionMoney} readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditCautionMoney}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= (NewCautionMoney) ? setEditCautionMoney(e.target.value) : alert(`It should not Exceed than ${NewCautionMoney}`)}/>
                        </dd>


                        <dt>
                            <label>Examination Fee </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewExaminationFee } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditExaminationFee}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= (NewExaminationFee) ? setEditExaminationFee(e.target.value) : alert(`It should not Exceed than ${NewExaminationFee }`)}/>
                        </dd>


                        <dt>
                            <label>Games Sports</label>
                        </dt>
                        <dd>
                            <input type="number" value={NewGamesSportsExicursion } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditGamesSportsExicursion}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= (NewGamesSportsExicursion ) ? setEditGamesSportsExicursion(e.target.value) : alert(`It should not Exceed than ${NewGamesSportsExicursion }`)}/>
                        </dd>


                        <dt>
                            <label>Electric Charge </label>
                        </dt>
                        <dd><input type="number" value={NewElectricCharge } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditElectricCharge}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= (NewElectricCharge ) ? setEditElectricCharge(e.target.value) : alert(`It should not Exceed than ${NewElectricCharge}`)}/>
                        </dd>


                        <dt>
                            <label>Library Fees </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewLibraryFees } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditLibraryFees}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewLibraryFees  ? setEditLibraryFees(e.target.value) : alert(`It should not Exceed than ${NewLibraryFees }`)}/>
                        </dd>


                        <dt>
                            <label>Computer Fees</label>
                        </dt>
                        <dd>
                            <input type="number" value={NewComputerFees } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditComputerFees}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewComputerFees ? setEditComputerFees(e.target.value) : alert(`It should not Exceed than ${NewComputerFees }`)}/>
                        </dd>


                        <dt>
                            <label>Development Fees </label>
                        </dt>
                        <dd>

                            <input type="number" value={NewDevelopmentFees } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditDevelopmentFees}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewDevelopmentFees  ? setEditDevelopmentFees(e.target.value) : alert(`It should not Exceed than ${NewDevelopmentFees}`)}/>
                        </dd>


                       


                        <dt>
                            <label>Laundry Charge </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewLaundryCharge} readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditLaundryCharge}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewLaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should not Exceed than ${NewLaundryCharge }`)}/>
                        </dd>


                        <dt>
                            <label>Medical Charge </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewMedicalCharge } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditMedicalCharge}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewMedicalCharge  ? setEditMedicalCharge(e.target.value) : alert(`It should not Exceed than ${NewMedicalCharge }`)}/>
                        </dd>


                        <dt>
                            <label>Uniform </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewUniform } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditUniform}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewUniform  ? setEditUniform(e.target.value) : alert(`It should not Exceed than ${NewUniform }`)}/>
                        </dd>




                        <dt>
                            <label>Bed Fee </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewBedFee } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditBedFee}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewBedFee  ? setEditBedFee(e.target.value) : alert(`It should not Exceed than ${NewBedFee }`)}/>
                        </dd>
                        <dt>
                            <label>Miscellaneous </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewMiscellaneous } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder'}}/>
                            <input type="number" value={EditMiscellaneous}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   onChange={(e) => e.target.value <= NewMiscellaneous  ? setEditMiscellaneous(e.target.value) : alert(`It should not Exceed than ${NewMiscellaneous }`)}/>
                        </dd>

                        <dt style={{marginTop:'5%'}}>
                            <label>Initial Fee Structure </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewTotal } readOnly
                                   style={{backgroundColor: 'ivory', textAlign: 'center', width: '50%',fontWeight:'bolder',marginTop:'15%'}}/>
                            <input type="number" value={EditTotal}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%',marginTop:'15%'}}
                                   />
                        </dd>
                        <dt>
                            <label>Total Pending Fee(Without Waiver)</label>
                        </dt>
                        <dd>
                            <input type="number" value={NewTotal - EditTotal+Number(fine)-Number(finePaid)} readOnly
                                   style={{backgroundColor: 'ivory', color:'black',textAlign: 'center', width: '100%',fontWeight:'bolder'}}/>
                            {/* <input type="number" value={EditTotal+Number(finePaid)-waiver}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   readOnly={true}/> */}
                                   </dd>


                       

<dt>
                            <label>Waiver Imposed</label>
                        </dt>
                        <dd>
                            <input type="number" value={waiver} style={{backgroundColor: 'azure',color:'black' ,textAlign: 'center', width: '100%',fontWeight:'bolder'}}
                            onChange={(e) => e.target.value <= (NewTotal - EditTotal+Number(fine)-Number(finePaid)) ? setWaiver(e.target.value) : alert(`It should not Exceed than ${(NewTotal - EditTotal+Number(fine)-Number(finePaid))}`)}/>
                                   </dd>           

                        <dt>
                            <label>Fine to Be Imposed</label>
                        </dt>
                        <dd>
                            <input type="number" value={fine} onChange={(e) => setFine(e.target.value)}
                                   style={{backgroundColor: 'azure',textAlign: 'center', width: '100%',fontWeight:'bolder'}}/></dd>
                            
                                   <dt>
                            <label>Fine Paid</label> </dt>
                            <dd>
                           
                            <input type="number" value={finePaid}
                                   style={{backgroundColor: 'azure',textAlign: 'center', width: '100%',fontWeight:'bolder'}}
                                   onChange=
                                   {(e) => e.target.value <= fine ? setFinePaid(e.target.value) : alert(`It should not Exceed than ${fine}`)}/></dd>





<dt>
                            <label>Final Pending Fee </label>
                        </dt>
                        <dd>
                            <input type="number" value={NewTotal - EditTotal-waiver+Number(fine)-Number(finePaid)} readOnly
                                   style={{backgroundColor: 'lightcoral', color:'white',textAlign: 'center', width: '100%'}}/>
                            {/* <input type="number" value={EditTotal+Number(finePaid)-waiver}
                                   style={{marginLeft: '10px', textAlign: 'center', width: '50%'}}
                                   readOnly={true}/> */}
                                   </dd>
                                  
                       

                    </dl>
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>

                </form>
            </div>

        </div>
    )
}
export default ViewFeePayment