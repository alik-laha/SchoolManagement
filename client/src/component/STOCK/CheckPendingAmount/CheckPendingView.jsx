import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const CheckPendingView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")
    const [totalpending,settotalpending]=useState(0);
    
    const clearTable = () => {
        setViewStock([]);
      };

    

    useEffect(()=>{
        setViewStock(props.SearchebyData)
        
        
    },[props.SearchebyData])

    useEffect(()=> {
        console.log(props.StockView,props.view)
        if (props.StockView === "block" && props.view === "block") {
            setVisible("block")
        }
        else {
            setVisible("none")
        }
    },[props.StockView,props.view])
let sum=0;
    return (
        <div style={{display:visible}}>
            <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
               <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn btn-warning excel-btn"
                table="secondary-stock-view"
                filename="primasecondaryry-stock-excel-report"
                sheet="tablexls"
                buttonText="Excel Import"
            />
            <table className="table-60" id="secondary-stock-view">
                <thead>
                <tr>
                    <th>Item Id</th>
                    <th>Bill Id</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th>
                    <th>Bill Date</th>
                    <th>Balance Amount</th>  
                </tr>
                </thead>
                <tbody>
                {viewStock.map((item) => (
                    sum=sum+item.pending_amount,
                    <tr key={item.stock_id}>
                        <td>{item.stock_id}</td>
                        <td>{item.bill_id}</td>
                        <td>{item.item_Name}</td>
                        <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td>
                        <td>{item.bill_date.slice(0,10)}</td>
                        <td>{item.pending_amount}</td>
                    </tr>
                ))}
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                    <td><b>Total Balance Amount :</b></td>
                    <td>{sum}</td>
                </tr>
                </tbody>
            </table>
            {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default CheckPendingView;