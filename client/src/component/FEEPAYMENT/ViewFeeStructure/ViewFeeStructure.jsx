import {useEffect, useState} from "react";
import axios from "axios";

const ViewFeeStructure = (props) => {
    const[view,setView]=useState("none")
    const [feeStructure,setFeeStructure]=useState([])
    const [editedIndex, setEditedIndex] = useState("none");
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
        setEditedIndex("block");
        setView("none")
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
        setEditedIndex("none")
        setView("block")
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
        axios.post("/api/v1/fee/editfeestructure",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                console.log(res)
                setEditedIndex("none")
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
                setView("none")
            }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <>
            <div style={{display: view}}>
                <table className="table-60">
                    <thead>
                    <tr>
                        <th>Class</th>
                        <th>Year</th>
                        <th>Fee Type</th>
                        <th>Total Fee</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {feeStructure.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.class}</td>
                                <td>{data.year}</td>
                                <td>{data.fee_type}</td>
                                <td>{data.total_fee}</td>
                                <td>
                                    <button className="dashboard-btn dashboard-btn-scss"
                                            onClick={() => editFeeStructure(data, index)}>Edit
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

            </div>
            <div style={{display: editedIndex}}className="dashbrd-40-colm special-25-div">
                <button className="dashboard-btn dashboard-btn-scss"
                        onClick={handleCancel}>Cancel
                </button>
                <h1>Edit View</h1>
                <form>
                    <div>

                    </div>
                </form>
            </div>
        </>
    )
}
export default ViewFeeStructure;