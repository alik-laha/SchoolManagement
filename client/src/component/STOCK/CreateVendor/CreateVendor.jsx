import {useEffect, useState} from "react";
import axios from "axios";


const CreateVendor = (props) => {
    const [vendor,setVendor]=useState("")
    const [vendoraddress,setVendoraddress]=useState("")
    

    useEffect(() => {
        handleViewVendor() 
    }, [])

    const handleCreateVendor = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/api/v1/stock/createvendor",{
            vendor:vendor,
            vendoraddress:vendoraddress

        })
            .then((res) => {
                alert(`Vendor created with Name : ${vendor}`)
                setVendor("")
                setVendoraddress("")
                {handleViewVendoronCreate()}
            })
            .catch((err) => {
                if(err.response.data.message.errno === 1062){
                    alert("Vendor " + vendor+" Already Exists");
                 }
                 setVendor("")
                 setVendoraddress("")
                
            });
    }
    const handleViewVendoronCreate = () => {
        axios.post("http://localhost:7000/api/v1/stock/getallvendor")
            .then((res)=>{
                props.setVendorData(res.data.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    

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
              <div >
                <label>Vendor Name </label>
                <input
                    type="text"
                    placeholder="Vendor Name"
                    onChange={(e) => setVendor(e.target.value)}
                    value={vendor}
                    required
                />
              </div>
              <div style={{width:'39%'}}>
                <label>Vendor Address</label>
                <input
                    type="textarea"
                    placeholder="Address"
                    onChange={(e) => setVendoraddress(e.target.value)}
                    value={vendoraddress}
                    required
                />
              </div>
            
            <span style={{marginTop:'10px'}}><button className="dashboard-btn dashboard-btn-scss " type="submit">Create Vendor</button></span>

            </form>
       <div>
        <button style={{backgroundColor:'orange'}} className="dashboard-btn dashboard-btn-scss" onClick={handleViewVendor}>View / Delete Vendor</button>
        </div>
        </div>
    )
}
export default CreateVendor;