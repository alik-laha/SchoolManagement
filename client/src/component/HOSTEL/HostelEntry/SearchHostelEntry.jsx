import {useState} from "react";
import axios from "axios";

const SearchHostelEntry= (props) => {
    const [Class,setClass]=useState("")
    const [regNo,setRegNo]=useState("")
    const [entryDate,setEntryDate]=useState("")
const HandaleSubmit=(e)=>{
    e.preventDefault();
    console.log(regNo)
    axios.post(`http://localhost:7000/api/v1/student/getallstudent`,{Class,regNo,entryDate}).then((res)=>{
        console.log(res.data.result)
        props.setStudentData(res.data.result)
    })

}

    return(
        <>
            <div style={{display:props.view}}>
                <form onSubmit={HandaleSubmit}>
                    <div>
                        <label>
                            Search By Class.
                        </label>
                        <input type="text" value={Class} onChange={(e) => setClass(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            Search By Registration No.
                        </label>
                        <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)}/>
                    </div>

                    <div>
                        <label>
                            Search By Entry Date.
                        </label>
                        <input type="date" value={entryDate} onChange={(e) => setEntryDate(e.target.value)}/>
                    </div>

                    <input type="submit" value="Search"/>
                </form>
            </div>
        </>
    )
}
export default SearchHostelEntry;