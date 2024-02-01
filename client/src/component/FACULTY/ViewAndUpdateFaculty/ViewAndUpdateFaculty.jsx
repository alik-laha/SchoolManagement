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
const handaleUpdate = () => {

}
const handaleCancel = () => {
        setMainView("contents");
        setEditView("none");
        setName("");
        setEmail("");
        setContact_no("");
        setHeighst_qualification("");
        setSpecialized_field("");
}
    return(
        <div style={{display: View}}>
            <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
            <ReactHTMLTableToExcel
                id="hostel"
                className="dashboard-btn btn-warning excel-btn"
                table="faculty-view"
                filename="Faculty-excel-report"
                sheet="tablexls"
                buttonText="Excel Import"
            />
            <table className="table-60">
                <thead>
                <tr>
                    <th>Faculty ID</th>
                    <th>Faculty Name</th>
                    <th>Faculty Email</th>
                    <th>Faculty Phone</th>
                    <th>Faculty Qualification</th>
                    <th>Faculty Department</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody style={{display: mainView}}>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact_no}</td>
                        <td>{item.heighst_qualification}</td>
                        <td>{item.specialized_field}</td>
                        <td>
                            <button className="dashboard-btn dashboard-btn-scss"
                                    onClick={() => handaleEdit(item.id)}>Edit
                            </button>
                            <button className='dashboard-btn btn-warning'
                                    onClick={() => handaleDelete(item.id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tbody style={{display: editView}}>
                <tr>
                    <td>{id}</td>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)}/></td>
                    <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/></td>
                    <td><input type="text" value={contact_no} onChange={(e) => setContact_no(e.target.value)}/></td>
                    <td><input type="text" value={heighst_qualification}
                               onChange={(e) => setHeighst_qualification(e.target.value)}/></td>
                    <td><input type="text" value={specialized_field}
                               onChange={(e) => setSpecialized_field(e.target.value)}/></td>
                    <td>
                        <button className="dashboard-btn dashboard-btn-scss" onClick={handaleUpdate}>Update</button>
                        <button className='dashboard-btn btn-warning' onClick={handaleCancel}>Cancel</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <table className="table-60" id="faculty-view" style={{display:"none"}}>
                <thead>
                <tr>
                    <th>Faculty ID</th>
                    <th>Faculty Name</th>
                    <th>Faculty Email</th>
                    <th>Faculty Phone</th>
                    <th>Faculty Qualification</th>
                    <th>Faculty Department</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact_no}</td>
                        <td>{item.heighst_qualification}</td>
                        <td>{item.specialized_field}</td>

                    </tr>
                ))}
                </tbody>
            </table>
                {data.length === 0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
)
}
export default ViewAndUpdateFaculty;