import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";


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
            <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                <ReactHTMLTableToExcel
                    id="hostel"
                    className="dashboard-btn btn-warning excel-btn"
                    table="hostel-entry-view"
                    filename={`Hostel_Entry_Report_${currDate}`}
                    sheet="tablexls"
                    buttonText="Excel Import"
                />
                <table className="table-60" id="hostel-entry-view">
                    <thead>
                    <tr>
                        <th>Entry Id</th>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Academic Year</th>
                        <th>Section</th>
                        <th>Roll No.</th>
                        <th>Registration No</th>           
                        <th>Year of Admission</th>
                        <th>Room No</th>
                        <th>Bed No</th>
                        <th>Hostel Entry Date</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        hostelexportall.map((data)=> {
                            return(
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.student_Name}</td>
                                    <td>{data.class}</td>
                                    <td>{data.crnt_yr}</td>
                                    <td>{data.section}</td>
                                    <td>{data.roll_no}</td>
                                    
                                    
                                    
                                    <td>{data.registration_no}</td> 
                                    <td>{data.admission_year}</td>                       
                                    
                                    <td>{data.room_no}</td>
                                    <td>{data.bed_no}</td>
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
