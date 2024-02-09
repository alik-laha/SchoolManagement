import {useEffect, useState} from "react";
import axios from "axios";

const CreateInternalMarks=(props)=>{
const [view,setView]=useState("none")
const [data,setData]=useState([])
    useEffect(() => {
        if(props.data.length>0 && props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

    useEffect(()=>{
        setData(props.data)

    },[props.data])
//
//     const handleClick=(data)=>{
//         setClass(data.class)
//         setRegNo(data.registration_no)
//         setAllView("none")
//         setHideView("contents")
//         setName(data.student_Name)
//         setRollNo(data.roll_no)
//         setentermarks('none')
//
//
//     }
//     const marksentry=()=>{
//         setentermarks('contents')
//         setBeforeUpdate('block')
//         setAfterUpdate('none')
//         setIndex(null)
//         if(searchView==='contents')
//         {
//             setSearchView('none')
//         }
//
//     }
//     const handleCancel=()=>{
//         setSearchView("none")
//         setAllView("contents")
//         setHideView("none")
//         setExamName("")
//         setSubject("")
//         setSearchData([])
//         setClass(0)
//         setRegNo("")
//         setSubject("")
//         setExamName("")
//         setMarks(0)
//         setName("")
//         setRollNo(0)
//         setTotalMarks(0)
//         setentermarks('none')
//         setBeforeUpdate('block')
//         setAfterUpdate('none')
//         setIndex(null)
//         setSearchData([])
//         setUpdatedsearchExamName("")
//
//     }
// const HandleSearch=(e)=>{
//     e.preventDefault();
//     setSearchView('contents')
//     if(entermarks==='contents')
//     {
//         setentermarks('none')
//     }
//     if(updatedsearchExamName==='Exam Name' || updatedsearchExamName==='')
//     {
//         alert("Please Choose Exam Name")
//         setSearchView("none")
//         return
//     }
//
//
//       const data={Class,regNo,examName:updatedsearchExamName}
//     axios.post('http://localhost:7000/api/v1/faculty/searchmarks',data).then((res)=>{
//         console.log(res.data.data)
//         setSearchData(res.data.data)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }
//     const HandleSave=()=>{
//         if(marks>totalMarks){
//             alert("Obtained Marks should be less than Total Marks")
//             setMarks(0)
//             return
//         }
//         else {
//             axios.post("http://localhost:7000/api/v1/faculty/createmarks",{Class,regNo,subject,examName,marks}).then((res)=>{
//                 alert(res.data.message)
//                 setMarks(0)
//                 setSubject("")
//                 setentermarks('none')
//                 setExamName('')
//             })
//                 .catch((err)=>{
//                     if(err.response.data.err.errno===1062){
//                         alert("Marks has Already Entered for the Exam and Subject Combination")
//                     }
//                 })
//         }
//     }
//     console.log(props.Subject,props.Exam,props.Marks)
//
// const handleUpdate=(data,idx)=>{
//         setIndex(idx)
//         allExam.find((data1,index)=>{
//           if(data1.internal_exam_name===data.exam_name){
//               settarget2(data1.int_exam_marks)
//           }
//         })
//         setUpdatedExamName(data.exam_name)
//         setUpdatedMarks(data.marks)
//         setUpdatedSubject(data.subject)
//     setBeforeUpdate("none")
//     setAfterUpdate("block")
// }
//
// const HandleMarksCancel=()=>{
//    setentermarks('none')
//    setBeforeUpdate('block')
//    setAfterUpdate('none')
//    setIndex(null)
// }
//
// const handleUpdateSave=(id)=>{
//         console.log(totalMarks)
//       if(updatedMarks>target2){
//             alert("Obtained Marks Should be less than Total Marks")
//             setUpdatedMarks(0)
//           console.log(id)
//             return
//         }
//         else {
//             axios.post("http://localhost:7000/api/v1/faculty/updatemarks",{subject:updatedSubject,examName:updatedExamName,marks:updatedMarks,id:id}).then((res)=>{
//                 alert(res.data.message)
//                 setSearchView("none")
//                 setUpdatedMarks(0)
//                 setUpdatedSubject("")
//                 setUpdatedExamName("")
//                 setBeforeUpdate("block")
//                 setAfterUpdate("none")
//                 setIndex(null)
//             })
//                 .catch((err)=>{
//                     console.log(err)
//                 })
//         }
// }
// const handleUpdateCancel=()=>{
//     setUpdatedExamName("")
//     setUpdatedMarks(0)
//     setUpdatedSubject("")
//     settarget2(0)
//     setBeforeUpdate("block")
//     setAfterUpdate("none")
//     setIndex(null)
// }
// const setExamnameFunction=(e)=>{
//         let idx= e.target.value;
//         allExam.find((data,index)=>{
//             if(data.internal_exam_name===idx){
//                 setTotalMarks(data.int_exam_marks)
//             }
//         })
//     setExamName(e.target.value)
// }
//     const setExamnameFunction2=(e)=>{
//         const idx= e.target.value;
//         allExam.find((data,index)=>{
//             if(data.internal_exam_name===idx){
//                 settarget2(data.int_exam_marks)
//                 console.log(data.int_exam_marks)
//             }
//         })
//         setUpdatedExamName(e.target.value)
//
//     }
    return(
        <div style={{display:view}}>
            <table>
                <thead>
                <tr>
                    <th>Registration No</th>
                    <th>Student Name</th>
                    <th>Roll No</th>
                    <th>Exam Name</th>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((data,index)=>(
                    <tr key={index}>
                        <td>{data.registration_no}</td>
                        <td>{data.student_Name}</td>
                        <td>{data.roll_no}</td>
                        <td>{props.Exam}</td>
                        <td>{props.Subject}</td>
                        <td>{data.marks}</td>
                        <td><button onClick={()=>props.handleClick(data)}>Edit</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default CreateInternalMarks