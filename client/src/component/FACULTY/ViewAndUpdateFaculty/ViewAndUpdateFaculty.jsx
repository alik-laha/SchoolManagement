import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";

const ViewAndUpdateFaculty = (props) => {
    const currDate = new Date().toLocaleDateString();
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
const [Type, setType] = useState("");

    useEffect(() => {
        if(props.data.length > 0){
            setData(props.data);
        }
    }, [props.data]);

    useEffect(() => {
        if(props.view === "block" &&props.data.length > 0) {
            setView("block");
        }
        else{
            setView("none");
        }
    },[props.view, props.data]);
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
                setType(item.type)
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
    axios.post("/api/v1/faculty/deletefaculty", {id},{headers:{"Authorization":localStorage.getItem("token")}})
        .then((res) => {
            if(res){
                alert("Faculty Deleted Successfully");
                setView("none");
            }
        })
}
const handaleUpdate = (e) => {
    e.preventDefault();
const data = {id, name, email, contactNo:contact_no, qualification:heighst_qualification,specialized:specialized_field,joinDate:join_date,releseDate:released_date,aadharno:aadhar,pan,address,dob,Type};
axios.post("/api/v1/faculty/updatefaculty", data,{headers:{"Authorization":localStorage.getItem("token")}})
        .then((res) => {
            if(res){
                alert("Faculty Updated Successfully");
                setEditView("none");
                setMainView("contents");
                setView("none")
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
                setType('')
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
    setType('')
}
    return(
        <div style={{display: View}}>
            
            
            <div style={{display: mainView}}>
            <ReactHTMLTableToExcel
                id="hostel"
                className="dashboard-btn btn-warning excel-btn clear-gradient"
                table="faculty-view"
                filename={'Faculty_Details_Report_'+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
            <table className="table-60" >
           
                <thead >
                <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                {/* <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button> */}
            
                <tr>
                    <th>Sl No.</th>
                    
                    <th>Name</th>
                    <th>Active Status</th>
                    <th>Employee Type</th>
                    <th>Qualification</th>
                    <th>Area Of Interest</th>
                    <th>Joining Date</th>
                    
                    <th>Action</th>

                </tr>
                </thead>
                <tbody style={{display: mainView}}>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td><input type='checkbox' checked={item.active === 1 ? true : false}></input></td>
                        
                        <td>{item.type}</td>
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
            <button style={{marginBottom:'8px'}}
            onClick={handaleCancel} className="dashboard-btn dashboard-btn-scss">Cancel</button>
                <hr></hr>


                <form onSubmit={handaleUpdate} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
                    <p className="customize-centre" style={{fontSize:'17px'}}>Edit Faculty Details</p>
                    <p>Basic Details</p>

                    <dl className="dl-horizontal">

                    <dt><label>Employee Name*</label></dt>
                    <dd><input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Faculty Name"
                            required={true}
                        /></dd>
                    <dt><label>Employee Type*</label></dt>
                    <dd>
                        <select onChange={(e) => setType(e.target.value)} value={Type} required>
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
                        /></dd>

                    <dt><label>Contact No.*</label></dt>
                    <dd><input
                            type="number"
                            value={contact_no}
                            onChange={(e) => setContact_no(e.target.value)}
                            placeholder="Contact No"
                            required={true}
                        /></dd>
                      <dt><label>Address*</label></dt>
                    <dd><textarea style={{height:'80px',rows:"3"}}
                        type="textarea" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            required={true}
                        /></dd>

                    <dt> <label>Email Address*</label></dt>
                    <dd><input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required={true}
                        /></dd>

                    </dl>
                    <p>Academic Details</p>
                    <dl className="dl-horizontal">
                    

                    <dt><label>Highest Qualification*</label></dt>
                    <dd> <input
                            type="text"
                            value={heighst_qualification}
                            onChange={(e) => setHeighst_qualification(e.target.value)}
                            placeholder="Qualification"
                            required={true}
                        /></dd>

                    <dt> <label>Subject Specialization*</label></dt>
                    <dd><input
                            type="text"
                            value={specialized_field}
                            onChange={(e) => setSpecialized_field(e.target.value)}
                            placeholder="Subjects"
                            required={true}
                        /></dd>

                   

                    

                    </dl>
                    
                
                    
                    <p>Other Details</p>
                    <dl className="dl-horizontal">
                        <dt><label>Aadhar No.*</label></dt>
                        <dd><input
                            type="number"
                            value={aadhar}
                            onChange={(e) => setAadhar(e.target.value)}
                            placeholder="Aadhar No."
                            required={true}
                        /></dd>

                        <dt><label>Pan No.*</label></dt>
                        <dd><input
                            type="text"
                            value={pan}
                            onChange={(e) => setPan(e.target.value)}
                            placeholder="Pan No."
                            required={true}
                        /></dd>




                        <dt><label>Joining date*</label></dt>
                        <dd> <input
                            type="date"
                            value={join_date}
                            onChange={(e) => setJoin_date(e.target.value)}
                            placeholder="Joining Date"
                            required={true}
                        /></dd>

                        <dt> <label>Release date*</label></dt>
                        <dd> <input
                            type="date"
                            value={released_date}
                            onChange={(e) => setReleased_date(e.target.value)}
                            placeholder="Release Date" readOnly={rdonly}

                        /></dd>
                    </dl>
                    

                    <span><button className="dashboard-btn dashboard-btn-scss">Update</button></span>
                    {/* <button type="submit" value="Update" className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button> */}
                </form>
            </div>


            <table className="table-60" id="faculty-view" style={{display: "none"}}>
                <thead>
                <tr>
                    <th>Sl. No.</th>
                    <th>Active Status</th>
                    <th>Employee Name</th>
                    <th>Employee Type</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Employee Email</th>
                    <th>Employee Contact</th>
                    <th>Employee Qualification</th>
                    <th>Employee Specializationt</th>
                    <th>Aadhar No.</th>
                    <th>PAN No.</th>
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
                        <td>{item.type}</td>
                        <td>{item.dob.slice(0,10)}</td>
                        <td>{item.address}</td>

                        <td>{item.email}</td>
                        <td>{item.contact_no}</td>
                        <td>{item.heighst_qualification}</td>
                        <td>{item.specialized_field}</td>
                        <td>{item.aadhar}</td>
                        <td>{item.pan}</td>
                        
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