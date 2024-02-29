import {useEffect, useState} from "react";
import axios from "axios";


const StockUsageSearch = (props) => {
const [itemName, setItemName] = useState("");
const [ItemNames, setItemNames] = useState([]);
const [fromDate, setFromDate] = useState();
const [toDate, setToDate] =  useState();


    useEffect(() => {
        if(props.view === "block"){
            axios.get("/api/v1/stock/getallitemname",{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    setItemNames(res.data.data);
                    // console.log(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [props.view]);

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("/api/v1/stock/getallstockusages", {itemName,fromDate,toDate}, {headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                console.log(res);
                props.StockUsage(res.data.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handlesubmit}>
                <div>
                    <label>Item Name</label>
                    <select onChange={(e) => setItemName(e.target.value)} value={itemName} required>
                        <option value="">Item Name</option>
                        {ItemNames.map((data, idx) => (
                            <option value={data.item_name} key={idx}>
                                {data.item_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>From Date</label>
                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}/>
                </div>
                <div>
                    <label>To Date</label>
                    <input type="date"  value={toDate} onChange={(e) => setToDate(e.target.value)}/>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>
            </form>
        </div>
    )
}

export default StockUsageSearch;