import {useState} from "react";

const StockUsageEditSearch = (props) => {
    const [ItemNameData, setItemNameData] = useState([]);
    const [itemTypeData, setItemTypeData] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemType, setItemType] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();

    }
    return (
        <div style={{display:props.view}}>
            <form onSubmit={handleSearch}>
                <h3>Alik laha</h3>
            </form>
        </div>
    )
}
export default StockUsageEditSearch;