import { useState} from "react";
import axios from "axios";

const ExportStudentMarksSearch = (props) => {
    const [Class, setClass] = useState(null);
    const [year,setYear]=useState(null)
    const [section,setSection]=useState("")



    
    // const setExamnameFunction2=(e)=>{
    //     const idx= e.target.value;
    //     allExam.find((data,index)=>{
    //         if(data.internal_exam_name===idx){
    //             settarget2(data.int_exam_marks)
    //             console.log(data.int_exam_marks)
    //         }
    //     })
    //     setUpdatedExamName(e.target.value)

    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/v1/faculty/getstudentbyclass`, {Class, year,section},{headers:{"Authorization":localStorage.getItem("token")}}).then((res) => {
            props.setStudentMarks(res.data.data)
            props.setStudentMarksView("block")
            console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Class</label>
                    <input type="number" placeholder="Class" value={Class}
                           onChange={(e) => setClass(e.target.value)} required={true}/>
                </div>
               <div>
                   <label>
                       Academic Year
                   </label>
                   <input type="number" placeholder="Academic Year" value={year} onChange={(e)=>setYear(e.target.value)} required={true}/>
               </div>
                <div>
                    <select onChange={(e) => setSection(e.target.value)} required
                            value={section}>
                        <option value="">Section</option>
                        <option value="A">
                            A
                        </option>
                        <option value="B">
                            B
                        </option>
                        <option value="C">
                            C
                        </option>
                        <option value="D">
                            D
                        </option>
                        <option value="E">
                            E
                        </option>
                        <option value="F">
                            F
                        </option>
                        v
                        <option value="Art-A">
                            Art-A
                        </option>

                        <option value="Art-B">
                            Art-B
                        </option>
                        <option value="Art-C">
                            Art-C
                        </option>
                        <option value="Com-A">
                            Com-A
                        </option>
                        <option value="Com-B">
                            Com-B
                        </option>
                        <option value="Com-C">
                            Com-C
                        </option>
                        <option value="Sci-A">
                            Sci-A
                        </option>
                        <option value="Sci-B">
                            Sci-B
                        </option>
                        <option value="Sci-C">
                            Sci-C
                        </option>

                    </select>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
            </form>
        </div>
    )
}
export default ExportStudentMarksSearch;