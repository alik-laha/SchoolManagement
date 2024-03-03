import {useState,useEffect} from "react";
import axios from "axios";


const CreateItem = (props) => {
    const [item,setItem]=useState("")


    useEffect(() => {
        handaleitemCreate()
    }, [])

    const handleCreateItem = (e) => {
        e.preventDefault()
        axios.post("/api/v1/stock/createitem",{
            item:item
        },{headers:{"Authorization":localStorage.getItem("token")}}).then((response)=>{
            setItem("")
            alert(`Item Type Created with Name ${item}`)
            {handaleitemCreate()}
            
        })
        .catch((err) => {
            if(err.response.data.message.errno === 1062){
               alert("Item Type " + item+" Already Exists");
            }
            setItem("")

       })


    }

    const handaleitemCreate=()=>{
        axios.get("/api/v1/stock/getallitem",{headers:{"Authorization":localStorage.getItem("token")}})
            .then((data)=>{
                props.setItemData(data.data.data);
            })

    }
    // const handaleitem=()=>{
    //     axios.post("/api/v1/stock/getallitem")
    //         .then((data)=>{
    //             props.setItemData(data.data.data);
    //         })
    //     props.handleItemView("block")
    // }

    return(
        <div style={{display:props.itemCreateView}} className="dashbrd-40-colm">
            <form onSubmit={handleCreateItem} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
            <p style={{fontSize:'17px'}}>Create New Item Type </p>
            <dl class="dl-horizontal">

                <dt><label>Create Item Type</label></dt>
                <dd>
                <input type="text" placeholder="Create Item" onChange={(e)=>setItem(e.target.value)} value={item} required/>
                </dd>
            </dl>
          
            <span><button className="dashboard-btn dashboard-btn-scss" type="submit">Create Item Type</button></span>

        </form>
                <div>
                <button style={{backgroundColor: 'lightseagreen',marginTop:'20px'}} className="dashboard-btn dashboard-btn-scss" onClick={handaleitemCreate}>
                View / Delete Item Type
                </button>
            </div>
   
                {/* <div>
                    <button style={{backgroundColor:'orange'}} className="dashboard-btn dashboard-btn-scss" onClick={handaleitemCreate}></button>
                </div> */}
            
        </div>
    )
}
export default CreateItem;