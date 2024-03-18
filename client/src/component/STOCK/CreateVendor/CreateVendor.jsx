import {useEffect, useState} from "react";
import axios from "axios";


const CreateVendor = (props) => {
    const [vendor,setVendor]=useState("")
    const [vendoraddress,setVendoraddress]=useState("")
    

    useEffect(() => {
        handleViewVendoronCreate()
    }, [])

    const handleCreateVendor = (e) => {
        e.preventDefault()
        axios.post("/api/v1/stock/createvendor",{
            vendor:vendor,
            vendoraddress:vendoraddress

        },{headers:{"Authorization":localStorage.getItem("token")}})
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
        axios.get("/api/v1/stock/getallvendor",{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                props.setVendorData(res.data.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    

    }


    // const handleViewVendor = () => {
    //     axios.post("/api/v1/stock/getallvendor")
    //         .then((res)=>{
    //             props.setVendorData(res.data.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         })
    //     props.onclick("block");
    //
    // }
    return(
        <div className="dashbrd-40-colm" style={{display:props.createView}}>
            
            <form onSubmit={handleCreateVendor} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
            <p style={{fontSize:'17px'}}>Create New Vendor </p>
            <dl class="dl-horizontal">
                    <dt><label>Vendor Name</label></dt>
                    <dd> <input
                    type="text"
                    placeholder="Vendor Name"
                    onChange={(e) => setVendor(e.target.value)}
                    value={vendor}
                    required
                /> </dd>
                 <dt> <label>Vendor Address</label></dt>
            <dd>  <textarea style={{height: '80px', rows: "3"}}
                    placeholder="Address"
                    onChange={(e) => setVendoraddress(e.target.value)}
                    value={vendoraddress}
                    required
                /></dd>

            </dl>
              
              
            
            <span style={{marginTop:'10px'}}><button className="dashboard-btn dashboard-btn-scss" type="submit">Create Vendor</button></span>

            </form>

           
                <button style={{backgroundColor: 'lightsalmon',marginTop:'20px'}} className="dashboard-btn dashboard-btn-scss " onClick={handleViewVendoronCreate}>
                View / Delete Vendor
                </button>
           
       <div>
        {/* <button style={{backgroundColor:'orange',marginTop:'20px'}} className="dashboard-btn dashboard-btn-scss" onClick={handleViewVendoronCreate}>View / Delete Vendor</button> */}
        </div>
        </div>
    )
}
export default CreateVendor;