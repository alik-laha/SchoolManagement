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
        if (props.PromoteView === "block" && props.view === "block" ) {
            setView("block")
        }
        else {
            setView("none")
        }
       
    },[props.PromoteView,props.view,props.SearchebyData])


    const handaleSubmit=(section)=>{
        const data={
            Class,
            academicYear,
            section
        }
        axios.post("/api/v1/student/getpromotesearch",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                console.log(res.data.result)
               setAcademicAll(res.data.result)

            })
            .catch((error)=>{
                console.log(error)
            } )

    }
    const clearTable = () => {
        setAcademicAll([]);
       
        
}


      const handlePass=(data)=>{
          console.log(data)
          if(data.class===12){
              axios.post("/api/v1/student/updatepromotion", {
                  Class: data.class,
                  regNo: data.registration_no,
                  academicYear: data.current_academic_year
              },{headers:{"Authorization":localStorage.getItem("token")}})
                  .then((res) => {
                      axios.post("/api/v1/hostel/deletehostelentrybyregno", {regNo: data.registration_no},{headers:{"Authorization":localStorage.getItem("token")}})
                            .then((res) => {
                                console.log("done")
                                alert(`Student ${data.student_Name} Has Qualified Highest Class and Hence Released from Institute `)
                                handaleSubmit(data.section)
                            }).catch((error)=>{
                                console.log(error)
                            })

                  }).catch((error)=>{
                      console.log(error)
                  })
              }
          else{
                axios.post("/api/v1/student/updatepromotion", {
                    Class: data.class,
                    regNo: data.registration_no,
                    academicYear: data.current_academic_year
                },{headers:{"Authorization":localStorage.getItem("token")}})
                    .then((res) => {
                        console.log("done")
                        alert(`Student Bearing Reg. No. : ${data.registration_no} has been Promoted to Next Class ${convertToRoman(data.class+1)} and Academic Year : ${data.current_academic_year+1}`)
                        handaleSubmit(data.section)
                    }).catch((error)=>{
                        console.log(error)
                    })

          }
          }
        const handleFail=(data)=>{
            axios.post("/api/v1/student/promotefail", {
                regNo: data.registration_no,
                year:data.current_academic_year
            },{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    console.log("done")
                    alert(`Student has been Retained in ${convertToRoman(data.class)} for the Academic Year ${data.current_academic_year+1}`)
                    handaleSubmit(data.section)
                }).catch((error)=>{
                    console.log(error)
                })
        }

    return(
        <>
        
            <div style={{display:view}}>
           
             
                <table className="table-60" id="academic-entry-view">
                    <thead>
                    <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Student Name</th>
                        <th>Registration No</th>
                        <th>Current Year of Study</th>
                        <th>Class</th>
                        <th>Section</th>
                        <th>Roll No</th>
                        
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        academicAll.map((data,index)=> {
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.student_Name}</td>
                                    <td>{data.registration_no}</td>
                                    <td>{data.current_academic_year}</td>
                                    <td>{convertToRoman(data.class)}</td>
                                    <td>{data.section}</td>
                                    <td>{data.roll_no}</td>
                                    
                                    <td>
                                        <button onClick={()=>handlePass(data)}  className="dashboard-btn dashboard-btn-scss fix-width">Pass</button>
                                        <button onClick={()=>handleFail(data)} className="dashboard-btn btn-warning fix-width">Retain</button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                    </tbody>
                   
                </table>
                {academicAll.length===0 ? <div className="no-data">No Data Found</div> : null}
            </div>

            {/*{props.data.length===0 ? <div className="no-data">No Data Found</div> : null}*/}
        </>
    )
}
export default PromoteNextClassView;
