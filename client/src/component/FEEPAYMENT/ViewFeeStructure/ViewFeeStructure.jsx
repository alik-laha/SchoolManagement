import {useEffect, useState} from "react";
import axios from "axios";

const ViewFeeStructure = (props) => {
   const[view,setView]=useState("none")
   const [feeStructure,setFeeStructure]=useState([])
    const [editedIndex, setEditedIndex] = useState(null);
   const [admissionFee,setAdmissionFee]=useState(0)
    const [hostelFee,setHostelFee]=useState(0)
    const [tutionFee,setTutionFee]=useState(0)
    const [cautionFee,setCautionFee]=useState(0)
    const [examinationFee,setExaminationFee]=useState(0)
    const [sportsFee,setSportsFee]=useState(0)
    const [electricFee,setElectricFee]=useState(0)
    const [libraryFee,setLibraryFee]=useState(0)
    const [computerFee,setComputerFee]=useState(0)
    const [developmentFee,setDevelopmentFee]=useState(0)
    const [miscellaneousFee,setMiscellaneousFee]=useState(0)
    const [laundryFee,setLaundryFee]=useState(0)
    const [medicalFee,setMedicalFee]=useState(0)
    const [uniformFee,setUniformFee]=useState(0)
    const [sessionFee,setSessionFee]=useState(0)
    const [bedFee,setBedFee]=useState(0)
    const [totalFee,setTotalFee]=useState(0)

    const calculateTotal = () => {
        setTotalFee(
            Number(admissionFee) +
            Number(hostelFee) +
            Number(tutionFee) +
            Number(cautionFee) +
            Number(examinationFee) +
            Number(sportsFee) +
            Number(electricFee) +
            Number(libraryFee) +
            Number(computerFee) +
            Number(developmentFee) +
            Number(miscellaneousFee) +
            Number(laundryFee) +
            Number(medicalFee) +
            Number(uniformFee) +
            Number(sessionFee) +
            Number(bedFee)
        )
    };

    useEffect(() => {
        calculateTotal()
    }, [admissionFee,hostelFee,tutionFee,cautionFee,examinationFee,sportsFee,electricFee,libraryFee,computerFee,developmentFee,miscellaneousFee,laundryFee,medicalFee,uniformFee,sessionFee,bedFee]);

    useEffect(() => {
        setFeeStructure(props.data)
    },[props.data])

    useEffect(() => {
        if ( props.data.length>0 && props.view40==="block") {
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.view,props.data,props.view40]);

   const editFeeStructure=(data,ind)=>{
    setEditedIndex(ind);
    setAdmissionFee(data.admission_fee)
    setHostelFee(data.hostel_fee)
    setTutionFee(data.tution_fee)
    setCautionFee(data.caution_fee)
    setExaminationFee(data.examination_fee)
    setSportsFee(data.sports_fee)
    setElectricFee(data.electric_fee)
    setLibraryFee(data.library_fee)
    setComputerFee(data.computer_fee)
    setDevelopmentFee(data.development_fee)
    setMiscellaneousFee(data.miscellaneous_fee)
    setLaundryFee(data.laundry_fee)
    setMedicalFee(data.madical_fee)
    setUniformFee(data.uniform_fee)
    setSessionFee(data.session_fee)
    setBedFee(data.bed_fee)
    setTotalFee(data.total_fee)

   }

   const handleCancel=()=>{
         setEditedIndex(null)
       setAdmissionFee(0)
       setHostelFee(0)
       setTutionFee(0)
       setCautionFee(0)
       setExaminationFee(0)
       setSportsFee(0)
       setElectricFee(0)
       setLibraryFee(0)
       setComputerFee(0)
       setDevelopmentFee(0)
       setMiscellaneousFee(0)
       setLaundryFee(0)
       setMedicalFee(0)
       setUniformFee(0)
       setSessionFee(0)
       setBedFee(0)
       setTotalFee(0)

   }

   const handleSubmit=(id)=>{
         const data={
              id:id,
             AdmissonFee:admissionFee,
             hostelCharge:hostelFee,
             TutionFee:tutionFee,
             CautionMoney:cautionFee,
             ExaminationFee:examinationFee,
             GamesSportsExicursion:sportsFee,
             ElectricCharge:electricFee,
             LibraryFees:libraryFee,
             ComputerFees:computerFee,
             DevelopmentFees:developmentFee,
             Miscellaneous:miscellaneousFee,
             LaundryCharge:laundryFee,
             MedicalCharge:medicalFee,
             Uniform:uniformFee,
             SessionCharge:sessionFee,
             BedFee:bedFee,
             Total:totalFee
         }
         axios.post("http://localhost:7000/api/v1/fee/editfeestructure",data)
              .then((res)=>{
                console.log(res)
                  setEditedIndex(null)
                  setView("none")
              }).catch((error)=>{
              console.log(error)
         })
   }

    return(
        <>
        <div style={{display:view}}>
            <table className="table-60">
                <thead>
                <tr>
                    <th>Class</th>
                    <th>Year</th>
                    <th>Fee Type</th>
                    <th>Admission Fee</th>
                    <th>Hostel Fee</th>
                    <th>Tution Fee</th>
                    <th>Caution Fee</th>
                    <th>Examination Fee</th>
                    <th>Sports Fee</th>
                    <th>Electric Fee</th>
                    <th>Library Fee</th>
                    <th>Computer Fee</th>
                    <th>Development Fee</th>
                    <th>Miscellaneous Fee</th>
                    <th>Laundry Fee</th>
                    <th>Medical Fee</th>
                    <th>Uniform Fee</th>
                    <th>Session Fee</th>
                    <th>Bed Fee</th>
                    <th>Total Fee</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {feeStructure.map((data,index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.class}</td>
                            <td>{data.year}</td>
                            <td>{data.fee_type}</td>
                            <td>{index===editedIndex ? <input value={admissionFee} onChange={(e)=>setAdmissionFee(e.target.value)}/>:data.admission_fee}</td>
                            <td>{index===editedIndex ? <input value={hostelFee} onChange={(e)=>setHostelFee(e.target.value)}/>:data.hostel_fee}</td>
                            <td>{index===editedIndex ? <input value={tutionFee} onChange={(e)=>setTutionFee(e.target.value)}/>:data.tution_fee}</td>
                            <td>{index===editedIndex ? <input value={cautionFee} onChange={(e)=>setCautionFee(e.target.value)}/>:data.caution_fee}</td>
                            <td>{index===editedIndex ? <input value={examinationFee} onChange={(e)=>setExaminationFee(e.target.value)}/>:data.examination_fee}</td>
                            <td>{index===editedIndex ? <input value={sportsFee} onChange={(e)=>setSportsFee(e.target.value)}/>:data.sports_fee}</td>
                            <td>{index===editedIndex ? <input value={electricFee} onChange={(e)=>setElectricFee(e.target.value)}/>:data.electric_fee}</td>
                            <td>{index===editedIndex ? <input value={libraryFee} onChange={(e)=>setLibraryFee(e.target.value)}/>:data.library_fee}</td>
                            <td>{index===editedIndex ? <input value={computerFee} onChange={(e)=>setComputerFee(e.target.value)}/>:data.computer_fee}</td>
                            <td>{index===editedIndex ? <input value={developmentFee} onChange={(e)=>setDevelopmentFee(e.target.value)}/>:data.development_fee}</td>
                            <td>{index===editedIndex ? <input value={miscellaneousFee} onChange={(e)=>setMiscellaneousFee(e.target.value)}/>:data.miscellaneous_fee}</td>
                            <td>{index===editedIndex ? <input value={laundryFee} onChange={(e)=>setLaundryFee(e.target.value)}/>:data.laundry_fee}</td>
                            <td>{index===editedIndex ? <input value={medicalFee} onChange={(e)=>setMedicalFee(e.target.value)}/>:data.madical_fee}</td>
                            <td>{index===editedIndex ? <input value={uniformFee} onChange={(e)=>setUniformFee(e.target.value)}/>:data.uniform_fee}</td>
                            <td>{index===editedIndex ? <input value={sessionFee} onChange={(e)=>setSessionFee(e.target.value)}/>:data.session_fee}</td>
                            <td>{index===editedIndex ? <input value={bedFee} onChange={(e)=>setBedFee(e.target.value)}/>:data.bed_fee}</td>
                            <td>{index===editedIndex ? totalFee:data.total_fee}</td>
                            <td>{
                                index===editedIndex ? (
                                    <>
                                    <button className="dashboard-btn dashboard-btn-scss" onClick={handleCancel}>Cancel</button>
                                    <button className="dashboard-btn dashboard-btn-scss" onClick={()=>handleSubmit(data.id)}>Submit</button>
                                    </>
                                ):(
                                    <button className="dashboard-btn dashboard-btn-scss" onClick={()=>editFeeStructure(data,index)}>Edit</button>
                                )
                            }
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default ViewFeeStructure;