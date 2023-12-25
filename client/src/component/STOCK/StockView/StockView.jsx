import {useEffect, useState} from "react";
import axios from "axios";
const StockView= (props) => {

    const [viewStock,setViewStock]=useState([])

    useEffect(()=>{
      axios.post("http://localhost:7000/api/v1/stock/getstock")
        .then((res)=>{
            setViewStock(res.data.data)
        })
          .catch((error)=>{
              console.log(error)
          } )
    },[])

    return (
        <div style={{display:props.StockView}}>
            <table>
                <thead>
                <tr>
                    <th>Item Id</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th>
                    <th>Bill Id</th>
                    <th>Bill Date</th>
                    <th>Unit Per Cost</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {viewStock.map((item) => (
                    <tr key={item.stock_id}>
                        <td>{item.stock_id}</td>
                        <td>{item.item_Name}</td>
                        <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td>
                        <td>{item.bill_id}</td>
                        <td>{item.bill_date}</td>
                        <td>{item.unit_cost}</td>
                        <td>{item.quantity}</td>
                        <td>{item.projected_cost}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default StockView;