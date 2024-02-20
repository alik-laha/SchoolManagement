import {useState} from "react";
import axios from "axios";


const EntryStockUsage = (props) => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [ItemNames, setItemNames] = useState([]);
    const [usageDate, setUsageDate] = useState(new Date().toISOString().slice(0, 10) );

    const handleItemtype = (e) => {
        axios.post("/api/v1/stock/getitemnamebytype", {itemType:e.target.value},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                setItemNames(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("/api/v1/stock/entrystockusage",{itemName, quantity, usageDate},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                alert("Stock Usage has been Insterted Successfully");
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return(
        <div style={{display:props.view}}>
            <form className="dashbrd-40-colm" onSubmit={handleSubmit}>
                <div>
                    <label>Type Of Item </label>
                    <select onChange={handleItemtype} required={true}>
                        <option value="">Item Type</option>
                        {props.Item.map((data, idx) => (
                            <option value={data.item_Type} key={idx}>
                                {data.item_Type}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Item name </label>
                    <select onChange={(e) => setItemName(e.target.value)} required={true} value={itemName}>
                        <option value="">Item Name</option>
                        {ItemNames.map((data, idx) => (
                            <option value={data.item_name} key={idx}>
                                {data.item_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Usage Quantity ( Pc / Kg / Ltr / Mtr ) </label>
                    <input
                        type="number"
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                    />
                </div>
                <div>
                    <label>Usage Date </label>
                    <input
                        type="date"
                        onChange={(e) => setUsageDate(e.target.value)}
                        value={usageDate}
                        required
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>
            </form>
        </div>
    )
}

export default EntryStockUsage;