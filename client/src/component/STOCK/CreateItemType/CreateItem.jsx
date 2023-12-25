import {useState} from "react";
import axios from "axios";


const CreateItem = (props) => {
    const [item,setItem]=useState("")

    const handleCreateItem = () => {
        axios.post("http://localhost:7000/api/v1/stock/createitem",{
            item:item
        }).then((response)=>{
            setItem("")
            alert(`New item added with this Name ${item}`)
            window.location.reload();

        })

    }

    return(
        <div style={{display:props.itemCreateView}} className="dashbrd-40-colm">
            <div >
          <label>Create Item Type</label>
            <input type="text" placeholder="Create Item" onChange={(e)=>setItem(e.target.value)}/>
            
            </div>
            <button className="dashboard-btn dashboard-btn-scss" onClick={handleCreateItem}>Create Item Type</button>
            <div>
            
                <button className="dashboard-btn dashboard-btn-scss" onClick={props.handleItemView}>View/Delete Item Type</button>
            </div>
            
        </div>
    )
}
export default CreateItem;