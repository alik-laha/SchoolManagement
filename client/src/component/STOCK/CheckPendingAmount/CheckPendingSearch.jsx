import {useState} from "react";


const CheckPendingSearch = (props) => {
    const [toDate, setToDate] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [vendorName, setVendorName] = useState("");
    const [itemType, setItemType] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            vendorName,
            itemType,
            fromDate,
            toDate
        }

    }
    return (
        <div className="dashbrd-40-colm" style={{display: props.view}}>
            <form onSubmit={handleSubmit}>
                <div>
                    Search by Vendor Name
                    <select onChange={(e) => setVendorName(e.target.value)}>
                        <option value="">Select Room No</option>
                        {
                            props.Vendor.map((data, idx) => {
                                return (
                                    <option key={idx} value={data.vendor_name}>{data.vendor_name}</option>
                                )
                            })
                        }
                    </select>

                </div>
                <div>
                    Search by Item Type
                    <select onChange={(e) => setItemType(e.target.value)}>
                        <option value="">Select Room No</option>
                        {
                            props.Item.map((data, idx) => {
                                return (
                                    <option key={idx} value={data.item_Type}>{data.item_Type}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <label>From Date</label>
                    <input
                        type="date"
                        placeholder="name"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </div>

                <div>
                    <label>To Date</label>
                    <input
                        type="date"
                        placeholder="name"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default CheckPendingSearch;