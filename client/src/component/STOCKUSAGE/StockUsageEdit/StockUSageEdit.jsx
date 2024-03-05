import {useState, useEffect} from "react";
import axios from "axios";

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

    useEffect(() => {
        if(view==="block") {
            axios.get("/api/v1/stock/getallitemname",{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    setItemNameData(res.data.data);
                    // console.log(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },[view]);
    const handleEdit = (data,idx) => {
        setItemName(data.item_name);
        setDate(data.entry_date.slice(0, 10));
        setIndex(idx);
        setQuantity(data.quantity)
    }

    const handleCancel = () => {
        setIndex();
        setItemName("");
        setDate("");
        setQuantity()
    }

    const handleUpdate = () => {

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
                            <td>{idx === index ? (<select onChange={(e) => setItemName(e.target.value)} value={itemName}>
                                <option value="">Item Name</option>
                                {ItemNameData.map((data, idx) => (
                                    <option value={data.item_name} key={idx}>
                                        {data.item_name}
                                    </option>
                                ))}
                            </select>): (data.item_name)}</td>
                            <td>{idx===index ? <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>:data.entry_date.slice(0, 10)}</td>
                            <td>{idx === index ?
                                <input type="number" value={Quantity} onChange={(e)=>setQuantity(e.target.value)}/>: data.quantity}</td>
                            <td>{idx === index ? (<><button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">Cancel</button>
                                <button onClick={handleUpdate} className="dashboard-btn dashboard-btn-scss">Update</button> </>):
                                ( <button onClick={() => handleEdit(data, idx)}
                                        className="dashboard-btn dashboard-btn-scss">Edit
                                </button>)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default StockUsageEdit;