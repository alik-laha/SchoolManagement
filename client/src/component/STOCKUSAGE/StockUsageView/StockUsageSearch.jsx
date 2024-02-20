import {useEffect, useState} from "react";
import axios from "axios";


const StockUsageSearch = (props) => {
const [itemName, setItemName] = useState("");
const [ItemNames, setItemNames] = useState([]);
const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] =  useState(new Date().toISOString().slice(0, 10) );


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
    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form>
                <div>
                    <label>Item Name</label>
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
                    <label>From Date</label>
                    <input type="date" required={true} value={fromDate} onChange={(e) => setFromDate(e.target.value)}/>
                </div>
                <div>
                    <label>To Date</label>
                    <input type="date" required={true} value={toDate} onChange={(e) => setToDate(e.target.value)}/>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>
            </form>
        </div>
    )
}

export default StockUsageSearch;