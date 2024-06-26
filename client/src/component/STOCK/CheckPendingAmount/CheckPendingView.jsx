import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const CheckPendingView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")
    const currDate = new Date().toLocaleDateString();
    
    const clearTable = () => {
        setViewStock([]);
      };

    

    useEffect(()=>{
        setViewStock(props.SearchebyData)
        
        
    },[props.SearchebyData])

    useEffect(()=> {
        console.log(props.StockView,props.view)
        if (props.StockView === "block" && props.view === "block") {
            setVisible("block")
        }
        else {
            setVisible("none")
        }
    },[props.StockView,props.view])
let sum=0;
    return (
        <div style={{display:visible}}>
            
              
            <table className="table-60" id="pending-stock-view">
                <thead style={{ display: 'contents' }}>
                <tr style={{ display: 'table-caption' }}>
                <button style={{position:'relative',marginTop:'-40px',float:'left'}} 
                            className="dashboard-btn dashboard-btn-scss excel-btn"  onClick={clearTable}>Clear Result</button>
                <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn excel-btn user-profile-export"
                table="pending-stock-view"
                filename={"Pending_Balance_Stock_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
            />
                </tr>
                <tr>
                    <th>Item Id</th>
                    <th>Bill Id</th>
                    <th>Cash Entry</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th>
                    <th>Bill Date</th>
                    <th>Balance Amount</th>  
                </tr>
                </thead>
                <tbody>
                {viewStock.map((item,idx) => (
                    sum=sum+item.pending_amount,
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{item.bill_id}</td>
                        <td><input type='checkbox' checked={item.cash_entry_flag === 1 ? true : false}></input></td>
                        <td>{item.item_Name}</td>
                        <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td>
                        <td>{item.bill_date.slice(0,10)}</td>
                        <td>{item.pending_amount}</td>
                    </tr>
                ))}
          
                <tr>
                <td style={{border:'none'}}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                    <td style={{backgroundColor:'#f39c12',color:'white',border:'1px solid black'}}><b>Total Balance Amount :</b></td>
                    <td style={{backgroundColor:'ghostwhite',border:'1px solid black'}}><b>{sum}</b></td>
                </tr>
                </tbody>
            </table>
            {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}
        </div>
    )
}
export default CheckPendingView;