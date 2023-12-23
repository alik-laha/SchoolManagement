import {useEffect, useState} from "react";
import axios from "axios";
const StockItemEntry= (props) => {
    const [itemName, setItemName] = useState("");
    const [billNo, setBillNo] = useState("");
    const [billDate, setBillDate] = useState();
    const [allVendorName, setAllVendorName] = useState([]);
    const [allItemType, setAllItemType] = useState([]);
    const [vendorName, setVendorName] = useState("");
    const [itemType, setItemType] = useState("");
    const [UnitPerCost, setUnitPerCost] = useState();
    const [Quantity, setQuantity] = useState();
    const [ProjectedCost, setProjectedCost] = useState();
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

    useEffect(()=>{
        setProjectedCost(UnitPerCost*Quantity)
    },[Quantity,UnitPerCost])
    return(
        <div style={{display:props.stockEntryView}} className="dashbrd-40-colm">
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
                        placeholder="Item Name"
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                        required
                    />
                </div>
                <div>
                    <label>Items</label>
                    <select onChange={(e) => setItemType(e.target.value)} required value={itemType}>
                        <option value="">Item Type</option>
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
                        placeholder="Bill No."
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
                        id="UnitCost"
                        type="number"
                        value={UnitPerCost}
                        onChange={(e) => setUnitPerCost(e.target.value)}
                        placeholder="User Name"
                        required
                    />
                </div>
                <div>
                    <label>Quantity</label>
                    <input
                        id="Quantity"
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={Quantity}
                        placeholder="User Name"
                        required
                    />
                </div>
                <div>
                    <label>Projected Cost</label>
                    <input
                        id="Projected_Cost"
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={ProjectedCost}
                        readOnly
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>
                
            </form>

        </div>
    )
}

export default StockItemEntry;