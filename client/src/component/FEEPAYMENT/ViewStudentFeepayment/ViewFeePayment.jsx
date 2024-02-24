import {useEffect, useState} from "react";
import axios from "axios";

const ViewFeePayment =(props)=>{
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [tableView,setTableView]=useState("contents")
    const [EditView,setEditView]=useState("none")


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



    const handleEdit=(data)=>{
        console.log(data)
        setTableView("none")
        setEditView("block")
        setAdmissonFee(data.admission_fee)
        setHostelCharge(data.hostel_charge)
        setTutionFee(data.tution_fee)
        setCautionMoney(data.caution_money)
        setExaminationFee(data.examination_fee)
        setGamesSportsExicursion(data.games_sports_excursion)
        setElectricCharge(data.electric_charge)
        setLibraryFees(data.library_fees)
        setComputerFees(data.computer_fees)
        setDevelopmentFees(data.development_fees)
        setMiscellaneous(data.miscellaneous)
        setLaundryCharge(data.laundry_charge)
        setMedicalCharge(data.medical_charge)
        setUniform(data.uniform)
        setSessionCharge(data.session_charge)
        setBedFee(data.bed_fee)
        setTotal(data.total_fee)

        const data1= {
            regNo: data.regNo,
            Class: data.class,
            year: data.year
        }
        if(data.fee_type==="NewAdmission") {
            axios.post('/api/v1/fee/getnewadmissionfeeentryforupdate', data1, {headers: {"Authorization": localStorage.getItem("token")}})
                .then((res) => {
                    console.log(res.data.result)
                    setNewAdmissionFee(res.data.result.admission_fee)
                    setNewHostelCharge(res.data.result.hostel_charge)
                    setNewTutionFee(res.data.result.tution_fee)
                    setNewCautionMoney(res.data.result.caution_money)
                    setNewExaminationFee(res.data.result.examination_fee)
                    setNewGamesSportsExicursion(res.data.result.games_sports_excursion)
                    setNewElectricCharge(res.data.result.electric_charge)
                    setNewLibraryFees(res.data.result.library_fees)
                    setNewComputerFees(res.data.result.computer_fees)
                    setNewDevelopmentFees(res.data.result.development_fees)
                    setNewMiscellaneous(res.data.result.miscellaneous)
                    setNewLaundryCharge(res.data.result.laundry_charge)
                    setNewMedicalCharge(res.data.result.medical_charge)
                    setNewUniform(res.data.result.uniform)
                    setNewSessionCharge(res.data.result.session_charge)
                    setNewBedFee(res.data.result.bed_fee)
                    setNewTotal(res.data.result.total_fee)
                }).catch((err) => {
                console.log(err)
            })
        }
    }
    useEffect(() => {
        if(props.view==="block" && props.data.length>0){
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view,props.data]);

    useEffect(()=>{
        setData(props.data)
    },[props.data])


    const handleCancel=()=>{
        setTableView("contents")
        setEditView("none")
    }


    return(
        <div style={{display:view}}>
        <div style={{display:tableView}}>
            <table className="table-60" >
                <thead>
                <tr>
                <th>
                    Name
                </th>
                <th>
                    Class
                </th>
                <th>
                    Year
                </th>
                <th>
                    Registation No
                </th>
                <th>
                    Pending Amount
                </th>
                    <th>
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {data.map((item,index)=>{
                    const pendingAmount=item.status-item.total_fee
                    return(
                        <tr key={index}>
                            <td>
                                {item.student_Name}
                            </td>
                            <td>
                                {item.class}
                            </td>
                            <td>
                                {item.year}
                            </td>
                            <td>
                                {item.regNo}
                            </td>
                            <td>
                                {pendingAmount}
                            </td>
                            <td>
                                <button onClick={()=>handleEdit(item)} className="dashboard-btn dashboard-btn-scss">Edit</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

            <div style={{display: EditView}}>
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">Back</button>
                <h1>Hii</h1>
            </div>
        </div>
    )
}
export default ViewFeePayment