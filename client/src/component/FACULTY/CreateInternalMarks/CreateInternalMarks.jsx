import {useEffect, useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [view,setView]=useState("none")
const [data,setData]=useState([])
const [allView,setAllView]=useState("contents")
const [hideView,setHideView]=useState("none")
const [allSubject,setAllSubject]=useState([])
const [allExam,setAllExam]=useState([])
const [searchData,setSearchData]=useState([])
const [searchView,setSearchView]=useState("none")
const [totalMarks,setTotalMarks]=useState(0)
const [target2,settarget2]=useState(0)



const [Class,setClass]=useState(0)
const [regNo,setRegNo]=useState("")
const [subject,setSubject]=useState("")
const [examName,setExamName]=useState("")
const [marks,setMarks]=useState(0)
const [name,setName]=useState("")
const [rollNo,setRollNo]=useState(0)

const [updatedMarks,setUpdatedMarks]=useState(0)
const [updatedSubject,setUpdatedSubject]=useState("")
const [updatedExamName,setUpdatedExamName]=useState("")
const [updatedsearchExamName,setUpdatedsearchExamName]=useState("")
const [index,setIndex]=useState(null)

const [beforeUpdate,setBeforeUpdate]=useState("block")
const [afterUpdate,setAfterUpdate]=useState("none")
const [entermarks,setentermarks]=useState("none")
    useEffect(() => {
        if(props.data.length>0 && props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

const FetchExam=()=>{
   axios.post(`http://localhost:7000/api/v1/faculty/getallinternalexam`).then((res)=>{
       setAllExam(res.data.data)
   }).catch((err)=>{
       console.log(err)
   })
}

    const FetchSubject=()=>{
        axios.post(`http://localhost:7000/api/v1/faculty/getallsubject`).then((res)=>{
          setAllSubject(res.data.data)

        })
    }

    useEffect(() => {
        if(props.view40==="block"){
            FetchExam()
            FetchSubject()
        }
    }, [props.view40]);

    useEffect(()=>{
        setData(props.data)

    },[props.data])

    const handleClick=(data)=>{
        setClass(data.class)
        setRegNo(data.registration_no)
        setAllView("none")
        setHideView("contents")
        setName(data.student_Name)
        setRollNo(data.roll_no)
        setentermarks('none')
        

    }
    const marksentry=()=>{
        setentermarks('contents')
        setBeforeUpdate('block')
        setAfterUpdate('none')
        setIndex(null)
        if(searchView==='contents')
        {
            setSearchView('none')
        }

    }
    const handleCancel=()=>{
        setSearchView("none")
        setAllView("contents")
        setHideView("none")
        setExamName("")
        setSubject("")
        setSearchData([])
        setClass(0)
        setRegNo("")
        setSubject("")
        setExamName("")
        setMarks(0)
        setName("")
        setRollNo(0)
        setTotalMarks(0)
        setentermarks('none')
        setBeforeUpdate('block')
        setAfterUpdate('none')
        setIndex(null)
        setSearchData([])
      
    }
const HandleSearch=(e)=>{
    e.preventDefault();
    setSearchView('contents')
    if(entermarks==='contents')
    {
        setentermarks('none')
    }
    if(updatedsearchExamName==='Exam Name' || updatedsearchExamName==='')
    {
        alert("Please Choose Exam Name")
        setSearchView("none")
        return
    }
        
        
      const data={Class,regNo,examName:updatedsearchExamName}
    axios.post('http://localhost:7000/api/v1/faculty/searchmarks',data).then((res)=>{
        console.log(res.data.data)
        setSearchData(res.data.data)
    }).catch((err)=>{
        console.log(err)
    })
}
    const HandleSave=()=>{
        if(marks>totalMarks){
            alert("Marks should be less than total marks")
            setMarks(0)
            return
        }
        else {
            axios.post("http://localhost:7000/api/v1/faculty/createmarks",{Class,regNo,subject,examName,marks}).then((res)=>{
                alert(res.data.message)
                setMarks(0)
                setSubject("")
                setentermarks('none')
                setExamName('')
            })
                .catch((err)=>{
                    if(err.response.data.err.errno===1062){
                        alert("Marks already entered for Same Exam and Subject")
                    }
                })
        }
    }

const handleUpdate=(data,idx)=>{
        setIndex(idx)
        allExam.find((data1,index)=>{
          if(data1.internal_exam_name===data.exam_name){
              settarget2(data1.int_exam_marks)
          }
        })
        setUpdatedExamName(data.exam_name)
        setUpdatedMarks(data.marks)
        setUpdatedSubject(data.subject)
    setBeforeUpdate("none")
    setAfterUpdate("block")
}

const HandleMarksCancel=()=>{
   setentermarks('none')
   setBeforeUpdate('block')
   setAfterUpdate('none')
   setIndex(null)
}

const handleUpdateSave=(id)=>{
        console.log(totalMarks)
      if(updatedMarks>target2){
            alert("Marks should be less than total marks")
            setUpdatedMarks(0)
          console.log(id)
            return
        }
        else {
            axios.post("http://localhost:7000/api/v1/faculty/updatemarks",{subject:updatedSubject,examName:updatedExamName,marks:updatedMarks,id:id}).then((res)=>{
                alert(res.data.message)
                setSearchView("none")
                setUpdatedMarks(0)
                setUpdatedSubject("")
                setUpdatedExamName("")
                setBeforeUpdate("block")
                setAfterUpdate("none")
                setIndex(null)
            })
                .catch((err)=>{
                    console.log(err)
                })
        }
}
const handleUpdateCancel=()=>{
    setUpdatedExamName("")
    setUpdatedMarks(0)
    setUpdatedSubject("")
    settarget2(0)
    setBeforeUpdate("block")
    setAfterUpdate("none")
    setIndex(null)
}
const setExamnameFunction=(e)=>{
        let idx= e.target.value;
        allExam.find((data,index)=>{
            if(data.internal_exam_name===idx){
                setTotalMarks(data.int_exam_marks)
            }
        })
    setExamName(e.target.value)
}
    const setExamnameFunction2=(e)=>{
        const idx= e.target.value;
        allExam.find((data,index)=>{
            if(data.internal_exam_name===idx){
                settarget2(data.int_exam_marks)
                console.log(data.int_exam_marks)
            }
        })
        setUpdatedExamName(e.target.value)

    }
    return(
        <div style={{display: view}}>
            <table className="table-60">
                <thead style={{display: allView}}>
                <tr>
                    <th>Id</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Registration No</th>
                    <th>Admisson Year</th>

                    <th>Actions</th>
                </tr>
                </thead>

                <tbody style={{display: allView}}>
                {
                    data.map((data, idx) => {
                        return (

                            <tr key={idx}>
                                <td>{data.student_id}</td>
                                <td>{data.student_Name}</td>
                                <td>{data.class}</td>
                                <td>{data.registration_no}</td>
                                <td>{data.admission_year}</td>

                                <td>
                                    <button className='dashboard-btn btn-warning'
                                            onClick={() => handleClick(data)}>Marks Entry
                                    </button>
                                </td>

                            </tr>

                        )

                    })
                }


                </tbody>

            </table>
            {/* <hr style={{marginTop:'-60px',marginBottom:'20px',borderTop:'1px solid grey'}}/> */}
            <div style={{backgroundColor:'whitesmoke',display:hideView}}>
            <span className="marks-window"><button className="dashboard-btn dashboard-btn-scss" style={{background:'darkcyan'}} onClick={handleCancel}>Close Marks Window</button></span>
                <div className="dashbrd-40-colm" >
                <form style={{display:'block',textAlign:'center'}} onSubmit={HandleSearch} >
                        <div >
                        <label>Search Internal Exam Marks</label>
                        <select onChange={(e) => setUpdatedsearchExamName(e.target.value)} value={updatedsearchExamName}>
                                <option>Exam Name</option>
                                {allExam.map((data, index) => (
                                    <option value={data.internal_exam_name} key={index}>
                                        {data.internal_exam_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="dashboard-btn dashboard-btn-scss">Search</button>
                        
                </form>
                <span><button className="dashboard-btn dashboard-btn-scss btn-warning" onClick={marksentry}>New Marks Entry</button></span>
                </div>
                <div style={{display:searchView}}>
                    <table className="table-60" style={{marginTop:'20px'}}>
                        <thead>
                            <tr>
                            <th>Exam Name</th>
                            <th>Subject</th>
                            <th>Marks</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            searchData.map((data, idx) => {
                                return (

                                    <tr key={idx}>
                                        <td>
                                            {index === idx ? <div>
                                                    <select onChange={setExamnameFunction2} value={updatedExamName}>
                                                        <option>Exam Name</option>
                                                        {allExam.map((data, index) => (
                                                                <option value={data.internal_exam_name} key={index}>
                                                                    {data.internal_exam_name}
                                                                </option>
                                                        ))}
                                                    </select>
                                                </div>: data.exam_name}
                                        </td>
                                        <td>
                                            {index === idx ? <div>
                                                    <select onChange={(e) => setUpdatedSubject(e.target.value)} value={updatedSubject}>
                                                        <option>Subject</option>
                                                        {allSubject.map((data, index) => (
                                                            <option value={data.subject} key={index}>
                                                                {data.subject}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>:
                                                data.subject}
                                        </td>
                                        <td>{index===idx ? <input type="number" value={updatedMarks} onChange={(e) => setUpdatedMarks(e.target.value)}/>:
                                            data.marks
                                        }
                                </td>
                                <td >
                                    <span style={{display:'inline-block',textAlign:'center'}}><button className='dashboard-btn btn-warning' style={{display:beforeUpdate}}
                                            onClick={() => handleUpdate(data, idx)}>Marks Update
                                    </button>
                                    <span style={{display:'flex'}}><button className='dashboard-btn btn-warning' style={{display:afterUpdate}}
                                            onClick={() => handleUpdateSave(data.id)}>Save
                                    </button>
                                    <button className='dashboard-btn btn-warning' style={{display:afterUpdate}}
                                            onClick={() => handleUpdateCancel()}>Cancel
                                    </button></span></span>
                                </td>
                            </tr>

                        )

                    })
                }
                </tbody>
            </table>
                    {searchData.length===0 ? <h3 style={{textAlign:'center',color:'red'}}>No Data Found</h3>:null}
            </div>
                <table style={{width:'-webkit-fill-available'}}>
                {/* <thead style={{display:hideView}}>
                    <tr><th>Search by</th>
                    <th> Action</th></tr>          
                </thead>
                <tbody style={{display:hideView}}>
                    <tr> <td><div>
                            <select onChange={(e) => setUpdatedsearchExamName(e.target.value)} value={updatedsearchExamName}>
                                <option>Exam Name</option>{allExam.map((data, index) => (
                                    <option value={data.internal_exam_name} key={index}>{data.internal_exam_name}</option>))}</select></div> </td> <td>
                    <button className="dashboard-btn dashboard-btn-scss" onClick={HandleSearch}>Search</button></td></tr> </tbody> */}
                <thead style={{display:entermarks}}>
                
                <tr>
                    <th>Name</th>
                    <th>Registration No</th>
                    <th>Class</th>
                    <th>Roll Number</th>
                    <th>Exam Name</th>
                    <th>Total Marks</th>
                    <th>Subject</th>
                    <th>Marks Obtained</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody style={{display:entermarks}}>
                <tr>
                    <td>{name}</td>
                    <td>{regNo}</td>
                    <td>{Class}</td>
                    <td>{rollNo}</td>
                    <td>
                        <div>
                            <select onChange={setExamnameFunction} value={examName}>
                                <option>Exam Name</option>
                                {allExam.map((data, index) => (
                                    <option value={data.internal_exam_name} key={index}>
                                        {data.internal_exam_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </td>
                    <td>{totalMarks}</td>
                    <td>
                        <div>
                            <select onChange={(e) => setSubject(e.target.value)} value={subject}>
                                <option>Subject</option>
                                {allSubject.map((data, index) => (
                                    <option value={data.subject} key={index}>
                                        {data.subject}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </td>
                    <td><input type="text" value={marks} onChange={(e) => setMarks(e.target.value)}/></td>
                    <td>
                        <button className="dashboard-btn dashboard-btn-scss" onClick={HandleSave}>Save</button>
                        <button className="dashboard-btn dashboard-btn-scss" onClick={HandleMarksCancel}>Cancel</button>
                        
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

        </div>
    )
}
export default CreateInternalMarks