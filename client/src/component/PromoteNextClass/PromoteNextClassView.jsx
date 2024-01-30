import {useEffect, useState} from "react";




const PromoteNextClassView= (props) => {
    const [view,setView]=useState("none")
    const [academicAll,setAcademicAll]=useState([])


  
    

    useEffect(()=>{
        setAcademicAll(props.SearchebyData)
      },[props.SearchebyData])


      useEffect(()=> {
        console.log(props.PromoteView,props.view)
        if (props.PromoteView === "block" && props.view === "block") {
            setView("block")
        }
        else {
            setView("none")
        }
    },[props.PromoteView,props.view])

    const HandleEdit=()=>{
       


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
                <div style={{display:'block',textAlign:'center'}}>
                <button  className="dashboard-btn btn-warning" onClick={() => {
                                        const confirmBox = window.confirm(
                                            "Do you really want to Promote these Students to next Class ?"
                                        );
                                        if (confirmBox === true) {
                                            HandleEdit();
                                        }
                                    }}>Promote To Next Class</button></div>
                
                {academicAll.length===0 ? <div className="no-data">No Data Exists</div> : null}
            </div>
            
            {/*{props.data.length===0 ? <div className="no-data">No Data Found</div> : null}*/}
        </>
    )
}
export default PromoteNextClassView;
