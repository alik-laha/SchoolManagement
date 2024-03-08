import {useEffect, useState} from "react";
import axios from "axios";

const StockUsageEditSearch = (props) => {
    const [ItemNameData, setItemNameData] = useState([]);
    const [itemName, setItemName] = useState("");
    const [date, setDate] = useState();
    const handleSearch = (e) => {
        e.preventDefault();
        axios.post("/api/v1/stock/getminusstockusage",{itemName, date},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                props.StockUsageEditData(res.data.data,"block");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        if(props.view === "block"){
            axios.get("/api/v1/stock/getallitemname",{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    setItemNameData(res.data.data);
                    // console.log(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [props.view]);
    return (
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSearch}>
                <div>
                    <label>Search By Item Name</label>
                    <select onChange={(e) => setItemName(e.target.value)} value={itemName}>
                        <option value="">Item Name</option>
                        {ItemNameData.map((data, idx) => (
                            <option value={data.item_name} key={idx}>
                                {data.item_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>
                        Search By Entry Date
                    </label>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Search</button></span>
            </form>
        </div>
    )
}
export default StockUsageEditSearch;