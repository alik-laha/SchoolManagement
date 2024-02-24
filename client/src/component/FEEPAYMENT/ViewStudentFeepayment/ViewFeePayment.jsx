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
    const [EditDate,setEditDate]=useState("")


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

            <div style={{display: EditView}} className="dashbrd-40-colm special-25-div">
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">Back</button>
                <form>
                    <div>
                        <label>Admission Fee: </label>
                        <label>{AdmissonFee-NewAdmissionFee}: </label>
                        <input type="number" value={EditAdmissonFee}
                               onChange={(e) => e.target.value <= AdmissonFee-NewAdmissionFee ? setEditAdmissonFee(e.target.value) : alert(`It should be lower then ${AdmissonFee}`)}/>
                    </div>

                    <div>
                        <label>Hostel Charge: </label>
                        <label>{hostelCharge-NewhostelCharge}: </label>
                        <input type="number" value={EdithostelCharge}
                               onChange={(e) => e.target.value <= hostelCharge-NewhostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/>
                    </div>

                    <div>
                        <label>Tution Charge: </label>
                        <label>{TutionFee}: </label>
                        <input type="number" value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee-NewTutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/>
                    </div>

                    <div>
                        <label>Caution Money: </label>
                        <label>{CautionMoney}: </label>
                        <input type="number" value={EditCautionMoney}
                               onChange={(e) => e.target.value <= CautionMoney ? setEditCautionMoney(e.target.value) : alert(`It should be lower then ${CautionMoney}`)}/>
                    </div>

                    <div>
                        <label>Examination Fee: </label>
                        <label>{ExaminationFee}: </label>
                        <input type="number" value={EditExaminationFee}
                               onChange={(e) => e.target.value <= ExaminationFee ? setEditExaminationFee(e.target.value) : alert(`It should be lower then ${ExaminationFee}`)}/>
                    </div>

                    <div>
                        <label>Games Sports Exicursion: </label>
                        <label>{GamesSportsExicursion}: </label>
                        <input type="number" value={EditGamesSportsExicursion}
                               onChange={(e) => e.target.value <= GamesSportsExicursion ? setEditGamesSportsExicursion(e.target.value) : alert(`It should be lower then ${GamesSportsExicursion}`)}/>
                    </div>

                    <div>
                        <label>Electric Charge: </label>
                        <label>{ElectricCharge}: </label>
                        <input type="number" value={EditElectricCharge}
                               onChange={(e) => e.target.value <= ElectricCharge ? setEditElectricCharge(e.target.value) : alert(`It should be lower then ${ElectricCharge}`)}/>
                    </div>

                    <div>
                        <label>Library Fees: </label>
                        <label>{LibraryFees}: </label>
                        <input type="number" value={EditLibraryFees}
                               onChange={(e) => e.target.value <= LibraryFees ? setEditLibraryFees(e.target.value) : alert(`It should be lower then ${LibraryFees}`)}/>
                    </div>

                    <div>
                        <label>Computer Fees: </label>
                        <label>{ComputerFees}: </label>
                        <input type="number" value={EditComputerFees}
                               onChange={(e) => e.target.value <= ComputerFees ? setEditComputerFees(e.target.value) : alert(`It should be lower then ${ComputerFees}`)}/>

                    </div>
                    <div>
                        <label>Development Fees: </label>
                        <label>{DevelopmentFees}: </label>
                        <input type="number" value={EditDevelopmentFees}
                               onChange={(e) => e.target.value <= DevelopmentFees ? setEditDevelopmentFees(e.target.value) : alert(`It should be lower then ${DevelopmentFees}`)}/>
                    </div>

                    <div>
                        <label>Miscellaneous: </label>
                        <label>{Miscellaneous}: </label>
                        <input type="number" value={EditMiscellaneous}
                               onChange={(e) => e.target.value <= Miscellaneous ? setEditMiscellaneous(e.target.value) : alert(`It should be lower then ${Miscellaneous}`)}/>
                    </div>

                    <div>
                        <label>Laundry Charge: </label>
                        <label>{LaundryCharge}: </label>
                        <input type="number" value={EditLaundryCharge}
                               onChange={(e) => e.target.value <= LaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should be lower then ${LaundryCharge}`)}/>
                    </div>

                    <div>
                        <label>Medical Charge: </label>
                        <label>{MedicalCharge}: </label>
                        <input type="number" value={EditMedicalCharge}
                               onChange={(e) => e.target.value <= MedicalCharge ? setEditMedicalCharge(e.target.value) : alert(`It should be lower then ${MedicalCharge}`)}/>
                    </div>

                    <div>
                        <label>Uniform: </label>
                        <label>{Uniform}: </label>
                        <input type="number" value={EditUniform}
                               onChange={(e) => e.target.value <= Uniform ? setEditUniform(e.target.value) : alert(`It should be lower then ${Uniform}`)}/>
                    </div>

                    <div>
                        <label>Session Charge: </label>
                        <label>{SessionCharge}: </label>
                        <input type="number" value={EditSessionCharge}
                               onChange={(e) => e.target.value <= SessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should be lower then ${SessionCharge}`)}/>
                    </div>

                    <div>
                        <label>Bed Fee: </label>
                        <label>{BedFee}: </label>
                        <input type="number" value={EditBedFee}
                               onChange={(e) => e.target.value <= BedFee ? setEditBedFee(e.target.value) : alert(`It should be lower then ${BedFee}`)}/>
                    </div>

                    <div>
                        <label>Total Fee: </label>
                        <label>{Total}: </label>
                        <input type="number" value={EditTotal}
                               readOnly={true}/>
                    </div>
                    <div>
                        <label>Payment Date</label>
                        <input type="date" value={EditDate} onChange={(e) => setEditDate(e.target.value)}/>
                    </div>
                    <span><button className="dashboard-btn dashboard-btn-scss"
                                  >Submit</button></span>
                </form>
            </div>
        </div>
    )
}
export default ViewFeePayment