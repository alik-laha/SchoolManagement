import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";

const ItemNameView = (props) => {
const [data, setData] = useState([]);
const [view, setView] = useState("none");
    useEffect(() => {
       setData(props.Item)
    }, [props.Item]);

    const handleCancel = () => {
        setData([])
        if(view=='block'){
            setView('none')
        }

    }
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
        axios.post("/api/v1/stock/deleteitemname", {id:id},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
              alert("Item Name Deleted Successfully")
               props.ItemNameData(res.data.data);
            }).catch((err) => {
                console.log(err)
            })
    }
    return(
        <div style={{display:view,marginTop:'120px'}}>
            <ReactHTMLTableToExcel
                id="Alik"
                className="dashboard-btn btn-warning excel-btn "
                table="itemname-view"
                filename={"Item_Details_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
            <button style={{float:'right'}}className="dashboard-btn btn-warning excel-btn" onClick={handleCancel}>Clear Result</button>
        <table className="table-60" id="itemname-view">
            <thead>
                <tr>
                    <th>Item SL. No.</th>
                    
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data,idx) => (
                    <tr key={idx}>
                        <td style={{width:'20%'}}>{idx+1}</td>
                        
                        <td>{data.item_name}</td>
                        <td>{data.item_type}</td>
                        <td>
                            <button className='dashboard-btn dashboard-btn-scss' onClick={() => deleteItemName(data.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default ItemNameView;