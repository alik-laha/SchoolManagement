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
            StockUsageView
        </div>
    )
}

export default StockUsageView;