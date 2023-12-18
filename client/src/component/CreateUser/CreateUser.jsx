import "./Ceateuser.css";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = ({showCreate}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [allRoles, setAllRoles] = useState([]);

  let dataFetch = () => {
    fetch("http://localhost:7000/api/v1/getallrole", {
      headers: {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },

    })
      .then((res) => res.json())
      .then((data) => {
        setAllRoles(data.data);
      })
      .catch((error) => {
        console.log("check the backend", error);
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);
  const handaleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: 1,
      name: name,
      password: password,
      role: role,
    };
    axios.post("http://localhost:7000/api/v1/create", user).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <div >
      <form onSubmit={handaleSubmit} style={{display:showCreate}}>
        <div className="dashbrd-40-colm">
          <label>User ID</label>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        </div>
        
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <select onChange={(e) => setRole(e.target.value)}>
          <option value="">Role</option>
          {allRoles.map((data) => (
            <option value={data.roletype_name} key={data.roletype_name}>
              {data.roletype_name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      </div>
      
    </>
  );
};
export default CreateUser;
