import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from "axios";


const HostelView= (props) => {
    const [view,setView]=useState("none")
    const [hostelexportall,sethostelexportall]=useState([])
    const clearTable = () => {
        sethostelexportall([]);
      };

      useEffect(()=>{
        axios.post("http://localhost:7000/api/v1/hostel/gethostelentry",props.SearchebyData)
          .then((res)=>{
            sethostelexportall(res.data.result)
          })
            .catch((error)=>{
                console.log(error)
            } )
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
                    filename="hostel-excel-report"
                    sheet="tablexls"
                    buttonText="Excel Import"
                />
                <table className="table-60" id="hostel-entry-view">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Academic Year </th>
                        <th>Class</th>
                        <th>Registration No</th>
                        <th>Student Name</th>
                        <th>Room No</th>
                        <th>Bed No</th>
                        <th>Entry Date</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        hostelexportall.map((data)=> {
                            return(
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.academic_year}</td>
                                    <td>{data.class}</td>
                                    <td>{data.registration_no}</td>                        
                                    <td>{data.student_Name}</td>
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
