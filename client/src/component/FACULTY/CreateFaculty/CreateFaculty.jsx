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
const [Type, setType] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
    
    const faculty = {name, qualification, joinDate, email, specialized, contactNo,aadharno,pan,address,dob,Type};
    axios.post("/api/v1/faculty/createfaculty", faculty,{headers:{"Authorization":localStorage.getItem("token")}}).then((res) => {
        alert("Faculty Added Successfully");
        console.log(res)
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
        <div style={{display: props.view}} className="dashbrd-40-colm special-25-div">
            <form onSubmit={handleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
            <p style={{fontSize:'17px'}}>Basic Details</p>
                <dl className="dl-horizontal">

                    <dt><label>Employee Name*</label></dt>
                    <dd><input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Employee Name"
                        required={true}
                    />
                    </dd>

                    <dt><label>Employee Type*</label></dt>
                    <dd>
                        <select onChange={(e)=>setType(e.target.value)} value={Type}>
                            <option value="">Employee Type</option>
                            <option value="Faculty">Faculty</option>
                            <option value="Staff">Staff</option>
                            
                            <option value="Other">Other</option>
                        </select>
                    </dd>

                    <dt><label>Date of Birth*</label></dt>
                    <dd><input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        placeholder="Date of Birth"
                        required={true}
                    />
                    </dd>

                    <dt><label>Joining date*</label></dt>
                    <dd><input
                        type="date"
                        value={joinDate}
                        onChange={(e) => setJoinDate(e.target.value)}
                        placeholder="Joining Date"
                        required={true}
                    />
                    </dd>


                    <dt><label>Address*</label></dt>
                    <dd style={{width: '50%'}}>  <textarea style={{height: '80px', rows: "3"}}
                                                           type="text"
                                                           value={address}
                                                           onChange={(e) => setAddress(e.target.value)}
                                                           placeholder="Address"
                                                           required={true}
                    />
                    </dd>
                </dl>
                    {/*<hr className="division"/>*/}
                    <p style={{fontSize:'17px'}}>Academic Details</p>
            <dl className="dl-horizontal">
                    

                    <dt><label>Qualification*</label></dt>
                    <dd><input
                        type="text"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        placeholder="Qualification"
                        required={true}
                    />
                    </dd>

                    <dt><label>Specialization*</label></dt>
                    <dd><input
                        type="text"
                        value={specialized}
                        onChange={(e) => setspecialized(e.target.value)}
                        placeholder="Subjects"
                        required={true}
                    />
                    </dd>
            </dl>
            <p style={{fontSize:'17px'}}>Other Details</p>
                    {/*<hr className="division"/>*/}
                <dl className="dl-horizontal">
                   

                    <dt><label>Contact No.*</label></dt>
                    <dd><input
                        type="number"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        placeholder="Contact No"
                        required={true}
                    />
                    </dd>
                    <dt>
                        <label>Email Address*</label></dt>
                    <dd><input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required={true}
                    />
                    </dd>

                    <dt><label>Aadhar No.*</label></dt>
                    <dd><input
                        type="number"
                        value={aadharno}
                        onChange={(e) => setAadharno(e.target.value)}
                        placeholder="Aadhar No."
                        required={true}
                    />
                    </dd>


                    <dt><label>Pan No.*</label></dt>
                    <dd><input
                        type="text"
                        value={pan}
                        onChange={(e) => setPan(e.target.value)}
                        placeholder="Pan No."
                        required={true}
                    />
                    </dd>

                </dl>

                <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
            </form>
        </div>
    )
}
export default CreateFaculty;