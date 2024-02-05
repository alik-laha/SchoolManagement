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

    const HandleEdit=(academicAll)=> {
        
        let count=0;
        let data_length=academicAll.length
        if (Class < 12){
          
            
            academicAll.map((data) => {
                axios.post("http://localhost:7000/api/v1/student/updatepromotion", {
                    Class: data.class,
                    regNo: data.registration_no,
                    academicYear: data.current_academic_year
                })
                    .then((res) => {
                        console.log("done")
                        count=count+1
                        if(count===data_length){
                            alert(`All the Students of Class ${Class} and Academic Year ${academicYear} has been Promoted to Next Class and Academic Year `)
                            setView('none')
                            
                        }
                      
                       
                    })
            })
          


    }
    else
    {
        
        academicAll.map((data) => {
            axios.post("http://localhost:7000/api/v1/student/updatepromotion", {regNo: data.registration_no})
                .then((res) => {
                    axios.post("http://localhost:7000/api/v1/hostel/deletehostelentrybyregno", {regNo: data.registration_no})
                    .then((res) => {
                        console.log("done")
                        count=count+1
                        if(count===data_length){
                            alert(`All the Students of Class ${Class} and Academic Year ${academicYear} has been Promoted to Next Class and Academic Year `)
                            setView('none')
                            
                        }
                    
                       
                    })
                })
                
        })
        


    }
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
                                </tr>
                            )

                        })
                    }
                    </tbody>
                </table>
                {academicAll.length===0 ? <div className="no-data">No Data Exists</div> : null}
                <div style={{display:'block',textAlign:'center'}}>
                <button  style={{display:promotehide}} className="dashboard-btn btn-warning" onClick={() => {
                                        const confirmBox = window.confirm(
                                            "Do you really want to Promote these Students to next Class ?"
                                        );
                                        if (confirmBox === true) {
                                            HandleEdit(academicAll);
                                        }
                                    }}>Promote To Next Class</button></div>
                
                
            </div>
            
            {/*{props.data.length===0 ? <div className="no-data">No Data Found</div> : null}*/}
        </>
    )
}
export default PromoteNextClassView;
