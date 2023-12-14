import { useState } from "react";
import axios from "axios";

const CreateRole = () => {
  const [role, setRole] = useState("");
  const handaleSubmit = (e) => {
    e.preventDefault();
    const user = {
      role: role,
    };
    axios.post("http://localhost:7000/api/v1/createrole", user).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <form onSubmit={handaleSubmit}>
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
export default CreateRole;
