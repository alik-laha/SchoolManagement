import { useEffect, useState } from "react";

// To use confirm dialog
import axios from "axios";
const Getall = (props) => {
  const [visiblity, setVisiblity] = useState("none");
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  const [mainsvisibility,setmainsvisibility]=useState("contents")

  const handleEdit = (data) => {
    setVisiblity("contents");
    setmainsvisibility('none')
    setid(data.user_id);
    setname(data.user_name);
    setrole(data.roletype_name);
    setpassword(data.password);
  };

  const [all, setAll] = useState([]);
  let dataFetch = () => {
    fetch("http://localhost:7000/api/v1/getall", {
      headers: {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAll(data.data);
      })
      .catch((error) => {
        setAll("check the backend", error);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);
  const handaleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/api/v1/update", {
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
    window.location.reload();
  };
  const handleDelete = (user_id) => {
    axios
      .post("http://localhost:7000/api/v1/delete", { user_id })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <div style={{ display: props.View }}>
      <table className="table-60">
        <thead style={{display:mainsvisibility}}>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody style={{display:mainsvisibility}}>
          {all.map((item) => (
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


        <thead style={{display:visiblity}}>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Role</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody style={{display:visiblity}}>

                  <tr>
                    <td>  
                      <input type="number" value={id} onChange={(e) => setid(e.target.value)}/> 
                    </td>
                    <td>
                     <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
                    </td>

                    <td>
                     <input type="text" value={role} onChange={(e) => setname(e.target.value)}/>
                    </td>
                    <td>
                     <input type="text" value={password} onChange={(e) => setname(e.target.value)}/>
                    </td>
                    <td><button type="submit" value="Update" className="dashboard-btn btn-warning" onClick={handaleSubmit}>Update</button></td>
                  </tr>

        


        </tbody>

{/* hidden tbody */}

      </table>


    </div>
  );
};
export default Getall;
