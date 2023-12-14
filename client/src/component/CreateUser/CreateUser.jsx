import "./Ceateuser.css";
import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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
      <form onSubmit={handaleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="text"
          placeholder="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default CreateUser;
