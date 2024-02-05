import {useState} from "react";
import axios from "axios";
const MasterStudentEntry= (props) => {
    const [name, setName] = useState('');
    const [adharNo, setAdharNo] = useState('');
    const [sex, setSex] = useState('');
    const [stream, setStream] = useState('');
    const [religion, setReligion] = useState('');
    const [dob, setDob] = useState('');
    const [cast, setCast] = useState('');

    const [physicallyChallenged, setPhysicallyChallenged] = useState(0);
    const [orphanage, setOrphanage] = useState(0);
    const [pchallenged, setpchallenged] = useState(false);
    const [orphan, setorphan] = useState(false);


    const [fatherName, setFatherName] = useState('');
    const [fatherQualification, setFatherQualification] = useState('');
    const [fatherOcupation, setFatherOcupation] = useState('');
    const [fatherMonthlyIncome, setFatherMonthlyIncome] = useState(0);
    const [fatherContactNo, setFatherContactNo] = useState(0);
    const [motherName, setMotherName] = useState('');
    const [motherQualification, setMotherQualification] = useState('');
    const [motherOcupation, setMotherOcupation] = useState('');
    const [motherMonthlyIncome, setMotherMonthlyIncome] = useState(0);
    const [motherContactNo, setMotherContactNo] = useState(0);
    const [guardianName, setGuardianName] = useState('');
    const [relationship, setRelationship] = useState('');
    const [guardianContactNo, setGuardianContactNo] = useState('');
    const [address, setAddress] = useState('');
    const [pinNo, setPinNo] = useState('');
    const [bspId, setBspId] = useState('');
    const [applyClass, setApplyClass] = useState('');
    const [admissionYear, setAdmissionYear] = useState('');
    const [admissonDate, setAdmissonDate] = useState(new Date().toISOString().slice(0, 10));
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [bankAcountNo, setBankAcountNo] = useState("");
    const [brunch, setBrunch] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    

    const handlepchallenge = (e) => {
        // e.preventDefault();
        setpchallenged(!pchallenged)
        
        e.target.checked === true ? setPhysicallyChallenged(1) : setPhysicallyChallenged(0)
        console.log(pchallenged)
        console.log(physicallyChallenged)

    }
    //const [file, setFile] = useState(null);
    //const fileRef=useRef();
    // const handleReset = () => {
    //     fileRef.current.value = null;
    // };

    const handleorphan = (e) => {
        // e.preventDefault();
        e.target.checked === true ? setOrphanage(1) : setOrphanage(0)
        setorphan(!orphan)
    }

    const handleEntry = (e) => {
        e.preventDefault();
        let id;
        let regNo;
        axios.get("http://localhost:7000/api/v1/student/lastid")
            .then((res) => {
                if(!res.data.result[0])
                {
                    id=1
                }
                else{
                    id=(res.data.result[0].serial_no+1);
                }
                
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
                    stream,
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
                const data1 = {
                    regNo,
                    name,
                    applyClass,
                    admissionYear,
                }
                axios.post("http://localhost:7000/api/v1/student/masterstudentadmission", data)
                    .then((res) => {
                        axios.post("http://localhost:7000/api/v1/student/studentadmission", data1)
                            .then((res) => {
                                console.log(res)
                                
                        alert("Student Admitted Successfully and Registration no. Generated :"+regNo);
                        setName('');
                        setAdharNo('');
                        setSex('');
                        setStream('');
                        setReligion('');
                        setDob('');
                        setCast('');
                        setPhysicallyChallenged(0);
                        setOrphanage(0);
                        setFatherName('');
                        setFatherQualification('');
                        setFatherOcupation('');
                        setFatherMonthlyIncome(0);
                        setFatherContactNo(0);
                        setMotherName('');
                        setMotherQualification('');
                        setMotherOcupation('');
                        setMotherMonthlyIncome(0);
                        setMotherContactNo(0);
                        setGuardianName('');
                        setRelationship('');
                        setGuardianContactNo('');
                        setAddress('');
                        setPinNo('');
                        setBspId('');
                        setApplyClass('');
                        setAdmissionYear('');
                        setAdmissonDate(new Date().toISOString().slice(0, 10));
                        setAge('');
                        setBloodGroup('');
                        setBankAcountNo(0);
                        setBrunch('');
                        setIfscCode('');
                        setRegNo('');
                        setorphan(true)
                        setpchallenged(true)
                        //handleReset();
                        
                                               

                    })
                    .catch((err) => {
                        console.log(err)
                        
                    })
                    }).catch((err) => {
                        if(err.response.data.err.errno===1062){
                            alert(`Duplicate Aadhar No. - ${adharNo}. It already exists`)
                        }
                    console.log(err)
                })


            })
    }

    return(
        <div style={{display:props.view}} className="dashbrd-40-colm special-25-div">
            <form onSubmit={handleEntry}>
                <p>Basic Details</p>
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
                    <label>Gender*</label>
                    <select onChange={(e) => setSex(e.target.value)} required value={sex}>
                        <option value="">Gender</option>
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
                    <label>Blood Group</label>
                    <input
                        type="text"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        placeholder="Blood Group"
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
               
                <div style={{width:'50%'}}>
                    <label>Address*</label>
                    <textarea style={{height:'80px',rows:"3"}}
                        type="textarea" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required={true}
                    />
                </div>

            
              
         

                
                <hr className="division-2"/>
                <div className="div-25">
                    <label>Physically Challenged</label>
                    <input 
                        type="checkbox"
                        placeholder="physically challenged"
                        
                        onChange={handlepchallenge}
                        
                        checked={physicallyChallenged === 1 ? true : false}
                        
                    />
                </div>

                <div className="div-25">
                    <label>Orphanage Child</label>
                    <input
                        type="checkbox"
                        placeholder="orphanage"
                        // onChange={(e) => e.target.checked === true ? setOrphanage(1) : setOrphanage(0)}
                        onChange={handleorphan}
                        checked={orphanage === 1 ? true : false}
                        
                        
                    />
                </div>
                
             
                <hr className="division"/>
                <p>Guardian Details</p>
                <div>
                    <label>Guardian Name*</label>
                    <input
                        type="text"
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        placeholder="Name"
                        required={true}
                    />
                </div>

                <div>
                    <label>Relationship With Student*</label>
                    <input
                        type="text"
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        placeholder="Relationship"
                        required={true}
                    />
                </div>

                <div>
                    <label>Guardian's Contact No*</label>
                    <input
                        type="number"
                        value={guardianContactNo}
                        onChange={(e) => setGuardianContactNo(e.target.value)}
                        placeholder="Contact No"
                        required={true}
                    />
                </div>
                <hr className="division-2"/>
                <div>
                    <label>Father's Name</label>
                    <input
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        placeholder="Name"
                    />
                </div>

                <div>
                    <label>Father's Qualification</label>
                    <input
                        type="text"
                        value={fatherQualification}
                        onChange={(e) => setFatherQualification(e.target.value)}
                        placeholder="Qualification"
                    />
                </div>

                <div>
                    <label>Father's Occupation</label>
                    <input
                        type="text"
                        value={fatherOcupation}
                        onChange={(e) => setFatherOcupation(e.target.value)}
                        placeholder="Occupation"
                    />
                </div>


                <div>
                    <label>Father's contact No</label>
                    <input
                        type="number"
                        value={fatherContactNo}
                        onChange={(e) => setFatherContactNo(e.target.value)}
                        
                    />
                </div>
                
                <div>
                    <label>Father's Monthly Income</label>
                    <input
                        type="number"
                        value={fatherMonthlyIncome}
                        onChange={(e) => setFatherMonthlyIncome(e.target.value)}
                        placeholder="Father Monthly Income"
                    />
                </div>
                <hr className="division-2"/>

                <div>
                    <label>Mother's Name</label>
                    <input
                        type="text"
                        value={motherName}
                        onChange={(e) => setMotherName(e.target.value)}
                        placeholder="Name"
                    />
                </div>

                <div>
                    <label>Mother's Qualification</label>
                    <input
                        type="text"
                        value={motherQualification}
                        onChange={(e) => setMotherQualification(e.target.value)}
                        placeholder="Qualification"
                    />
                </div>

                <div>
                    <label>Mother's Occupation</label>
                    <input
                        type="text"
                        value={motherOcupation}
                        onChange={(e) => setMotherOcupation(e.target.value)}
                        placeholder="Occupation"
                    />
                </div>

          

                <div>
                    <label>Mother's contact No</label>
                    <input
                        type="number"
                        value={motherContactNo}
                        onChange={(e) => setMotherContactNo(e.target.value)}
                        placeholder="Mother contact No"
                    />
                </div>

                <div>
                    <label>Mother's Monthly Income</label>
                    <input
                        type="number"
                        value={motherMonthlyIncome}
                        onChange={(e) => setMotherMonthlyIncome(e.target.value)}
                        placeholder="Mother Monthly Income"
                    />
                </div>
                <hr className="division-2"/>
                
                <hr className="division"/>
                <p>Other Details</p>
              
                <div>
                    <label>Bangla Sikkha Portal (B.S.P.) ID</label>
                    <input
                        type="text"
                        value={bspId}
                        onChange={(e) => setBspId(e.target.value)}
                        placeholder="B.S.P Id"
                    />
                </div>
        
        
               
              
              
                <div>
                    <label>Aadhar Number*</label>
                    <input
                        type="number"
                        value={adharNo}
                        onChange={(e) => setAdharNo(e.target.value)}
                        placeholder="Aadhar Number"
                        required={true}
                    />
                </div>
                <div>
                    <label>Bank Account No.</label>
                    <input
                        type="text"
                        value={bankAcountNo}
                        onChange={(e) => setBankAcountNo(e.target.value)}
                        placeholder="Bank Account No"
                    />
                </div>
                <div>
                    <label>Branch Name</label>
                    <input
                        type="text"
                        value={brunch}
                        onChange={(e) => setBrunch(e.target.value)}
                        placeholder="Branch"
                    />
                </div>
                <div>
                    <label>IFSC code</label>
                    <input
                        type="text"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        placeholder="Ifsc code"
                    />
                </div>
                <div>
                    <label>Applied for Stream*</label>
                    <select onChange={(e) => setStream(e.target.value)} required value={stream}>
                        <option value="">Stream</option>
                        <option value="Arts">
                            Arts
                        </option>
                        <option value="Commerce">
                            Commerce
                        </option>
                        <option value="Science">
                            Science
                        </option>
                        <option value="General">
                            General (Upto Secondary)
                        </option>
                    </select>
                </div>
                <div>
                    <label>Applied For Class*</label>
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
                {/* <div><label>Upload Student Image</label>
                
                <input ref={fileRef} accept="application/pdf" style={{border:'none'}}
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        /> 
        <label style={{width:'max-content', fontSize:'12px',color:'red'}}>(Only PDF Files are Allowed)</label>
        
        </div> */}
                <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
            </form>
        </div>

    )
}
export default MasterStudentEntry;