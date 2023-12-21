import {useState} from "react";
import axios from "axios";


const CreateVendor = () => {
    const [vendor,setVendor]=useState("")

    const handleCreateVendor = () => {
        axios.post("http://localhost:7000/api/v1/stock/createvendor",{
            vendor:vendor
        }).then((response)=>{
            alert(`Vendor created with Vendor Name ${vendor}`)
            window.location.reload()
        })

    }

    return(
        <div>
            <input type="text" placeholder="Vendor Name" onChange={(e)=>setVendor(e.target.value)}/>
            <button onClick={handleCreateVendor}>Create Vendor</button>
        </div>
    )
}
export default CreateVendor;