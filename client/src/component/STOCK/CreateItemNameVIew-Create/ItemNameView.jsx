import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";

const ItemNameView = (props) => {
const [data, setData] = useState([]);
const [view, setView] = useState("none");
    useEffect(() => {
       setData(props.Item)
    }, [props.Item]);
    useEffect(() => {
        console.log(props.view)
        if(props.view === "block" && props.Item.length > 0){
            setView("block")
        }
        else{
            setView("none")
        }
    },[props.Item, props.view])
    const currDate = new Date().toLocaleDateString();
    const deleteItemName = (id) => {
        axios.post("http://localhost:7000/api/v1/stock/deleteitemname", {id:id})
            .then((res) => {
              alert("Item Name Deleted Successfully")
               props.ItemNameData(res.data.data);
            }).catch((err) => {
                console.log(err)
            })
    }
    return(
        <div style={{display:view}}>
            <ReactHTMLTableToExcel
                id="Alik"
                className="dashboard-btn btn-warning excel-btn margin-vendor-adjust"
                table="itemname-view"
                filename={"ItemName_Details_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
        <table className="table-60" id="itemname-view">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Item Type</th>
                    <th>Item Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data,idx) => (
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{data.item_type}</td>
                        <td>{data.item_name}</td>
                        <td>
                            <button className='btn-warning dashboard-btn clear-gradient' onClick={() => deleteItemName(data.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default ItemNameView;