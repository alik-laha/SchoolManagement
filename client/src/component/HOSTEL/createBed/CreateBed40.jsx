import {useEffect, useState} from "react";
import axios from "axios";

const CreateBed40 = (props) => {
    const [bulding, setBulding] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [totalbed, setTotalBed] = useState("");


    const handaleSubmit = (e) => {
        let count=-2000;
        e.preventDefault()
        axios.post("http://localhost:7000/api/v1/hostel/createbed", {bulding,floor,room,totalbed})
            .then((res) => {
            alert("Room No."+ room +" Created Successfully with Total Bed :"+totalbed);
                { handaleViewBed()}
            setBulding("");
            setFloor("");
            setRoom("");
            setTotalBed("");
            console.log(res.data);
            props.setCreatebed(count);

        }).catch((err) => {
            if(err.response.data.msg.errno===1062){
                alert(`Room No. ${room} already exists`)
            }
            
            setRoom("");
            
        });
    }
useEffect(() => {
 handaleViewBed()
}, [])
    const handaleViewBed = () => {
            axios.get("http://localhost:7000/api/v1/hostel/getroomno")
                .then((res) => {
                    props.allRoomData(res.data.result)
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    return (
        <>
            <div className="dashbrd-40-colm" style={{display:props.createbed}}>
                <form onSubmit={handaleSubmit}>
                    <div>
                        <label>Bulding No.</label>
                        <input type="text" placeholder="Bulding No." value={bulding} onChange={(e)=>setBulding(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Floor No.</label>
                        <input type="number" placeholder="Floor No." value={floor} onChange={(e)=>setFloor(e.target.value)} required/>
                    </div>

                    <div>
                        <label>Room No.</label>
                        <input type="text" placeholder="Room No." value={room} onChange={(e)=>setRoom(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Total Bed Available</label>
                        <input type="number" placeholder="Total Bed Available" value={totalbed} onChange={(e)=>setTotalBed(e.target.value)} required/>
                    </div>
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
                    {/* <input className="dashboard-btn dashboard-btn-scss" type="submit" value="Submit"/> */}
                </form>
            </div>
        </>
    )
}

export default CreateBed40