import {useEffect, useState} from "react";
import axios from "axios";
const StockItemEntry= (props) => {
    const [itemName, setItemName] = useState("");
    const [billNo, setBillNo] = useState("");
    const [billDate, setBillDate] = useState("");
    const[unitCost, setUnitCost] = useState("");
    const [quantity, setQuantity] = useState("");
    const [vendor, setVendor] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(()=>{

    axios.post("http://localhost:7000/api/v1/stock/getallvendor")
        .then((res)=>{
            setVendor(res.data.data);
        })
        .catch((err)=>{
          console.log(err);
        })

        axios.post("http://localhost:7000/api/v1/stock/getallitem")
            .then((data)=>{
                setItem(data.data.data);

            })
    },[])
    console.log(item)
    return(
        <div style={{display:props.stockEntryView}}>
            <form>
                <div>
                    <label>Create Role</label>
                    <select onChange={(e) => setRole(e.target.value)} required>
                        <option value="">Role</option>
                        {vendor.map((data) => (
                            <option value={data.vendor_name} key={data.vendor_id}>
                                {data.vendor_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Item Name</label>
                    <input
                        type="text"
                        placeholder="User Name"
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                        required
                    />
                </div>
                <div>
                    <label>Create Role</label>
                    <select onChange={(e) => setRole(e.target.value)} required>
                        <option value="">Role</option>
                        {item.map((data) => (
                            <option value={data.item_Type} key={data.type_id}>
                                {data.item_Type}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Bill No</label>
                    <input
                        type="text"
                        placeholder="User Name"
                        onChange={(e) => setBillNo(e.target.value)}
                        value={billNo}
                        required
                    />
                </div>
                <div>
                    <label>Bill Date</label>
                    <input
                        type="text"
                        placeholder="User Name"
                        onChange={(e) => setBillDate(e.target.value)}
                        value={billDate}
                        required
                    />
                </div>
                <div>
                    <label>Unit Cost</label>
                    <input
                        type="text"
                        placeholder="User Name"
                        onChange={(e) => setUnitCost(e.target.value)}
                        value={unitCost}
                        required
                    />
                </div>
                <div>
                    <label>Quantity</label>
                    <input
                        type="text"
                        placeholder="User Name"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                    />
                </div>

            </form>

        </div>
    )
}

export default StockItemEntry;