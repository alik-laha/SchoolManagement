import {useEffect, useState} from "react";
import axios from "axios";

const CreateMarks=(props)=>{
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [target,setTarget]=useState(0)
    const [subject,setSubject]=useState("")
    const [examName,setExamName]=useState("")
    const [marks,setMarks]=useState([])

    useEffect(() => {
        console.log(props)
        if(props.view40==="block" && props.data.length>0){
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view40,props.data]);

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
    }, [props.data,props.subject,props.examName,props.target]);

    const handaleChange=(e,index)=>{
        const newMarks=[...marks]
        if(e.target.value>target){
            alert("Marks should be less than or equal to total marks")
            return
        }
        else{
            newMarks[index]= parseInt(e.target.value)
            setMarks(newMarks)
        }
    }


    const handleSubmit = async () => {
        let a = 0;
        if (!subject || !examName) {
            alert("Please select subject and exam");
            return;
        }

        try {
            await Promise.all(data.map(async (data, index) => {
                await axios.post(`/api/v1/faculty/marksentryforStudentexam`, {
                    regNo: data.registration_no,
                    Class: data.class,
                    subject,
                    examName,
                    marks: marks[index],
                    Year: data.current_academic_year
                }, {
                    headers: { "Authorization": localStorage.getItem("token") }
                });
                console.log("Done");
                a = 1;
            }));

            alert("Marks Entered Successfully");
            setView("none");
            setMarks([]);
            setData([]);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div style={{display:view,marginTop:'40px'}}>
            <table className="table-60">
                <thead>
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
                                <input type="number" placeholder="Marks" value={marks[index]} onChange={(e)=>handaleChange(e,index)} required={true}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="dashboard-btn dashboard-btn-scss" onClick={handleSubmit}>Entry Marks</button>
        </div>
    )
}
export default CreateMarks;