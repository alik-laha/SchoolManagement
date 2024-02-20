import "../Dashboard/Dashboard.css";
import { useState } from "react";
import axios from "axios";

const CreateUser = ({showCreate,AllRoles}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  
  const [suceessflag,setsuceessflag]= useState('none');
  const [dialogusername,setdialogusername]= useState("");

  const dialog = document.getElementById('userDialog');
    const closeDialogButton = document.getElementById('closeUserDialog');
    if(closeDialogButton){
        closeDialogButton.addEventListener('click', () => {
            dialog.close();
          });
    }

  const handaleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/v1/createuser", {name,password,role},{headers:{"Authorization":localStorage.getItem("token")}}).then((res) => {
      setdialogusername(name)
      dialog.showModal();
      //alert(`User [${name}] has been Created Successfully`);
      if(res.status==='success' && suceessflag==='none'){
        setsuceessflag('block');
      }
        setName("");
        setPassword("");
        setRole("");
        
  }).catch(err=>{
    if(err.response.data.msg.errno===1062){
      alert(`User [${name}] Already Exists`)
    }
    })
    ;}

  return (
    <>
      <div className="dashbrd-40-colm">
      <form onSubmit={handaleSubmit} style={{display:showCreate,color:'#3c8dbc',backgroundColor:'azure',boxShadow:'0 0 5px grey'}}>
      <p style={{fontSize:'17px'}}>User Details</p>
          <dl class="dl-horizontal">

            <dt><label>Create User Name</label></dt>
            <dd> <input
              type="text"
              placeholder="User Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            /></dd>
            <dt> <label>Create Password</label></dt>
            <dd><input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            /></dd>


            <dt> <label>Create Role</label></dt>
            <dd><select onChange={(e) => setRole(e.target.value)} required value={role}>
              <option value="">Role</option>
              {AllRoles.map((data) => (
                <option value={data.roletype_name} key={data.roletype_name}>
                  {data.roletype_name}
                </option>
              ))}
            </select></dd>
          </dl>
      
       

      


        <span>
        <button className="dashboard-btn dashboard-btn-scss" type="submit">Submit</button>
            </span>
            <span style={{display:suceessflag}}>User Created Successfully</span>
      </form>
      <dialog id="userDialog" class="dashboard-modal">
                <button id="closeUserDialog" class="dashboard-modal-close-btn ">X </button>
                <p id="modal-text" style={{color:'black'}}> New User with UserName : <p className={{color:'red!important'}}>{dialogusername}</p> has Created Successfully</p>
                {/* <!-- Add more elements as needed --> */}
            </dialog>
      </div>
      
    </>
  )
};


export default CreateUser;
