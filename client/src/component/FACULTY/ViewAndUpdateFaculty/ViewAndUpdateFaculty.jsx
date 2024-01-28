import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ViewAndUpdateFaculty = (props) => {
const [data, setData] = useState([]);
const [View, setView] = useState("none");

    useEffect(() => {
        if(props.view === "block" && props.data.length > 0) {
            setView("block");
            setData(props.data);
            console.log(props.data)
        }
        else{
            setView("none");
        }
    },[props.view, props.data])
const clearTable = () => {
        setData([]);
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
            <table className="table-60" id="faculty-view">
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
            {data.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default ViewAndUpdateFaculty;