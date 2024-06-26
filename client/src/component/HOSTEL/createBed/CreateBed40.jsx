import {useEffect, useState} from "react";
import axios from "axios";

const CreateBed40 = (props) => {
    const [bulding, setBulding] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [totalbed, setTotalBed] = useState("");
    const [roomname,setRoomname]= useState("");
    const [roombedname,setRoombedname]= useState("");

    const roomdialog = document.getElementById('roomDialog');
    const closeRoomDialogButton = document.getElementById('closeRoomDialog');
    if(closeRoomDialogButton){
        closeRoomDialogButton.addEventListener('click', () => {
            roomdialog.close();
          });
    }

    const handaleSubmit = (e) => {
        let count=-2000;
        e.preventDefault()
        axios.post("/api/v1/hostel/createbed", {bulding,floor,room,totalbed},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
            //alert("Room No."+ room +" Created Successfully with Total Bed :"+totalbed);
            setRoomname(room)
            setRoombedname(totalbed)
                { handaleViewBed()}
                roomdialog.showModal();
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
            axios.get("/api/v1/hostel/getroomno",{headers:{"Authorization":localStorage.getItem("token")}})
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
                <form onSubmit={handaleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
                <p style={{fontSize:'17px'}}> Room and Bed Details </p>

                <dl class="dl-horizontal">
                   
                    <dt><label>Bulding</label></dt>
                    <dd> <input type="text" placeholder="Bulding No." value={bulding} onChange={(e)=>setBulding(e.target.value)} required/>
                    </dd>
                    <dt><label>Floor</label></dt>
                    <dd> <input type="number" placeholder="Floor No." value={floor} onChange={(e)=>setFloor(e.target.value)} required/>
                    </dd>
                    <dt><label>Room No.</label></dt>
                    <dd> <input type="text" placeholder="Room No." value={room} onChange={(e)=>setRoom(e.target.value)} required/>
                    </dd>
                    <dt><label>Bed Available</label></dt>
                    <dd> <input type="number" placeholder="Total Bed Available" value={totalbed} onChange={(e)=>setTotalBed(e.target.value)} required/>
                    </dd>


                   </dl> 
                    
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
                    {/* <input className="dashboard-btn dashboard-btn-scss" type="submit" value="Submit"/> */}
                </form>
                <dialog id="roomDialog" class="dashboard-modal">
                <button id="closeRoomDialog" class="dashboard-modal-close-btn ">X </button>
                <p id="modal-text" style={{color:'black'}}> New Room with Room No. : <p className={{color:'red!important'}}>{roomname}</p> with Total Bed :<p className={{color:'red!important'}}>{roombedname}</p>has Created Successfully</p>
                {/* <!-- Add more elements as needed --> */}
            </dialog>
            </div>
        </>
    )
}

export default CreateBed40