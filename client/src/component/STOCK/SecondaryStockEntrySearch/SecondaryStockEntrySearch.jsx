import {useState} from "react";
const SecondaryStockEntrySearch = (props) => {
    const [billId,setBillid]=useState("");
    const [fromDate,setFromDate]=useState("");
    const [toDate,setToDate]=useState(new Date().toISOString().slice(0, 10))
    const HandleEdit=(e)=> {
        e.preventDefault();
        const data={
            billId,
            fromDate,
            toDate

        }
        props.buttonClick("block");
        props.setStockData(data);
    }
    return(
        <div className="dashbrd-40-colm" style={{display: props.SecondstockEntrySearch}}>
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
export default SecondaryStockEntrySearch;