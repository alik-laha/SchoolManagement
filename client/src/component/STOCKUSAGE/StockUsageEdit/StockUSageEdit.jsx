import {useState, useEffect} from "react";
import axios from "axios";

const StockUsageEdit = (props) => {
    const [ItemNameData, setItemNameData] = useState([]);
    const [itemName, setItemName] = useState("");
    const [date, setDate] = useState();
    const [Quantity, setQuantity] = useState();
    const [index, setIndex] = useState();
    const [view, setView] = useState("none");
    const [leftStock, setLeftStock] = useState(0);
    const [viewStock,setViewStock]=useState([])

    useEffect(() => {
        console.log(props.view, props.view40)
        if(props.view === "block" && props.view40==="block"){
            setView("block");
        }
        else{
            setView("none");
        }
    },[props.view, props.view40]);

    useEffect(()=>{
        setViewStock(props.data)
        
        
    },[props.data])
    const clearTable = () => {
        setViewStock([]);
        // setIndex()
      };

    useEffect(() => {
        if(view==="block") {
            axios.get("/api/v1/stock/getallitemname",{headers:{"Authorization":localStorage.getItem("token")}})
                .then((res) => {
                    setItemNameData(res.data.data);
                    // console.log(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },[view]);
    const handleEdit = (data,idx) => {
        setItemName(data.item_name);
        setDate(data.entry_date.slice(0, 10));
        setIndex(idx);
        setQuantity(data.quantity)
        changeItemName(data.item_name)
    }

    const handleCancel = () => {
        setIndex();
        setItemName("");
        setDate("");
        setQuantity()
    }
    const changeItemName = (data) => {
        console.log(data)
        // setItemName(e.target.value);
        axios.post("/api/v1/stock/getplusminusstock",{itemName:data},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                setLeftStock(res.data.data[0].Plus - res.data.data1[0].Minus);
                console.log(res.data.data[0].Plus - res.data.data1[0].Minus);
            }).catch((err) => {
            console.log(err);
        })
    }
    const handleUpdate = (data) => {
        const id = data.id;
        if(Quantity > leftStock){
            alert("You can not use more than "+leftStock+" "+itemName+ "values of amount");
            setQuantity(leftStock);
            return;
        }
        axios.post("/api/v1/stock/updatestockusageminus",{Quantity,id,date,itemName} ,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                console.log(res.data.data);
                alert("Updated Successfully");
                setIndex(null);
                setItemName("");
                setDate("");
                setQuantity(null)
                setView("none");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(
        <div style={{display:view}} >
           <button style={{position:'relative',marginTop:'-40px',float:'none'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
            <table className="table-60">

                <thead>
               
                    <tr>
                        <th>Sl.No</th>
                        <th>Item Name</th>
                        <th>Entry Date</th>
                        <th style={{width:'20%'}}>Usage Quantity (Pc/Kg/Mtr/ltr)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {viewStock.map((data, idx) => (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>
                                        {data.item_name}
                                  </td>
                            <td>{idx===index ? <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>:data.entry_date.slice(0, 10)}</td>
                            <td>{idx === index ?
                                <input type="number" value={Quantity} onChange={(e)=>setQuantity(e.target.value)}/>: data.quantity}</td>
                            <td>{idx === index ? (<><button onClick={handleCancel} className="dashboard-btn btn-warning">Cancel</button>
                                <button onClick={()=>handleUpdate(data)} className="dashboard-btn btn-warning" >Update</button> </>):
                                ( <button onClick={() => handleEdit(data, idx)}
                                        className="dashboard-btn btn-warning">Edit
                                </button>)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default StockUsageEdit;