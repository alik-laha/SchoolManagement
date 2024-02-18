import {useState,useEffect} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ViewAllVendor=(props)=>{
    const [view,setView]=useState("none")
    const currDate = new Date().toLocaleDateString();

    const handleDelete = (vendorId,vendor_name) => {
        axios
            .post("/api/v1/stock/deletevendor", { vendorId })
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
    return(
        <div style={{display:view}}>
              <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn btn-warning excel-btn margin-vendor-adjust"
                table="vendor-view"
                filename={"Vendor_Details_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
            <table className="table-60">
                <thead >
                <tr>
                    <th>Vendor Id</th>
                    <th>Vendor Name</th>
                    <th>Vendor Address</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody >
                {props.Vendor.map((vendor,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{vendor.vendor_name}</td>
                            <td>{vendor.vendor_address}</td>
                            <td>
                                <button className='btn-warning dashboard-btn clear-gradient' onClick={()=>handleDelete(vendor.vendor_id,vendor.vendor_name)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
            <table style={{display:'none'}} className="table-60" id='vendor-view'>
                <thead >
                <tr>
                    <th>Vendor Id</th>
                    <th>Vendor Name</th>
                    <th>Vendor Address</th>
                   
                </tr>
                </thead>
                <tbody >
                {props.Vendor.map((vendor)=>{
                    return(
                        <tr key={vendor.vendor_id}>
                            <td>{vendor.vendor_id}</td>
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