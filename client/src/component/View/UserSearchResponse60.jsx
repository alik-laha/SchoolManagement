import {useState,useEffect} from 'react'
import axios from 'axios'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserSearchResponse60=(props)=>{
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
            .post("http://localhost:7000/api/v1/deleteuser", {user_id})
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
    };


    const handaleSubmit = (e) => {
        e.preventDefault();
        if(!name || !password || !role){
            alert("Please fill all the fields")
            return
        }
        axios
            .post("http://localhost:7000/api/v1/updateuser", {
                id,
                name,
                password,
                role,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        alert("User Updated Successfully");
        if(disp==="block"){
            setdisp("none");
        }
        setVisiblity("none");
        setmainsvisibility('contents')
    };
    const handleEdit = (data) => {
        setVisiblity("contents");
        setmainsvisibility('none')
        setid(data.user_id);
        setname(data.user_name);
        setrole(data.roletype_name);
        setpassword(data.password);
    };
    return (
        <div style={{display: disp}}>
            <button className="dashboard-btn dashboard-btn-scss excel-btn" onClick={clearTable}>Clear Result</button>
            <table className="table-60">
                <thead style={{display: mainsvisibility}}>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User Role</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody style={{display: mainsvisibility}}>
                {view.map((item) => (
                    <tr key={item.user_id}>
                        <td>{item.user_id}</td>
                        <td>{item.user_name}</td>
                        <td>{item.roletype_name}</td>
                        <td>
                            <button className='dashboard-btn btn-warning' onClick={() => handleEdit(item)}>Edit</button>
                            <button className="dashboard-btn btn-warning"
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

                {/* hidden tbody */}


                <thead style={{display: visiblity}} id='hidden-table-60'>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User Role</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>


                <tbody style={{display: visiblity}} >

                <tr>
                    <td>{id}</td>
                    
                    <td>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)} required={true}/>
                    </td>

                    <td>
                        <select onChange={(e) => setrole(e.target.value)} value={role}>
                            <option >All</option>
                            {allRoles.map((data,index) => (
                                <option value={data.roletype_name} key={index}>
                                    {data.roletype_name}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td>
                        
                           
                                <input
                                    type={passVisi}
                                    placeholder="Password"
                                    
                                    value={password}
                                    onChange={(e)=>{
                                       setpassword( e.target.value)
                                    }} 
                                />
                                <button
                                    onClick={passwordSee}
                                  
                                >
                                    {change}
                                </button>
                            
                        
                    </td>
                    <td>
                        <button type="submit" value="Update" className="dashboard-btn btn-warning"
                                onClick={handaleSubmit}>Update
                        </button>
                        <button type="submit" value="Update" className="dashboard-btn btn-warning"
                                onClick={cancelEdit}>Cancel
                        </button>
                    </td>

                </tr>


                </tbody>

                {/* hidden tbody */}

            </table>
            {view.length===0 ? <div className="no-data">No Data Exists</div> : null}


        </div>
    )
}
export default UserSearchResponse60;