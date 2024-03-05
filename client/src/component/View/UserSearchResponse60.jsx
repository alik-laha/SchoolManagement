import {useState,useEffect} from 'react'
import axios from 'axios'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const UserSearchResponse60=(props)=>{
    const currDate = new Date().toLocaleDateString();
    const [allData,setAllData]=useState([])
    const [view,setView]=useState([])
    const [visiblity, setVisiblity] = useState("none");
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [role, setrole] = useState("");
    const [password, setpassword] = useState("");
    const [mainsvisibility,setmainsvisibility]=useState("contents")
    const [allRoles, setAllRoles] = useState([]);
    const [passVisi, setPassVisi] = useState("password");
    const [disp,setdisp]=useState("none")
    const [confirmPass,setConfirmPass]=useState("")

    

    const clearTable = () => {
        setView([]);
      };

    let change;
    if (passVisi === "password") {
        change = <FaEye />;
    } else {
        change = <FaEyeSlash />;
    }
    const passwordSee = (e) => {
        e.preventDefault();
        if (!password) {
            setPassVisi("password");
        } else {
            if (passVisi === "password") {
                setPassVisi("text");
            } else {
                setPassVisi("password");
            }
        }
    }
    useEffect(() => {
        if(props.data!==undefined && props.data.length>0){
            setView(props.data)
        }
        else {
            setView(allData)
        }
    }, [props.data]);

    useEffect(() => {
        if(props.View==='block' && props.UserView==='block' && props.data.length>0){
            setdisp('block')
        }
        else {
            setdisp('none')
        }
        console.log(props.View)
        console.log(disp)
    }, [props.View,props.UserView,props.data]);

    useEffect(() => {
        setAllRoles(props.AllRoles)
    }, [props.AllRoles]);

    const handleDelete = (user_id,userName) => {
        axios
            .post("/api/v1/deleteuser", {user_id},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                alert("User: "+userName+" Deleted Successfully");
            })
            .catch((error) => {
                console.log(error);
            });

            if(disp==="block"){
                setdisp("none");
            }
    };

    const cancelEdit =() =>{
        setVisiblity('none');
        setmainsvisibility('contents');
        setPassVisi("password")
        setid("")
        setname("")
        setpassword("")
        setConfirmPass("")
    };


    const handaleSubmit = (e) => {
        e.preventDefault();
        if(!name || !role){
            alert("Please fill all the fields")
            return
        }
        if(confirmPass!==password){
            setConfirmPass("")
            alert("Password Does not Match")
            return;
        }
        axios
            .post("/api/v1/updateuser", {
                id,
                name,
                password,
                role,
            },{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                console.log(res);
                
                if(res.data.errno===1062)
                {
                    alert("User Name Already Exists");
                    return;
                }
                alert("User has been Updated Successfully");
                setdisp("none");
                setid("")
                setname("")
                setpassword("")
                setVisiblity("none");
                setmainsvisibility('contents')
                setPassVisi("password")
                
            })
            .catch((error) => {
                console.log(error);
            });

    };
    const handleEdit = (data) => {
        setVisiblity("contents");
        setmainsvisibility('none')
        setid(data.user_id);
        setname(data.user_name);
        setrole(data.roletype_name);
        // setpassword(data.password);
        
    };


    
    return (
        <div style={{display: disp}}>
              
            
            <table className="table-60">
                
                <thead style={{display: mainsvisibility}}>
                <tr style={{display:'table-caption'}}>
                <ReactHTMLTableToExcel
                id="indranil"
                className="dashboard-btn excel-btn user-profile-export"
                table="User-Profile"
                filename={"User_Profile_Report_"+currDate}
                sheet="tablexls"
                buttonText="Excel Export"
                
                
            />
              
                <button style={{marginTop:'-40px',float:'left'}} className="dashboard-btn dashboard-btn-scss " onClick={clearTable}> Clear Result </button>
                </tr>
                <tr>
                    <th>Sl. No.</th>
                    <th>User Name</th>
                    <th>User Role</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody style={{display: mainsvisibility}}>
                {view.map((item,index) => (
                    
                    <tr key={index}>
                        <td style={{width:'10%'}}>{index+1}</td>
                        <td>{item.user_name}</td>
                        <td>{item.roletype_name}</td>
                        <td style={{width:'20%'}}>
                            <button className='dashboard-btn btn-warning fix-width' onClick={() => handleEdit(item)}>Edit</button>
                            <button className='dashboard-btn btn-warning fix-width'
                                    onClick={() => {
                                        const confirmBox = window.confirm(
                                            "Do you really want to delete this User: "+item.user_name +"?"
                                        );
                                        if (confirmBox === true) {
                                            handleDelete(item.user_id, item.user_name);
                                        }
                                    }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>

                
            </table>
            {view.length===0 ? <div className="no-data">No Data Exists</div> : null}
            <div style={{ display: visiblity }} className="dashbrd-40-colm special-25-div">
                    <button style={{ marginBottom: '8px' }} onClick={cancelEdit} className="dashboard-btn dashboard-btn-scss">Back</button>
                    <hr></hr>
                    <form style={{ display: 'grid', color: '#3c8dbc', backgroundColor: 'azure', boxShadow: '0 0 5px grey' }}>
                        <p style={{ fontSize: '17px' }} className="customize-centre">Edit User Details</p>
                        <dl class="dl-horizontal">
                        <dt><label>User Name</label></dt>
                        <dd> <input type="text" value={name} onChange={(e) => setname(e.target.value)} required={true} /></dd>
                        <dt><label>User Role</label></dt>
                        <dd><select onChange={(e) => setrole(e.target.value)} value={role}>
                            <option >All</option>
                            {allRoles.map((data, index) => (
                                <option value={data.roletype_name} key={index}>
                                    {data.roletype_name}
                                </option>
                            ))}
                        </select></dd>
                        <dt><label>Reset Password</label></dt>
                        <dd>
                        <section style={{ display: "flex" }}>
                        <input
                            type={passVisi} style={{width:'85%'}} placeholder="Enter New Password" value={password} 
                            onChange={(e) => {setpassword(e.target.value) }}/>
                            <button style={{width:'15%',paddingLeft:'4%',border:'1px solid #ccc',borderColor:'#d2d6de',background:'white'}} onClick={passwordSee}>{change}</button>
                        </section>
                            
                            </dd>
                        <dt><label>Confirm </label></dt>
                        <dd> <input type="password" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)} placeholder="Confirm New Password" /></dd>
                        </dl>
                        <span><button type="submit" value="Update" className="dashboard-btn btn-warning"
                                onClick={handaleSubmit}>Update
                        </button></span>
                        


                    </form>
                </div>
            <table className="table-60" id='User-Profile' style={{display:'none'}}>
            <thead style={{display: mainsvisibility}} id='hidden-table-60'>
                <tr>
                    <th>Sl. No.</th>
                    <th>User Name</th>
                    <th>User Role</th>
                   
                </tr>
                </thead>
                <tbody style={{display: mainsvisibility}}>
                {view.map((item,index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.user_name}</td>
                        <td>{item.roletype_name}</td>
                       
                    </tr>
                ))}
                </tbody>
                
            </table>                        

        </div>
    )
}
export default UserSearchResponse60;