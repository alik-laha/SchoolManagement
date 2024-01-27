import "../Dashboard/Dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = ({showCreate,AllRoles}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [dOB,setdOB]=useState('');
  const [suceessflag,setsuceessflag]= useState('none');

  const handaleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:7000/api/v1/createuser", {name,password,role,dOB}).then((res) => {
      alert(`User [${name}] has been Created Successfully`);
      if(res.status==='success' && suceessflag==='none'){
        setsuceessflag('block');
      }
        setName("");
        setPassword("");
        setRole("");
        setdOB('');
  }).catch(err=>{
    if(err.response.data.msg.errno===1062){
      alert(`User [${name}] Already Exists`)
    }
    })
    ;}

  return (
    <>
      <div className="dashbrd-40-colm">
      <form onSubmit={handaleSubmit} style={{display:showCreate}}>
        <div >
          <label>Create User Name</label>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        </div>
        <div >
          <label>Create Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        </div>

        <div >
          <label>Date Of Birth</label>
        <input
          type="date"
          placeholder="Date of Birth"
          onChange={(e) => setdOB(e.target.value)}
          value={dOB}
          required
        />
        </div>

        <div>
        <label>Create Role</label>
        <select onChange={(e) => setRole(e.target.value)} required value={role}>
          <option value="">Role</option>
          {AllRoles.map((data) => (
            <option value={data.roletype_name} key={data.roletype_name}>
              {data.roletype_name}
            </option>
          ))}
        </select>
        </div>

        <span>
        <button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button>
            </span>
            <span style={{display:suceessflag}}>User Created Successfully</span>
      </form>
      
      </div>
      
    </>
  )
};


export default CreateUser;
