import {useEffect, useState} from "react";
import axios from "axios";

const ViewFeeStructure = (props) => {
    const[view,setView]=useState("none")
    const [feeStructure,setFeeStructure]=useState([])
    const [editedIndex, setEditedIndex] = useState("none");
    const [FeeType,setFeetype]=useState("")
    const [Class,setClass]=useState(0)
    const [year,setYear]=useState(0)
    const [id,setId]=useState(0)

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

    useEffect(() => {
        if ( props.data.length>0 && props.view40==="block") {
            setView("block")
            setEditedIndex("none")
        }
        else {
            setView("none")
            setEditedIndex("none")
        }
    }, [props.view,props.data,props.view40]);

    const editFeeStructure=(data,ind)=>{
        setEditedIndex("block");
        setView("none")
        console.log(data)
        setFeetype(data.fee_type)
        setClass(data.class)
        setYear(data.year)
        setId(data.id)
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
        setFeetype("")
        setClass(0)
        setId(0)
        setYear(0)
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
    const clearTable = () => {
        
        setFeeStructure([])
        };

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={
            id:id,
            Class,
            year,
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
                alert("Updated Structure")
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
                setClass(0)
                setYear(0)
                setFeetype("")
                setId(0)
            }).catch((error)=>{
                if(error.response.data.msg.errno===1062){
                    alert(`Fee Structure Already Exists for Class ${convertToRoman(Class)} in the Academic Year ${year}`)
                  }
            console.log(error)
        })
    }

    return(
        <div>
            <div style={{display: view}}>
                <table className="table-60">
                    <thead>
                    <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                    <tr>
                        <th style={{width: '10%'}}>Sl. No.</th>
                        <th>Fee Type</th>
                        
                        <th>Year</th>
                        <th>Class</th>
                        <th>Total Fee</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {feeStructure.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.fee_type}</td>
                                
                                <td>{data.year}</td>
                                <td>{convertToRoman(data.class)}</td>
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
                {feeStructure.length === 0 ? <div className="no-data">No Data Exists</div> : null}

            </div>
            <div style={{display: editedIndex}} className="dashbrd-40-colm special-25-div">
                <button  className="dashboard-btn dashboard-btn-scss"
                        onClick={handleCancel}>Cancel
                </button>
                <form onSubmit={handleSubmit}
                      style={{display: 'grid', color: '#3c8dbc', backgroundColor: 'azure', boxShadow: '0 0 5px grey',marginTop:'10px'}}>
                        <p style={{fontSize:'17px'}} className="customize-centre">Edit Fee Structure</p>

                    <dl className="dl-horizontal">

                        <dt><label>Class</label></dt>
                        <dd><select onChange={(e) => setClass(parseInt(e.target.value))} required value={Class}>
                            <option value="">Class</option>
                            <option value="1">
                                I
                            </option>
                            <option value="2">
                                II
                            </option>
                            <option value="3">
                                III
                            </option>
                            <option value="4">
                                IV
                            </option>
                            <option value="5">
                                V
                            </option>
                            <option value="6">
                                VI
                            </option>
                            <option value="7">
                                VII
                            </option>

                            <option value="8">
                                VIII
                            </option>
                            <option value="9">
                                IX
                            </option>
                            <option value="10">
                                X
                            </option>
                            <option value="11">
                                XI
                            </option>
                            <option value="12">
                                XII
                            </option>

                        </select>
                        </dd>

                        <dt><label>Year</label></dt>
                        <dd><input type="number" value={year} onChange={(e) => setYear(e.target.value)}/>
                        </dd>

                        <dt><label>Fee Type</label></dt>
                        <dd><input type="text" value={FeeType} readOnly />
                        </dd>

                        <dt><label>Admission Fee</label></dt>
                        <dd><input type="number" value={admissionFee} onChange={(e) => setAdmissionFee(e.target.value)}/>
                        </dd>

                        <dt><label>Hostel Charge</label></dt>
                        <dd><input type="number" value={hostelFee}
                                   onChange={(e) => setHostelFee(e.target.value)}/>
                        </dd>

                        <dt><label>Tution Fee</label></dt>
                        <dd><input type="number" value={tutionFee} onChange={(e) => setTutionFee(e.target.value)}/>
                        </dd>

                        <dt><label>Caution Money</label></dt>
                        <dd><input type="number" value={cautionFee}
                                   onChange={(e) => setCautionFee(e.target.value)}/>
                        </dd>

                        <dt><label>Examination Fee</label></dt>
                        <dd><input type="number" value={examinationFee}
                                   onChange={(e) => setExaminationFee(e.target.value)}/>
                        </dd>

                        <dt><label>Games,Sports & Exicursion</label></dt>
                        <dd><input type="number" value={sportsFee}
                                   onChange={(e) => setSportsFee(e.target.value)}/>
                        </dd>

                        <dt><label>Electric Charge</label></dt>
                        <dd><input type="number" value={electricFee}
                                   onChange={(e) => setElectricFee(e.target.value)}/>
                        </dd>

                        <dt><label>Library Fees</label></dt>
                        <dd><input type="number" value={libraryFee} onChange={(e) => setLibraryFee(e.target.value)}/>
                        </dd>

                        <dt><label>Computer Fees</label></dt>
                        <dd><input type="number" value={computerFee}
                                   onChange={(e) => setComputerFee(e.target.value)}/>
                        </dd>

                        <dt><label>Development Fees</label></dt>
                        <dd><input type="number" value={developmentFee}
                                   onChange={(e) => setDevelopmentFee(e.target.value)}/>
                        </dd>

                        <dt><label>Miscellaneous</label></dt>
                        <dd><input type="number" value={miscellaneousFee}
                                   onChange={(e) => setMiscellaneousFee(e.target.value)}/>
                        </dd>

                        <dt><label>Laundry Charge</label></dt>
                        <dd><input type="number" value={laundryFee}
                                   onChange={(e) => setLaundryFee(e.target.value)}/>
                        </dd>

                        <dt><label>Medical Charge</label></dt>
                        <dd><input type="number" value={medicalFee}
                                   onChange={(e) => setMedicalFee(e.target.value)}/>
                        </dd>

                        <dt><label>Uniform</label></dt>
                        <dd><input type="number" value={uniformFee} onChange={(e) => setUniformFee(e.target.value)}/>
                        </dd>

                        <dt><label>Session Charge</label></dt>
                        <dd><input type="number" value={sessionFee}
                                   onChange={(e) => setSessionFee(e.target.value)}/>
                        </dd>

                        <dt><label>Bed Fee</label></dt>
                        <dd><input type="number" value={bedFee} onChange={(e) => setBedFee(e.target.value)}/>
                        </dd>

                        <dt><label>Total</label></dt>
                        <dd><input type="number" value={totalFee} readOnly={true}/>
                        </dd>
                    </dl>
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
                </form>
            </div>
        </div>
    )
}
export default ViewFeeStructure;