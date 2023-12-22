import {useEffect, useState} from "react";
import axios from "axios";
const StockItemEntry= (props) => {
    const [itemName, setItemName] = useState("");
    const [billNo, setBillNo] = useState("");
    const [billDate, setBillDate] = useState();
    const[unitCost, setUnitCost] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [allVendorName, setAllVendorName] = useState([]);
    const [allItemType, setAllItemType] = useState([]);
    const [vendorName, setVendorName] = useState("");
    const [itemType, setItemType] = useState("");
    const[projectedCost, setProjectedCost] = useState("");

    useEffect(()=>{

    axios.post("http://localhost:7000/api/v1/stock/getallvendor")
        .then((res)=>{
            setAllVendorName(res.data.data);
        })
        .catch((err)=>{
          console.log(err);
        })

        axios.post("http://localhost:7000/api/v1/stock/getallitem")
            .then((data)=>{
                setAllItemType(data.data.data);

            })
    },[])
    return(
        <div style={{display:props.stockEntryView}}>
            <form>
                <div>
                    <label>Vendor</label>
                    <select onChange={(e) => setVendorName(e.target.value)} required value={vendorName}>
                        <option >Vendor</option>
                        {allVendorName.map((data) => (
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
                    <label>Items</label>
                    <select onChange={(e) => setItemType(e.target.value)} required value={itemType}>
                        <option value="">Role</option>
                        {allItemType.map((data) => (
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
                        type="date"
                        placeholder="User Name"
                        onChange={(e) => setBillDate(e.target.value)}
                        value={billDate}
                        required
                    />
                </div>
                <div>
                    <label>Unit Cost</label>
                    <input
                        type="number"
                        placeholder="User Name"
                        onChange={(e) => setUnitCost(e.target.value)}
                        value={unitCost}
                        required
                    />
                </div>
                <div>
                    <label>Quantity</label>
                    <input
                        type="number"
                        placeholder="User Name"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                    />
                </div>
                {/*<input type="number" value={unitCost*quantity}  />*/}
            </form>

        </div>
    )
}

export default StockItemEntry;