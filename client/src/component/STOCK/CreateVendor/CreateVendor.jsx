import {useState} from "react";
import axios from "axios";


const CreateVendor = (props) => {
    const [vendor,setVendor]=useState("")

    const handleCreateVendor = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/api/v1/stock/createvendor",{
            vendor:vendor
        })
            .then((res) => {
                alert(`New Vendor created with this Name ${vendor}`)
                setVendor("");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleViewVendor = () => {
        axios.post("http://localhost:7000/api/v1/stock/getallvendor")
            .then((res)=>{
                props.setVendorData(res.data.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        props.onclick("block");

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
        <button style={{backgroundColor:'lightseagreen'}} className="dashboard-btn dashboard-btn-scss" onClick={handleViewVendor}>View / Delete Vendor</button>
        </div>
        </div>
    )
}
export default CreateVendor;