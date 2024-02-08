import {useEffect, useState} from "react";
import axios from "axios";


const StockUsageSearch = (props) => {
const [itemName, setItemName] = useState("");
const [ItemNames, setItemNames] = useState([]);
    useEffect(() => {
        if(props.view === "block"){
            axios.get("http://localhost:7000/api/v1/stock/getallitemname")
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
                <select onChange={(e)=>setItemName(e.target.value)} required={true} value={itemName}>
                     <option value="">Item Name</option>
                     {ItemNames.map((data, idx) => (
                          <option value={data.item_name} key={idx}>
                            {data.item_name}
                          </option>
                     ))}
                </select>
           </div>

            </form>
        </div>
    )
}

export default StockUsageSearch;