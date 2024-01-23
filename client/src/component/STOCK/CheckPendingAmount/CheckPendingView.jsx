import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";


const pendingView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")
    
    const clearTable = () => {
        setViewStock([]);
      };


    useEffect(()=>{

      axios.post("http://localhost:7000/api/v1/stock/getstock",props.SearchebyData)
        .then((res)=>{
            setViewStock(res.data.data)
        })
          .catch((error)=>{
              console.log(error)
          } )
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
                    <th>Unit Per Cost</th>
                    <th>Quantity</th>
                    <th>Estimated Price</th>
                    <th>Discounted Amount</th>
                    <th>Actual Paid Amount</th>
                    <th>Balance Amount</th>
                    <th>Cash Entry Date</th>
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
                        <td>{item.discounted_cost}</td>
                        <td>{item.paid_amount}</td>
                        <td>{item.pending_amount}</td>
                        <td>{item.stock_entry_date !==  null ? item.stock_entry_date.slice(0,10): null}</td>
                        <td>{item.stock_modified_date !== null ?item.stock_modified_date.slice(0,10):null}</td>
                        
                    </tr>
                ))}
                </tbody>
            </table>
            {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default pendingView;