import {useState,useEffect} from "react";
import axios from "axios";
const ViewAllItem=()=>{
    const [allItem,setAllItem]=useState([])
    useEffect(()=>{
        axios.post("http://localhost:7000/api/v1/stock/getallitem")
            .then(res=>{
                setAllItem(res.data.data)
            })

    })

    const handleDelete = (itemId) => {
        axios
            .post("http://localhost:7000/api/v1/stock/deleteitem", { itemId })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload();
    }
    return(
        <div>
            <table className="table-60">
                <thead >
                <tr>
                    <th>Vendor Id</th>
                    <th>Vendor Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                {allItem.map((vendor)=>{
                    return(
                        <tr key={vendor.type_id}>
                            <td>{vendor.type_id}</td>
                            <td>{vendor.item_Type}</td>
                            <td>
                                <button onClick={()=>handleDelete(vendor.type_id)}>Delete</button>
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