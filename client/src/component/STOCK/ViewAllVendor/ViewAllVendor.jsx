import {useState,useEffect} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ViewAllVendor=(props)=>{
    const [view,setView]=useState("none")
    const currDate = new Date().toLocaleDateString();
    const [data,setData] = useState([])

    const handleDelete = (vendorId,vendor_name) => {
        axios
            .post("/api/v1/stock/deletevendor", { vendorId },{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                console.log(res);
                props.setVendorData(res.data.data);
                alert("Vendor "+vendor_name+ " Deleted Successfully")
            })
            .catch((error) => {
                console.log(error);
            });

    }
    useEffect(()=>{
        if(props.createView==="block" && props.Vendor.length>0){
            setView("block")

        }
        else {
            setView("none")

        }
    },[props.createView,props.Vendor])

    useEffect(() => {
        setData(props.Vendor)
    },[props.Vendor])

    const handleCancel = () => {
        setData([])
        if(view=='block'){
            setView('none')
        }

    }
    return(
        <div style={{display:view}} className="vendor-view">
           

            <table className="table-60">
                <thead style={{display:'contents'}} >
                    <tr style={{display:'table-caption'}}>
                    <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" 
                    onClick={handleCancel}>Clear Result</button>
                     <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn excel-btn user-profile-export "
                table="vendor-view"
                filename={"Vendor_Details_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
                    </tr>
            
                <tr>
                    <th>Vendor Sl. No.</th>
                    <th>Vendor Name</th>
                    <th>Vendor Address</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                {data.map((vendor,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{vendor.vendor_name}</td>
                            <td>{vendor.vendor_address}</td>
                            <td>
                                <button className='dashboard-btn dashboard-btn-scss'  onClick={()=>handleDelete(vendor.vendor_id,vendor.vendor_name)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
            <table style={{display:'none'}} className="table-60" id='vendor-view'>
                <thead >
                <tr>
                    <th>Vendor Sl. No.</th>
                    <th>Vendor Name</th>
                    <th>Vendor Address</th>
                   
                </tr>
                </thead>
                <tbody >
                {props.Vendor.map((vendor,idx)=>{
                    return(
                        <tr key={idx}>
                            <td >{idx+1}</td>
                            <td>{vendor.vendor_name}</td>
                            <td>{vendor.vendor_address}</td>
                           
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    )
}
export default ViewAllVendor;