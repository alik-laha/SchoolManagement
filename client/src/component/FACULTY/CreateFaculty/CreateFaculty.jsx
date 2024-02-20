import {useState} from "react";
import axios from "axios";

const CreateFaculty = (props) => {
const [name, setName] = useState("");
const [qualification, setQualification] = useState("");
const [joinDate, setJoinDate] = useState("");
const [email, setEmail] = useState("");
const [specialized, setspecialized] = useState("");
const [contactNo, setContactNo] = useState("");
const [aadharno, setAadharno] = useState("");
const [pan, setPan] = useState("");
const [address, setAddress] = useState("");
const [dob, setDob] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    
    const faculty = {name, qualification, joinDate, email, specialized, contactNo,aadharno,pan,address,dob};
    axios.post("/api/v1/faculty/createfaculty", faculty,{headers:{"Authorization":localStorage.getItem("token")}}).then(() => {
        alert("Faculty Added Successfully");
    }).catch((err) => {
        console.log(err);
        if(err.response.data.err.errno===1062){
            alert(`Duplicate Aadhar or PAN No. It already exists`)
        }
    })
    setName("");
    setQualification("");
    setJoinDate("");
    setEmail("");
    setspecialized("");
    setContactNo("");
    setDob('')
    setAadharno('')
    setPan('')
    setAddress('')

}

    return(
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
            <p>Basic Details</p>
                <div>
                    <label>Faculty Name*</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Faculty Name"
                        required={true}
                    />
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
                    <label>Joining date*</label>
                    <input
                        type="date"
                        value={joinDate}
                        onChange={(e) => setJoinDate(e.target.value)}
                        placeholder="Joining Date"
                        required={true}
                    />
                </div>
              
                <div style={{width:'50%'}}>
                    <label>Address*</label>
                    <textarea style={{height:'80px',rows:"3"}}
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        required={true}
                    />
                </div>
               
                <hr className="division"/>
                <p>Academic Details</p>
                <div>
                    <label>Highest Qualification*</label>
                    <input
                        type="text"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="Qualification"
                        required={true}
                    />
                </div>
                <div>
                    <label>Subject Specialization*</label>
                    <input
                        type="text"
                        value={specialized}
                        onChange={(e) => setspecialized(e.target.value)}
                        placeholder="Subjects"
                        required={true}
                    />
                </div>
               
                <hr className="division"/>
                <p>Other Details</p>
                <div>
                    <label>Contact No.*</label>
                    <input
                        type="number"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        placeholder="Contact No"
                        required={true}
                    />
                </div>
                <div>
                    <label>Email Address*</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required={true}
                    />
                </div>
                <div>
                    <label>Aadhar No.*</label>
                    <input
                        type="number"
                        value={aadharno}
                        onChange={(e) => setAadharno(e.target.value)}
                        placeholder="Aadhar No."
                        required={true}
                    />
                </div>
                
              
                
                <div>
                    <label>Pan No.*</label>
                    <input
                        type="text"
                        value={pan}
                        onChange={(e) => setPan(e.target.value)}
                        placeholder="Pan No."
                        required={true}
                    />
                </div>
                
              
              
                <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
            </form>
        </div>
    )
}
export default CreateFaculty;