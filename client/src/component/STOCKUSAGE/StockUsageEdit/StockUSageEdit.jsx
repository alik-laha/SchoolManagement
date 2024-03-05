import {useState, useEffect} from "react";

const StockUsageEdit = (props) => {
    const [ItemNameData, setItemNameData] = useState([]);
    const [itemName, setItemName] = useState("");
    const [date, setDate] = useState();
    const [Quantity, setQuantity] = useState();
    const [index, setIndex] = useState();
    const [view, setView] = useState("none");

    useEffect(() => {
        if(props.view === "block" && props.view40==="block"){
            setView("block");
        }
    },[props.view, props.view40]);
    const handleEdit = (data,idx) => {
        setItemName(data.item_name);
        setDate(data.entry_date);
        setIndex(idx);
    }
    return(
        <div style={{display:view}} >
            <table className="table-60">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Item Name</th>
                        <th>Entry Date</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data, idx) => (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{data.item_name}</td>
                            <td>{data.entry_date.slice(0,10)}</td>
                            <td>{data.quantity}</td>
                            <td>
                                <button onClick={() => handleEdit(data,idx)} className="dashboard-btn dashboard-btn-scss">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default StockUsageEdit;