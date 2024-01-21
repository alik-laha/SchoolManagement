import {useState} from "react";

const MasterStudentEntry= (props) => {
    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [adharNo, setAdharNo] = useState("");
    const [sex, setSex] = useState("");
    const [religion, setReligion] = useState("");
    const [dob, setDob] = useState("");
    const [cast, setCast] = useState("");
    const [physicallyChallenged, setPhysicallyChallenged] = useState("");
    const [orphanage, setOrphanage] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [fatherQualification, setFatherQualification] = useState("");
    const [fatherOcupation, setFatherOcupation] = useState("");
    const [fatherMonthlyIncome, setFatherMonthlyIncome] = useState("");
    const [fatherContactNo, setFatherContactNo] = useState("");
    const [motherName, setMotherName] = useState("");
    const [motherQualification, setMotherQualification] = useState("");
    const [motherOcupation, setMotherOcupation] = useState("");
    const [motherMonthlyIncome, setMotherMonthlyIncome] = useState("");
    const [motherContactNo, setMotherContactNo] = useState("");
    const [guardianName, setGuardianName] = useState("");
    const [relationship, setRelationship] = useState("");
    const [guardianContactNo, setGuardianContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [pinNo, setPinNo] = useState("");
    const [bspId, setBspId] = useState("");
    const [applyClass, setApplyClass] = useState("");
    const [admissionYear, setAdmissionYear] = useState("");
    const [admissionDate, setAdmissionDate] = useState("");
    const [age, setAge] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    return(
        <div className="dashbrd-40-colm">
            <form>
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
                    <label>Registration No</label>
                    <input
                        type="text"
                        value={regNo}
                        placeholder="Registration No"
                        readOnly
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
                        value={admissionDate}
                        onChange={(e) => setAdmissionDate(e.target.value)}
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
            </form>
        </div>

    )
}
export default MasterStudentEntry;