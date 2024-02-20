import {useState} from "react";
import axios from "axios";

const SecondaryStockEntryAllSearch = (props) => {
    const [billId,setBillid]=useState("");
    const [itemType,setItemtype]=useState("");
    const [vendorName,setVendorName]=useState("");
    const [fromDate,setFromDate]=useState("");
    const [toDate,setToDate]=useState("")

    const HandleEdit=(e)=> {
        e.preventDefault();
        const data={
            billId,
            itemType,
            vendorName,
            fromDate,
            toDate
        }
        axios.post("/api/v1/stock/getstock",data,{headers:{"Authorization":localStorage.getItem("token")}})
        .then((res)=>{
            props.setStockData(res.data.data)
        })
          .catch((error)=>{
              console.log(error)
          } )
        props.buttonClick("block");
    }
    return(
        <div className="dashbrd-40-colm" style={{display: props.SecondStockView}}>
            <form onSubmit={HandleEdit}>
            <div>
                <label>Search By Bill / Memo No.</label>
                <input
                    type="text"
                    placeholder="Bill No."
                    value={billId}
                    onChange={(e) => setBillid(e.target.value)}
                />
            </div>


            <div>
                <label>From Bill Date</label>
                <input
                    type="date"
                    placeholder="name"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
                </div>
                <div>
                <label>To Bill Date</label>
                <input
                    type="date"
                    placeholder="name"
                    value={toDate}
                    onChange={(e)=>setToDate(e.target.value)}
                />
                </div>
                         
              
   
            <div>
                <label>Search by Vendor Name</label>
                <select onChange={(e) => setVendorName(e.target.value)}>
                    <option value="">All</option>
                    {props.Vendor.map((data,index) => (
                        <option value={data.vendor_name} key={index}>
                            {data.vendor_name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Search by Item Type</label>
                <select onChange={(e) => setItemtype(e.target.value)}>
                    <option value="">All</option>
                    {props.Item.map((data,index) => (
                        <option value={data.item_Type} key={index}>
                            {data.item_Type}
                        </option>
                    ))}
                </select>
            </div>
                        <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                
            </form>
        </div>
    )
}
export default SecondaryStockEntryAllSearch;