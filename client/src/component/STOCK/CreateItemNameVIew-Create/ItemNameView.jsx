import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

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
                </tr>
            </thead>
            <tbody>
                {data.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.item_type}</td>
                        <td>{data.item_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default ItemNameView;