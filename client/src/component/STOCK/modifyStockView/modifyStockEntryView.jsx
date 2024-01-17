import {useEffect, useState} from "react";
import axios from "axios";
const ModifyStockEntryView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")
    const [visiblity, setVisiblity] = useState("none");
    const [mainsvisibility,setmainsvisibility]=useState("contents")
    const [discountamt,setdiscountamt]=useState(0)
    const [paidamt,setpaidamt]=useState(0)
    const [balamt,setbalamt]=useState(0)
    const [billDate,setbillDate]=useState();
    const [unitcost,setunitcost]=useState();
    const [cashentrydate,setcashentrydate]=useState(new Date().toISOString().slice(0, 10) )
    const [modifieddate,setmodifieddate]=useState(new Date().toISOString().slice(0, 10) )
    const [billid,setbillid]=useState("");
    const [estimatedamt,setestimatedamt]=useState("");
    const [itemid,setitemid]=useState("");
    const [qty,setqty]=useState();
    const [itemname,setitemname]=useState();
    const [vendor,setvendor]=useState('');
    const [item,setitem]=useState('');
    
    

    useEffect(()=>{

      axios.post("http://localhost:7000/api/v1/stock/getsecondarystockentry",props.SearchebyData)
        .then((res)=>{
            setViewStock(res.data.data)
        })
          .catch((error)=>{
              console.log(error)
          } )
    },[props.SearchebyData])

    useEffect(()=> {
        console.log(props.modifyStockView,props.view)
        if (props.modifyStockView === "block" && props.view === "block") {
            setVisible("block")
        }
        else {
            setVisible("none")
        }
    },[props.modifyStockView,props.view])

    useEffect(()=>{
        setbalamt(discountamt-paidamt)
    },[discountamt,paidamt])

    const handleEdit = (data) => {
        setVisiblity("contents");
        setmainsvisibility('none')
        setunitcost(data.unit_cost)
        setitemid(data.stock_id)
        setbillid(data.bill_id)
        setestimatedamt(data.projected_cost)
        setqty(data.quantity)
        setitemname(data.item_Name)
        setvendor(data.vendor_name)
        setitem(data.item_Type)

        
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
            
       }
        else{
            setcashentrydate(new Date().toISOString().slice(0, 10))
        }
       if(data.stock_modified_date!==null || data.stock_modified_date!==undefined){
            setmodifieddate(data.stock_modified_date.slice(0, 10))     
       }
        else{
            setmodifieddate(new Date().toISOString().slice(0, 10))
        }

        if(data.bill_date!==null || data.bill_date!==undefined){
            setbillDate(data.bill_date.slice(0, 10))     
       }
        else{
            setbillDate(new Date().toISOString().slice(0, 10))
        }

        
    };
    const cancelEdit =() =>{
        setVisiblity('none');
        setmainsvisibility('contents');
        setdiscountamt(0);
        setpaidamt(0);
        setcashentrydate(new Date().toISOString().slice(0, 10) )
        setmodifieddate(new Date().toISOString().slice(0, 10))
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
            })
            .catch((error) => {
                console.log(error);
            });
        alert("Cash Entry Updated Successfully");
        
    };

    return (
        <div style={{display:visible}}>
            <table className="table-60">
                <thead style={{display: mainsvisibility}}>
                <tr>
                    <th>Item Id</th>
                    <th>Bill Id</th>
                    <th>Cash Entry</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Vendor Name</th>
                    <th>Bill Date</th>
                    <th>Unit Per Cost</th>
                    <th>Quantity</th>
                    <th>Estimated Price</th>
                    <th>Discounted Amount</th>
                    <th>Actual Paid Amount</th>
                    <th>Balance Amount</th>
                    <th>Cash Entry Date</th>
                    <th>Last Modified Date</th>
                    
                    <th>Action</th>
                    
                </tr>
                </thead>
                <tbody style={{display: mainsvisibility}}>
                {viewStock.map((item) => (
                    <tr key={item.stock_id}>
                        <td>{item.stock_id}</td>
                        <td>{item.bill_id}</td>
                        <td><input type='checkbox' checked={item.cash_entry_flag === 1 ? true : false}></input></td>
                        <td>{item.item_Name}</td>
                        <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td>
                        <td>{item.bill_date.slice(0,10)}</td>
                        <td>{item.unit_cost}</td>
                        <td>{item.quantity}</td>
                        <td>{item.projected_cost}</td>
                        <td>{item.discounted_cost}</td>
                        <td>{item.paid_amount}</td>
                        <td>{item.pending_amount}</td>
                        <td>{item.stock_entry_date !==  null ? item.stock_entry_date.slice(0,10): null}</td>
                        <td>{item.stock_modified_date !== null ?item.stock_modified_date.slice(0,10):null}</td>
                        <td><button  className='dashboard-btn btn-warning' onClick={() => handleEdit(item)}>Edit</button></td>
                        
                    </tr>
                ))}
                </tbody>


                {/* hidden tbody */}


                <thead style={{display: visiblity}} id='hidden-table-60'>
                <tr>
                <th>Item Id</th>
                    <th>Bill Id</th>
            
                    <th>Item Name</th>
                    
                    <th>Vendor Name</th>
                    <th>Item Type</th>
                    <th>Bill Date</th>
                    <th>Unit Per Cost</th>
                    <th>Quantity</th>
                    <th>Estimated Price</th>
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
                   <td><input type="text" value={billid} placeholder='Bill id' onChange={(e) => setdiscountamt(e.target.value)} required/></td>
                   <td><input type="text" value={itemname} placeholder='Item Name' onChange={(e) => setitemname(e.target.value)} required/></td>
                   <td>
                        <select onChange={(e) => setvendor(e.target.value)} value={vendor}>
                            <option >All</option>
                            {props.Vendor.map((data,idx) => (
                                <option value={data.vendor_name} key={idx}>
                                    {data.vendor_name}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td>
                        <select onChange={(e) => setitem(e.target.value)} value={item}>
                            <option >All</option>
                            {props.Item.map((data,idx) => (
                                <option value={data.item_Type} key={idx}>
                                    {data.item_Type}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td><input
                        type="date" 
                        placeholder="Bill Entry date"
                        onChange={(e) => (e.target.value)}
                        value={billDate}
                        required
                    /></td>
                   <td> <input type="number" value={unitcost} placeholder='Unit Cost' onChange={(e) => setunitcost(e.target.value)} required/></td>
                   <td> <input type="number" value={qty} placeholder='Quantity' onChange={(e) => setqty(e.target.value)} required/></td>
                   
                   <td>{estimatedamt}</td>
                   <td> <input type="number" value={discountamt} placeholder='Discounted Amount' onChange={(e) => setdiscountamt(e.target.value)} required/></td>
                   <td> <input type="number" value={paidamt} placeholder='Paid Amount' onChange={(e) => setpaidamt(e.target.value)} required/></td>
                   <td><input type="number" value={balamt} placeholder='Balance Amount' onChange={(e) => setbalamt(e.target.value)} required readOnly/></td>
                   <td><input
                        type="date" 
                        placeholder="Cash Entry date"
                        onChange={(e) => setcashentrydate(e.target.value)}
                        value={cashentrydate}
                        required
                    /></td>
                    
                  
                    <td>
                        <button type="submit" value="Update" className="dashboard-btn btn-warning" onClick={handaleSubmit}
                                >Proceed
                        </button>
                        <button type="submit" value="Update" className="dashboard-btn btn-warning"
                                onClick={cancelEdit}>Cancel
                        </button>
                    </td>

                </tr>
                                 

                </tbody>

                
            </table>
        </div>
    )
}
export default ModifyStockEntryView;