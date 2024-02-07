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
    const [cashentrydate,setcashentrydate]=useState('')
    const [modifieddate,setmodifieddate]=useState(new Date().toISOString().slice(0, 10) )
    const [billid,setbillid]=useState("");
    const [estimatedamt,setestimatedamt]=useState("");
    const [itemid,setitemid]=useState("");
    const [qty,setqty]=useState();
    const [itemname,setitemname]=useState();
    const [vendor,setvendor]=useState('');
    const [item,setitem]=useState('');
    const [subpaiddisp,setpaidsubdisp]=useState('inline-block')
    const [subbaldisp,setbalsubdisp]=useState('inline-block')
    const [subdiscdisp,setdiscsubdisp]=useState('inline-block')
    const [itemNames, setItemNames] = useState([]);
    
    
    

    useEffect(()=>{
        setViewStock(props.SearchebyData)
    },[props.SearchebyData])

    useEffect(()=> {
       
        if (props.modifyStockView === "block" && props.view === "block" && props.SearchebyData.length>0) {
            setVisible("block")
        }
        else {
            setVisible("none")
        }
    },[props.modifyStockView,props.view,props.SearchebyData])

    useEffect(()=>{
        setbalamt(discountamt-paidamt)
    },[discountamt,paidamt])
    useEffect(()=>{
        setestimatedamt(unitcost*qty)
    },[qty,unitcost])

    const handleEdit = (data) => {
        console.log(data.pending_amount)
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
        setbillDate(data.bill_date.slice(0,10))

        
        if(data.discounted_cost!==null && data.discounted_cost!==undefined){
            setdiscountamt(data.discounted_cost)
            setdiscsubdisp('inline-block')
        }
        else{
            setdiscountamt(0)
            setdiscsubdisp('none')
        }
        if(data.paid_amount!==null && data.paid_amount!==undefined){
            setpaidamt(data.paid_amount)
            setpaidsubdisp('inline-block')
        }
        else{
            setpaidamt(0)
            setpaidsubdisp('none')
        }
        if(data.pending_amount!==undefined && data.pending_amount!==null){
            setbalamt(data.pending_amount)
            setbalsubdisp('inline-block')
        }
        else{
            setbalamt(0)
            setbalsubdisp('none')
        }
        if( data.stock_entry_date!==undefined && data.stock_entry_date!==null){
            setcashentrydate(data.stock_entry_date.slice(0, 10))
            
       }
     
    };

    const clearTable = () => {
        if(visiblity==='none')
        setViewStock([]);
      };
    const cancelEdit =() =>{
        setVisiblity('none');
        setmainsvisibility('contents');
        setdiscountamt(0);
        setpaidamt(0);
        setbillDate()
        setmodifieddate(new Date().toISOString().slice(0, 10))
    };



     const handaleSubmit = (e) => {
       e.preventDefault();
         const data={
          stockid:itemid,
          billNo:billid,
          itemName:itemname,
          itemType:item,
          vendorName:vendor,
          billDate:billDate,
          unitCost:unitcost,
          quantity:qty,
          projectedCost:estimatedamt,
          discountCost:discountamt,
          actualCost:paidamt,
          modifiedDate:modifieddate,
          pendingamount:balamt
         }
            axios.post("http://localhost:7000/api/v1/stock/modifystockentry",data)
                .then((res) => {
                    alert("Stock Entry has been Modified Successfully");
                    setVisiblity('none');
                    setmainsvisibility('contents');
                    setdiscountamt(0);
                    setpaidamt(0);
                    setcashentrydate()
                    setmodifieddate(new Date().toISOString().slice(0, 10))
                    setbillDate()
                    setunitcost(0)
                    setqty(0)
                    setestimatedamt(0)
                    setbillid("")
                    setitemid("")
                    setitemname("")
                    setvendor("")
                    setitem("")
                    // props.setStockData(res.data.data)
                    setVisible('none')
                    

                })
                .catch((err) => {
                    console.log(err);
                })
        
    };

     useEffect(()=>{
         if(item) {
             axios.post("http://localhost:7000/api/v1/stock/getitemnamebytype", {itemType:item})
                 .then((res) => {
                     setItemNames(res.data.data);
                 })
                 .catch((err) => {
                     console.log(err);
                 })
         }
     },[item])
    const handleItemtype = (e) => {
        setitem(e.target.value);
        axios.post("http://localhost:7000/api/v1/stock/getitemnamebytype", {itemType:e.target.value})
            .then((res) => {
                setItemNames(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div style={{display:visible}}>
            <div style={{display: mainsvisibility}}>
            <table className="table-60">
                <thead >
                <button style={{position:'relative',marginTop:'-40px'}} className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
                <tr>
                    <th>Entry Id</th>
                    <th>Bill / Memo No. </th>
                    <th>Bill / Memo Date</th>
                    <th>Cash Entry</th>
                    <th>Item Name</th>
                    {/* <th>Item Type</th>
                    <th>Vendor Name</th> */}  
                    <th>Per Unit Cost</th>
                    <th>Quantity</th>
                    {/* <th>Estimated Price</th> */}
                    <th>Discounted Amount</th>
                    <th>Actual Paid Amount</th>
                    <th>Balance Amount</th>
                    <th>Primary Stock Entry Date</th>
                    <th>Cash Entry Date</th> 
                    <th>Action</th>
                    
                </tr>
                </thead>
                <tbody style={{display: mainsvisibility}}>
                {viewStock.map((item) => (
                    <tr key={item.stock_id}>
                        <td>{item.stock_id}</td>
                        <td>{item.bill_id}</td>
                        <td>{item.bill_date.slice(0,10)}</td>
                        <td><input type='checkbox' checked={item.cash_entry_flag === 1 ? true : false}></input></td>
                        <td>{item.item_Name}</td>
                        {/* <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td> */}
                       
                        <td>{item.unit_cost}</td>
                        <td>{item.quantity}</td>
                        {/* <td>{item.projected_cost}</td> */}
                        <td>{item.discounted_cost}</td>
                        <td>{item.paid_amount}</td>
                        <td>{item.pending_amount}</td>
                        <td>{item.primary_entry_date !==  null ? item.primary_entry_date.slice(0,10): null}</td>
                        <td>{item.stock_entry_date !==  null ? item.stock_entry_date.slice(0,10): null}</td>
                       
                        <td><button  className='dashboard-btn btn-warning' onClick={() => handleEdit(item)}>Edit</button></td>
                        
                    </tr>
                ))}
                </tbody>

                </table>
                {viewStock.length === 0 ? <div className="no-data">No Data Exists</div> : null}
            </div>
         
                {/* hidden tbody */}
            <div style={{display: visiblity,background:'blue'}} className="dashbrd-40-colm">
                <hr></hr>

                <form onSubmit={handaleSubmit}>
                    <p className="customize-centre">Edit Stock Details</p>

                    <div>
                        <label>Bill /Memo No.*</label>
                        <input
                            type="text"
                            value={billid}
                            onChange={(e) => setbillid(e.target.value)}
                            placeholder="Bill ID"
                            required={true}
                        />
                    </div>

                    <div>
                        <label>Item Type</label>
                        <select onChange={handleItemtype} value={item}>
                            <option value="">All</option>
                            {props.Item.map((data, idx) => (
                                <option value={data.item_Type} key={idx}>
                                    {data.item_Type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Item Name</label>
                        <select onChange={(e) => setitemname(e.target.value)} value={itemname}>
                            <option>All</option>
                            {itemNames.map((data, idx) => (
                                <option value={data.item_name} key={idx}>
                                    {data.item_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Vendor</label>
                        <select onChange={(e) => setvendor(e.target.value)} value={vendor}>
                            <option>All</option>
                            {props.Vendor.map((data, idx) => (
                                <option value={data.vendor_name} key={idx}>
                                    {data.vendor_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Bill / Memo Date</label>
                        <input
                            type="date"
                            placeholder="Bill Entry date"
                            onChange={(e) => setbillDate(e.target.value)}
                            value={billDate}
                            required
                        />
                    </div>

                    <div>
                        <label>Per Unit Cost</label>
                        <input type="number"
                               value={unitcost}
                               placeholder='Unit Cost'
                               onChange={(e) => setunitcost(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="number" value={qty} placeholder='Quantity' onChange={(e) => setqty(e.target.value)}
                               required/>
                    </div>
                    <div>
                        <label>Estimated Amount</label>
                        <input type="number" value={estimatedamt} placeholder='Estimated Amount' required readOnly/>
                    </div>
                    <div style={{display: subdiscdisp}}>
                        <label>Discounted Amount</label>
                        <input type="number" value={discountamt} placeholder='Discounted Amount'
                               onChange={(e) => setdiscountamt(e.target.value)} required/>

                    </div>
                    <div style={{display: subpaiddisp}}>
                        <label>Already Paid Amount</label>
                        <input type="number" value={paidamt} placeholder='Paid Amount'
                               onChange={(e) => setpaidamt(e.target.value)}/>
                    </div>
                    <div style={{display: subbaldisp}}>
                        <label>Balance Amount</label>
                        <input type="number" value={balamt} placeholder='Balance Amount'
                               onChange={(e) => setbalamt(e.target.value)} readOnly/>
                    </div>

                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
                    <button type="submit" value="Update" className="dashboard-btn btn-warning"
                            onClick={cancelEdit}>Cancel
                    </button>

                </form>


            </div>


            {/*
                   <td>{estimatedamt}</td>          
                    <th>Action</th>      
                    <td>
                        <button type="submit" value="Update" className="dashboard-btn btn-warning" onClick={handaleSubmit}
                                >Proceed
                        </button>     
                    </td>
                </tr> */}


        </div>
    )
}
export default ModifyStockEntryView;