import {useState} from "react";
import axios from "axios";


const CreateItem = (props) => {
    const [item,setitem]=useState("")

    const handleCreateItem = () => {
        axios.post("http://localhost:7000/api/v1/stock/createitem",{
            item:item
        }).then((response)=>{
            alert(`New item added with this Name ${item}`)
           setitem("")
        })

    }

    return(
        <div style={{display:props.itemCreateView}}>
            <input type="text" placeholder="Create Item" onChange={(e)=>setitem(e.target.value)}/>
            <button onClick={handleCreateItem}>Create item type</button>
        </div>
    )
}
export default CreateItem;