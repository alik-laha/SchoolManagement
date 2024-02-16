import {useState} from "react";

const CreateFeeSturcture = (props) => {
    const [Class,setClass]=useState("")
    const [FeeType,setFeeType]=useState("")
    const [AdmissonFee,setAdmissonFee]=useState(0)
    const [Year,setYear]=useState(0)
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


    return(
        <div style={{display:props.view}} className="dashbrd-40-colm special-25-div">
            <form>
                <div>
                    <label>Class</label>
                    <select onChange={(e) => setClass(parseInt(e.target.value))} required value={Class}>
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
                        v
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
                </div>
                <div>
                    <label>Year</label>
                    <input type="number" value={Year} onChange={(e) => setYear(e.target.value)}/>
                </div>
                <div>
                    <label>Fee Type</label>
                    <select value={FeeType} onChange={(e) => setFeeType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                        <option value="ReAdmisson">Re-Admisson</option>
                    </select>
                </div>
                <div>
                    <label>Admission Fee</label>
                    <input type="number" value={AdmissonFee} onChange={(e) => setAdmissonFee(e.target.value)}/>
                </div>
                <div>
                    <label>Hostel Charge</label>
                    <input type="number" value={hostelCharge} onChange={(e) => setHostelCharge(e.target.value)}/>
                </div>
                <div>
                    <label>Tution Fee</label>
                    <input type="number" value={TutionFee} onChange={(e) => setTutionFee(e.target.value)}/>
                </div>
                <div>
                    <label>Caution Money</label>
                    <input type="number" value={CautionMoney} onChange={(e) => setCautionMoney(e.target.value)}/>
                </div>
                <div>
                    <label>Examination Fee</label>
                    <input type="number" value={ExaminationFee} onChange={(e) => setExaminationFee(e.target.value)}/>
                </div>
                <div>
                    <label>Games,Sports & Exicursion</label>
                    <input type="number" value={GamesSportsExicursion} onChange={(e) => setGamesSportsExicursion(e.target.value)}/>
                </div>
                <div>
                    <label>Electric Charge</label>
                    <input type="number" value={ElectricCharge} onChange={(e) => setElectricCharge(e.target.value)}/>
                </div>
                <div>
                    <label>Library Fees</label>
                    <input type="number" value={LibraryFees} onChange={(e) => setLibraryFees(e.target.value)}/>
                </div>
                <div>
                    <label>Computer Fees</label>
                    <input type="number" value={ComputerFees} onChange={(e) => setComputerFees(e.target.value)}/>
                </div>
                <div>
                    <label>Development Fees</label>
                    <input type="number" value={DevelopmentFees} onChange={(e) => setDevelopmentFees(e.target.value)}/>
                </div>
                <div>
                    <label>Miscellaneous</label>
                    <input type="number" value={Miscellaneous} onChange={(e) => setMiscellaneous(e.target.value)}/>
                </div>
                <div>
                    <label>Laundry Charge</label>
                    <input type="number" value={LaundryCharge} onChange={(e) => setLaundryCharge(e.target.value)}/>
                </div>
                <div>
                    <label>Medical Charge</label>
                    <input type="number" value={MedicalCharge} onChange={(e) => setMedicalCharge(e.target.value)}/>
                </div>
                <div>
                    <label>Uniform</label>
                    <input type="number" value={Uniform} onChange={(e) => setUniform(e.target.value)}/>
                </div>
                <div>
                    <label>Session Charge</label>
                    <input type="number" value={SessionCharge} onChange={(e) => setSessionCharge(e.target.value)}/>
                </div>
                <div>
                    <label>Bed Fee</label>
                    <input type="number" value={BedFee} onChange={(e) => setBedFee(e.target.value)}/>
                </div>
                <div>
                    <label>Total</label>
                    <input type="number" value={Total} readOnly={true}/>
                </div>
            </form>
        </div>
    )
}
export default CreateFeeSturcture;