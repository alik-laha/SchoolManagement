import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";
const StockView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")
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
                        
                    </tr>
                ))}
                </tbody>
            </table>
            {viewStock.length===0 ? <div className="no-data">No Data Found</div> : null}
        </div>
    )
}
export default StockView;