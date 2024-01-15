import {useState} from "react";
import axios from "axios";


const CreateVendor = (props) => {
    const [vendor,setVendor]=useState("")

    const handleCreateVendor = () => {
        axios.post("http://localhost:7000/api/v1/stock/createvendor",{
            vendor:vendor
        })
        alert(`Vendor created with Vendor Name ${vendor}`)

    }
    return(
        <div className="dashbrd-40-colm" style={{display:props.createView}}>
            
            <form onSubmit={handleCreateVendor}>
              <div>
                <label>Create Vendor</label>
                <input
                    type="text"
                    placeholder="Vendor Name"
                    onChange={(e) => setVendor(e.target.value)}
                    required
                />
              </div>
            
            <span><button className="dashboard-btn dashboard-btn-scss " type="submit">Create Vendor</button></span>

            </form>
       <div>
        <button style={{backgroundColor:'lightseagreen'}} className="dashboard-btn dashboard-btn-scss" onClick={props.onViewVendor}>View / Delete Vendor</button>
        </div>
        </div>
    )
}
export default CreateVendor;