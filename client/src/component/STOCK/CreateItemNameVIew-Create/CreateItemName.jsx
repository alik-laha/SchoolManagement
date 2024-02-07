import {useState} from "react";


const CreateItemName = (props) => {
  const [itemType, setItemType] = useState("");
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const handleViewItemName = () => {

  }
    return(
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Type Of Item </label>
                    <select onChange={(e) => setItemType(e.target.value)} required value={itemType}>
                        <option value="">Item Type</option>
                        {props.Item.map((data) => (
                            <option value={data.item_Type} key={data.type_id}>
                                {data.item_Type}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Item Name</label>
                    <input
                        type="text"
                        placeholder="Item Name"
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                        required
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>
            </form>
            <div>
                <button style={{backgroundColor: 'orange'}} className="dashboard-btn dashboard-btn-scss"
                        onClick={handleViewItemName}>View / Delete Item Name
                </button>
            </div>
        </div>
    )
}
export default CreateItemName;