import {useEffect, useState} from "react";
import axios from "axios";

const HostelEntry = (props) => {
    const [allView, setAllView] = useState("contents");
    const [entryView, setEntryView] = useState("none");
    const [studentName, setStudentName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [roomNo, setRoomNo] = useState("");
    const [bedNo, setBedNo] = useState("");
    const [Class, setClass] = useState(0);
    const [entryStatus, setEntryStatus] = useState(0);
    const [academicYear, setacademic] = useState("");
    const [entrydate, setEntryDate] = useState(new Date().toISOString().slice(0, 10));
    const [view, setView] = useState("none");
    const [viewStock,setViewStock]=useState([])
    const [editIndex,setEditIndex]=useState(null)

    useEffect(() => {
      if (props.view==="block" && props.data.length>0) {
          setView("block")
      }
      else{
          setView("none")
      }
    }, [props.view,props.data]);

    useEffect(()=>{
        setViewStock(props.data)
    },[props.data])


    const clearTable = () => {
        setViewStock([]);
      };

    const HandleSubmit=()=>{
        console.log(regNo)
        axios.post(`/api/v1/hostel/getAllCombinedHostelStudent`,{Class:props.Class,regNo:props.regNo,year:props.year}).then((res)=>{
            setViewStock(res.data.result)
        })

    }
    const handaleUpdate = (e) => {
        e.preventDefault()
        if (entryStatus === 0) {
            axios.post("/api/v1/hostel/createhostelentry", {
                Class,
                academicYear,
                roomNo,
                bedNo,
                studentName,
                regNo,
                entrydate
            })
                .then((res) => {
                    alert(res.data.msg+' for Student Reg. Id : '+ regNo);
                    setEditIndex(null)
                    setAllView("contents");
                    setStudentName("");
                    HandleSubmit()
                    setRegNo("");
                    setRoomNo("");
                    setBedNo("");
                    setClass(0);
                    setacademic("");
                    setEntryDate(new Date().toISOString().slice(0, 10));
                })
                .catch((err) => {
                    alert(err.response.data.msg);
                })
        }
        else {
            axios.post("/api/v1/hostel/updatehostelentry",{regNo,roomNo,bedNo,entrydate})
                .then((res) => {
                    alert(res.data.msg+' for Student Reg. Id : '+ regNo);
                    setAllView("contents");
                    setEditIndex(null)
                    HandleSubmit()
                    setStudentName("");
                    setRegNo("");
                    setRoomNo("");
                    setBedNo("");
                    setClass(0);
                    setacademic("");
                    setEntryDate(new Date().toISOString().slice(0, 10));
                })
                .catch((err) => {
                    console.log(err)
                    alert(err.response.data.msg);
                })
        }
    }

    // const handleDelete = (regNo,roomNo) => {
    //     axios.post('/api/v1/hostel/deletehostelentry', {regNo,roomNo})
    //         .then((res) => {
    //             alert(res.data.msg+' for Student Reg. Id : '+ regNo);
    //             setAllView("contents");
    //             setEntryView("none");
    //             setStudentName("");
    //             setRegNo("");
    //             setRoomNo("");
    //             setBedNo("");
    //             setClass(0);
    //             setacademic("");
    //             setEntryDate(new Date().toISOString().slice(0, 10));
    //             if(view==="block"){
    //                 setView("none");
    //             }
    //         })
    //         .catch((err) => {
    //             alert(err.response.msg);
    //         })
    //
    // }
    const handaleClick = (data,index) => {
        setEditIndex(index)
        setEntryView("contents");
        setStudentName(data.student_Name);
        setRegNo(data.registration_no);
        setClass(data.class);
        setacademic(data.current_academic_year);

        if(data.hostelentry===1){
            // const rgi=data.registration_no
            setEntryStatus(1)
            // axios.post('/api/v1/hostel/gethostelentry',{regNo:rgi}).then(res=>{
            //     setRoomNo(res.data.result[0].room_no)
            //     setBedNo(res.data.result[0].bed_no)
            //     setEntryDate(res.data.result[0].entry_date.slice(0,10))
            // })
                setRoomNo(data.room_no)
                setBedNo(data.bed_no)
                setEntryDate(data.entry_date.slice(0,10))

        }else{
            setEntryStatus(0)
        }


    }
    const handaleCancel = () => {
        setEditIndex(null)
        setAllView("contents");
        setEntryView("none");
        setStudentName("");
        setRegNo("");
        setRoomNo("");
        setBedNo("");
        setClass(0);
        setacademic("");
        setEntryStatus(0);
        setEntryDate(new Date().toISOString().slice(0, 10));
    }

    return(
        
                <div style={{display:view}} >
                    <table className="table-60" >
                        <thead style={{display:allView}}>
                        <button style={{position:'relative',marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                        <tr>
                            <th>Entry Id</th>
                            <th>Hostel Entry</th>
                            <th>Class</th>
                            <th>Student Name</th>
                            <th>Academic Year</th>
                            <th>Section</th>
                            <th>Roll</th>
                            <th>Registration No</th>
                            <th>Room No.</th>
                            <th>Bed No.</th> 
                            <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody style={{display:allView}}>
                        {
                            viewStock.map((data,idx)=> {
                                return(

                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td><input type='checkbox'
                                                   checked={data.hostelentry === 1 ? true : false}></input></td>
                                                   <td>{data.class}</td>
                                                   
                                        <td>{data.student_Name}</td>
                                        <td>{data.current_academic_year}</td>
                                        <td>{data.section}</td>
                                        <td>{data.roll_no}</td>
                                        <td>{data.registration_no}</td>
                                        <td>{idx!==editIndex ? data.room_no :(
                                            <div>
                                                                <select onChange={(e) => setRoomNo(e.target.value)} value={roomNo}>
                                                                    <option>All</option>
                                                                    {props.room.map((data, index) => (
                                                                        <option value={data.room_no} key={index}>
                                                                            {data.room_no}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                        )}</td>
                                        <td>{idx!==editIndex ? data.bed_no : (
                                            <input type='text' placeholder="Bed No" value={bedNo}
                                                           onChange={(e) => setBedNo(e.target.value)}/>
                                        )}</td>
                                        
                                        <td>{idx!==editIndex ?
                                            ( <button className='dashboard-btn btn-warning'
                                                    onClick={() => handaleClick(data,idx)}>Hostel Entry
                                            </button>):(<>
                                                <button className="dashboard-btn btn-warning" onClick={handaleUpdate}>Update</button>
                                                    {/* <button className="dashboard-btn btn-warning" onClick={()=>handleDelete(regNo,roomNo)}>Delete</button> */}
                                                    <button  className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>
                                                </>
                                            )}
                                        </td>
                                        <></>

                                    </tr>

                                )

                            })
                        }


                        </tbody>
                    {/*    <thead style={{display:entryView}} id='hidden-table-60'>*/}
                    {/*    <tr>*/}
                    {/*        <th>Student Name</th>*/}
                    {/*        <th>Class</th>*/}
                    {/*        <th>Registration No</th>*/}
                    {/*        <th>Academic Year</th>*/}
                    {/*        <th>Room No</th>*/}
                    {/*        <th>Bed No</th>*/}
                    {/*        <th>Hostel Entry Date</th>*/}
                    {/*        <th>Actions</th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody style={{display:entryView}}>*/}
                    {/*    <tr>*/}
                    {/*        <td>{studentName}</td>*/}
                    {/*        <td>{Class}</td>*/}
                    {/*        <td>{regNo}</td>*/}
                    {/*        <td>{academicYear}</td>*/}
                    {/*        <td>*/}
                    {/*            <div>*/}
                    {/*                <select onChange={(e) => setRoomNo(e.target.value)} value={roomNo}>*/}
                    {/*                    <option>All</option>*/}
                    {/*                    {props.room.map((data, index) => (*/}
                    {/*                        <option value={data.room_no} key={index}>*/}
                    {/*                            {data.room_no}*/}
                    {/*                        </option>*/}
                    {/*                    ))}*/}
                    {/*                </select>*/}
                    {/*            </div>*/}
                    {/*        </td>*/}
                    {/*        <td><input type='text' placeholder="Bed No" value={bedNo}*/}
                    {/*                   onChange={(e) => setBedNo(e.target.value)}/></td>*/}
                    {/*        */}
                    {/*        <td><input type='date' placeholder="Entry Date" value={entrydate}*/}
                    {/*                   onChange={(e) => setEntryDate(e.target.value)} readOnly/></td>*/}
                    {/*        <td>*/}
                    {/*            <button className="dashboard-btn btn-warning" onClick={handaleUpdate}>Update</button>*/}
                    {/*            /!* <button className="dashboard-btn btn-warning" onClick={()=>handleDelete(regNo,roomNo)}>Delete</button> *!/*/}
                    {/*            <button  className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    </table>
                    {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}
                </div>
            
       
    )
}

export default HostelEntry;