import {useEffect, useState} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const MasterStudentViewUpdate = (props) => {
    const [view,setView]=useState('none');
    const [masterStudent,setMasterStudent]=useState([]);
    const [updateView,setUpdateView]=useState("none")

    const [name, setName] = useState('');
    const [adharNo, setAdharNo] = useState('');
    const [sex, setSex] = useState('');
    const [religion, setReligion] = useState('');
    const [dob, setDob] = useState('');
    const [cast, setCast] = useState('');
    const [physicallyChallenged, setPhysicallyChallenged] = useState(0);
    const [orphanage, setOrphanage] = useState(0);
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
    const [bankAcountNo, setBankAcountNo] = useState(0);
    const [brunch, setBrunch] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const[allView,setAllview]=useState("block")
    const[releaseDate,setReleaseDate]=useState("");

    const [regNo,setRegNo]=useState(null);
    useEffect(() => {
       if(props.view==="block" && props.View40==="block" && props.data.length>0) {
                setView("block");
            }
            else {
                setView("none");
            }
    }, [props.view,props.View40,props.data]);
    useEffect(() => {
       setMasterStudent(props.data);

    }, [props.data]);


    const clearTable = () => {
        if(updateView==='none')
        setMasterStudent([]);
      };

    const Handleedit=(item)=>{
        setAllview("none")
        setUpdateView("block")

        if(item.student_Name!=='')
        {
            setName(item.student_Name);
        }
        else{
            setName('');
        }
        if(item.adhar_no!=='')
        {
            setAdharNo(item.adhar_no);
        }
        else{
            setAdharNo('');
        }
        if(item.sex!=='')
        {
            setSex(item.sex);
        }
        else{
            setSex('');
        }
        if(item.religion!=='')
        {
            setReligion(item.religion);
        }
        else{
            setReligion('');
        }
        if(item.dob!=='')
        {
            setDob(item.dob.slice(0, 10))
        }
        else{
            setDob('');
        }
        if(item.cast!=='')
        {
            setCast(item.cast);
        }
        else{
            setCast('');
        }
        if(item.physically_challenged!=='' )
        {
            setPhysicallyChallenged(item.physically_challenged);
        }
        else{
            setPhysicallyChallenged(0);
        }
        if(item.orphanage!=='')
        {
            setOrphanage(item.orphanage);
        }
        else{
            setOrphanage(0);
        }
        if(item.father_name!=='')
        {
            setFatherName(item.father_name);
        }
        else{
            setFatherName('');
        }
        if(item.father_qualification!=='')
        {
            setFatherQualification(item.father_qualification);
        }
        else{
            setFatherQualification('');
        }
        if(item.father_ocupation!=='')
        {
            setFatherOcupation(item.father_ocupation);
        }
        else{
            setFatherOcupation('');
        }
        if(item.father_monthlyIncome!=='' )
        {
            setFatherMonthlyIncome(item.father_monthlyIncome);
        }
        else{
            setFatherMonthlyIncome(0);
        }
        if(item.father_contact!=='' )
        {
            setFatherContactNo(item.father_contact);
        }
        else{
            setFatherContactNo(0);
        }
        if(item.mother_name!=='' )
        {
            setMotherName(item.mother_name);
        }
        else{
            setMotherName('');
        }
        if(item.mother_qualification!=='')
        {
            setMotherQualification(item.mother_qualification);
        }
        else{
            setMotherQualification('');
        }
        if(item.mother_ocupation!=='')
        {
            setMotherOcupation(item.mother_ocupation);
        }
        else{
            setMotherOcupation('');
        }
        if(item.mother_monthlyIncome!=='')
        {
            setMotherMonthlyIncome(item.mother_monthlyIncome);
        }
        else{
            setMotherMonthlyIncome(0);
        }
        if(item.mother_contact!=='null')
        {
            setMotherContactNo(item.mother_contact);
        }
        else{
            setMotherContactNo(0);
        }
        if(item.guardian_name!=='null')
        {
            setGuardianName(item.guardian_name);
        }
        else{
            setGuardianName('');
        }
        if(item.relationship!=='')
        {
            setRelationship(item.relationship);
        }
        else{
            setRelationship('');
        }
        if(item.guardian_contact!=='')
        {
            setGuardianContactNo(item.guardian_contact);
        }
        else{
            setGuardianContactNo('');
        }
        if(item.address!=='')
        {
            setAddress(item.address);
        }
        else{
            setAddress('');
        }
        if(item.pin_no!=='')
        {
            setPinNo(item.pin_no);
        }
        else{
            setPinNo('');
        }
        if(item.bsp_id!=='')
        {
            setBspId(item.bsp_id);
        }
        else{
            setBspId('');
        }
        if(item.applied_class!=='')
        {
            setApplyClass(item.applied_class);
        }
        else{
            setApplyClass('');
        }
        if(item.admisson_year!=='')
        {
            setAdmissionYear(item.admisson_year);
        }
        else{
            setAdmissionYear('');
        }
        if(item.admisson_date!=='')
        {
            setAdmissonDate(item.admisson_date.slice(0, 10));
        }
        else{
            setAdmissonDate('');
        }
        if(item.age!=='')
        {
            setAge(item.age);
        }
        else{
            setAge('');
        }
        if(item.bank_acount_no !=="undefined"){
            setBankAcountNo(item.bank_acount_no);
        }
        else{
            setBankAcountNo(0)
        }
        setBloodGroup(item.blood_group);
        setReleaseDate(item.release_date);
        setBrunch(item.branch);
        setIfscCode(item.ifsc);
        setRegNo(item.registration_no);
        if(item.release_date!==null){
            setReleaseDate(item.release_date.slice(0, 10));
        }else{
            setReleaseDate('');
        }
       
        console.log(item)
    }
    const handleUpdate=(e)=>{
        e.preventDefault();
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
            ifscCode,
            releaseDate
        }
        axios.post("http://localhost:7000/api/v1/student/updatestudent",data)
            .then((res)=>{
                if(releaseDate){
                    axios.post("http://localhost:7000/api/v1/hostel/deletehostelentrybyregno",{regNo})
                        .then((res)=>{
                            alert('Student Details Edited Successfully')
                            console.log(res.data);
                            setAllview("block")
                            setUpdateView("none")
                            setView('none')
                            setName('');
                            setAdharNo('');
                            setSex('');
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
                            setReleaseDate("");
                        }).catch((err)=>{
                            console.log(err);
                        })
                }
                else{
                    alert('Student Details Edited Successfully')
                    setAllview("block")
        setUpdateView("none")
                    setView('none')
                }
            })
            .catch((err)=>{
                console.log(err);
            })

    }
    const handaleDelete=(regNo,name)=>{
        setAllview("block")
        setUpdateView("none")
        axios.post("http://localhost:7000/api/v1/student/deletemasterstudent",{regNo})
            .then((res)=>{
        axios.post("http://localhost:7000/api/v1/student/deletestudent",{regNo})
            .then((res)=>{
                axios.post("http://localhost:7000/api/v1/hostel/deletehostelentrybyregno",{regNo}).then((res)=>{
                    // alert('Student : '+ name + ' Deleted Successfully' )
                    console.log(res.data);
                    setView('none')
                    
                })
                alert('Student : '+ name + ' Deleted Successfully' )
                    console.log(res.data);
                    setView('none')
               
            })
            .catch((err)=>{
                console.log(err);
            })
            })
            .catch((err)=>{
                console.log(err);
            })
        setName('');
        setAdharNo('');
        setSex('');
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
        setReleaseDate("");
    }
    const handaleCancel=()=>{
    setAllview("block")
        setUpdateView("none")

        setName('');
        setAdharNo('');
        setSex('');
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
        setReleaseDate("");
    }
    return(
        <div style={{display: view}}>
            <div style={{display:allView}}>
            {/* <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button> */}
               <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn btn-warning excel-btn clear-gradient"
                table="master-student-view"
                filename="master-student-details"
                sheet="tablexls"
                buttonText="Excel Import"
            />
            <table className="table-60" >
                <thead>
                <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Active Status</th>
                    <th>Applied Class</th>
                    <th>Year of Admission</th>
                    <th>Registration No</th>
                    <th>Admisson Date</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody>
                {
                    masterStudent.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.serial_no}</td>
                                <td>{item.student_Name}</td>
                                <td><input type='checkbox' checked={item.active === 1 ? true : false}></input></td>
                                <td>{item.applied_class}</td>
                                <td>{item.admisson_year}</td>
                                <td>{item.registration_no}</td>
                                <td>{item.admisson_date.slice(0, 10)}</td>
                                <td>
                                    <button className='dashboard-btn btn-warning fix-width' onClick={()=>Handleedit(item)}>Edit</button>
                                    <button onClick={() => {
                                        const confirmBox = window.confirm(
                                            "Do you really want to delete this Student: "+item.student_Name +"?"
                                        );
                                        if (confirmBox === true) {
                                            handaleDelete(item.registration_no,item.student_Name);
                                        }
                                    }}
                                    
                                     className="dashboard-btn btn-warning fix-width">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                {masterStudent.length === 0 ? <div className="no-data">No Data Exists</div> : null}
            </div>

            <div style={{display: updateView}} className="dashbrd-40-colm special-25-div">
            <button style={{marginBottom:'8px'}}
            onClick={handaleCancel} className="dashboard-btn dashboard-btn-scss">Cancel</button>
            <hr></hr>


                <form onSubmit={handleUpdate}>

                    <p className="customize-centre">Edit Student Details</p>
                    <p>Basic Details</p>
                    <div>
                        <label>Student Name*</label>
                        <input
                            className="read-only"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Student Name"
                            required={true}
                            readOnly
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
                        <label>Banglas Sikkha Portal (B.S.P) ID</label>
                        <input
                            type="text"
                            value={bspId}
                            onChange={(e) => setBspId(e.target.value)}
                            placeholder="B.S.P Id"
                        />
                    </div>


                    <div className="div-25">
                        <label>Physically Challenged</label>
                        <input type='checkbox'
                               onChange={(e) => e.target.checked === true ? setPhysicallyChallenged(1) : setPhysicallyChallenged(0)}
                               checked={physicallyChallenged}/>
                    </div>

                    <div className="div-25">
                        <label>Orphanage Child</label>
                        <input type='checkbox'
                               onChange={(e) => e.target.checked === true ? setOrphanage(1) : setOrphanage(0)}
                               checked={orphanage}/>
                    </div>
                    <hr className="division"/>
                    <p>Guardian Details</p>
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
                        <label>Relationship With Student*</label>
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

                    <hr className="division-2"/>
                    <div>
                        <label>Father's Name</label>
                        <input
                            type="text"
                            value={fatherName}
                            onChange={(e) => setFatherName(e.target.value)}
                            placeholder="Father Name"
                        />
                    </div>

                    <div>
                        <label>Father's Qualification</label>
                        <input
                            type="text"
                            value={fatherQualification}
                            onChange={(e) => setFatherQualification(e.target.value)}
                            placeholder="Father Qualification"
                        />
                    </div>

                    <div>
                        <label>Father's Ocupation</label>
                        <input
                            type="text"
                            value={fatherOcupation}
                            onChange={(e) => setFatherOcupation(e.target.value)}
                            placeholder="Father Ocupation"
                        />
                    </div>
                    <div>
                        <label>Father's Contact No.</label>
                        <input
                            type="number"
                            value={fatherContactNo}
                            onChange={(e) => setFatherContactNo(e.target.value)}
                            placeholder="Father contact No"
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
                            placeholder="Mother Name"
                        />
                    </div>

                    <div>
                        <label>Mother's Qualification</label>
                        <input
                            type="text"
                            value={motherQualification}
                            onChange={(e) => setMotherQualification(e.target.value)}
                            placeholder="Mother Qualification"
                        />
                    </div>

                    <div>
                        <label>Mother's Occupation</label>
                        <input
                            type="text"
                            value={motherOcupation}
                            onChange={(e) => setMotherOcupation(e.target.value)}
                            placeholder="Mother Ocupation"
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
                        <label>Aadhar Number*</label>
                        <input
                            type="number"
                            value={adharNo}
                            onChange={(e) => setAdharNo(e.target.value)}
                            placeholder="Adhar Number"
                            required={true}
                        />
                    </div>
                    <div>
                        <label>Bank Account No.</label>
                        <input
                            type="text"
                            value={bankAcountNo}
                            onChange={(e) => setBankAcountNo(e.target.value)}
                            placeholder="Bank Acount No"
                        />
                    </div>
                    <div>
                        <label>Branch Name</label>
                        <input
                            type="text"
                            value={brunch}
                            onChange={(e) => setBrunch(e.target.value)}
                            placeholder="Brunch"
                        />
                    </div>
                    <div>

                        <label>IFSC Code</label>
                        <input
                            type="text"
                            value={ifscCode}
                            onChange={(e) => setIfscCode(e.target.value)}
                            placeholder="Ifsc code"
                        />
                    </div>

                    <div>
                        <label>Applied Class*</label>
                        <input
                            type="number"
                            className="read-only"
                            value={applyClass}
                            onChange={(e) => setApplyClass(e.target.value)}
                            placeholder="Applied Class"
                            required={true}
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Admission Year*</label>
                        <input
                            type="number"
                            className="read-only"
                            value={admissionYear}
                            onChange={(e) => setAdmissionYear(e.target.value)}
                            placeholder="Admission Year"
                            required={true}
                            readOnly
                        />
                    </div>

                    <div>
                        <label>Admission Date*</label>
                        <input
                            type="date"
                            className="read-only"
                            value={admissonDate}
                            onChange={(e) => setAdmissonDate(e.target.value)}
                            placeholder="Admission Date"
                            required={true}
                        />
                    </div>
                    <div>
                        <label>Release Date</label>
                        <input
                            type="date"
                            value={releaseDate}
                            onChange={(e) => setReleaseDate(e.target.value)}
                        />
                    </div>

                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>

                </form>
            </div>


            <table className="table-60" style={{display: 'none'}} id="master-student-view">
                <thead style={{display: 'contents'}}>

                <tr>
                    <th>Student ID</th>
                    <th>Applied Class</th>
                    <th>Admission Year</th>
                    <th>Date of Admission</th>
                    <th>Registration No.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Religion</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            <th>Cast</th>
                            <th>Blood Group</th>
                            <th>Address</th>
                            <th>Pin No.</th>
                            <th>BSP ID</th>
                            <th>Physically Challenged</th>
                            <th>Orphanage</th>
                            <th>Guradian Name</th>
                            <th>Relationship with Student</th>
                            <th>Guardian Contact No.</th>
                            <th>Father's Name</th>
                            <th>Father's Qualification</th>
                            <th>Father's Occupation</th>
                            <th>Father's Contact No.</th>
                            <th>Father's Monthly Income</th>
                            <th>Mothers's Name</th>
                            <th>Mothers's Qualification</th>
                            <th>Mothers's Occupation</th>
                            <th>Mothers's Contact No.</th>
                            <th>Mothers's Monthly Income</th>
                            <th>Aadhar No.</th>
                            <th>Bank Account No.</th>
                            <th>Branch</th>
                            <th>IFSC</th>
                            
                        </tr>
                    </thead>
                     <tbody style={{display:'contents'}}>
                        {masterStudent.map((item) => (
                            <tr key={item.serial_no}>
                                <td>{item.serial_no}</td>
                                <td>{item.applied_class}</td>
                                <td>{item.admisson_year}</td>
                                <td>{item.admisson_date.slice(0,10)}</td>
                                <td>{item.registration_no}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.sex}</td>
                                <td>{item.religion}</td>
                                <td>{item.dob.slice(0,10)}</td>
                                <td>{item.age}</td>
                                <td>{item.cast}</td>
                                <td>{item.blood_group}</td>
                                <td>{item.address}</td>
                                <td>{item.pin_no}</td>
                                <td>{item.bsp_id}</td>
                                <td>{item.physically_challenged}</td>
                                <td>{item.orphanage}</td>

                                <td >{item.guardian_name}</td>
                                <td >{item.relationship}</td>
                                <td >{item.guardian_contact}</td>
                                <td >{item.father_name}</td>
                                <td >{item.father_qualification}</td>
                                <td >{item.father_ocupation}</td>
                                <td>{item.father_contact}</td>
                                <td>{item.father_monthlyIncome}</td>
                                <td >{item.mother_name}</td>
                                <td >{item.mother_qualification}</td>
                                <td >{item.mother_ocupation}</td>
                                <td>{item.mother_contact}</td>
                                <td>{item.mother_monthlyIncome}</td>

                                <td >{item.adhar_no}</td>
                                <td >{item.acount_no}</td>
                                <td >{item.branch}</td>
                                <td >{item.ifsc}</td>
                            </tr>
                        ))}
                    </tbody> 
                    </table>



        </div>

    )
}
export default MasterStudentViewUpdate;