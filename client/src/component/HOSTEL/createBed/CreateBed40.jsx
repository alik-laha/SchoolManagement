import {useState} from "react";
import axios from "axios";

const CreateBed40 = (props) => {
    const [bulding, setBulding] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [totalbed, setTotalBed] = useState("");


    const handaleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/api/v1/hostel/createbed", {bulding,floor,room,totalbed})
            .then((res) => {
            alert("Bed Created Successfully");
            setBulding("");
            setFloor("");
            setRoom("");
            setTotalBed("");
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <div style={{display:props.createbed}}>
                <form onSubmit={handaleSubmit}>
                    <div>
                        <label>Bulding</label>
                        <input type="text" placeholder="Bulding" value={bulding} onChange={(e)=>setBulding(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Floor</label>
                        <input type="text" placeholder="Room Number" value={floor} onChange={(e)=>setFloor(e.target.value)} required/>
                    </div>

                    <div>
                        <label>Room Number</label>
                        <input type="text" placeholder="Room Number" value={room} onChange={(e)=>setRoom(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Total Bed</label>
                        <input type="text" placeholder="Total Bed" value={totalbed} onChange={(e)=>setTotalBed(e.target.value)} required/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}

export default CreateBed40