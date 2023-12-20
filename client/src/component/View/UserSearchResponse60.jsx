import {useState,useEffect} from 'react'
import axios from 'axios'


const UserSearchResponse60=(props)=>{
    const [allData,setAllData]=useState([])
    const [view,setView]=useState([])
    const [visiblity, setVisiblity] = useState("none");
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [role, setrole] = useState("");
    const [password, setpassword] = useState("");
    const [mainsvisibility,setmainsvisibility]=useState("contents")


    //searched data
    useEffect(() => {
        if(props.data!==undefined && props.data.length>0){
            setView(props.data)
        }
        else {
            setView(allData)
        }
    }, [props.data]);
    const handleDelete = (user_id) => {
        axios
            .post("http://localhost:7000/api/v1/deleteuser", { user_id })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload();
    };

    const cancelEdit =() =>{
        setVisiblity('none');
        setmainsvisibility('contents');
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
        window.location.reload();
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
        <div style={{display: props.View}}>
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
                                            "Do you really want to delete this User?"
                                        );
                                        if (confirmBox === true) {
                                            handleDelete(item.user_id);
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
                        <input type="text" value={role} onChange={(e) => setrole(e.target.value)} required={true}/>
                    </td>
                    <td>
                        <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} required={true}/>
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


        </div>
    )
}
export default UserSearchResponse60