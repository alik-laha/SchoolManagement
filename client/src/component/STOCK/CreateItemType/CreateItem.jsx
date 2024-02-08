import {useState,useEffect} from "react";
import axios from "axios";


const CreateItem = (props) => {
    const [item,setItem]=useState("")


    useEffect(() => {
        handaleitemCreate()
    }, [])

    const handleCreateItem = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/api/v1/stock/createitem",{
            item:item
        }).then((response)=>{
            setItem("")
            alert(`Item Type Created with Name ${item}`)
            {handaleitemCreate()}
            
        })
        .catch((err) => {
            if(err.response.data.message.errno === 1062){
               alert("Item Type " + item+" Already Exists");
            }
            setItem("")

       })


    }

    const handaleitemCreate=()=>{
        axios.post("http://localhost:7000/api/v1/stock/getallitem")
            .then((data)=>{
                props.setItemData(data.data.data);
            })

    }
    // const handaleitem=()=>{
    //     axios.post("http://localhost:7000/api/v1/stock/getallitem")
    //         .then((data)=>{
    //             props.setItemData(data.data.data);
    //         })
    //     props.handleItemView("block")
    // }

    return(
        <div style={{display:props.itemCreateView}} className="dashbrd-40-colm">

        <form onSubmit={handleCreateItem}>

            <div>
                <label>Create Item Type</label>
                <input type="text" placeholder="Create Item" onChange={(e)=>setItem(e.target.value)} value={item} required/>

            </div>
            <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Create Item Type</button></span>

        </form>
   
            <div>
                <button style={{backgroundColor:'orange'}} className="dashboard-btn dashboard-btn-scss" onClick={handaleitemCreate}>View / Delete Item Type</button>
            </div>
            
        </div>
    )
}
export default CreateItem;