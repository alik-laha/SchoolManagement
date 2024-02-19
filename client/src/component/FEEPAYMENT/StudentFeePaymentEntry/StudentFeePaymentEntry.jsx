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
    }

    const handleCancel=()=>{
        setMonthlyView("none")
        setNewadmissionView("none")
        setReadmissionView("none")
        setTableView("block")
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
            <div style={{display: monthlyView}}>
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <h1>Monthly Fee</h1>
            </div>
            <div style={{display: NewadmissionView}}>
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <h1>New Admission Fee</h1>
            </div>
            <div style={{display: readmissionView}}>
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <h1>Readmission Fee</h1>
            </div>
        </div>
    )
}
export default StudentFeePaymentEntry;