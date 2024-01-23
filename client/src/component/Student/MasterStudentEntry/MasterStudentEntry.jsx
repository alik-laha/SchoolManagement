import {useState} from "react";
import axios from "axios";
const MasterStudentEntry= (props) => {
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
    const [admissonDate, setAdmissonDate] = useState(null);
    const [age, setAge] = useState(null);
    const [bloodGroup, setBloodGroup] = useState(null);
    const [bankAcountNo, setBankAcountNo] = useState(0);
    const [brunch, setBrunch] = useState(null);
    const [ifscCode, setIfscCode] = useState(null);


    const handleEntry = (e) => {
        e.preventDefault();
        let id;
        let regNo;
        axios.get("http://localhost:7000/api/v1/student/lastid")
            .then((res) => {
                id=(res.data.result[0].serial_no+1);
                const schoolName = "AHM"
                const Class = applyClass.toString()
                const year = admissionYear.toString()
                const ID = id.toString()
                if (ID.length === 1) {
                    id = "0000" + ID
                } else if (ID.length === 2) {
                    id = "000" + ID
                } else if (ID.length === 3) {
                    id = "00" + ID
                } else if (ID.length === 4) {
                    id = "0" + ID
                } else if (ID.length === 5) {
                    id = ID
                }
                regNo = schoolName + year + Class + id
                console.log(regNo)
            })
            .catch((err) => {
              console.log(err);
            })
            .then(() => {
                const data = {
                    name,
                    regNo,
                    adharNo,
                    sex,
                    religion,
                    dob,
                    cast,
                    physicallyChallenged,
                    orphanage,
                    fatherName,
                    fatherQualification,
                    fatherOcupation,
                    fatherMonthlyIncome,
                    fatherContactNo,
                    motherName,
                    motherQualification,
                    motherOcupation,
                    motherMonthlyIncome,
                    motherContactNo,
                    guardianName,
                    relationship,
                    guardianContactNo,
                    address,
                    pinNo,
                    bspId,
                    applyClass,
                    admissionYear,
                    admissonDate,
                    age,
                    bloodGroup,
                    bankAcountNo,
                    brunch,
                    ifscCode
                }
                axios.post("http://localhost:7000/api/v1/student/masterstudentadmission", data)
                    .then((res) => {
                        console.log(res);
                    }).catch((err) => {
                    console.log(err);
                })

            })
    }

    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleEntry}>
                <div>
                    <label>Student Name*</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Student Name"
                    />
                </div>
                <div>
                    <label>Adhar Number*</label>
                    <input
                        type="number"
                        value={adharNo}
                        onChange={(e) => setAdharNo(e.target.value)}
                        placeholder="Adhar Number"
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
                    <input
                        type="checkbox"
                        placeholder="physically challenged"
                        onChange={(e) => e.target.checked === true ? setPhysicallyChallenged(1) : setPhysicallyChallenged(0)}
                        value={physicallyChallenged}
                    />
                </div>

                <div>
                    <label>orphanage</label>
                    <input
                        type="checkbox"
                        placeholder="orphanage"
                        onChange={(e) => e.target.checked === true ? setOrphanage(1) : setOrphanage(0)}
                        value={orphanage}
                    />
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
                    />
                </div>

                <div>
                    <label>Relationship*</label>
                    <input
                        type="text"
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        placeholder="relationship"
                    />
                </div>

                <div>
                    <label>Guardian Contact No*</label>
                    <input
                        type="number"
                        value={guardianContactNo}
                        onChange={(e) => setGuardianContactNo(e.target.value)}
                        placeholder="Guardian Contact No"
                    />
                </div>

                <div>
                    <label>Address*</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                    />
                </div>

                <div>
                    <label>Pin Number*</label>
                    <input
                        type="number"
                        value={pinNo}
                        onChange={(e) => setPinNo(e.target.value)}
                        placeholder="Pin Number"
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
                    <label>Applied Class</label>
                    <input
                        type="number"
                        value={applyClass}
                        onChange={(e) => setApplyClass(e.target.value)}
                        placeholder="Applied Class"
                    />
                </div>
                <div>
                    <label>Admission Year</label>
                    <input
                        type="number"
                        value={admissionYear}
                        onChange={(e) => setAdmissionYear(e.target.value)}
                        placeholder="Admission Year"
                    />
                </div>
                <div>
                    <label>Admission Date</label>
                    <input
                        type="date"
                        value={admissonDate}
                        onChange={(e) => setAdmissonDate(e.target.value)}
                        placeholder="Admission Date"
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
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

    )
}
export default MasterStudentEntry;