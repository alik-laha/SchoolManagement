import {useState} from "react";
import axios from "axios";

const ViewFeeStructureSearch = (props) => {
    const [Class,setClass]=useState(0)
    const [Year,setYear]=useState(null)

    const handleSearch=(e)=>{
        e.preventDefault()
       axios.post("/api/v1/fee/getfeestructure",{Class,year:Year},{headers:{"Authorization":localStorage.getItem("token")}})
           .then((res)=>{
               props.viewFeeStructure(res.data.result,"block")
           })
              .catch((error)=>{
                console.log(error)
              })
    }
   

    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSearch}>
            <div>
                    <label>Search By Academic Year</label>
                    <input type="number" value={Year} onChange={(e) => setYear(e.target.value)} placeholder='Current Academic Year'/>
                </div>
                <div>
                    <label>Search By Class</label>
                    <select onChange={(e) => setClass(parseInt(e.target.value))} value={Class}>
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
                
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default ViewFeeStructureSearch;