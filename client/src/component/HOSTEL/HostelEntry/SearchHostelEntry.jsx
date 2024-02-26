import {useState} from "react";
import axios from "axios";
import { MdWidthFull } from "react-icons/md";

const SearchHostelEntry= (props) => {
    const [Class,setClass]=useState("")
    const [regNo,setRegNo]=useState("")
    const [year,setyear]=useState("")
    const [section,setSection]=useState("")

const HandaleSubmit=(e)=>{
    e.preventDefault();
    console.log(regNo)
    axios.post(`/api/v1/hostel/getAllCombinedHostelStudent`,{Class,regNo,year,section},{headers:{"Authorization":localStorage.getItem("token")}}).then((res)=>{
        props.setStudentData(res.data.result , Class,regNo,year,section)
    })

}

    return(
        <>
            <div className="dashbrd-40-colm" style={{display:props.view}}>
                <form onSubmit={HandaleSubmit}>
                    <div>
                        <label>
                            Search By Class.
                        </label>
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
                        <label>
                            Search By Current Academic Year
                        </label>
                        <input placeholder="Current Acedemic Year" type="text" value={year} onChange={(e) => setyear(e.target.value)}/>
                    </div>
                    <div>
                        <label>
                            Search By Section
                        </label>
                        <input placeholder="Section" type="text" value={section} onChange={(e) => setSection(e.target.value)}/>
                    </div>
                    <div>
                        <label>
                            Search By Registration No.
                        </label>
                        <input placeholder="Reg. No." type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)}/>
                    </div>
                    

                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}
export default SearchHostelEntry;