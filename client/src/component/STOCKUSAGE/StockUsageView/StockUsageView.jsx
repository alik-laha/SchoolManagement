import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const StockUsageView = (props) => {
    const [view, setView] = useState("none");
    const [stockUsage, setStockUsage] = useState([]);
    const currDate = new Date().toLocaleDateString();
    

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

    const clearTable = () => {
        setStockUsage([]);
       
        
      };

    

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
            
            <table className="table-60" id='stock_usage_view'>
            <thead style={{ display: 'contents' }}>
            <tr style={{ display: 'table-caption' }}>
            <button style={{position:'relative',marginTop:'-40px',float:'left'}} 
                            className="dashboard-btn dashboard-btn-scss excel-btn"  onClick={clearTable}>Clear Result</button>
            <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn excel-btn user-profile-export"
                table="stock_usage_view"
                filename={"Stock_Usage_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
                </tr>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Item Name</th>
                        <th>Date of Entry/Usage</th>
                        
                        <th>Type (Entry/Usage)</th>
                        
                        <th style={{width:'10%'}}>Amount(Pc./Kg./Ltr./Mtr.)</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                {stockUsage.map((stock, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{stock.item_name}</td>
                            <td>{stock.entry_date.slice(0, 10)}</td>
                            
                            <td>{stock.type==="Plus" ? "Entry":"Usage"}</td>
                            
                            <td>{stock.type==="Plus" ? "+":"-"}{stock.quantity}</td>
                            
                            
                        </tr>
                    )
                })}
               <tr ></tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={{backgroundColor:'#f39c12',color:'white',border:'1px solid black'}}><b>Total Entry Amount :</b></td>
                    <td style={{border:'1px solid black'}}>{StockBuys}</td>
                    
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={{backgroundColor:'#f39c12',color:'white',border:'1px solid black'}}><b>Total Usage Amount :</b></td>
                    <td style={{border:'1px solid black'}}>{StockUsages}</td>
                    
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={{backgroundColor:'#f39c12',color:'white',border:'1px solid black'}}><b>Total Left Amount :</b></td>
                    <td style={{border:'1px solid black'}}>{StockLeft}</td>
                    
                </tr>
                </tbody>
            </table>
            {stockUsage.length===0 ? <div className="no-data">No Data Exists</div> : null}
           
        </div>
    )
}

export default StockUsageView;