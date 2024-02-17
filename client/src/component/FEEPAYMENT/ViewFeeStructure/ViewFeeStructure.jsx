import {useEffect, useState} from "react";


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


    useEffect(() => {
        setFeeStructure(props.data)
    },[props.data])

    useEffect(() => {
        if (props.view === "block"&& props.view40==="block") {
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
    return(
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
                            <td>{data.hostel_fee}</td>
                            <td>{data.tution_fee}</td>
                            <td>{data.caution_fee}</td>
                            <td>{data.examination_fee}</td>
                            <td>{data.sports_fee}</td>
                            <td>{data.electric_fee}</td>
                            <td>{data.library_fee}</td>
                            <td>{data.computer_fee}</td>
                            <td>{data.development_fee}</td>
                            <td>{data.miscellaneous_fee}</td>
                            <td>{data.laundry_fee}</td>
                            <td>{data.madical_fee}</td>
                            <td>{data.uniform_fee}</td>
                            <td>{data.session_fee}</td>
                            <td>{data.bed_fee}</td>
                            <td>{data.total_fee}</td>
                            <td>
                                <button className="dashboard-btn dashboard-btn-scss" onClick={()=>editFeeStructure(data,index)}>Edit</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default ViewFeeStructure;