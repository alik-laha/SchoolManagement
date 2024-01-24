import {useState} from "react";
import axios from "axios";
const ModifyStockEntrySearch = (props) => {
    const [billId,setBillid]=useState("");
    const [fromDate,setFromDate]=useState("");
    const [toDate,setToDate]=useState("")

    const HandleEdit=(e)=> {
        e.preventDefault();
        const data={
            billId,
            fromDate,
            toDate
        }
        axios.post("http://localhost:7000/api/v1/stock/getsecondarystockentry",data)
            .then((res)=>{
                props.setStockData(res.data.data)
            })
            .catch((error)=>{
                console.log(error)
            } )
        props.buttonClick("block");

    }
    return(
        <div className="dashbrd-40-colm" style={{display: props.ModifyStockSearch}}>
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
                    onChange={(e)=>setToDate(e.target.value)}
                />
                </div>
           
                        <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                
            </form>
        </div>
    )
}
export default ModifyStockEntrySearch;