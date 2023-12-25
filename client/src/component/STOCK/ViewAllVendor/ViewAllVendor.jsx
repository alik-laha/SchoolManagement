import {useState,useEffect} from "react";
import axios from "axios";
const ViewAllVendor=(props)=>{
    const [allVendor,setAllVendor]=useState([])
    const [view,setView]=useState("none")
    useEffect(()=>{
      axios.post("http://localhost:7000/api/v1/stock/getallvendor")
        .then(res=>{
           setAllVendor(res.data.data)
        })

    },[])

    const handleDelete = (vendorId) => {
        axios
            .post("http://localhost:7000/api/v1/stock/deletevendor", { vendorId })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload();
    }
    useEffect(()=>{
        if(props.createView==="block" && props.View==="block"){
            setView("block")

        }
        else {
            setView("none")

        }
    },[props.createView,props.View])
    return(
        <div style={{display:view}}>
            <table className="table-60">
                <thead >
                <tr>
                    <th>Vendor Id</th>
                    <th>Vendor Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                {allVendor.map((vendor)=>{
                    return(
                        <tr key={vendor.vendor_id}>
                            <td>{vendor.vendor_id}</td>
                            <td>{vendor.vendor_name}</td>
                            <td>
                                <button onClick={()=>handleDelete(vendor.vendor_id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    )
}
export default ViewAllVendor;