import {useState,useEffect} from "react";
import axios from "axios";
const MasterStudentEntry= (props) => {
    const [name, setName] = useState('');
    const [adharNo, setAdharNo] = useState(0);
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
    const [pinNo, setPinNo] = useState(0);
    const [bspId, setBspId] = useState('');
    const [applyClass, setApplyClass] = useState('');
    const [admissionYear, setAdmissionYear] = useState('');
    const [admissonDate, setAdmissonDate] = useState(new Date().toISOString().slice(0, 10));
    const [age, setAge] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [bankAcountNo, setBankAcountNo] = useState("");
    const [brunch, setBrunch] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [regstn, setregstn] = useState('');
    
    

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


    useEffect(()=>{

        const today = new Date();
        const birthDate = new Date(dob);

    const ageYears = differenceInYears(today, birthDate);
    
        setAge(ageYears)
    },[dob])

    useEffect(()=>{
        const admission_date = new Date(admissonDate);
        setAdmissionYear(admission_date.getFullYear())
    },[admissonDate])

    const dialog = document.getElementById('myDialog');
    const closeDialogButton = document.getElementById('closeDialog');
    if(closeDialogButton){
        closeDialogButton.addEventListener('click', () => {
            dialog.close();
          });
    }

    
    

    const differenceInYears = (today,birthDate) => {
        
        
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        console.log(age_now);
        return age_now;
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
                let Class = applyClass.toString()
                if(Class.length === 1){
                    Class = "0" + Class
                }
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
                                
                        // alert("Student Admitted Successfully and Registration no. Generated :"+regNo);
                        setregstn(regNo)
                        dialog.showModal();
                        setName('');
                        setAdharNo(0);
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
                        setPinNo(0);
                        setBspId('');
                        setApplyClass('');
                        setAdmissionYear('');
                        setAdmissonDate(new Date().toISOString().slice(0, 10));
                        setAge('');
                        setBloodGroup('');
                        setBankAcountNo(0);
                        setBrunch('');
                        setIfscCode('');
                        //setRegNo('');
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
            <form onSubmit={handleEntry} style={{display:'grid',color:'#3c8dbc',backgroundColor:'azure',boxShadow:'0 0 5px grey'}}>
                <p style={{fontSize:'17px'}}>Basic Details</p>
                <dl class="dl-horizontal">
                   
                    <dt><label>Student Name*</label></dt>
                    <dd><input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Student Name"
                        required={true}
                    /></dd>

                    <dt><label>Gender*</label></dt>
                    <dd>
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
                    </dd>


                    <dt><label>Religion*</label></dt>
                    <dd><select onChange={(e) => setReligion(e.target.value)} required value={religion}>
                        <option value="">Religion</option>
                        <option value="islam">
                            Islam
                        </option>
                        <option value="other">
                            Other
                        </option>
                    </select></dd>

                    <dt><label>Date of Birth</label></dt>
                    <dd><input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        placeholder="Date of Birth"
                        
                    /></dd>

                     <dt><label>Age</label></dt>
                    <dd> <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        
                    /></dd>
                        
                     <dt><label>Cast*</label></dt>
                    <dd> <select onChange={(e) => setCast(e.target.value)} required value={cast}>
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
                    </select></dd>

                    <dt><label>Blood Group</label></dt>
                    <dd> <input
                        type="text"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        placeholder="Blood Group"
                    /></dd>

                    <dt><label>Pin Number</label></dt>
                    <dd> <input
                        type="number"
                        value={pinNo}
                        onChange={(e) => setPinNo(e.target.value)}
                        placeholder="Pin Number"
                        
                    /></dd>
                    <dt><label>Address*</label></dt>
                    <dd> <textarea style={{height:'80px',rows:"3"}}
                        type="textarea" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required={true}
                    /></dd>
                    <dt><label>Handicapped</label></dt>
                    <dd> <input 
                        type="checkbox"
                        placeholder="physically challenged"
                        
                        onChange={handlepchallenge}
                        
                        checked={physicallyChallenged === 1 ? true : false}
                        
                    /></dd>
                    <dt><label>Orphanage Child</label></dt>
                    <dd> <input
                        type="checkbox"
                        placeholder="orphanage"
                        // onChange={(e) => e.target.checked === true ? setOrphanage(1) : setOrphanage(0)}
                        onChange={handleorphan}
                        checked={orphanage === 1 ? true : false}
                        
                        
                    /></dd>
                    
                    

                           
              
                
                
                </dl>
            
                <p style={{fontSize:'17px'}}>Guardian Details</p>
                <dl class="dl-horizontal">
                   
                   <dt><label>Guardian Name*</label></dt>
                   <dd> <input
                        type="text"
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        placeholder="Name"
                        required={true}
                    /></dd>
                    <dt><label>Relationship*</label></dt>
                   <dd> <input
                        type="text"
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        placeholder="Relationship"
                        required={true}
                    /></dd>
                    <dt><label>Guardian Contact No.*</label></dt>
                   <dd><input
                        type="number"
                        value={guardianContactNo}
                        onChange={(e) => setGuardianContactNo(e.target.value)}
                        placeholder="Contact No"
                        required={true}
                    /></dd>
                    <dt><label>Father Name</label></dt>
                   <dd><input
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        placeholder="Name"
                    /></dd>
                    <dt><label>Father Qualification</label></dt>
                   <dd><input
                        type="text"
                        value={fatherQualification}
                        onChange={(e) => setFatherQualification(e.target.value)}
                        placeholder="Qualification"
                    /></dd>
                    <dt><label>Father Occupation</label></dt>
                   <dd><input
                        type="text"
                        value={fatherOcupation}
                        onChange={(e) => setFatherOcupation(e.target.value)}
                        placeholder="Occupation"
                    /></dd>
                    <dt><label>Father Contact No.</label></dt>
                   <dd><input
                        type="number"
                        value={fatherContactNo}
                        onChange={(e) => setFatherContactNo(e.target.value)}
                        
                    /></dd>
                    <dt><label>Monthly Income</label></dt>
                   <dd><input
                        type="number"
                        value={fatherMonthlyIncome}
                        onChange={(e) => setFatherMonthlyIncome(e.target.value)}
                        placeholder="Father Monthly Income"
                    /></dd>
                    
                    <dt><label>Mother Name</label></dt>
                   <dd><input
                        type="text"
                        value={motherName}
                        onChange={(e) => setMotherName(e.target.value)}
                        placeholder="Name"
                    /></dd>
                    <dt><label>Mother Qualification</label></dt>
                   <dd> <input
                        type="text"
                        value={motherQualification}
                        onChange={(e) => setMotherQualification(e.target.value)}
                        placeholder="Qualification"
                    /></dd><dt><label>Mother Occupation</label></dt>
                    <dd> <input
                        type="text"
                        value={motherOcupation}
                        onChange={(e) => setMotherOcupation(e.target.value)}
                        placeholder="Occupation"
                    /></dd>
                    <dt><label>Mother Contact No.</label></dt>
                    <dd> <input
                        type="number"
                        value={motherContactNo}
                        onChange={(e) => setMotherContactNo(e.target.value)}
                        placeholder="Mother contact No"
                    /></dd>
                    <dt><label>Monthly Income</label></dt>
                    <dd>  <input
                        type="number"
                        value={motherMonthlyIncome}
                        onChange={(e) => setMotherMonthlyIncome(e.target.value)}
                        placeholder="Mother Monthly Income"
                    /></dd>
                
                   </dl>
            
                <p style={{fontSize:'17px'}}>Other Details</p>
                <dl class="dl-horizontal">
                <dt><label>B.S.P. Id</label></dt>
                   <dd> <input
                        type="text"
                        value={bspId}
                        onChange={(e) => setBspId(e.target.value)}
                        placeholder="B.S.P Id"
                    /></dd>
                    <dt><label>Aadhar Number</label></dt>
                   <dd><input
                        type="number"
                        value={adharNo}
                        onChange={(e) => setAdharNo(e.target.value)}
                        placeholder="Aadhar Number"
                        
                    /></dd>
                     <dt><label>Bank Account No.</label></dt>
                   <dd> <input
                        type="text"
                        value={bankAcountNo}
                        onChange={(e) => setBankAcountNo(e.target.value)}
                        placeholder="Bank Account No"
                    /></dd>
                     <dt><label>Branch Name</label></dt>
                   <dd>  <input
                        type="text"
                        value={brunch}
                        onChange={(e) => setBrunch(e.target.value)}
                        placeholder="Branch"
                    /></dd>
                    
                    <dt><label>IFSC code</label></dt>
                   <dd> <input
                        type="text"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        placeholder="Ifsc code"
                    /></dd>

                    
            

                </dl>
              
                <p>Office Details</p>
                <dl class="dl-horizontal">
                <dt><label>Applying Stream*</label></dt>
                    <dd> <select onChange={(e) => setStream(e.target.value)} required value={stream}>
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
                    </select></dd>
                    <dt><label>Applying Class*</label></dt>
                    <dd>  <select onChange={(e) => setApplyClass(parseInt(e.target.value))} required value={applyClass}>
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
                        
                    </select> </dd>
                    <dt><label>Admission Date*</label></dt>
                    <dd>   <input
                        type="date"
                        value={admissonDate}
                        onChange={(e) => setAdmissonDate(e.target.value)}
                        placeholder="Admission Date"
                        required={true}
                    /></dd>
                     <dt><label>Admission Year*</label></dt>
                    <dd>   <input
                        type="number"
                        value={admissionYear}
                        onChange={(e) => setAdmissionYear(e.target.value)}
                        placeholder="Admission Year"
                        required={true}
                    /></dd>
                     


                </dl>
        
        
               
              
              
             
                
         
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
            <dialog id="myDialog" class="dashboard-modal">
                <button id="closeDialog" class="dashboard-modal-close-btn ">X </button>
                <p id="modal-text" style={{color:'black'}}> Student Admitted and Registration no. : <p className={{color:'red!important'}}>{regstn}</p> Generated Successfully</p>
                {/* <!-- Add more elements as needed --> */}
            </dialog>
        </div>

    )
}
export default MasterStudentEntry;