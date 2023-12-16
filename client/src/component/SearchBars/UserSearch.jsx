import { useState } from "react";
import axios from "axios";
const UserSearch = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/api/v1/search", { id, name, role })
      .then((res) => {
        props.result(res.data.data);
      });
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
export default UserSearch;
