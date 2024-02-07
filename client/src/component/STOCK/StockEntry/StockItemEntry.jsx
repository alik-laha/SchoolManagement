import {useEffect, useState} from "react";
import axios from "axios";
const StockItemEntry= (props) => {
    const [itemName, setItemName] = useState("");
    const [billNo, setBillNo] = useState("");
    const [billDate, setBillDate] = useState(new Date().toISOString().slice(0, 10) );
    const [allVendorName, setAllVendorName] = useState([]);
    const [allItemType, setAllItemType] = useState([]);
    const [vendorName, setVendorName] = useState("");
    const [itemType, setItemType] = useState("");
    const [unitCost, setUnitCost] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [projectedCost, setProjectedCost] = useState(0);
    const [primaryEntryDate, setprimaryEntryDate] = useState(new Date().toISOString().slice(0, 10) );
    const [modifiedDate, setModifiedDate] = useState(new Date().toISOString().slice(0, 10) );
    const [itemNames, setItemNames] = useState([]);
    
    useEffect(() => {
        setAllVendorName(props.setAllVendorName);
        setAllItemType(props.setAllItemType);
    }, [props.setAllVendorName, props.setAllItemType])

    useEffect(()=>{
        setProjectedCost(unitCost*quantity)
    },[quantity,unitCost])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            itemType,
            itemName,
            vendorName,
            billNo,
            billDate,
            unitCost,
            quantity,
            projectedCost,
            primaryEntryDate,
            modifiedDate
        }
        axios.post("http://localhost:7000/api/v1/stock/stockentry", data)
            .then((res) => {
                    alert("Stock has been Insterted Successfully");
                    setItemName("");
                    setBillNo("");
                    setBillDate(new Date().toISOString().slice(0, 10) );
                    setVendorName("");
                    setItemType("");
                    setUnitCost(0);
                    setQuantity(0);
                    setProjectedCost(0);

            })
            .catch((err) => {
                 if(err.response.data.message.errno === 1062){
                    alert("Bill No. " + billNo+" Already Exists");
                 }
                else{
                   console.log(err);
                }
            })
    }
    const handleItemtype = (e) => {
        setItemType(e.target.value);
        axios.post("http://localhost:7000/api/v1/stock/getitemnamebytype", {itemType:e.target.value})
            .then((res) => {
                setItemNames(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(
        <div style={{display:props.stockEntryView}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Vendor</label>
                    <select onChange={(e) => setVendorName(e.target.value)} required={true} value={vendorName}>
                        <option value="">Vendor</option>
                        {allVendorName.map((data) => (
                            <option value={data.vendor_name} key={data.vendor_id}>
                                {data.vendor_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Type Of Item </label>
                    <select onChange={handleItemtype} required={true} value={itemType}>
                        <option value="">Item Type</option>
                        {allItemType.map((data) => (
                            <option value={data.item_Type} key={data.type_id}>
                                {data.item_Type}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Item name </label>
                    <select onChange={(e)=>setItemName(e.target.value)} required={true} value={itemName}>
                        <option value="">Item Name</option>
                        {itemNames.map((data) => (
                            <option value={data.item_name} key={data.id}>
                                {data.item_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Bill No. / Memo No. </label>
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
                        placeholder="Bill date"
                        onChange={(e) => setBillDate(e.target.value)}
                        value={billDate}
                        required
                    />
                </div>
                <div>
                    <label>Unit Item Cost ( Per Pc / Kg / Ltr / Mtr )</label>
                    <input
                        id="UnitCost"
                        type="number"
                        value={unitCost}
                        onChange={(e) => setUnitCost(e.target.value)}
                        placeholder="Unit Per Cost"
                        required
                    />
                </div>
                <div>
                    <label>Total Quantity ( Pc / Kg / Ltr / Mtr )</label>
                    <input
                        id="Quantity"
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        placeholder="Total Quantity"
                        required
                    />
                </div>
                <div>
                    <label>Projected Cost</label>
                    <input
                        id="Projected_Cost"
                        type="number"
                        value={projectedCost}
                        onChange={(e) => setProjectedCost(e.target.value)}
                        placeholder="Projected Cost"
                        readOnly
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>

            </form>

        </div>
    )
}

export default StockItemEntry;