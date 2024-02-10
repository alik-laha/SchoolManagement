import {useEffect, useState} from "react";
import axios from "axios"



const PromoteNextClassView= (props) => {
    const [view,setView]=useState("none")
    const [academicAll,setAcademicAll]=useState([])
    const [Class,setClass]=useState(0)
    const [academicYear,setAcademicYear]=useState(0)
    const [promotehide,setPromotehide]=useState('inline-block')
  
  useEffect(()=>{
    setClass(props.Class)
    setAcademicYear(props.AcademicYear)
  },[props.Class,props.AcademicYear])

    useEffect(()=>{
        setAcademicAll(props.SearchebyData)
        if(props.SearchebyData.length<=0)
        {
            setPromotehide('none')


        }
        else{
            setPromotehide('inline-block')

        }
      },[props.SearchebyData])


      useEffect(()=> {
        console.log(props.PromoteView)
        console.log(props.view )
        if (props.PromoteView === "block" && props.view === "block" && props.SearchebyData.length>0) {
            setView("block")
        }
        else {
            setView("none")
        }
       
    },[props.PromoteView,props.view,props.SearchebyData])


    const handaleSubmit=()=>{
        const data={
            Class,
            academicYear,
        }
        axios.post("http://localhost:7000/api/v1/student/getpromotesearch",data)
            .then((res)=>{
                console.log(res.data.result)
               setAcademicAll(res.data.result)

            })
            .catch((error)=>{
                console.log(error)
            } )

    }


      const handlePass=(data)=>{
          console.log(data)
          if(data.class===12){
              axios.post("http://localhost:7000/api/v1/student/updatepromotion", {
                  Class: data.class,
                  regNo: data.registration_no,
                  academicYear: data.current_academic_year
              })
                  .then((res) => {
                      axios.post("http://localhost:7000/api/v1/hostel/deletehostelentrybyregno", {regNo: data.registration_no})
                            .then((res) => {
                                console.log("done")
                                alert(`Student ${data.student_Name} has been Promoted to Next Class and Academic Year `)
                                handaleSubmit()
                            }).catch((error)=>{
                                console.log(error)
                            })

                  }).catch((error)=>{
                      console.log(error)
                  })
              }
          else{
                axios.post("http://localhost:7000/api/v1/student/updatepromotion", {
                    Class: data.class,
                    regNo: data.registration_no,
                    academicYear: data.current_academic_year
                })
                    .then((res) => {
                        console.log("done")
                        alert(`Student ${data.registration_no} has been Promoted to Next Class and Academic Year `)
                        handaleSubmit()
                    }).catch((error)=>{
                        console.log(error)
                    })

          }
          }
        const handleFail=(data)=>{
            axios.post("http://localhost:7000/api/v1/student/promotefail", {
                regNo: data.registration_no,
                year:data.current_academic_year
            })
                .then((res) => {
                    console.log("done")
                    alert(`Student has been Promoted to Next Class and Academic Year `)
                    handaleSubmit()
                }).catch((error)=>{
                    console.log(error)
                })
        }

    return(
        <>
        
            <div style={{display:view}}>
           
             
                <table className="table-60" id="academic-entry-view">
                    <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Registration No</th>
                        <th>Current Year of Study</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Roll No</th>
                        <th>Year of Admission</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        academicAll.map((data)=> {
                            return(
                                <tr key={data.student_id}>
                                    <td>{data.student_id}</td>
                                    <td>{data.student_Name}</td>
                                    <td>{data.registration_no}</td>
                                    <td>{data.current_academic_year}</td>
                                    <td>{data.class}</td>
                                    <td>{data.section}</td>
                                    <td>{data.roll_no}</td>
                                    <td>{data.admission_year}</td>
                                    <td>
                                        <button onClick={()=>handlePass(data)}  className="dashboard-btn dashboard-btn-scss">Pass</button>
                                        <button onClick={()=>handleFail(data)} className="dashboard-btn btn-warning">Fail</button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                    </tbody>
                   
                </table>

            </div>

            {/*{props.data.length===0 ? <div className="no-data">No Data Found</div> : null}*/}
        </>
    )
}
export default PromoteNextClassView;
