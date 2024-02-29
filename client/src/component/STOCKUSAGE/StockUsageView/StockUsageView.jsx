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
    let StockUsages = 0;
    let StockBuys = 0;
    let StockLeft = 0;
    stockUsage.map((stock, index) => {
        if(stock.type === "Minus"){
            StockUsages += stock.quantity;
        }
        else if(stock.type === "Plus"){
            StockBuys += stock.quantity;
        }
    })
    StockLeft = StockBuys - StockUsages;

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
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{stock.item_name}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.type==="Plus" ? "Entry":"Use"}</td>
                            <td>{stock.entry_date.slice(0, 10)}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td>Total Buy</td>
                    <td>{StockBuys}</td>
                    <td></td>
                    <td>Total Stock Usage</td>
                    <td> {StockUsages}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Stock Left</td>
                    <td>{StockLeft}</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StockUsageView;