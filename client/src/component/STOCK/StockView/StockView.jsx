import {useState} from "react";

const StockView= (props) => {

    return (
        <div style={{display:props.StockView}}>
            <table>
                <thead>
                <tr>
                    <th>Item Id</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Net Price</th>
                    <th>Stock Date</th>
                </tr>
                </thead>
                {/*<tbody>*/}
                {/*{props.view.map((item) => (*/}
                {/*    <tr key={item.item_id}>*/}
                {/*        <td>{item.item_id}</td>*/}
                {/*        <td>{item.item_name}</td>*/}
                {/*        <td>{item.itemtype_name}</td>*/}
                {/*        <td>{item.vendor_name}</td>*/}
                {/*        <td>{item.quantity}</td>*/}
                {/*        <td>{item.price}</td>*/}
                {/*        <td>{item.discount}</td>*/}
                {/*        <td>{item.netprice}</td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                {/*</tbody>*/}
            </table>
        </div>
    )
}
export default StockView;