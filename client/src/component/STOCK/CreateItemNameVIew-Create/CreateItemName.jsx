import {useState} from "react";
import axios from "axios";


const CreateItemName = (props) => {
  const [itemType, setItemType] = useState("");
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault()
    axios.post("/api/v1/stock/createitemname", { itemType, itemName },{headers:{"Authorization":localStorage.getItem("token")}})
        .then((res) => {
            alert(`Item Name created with Name : ${itemName}`);
            setItemType("");
            setItemName("");
            {handleViewItemName()}

        })
        .catch((err) => {
            if (err.response.data.message.errno === 1062) {
                alert("Item Name " + itemName + " Already Exists");
            }
            setItemType("");
            setItemName("");

        });
  }
  const handleViewItemName = () => {
    axios.get("/api/v1/stock/getallitemname",{headers:{"Authorization":localStorage.getItem("token")}})
        .then((res) => {
           props.ItemNameData(res.data.data);
           // console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
  }
    return(
        <div style={{display: props.view}} className="dashbrd-40-colm">
             <form onSubmit={handleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
             <p style={{fontSize:'17px'}}>Create New Item </p>
             <dl class="dl-horizontal">
                <dt><label>Name of Item</label></dt>
                <dd> <input
                        type="text"
                        placeholder="Item Name"
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                        required
                    /></dd>

                <dt><label>Type of Item</label></dt>
                <dd><select onChange={(e) => setItemType(e.target.value)} required value={itemType}>
                        <option value="">Item Type</option>
                        {props.Item.map((data) => (
                            <option value={data.item_Type} key={data.type_id}>
                                {data.item_Type}
                            </option>
                        ))}
                    </select></dd>
             </dl>
                
               
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>
            </form>
            <div>
                <button style={{backgroundColor: 'lightseagreen',marginTop:'20px'}} className="dashboard-btn dashboard-btn-scss" onClick={handleViewItemName}>
                View / Delete Item Name
                </button>
            </div>
            {/* <div>
                <button style={{backgroundColor: 'orange'}} className="dashboard-btn dashboard-btn-scss"
                        onClick={handleViewItemName}>
                </button>
            </div> */}
        </div>
    )
}
export default CreateItemName;