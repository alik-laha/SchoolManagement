import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



const AcademicEntryView= (props) => {
    const [view,setView]=useState("none")
    const [academicAll,setAcademicAll]=useState([])
    const currDate = new Date().toLocaleDateString();
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

    const clearTable = () => {
        setAcademicAll([]);
      };
    

    useEffect(()=>{
        setAcademicAll(props.SearchebyData)
      },[props.SearchebyData])


      useEffect(()=> {
        console.log(props.academicallview,props.view)
        if (props.academicallview === "block" && props.view === "block") {
            setView("block")
        }
        else {
            setView("none")
        }
    },[props.academicallview,props.view])


    return(
        <>
        
            <div style={{display:view,marginTop:'40px'}}>
           
               <div>
                <table className="table-60" id="academic-entry-view">
                    <thead style={{display:'contents'}}>
                        <tr style={{display:'table-caption'}}>
                        <button style={{position:'relative',marginTop:'-40px',float:'left'}} 
                className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                          

                            <ReactHTMLTableToExcel
                                id="acacdemic"
                                className="dashboard-btn excel-btn user-profile-export"
                                table="academic-entry-view"
                                filename={"Academic_Student_Report_" + currDate}
                                sheet="tablexls"
                                buttonText="Excel Export"
                            />
                        </tr>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Student Name</th>
                        
                        <th>Registration No</th>
                        <th>Stream</th>
                        
                        <th>Current Year of Study</th>
                        
                        
                        <th>Class</th>
                        <th>Section</th>
                        <th>Roll No</th>
                        <th>Year of Admission</th>
                        <th>Hostel Entry</th>
                        
                    </tr>
                    </thead>
                    <tbody style={{display:'contents'}}>
                    {
                        academicAll.map((data,index)=> {
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.student_Name}</td>
                                    
                                    <td>{data.registration_no}</td>
                                    <td>{data.stream}</td>
                                    
                                    <td>{data.current_academic_year}</td>
                                    
                                   
                                    <td>{convertToRoman(data.class)}</td>
                                    <td>{data.section}</td>
                                    <td>{data.roll_no}</td>
                                    <td>{data.admission_year}</td>
                                    <td><input type='checkbox' checked={data.hostelentry === 1 ? true : false}></input></td>
                                    {/* <td>{data.hostelentry === 1 ? 'Yes' : 'No'}</td> */}
                                </tr>
                            )

                        })
                    }
                    </tbody>
                </table>
                {academicAll.length===0 ? <div className="no-data">No Data Exists</div> : null}
            
                </div>
            
            </div>
            
            {/*{props.data.length===0 ? <div className="no-data">No Data Found</div> : null}*/}
        </>
    )
}
export default AcademicEntryView;
