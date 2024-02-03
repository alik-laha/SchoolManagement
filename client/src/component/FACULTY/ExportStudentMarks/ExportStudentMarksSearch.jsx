import {useState} from "react";


const ExportStudentMarksSearch = (props) => {
    const [Class, setClass] = useState(0);
    const [examName, setExamName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [examData,setExamData]=([])

    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form>
                <div>
                    <label>Rgestration No</label>
                    <input type="text" placeholder="Enter Rgestration Number" value={regNo}
                           onChange={(e) => setRegNo(e.target.value)}/>
                </div>
                <div>
                    <label>Class</label>
                    <input type="number" placeholder="Enter Class" value={Class}
                           onChange={(e) => setClass(e.target.value)}/>
                </div>

                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default ExportStudentMarksSearch;