import {useState} from "react";
import axios from "axios";

const ViewFeePaymentSearch = (props) => {
    const [Class,setClass]=useState("")
    const [year,setYear]=useState(null)
    const [feeType,setFeeType]=useState("")
    const [regNo,setRegNo]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(feeType==="NewAdmission"){
            axios.post ("/api/v1/fee/getnewadmissionfeeentryforupdate",{Class,year,regNo},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
               console.log(res.data.result)
              props.setFeePaymentUpdateData(res.data.result)
            }).catch((err)=>{
                console.log(err)
            })
        }
        else if(feeType==="ReAdmisson"){
            axios.post('/api/v1/fee/getreadmissionfeeentryforupdate',{Class,year,regNo},{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res)=>{
                    console.log(res.data.result)
                    props.setFeePaymentUpdateData(res.data.result)
                }).catch((err)=>{
                    console.log(err)
            })
        }
    }


    return (
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handlesubmit}>
                <div>
                    <label>
                        Search By Class.
                    </label>
                    <select onChange={(e) => setClass(parseInt(e.target.value))} value={Class} required>
                        <option value="">Class</option>
                        <option value="1">
                            I
                        </option>
                        <option value="2">
                            II
                        </option>
                        <option value="3">
                            III
                        </option>
                        <option value="4">
                            IV
                        </option>
                        <option value="5">
                            V
                        </option>
                        <option value="6">
                            VI
                        </option>
                        v
                        <option value="7">
                            VII
                        </option>

                        <option value="8">
                            VIII
                        </option>
                        <option value="9">
                            IX
                        </option>
                        <option value="10">
                            X
                        </option>
                        <option value="11">
                            XI
                        </option>
                        <option value="12">
                            XII
                        </option>

                    </select>
                </div>

                <div>
                    <label>Academic Year</label>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required={true}/>
                </div>

                <div>
                    <label>Fee Type</label>
                    <select value={feeType} onChange={(e) => setFeeType(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="Monthly">Monthly</option>
                        <option value="NewAdmission">New-Admisson</option>
                        <option value="ReAdmisson">Re-Admisson</option>
                    </select>
                </div>

                <div>
                    <label>Registration No</label>
                    <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)}/>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default ViewFeePaymentSearch;