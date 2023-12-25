import {useState} from "react";

const StockSearch = (props) => {
    const [billId,setBillid]=useState("");
    const [billDate,setBillDate]=useState("");
    const [itemType,setItemtype]=useState("");
    const [vendorname,setVendorName]=useState("");

    const HandleEdit=(e)=> {
        e.preventDefault();
        const data = {
            billId,
            billDate,
            itemType,
            vendorname
        }
        console.log(data);
    }
    return(
        <div style={{display: props.StockView}}>
            <form onSubmit={HandleEdit}>
            <div>
                <label>Search By Bill Id</label>
                <input
                    type="text"
                    placeholder="User Name"
                    value={billId}
                    onChange={(e) => setBillid(e.target.value)}
                />
            </div>
            <div>
                <label>Search By Bill Date</label>
                <input
                    type="date"
                    placeholder="User Name"
                    value={billDate}
                    onChange={(e) => setBillDate(e.target.value)}
                />
            </div>
            <div>
                <label>Search by Vendor Name</label>
                <select onChange={(e) => setVendorName(e.target.value)}>
                    <option value="">All</option>
                    {props.Vendor.map((data) => (
                        <option value={data.vendor_name} key={data.vendor_id}>
                            {data.vendor_name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Search by Item Type</label>
                <select onChange={(e) => setVendorName(e.target.value)}>
                    <option value="">All</option>
                    {props.Item.map((data) => (
                        <option value={data.item_Type} key={data.item_id}>
                            {data.item_Type}
                        </option>
                    ))}
                </select>
            </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default StockSearch;