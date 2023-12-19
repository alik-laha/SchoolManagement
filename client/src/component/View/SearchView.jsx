import axios from "axios";
import { useState } from "react";
import '../Dashboard/Dashboard.css'

const SearchView = ({ data,View}) => {
  const [visiblity, setVisiblity] = useState("none");
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");

  const handleEdit = (data) => {
    setVisiblity("block");
    setid(data.user_id);
    setname(data.user_name);
    setrole(data.roletype_name);
    setpassword(data.user_password);
  };
  console.log(View)

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
    <div style={{ display: View }}>
      <table className="table-60">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.user_id}>
              <td>{item.user_id}</td>
              <td>{item.user_name}</td>
              <td>{item.roletype_name} </td>
              <td>
                <button className='dashboard-btn btn-warning' onClick={() => handleEdit(item)}>Edit</button>
                <button className='dashboard-btn btn-warning'
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
      </table>
      <div style={{ marginLeft: "30px", display: visiblity }}>
        <form onSubmit={handaleSubmit}>
          <label>User Id</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
          <label>User Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label>User Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setrole(e.target.value)}
          />
          <label>User Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};
export default SearchView;
