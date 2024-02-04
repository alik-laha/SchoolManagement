import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";

const ViewAndUpdateFaculty = (props) => {
const [data, setData] = useState([]);
const [View, setView] = useState("none");

const[id, setId] = useState("");
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[contact_no, setContact_no] = useState("");
const[heighst_qualification, setHeighst_qualification] = useState("");
const[specialized_field, setSpecialized_field] = useState("");
const[mainView, setMainView] = useState("contents");
const[editView, setEditView] = useState("none");
const [join_date, setJoin_date] = useState("");
const [released_date, setReleased_date] = useState("");
const [dob, setDob] = useState("");
const [address, setAddress] = useState("");
const [pan, setPan] = useState("");
const [aadhar, setAadhar] = useState("");
const [rdonly, setRdonly] = useState(false);


    useEffect(() => {
        if(props.view === "block" && props.data.length > 0) {
            setView("block");
            setData(props.data);
        }
        else{
            setView("none");
        }
    },[props.view, props.data])
const clearTable = () => {
        setData([]);
}
const handaleEdit = (id) => {
        data.find((item)=>{
            if(item.id === id){
                setId(item.id);
                setName(item.name);
                setEmail(item.email);
                setContact_no(item.contact_no);
                setHeighst_qualification(item.heighst_qualification);
                setSpecialized_field(item.specialized_field);
                setJoin_date(item.join_date.slice(0,10));
                setAadhar(item.aadhar)
                setPan(item.pan)
                setAddress(item.address)
                setDob(item.dob.slice(0,10))
                if(item.relese_Date!==null){
                    setReleased_date(item.relese_Date.slice(0,10))
                    setRdonly(true)
                }
                else{
                    setRdonly(false) 
                }
            }
        })
    setMainView("none");
    setEditView("contents");
}

const handaleDelete = (id) => {
    axios.post("http://localhost:7000/api/v1/faculty/deletefaculty", {id})
        .then((res) => {
            if(res){
                alert("Faculty Deleted Successfully");
                setView("none");
            }
        })
}
const handaleUpdate = (e) => {
    e.preventDefault();
const data = {id, name, email, contactNo:contact_no, qualification:heighst_qualification,specialized:specialized_field,joinDate:join_date,releseDate:released_date,aadharno:aadhar,pan,address,dob};
axios.post("http://localhost:7000/api/v1/faculty/updatefaculty", data)
        .then((res) => {
            if(res){
                alert("Faculty Updated Successfully");
                setEditView("none");
                setMainView("contents");
                setView("none")
            }
        }).catch((err) => {
            console.log(err);
            if(err.response.data.err.errno===1062){
                alert(`Duplicate Aadhar or PAN No. It already exists`)
            }
        })
}
const handaleCancel = () => {
        setMainView("contents");
        setEditView("none");
        setName("");
        setEmail("");
        setContact_no("");
        setHeighst_qualification("");
        setSpecialized_field("");
        setJoin_date("");
        setId("");
        setDob("")
        setAddress("")
        setPan('')
        setAadhar('')
}
    return(
        <div style={{display: View}}>
            
            <ReactHTMLTableToExcel
                id="hostel"
                className="dashboard-btn btn-warning excel-btn"
                table="faculty-view"
                filename="Faculty-excel-report"
                sheet="tablexls"
                buttonText="Excel Export"
            />
            <div style={{display: mainView}}>
            <table className="table-60" >
                <thead >
                <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                <tr>
                    <th>Faculty ID</th>
                    <th>Active Status</th>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Area Of Interest</th>
                    <th>Joining Date</th>
                    
                    <th>Action</th>

                </tr>
                </thead>
                <tbody style={{display: mainView}}>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td><input type='checkbox' checked={item.active === 1 ? true : false}></input></td>
                        <td>{item.name}</td>
                        
                        
                        <td>{item.heighst_qualification}</td>
                        <td>{item.specialized_field}</td>
                        <td>{item.join_date.slice(0, 10)}</td>
                        {/* <td>{item.relese_Date}</td> */}
                        
                        <td>
                            <button className="dashboard-btn dashboard-btn-scss btn-warning"
                                    onClick={() => handaleEdit(item.id)}>Edit
                            </button>
                            <button className='dashboard-btn dashboard-btn-scss btn-warning'
                                    onClick={() => handaleDelete(item.id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
                {data.length === 0 ? <div className="no-data">No Data Exists</div> : null}
            </div>

                    {/* hidden div view */}
            <div style={{display: editView,background:'blue'}} className="dashbrd-40-colm">
                <hr></hr>


                <form onSubmit={handaleUpdate}>
                <p className="customize-centre">Edit Faculty Details</p>
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
                    <label>Contact No.*</label>
                    <input
                        type="number"
                        value={contact_no}
                        onChange={(e) => setContact_no(e.target.value)}
                        placeholder="Contact No"
                        required={true}
                    />
                </div>
                <div style={{width:'45%'}}>
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
                    <label>Email Address*</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required={true}
                    />
                </div>
                <hr className="division"/>
                <p>Academic Details</p>
                <div>
                    <label>Highest Qualification*</label>
                    <input
                        type="text"
                        value={heighst_qualification}
                        onChange={(e) => setHeighst_qualification(e.target.value)}
                        placeholder="Qualification"
                        required={true}
                    />
                </div>
                <div>
                    <label>Subject Specialization*</label>
                    <input
                        type="text"
                        value={specialized_field}
                        onChange={(e) => setSpecialized_field(e.target.value)}
                        placeholder="Subjects"
                        required={true}
                    />
                </div>
               
                <hr className="division"/>
                <p>Other Details</p>
                <div>
                    <label>Aadhar No.*</label>
                    <input
                        type="number"
                        value={aadhar}
                        onChange={(e) => setAadhar(e.target.value)}
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
                
                <div>
                    <label>Joining date*</label>
                    <input
                        type="date"
                        value={join_date}
                        onChange={(e) => setJoin_date(e.target.value)}
                        placeholder="Joining Date"
                        required={true}
                    />
                </div>
                <div>
                    <label>Release date*</label>
                    <input
                        type="date"
                        value={released_date}
                        onChange={(e) => setReleased_date(e.target.value)}
                        placeholder="Release Date" readOnly={rdonly}
                        
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Update</button></span>
                <button type="submit" value="Update" className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>
                </form>
            </div>

                    
            <table className="table-60" id="faculty-view" style={{display: "none"}}>
                <thead>
                <tr>
                <th>Faculty ID</th>
                    <th>Active Status</th>
                    <th>Faculty Name</th>
                    <th>Faculty Email</th>
                    <th>Faculty Phone</th>
                    <th>Faculty Qualification</th>
                    <th>Area Of Interest</th>
                    <th>Joining Date</th>
                    <th>Release Date</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td><input type='checkbox' checked={item.active === 1 ? true : false}></input></td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact_no}</td>
                        <td>{item.heighst_qualification}</td>
                        <td>{item.specialized_field}</td>
                        <td>{item.join_date.slice(0, 10)}</td>
                        {/* <td>{item.relese_Date}</td> */}
                        <td>{item.relese_Date !== null ? item.relese_Date.slice(0, 10):''}</td>

                    </tr>
                ))}
                </tbody>
            </table>
                
        </div>
)
}
export default ViewAndUpdateFaculty;