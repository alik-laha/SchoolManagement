import {useEffect, useState} from "react";
import axios from "axios";
const SeondaryStockView= (props) => {

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
            <table className="table-60">
                <thead>
                <tr>
                    <th>Item Id</th>
                    <th>Bill Id</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th> 
                    
                    <th>Unit Per Cost</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actual Cost</th> 
                    <th>Bill Date</th>
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
                        <td>{item.unit_cost}</td>
                        <td>{item.quantity}</td>
                        <td>{item.projected_cost}</td>
                        <td>{item.bill_date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default SeondaryStockView;