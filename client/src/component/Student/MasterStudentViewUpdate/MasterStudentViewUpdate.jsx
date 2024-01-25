import {useEffect, useState} from "react";

const MasterStudentViewUpdate = (props) => {
    const [view,setView]=useState();
    const [masterStudent,setMasterStudent]=useState([]);
    const [updateView,setUpdateView]=useState("none")

    const [name, setName] = useState(null);
    const [adharNo, setAdharNo] = useState(null);
    const [sex, setSex] = useState(null);
    const [religion, setReligion] = useState(null);
    const [dob, setDob] = useState(null);
    const [cast, setCast] = useState(null);
    const [physicallyChallenged, setPhysicallyChallenged] = useState(0);
    const [orphanage, setOrphanage] = useState(0);
    const [fatherName, setFatherName] = useState(null);
    const [fatherQualification, setFatherQualification] = useState(null);
    const [fatherOcupation, setFatherOcupation] = useState(null);
    const [fatherMonthlyIncome, setFatherMonthlyIncome] = useState(0);
    const [fatherContactNo, setFatherContactNo] = useState(0);
    const [motherName, setMotherName] = useState(null);
    const [motherQualification, setMotherQualification] = useState(null);
    const [motherOcupation, setMotherOcupation] = useState(null);
    const [motherMonthlyIncome, setMotherMonthlyIncome] = useState(0);
    const [motherContactNo, setMotherContactNo] = useState(0);
    const [guardianName, setGuardianName] = useState(null);
    const [relationship, setRelationship] = useState(null);
    const [guardianContactNo, setGuardianContactNo] = useState(null);
    const [address, setAddress] = useState(null);
    const [pinNo, setPinNo] = useState(null);
    const [bspId, setBspId] = useState(null);
    const [applyClass, setApplyClass] = useState(null);
    const [admissionYear, setAdmissionYear] = useState(null);
    const [admissonDate, setAdmissonDate] = useState(new Date().toISOString().slice(0, 10));
    const [age, setAge] = useState(null);
    const [bloodGroup, setBloodGroup] = useState(null);
    const [bankAcountNo, setBankAcountNo] = useState(0);
    const [brunch, setBrunch] = useState(null);
    const [ifscCode, setIfscCode] = useState(null);
    const[allView,setAllview]=useState("block")
    useEffect(() => {
       if(props.view==="block" && props.View40==="block") {
                setView("block");
            }
            else {
                setView("none");
            }
    }, [props.view,props.View40]);
    useEffect(() => {
       setMasterStudent(props.data);

    }, [props.data]);
    const Handleedit=(item)=>{
        setAllview("none")
        setUpdateView("block")
        setName(item.student_Name);
        setAdharNo(item.adhar_no);
        setSex(item.sex);
        setReligion(item.religion);
        setDob(item.dob.slice(0, 10));
        setCast(item.cast);
        setPhysicallyChallenged(item.physically_challenged===1?true:false);
        setOrphanage(item.orphanage===1?true:false);
        setFatherName(item.father_name);
        setFatherQualification(item.father_qualification);
        setFatherOcupation(item.father_ocupation);
        setFatherMonthlyIncome(item.father_monthly_income);
        setFatherContactNo(item.father_contact_no);
        setMotherName(item.mother_name);
        setMotherQualification(item.mother_qualification);
        setMotherOcupation(item.mother_ocupation);
        setMotherMonthlyIncome(item.mother_monthly_income);
        setMotherContactNo(item.mother_contact_no);
        setGuardianName(item.guardian_name);
        setRelationship(item.relationship);
        setGuardianContactNo(item.guardian_contact);
        setAddress(item.address);
        setPinNo(item.pin_no);
        setBspId(item.bsp_id);
        setApplyClass(item.applied_class);
        setAdmissionYear(item.admisson_year);
        setAdmissonDate(item.admisson_date.slice(0, 10));
        setAge(item.age);
        setBloodGroup(item.blood_group);
        setBankAcountNo(item.bank_acount_no);
        setBrunch(item.branch);
        setIfscCode(item.ifsc);
    }
    const handleUpdate=()=>{

    }
    const handaleCancel=()=>{
    setAllview("block")
        setUpdateView("none")

        setName(null);
        setAdharNo(null);
        setSex(null);
        setReligion(null);
        setDob(null);
        setCast(null);
        setPhysicallyChallenged(0);
        setOrphanage(0);
        setFatherName(null);
        setFatherQualification(null);
        setFatherOcupation(null);
        setFatherMonthlyIncome(0);
        setFatherContactNo(0);
        setMotherName(null);
        setMotherQualification(null);
        setMotherOcupation(null);
        setMotherMonthlyIncome(0);
        setMotherContactNo(0);
        setGuardianName(null);
        setRelationship(null);
        setGuardianContactNo(null);
        setAddress(null);
        setPinNo(null);
        setBspId(null);
        setApplyClass(null);
        setAdmissionYear(null);
        setAdmissonDate(new Date().toISOString().slice(0, 10));
        setAge(null);
        setBloodGroup(null);
        setBankAcountNo(0);
        setBrunch(null);
        setIfscCode(null);
    }
    return(
        <div style={{display: view}}>
            <div style={{display:allView}}>
            <table className="table-60" >
                <thead>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Applied Class</th>
                    <th>Year of Admission</th>
                    <th>Registration No</th>
                    <th>Admisson Date</th>
                    <th>action</th>

                </tr>
                </thead>
                <tbody>
                {
                    masterStudent.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.serial_no}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.applied_class}</td>
                                <td>{item.admisson_year}</td>
                                <td>{item.registration_no}</td>
                                <td>{item.admisson_date.slice(0, 10)}</td>
                                <td>
                                    <button onClick={()=>Handleedit(item)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                {masterStudent.length === 0 ? <div className="no-data">No Data Exists</div> : null}
            </div>

            <div style={{display:updateView}} className="dashbrd-40-colm">
                <button onClick={handaleCancel} className="dashboard-btn dashboard-btn-scss">cancel</button>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Student Name*</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Student Name"
                        required={true}
                    />
                </div>
                <div>
                    <label>Adhar Number*</label>
                    <input
                        type="number"
                        value={adharNo}
                        onChange={(e) => setAdharNo(e.target.value)}
                        placeholder="Adhar Number"
                        required={true}
                    />
                </div>

                <div>
                    <label>Sex*</label>
                    <select onChange={(e) => setSex(e.target.value)} required value={sex}>
                        <option value="">Sex</option>
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                </div>

                <div>
                    <label>Religion*</label>
                    <select onChange={(e) => setReligion(e.target.value)} required value={religion}>
                        <option value="">Religion</option>
                        <option value="islam">
                            Islam
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                </div>

                <div>
                    <label>Date of Birth*</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        placeholder="Date of Birth"
                        required={true}
                    />
                </div>

                <div>
                    <label>Cast*</label>
                    <select onChange={(e) => setCast(e.target.value)} required value={cast}>
                        <option value="">Cast</option>
                        <option value="gen">
                            General
                        </option>
                        <option value="obcA">
                            OBC-A
                        </option>
                        <option value="obcB">
                            OBC-B
                        </option>
                        <option value="sc">
                            SC
                        </option>
                        <option value="st">
                            ST
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select>
                </div>

                <div>
                    <label>physically challenged</label>
                    <input type='checkbox'
                            onChange={(e) => e.target.checked === true ? setPhysicallyChallenged(1) : setPhysicallyChallenged(0)}
                           checked={physicallyChallenged}/>
                </div>

                <div>
                    <label>orphanage</label>
                    <input type='checkbox'
                           onChange={(e) => e.target.checked === true ? setOrphanage(1) : setOrphanage(0)}
                           checked={orphanage}/>
                </div>

                <div>
                    <label>Father Name</label>
                    <input
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        placeholder="Father Name"
                    />
                </div>

                <div>
                    <label>Father Qualification</label>
                    <input
                        type="text"
                        value={fatherQualification}
                        onChange={(e) => setFatherQualification(e.target.value)}
                        placeholder="Father Qualification"
                    />
                </div>

                <div>
                    <label>Father Ocupation</label>
                    <input
                        type="text"
                        value={fatherOcupation}
                        onChange={(e) => setFatherOcupation(e.target.value)}
                        placeholder="Father Ocupation"
                    />
                </div>

                <div>
                    <label>Father Monthly Income</label>
                    <input
                        type="number"
                        value={fatherMonthlyIncome}
                        onChange={(e) => setFatherMonthlyIncome(e.target.value)}
                        placeholder="Father Monthly Income"
                    />
                </div>

                <div>
                    <label>Father contact No</label>
                    <input
                        type="number"
                        value={fatherContactNo}
                        onChange={(e) => setFatherContactNo(e.target.value)}
                        placeholder="Father contact No"
                    />
                </div>

                <div>
                    <label>Mother Name</label>
                    <input
                        type="text"
                        value={motherName}
                        onChange={(e) => setMotherName(e.target.value)}
                        placeholder="Mother Name"
                    />
                </div>

                <div>
                    <label>Mother Qualification</label>
                    <input
                        type="text"
                        value={motherQualification}
                        onChange={(e) => setMotherQualification(e.target.value)}
                        placeholder="Mother Qualification"
                    />
                </div>

                <div>
                    <label>Mother Ocupation</label>
                    <input
                        type="text"
                        value={motherOcupation}
                        onChange={(e) => setMotherOcupation(e.target.value)}
                        placeholder="Mother Ocupation"
                    />
                </div>

                <div>
                    <label>Mother Monthly Income</label>
                    <input
                        type="number"
                        value={motherMonthlyIncome}
                        onChange={(e) => setMotherMonthlyIncome(e.target.value)}
                        placeholder="Mother Monthly Income"
                    />
                </div>

                <div>
                    <label>Mother contact No</label>
                    <input
                        type="number"
                        value={motherContactNo}
                        onChange={(e) => setMotherContactNo(e.target.value)}
                        placeholder="Mother contact No"
                    />
                </div>
                <div>
                    <label>Guardian Name*</label>
                    <input
                        type="text"
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        placeholder="Guardian Name"
                        required={true}
                    />
                </div>

                <div>
                    <label>Relationship*</label>
                    <input
                        type="text"
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        placeholder="relationship"
                        required={true}
                    />
                </div>

                <div>
                    <label>Guardian Contact No*</label>
                    <input
                        type="number"
                        value={guardianContactNo}
                        onChange={(e) => setGuardianContactNo(e.target.value)}
                        placeholder="Guardian Contact No"
                        required={true}
                    />
                </div>

                <div>
                    <label>Address*</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required={true}
                    />
                </div>

                <div>
                    <label>Pin Number*</label>
                    <input
                        type="number"
                        value={pinNo}
                        onChange={(e) => setPinNo(e.target.value)}
                        placeholder="Pin Number"
                        required={true}
                    />
                </div>
                <div>
                    <label>B.S.P Id</label>
                    <input
                        type="text"
                        value={bspId}
                        onChange={(e) => setBspId(e.target.value)}
                        placeholder="B.S.P Id"
                    />
                </div>
                <div>
                    <label>Applied Class*</label>
                    <input
                        type="number"
                        value={applyClass}
                        onChange={(e) => setApplyClass(e.target.value)}
                        placeholder="Applied Class"
                        required={true}
                    />
                </div>
                <div>
                    <label>Admission Year*</label>
                    <input
                        type="number"
                        value={admissionYear}
                        onChange={(e) => setAdmissionYear(e.target.value)}
                        placeholder="Admission Year"
                        required={true}
                    />
                </div>
                <div>
                    <label>Admission Date*</label>
                    <input
                        type="date"
                        value={admissonDate}
                        onChange={(e) => setAdmissonDate(e.target.value)}
                        placeholder="Admission Date"
                        required={true}
                    />
                </div>
                <div>
                    <label>Age*</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        required={true}
                    />
                </div>
                <div>
                    <label>Blood Group</label>
                    <input
                        type="text"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        placeholder="Blood Group"
                    />
                </div>
                <div>
                    <label>Bank Acount No</label>
                    <input
                        type="text"
                        value={bankAcountNo}
                        onChange={(e) => setBankAcountNo(e.target.value)}
                        placeholder="Bank Acount No"
                    />
                </div>
                <div>
                    <label>Brunch</label>
                    <input
                        type="text"
                        value={brunch}
                        onChange={(e) => setBrunch(e.target.value)}
                        placeholder="Brunch"
                    />
                </div>
                <div>
                    <label>Ifsc code</label>
                    <input
                        type="text"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        placeholder="Ifsc code"
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
            </form>
            </div>
        </div>

    )
}
export default MasterStudentViewUpdate;