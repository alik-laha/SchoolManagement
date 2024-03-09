import {useState} from "react";
import axios from "axios";

const AcademicEntrySearch= (props) => {
    const [Class,setClass]=useState("")
    const [regNo,setregNo]=useState("")
    const [year,setyear]=useState("")
    // const [stream, setStream] = useState('');
    const [section,setSection]=useState('');
    

    const handaleSubmit=(e)=> {
        e.preventDefault();
        const data={
            Class,
            regNo,
            year,section
        }
        axios.post("/api/v1/student/getallstudent",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                props.setAcademicEntryData(res.data.result)
            })
            .catch((error)=>{
                console.log(error)
            } )
        props.buttonClick("block");

    }

    return(
        <>
            <div className="dashbrd-40-colm" style={{display:props.view}}>
                <form onSubmit={handaleSubmit}>
                <div>
                        <label>
                            Search By Current Academic Year
                        </label>
                        <input placeholder='Current Academic Year' type="text" value={year} required onChange={(e) => setyear(e.target.value)}/>
                    </div>
                    <div>
                        <label>
                            Search By Class
                        </label>
                        {/* <input type="text" placeholder='Class' value={Class} onChange={(e) => setClass(e.target.value)}/> */}
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
                            Search By Section.
                        </label>
                        <select onChange={(e) => setSection(e.target.value)}
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
                    <div>
                        <label>
                            Search By Registration No.
                        </label>
                        <input type="text" placeholder='Registration No.' value={regNo} onChange={(e) => setregNo(e.target.value)}/>
                    </div>
                    <div style={{ width: '100%' }}>

                    <p style={{ fontSize: '15px' }}>(Academic Year is Mandatory)</p>
                </div>

                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                </form>
            </div>
        </>
    )
}

export default AcademicEntrySearch;