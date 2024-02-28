import {useEffect, useState} from "react";

const StockUsageView = (props) => {
    const [view, setView] = useState("none");
    const [stockUsage, setStockUsage] = useState([]);

    useEffect(() => {
        if(props.view === "block" && props.data.length > 0){
            setView("block");
        }
        else{
            setView("none");
        }
    }, [props.view, props.data]);

    useEffect(() => {
        setStockUsage(props.data);
    }, [props.data]);

    return(
        <div style={{display:view}}>
            <table className="table-60">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Stock Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Usage Date</th>
                    </tr>
                </thead>
                <tbody>
                    {stockUsage.map((stock, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{stock.item_name}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.type}</td>
                                <td>{stock.entry_date.slice(0,10)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StockUsageView;