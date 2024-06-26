import {useEffect, useState} from "react";
import axios from "axios";


const EntryStockUsage = (props) => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [ItemNames, setItemNames] = useState([]);
    const [usageDate, setUsageDate] = useState(new Date().toISOString().slice(0, 10) );
    const [leftStock, setLeftStock] = useState(0);

    const handleItemtype = (e) => {
        axios.post("/api/v1/stock/getitemnamebytype", {itemType:e.target.value},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                setItemNames(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("/api/v1/stock/entrystockusage",{itemName, quantity, usageDate,Type:"Minus"},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                alert("Amount of " + quantity+ " units of Stock from Item Name :  " +itemName + " has been Insterted Successfully");
                setItemName("");
                setQuantity("");
                setUsageDate(new Date().toISOString().slice(0, 10) );
            })
            .catch((err) => {
                console.log(err);
            })

    }
    useEffect(()=> {
        console.log(props.view)
        if (props.view === "none") {
            setItemName("")
           
        }
       
    },[props.view])
    const changeItemName = (e) => {
        setItemName(e.target.value);
        axios.post("/api/v1/stock/getplusminusstock",{itemName:e.target.value},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                setLeftStock(res.data.data[0].Plus - res.data.data1[0].Minus);
            }).catch((err) => {
            console.log(err);
        })
    }
    const HandleUsage=(e)=>{
        if(e.target.value > leftStock){
            alert("You can not use more than "+leftStock+" "+itemName+ "values of amount");
            setQuantity(leftStock);
            return;
        }
        else {
            setQuantity(e.target.value)
        }

    }

    return(
        <div style={{display:props.view}}>
            <form className="dashbrd-40-colm" onSubmit={handleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
            <p style={{fontSize: '17px'}}>Stock Usage Entry </p>
                <dl className="dl-horizontal">
                    <dt>
                        <label>Item Type</label></dt>
                    <dd><select onChange={handleItemtype} required={true}>
                        <option value="">Item Type</option>
                        {props.Item.map((data, idx) => (
                            <option value={data.item_Type} key={idx}>
                                {data.item_Type}
                            </option>
                        ))}
                    </select></dd>

                    <dt>
                        <label>Item Name </label></dt>
                    <dd><select onChange={changeItemName} required={true} value={itemName}>
                        <option value="">Item Name</option>
                        {ItemNames.map((data, idx) => (
                            <option value={data.item_name} key={idx}>
                                {data.item_name}
                            </option>
                        ))}
                    </select></dd>

                </dl>

                {
                    itemName === "" ? <p></p> : <p>Left Amount of Item  {itemName} is {leftStock} ( Pc / Kg / Ltr / Mtr )</p>
                }
                <dl className="dl-horizontal">
                    <dt>
                        <label>Usage Amount  </label></dt>
                    <dd><input
                        type="number"
                        placeholder="Pc / Kg / Ltr / Mtr"
                        onChange={HandleUsage}
                        value={quantity} required
                    /></dd>

                    <dt>
                        <label>Usage Date </label></dt>
                    <dd><input
                        type="date"
                        onChange={(e) => setUsageDate(e.target.value)}
                        value={usageDate}
                        required
                    /></dd>

                </dl>
                <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button></span>

            </form>
        </div>
    )
}

export default EntryStockUsage;