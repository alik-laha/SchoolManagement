import {useState,useEffect} from "react";
import axios from "axios";
const ViewAllItem=(props)=>{
    const [allItem,setAllItem]=useState([])
    const [View,setView]=useState("none")
    useEffect(()=>{
        axios.post("http://localhost:7000/api/v1/stock/getallitem")
            .then(res=>{
                setAllItem(res.data.data)
            })
    },[])
    useEffect(() => {
        if(props.itemCreateView==="block" && props.View==="block"){
           setView("block")
        }
        else{
            setView("none")
        }
    }, [props.View,props.itemCreateView]);
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
        <div style={{display:View}}>
            <table className="table-60">
                <thead >
                <tr>
                    <th>ItemType Id</th>
                    <th>ItemType Name</th>
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
                                <button className='btn-warning dashboard-btn' onClick={()=>handleDelete(vendor.type_id)}>Delete</button>
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