import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



const HostelView= (props) => {
    const [view,setView]=useState("none")
    const [hostelexportall,sethostelexportall]=useState([])
    const currDate = new Date().toLocaleDateString();
    const clearTable = () => {
        sethostelexportall([]);
      };

      useEffect(()=>{
        sethostelexportall(props.SearchebyData)
      },[props.SearchebyData])

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

      useEffect(()=> {
        if (props.hostelexportview === "block" && props.view === "block") {
            setView("block")
        }
        else {
            setView("none")
        }
    },[props.hostelexportview,props.view])



    return(
        <>
            <div style={{display:view}}>
            
           
               
                <table className="table-60" id="hostel-entry-view">
                    <thead style={{ display: 'contents' }}>
                        <tr style={{ display: 'table-caption' }}>
                            <button style={{position:'relative',marginTop:'-40px',float:'left'}} 
                            className="dashboard-btn dashboard-btn-scss excel-btn" 
                            onClick={clearTable}>Clear Result</button>
                            <ReactHTMLTableToExcel
                                id="hostel"
                                className="dashboard-btn excel-btn user-profile-export"
                                table="hostel-entry-view"
                                filename={`Hostel_Entry_Report_${currDate}`}
                                sheet="tablexls"
                                buttonText="Excel Export"
                            />
                        </tr>
                        <tr>
                            <th>Sl No.</th>
                            <th>Room No</th>
                            <th>Bed No</th>
                            <th>Student Name</th>
                            <th>Registration No.</th>
                            <th>Academic Year</th>

                            <th>Class</th>
                            <th>Year of Admission</th>
                            <th>Section</th>
                            <th>Roll No.</th>



                            <th>Hostel Entry Date</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        hostelexportall.map((data,idx)=> {
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{data.room_no}</td>
                                    <td>{data.bed_no}</td>
                                    <td>{data.student_Name}</td>
                                    <td>{data.registration_no}</td> 
                                    <td>{data.crnt_yr}</td>
                                    <td>{convertToRoman(data.class)}</td>
                                    
                                    <td>{data.admission_year}</td>
                                    <td>{data.section}</td>
                                    <td>{data.roll_no}</td>
                                    
                                    
                                    
                                    <td>{data.entry_date.slice(0,10)}</td>           
                             </tr>
                            )

                        })
                    }
                    </tbody>
                </table>
                {hostelexportall.length===0 ? <div className="no-data">No Data Exists</div> : null}

            </div>
            
        </>
    )
}
export default HostelView;
