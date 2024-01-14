import {useEffect, useState} from "react";
import axios from "axios";

const ViewBedStatus60 = (props) => {
    const [view, setView] = useState("none");
    const [mainView, setMainView] = useState("block");
    const [editView, setEditView] = useState("none");
    const [editData, setEditData] = useState({});
    const [building, setBuilding] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [total_bed, setTotal_bed] = useState("");


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
        setEditView("block");
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
                setView("none");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return(
        <>
            <div style={{display:view}}>
                <table className="table-60">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Bulding</th>
                            <th>Floor</th>
                            <th>Room Number</th>
                            <th>Total Bed</th>
                            <th>Available Bed</th>
                            <th>Occupied Bed</th>
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
                                <td>{item.available_bed}</td>
                                <td>{item.occupied_bed}</td>
                                <td>
                                    <button onClick={()=>handaleEdit(item)}>Edit</button>
                                    <button onClick={()=>handaleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tbody style={{display:editView}}>
                    <tr>
                        <td>
                            <input type="text" placeholder="Id" value={editData.id} readOnly />
                        </td>
                        <td>
                            <input type="text" placeholder="Building" value={building} onChange={(e)=>setBuilding(e.target.value)} />
                        </td>
                        <td>
                            <input type="text" placeholder="Floor" value={floor} onChange={(e)=>setFloor(e.target.value)} />
                        </td>
                        <td>
                            <input type="text" placeholder="Room Number" value={room} onChange={(e)=>setRoom(e.target.value)} />
                        </td>
                        <td>
                            <input type="text" placeholder="Total Bed" value={total_bed} onChange={(e)=>setTotal_bed(e.target.value)} />
                        </td>
                        <td>
                            <input type="text" placeholder="Available Bed" value={editData.available_bed} readOnly />
                        </td>
                        <td>
                            <input type="text" placeholder="Occupied Bed" value={editData.occupied_bed} readOnly />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ViewBedStatus60