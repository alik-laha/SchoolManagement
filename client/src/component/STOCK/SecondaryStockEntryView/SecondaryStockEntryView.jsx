import {useEffect, useState} from "react";
import axios from "axios";
const SecondaryStockEntryView= (props) => {

    const [viewStock,setViewStock]=useState([])
    const [visible,setVisible]=useState("none")
    const [visiblity, setVisiblity] = useState("none");
    const [mainsvisibility,setmainsvisibility]=useState("contents")
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
        console.log(props.sec,props.view)
        if (props.secondarystocksearch === "block" && props.view === "block") {
            setVisible("block")
        }
        else {
            setVisible("none")
        }
    },[props.secondarystocksearch,props.view])

    const handleEdit = (data) => {
        setVisiblity("contents");
        setmainsvisibility('none')
        
    };
    const cancelEdit =() =>{
        setVisiblity('none');
        setmainsvisibility('contents');
    };



    // const handaleSubmit = (e) => {
    //     e.preventDefault();
    //     if(!name || !password || !role){
    //         alert("Please fill all the fields")
    //         return
    //     }
    //     axios
    //         .post("http://localhost:7000/api/v1/updateuser", {
    //             id,
    //             name,
    //             password,
    //             role,
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     alert("User Updated Successfully");
    //     window.location.reload();
    // };

    return (
        <div style={{display:visible}}>
            <table className="table-60">
                <thead style={{display: mainsvisibility}}>
                <tr>
                    <th>Item Id</th>
                    <th>Bill Id</th>
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
                        <td>{item.item_Name}</td>
                        <td>{item.item_Type}</td>
                        <td>{item.vendor_name}</td>
                        <td>{item.bill_date.slice(0,10)}</td>
                        <td>{item.unit_cost}</td>
                        <td>{item.quantity}</td>
                        <td>{item.projected_cost}</td>
                        <td><button className='dashboard-btn btn-warning' onClick={() => handleEdit(item)}>Cash Entry</button></td>
                        
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
                    <th>Paid Amount</th>
                    <th>Cash Entry Date</th>
                    <th>Modified Entry Date</th>
                    <th>Action</th>
                </tr>
                </thead>


                <tbody style={{display: visiblity}} >
                    
                <tr>
                    {/* <td>{id}</td>
                    
                    <td>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} required={true}/>
                    </td>

                    <td>
                        <select onChange={(e) => setrole(e.target.value)} value={role}>
                            <option >Role</option>
                            {allRoles.map((data) => (
                                <option value={data.roletype_name} key={data.roletype_name}>
                                    {data.roletype_name}
                                </option>
                            ))}
                        </select>
                    </td> 
                    <td>
                        <input type="text" value={password} onChange={(e) => setpassword(e.target.value)}
                               required={true}/>
                    </td>*/}
                    <td>
                        <button type="submit" value="Update" className="dashboard-btn btn-warning"
                                >Entry
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
export default SecondaryStockEntryView;