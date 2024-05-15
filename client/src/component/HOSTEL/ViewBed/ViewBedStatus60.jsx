import {useEffect, useState} from "react";
import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ViewBedStatus60 = (props) => {
    const [view, setView] = useState("none");
    const [mainView, setMainView] = useState("contents");
    const [editView, setEditView] = useState("none");
    const [editData, setEditData] = useState({});
    const [bulding, setBuilding] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [totalbed, setTotal_bed] = useState("");
    const [bedstock, setbedstock] = useState([]);
    const currDate = new Date().toLocaleDateString();

    useEffect(()=>{
        setbedstock(props.BedData)
  
    },[props.BedData])

    useEffect(() => {
       if(props.viewbed==="block" && props.BedData.length>0){
              setView("block")
       }
       else{
           setView("none")
       }

    }, [props.viewbed,props.BedData]);

    const clearTable = () => {
        if(editView==='none')
        setbedstock([]);
      };

    const handaleEdit = (data) => {
        setMainView("none");
        setEditView("contents");
        setEditData(data)
        setBuilding(data.building)
        setFloor(data.floor)
        setRoom(data.room_no)
        setTotal_bed(data.total_bed)
    }
    const handaleDelete = (data) => {
        console.log(data)
        const id=data.id
        const room_nmbr=data.room_no
        if(data.occupied_bed!==0){
           alert("Room is Occupied, can't be Deleted") 
            return
        }
        axios
            .post("/api/v1/hostel/deletebed",{id},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                alert("Room No : "+room_nmbr+" Deleted Successfully")
                // props.setCreatebed("block");
                console.log(res.data.result)
                props.allRoomData(res.data.result)
                if(view==="block"){
                    setView("none");
                }

            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handaleCancel = () => {
        setMainView("contents");
        setEditView("none");
        setEditData({})
        setTotal_bed("")
        setFloor("")
        setRoom("")
        setBuilding("")
    }
    const handaleUpdate = (e) => {
        e.preventDefault();
        const id=editData.id
        if(!floor || !bulding || !totalbed || !totalbed){
            alert("Please fill all the fields")
            return
        }

        axios
            .post("/api/v1/hostel/updatebed",{id,room,floor,bulding,totalbed},{headers:{"Authorization":localStorage.getItem("token")}} )
            .then((res) => {
                alert("Room No : "+room+" Updated Successfully")
                props.allRoomData(res.data.result)
                setMainView("contents");
                setEditView("none");
                if(view==="block"){
                    setView("none");
                }

            })
            .catch((error) => {
                console.log(error);
                if(error.response.data.errno===1062){
                    alert(`Room No. already exists`)
                    
                }
                // alert(error.response.data.msg)
            });
    }
    return(
        <>
            <div style={{display:view}}>
           
                <table className="table-60">
                    <thead style={{display: mainView}}>
                    <tr style={{display:'table-caption'}}>
               <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn  excel-btn user-profile-export"
                table="bed-status-hostel"
                filename={"Hostel_Bed_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
                    <button style={{marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                    </tr>
                        <tr>
                            <th>Sl No.</th>
                            <th>Bulding</th>
                            <th>Floor</th>
                            <th>Room Number</th>
                            <th>Total Bed</th>
                            <th>Occupied Bed</th>
                            <th>Available Bed</th>
                            
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{display:mainView}}>
                        {bedstock.map((item,idx) => (
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{item.building}</td>
                                <td>{item.floor}</td>
                                <td>{item.room_no}</td>
                                <td>{item.total_bed}</td>
                                <td>{item.occupied_bed}</td>
                                <td style={{color:'red'}}>{item.available_bed}</td>
                                
                                <td>
                                    <button className='dashboard-btn btn-warning fix-width' onClick={()=>handaleEdit(item)}>Edit</button>
                                    <button className='dashboard-btn btn-warning fix-width' onClick={()=>handaleDelete(item)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>


                {/* <thead style={{display: editView}} id='hidden-table-60'>
                <tr>
                            <th>Sl. No.</th>
                            <th>Bulding</th>
                            <th>Floor</th>
                            <th>Room Number</th>
                            <th>Total Bed</th>
                            <th>Actions</th>
                </tr>
                </thead>
                    <tbody style={{display:editView}}>
                    <tr>
                        <td>
                            {editData.id}
                        </td>
                        <td>
                            <input type="text" placeholder="Building" value={bulding} onChange={(e)=>setBuilding(e.target.value)} />
                        </td>
                        <td>
                            <input type="text" placeholder="Floor" value={floor} onChange={(e)=>setFloor(e.target.value)} />
                        </td>
                        <td>
                            <input type="text" placeholder="Room Number" value={room} onChange={(e)=>setRoom(e.target.value)} />
                        </td>
                        <td>
                            <input type="text" placeholder="Total Bed" value={totalbed} onChange={(e)=>setTotal_bed(e.target.value)} />
                        </td>
                        <td>
                            
                            <button className="dashboard-btn btn-warning" onClick={()=>handaleUpdate(editData.id)}>Update</button>
                            <button className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>
                        </td>
                    </tr>
                    </tbody> */}
                </table>
                {bedstock.length===0 ? <div className="no-data">No Data Exists</div> : null}
                <div style={{ display: editView }} className="dashbrd-40-colm special-25-div">
                    <button style={{ marginBottom: '8px' }} onClick={handaleCancel} className="dashboard-btn dashboard-btn-scss">Back</button>
                    <hr></hr>
                    <form style={{ display: 'grid', color: '#3c8dbc', backgroundColor: 'azure', boxShadow: '0 0 5px grey' }}>
                        <p style={{ fontSize: '17px' }} className="customize-centre">Edit Room Details</p>
                        <dl class="dl-horizontal">
                        <dt><label>Building</label></dt>
                        <dd> <input type="text" placeholder="Building" value={bulding} onChange={(e)=>setBuilding(e.target.value)} /></dd>
                        <dt><label>Floor</label></dt>
                        <dd><input type="text" placeholder="Floor" value={floor} onChange={(e)=>setFloor(e.target.value)} /></dd>
                        <dt><label>Room No.</label></dt>
                        <dd>
                        <input type="text" placeholder="Room Number" value={room} onChange={(e)=>setRoom(e.target.value)} />
                            
                        </dd>
                        <dt><label>Total Bed </label></dt>
                        <dd><input type="text" placeholder="Total Bed" value={totalbed} onChange={(e)=>setTotal_bed(e.target.value)} /></dd>
                        </dl>
                        <span><button type="submit" value="Update" className="dashboard-btn btn-warning"
                                onClick={handaleUpdate}>Update
                        </button></span>
                        


                    </form>
                </div>
                
                <table className="table-60" style={{display:'none'}} id="bed-status-hostel">
                    <thead style={{display:'block'}}>
                        <tr>
                            <th>Room Id</th>
                            <th>Bulding</th>
                            <th>Floor</th>
                            <th>Room Number</th>
                            <th>Total Bed</th>
                            <th>Occupied Bed</th>
                            <th>Available Bed</th>
                        </tr>
                    </thead>
                    <tbody style={{display:'block'}}>
                        {bedstock.map((item,idx) => (
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{item.building}</td>
                                <td>{item.floor}</td>
                                <td>{item.room_no}</td>
                                <td>{item.total_bed}</td>
                                <td>{item.occupied_bed}</td>
                                <td >{item.available_bed}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </>
    )
}
export default ViewBedStatus60