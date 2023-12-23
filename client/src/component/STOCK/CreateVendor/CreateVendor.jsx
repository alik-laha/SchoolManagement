import {useState} from "react";
import axios from "axios";


const CreateVendor = (props) => {
    const [vendor,setVendor]=useState("")

    const handleCreateVendor = () => {
        axios.post("http://localhost:7000/api/v1/stock/createvendor",{
            vendor:vendor
        }).then((response)=>{
            alert(`Vendor created with Vendor Name ${vendor}`)
            setVendor("")
        })

    }
    return(
        <div className="dashbrd-40-colm" style={{display:props.createView}}>
            
        <div >
          <label>Create Vendor</label>
            <input
          type="text"
          placeholder="Vendor Name"
          onChange={(e) => setVendor(e.target.value)}
          required
             />
         </div >
         <div >   
            <button className="dashboard-btn dashboard-btn-scss" onClick={handleCreateVendor}>Create Vendor</button>
            
            </div >
        </div>
    )
}
export default CreateVendor;