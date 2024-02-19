import {useEffect, useState} from "react";

const StudentFeePaymentEntry = (props) => {
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [FeeType,setFeeType]=useState("")
    const [tableView,setTableView]=useState("block")
    const [monthlyView,setMonthlyView]=useState("none")
    const [NewadmissionView,setNewadmissionView]=useState("none")
    const [readmissionView,setReadmissionView]=useState("none")
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

    useEffect(() => {
        if(props.view==="block" && props.data.length>0){
            setView("block")
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


    const handleClick=(data)=>{
        console.log("clicked")
        if(FeeType==="Monthly"){
            setMonthlyView("block")
        }
        else if(FeeType==="NewAdmission"){
            setNewadmissionView("block")

        }
        else if(FeeType==="ReAdmisson"){
            setReadmissionView("block")
        }
        setTableView("none")
        console.log(data)

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
    }

    const handleCancel=()=>{
        setMonthlyView("none")
        setNewadmissionView("none")
        setReadmissionView("none")
        setTableView("block")
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
        console.log(EditTotal,EdithostelCharge,EditTutionFee)
    }

    return(
        <div style={{display:view}}>
            <div style={{display:tableView}}>
            <table className="table-60" >
                <thead>
                <tr>
                    <th>index</th>
                    <th>Name</th>
                    <th>Reg No</th>
                    <th>Class</th>
                    <th>Roll No</th>
                    <th>Section</th>
                    <th>Year</th>
                    <th>Total</th>
                    <th>Entry Status</th>
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
                                <td>{item.class}</td>
                                <td>{item.roll_no}</td>
                                <td>{item.section}</td>
                                <td>{item.year}</td>
                                <td>{item.total_fee}</td>
                                <td>{ <input type='checkbox'
                                    checked={item.status === 1 ? true : false}></input>}</td>
                                <td><button onClick={()=>handleClick(item)} className="dashboard-btn dashboard-btn-scss" disabled={item.status === 1 ? true : false}>Entry</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>

            // Monthly Fee Payment
            <div style={{display: monthlyView}} className="dashbrd-40-colm special-25-div">
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <form onSubmit={HandleMonthlyPaymentSubmit}>
                    <div>
                        <label>Hostel Charge: </label>
                        <label>{hostelCharge}: </label>
                        <input type="number" value={EdithostelCharge}
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/>
                    </div>

                    <div>
                        <label>Tution Charge: </label>
                        <label>{TutionFee}: </label>
                        <input type="number" value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/>
                    </div>

                    <div>
                        <label>Total Fee: </label>
                        <label>{Total}: </label>
                        <input type="number" value={EditTotal}
                               readOnly={true}/>
                    </div>
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>

                </form>
            </div>

            // New Admission Fee Payment
            <div style={{display: NewadmissionView}}>
            <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <h1>New Admission Fee</h1>
            </div>

            // Readmission Fee Payment
            <div style={{display: readmissionView}}>
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <h1>Readmission Fee</h1>
            </div>
        </div>
    )
}
export default StudentFeePaymentEntry;