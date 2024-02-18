import {useState,useEffect} from "react";
import axios from "axios";
const ViewAllItem=(props)=>{
    const [allItem,setAllItem]=useState([])
    const [View,setView]=useState("none")

    useEffect(()=>{
    if(props.Item.length>0 && props.itemCreateView==="block") {
        setView("block")
    }
    else{
        setView("none")
    }
    },[props.Item,props.itemCreateView])
    const handleDelete = (itemId,item_Type) => {
        axios
            .post("/api/v1/stock/deleteitem", { itemId ,item_Type})
            .then((res) => {
                console.log(res);
                props.setItemData(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
        alert("Item type "+item_Type+ " Deleted Successfully")
    }
    return(
        <div style={{display:View}}>
            <table className="table-60">
                <thead >
                <tr>
                    <th>Item Type ID</th>
                    <th>Item Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                {props.Item.map((vendor,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{vendor.item_Type}</td>
                            <td>
                                <button className='btn-warning dashboard-btn clear-gradient' onClick={()=>handleDelete(vendor.type_id,vendor.item_Type)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    )
}
export default ViewAllItem;