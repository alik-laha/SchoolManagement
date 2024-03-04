import {useState, useEffect} from "react";

const StockUsageEdit = (props) => {
    const [ItemNameData, setItemNameData] = useState([]);
    const [itemName, setItemName] = useState("");
    const [date, setDate] = useState();
    const [usage, setUsage] = useState();
    const [view, setView] = useState("none");

    useEffect(() => {
        if(props.view === "block" && props.data.length > 0) {
            setView("block");
        }
    })
    return(
        <div style={{display:view}} className="dashbrd-40-colm">
            <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Item Name</th>
                        <th>Entry Date</th>
                        <th>Usage</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data, idx) => (
                        <tr key={idx}>
                            <td>{data.item_name}</td>
                            <td>{data.entry_date}</td>
                            <td>{data.usage}</td>
                            <td>{data.usage_type}</td>
                            <td>{data.remarks}</td>
                            <td>
                                <button onClick={() => props.handleEdit(data)} className="dashboard-btn dashboard-btn-scss">Edit</button>
                                <button onClick={() => props.handleDelete(data)} className="dashboard-btn dashboard-btn-scss">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default StockUsageEdit;