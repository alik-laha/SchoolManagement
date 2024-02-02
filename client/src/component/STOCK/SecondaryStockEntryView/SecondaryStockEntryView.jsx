import {useEffect, useState} from "react";
import axios from "axios";

const SecondaryStockEntryView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")
    const [visiblity, setVisiblity] = useState("none");
    const [mainsvisibility,setmainsvisibility]=useState("contents")
    const [discountamt,setdiscountamt]=useState(0)
    const [paidamt,setpaidamt]=useState(0)
    const [balamt,setbalamt]=useState(0)
    const [cashentrydate,setcashentrydate]=useState(new Date().toISOString().slice(0, 10) )
    const [modifieddate,setmodifieddate]=useState(new Date().toISOString().slice(0, 10) )
    const [billid,setbillid]=useState("");
    const [estimatedamt,setestimatedamt]=useState("");
    const [itemid,setitemid]=useState("");
    const [disableedit,setdisabledit]=useState(true)
    

    useEffect(()=>{
        setViewStock(props.SearchebyData)
  
    },[props.SearchebyData])

    useEffect(()=> {
        //console.log(props.secondarystocksearch,props.view)
        if (props.secondarystocksearch === "block" && props.view === "block" && props.SearchebyData.length>0) {
            setVisible("block")
        }
        else {
            setVisible("none")
        }
    },[props.secondarystocksearch,props.view,props.SearchebyData])

    useEffect(()=>{
        setbalamt(discountamt-paidamt)
    },[discountamt,paidamt])


    const clearTable = () => {
        if(visiblity==='none')
        setViewStock([]);
      };


    const handleEdit = (data) => {
        setVisiblity("contents");
        setmainsvisibility('none')

        setitemid(data.stock_id)
        setbillid(data.bill_id)
        setestimatedamt(data.projected_cost)

        
        if(data.discounted_cost!==null || data.discounted_cost!==undefined){
            setdiscountamt(data.discounted_cost)
        }
        else{
            setdiscountamt(0)
        }
        if(data.paid_amount!==null || data.paid_amount!==undefined){
            setpaidamt(data.paid_amount)
        }
        else{
            setpaidamt(0)
        }
        if(data.pending_amount!==null || data.pending_amount!==undefined){
            setbalamt(data.pending_amount)
        }
        else{
            setbalamt(0)
        }

        if(data.stock_entry_date!==null || data.stock_entry_date!==undefined){
            setcashentrydate(data.stock_entry_date.slice(0, 10))
            
            //date validation start

            let currentDate = new Date().toISOString();
            let currentYear = currentDate.slice(0,4);
            let currentMonth = currentDate.slice(5,7);
            let currentDay = currentDate.slice(8,10);
            let dbYear = data.stock_entry_date.slice(0,4);
            let dbMonth = data.stock_entry_date.slice(5, 7);
            let dbDay = data.stock_entry_date.slice(8, 10);
           
            // Check if the database date is one day older than the current date

            if (dbYear < currentYear) 
            {
                // The database date is in a previous year, so it is older
                setdisabledit(true);
            } 
            else if (dbYear === currentYear) 
            {
                // The database date is in the same year, so compare the months
                if (dbMonth < currentMonth) 
                {
                // The database date is in a previous month, so it is older
                setdisabledit(true)
                } 
                else if (dbMonth === currentMonth) 
                {
                    // The database date is in the same month, so compare the days
                    if (dbDay < currentDay ) {
                    // The database date is more than one day before the current date, so it is older
                    setdisabledit(true)
                    } 
                    else {
                    // The database date is not older than one day
                    setdisabledit(false);

                     }
                } 
                else 
                {
                    // The database date is in a future month, so it is not older
                    setdisabledit(false);
                }
            } 
            else 
            {
            // The database date is in a future year, so it is not older
            setdisabledit(false);
            }
            //date validation end
            console.log(disableedit)
       }
        else{
            setcashentrydate(new Date().toISOString().slice(0, 10))
        }
    };
    const cancelEdit =() =>{
        setVisiblity('none');
        setmainsvisibility('contents');
        setdiscountamt(0);
        setpaidamt(0);
        setbalamt(0);
        setcashentrydate(new Date().toISOString().slice(0, 10));
        setmodifieddate(new Date().toISOString().slice(0, 10));
        setdisabledit(false);
    };



     const handaleSubmit = (e) => {
       e.preventDefault();
          if(!modifieddate || !cashentrydate || !balamt|| !paidamt|| !discountamt){
           alert("Please fill all the fields")
          return
            }
         axios
            .post("http://localhost:7000/api/v1/stock/updatecashentry", {
               itemid,paidamt,discountamt,balamt,cashentrydate,
               modifieddate
               
            })
            .then((res) => {
                console.log(res);
                if(visible==='block')
                {
                    setVisible('none')
                }
            })
            .catch((error) => {
                console.log(error);
            });
        alert("Cash Entry Updated Successfully");
        setVisiblity('none');
        setmainsvisibility('contents');
    };

    return (
        <div style={{display:visible}}>
            
            <table className="table-60">
                <thead style={{display: mainsvisibility}}>
                <button style={{position:'relative',marginTop:'-40px'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                <tr>
                    <th>Item Id</th>
                    <th>Bill Id</th>
                    <th>Cash Entry</th>
                    <th>Cash Entry Date</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th>
                    <th>Bill Date</th>
                    <th>Unit Per Cost</th>
                    <th>Quantity</th>
                    <th>Estimated Price</th>
                    <th>Action</th>
                    
                </tr>
                </thead>
                <tbody style={{display: mainsvisibility}}>
                {viewStock.map((item) => (
                    <tr key={item.stock_id}>
                        <td>{item.stock_id}</td>
                        <td>{item.bill_id}</td>
                        <td><input type='checkbox' checked={item.cash_entry_flag === 1 ? true : false}></input></td>
                        <td>{item.stock_entry_date !== null ?item.stock_entry_date.slice(0,10):null}</td>
                        <td>{item.item_Name}</td>
                        <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td>
                        <td>{item.bill_date.slice(0,10)}</td>
                        <td>{item.unit_cost}</td>
                        <td>{item.quantity}</td>
                        <td>{item.projected_cost}</td>
                        
                        <td><button  className='dashboard-btn btn-warning' onClick={() => handleEdit(item)}>Cash Entry</button></td>
                        
                    </tr>
                ))}
                </tbody>


                {/* hidden tbody */}


                <thead style={{display: visiblity}} id='hidden-table-60'>
                <tr>
                <th>Item Id</th>
                    <th>Bill Id</th>
                    <th>Estimated Amount</th>
                    <th>Discounted Amount</th>
                    <th>Actual Paid Amount</th>
                    <th>Balance Amount</th>
                    <th>Cash Entry Date</th>
                    <th>Action</th>
                </tr>
                </thead>


                <tbody style={{display: visiblity}} >
                    
                <tr>
                   <td>{itemid}</td>
                   <td>{billid}</td>
                   <td>{estimatedamt}</td>
                   <td> <input type="number" value={discountamt} placeholder='Discounted Amount' onChange={(e) => setdiscountamt(e.target.value)} required/></td>
                   <td> <input type="number" value={paidamt} placeholder='Paid Amount' onChange={(e) => setpaidamt(e.target.value)} required/></td>
                   <td><input type="number" value={balamt} placeholder='Balance Amount' onChange={(e) => setbalamt(e.target.value)} required readOnly/>{}</td>
                   <td><input
                        type="date" 
                        placeholder="Cash Entry date"
                        onChange={(e) => setcashentrydate(e.target.value)}
                        value={cashentrydate}
                        required readOnly
                    /></td>
                    <td style={{display:'flex'}}>
                        <button type="submit" disabled={disableedit} value="Update" className="dashboard-btn btn-warning" onClick={handaleSubmit}
                                > Proceed
                        </button>
                        <button type="submit" value="Update" className="dashboard-btn btn-warning"me
                                onClick={cancelEdit}> Back
                        </button>
                    </td>

                </tr>
                                 

                </tbody>

                
            </table>
            {viewStock.length===0 ? <div className="no-data">No Data Exists</div> : null}

        </div>
    )
}
export default SecondaryStockEntryView;