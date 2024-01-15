import {useEffect, useState} from "react";
import axios from "axios";

const ViewBedStatus60 = (props) => {
    const [view, setView] = useState("none");
    const [mainView, setMainView] = useState("contents");
    const [editView, setEditView] = useState("none");
    const [editData, setEditData] = useState({});
    const [bulding, setBuilding] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [totalbed, setTotal_bed] = useState("");


    useEffect(() => {
       if(props.viewbed==="block" && props.BedData.length>0){
              setView("block")
       }
       else{
           setView("none")
       }

    }, [props.viewbed,props.BedData]);
    const handaleEdit = (data) => {
        setMainView("none");
        setEditView("contents");
        setEditData(data)
        setBuilding(data.building)
        setFloor(data.floor)
        setRoom(data.room_no)
        setTotal_bed(data.total_bed)
    }
    const handaleDelete = (id) => {
        axios
            .post("http://localhost:7000/api/v1/hostel/deletebed",{id} )
            .then((res) => {
                alert("Bed Deleted Successfully")
                setView("none");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handaleCancel = () => {
        console.log("cancel")
        setMainView("contents");
        setEditView("none");
        setEditData({})
        setTotal_bed("")
        setFloor("")
        setRoom("")
        setBuilding("")
    }
    const handaleUpdate = (id) => {
        axios
            .post("http://localhost:7000/api/v1/hostel/updatebed",{id,room,floor,bulding,totalbed} )
            .then((res) => {
                alert("Bed Updated Successfully")
                setView("none")
                setMainView("content");
                setEditView("none");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return(
        <>
            <div style={{display:view}}>
                <table className="table-60">
                    <thead style={{display: mainView}}>
                        <tr>
                            <th>Room Id</th>
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
                        {props.BedData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.building}</td>
                                <td>{item.floor}</td>
                                <td>{item.room_no}</td>
                                <td>{item.total_bed}</td>
                                <td>{item.occupied_bed}</td>
                                <td style={{color:'red'}}>{item.available_bed}</td>
                                
                                <td>
                                    <button className='dashboard-btn btn-warning' onClick={()=>handaleEdit(item)}>Edit</button>
                                    <button className='dashboard-btn btn-warning' onClick={()=>handaleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>


                <thead style={{display: editView}} id='hidden-table-60'>
                <tr>
                            <th>Room Id</th>
                            <th>Bulding</th>
                            <th>Floor</th>
                            <th>Room Number</th>
                            <th>Total Bed</th>
                            {/* <th>Available Bed</th>
                            <th>Occupied Bed</th> */}
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
                        {/* <td>
                            {editData.available_bed}
                        </td>
                        <td>
                            {editData.occupied_bed}
                        </td> */}
                        <td>
                            <button className="dashboard-btn btn-warning" onClick={handaleCancel}>Cancel</button>
                            <button className="dashboard-btn btn-warning" onClick={()=>handaleUpdate(editData.id)}>update</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ViewBedStatus60