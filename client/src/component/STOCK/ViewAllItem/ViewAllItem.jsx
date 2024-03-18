import {useState,useEffect} from "react";
import axios from "axios";
const ViewAllItem=(props)=>{
   
    const [View,setView]=useState("none")
    const [data,setData] = useState([])

    useEffect(()=>{
    if(props.Item.length>0 && props.itemCreateView==="block") {
        setView("block")
    }
    else{
        setView("none")
    }
    
    },[props.Item,props.itemCreateView])

    useEffect(() => {
        setData(props.Item)
    },[props.Item])

    const handleCancel = () => {
        setData([])
        if(View=='block'){
            setView('none')
        }

    }

    
    const handleDelete = (itemId,item_Type) => {
        axios
            .post("/api/v1/stock/deleteitem", { itemId ,item_Type},{headers:{"Authorization":localStorage.getItem("token")}})
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
             <button style={{float:'right'}}className="dashboard-btn btn-warning excel-btn" onClick={handleCancel}>Clear Result</button>
            <table className="table-60">
                <thead >
                <tr>
                    <th>Item Type Sl. No.</th>
                    <th>Item Type</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                {data.map((vendor,idx)=>{
                    return(
                        <tr key={idx}>
                            <td style={{width:'20%'}}>{idx+1}</td>
                            <td style={{width:'50%'}}>{vendor.item_Type}</td>
                            <td>
                                <button className='dashboard-btn dashboard-btn-scss' onClick={()=>handleDelete(vendor.type_id,vendor.item_Type)}>Delete</button>
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