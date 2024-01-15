import {useState} from "react";
import axios from "axios";


const CreateItem = (props) => {
    const [item,setItem]=useState("")

    const handleCreateItem = () => {
        axios.post("http://localhost:7000/api/v1/stock/createitem",{
            item:item
        }).then((response)=>{
            setItem("")
        })
        alert(`New item added with this Name ${item}`)

    }

    return(
        <div style={{display:props.itemCreateView}} className="dashbrd-40-colm">

        <form onSubmit={handleCreateItem}>

            <div>
                <label>Create Item Type</label>
                <input type="text" placeholder="Create Item" onChange={(e)=>setItem(e.target.value)} required/>

            </div>
            <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Create Item Type</button></span>

        </form>
   
            <div>
                <button style={{backgroundColor:'lightseagreen'}} className="dashboard-btn dashboard-btn-scss" onClick={props.handleItemView}>View / Delete Item Type</button>
            </div>
            
        </div>
    )
}
export default CreateItem;