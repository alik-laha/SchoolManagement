import {useEffect, useState} from "react";
import axios from "axios";

const MarkStudentView=()=>{
    const [searchView,setSearchView]=useState("block")
    const [dataView,setDataView]=useState("none")
    const [Class,setClass]=useState(0)
    const[regNo,setRegNo]=useState("")
    const[examData,setExamData]=useState([])
    const [section,setSection]=useState("")

    useEffect(() => {
        axios.get("")
    }, []);

    return(
        <div style={{height:"150vh"}}>
        <div className="marks-View-Student">
            <div style={{display: searchView}} className="marks-Search-Student">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{fontWeight: "bolder", marginBottom: "10px", marginTop: "10px"}}>Class</label>
                    <select onChange={(e) => setClass(e.target.value)} value={Class}>
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
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{fontWeight: "bolder", marginBottom: "10px", marginTop: "10px"}}>
                        Search By Section
                    </label>
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
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label style={{fontWeight: "bolder", marginBottom: "10px", marginTop: "10px"}}>Registration
                        Number</label>
                    <input type="text" placeholder="Registration Number" value={regNo}
                           onChange={(e) => setRegNo(e.target.value)}/>
                </div>
            </div>
            <div style={{display: dataView}}>
                Datas
            </div>
        </div>
        </div>
    )
}

export default MarkStudentView