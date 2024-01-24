import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const StockView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")

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

    return (
        <div style={{display:visible}}>
            <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
               <ReactHTMLTableToExcel
                id="alik"
                className="dashboard-btn btn-warning excel-btn"
                table="primary-stock-view"
                filename="primary-stock-excel-report"
                sheet="tablexls"
                buttonText="Excel Import"
            />
            <table className="table-60" id="primary-stock-view">
                <thead>
                <tr>
                    <th>Item Id</th>
                    <th>Bill Id</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th>
                    <th>Bill Date</th>
                    <th>Unit Per Cost</th>
                    <th>Quantity</th>
                    <th>Total Price(Estimated)</th>
                    <th>Primary Stock Entry Date</th>
                    <th>Last Modified Date</th>
                    
                </tr>
                </thead>
                <tbody>
                {viewStock.map((item) => (
                    <tr key={item.stock_id}>
                        <td>{item.stock_id}</td>
                        <td>{item.bill_id}</td>
                        <td>{item.item_Name}</td>
                        <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td>
                        <td>{item.bill_date.slice(0,10)}</td>
                        <td>{item.unit_cost}</td>
                        <td>{item.quantity}</td>
                        <td>{item.projected_cost}</td>
                        <td>{item.primary_entry_date !== null ?item.primary_entry_date.slice(0,10):null}</td>
                        <td>{item.stock_modified_date !== null ?item.stock_modified_date.slice(0,10):null}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default StockView;