import {useEffect, useState} from "react";
import axios from "axios";

const CreateMarks=(props)=>{
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [target,setTarget]=useState(0)
    const [subject,setSubject]=useState("")
    const [examName,setExamName]=useState("")
    const [marks,setMarks]=useState([])
    const [submitall,setSubmitall]=useState('block')
    const [present, setPresent] = useState([]);

    useEffect(() => {
        console.log(props.view)

        if(props.view40==="block" && props.view){
            setView("block")
        }
        else{
            setView("none")
        }

        if(props.data.length<=0)
        {
            setSubmitall('none')
        }
        else{
            setSubmitall('block')
        }
    }, [props.view40,props.view,props.data]);

    const handlePresentChange = (index) => {
        const newPresent = [...present];
        newPresent[index] = !newPresent[index];
        setPresent(newPresent);
    };

    function convertToRoman(num) {
        const lookup = ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
        let roman = ''
        let i
        
        for ( i in lookup ) {
         if(num==i){
            roman=lookup[i]
            break
         }
           
        }
        return roman;
      }

    useEffect(() => {
       setData(props.data)
         setSubject(props.subject)
            setExamName(props.exam)
            setTarget(props.total)
            setPresent(Array(props.data.length).fill(true));
            setMarks(Array(props.data.length).fill(0))
    }, [props.data,props.subject,props.examName,props.target]);

    const handaleChange=(e,index)=>{
        const newMarks=[...marks]
        if(e.target.value>target ){
            alert("Marks should be less than or equal to Total Alloted Marks of Exam")
            return
        }
        
        else{
            newMarks[index]= parseInt(e.target.value)
            setMarks(newMarks)
        }
    }
    const handleClear = () => {
        if(view=='block'){
            setView('none')
            
        }
    }


    const handleSubmit = async () => {
        console.log(present)
        if (!subject || !examName) {
            alert("Please select Subject and Exam");
            return;
        }

        try {
            await Promise.all(data.map(async (data, index) => {
                if(!present[index])
                    {
                        if(marks[index]!==0)
                            {
                                alert("Absent Candidate Can Not get Marks Other than 0")
                                return
                            }
                    }

                    if(marks[index]===null){
                            alert("Marks has been Put Blank For Student Reg No.: "+data.registration_no)
                            return
                            
                    }
                await axios.post(`/api/v1/faculty/marksentryforStudentexam`, {
                    regNo: data.registration_no,
                    Class: data.class,
                    subject,
                    examName,
                    marks: marks[index],
                    Year: data.current_academic_year,
                    Present: present[index]? 1:0
                }, {
                    headers: { "Authorization": localStorage.getItem("token") }
                });
                console.log("Done");
               
            }));

            alert("Marks of All Students Has Been Entered Successfully");
            setView("none");
            setMarks([]);
            setData([]);
        } catch (error) {
            console.log(error);
        }
    };

    return(

        <div style={{display:view,marginTop:'40px'}}>
            {/* <button style={{float:'right'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={handleClear}>Clear Result</button> */}
            <table className="table-60">
                <thead style={{ display: 'contents' }}>
                <tr style={{ display: 'table-caption' }}>
                <button style={{position:'relative',marginTop:'-40px',float:'left'}} 
                            className="dashboard-btn dashboard-btn-scss excel-btn" 
                            onClick={handleClear}>Clear Result</button>
                    </tr>
                    <tr>
                    <th>Sl. No.</th>
                    <th>Registration No</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Roll No</th>
                    <th>Subject</th>
                    <th>Exam Name</th>
                    <th>Total Marks</th>
                    <th>Present</th>
                    <th>Marks</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {data.map((data,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.registration_no}</td>
                            <td>{data.student_Name}</td>
                            <td>{convertToRoman(data.class)}</td>
                            <td>{data.section}</td>
                            <td>{data.roll_no}</td>
                            <td>{subject}</td>
                            <td>{examName}</td>
                            <td>{target}</td>
                            <td>
                            <input type="checkbox" checked={present[index]} onChange={() => handlePresentChange(index)} />
                            </td>
                            <td>
                                <input type="number" placeholder="Marks" value={marks[index]} onChange={(e)=>handaleChange(e,index)} required={true} readOnly={!present[index]} style={{backgroundColor:!present[index]?'lightyellow':'white'}}/>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <span style={{display:submitall,textAlign:'center'}}> <button  style={{background:'#3c8dbc'}} className="dashboard-btn dashboard-btn-scss" onClick={handleSubmit}>Final Submit</button></span>
            {data.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default CreateMarks;