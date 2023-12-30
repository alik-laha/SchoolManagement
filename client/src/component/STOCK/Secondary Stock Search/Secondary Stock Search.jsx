import {useState} from "react";
import axios from "axios";
const StockSearch = (props) => {
    const [billId,setBillid]=useState("");
    const [billDate,setBillDate]=useState("");
    

    const HandleEdit=(e)=> {
        e.preventDefault();
        const data={
            billId,
            billDate,
            
        }
        props.buttonClick("block");
        props.setStockData(data);
    }
    return(
        <div className="dashbrd-40-colm" style={{display: props.StockView}}>
            <form onSubmit={HandleEdit}>
            <div>
                <label>Search By Bill Id</label>
                <input
                    type="text"
                    placeholder="Bill Id"
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
           
                        <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                
            </form>
        </div>
    )
}
export default StockSearch;